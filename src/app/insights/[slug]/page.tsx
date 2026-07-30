import { insightsData } from "@/lib/insightsData";
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

  return {
    title: `${story.en.title} — ZELLIO Insights`,
    description: story.en.desc,
    openGraph: {
      title: `${story.en.title} — ZELLIO Insights`,
      description: story.en.desc,
      type: "article",
      images: [
        {
          url: story.img,
          width: 1200,
          height: 630,
          alt: story.en.title
        }
      ]
    },
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
