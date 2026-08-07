import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['en', 'id'];
const defaultLocale = 'en';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. If this request has already been processed and rewritten, skip to next middleware/router
  if (request.headers.has('x-next-locale')) {
    return NextResponse.next();
  }
  
  // 2. Skip public files, API, and Next.js internals
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.match(/\.[^/]+$/) // e.g., images, .xml, .txt
  ) {
    return NextResponse.next();
  }

  // 3. Check if path starts with a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (!pathnameHasLocale) {
    // Redirect to default locale (/en)
    const url = request.nextUrl.clone();
    url.pathname = `/${defaultLocale}${pathname === '/' ? '' : pathname}`;
    return NextResponse.redirect(url);
  }

  // 4. If path HAS locale (e.g. /en/services), rewrite to non-locale path (e.g. /services)
  const activeLocale = pathname.startsWith('/en') ? 'en' : 'id';
  let targetPath = pathname.replace(new RegExp(`^/${activeLocale}`), '');
  if (targetPath === '') targetPath = '/';

  const url = request.nextUrl.clone();
  url.pathname = targetPath;
  
  // Set headers in the rewritten request to prevent loop on subsequent runs
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-next-locale', activeLocale);

  const response = NextResponse.rewrite(url, {
    request: {
      headers: requestHeaders,
    }
  });
  
  // Optional: Set header on response as well
  response.headers.set('x-next-locale', activeLocale);
  return response;
}

export const config = {
  // Do not invoke Middleware on paths starting with _next, api, and files with extensions
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
