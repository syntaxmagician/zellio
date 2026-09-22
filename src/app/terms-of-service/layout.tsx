import { getRequestLocale } from "@/lib/locale";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata() {
  const locale = await getRequestLocale();
  return pageMetadata("terms-of-service", locale,
    locale === "id" ? "Syarat & Ketentuan" : "Terms of Service",
    locale === "id" ? "Syarat dan ketentuan penggunaan layanan ZELLIO." : "Terms and conditions for using ZELLIO services."
  );
}

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
