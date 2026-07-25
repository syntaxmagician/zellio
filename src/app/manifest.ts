import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'ZELLIO — Software House Indonesia | Website, Web App & Enterprise Solutions',
    short_name: 'ZELLIO',
    description: 'ZELLIO is a software house in Indonesia specializing in modern websites, custom web & mobile applications, enterprise software, SaaS platforms, and scalable digital solutions for growing businesses.',
    start_url: '/',
    display: "browser",
    background_color: '#ffffff',
    theme_color: '#09090B',
    icons: [
      {
        src: '/icon.png',
        sizes: '192x192 512x512',
        type: 'image/png',
      },
    ],
  };
}
