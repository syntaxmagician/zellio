import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
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
  title: "DIGIFORE — Empowering People Through Digital Learning",
  description:
    "DIGIFORE helps individuals and companies improve digital competencies through professional training. Explore 500+ training programs with certified trainers.",
  keywords: [
    "digital training",
    "online learning",
    "enterprise training",
    "IT certification",
    "professional development",
    "DIGIFORE",
  ],
  openGraph: {
    title: "DIGIFORE — Empowering People Through Digital Learning",
    description:
      "Professional digital training for individuals and enterprises. 500+ programs, certified trainers, industry certifications.",
    siteName: "DIGIFORE",
    type: "website",
  },
};

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
      <body
        className="min-h-full flex flex-col"
        style={{ fontFamily: "var(--font-plus-jakarta), var(--font-inter), system-ui, sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
