import type { Metadata } from "next";
import { getLanguageAlternates, absoluteUrl } from "@/lib/seo";
import ServicesPageClient from "./ServicesPageClient";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom websites, web apps, mobile apps, ERP, CRM, HRIS, and SaaS engineering from ZELLIO.",
  alternates: getLanguageAlternates("services"),
  openGraph: {
    title: "Services | ZELLIO",
    description:
      "Custom websites, web apps, mobile apps, ERP, CRM, HRIS, and SaaS engineering from ZELLIO.",
    url: absoluteUrl("services"),
    locale: "id_ID",
    type: "website",
  },
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
