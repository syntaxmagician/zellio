import type { Metadata } from "next";
import { getLanguageAlternates, absoluteUrl } from "@/lib/seo";
import TeamPageClient from "./TeamPageClient";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the ZELLIO engineering team building reliable digital products in Indonesia.",
  alternates: getLanguageAlternates("team"),
  openGraph: {
    title: "Team | ZELLIO",
    url: absoluteUrl("team"),
    locale: "id_ID",
    type: "website",
  },
};

export default function TeamPage() {
  return <TeamPageClient />;
}
