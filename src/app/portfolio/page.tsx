import type { Metadata } from "next";
import { canonicalPath } from "@/lib/seo";
import PortfolioPageClient from "./PortfolioPageClient";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Selected product engineering work by ZELLIO — websites, web apps, and internal systems.",
  alternates: { canonical: canonicalPath("portfolio") },
  openGraph: {
    title: "Portfolio | ZELLIO",
    url: canonicalPath("portfolio"),
  },
};

export default function PortfolioPage() {
  return <PortfolioPageClient />;
}
