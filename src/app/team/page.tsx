import type { Metadata } from "next";
import { canonicalPath } from "@/lib/seo";
import TeamPageClient from "./TeamPageClient";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the ZELLIO engineering team building reliable digital products in Indonesia.",
  alternates: { canonical: canonicalPath("team") },
  openGraph: {
    title: "Team | ZELLIO",
    url: canonicalPath("team"),
  },
};

export default function TeamPage() {
  return <TeamPageClient />;
}
