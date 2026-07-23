"use client";

import {
  ArrowUp,
  Globe,
  MessageSquare,
  Share2,
  Video,
  Code2,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const localText = {
  en: {
    desc: "Empowering businesses through custom digital platforms, modern dashboards, and scalable IT systems.",
    backToTop: "Back to top",
    footerLinks: {
      Company: [
        { label: "About Zellio", href: "#about" },
        { label: "Vision & Mission", href: "#vision-mission" },
        { label: "Our Team", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Press", href: "#" },
      ],
      Services: [
        { label: "UI/UX Design", href: "#services" },
        { label: "Custom Web Dev", href: "#services" },
        { label: "Admin Dashboards", href: "#services" },
        { label: "Mobile Apps", href: "#services" },
        { label: "Enterprise Systems", href: "#services" },
      ],
      Resources: [
        { label: "Blog", href: "#" },
        { label: "Case Studies", href: "#" },
        { label: "Client Portal", href: "#" },
        { label: "FAQs", href: "#faq" },
        { label: "System Status", href: "#" },
      ],
      Contact: [
        { label: "Get in Touch", href: "#contact" },
        { label: "Request a Quote", href: "#contact" },
        { label: "Partnerships", href: "#" },
        { label: "Support Center", href: "#" },
        { label: "Privacy Policy", href: "#" },
      ],
    }
  },
  id: {
    desc: "Membantu bisnis berkembang lewat pembuatan platform digital kustom, dashboard canggih, dan sistem IT yang handal.",
    backToTop: "Kembali ke atas",
    footerLinks: {
      Perusahaan: [
        { label: "Tentang Zellio", href: "#about" },
        { label: "Visi & Misi", href: "#vision-mission" },
        { label: "Tim Kami", href: "#" },
        { label: "Karir", href: "#" },
        { label: "Berita", href: "#" },
      ],
      Layanan: [
        { label: "Desain UI/UX", href: "#services" },
        { label: "Website Kustom", href: "#services" },
        { label: "Dashboard Admin", href: "#services" },
        { label: "Aplikasi Mobile", href: "#services" },
        { label: "Sistem IT Kustom", href: "#services" },
      ],
      Sumber: [
        { label: "Blog", href: "#" },
        { label: "Studi Kasus", href: "#" },
        { label: "Portal Klien", href: "#" },
        { label: "Pertanyaan (FAQ)", href: "#faq" },
        { label: "Status Sistem", href: "#" },
      ],
      Kontak: [
        { label: "Hubungi Kami", href: "#contact" },
        { label: "Minta Penawaran", href: "#contact" },
        { label: "Kemitraan", href: "#" },
        { label: "Pusat Bantuan", href: "#" },
        { label: "Kebijakan Privasi", href: "#" },
      ],
    }
  }
};

const socials = [
  { icon: Globe, href: "#", label: "LinkedIn" },
  { icon: MessageSquare, href: "#", label: "Twitter" },
  { icon: Share2, href: "#", label: "Instagram" },
  { icon: Video, href: "#", label: "YouTube" },
  { icon: Code2, href: "#", label: "GitHub" },
];

export default function Footer() {
  const { language } = useLanguage();
  const text = localText[language];

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="bg-white pt-16 lg:pt-24">
      <footer className="bg-[#0F172A] text-white">
        {/* Main Footer */}
        <div className="section-container pt-16 lg:pt-20 pb-14 border-t border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">

            {/* Brand Column (Left - Spans 5) */}
            <div className="lg:col-span-5 flex flex-col justify-start">
              <a href="#home" className="flex items-center mb-4 group">
                <img
                  src="/zelio.png"
                  alt="Zellio Logo"
                  className="h-12 md:h-16 w-auto object-contain scale-[2.4] md:scale-[2.6] origin-left brightness-0 invert group-hover:opacity-90 transition-opacity duration-300"
                  style={{ width: 'auto' }}
                />
              </a>
              <p className="text-[#94A3B8] text-sm leading-relaxed mb-6 max-w-sm">
                {text.desc}
              </p>

              {/* Social Links */}
              <div className="flex items-center gap-3">
                {socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-[#94A3B8] hover:bg-[#2563EB] hover:text-white transition-all duration-300 hover:scale-110"
                  >
                    <social.icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            {/* Links Columns (Right - Spans 7) */}
            <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-8">
              {Object.entries(text.footerLinks).map(([title, links]) => (
                <div key={title} className="flex flex-col">
                  <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-5">
                    {title}
                  </h4>
                  <ul className="space-y-3.5">
                    {links.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.href}
                          className="text-[#94A3B8] text-sm hover:text-white transition-colors duration-200"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/5 bg-[#090D1A]">
          <div className="section-container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[#64748B] text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} ZELLIO. All rights reserved.
            </p>

            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-sm text-[#94A3B8] hover:text-white transition-colors"
            >
              {text.backToTop}
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#2563EB] group-hover:text-white transition-all duration-300">
                <ArrowUp size={14} />
              </div>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
