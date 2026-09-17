import { getRequestLocale } from "@/lib/locale";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/lib/portfolioData";
import { pageMetadata } from "@/lib/seo";
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
  const locale = await getRequestLocale();
  const title = `${project.title} — ${locale === "id" ? "Studi Kasus" : "Case Study"}`;
  const description = project.desc?.[locale] || project.overview?.[locale] || "";
  return pageMetadata(path, locale, title, description);
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return <PortfolioDetailClient project={project} />;
}
