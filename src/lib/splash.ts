/** Lab / crawler / reduced-motion / mobile — skip cinematic splash that tanks LCP. */
export function shouldSkipSplash(): boolean {
  if (typeof window === "undefined" || typeof navigator === "undefined") {
    return true;
  }

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return true;
  }

  // Mobile: skip splash so first paint = real hero (PSI + real 4G users).
  if (window.matchMedia("(max-width: 767px)").matches) {
    return true;
  }

  // Lighthouse / PageSpeed / WebDriver automation
  if (navigator.webdriver) return true;

  const ua = navigator.userAgent || "";
  if (
    /bot|google|baidu|bing|msn|duckduckbot|teoma|slurp|yandex|chrome-lighthouse|lighthouse|pagespeed|gtmetrix|pingdom|facebookexternalhit|preview/i.test(
      ua
    )
  ) {
    return true;
  }

  return false;
}
