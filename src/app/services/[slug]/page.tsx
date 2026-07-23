import { servicesData } from "@/lib/data";
import { notFound } from "next/navigation";
import ServicePageClient from "./ServicePageClient";

// Helper function to slugify titles
export const slugify = (text: string) => text.toLowerCase().replace(/[\s&/]+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');

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
