import { MetadataRoute } from 'next';
import { servicesData } from '@/lib/data';
import { slugify } from "@/lib/slug";
import { insightsData } from '@/lib/insightsData';
import { projects } from '@/lib/portfolioData';

const BASE_URL = 'https://zellio.id';

/** Canonical URLs match middleware locale prefix (/en/...). */
function url(path = ''): string {
  const normalized = path.replace(/^\//, '');
  return normalized ? `${BASE_URL}/en/${normalized}` : `${BASE_URL}/en`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const serviceUrls = servicesData.map((service) => ({
    url: url(`services/${slugify(service.title)}`),
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const insightUrls = insightsData.map((insight) => ({
    url: url(`insights/${insight.slug}`),
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const portfolioUrls = projects.map((project) => ({
    url: url(`portfolio/${project.slug}`),
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: url(),
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: url('portfolio'),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: url('services'),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: url('team'),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: url('contact'),
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: url('privacy-policy'),
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: url('terms-of-service'),
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: url('cookie-policy'),
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    ...serviceUrls,
    ...insightUrls,
    ...portfolioUrls,
  ];
}
