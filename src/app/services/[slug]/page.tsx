import { servicesData } from "@/lib/data";
import { slugify } from "@/lib/slug";
import { notFound } from "next/navigation";
import ServicePageClient from "./ServicePageClient";
import type { Metadata } from "next";


export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find(s => slugify(s.title) === slug);
  
  if (!service) {
    return {
      title: "Service Not Found - ZELLIO",
    };
  }

  return {
    title: `${service.title} — ZELLIO`,
    description: service.description,
    openGraph: {
      title: `${service.title} — ZELLIO`,
      description: service.description,
      type: "website",
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesData.find(s => slugify(s.title) === slug);
  
  if (!service) {
    notFound();
  }

  return <ServicePageClient service={service} />;
}

// Generate static params for faster loading in Next.js App Router
export function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: slugify(service.title),
  }));
}
