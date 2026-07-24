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
  metadataBase: new URL("https://zellio.com"),
  title: {
    default: "ZELLIO — Premium Software House & Jasa Pembuatan Website Corporate",
    template: "%s | ZELLIO"
  },
  description:
    "ZELLIO is an elite software house and digital agency. Kami ahli dalam jasa pembuatan website premium, aplikasi custom (iOS/Android), dan sistem informasi enterprise (internal systems) berskala global.",
  keywords: [
    // Lokal Indonesia (High-Value B2B Keywords)
    "software house jakarta",
    "software house indonesia",
    "jasa pembuatan website corporate",
    "jasa pembuatan website premium",
    "jasa pembuatan aplikasi custom",
    "jasa pembuatan sistem informasi",
    "jasa pembuatan crm",
    "jasa pembuatan erp",
    "jasa ui ux design",
    "digital agency jakarta",
    "jasa web developer",
    
    // Internasional (Global Outsourcing / B2B)
    "premium software house",
    "custom software development company",
    "saas development agency",
    "enterprise software development",
    "web development company",
    "offshore web development",
    "ui ux design studio",
    
    // Brand
    "ZELLIO"
  ],
  authors: [{ name: "ZELLIO Team" }],
  creator: "ZELLIO",
  publisher: "ZELLIO",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ZELLIO — Premium Software House & Jasa Pembuatan Website",
    description:
      "Elite agency specializing in custom software, corporate websites, and enterprise internal systems.",
    url: "https://zellio.com",
    siteName: "ZELLIO",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "ZELLIO — Premium Software House",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZELLIO — Premium Software House & Web Agency",
    description:
      "Elite agency specializing in custom software, corporate websites, and enterprise internal systems.",
    images: ["/icon.png"],
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
};

import { LanguageProvider } from "@/context/LanguageContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
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
              "url": "https://zellio.com",
              "logo": "https://zellio.com/icon.png",
              "image": "https://zellio.com/icon.png",
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
        className="min-h-full flex flex-col"
        style={{ fontFamily: "var(--font-plus-jakarta), var(--font-inter), system-ui, sans-serif" }}
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
