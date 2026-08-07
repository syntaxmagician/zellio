import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

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
      { url: '/zellio_logo.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-light.png', media: '(prefers-color-scheme: dark)' },
    ],
    apple: [
      { url: '/zellio_logo.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-light.png', media: '(prefers-color-scheme: dark)' },
    ]
  },
  keywords: ["ZELLIO", "software house Indonesia", "web development", "custom software"],
  authors: [{ name: "ZELLIO Team" }],
  creator: "ZELLIO",
  publisher: "ZELLIO",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ZELLIO — Professional Digital Engineering Agency",
    description:
      "ZELLIO is a professional digital engineering agency specializing in custom software, mobile apps, and scalable cloud solutions.",
    url: "https://zellio.id",
    siteName: "ZELLIO",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZELLIO — Professional Digital Engineering Agency",
    description:
      "ZELLIO is a professional digital engineering agency specializing in custom software, mobile apps, and scalable cloud solutions.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${plusJakarta.variable} ${inter.variable} h-full antialiased overflow-x-clip`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "ZELLIO",
              "url": "https://zellio.id",
              "logo": "https://zellio.id/icon.png",
              "image": "https://zellio.id/icon.png",
              "description": "ZELLIO is a professional software engineering agency specializing in custom web applications, mobile platforms, and enterprise solutions.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "ID"
              },
              "priceRange": "$$$$"
            }),
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col overflow-x-clip"
        style={{ fontFamily: "var(--font-plus-jakarta), var(--font-inter), system-ui, sans-serif" }}
      >
        <SmoothScroll />
        <TabTitle />
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
