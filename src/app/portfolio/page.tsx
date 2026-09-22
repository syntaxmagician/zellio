import PortfolioPageClient from "./PortfolioPageClient";
import { getRequestLocale } from "@/lib/locale";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata() {
  const locale = await getRequestLocale();
  return pageMetadata("portfolio", locale,
    locale === "id" ? "Portofolio Website, Aplikasi & Sistem Bisnis" : "Website, App & Business Software Portfolio",
    locale === "id" ? "Lihat portofolio ZELLIO: pengembangan website, aplikasi web, dan sistem operasional beserta pendekatan dan teknologi yang digunakan." : "Explore ZELLIO projects: websites, web applications, and operational systems, including our approach and the technologies used."
  );
}

export default function Page() { return <PortfolioPageClient />; }
