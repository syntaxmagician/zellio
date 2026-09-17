import TeamPageClient from "./TeamPageClient";
import { getRequestLocale } from "@/lib/locale";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata() {
  const locale = await getRequestLocale();
  return pageMetadata("team", locale,
    locale === "id" ? "Tim Pengembang ZELLIO" : "Meet the ZELLIO Engineering Team",
    locale === "id" ? "Kenali tim ZELLIO, pengalaman pengembang, dan pendekatan kami dalam membangun website, aplikasi, serta sistem bisnis." : "Meet the ZELLIO team and learn how our engineers build websites, applications, and business systems."
  );
}

export default function Page() { return <TeamPageClient />; }
