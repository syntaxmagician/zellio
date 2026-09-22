import { servicesData } from "@/lib/data";
import { slugify } from "@/lib/slug";
import { pageMetadata, absoluteUrl } from "@/lib/seo";
import { getRequestLocale } from "@/lib/locale";
import { serviceCopy } from "@/lib/service-copy";
import { organization, breadcrumbs } from "@/lib/structured-data";
import StructuredData from "@/components/seo/StructuredData";
import { notFound } from "next/navigation";
import ServicePageClient from "./ServicePageClient";

type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = servicesData.find(s => slugify(s.title) === slug);
  if (!service) notFound();
  const locale = await getRequestLocale();
  const copy = serviceCopy(service, locale);
  return pageMetadata(`services/${slug}`, locale, copy.title, copy.description);
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = servicesData.find(s => slugify(s.title) === slug);
  if (!service) notFound();
  const locale = await getRequestLocale();
  const copy = serviceCopy(service, locale);
  const url = absoluteUrl(`services/${slug}`, locale);
  return <>
    <StructuredData data={{
      "@context": "https://schema.org", "@type": "Service", "@id": `${url}#service`,
      name: copy.title, description: copy.description, url,
      serviceType: service.title, provider: { "@id": organization["@id"] },
    }} />
    <StructuredData data={breadcrumbs([
      { name: "ZELLIO", path: "" },
      { name: locale === "id" ? "Layanan" : "Services", path: "services" },
      { name: copy.title, path: `services/${slug}` },
    ], locale)} />
    <ServicePageClient service={service} />
  </>;
}

export function generateStaticParams() {
  return servicesData.map(service => ({ slug: slugify(service.title) }));
}
