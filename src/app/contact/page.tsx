import type { Metadata } from "next";
import { canonicalPath } from "@/lib/seo";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project with ZELLIO — software house for websites, apps, and enterprise systems.",
  alternates: { canonical: canonicalPath("contact") },
  openGraph: {
    title: "Contact | ZELLIO",
    url: canonicalPath("contact"),
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
