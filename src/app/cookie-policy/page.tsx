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
    lastUpdated: "Last Updated: October 2024",
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
        className="min-h-screen bg-[#FAFAFA] flex flex-col justify-between selection:bg-indigo-500/30 w-full will-change-opacity"
      >
        <Navbar />

        <main className="flex-grow pt-32 pb-24 relative z-10 px-6">
          <div className="max-w-[1200px] mx-auto">
            
            {/* Header: Tech Document Style */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-slate-200 pb-8 gap-8">
              <div>
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-[10px] font-mono font-bold tracking-[0.2em] uppercase mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
                  LEGAL COMPLIANCE
                </span>
                <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight mb-4 leading-tight">
                  {text.title}
                </h1>
                <p className="text-sm text-slate-500 font-mono flex items-center gap-2">
                  <span>{text.lastUpdated}</span>
                  <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-slate-300" />
                  <span className="hidden sm:inline-block">DOC_ID: ZC-2299</span>
                </p>
              </div>

              {/* Status Badge */}
              <div className="flex items-center gap-3 bg-white border border-slate-200 px-4 py-3 rounded-2xl shadow-sm">
                <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                </div>
                <div>
                  <div className="text-[10px] font-bold font-mono text-slate-400 uppercase tracking-widest">System Status</div>
                  <div className="text-sm font-bold text-slate-900 tracking-tight">Active & Enforced</div>
                </div>
              </div>
            </div>

            {/* Split Content Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 relative">
              
              {/* Left Sidebar: Sticky TOC */}
              <div className="hidden lg:block lg:col-span-4 relative">
                <div className="sticky top-32 space-y-2">
                  <h3 className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-[0.2em] mb-6 px-4">
                    Document Sections
                  </h3>
                  <div className="flex flex-col gap-1">
                    {text.sections.map((section) => {
                      const isActive = activeSection === section.id;
                      const Icon = section.icon;
                      
                      return (
                        <button
                          key={section.id}
                          onClick={() => scrollToSection(section.id)}
                          className={`flex items-center gap-3 w-full text-left px-4 py-3 rounded-xl transition-all duration-300 ${
                            isActive 
                              ? "bg-indigo-50 text-indigo-700 shadow-sm" 
                              : "text-slate-500 hover:bg-slate-100/50 hover:text-slate-900"
                          }`}
                        >
                          <Icon size={16} className={isActive ? "text-indigo-600" : "text-slate-400"} />
                          <span className={`text-[13px] font-bold ${isActive ? "opacity-100" : "opacity-80"}`}>
                            {section.heading}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Right Content: Policy Body */}
              <div className="lg:col-span-8">
                <div className="bg-white rounded-[32px] border border-slate-200/60 shadow-xl shadow-slate-200/20 overflow-hidden relative">
                  
                  {/* Top Bar for Card */}
                  <div className="h-12 bg-slate-50 border-b border-slate-100 flex items-center px-6 gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-400/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-400/80" />
                    <div className="ml-4 text-[10px] font-mono text-slate-400 font-bold uppercase tracking-widest">
                      zellio-cookie-framework.md
                    </div>
                  </div>

                  {/* Content padding */}
                  <div className="p-8 md:p-12 space-y-16">
                    {text.sections.map((section) => {
                      const Icon = section.icon;
                      return (
                        <div key={section.id} id={section.id} className="scroll-mt-32">
                          <div className="flex items-start gap-4 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0 mt-1">
                              <Icon size={18} className="text-indigo-600" />
                            </div>
                            <div>
                              <div className="text-[10px] font-mono font-bold text-indigo-500 uppercase tracking-widest mb-1.5">
                                [ {section.designator} ]
                              </div>
                              <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                                {section.heading}
                              </h2>
                            </div>
                          </div>
                          <div className="pl-0 md:pl-14">
                            <p className="text-slate-600 leading-relaxed text-sm md:text-base font-medium">
                              {section.content}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </main>

        <Footer />
      </motion.div>
    </>
  );
}
