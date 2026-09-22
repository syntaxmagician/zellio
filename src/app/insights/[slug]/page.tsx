import { getRequestLocale } from "@/lib/locale";
import { insightsData } from "@/lib/insightsData";
import { pageMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";
import InsightPageClient from "./InsightPageClient";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const story = insightsData.find(s => s.slug === slug);
  
  if (!story) {
    return {
      title: "Story Not Found - ZELLIO",
    };
  }

  const path = `insights/${slug}`;

  const locale = await getRequestLocale();
  const copy = story[locale];
  const metadata = pageMetadata(path, locale, copy.title, copy.desc);
  return {
    ...metadata,
    openGraph: { ...metadata.openGraph, type: "article", images: [{ url: story.img, alt: copy.title }] },
    twitter: { ...metadata.twitter, images: [story.img] },
  };
}

export default async function InsightPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const story = insightsData.find(s => s.slug === slug);
  
  if (!story) {
    notFound();
  }

  return <InsightPageClient story={story} />;
}

export function generateStaticParams() {
  return insightsData.map((s) => ({
    slug: s.slug,
  }));
}
