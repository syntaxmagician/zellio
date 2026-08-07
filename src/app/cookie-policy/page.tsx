"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Shield, Database, Code2, UserCheck, Lock, HelpCircle } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useLanguage } from "@/context/LanguageContext";

const policyText = {
  en: {
    title: "Cookie Policy",
    lastUpdated: "Last Updated: August 2026",
    sections: [
      {
        id: "sec-1",
        icon: Shield,
        designator: "DEFINITION",
        heading: "1. What Are Cookies — The Honest Explanation",
        content: "Cookies are small text files that a website places on your browser or device when you visit. They're not programs, they can't execute code, and they can't carry viruses. At their core, they're just a way for a website to remember things between visits — like your preferred language or whether you've already seen a notification. ZELLIO uses cookies sparingly and only for legitimate operational purposes."
      },
      {
        id: "sec-2",
        icon: Database,
        designator: "HOW_WE_USE",
        heading: "2. How ZELLIO Actually Uses Cookies",
        content: "We use cookies for two specific purposes: first, to remember your selected language (Indonesian or English) so you don't have to reselect it every time you return; and second, to collect anonymous, aggregate traffic analytics that help us understand which pages and content are most useful. We do not use cookies to identify you personally, track you across other websites, or build behavioral profiles for advertising."
      },
      {
        id: "sec-3",
        icon: Code2,
        designator: "TYPES",
        heading: "3. The Exact Types of Cookies We Deploy",
        content: "Essential cookies keep the site functional — for example, maintaining your language selection across pages. These cannot be turned off without breaking site functionality. Analytics cookies (Google Analytics 4) collect anonymized metrics: page views, session duration, and general navigation patterns. No personally identifiable information is stored through analytics cookies. We do not deploy advertising cookies, retargeting cookies, or any form of cross-site tracking."
      },
      {
        id: "sec-4",
        icon: UserCheck,
        designator: "MANAGEMENT",
        heading: "4. Managing & Disabling Cookies",
        content: "You can control cookies directly through your browser settings. In Chrome: Settings → Privacy & Security → Cookies. In Firefox: Settings → Privacy & Security → Cookies and Site Data. In Safari: Preferences → Privacy → Manage Website Data. You can choose to block all cookies, delete existing ones, or allow only essential cookies. If you block essential cookies, some features (like language persistence) will not function as expected."
      },
      {
        id: "sec-5",
        icon: Lock,
        designator: "THIRD_PARTY",
        heading: "5. Third-Party Services & Their Cookies",
        content: "We embed Google Analytics on this site, which sets its own first-party cookies in your browser to collect anonymized usage data. Google's data practices are governed by the Google Privacy Policy at policies.google.com/privacy. If you wish to opt out of Google Analytics tracking specifically across all websites, Google provides a browser add-on at tools.google.com/dlpage/gaoptout. We have no control over cookies set by other services you may link to from our site."
      },
      {
        id: "sec-6",
        icon: HelpCircle,
        designator: "UPDATES",
        heading: "6. Policy Updates & Contact",
        content: "This Cookie Policy may be updated when we introduce new tools or change how we handle tracking technologies. We will update the date at the top of this page and, for significant changes, publish a note on our website. If you have questions about our specific cookie practices or want to request that your data be excluded from analytics, contact us at privacy@zellio.id."
      }
    ]
  },
  id: {
    title: "Kebijakan Cookie",
    lastUpdated: "Pembaruan Terakhir: Agustus 2026",
    sections: [
      {
        id: "sec-1",
        icon: Shield,
        designator: "DEFINITION",
        heading: "1. Apa Itu Cookie — Penjelasan Jujur",
        content: "Cookie adalah file teks kecil yang ditempatkan website di browser atau perangkat Anda saat Anda berkunjung. Cookie bukan program — tidak dapat menjalankan kode, tidak dapat membawa virus. Pada dasarnya, cookie hanyalah cara bagi website untuk mengingat sesuatu di antara kunjungan — seperti bahasa pilihan Anda atau apakah Anda sudah pernah melihat notifikasi tertentu. ZELLIO menggunakan cookie secara hemat dan hanya untuk keperluan operasional yang sah."
      },
      {
        id: "sec-2",
        icon: Database,
        designator: "HOW_WE_USE",
        heading: "2. Bagaimana ZELLIO Menggunakan Cookie",
        content: "Kami menggunakan cookie untuk dua tujuan spesifik: pertama, untuk mengingat bahasa yang Anda pilih (Indonesia atau Inggris) sehingga Anda tidak perlu memilih ulang setiap kali kembali; dan kedua, untuk mengumpulkan analitik traffic anonim yang membantu kami memahami halaman dan konten mana yang paling bermanfaat. Kami tidak menggunakan cookie untuk mengidentifikasi Anda secara pribadi atau membangun profil perilaku untuk iklan."
      },
      {
        id: "sec-3",
        icon: Code2,
        designator: "TYPES",
        heading: "3. Jenis Cookie yang Kami Terapkan",
        content: "Cookie esensial menjaga fungsi situs — misalnya, mempertahankan pilihan bahasa Anda antar halaman. Cookie ini tidak dapat dimatikan tanpa merusak fungsionalitas situs. Cookie analitik (Google Analytics 4) mengumpulkan metrik yang dianonimkan: tampilan halaman, durasi sesi, dan pola navigasi umum. Tidak ada informasi yang dapat mengidentifikasi pribadi yang disimpan melalui cookie analitik. Kami tidak menerapkan cookie iklan, cookie retargeting, atau pelacakan lintas situs dalam bentuk apapun."
      },
      {
        id: "sec-4",
        icon: UserCheck,
        designator: "MANAGEMENT",
        heading: "4. Mengelola & Menonaktifkan Cookie",
        content: "Anda dapat mengontrol cookie langsung melalui pengaturan browser Anda. Di Chrome: Pengaturan → Privasi & Keamanan → Cookie. Di Firefox: Pengaturan → Privasi & Keamanan → Cookie dan Data Situs. Di Safari: Preferensi → Privasi → Kelola Data Situs Web. Anda dapat memblokir semua cookie, menghapus yang sudah ada, atau hanya mengizinkan cookie esensial. Jika Anda memblokir cookie esensial, beberapa fitur seperti persistensi bahasa tidak akan berfungsi sebagaimana mestinya."
      },
      {
        id: "sec-5",
        icon: Lock,
        designator: "THIRD_PARTY",
        heading: "5. Layanan Pihak Ketiga & Cookie Mereka",
        content: "Kami menyematkan Google Analytics di situs ini, yang menetapkan cookie pihak pertamanya sendiri di browser Anda untuk mengumpulkan data penggunaan yang dianonimkan. Praktik data Google diatur oleh Kebijakan Privasi Google di policies.google.com/privacy. Jika Anda ingin menolak pelacakan Google Analytics secara khusus di semua situs, Google menyediakan add-on browser di tools.google.com/dlpage/gaoptout. Kami tidak memiliki kendali atas cookie yang ditetapkan oleh layanan lain yang mungkin Anda tautkan dari situs kami."
      },
      {
        id: "sec-6",
        icon: HelpCircle,
        designator: "UPDATES",
        heading: "6. Pembaruan Kebijakan & Kontak",
        content: "Kebijakan Cookie ini dapat diperbarui ketika kami memperkenalkan alat baru atau mengubah cara kami menangani teknologi pelacakan. Kami akan memperbarui tanggal di bagian atas halaman ini dan, untuk perubahan signifikan, akan mempublikasikan catatan di website kami. Jika Anda memiliki pertanyaan tentang praktik cookie spesifik kami atau ingin meminta data Anda dikecualikan dari analitik, hubungi kami di privacy@zellio.id."
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
