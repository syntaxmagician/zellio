import type { Metadata } from "next";
import { canonicalPath } from "@/lib/seo";
import ServicesPageClient from "./ServicesPageClient";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom websites, web apps, mobile apps, ERP, CRM, HRIS, and SaaS engineering from ZELLIO.",
  alternates: { canonical: canonicalPath("services") },
  openGraph: {
    title: "Services | ZELLIO",
    url: canonicalPath("services"),
  },
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
