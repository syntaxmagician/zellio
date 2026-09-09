import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Skip Next.js internals, API routes, and static files
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.match(/\.[^/]+$/) // e.g. .ico, .png, .xml, .txt
  ) {
    return NextResponse.next();
  }

  // 2. Handle legacy /id prefix by permanently redirecting (301) to clean non-prefixed paths
  if (pathname === '/id' || pathname.startsWith('/id/')) {
    const cleanPath = pathname.replace(/^\/id(\/|$)/, '$1') || '/';
    const url = request.nextUrl.clone();
    url.pathname = cleanPath;
    return NextResponse.redirect(url, 301);
  }

  // 3. Handle /en paths: rewrite to underlying route with locale header 'en'
  if (pathname === '/en' || pathname.startsWith('/en/')) {
    let targetPath = pathname.replace(/^\/en(\/|$)/, '$1');
    if (!targetPath) targetPath = '/';

    const url = request.nextUrl.clone();
    url.pathname = targetPath;

    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-next-locale', 'en');

    const response = NextResponse.rewrite(url, {
      request: {
        headers: requestHeaders,
      },
    });
    response.headers.set('x-next-locale', 'en');
    return response;
  }

  // 4. Clean paths (e.g. /, /portfolio, /services) serve default Indonesian (id)
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-next-locale', 'id');

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
  response.headers.set('x-next-locale', 'id');
  return response;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
