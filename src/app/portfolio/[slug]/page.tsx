import { notFound } from "next/navigation";
import { projects } from "@/lib/portfolioData";
import PortfolioDetailClient from "./PortfolioDetailClient";

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return <PortfolioDetailClient project={project} />;
}
