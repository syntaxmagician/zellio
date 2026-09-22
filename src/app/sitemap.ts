import { MetadataRoute } from 'next';
import { servicesData } from '@/lib/data';
import { slugify } from "@/lib/slug";
import { insightsData } from '@/lib/insightsData';
import { projects } from '@/lib/portfolioData';

const BASE_URL = 'https://zellio.id';

/** Canonical URLs match default clean paths (e.g. https://zellio.id/portfolio). */
function createSitemapItem(
  path = '',
  changeFrequency: 'weekly' | 'monthly' | 'yearly',
  priority: number
) {
  const normalized = path.replace(/^\//, '');
  const idUrl = normalized ? `${BASE_URL}/${normalized}` : BASE_URL;
  const enUrl = normalized ? `${BASE_URL}/en/${normalized}` : `${BASE_URL}/en`;

  return [idUrl, enUrl].map(url => ({
    url,
    changeFrequency,
    priority,
    alternates: {
      languages: {
        id: idUrl,
        en: enUrl,
        'x-default': idUrl,
      },
    },
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const serviceUrls = servicesData.flatMap((service) =>
    createSitemapItem(`services/${slugify(service.title)}`, 'monthly', 0.8)
  );

  const insightUrls = insightsData.flatMap((insight) =>
    createSitemapItem(`insights/${insight.slug}`, 'monthly', 0.7)
  );

  const portfolioUrls = projects.flatMap((project) =>
    createSitemapItem(`portfolio/${project.slug}`, 'monthly', 0.8)
  );

  return [
    ...createSitemapItem('', 'weekly', 1.0),
    ...createSitemapItem('portfolio', 'monthly', 0.9),
    ...createSitemapItem('services', 'monthly', 0.9),
    ...createSitemapItem('team', 'monthly', 0.8),
    ...createSitemapItem('contact', 'yearly', 0.7),
    ...createSitemapItem('privacy-policy', 'yearly', 0.3),
    ...createSitemapItem('terms-of-service', 'yearly', 0.3),
    ...createSitemapItem('cookie-policy', 'yearly', 0.3),
    ...serviceUrls,
    ...insightUrls,
    ...portfolioUrls,
  ];
}
