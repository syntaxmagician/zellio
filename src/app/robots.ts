import { MetadataRoute } from 'next';

const BASE_URL = "https://zellio.id";

/** Removed scaled SEO listicles — keep crawlers out of dead URLs. */
const removedInsightSlugs = [
  "7-tanda-website-lambat",
  "7-celah-maintenance-website",
  "flutter-vs-react-native-7-parameter",
  "7-jenis-bug-kritis-enterprise",
  "7-indikator-bisnis-siap-chatbot-ai",
  "7-fitur-wajib-dashboard-admin",
  "shopify-vs-woocommerce-7-perbedaan",
];

export default function robots(): MetadataRoute.Robots {
  const removedPaths = removedInsightSlugs.flatMap((slug) => [
    `/insights/${slug}`,
    `/en/insights/${slug}`,
    `/id/insights/${slug}`,
  ]);

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/admin/",
          "/DIGIFORE-Company-Profile.html",
          ...removedPaths,
        ],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
