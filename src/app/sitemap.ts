import { MetadataRoute } from 'next';
import { servicesData } from '@/lib/data';

const BASE_URL = 'https://zellio.id';

const slugify = (text: string) => text.toLowerCase().replace(/[\s&/]+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');

export default function sitemap(): MetadataRoute.Sitemap {
  const serviceUrls = servicesData.map((service) => ({
    url: `${BASE_URL}/services/${slugify(service.title)}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/portfolio`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/team`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    ...serviceUrls,
  ];
}
