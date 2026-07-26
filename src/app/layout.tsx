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
  keywords: [
    // Brand
    "ZELLIO",

    // Software House
    "software house indonesia",
    "software house jakarta",
    "software development company",
    "custom software development",

    // Website Development
    "jasa pembuatan website",
    "jasa pembuatan website perusahaan",
    "jasa pembuatan website company profile",
    "website development company",

    // Web Application
    "jasa pembuatan web aplikasi",
    "web application development",
    "custom web application",

    // Mobile Application
    "jasa pembuatan aplikasi",
    "jasa pembuatan aplikasi android",
    "jasa pembuatan aplikasi ios",
    "mobile app development",

    // Enterprise Solutions
    "jasa pembuatan sistem informasi",
    "enterprise software development",
    "erp development",
    "crm development",

    // SaaS
    "saas development",

    // Design
    "ui ux design"
  ],
  authors: [{ name: "ZELLIO Team" }],
  creator: "ZELLIO",
  publisher: "ZELLIO",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ZELLIO — Software House Indonesia | Website, Web App & Enterprise Solutions",
    description:
      "ZELLIO is a software house in Indonesia specializing in modern websites, custom web & mobile applications, enterprise software, SaaS platforms, and scalable digital solutions for growing businesses.",
    url: "https://zellio.id",
    siteName: "ZELLIO",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZELLIO — Software House Indonesia | Website, Web App & Enterprise Solutions",
    description:
      "ZELLIO is a software house in Indonesia specializing in modern websites, custom web & mobile applications, enterprise software, SaaS platforms, and scalable digital solutions for growing businesses.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${plusJakarta.variable} ${inter.variable} h-full antialiased`}
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
              "description": "ZELLIO is an elite software house and digital agency specializing in custom software development, SaaS, and internal systems. Jasa pembuatan website corporate & sistem informasi kustom.",
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
        className="min-h-full flex flex-col"
        style={{ fontFamily: "var(--font-plus-jakarta), var(--font-inter), system-ui, sans-serif" }}
      >
        <SmoothScroll />
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
