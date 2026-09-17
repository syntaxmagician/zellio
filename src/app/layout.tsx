import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700", "800"],
  preload: true,
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "optional",
  weight: ["400", "500"],
  preload: false,
});

import { getRequestLocale } from "@/lib/locale";
import StructuredData from "@/components/seo/StructuredData";
import { organization } from "@/lib/structured-data";

export const metadata: Metadata = {
  metadataBase: new URL("https://zellio.id"),
  title: {
    default: "ZELLIO — Software House Indonesia | Website, Web App & Enterprise Solutions",
    template: "%s | ZELLIO"
  },
  description:
    "ZELLIO is a software house in Indonesia specializing in modern websites, custom web & mobile applications, enterprise software, SaaS platforms, and scalable digital solutions for growing businesses.",
  icons: {
    icon: [
      { url: '/icon-light.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.png' },
    ],
    apple: [
      { url: '/icon.png' },
    ]
  },
  keywords: ["ZELLIO", "software house Indonesia", "web development", "custom software"],
  authors: [{ name: "ZELLIO Team" }],
  creator: "ZELLIO",
  publisher: "ZELLIO",
  openGraph: {
    title: "ZELLIO — Software House Indonesia | Website, Web App & Enterprise Solutions",
    description:
      "ZELLIO is a professional software house in Indonesia specializing in modern websites, custom web & mobile applications, and scalable digital solutions.",
    url: "https://zellio.id",
    siteName: "ZELLIO",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/compro-cover.jpg",
        width: 1200,
        height: 630,
        alt: "ZELLIO — Software House Indonesia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZELLIO — Software House Indonesia | Website, Web App & Enterprise Solutions",
    description:
      "ZELLIO is a professional software house in Indonesia specializing in modern websites, custom web & mobile applications, and scalable digital solutions.",
    images: ["/compro-cover.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "Gp8MdnwlDYWNoriMHNjj4BcVUW-plzr1KUrjuUYvuYY",
  },
};

import { LanguageProvider } from "@/context/LanguageContext";
import SmoothScroll from "@/components/providers/SmoothScroll";
import TabTitle from "@/components/providers/TabTitle";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getRequestLocale();
  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${plusJakarta.variable} ${inter.variable} h-full antialiased overflow-x-clip`}
    >
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-E7L3JZ628T"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-E7L3JZ628T');
          `}
        </Script>
        <StructuredData data={organization} />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col overflow-x-clip"
        style={{ fontFamily: "var(--font-plus-jakarta), var(--font-inter), system-ui, sans-serif" }}
      >
        <SmoothScroll />
        <TabTitle />
        <LanguageProvider initialLanguage={locale}>
          {children}
        </LanguageProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
