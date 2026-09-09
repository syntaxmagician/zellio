import type { Metadata } from "next";
import { getLanguageAlternates, absoluteUrl } from "@/lib/seo";
import PortfolioPageClient from "./PortfolioPageClient";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Selected product engineering work by ZELLIO — websites, web apps, and internal systems.",
  alternates: getLanguageAlternates("portfolio"),
  openGraph: {
    title: "Portfolio | ZELLIO",
    description:
      "Selected product engineering work by ZELLIO — websites, web apps, and internal systems.",
    url: absoluteUrl("portfolio"),
    locale: "id_ID",
    type: "website",
  },
};

export default function PortfolioPage() {
  return <PortfolioPageClient />;
}
