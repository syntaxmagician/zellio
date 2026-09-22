import { BASE_URL, absoluteUrl } from "./seo";

export const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${BASE_URL}/#organization`,
  name: "ZELLIO",
  alternateName: "Zellio",
  url: BASE_URL,
  logo: `${BASE_URL}/icon.png`,
  description: "ZELLIO adalah software house di Indonesia yang mengembangkan website, aplikasi mobile, dan sistem bisnis kustom.",
  sameAs: ["https://www.linkedin.com/company/zellio-id"],
};

export const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  name: "ZELLIO",
  alternateName: ["Zellio", "zellio.id"],
  url: BASE_URL,
  inLanguage: ["id", "en"],
  publisher: { "@id": organization["@id"] },
};

export function breadcrumbs(items: { name: string; path: string }[], locale: "id" | "en") {
  return {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem", position: index + 1, name: item.name,
      item: absoluteUrl(item.path, locale),
    })),
  };
}
