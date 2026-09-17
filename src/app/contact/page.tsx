import ContactPageClient from "./ContactPageClient";
import { getRequestLocale } from "@/lib/locale";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata() {
  const locale = await getRequestLocale();
  return pageMetadata("contact", locale,
    locale === "id" ? "Konsultasi Proyek Website & Aplikasi" : "Discuss Your Website or App Project",
    locale === "id" ? "Diskusikan kebutuhan website, aplikasi, atau sistem bisnis Anda bersama ZELLIO. Ceritakan ruang lingkup, integrasi, dan target proyek Anda." : "Discuss your website, app, or business software project with ZELLIO. Share your scope, integrations, and project goals."
  );
}

export default function Page() { return <ContactPageClient />; }
