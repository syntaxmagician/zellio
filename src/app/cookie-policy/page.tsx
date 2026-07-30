"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Shield, Database, Code2, UserCheck, Lock, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useLanguage } from "@/context/LanguageContext";

const policyText = {
  en: {
    title: "Cookie Policy",
    lastUpdated: "Last Updated: Juni 2026",
    sections: [
      {
        id: "sec-1",
        icon: Shield,
        designator: "COOKIE_DEFINITION",
        heading: "1. What Are Cookies?",
        content: "Cookies are small text files containing a string of characters that are placed on your computer or mobile device when you visit a website. They are widely used by website owners to make their websites work efficiently, improve user experience, and provide performance analytics."
      },
      {
        id: "sec-2",
        icon: Database,
        designator: "COOKIE_USAGE",
        heading: "2. How We Use Cookies",
        content: "Zellio Digital utilizes cookies to enhance the load times of our custom web interfaces, secure contact portals, and retain your selected language configuration across sessions. These cookies help us understand how users navigate our service detail pages so we can optimize our digital architectures."
      },
      {
        id: "sec-3",
        icon: Code2,
        designator: "COOKIE_TYPES",
        heading: "3. Types of Cookies We Deploy",
        content: "We use first-party cookies that are essential for the technical delivery of our pages (e.g., maintaining language states). We also use third-party analytics cookies (such as Google Analytics) to aggregate anonymous user metrics, allowing us to evaluate performance, scroll speeds, and asset delivery."
      },
      {
        id: "sec-4",
        icon: UserCheck,
        designator: "COOKIE_MANAGEMENT",
        heading: "4. Managing Cookie Preferences",
        content: "Most web browsers allow you to manage cookies through their settings interfaces. You can choose to clear existing cookies, block all incoming cookies, or set alerts for new cookie placements. Please note that blocking essential cookies may disrupt parts of our interactive dashboard showcases."
      },
      {
        id: "sec-5",
        icon: Lock,
        designator: "COOKIE_CONTACT",
        heading: "5. Cookie Inquiries",
        content: "For additional details regarding our tracking technologies or automated cookie compliance protocols, please reach out to our legal and data protection team at privacy@zellio.id."
      }
    ]
  },
  id: {
    title: "Kebijakan Cookie",
    lastUpdated: "Pembaruan Terakhir: Oktober 2024",
    sections: [
      {
        id: "sec-1",
        icon: Shield,
        designator: "COOKIE_DEFINITION",
        heading: "1. Apa itu Cookie?",
        content: "Cookie adalah file teks kecil berisi rangkaian karakter yang ditempatkan di komputer atau perangkat seluler Anda saat mengunjungi sebuah situs web. Cookie digunakan secara luas oleh pemilik situs untuk membuat situs mereka bekerja dengan efisien, meningkatkan pengalaman pengguna, serta menyediakan analitik performa."
      },
      {
        id: "sec-2",
        icon: Database,
        designator: "COOKIE_USAGE",
        heading: "2. Bagaimana Kami Menggunakan Cookie",
        content: "Zellio Digital menggunakan cookie untuk mempercepat waktu muat antarmuka web kustom kami, mengamankan portal kontak, dan mempertahankan konfigurasi bahasa pilihan Anda di setiap sesi. Cookie ini membantu kami memahami cara pengguna bernavigasi sehingga kami dapat mengoptimalkan arsitektur digital kami."
      },
      {
        id: "sec-3",
        icon: Code2,
        designator: "COOKIE_TYPES",
        heading: "3. Jenis Cookie yang Kami Terapkan",
        content: "Kami menggunakan cookie pihak pertama yang esensial untuk pengiriman teknis halaman kami (mis. mempertahankan status bahasa). Kami juga menggunakan cookie analitik pihak ketiga (seperti Google Analytics) untuk mengumpulkan metrik pengguna anonim guna mengevaluasi performa, kecepatan gulir, dan pengiriman aset."
      },
      {
        id: "sec-4",
        icon: UserCheck,
        designator: "COOKIE_MANAGEMENT",
        heading: "4. Mengelola Preferensi Cookie",
        content: "Sebagian besar browser web memungkinkan Anda untuk mengelola cookie melalui antarmuka pengaturan mereka. Anda dapat memilih untuk menghapus cookie yang ada, memblokir semua cookie yang masuk, atau mengatur peringatan untuk penempatan cookie baru. Harap dicatat bahwa memblokir cookie esensial dapat mengganggu bagian dari tampilan dashboard interaktif kami."
      },
      {
        id: "sec-5",
        icon: Lock,
        designator: "COOKIE_CONTACT",
        heading: "5. Pertanyaan Mengenai Cookie",
        content: "Untuk detail tambahan mengenai teknologi pelacakan kami atau protokol kepatuhan cookie otomatis kami, silakan hubungi tim perlindungan data dan hukum kami di privacy@zellio.id."
      }
    ]
  }
};

export default function CookiePolicyPage() {
  const { language } = useLanguage();
  const text = policyText[language];
  const [activeSection, setActiveSection] = useState(text.sections[0].id);

  // Update active section based on scroll
  useEffect(() => {
    const handleScroll = () => {
      let currentSection = text.sections[0].id;
      for (const section of text.sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200) {
            currentSection = section.id;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [text.sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="min-h-screen bg-[#FAFAFA] flex flex-col justify-between selection:bg-slate-900/10 w-full will-change-opacity"
      >
        <Navbar />

        <main className="flex-grow pt-40 pb-24 relative z-10 px-6">
          <div className="max-w-[1200px] mx-auto">

            {/* Header: Tech Document Style */}
            <div className="flex flex-col mb-12">
              <span className="inline-flex items-center gap-2 px-3 py-1 border border-slate-900/10 bg-slate-100 text-slate-600 rounded-full text-[10px] font-mono font-bold tracking-[0.2em] uppercase mb-6 w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-pulse" />
                LEGAL COMPLIANCE
              </span>
              <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter uppercase leading-none mb-6">
                {text.title}
              </h1>

              <div className="w-full border-b border-slate-900/10 pt-4" />

              <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-6 gap-4">
                <p className="text-xs font-mono text-slate-500 uppercase tracking-widest flex items-center gap-3">
                  <span>{text.lastUpdated}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                  <span>DOC_ID: ZC-2299</span>
                </p>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]" />
                  <span className="text-[10px] font-bold font-mono text-slate-900 uppercase tracking-widest">Active & Enforced</span>
                </div>
              </div>
            </div>

            {/* Split Content Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mt-8 relative">

              {/* Left Sidebar: Sticky TOC */}
              <div className="hidden lg:block lg:col-span-4 relative">
                <div className="sticky top-32 space-y-4 pr-6">
                  <h3 className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">
                    Document Sections
                  </h3>
                  <div className="flex flex-col gap-1">
                    {text.sections.map((section, idx) => {
                      const isActive = activeSection === section.id;
                      const num = (idx + 1).toString().padStart(2, "0");

                      return (
                        <button
                          key={section.id}
                          onClick={() => scrollToSection(section.id)}
                          className={`flex items-start gap-4 text-left py-2.5 border-l transition-all duration-300 pl-4 -ml-px ${isActive
                              ? "border-slate-900 text-slate-900 font-bold"
                              : "border-slate-200 text-slate-400 hover:text-slate-900 hover:border-slate-400"
                            }`}
                        >
                          <span className="text-xs font-mono tracking-widest">{num}</span>
                          <span className="text-[13px] tracking-tight leading-snug">
                            {section.heading.split(".").slice(1).join(".").trim()}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Right Content: Policy Body */}
              <div className="lg:col-span-8 space-y-16">
                {text.sections.map((section, idx) => {
                  const numberStr = (idx + 1).toString().padStart(2, "0");

                  return (
                    <div
                      key={section.id}
                      id={section.id}
                      className="scroll-mt-32 border-b border-slate-100 pb-16 last:border-0 last:pb-0"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                        {/* Number Column */}
                        <div className="col-span-1 md:col-span-2 text-4xl md:text-5xl font-black font-mono text-slate-200 leading-none">
                          {numberStr}
                        </div>
                        {/* Content Column */}
                        <div className="col-span-1 md:col-span-10">
                          <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest mb-2">
                            [ {section.designator} ]
                          </div>
                          <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight mb-4 uppercase">
                            {section.heading.split(".").slice(1).join(".").trim()}
                          </h2>
                          <p className="text-slate-600 leading-relaxed text-sm md:text-base font-medium">
                            {section.content}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>
        </main>

        <Footer />
      </motion.div>
    </>
  );
}
