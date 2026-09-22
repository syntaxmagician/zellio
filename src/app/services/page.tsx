import ServicesPageClient from "./ServicesPageClient";
import { getRequestLocale } from "@/lib/locale";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata() {
  const locale = await getRequestLocale();
  return pageMetadata("services", locale,
    locale === "id" ? "Layanan Pembuatan Website, Aplikasi & Sistem Bisnis" : "Website, App & Business Software Development",
    locale === "id" ? "Jasa pembuatan website, aplikasi mobile, ERP, CRM, HRIS, dan platform SaaS oleh ZELLIO. Pilih layanan sesuai kebutuhan bisnis Anda." : "Explore custom websites, mobile apps, ERP, CRM, HRIS, and SaaS development by ZELLIO. Find the right service for your business."
  );
}

export default function Page() { return <ServicesPageClient />; }
