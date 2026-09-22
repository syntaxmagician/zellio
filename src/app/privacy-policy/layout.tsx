import { getRequestLocale } from "@/lib/locale";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata() {
  const locale = await getRequestLocale();
  return pageMetadata("privacy-policy", locale,
    locale === "id" ? "Kebijakan Privasi" : "Privacy Policy",
    locale === "id" ? "Kebijakan privasi ZELLIO mengenai pengumpulan, penggunaan, dan perlindungan informasi yang Anda bagikan." : "How ZELLIO collects, uses, and protects the information you share with us."
  );
}

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
