import { getRequestLocale } from "@/lib/locale";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata() {
  const locale = await getRequestLocale();
  return pageMetadata("cookie-policy", locale,
    locale === "id" ? "Kebijakan Cookie" : "Cookie Policy",
    locale === "id" ? "Informasi penggunaan cookie pada website ZELLIO." : "Information about how cookies are used on the ZELLIO website."
  );
}

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
