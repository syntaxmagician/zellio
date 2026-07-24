import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'ZELLIO — Premium Software House & Web Agency',
    short_name: 'ZELLIO',
    description: 'ZELLIO is a premium digital agency & elite software house specializing in custom software, corporate websites, and enterprise internal systems.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#2563EB',
    icons: [
      {
        src: '/icon.png',
        sizes: '192x192 512x512',
        type: 'image/png',
      },
    ],
  };
}
