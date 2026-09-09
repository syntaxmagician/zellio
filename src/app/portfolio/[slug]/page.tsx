import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/lib/portfolioData";
import { getLanguageAlternates, absoluteUrl } from "@/lib/seo";
import PortfolioDetailClient from "./PortfolioDetailClient";

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  const path = `portfolio/${slug}`;
  const title = `${project.title} — Case Study`;
  const description = project.desc?.id || project.desc?.en || project.overview?.id || "";

  return {
    title,
    description,
    alternates: getLanguageAlternates(path),
    openGraph: {
      title: `${project.title} | ZELLIO Case Study`,
      description,
      url: absoluteUrl(path),
      locale: "id_ID",
      type: "article",
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return <PortfolioDetailClient project={project} />;
}
