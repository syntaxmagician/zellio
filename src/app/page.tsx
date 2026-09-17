import HomePageClient from "./HomePageClient";
import { getRequestLocale } from "@/lib/locale";
import { pageMetadata } from "@/lib/seo";
import StructuredData from "@/components/seo/StructuredData";
import { website } from "@/lib/structured-data";

export async function generateMetadata() {
  const locale = await getRequestLocale();
  return pageMetadata("", locale,
    locale === "id" ? "Software House Indonesia: Website, Aplikasi & ERP" : "Software House Indonesia: Websites, Apps & ERP",
    locale === "id"
      ? "ZELLIO adalah software house Indonesia untuk pembuatan website, aplikasi Android & iOS, ERP, CRM, dan HRIS kustom. Lihat portofolio dan diskusikan proyek Anda."
      : "ZELLIO is an Indonesian software house building custom websites, mobile apps, ERP, CRM, and HRIS systems. Explore our portfolio and discuss your project."
  );
}

export default function Page() {
  return <><StructuredData data={website} /><HomePageClient /></>;
}
