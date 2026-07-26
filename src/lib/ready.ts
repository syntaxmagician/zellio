declare global {
  interface Window {
    __zellioReady?: boolean;
  }
}

/**
 * The intro loader gates the hero animations. Sections mount before the loader
 * finishes, so they need both a flag (did it already finish?) and an event
 * (tell me when it does) — a language switch remounts a section long after the
 * event has fired, and only the flag can answer that.
 */
export function markReady() {
  window.__zellioReady = true;
  window.dispatchEvent(new Event("zellio:ready"));
}

export function isReady() {
  return typeof window !== "undefined" && window.__zellioReady === true;
}
