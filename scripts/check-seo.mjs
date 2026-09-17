import assert from 'node:assert/strict';

// Checks the delivered HTML rather than only metadata source code.
// Run against `npm run start -- --port 3100`, or pass the deployed origin.
const origin = (process.argv[2] || 'http://localhost:3100').replace(/\/$/, '');
const canonicalOrigin = 'https://zellio.id';
const decode = value => value?.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'");
const attr = (tag, name) => decode(tag.match(new RegExp(`(?:^|\\s)${name}="([^"]*)"`, "i"))?.[1]);
const tags = (html, name) => [...html.matchAll(new RegExp(`<${name}\\b[^>]*>`, 'g'))].map(m => m[0]);
const links = html => tags(html, 'link');
const meta = (html, name) => attr(tags(html, 'meta').find(tag => attr(tag, 'name') === name || attr(tag, 'property') === name) || '', 'content');
const schemas = html => [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map(m => JSON.parse(m[1]));
async function get(path, options = {}) {
  return fetch(`${origin}${path}`, { redirect: 'manual', signal: AbortSignal.timeout(30000), headers: { 'user-agent': 'Googlebot' }, ...options });
}

const sitemapResponse = await get('/sitemap.xml');
assert.equal(sitemapResponse.status, 200, 'sitemap status');
const sitemap = await sitemapResponse.text();
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => decode(m[1]));
assert(urls.length > 20, 'expected content URLs in sitemap');
assert.equal(new Set(urls).size, urls.length, 'duplicate sitemap URLs');
const byPath = new Map();
let checked = 0;
for (let offset = 0; offset < urls.length; offset += 4) {
  await Promise.all(urls.slice(offset, offset + 4).map(async url => {
    const path = new URL(url).pathname;
    const en = path === '/en' || path.startsWith('/en/');
    const clean = en ? path.replace(/^\/en/, '') || '/' : path;
    const response = await get(path);
    assert.equal(response.status, 200, `${path}: status`);
    const html = await response.text();
    assert.equal(attr(tags(html, 'html')[0], 'lang'), en ? 'en' : 'id', `${path}: HTML language`);
    const canonical = links(html).filter(tag => attr(tag, 'rel') === 'canonical');
    assert.equal(canonical.length, 1, `${path}: exactly one canonical`);
    assert.equal(attr(canonical[0], 'href'), url, `${path}: self canonical`);
    for (const [lang, expected] of [['id', `${canonicalOrigin}${clean === '/' ? '' : clean}`], ['en', `${canonicalOrigin}/en${clean === '/' ? '' : clean}`]]) {
      assert(urls.includes(expected), `${path}: alternate in sitemap`);
      assert(links(html).some(tag => attr(tag, 'hreflang') === lang && attr(tag, 'href') === expected), `${path}: ${lang} alternate`);
    }
    const title = decode(html.match(/<title>(.*?)<\/title>/)?.[1]);
    assert(title, `${path}: title`);
    assert(!/ZELLIO.*(?:\||—) ZELLIO$/.test(title), `${path}: repeated brand suffix`);
    assert(meta(html, 'description')?.length > 20, `${path}: description`);
    assert.equal(meta(html, 'og:url'), url, `${path}: Open Graph URL`);
    assert.equal(meta(html, 'og:title'), title, `${path}: Open Graph title`);
    assert.equal(meta(html, 'twitter:title'), title, `${path}: Twitter title`);
    assert(!meta(html, 'robots')?.includes('noindex'), `${path}: indexable`);
    assert(!tags(html, 'a').some(a => /^\/id(?:\/|$|#)/.test(attr(a, 'href') || '')), `${path}: no legacy navigation`);
    const data = schemas(html);
    assert(data.some(d => d['@type'] === 'Organization' && d.name === 'ZELLIO'), `${path}: organization`);
    if (clean === '/') assert(data.some(d => d['@type'] === 'WebSite' && d.name === 'ZELLIO'), `${path}: site name`);
    if (clean.startsWith('/services/')) {
      const service = data.find(d => d['@type'] === 'Service');
      assert(service, `${path}: service schema`);
      assert.equal(service.url, url, `${path}: service URL`);
      const h1 = decode(html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/)?.[1]?.replace(/<[^>]+>/g, ''));
      assert.equal(h1, service.name, `${path}: visible service matches schema`);
      assert(data.some(d => d['@type'] === 'BreadcrumbList' && d.itemListElement.at(-1).item === url), `${path}: breadcrumbs`);
    }
    byPath.set(path, { title, description: meta(html, 'description') });
    checked++;
  }));
}
for (const [path, data] of byPath) {
  if (path === '/en' || path.startsWith('/en/')) continue;
  const en = byPath.get(`/en${path === '/' ? '' : path}`);
  // Project names can legitimately be identical in both languages.
  assert.notEqual(data.description, en?.description, `${path}: localized descriptions differ`);
}
const redirect = await get('/id/services/custom-website-development?source=check');
assert.equal(redirect.status, 301, 'legacy URL redirects permanently');
assert.equal(new URL(redirect.headers.get('location'), origin).pathname, '/services/custom-website-development');
assert.equal(new URL(redirect.headers.get('location'), origin).search, '?source=check');
const missing = await get('/services/this-service-does-not-exist');
const missingHtml = await missing.text();
assert(missing.status === 404 || meta(missingHtml, 'robots')?.includes('noindex'), 'missing page excluded from indexing');
const normal = await get('/en/services/custom-website-development', { headers: { 'user-agent': 'Mozilla/5.0' } });
const normalHtml = await normal.text();
assert(normalHtml.includes('Custom Website Development'), 'English content without executing JavaScript');
assert.equal(attr(links(normalHtml).find(tag => attr(tag, 'rel') === 'canonical'), 'href'), `${canonicalOrigin}/en/services/custom-website-development`, 'normal browser canonical');
const spoofed = await get('/', { headers: { 'x-next-locale': 'en', 'user-agent': 'Googlebot' } });
assert.equal(attr(tags(await spoofed.text(), 'html')[0], 'lang'), 'id', 'URL determines language, not caller header');
console.log(`PASS: ${checked} sitemap URLs, localized HTML and metadata, canonical/hreflang, structured data, legacy redirect, missing route, browser response, and locale-header override.`);
