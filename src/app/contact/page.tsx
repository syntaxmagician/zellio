import type { Metadata } from "next";
import { getLanguageAlternates, absoluteUrl } from "@/lib/seo";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project with ZELLIO — software house for websites, apps, and enterprise systems.",
  alternates: getLanguageAlternates("contact"),
  openGraph: {
    title: "Contact | ZELLIO",
    url: absoluteUrl("contact"),
    locale: "id_ID",
    type: "website",
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
