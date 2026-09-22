import type { Metadata } from "next";

export const BASE_URL = "https://zellio.id";

/**
 * Normalizes relative path by stripping leading and trailing slashes.
 */
export function normalizePath(path = ""): string {
  return path.replace(/^\/+|\/+$/g, "");
}

/**
 * Returns the absolute canonical URL for a specific path and locale.
 * Default locale ('id') produces clean root paths (e.g. https://zellio.id/portfolio),
 * while 'en' produces /en prefixed paths (e.g. https://zellio.id/en/portfolio).
 */
export function getCanonicalUrl(path = "", locale: "id" | "en" = "id"): string {
  const clean = normalizePath(path);
  if (locale === "en") {
    return clean ? `${BASE_URL}/en/${clean}` : `${BASE_URL}/en`;
  }
  return clean ? `${BASE_URL}/${clean}` : BASE_URL;
}

/**
 * Returns full alternates configuration for Next.js metadata,
 * including self-referencing canonical and reciprocal hreflang tags.
 */
export function getLanguageAlternates(path = "", locale: "id" | "en" = "id") {
  const clean = normalizePath(path);
  const idUrl = clean ? `${BASE_URL}/${clean}` : BASE_URL;
  const enUrl = clean ? `${BASE_URL}/en/${clean}` : `${BASE_URL}/en`;

  return {
    canonical: locale === "en" ? enUrl : idUrl,
    languages: {
      id: idUrl,
      en: enUrl,
      "x-default": idUrl,
    },
  };
}

/**
 * Returns absolute URL for OpenGraph / Schema structured data.
 */
export function absoluteUrl(path = "", locale: "id" | "en" = "id"): string {
  return getCanonicalUrl(path, locale);
}

export function localizedPath(path: string, locale: "id" | "en") {
  const clean = path.replace(/^\/(?:en|id)(?=\/|$)/, "");
  return `${locale === "en" ? "/en" : ""}${clean === "/" ? "" : clean}` || "/";
}

export function pageMetadata(path: string, locale: "id" | "en", title: string, description: string): Metadata {
  const brandedTitle = /\bZELLIO\b/i.test(title)
    ? title
    : path ? `${title} | ZELLIO` : `ZELLIO — ${title}`;
  return {
    title: { absolute: brandedTitle },
    description,
    alternates: getLanguageAlternates(path, locale),
    openGraph: {
      title: brandedTitle, description, url: absoluteUrl(path, locale),
      siteName: "ZELLIO", locale: locale === "id" ? "id_ID" : "en_US",
      alternateLocale: locale === "id" ? "en_US" : "id_ID", type: "website",
      images: [{ url: "/compro-cover.jpg", width: 1200, height: 630, alt: "ZELLIO — Software House Indonesia" }],
    },
    twitter: { card: "summary_large_image", title: brandedTitle, description, images: ["/compro-cover.jpg"] },
  };
}
