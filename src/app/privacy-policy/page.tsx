"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Shield, Database, Lock, Share2, HelpCircle, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useLanguage } from "@/context/LanguageContext";

const policyText = {
  en: {
    title: "Privacy Policy",
    lastUpdated: "Last Updated: June 2026",
    sections: [
      {
        id: "sec-1",
        icon: Database,
        designator: "COLLECTION",
        heading: "1. What We Collect & Why",
        content: "We only collect information that you choose to share with us—like your name, email, phone number, and project details when you fill out our contact form. We use this information solely to chat with you about your projects and understand how we can help your business grow."
      },
      {
        id: "sec-2",
        icon: Shield,
        designator: "USE",
        heading: "2. How We Use Your Details",
        content: "Your data is used to plan, build, and deploy the digital systems you hire us for. We'll use it to stay in touch, share project updates, and make sure we're delivering exactly what you need. We will never sell, lease, or distribute your information to marketers."
      },
      {
        id: "sec-3",
        icon: Lock,
        designator: "SECURITY",
        heading: "3. Keeping Your Data Safe",
        content: "We treat your information with the same respect and care we treat our own code. We store your data on secure cloud services and implement industry-standard security safeguards to protect it from unauthorized access, loss, or misuse."
      },
      {
        id: "sec-4",
        icon: Share2,
        designator: "SHARING",
        heading: "4. Sharing with Trusted Partners",
        content: "To keep our website and systems running, we use standard tools like cloud hosting providers (e.g. Vercel). We only share the absolute minimum data necessary with these trusted partners to get the job done, and we ensure they uphold high security standards too."
      },
      {
        id: "sec-5",
        icon: HelpCircle,
        designator: "CONTACT",
        heading: "5. Get in Touch",
        content: "Your data belongs to you. If you ever want us to delete your contact details, or if you have any questions about how we handle privacy, please drop us a friendly email at legal@zellio.id and we'll take care of it right away."
      }
    ]
  },
  id: {
    title: "Kebijakan Privasi",
    lastUpdated: "Pembaruan Terakhir: Juni 2026",
    sections: [
      {
        id: "sec-1",
        icon: Database,
        designator: "COLLECTION",
        heading: "1. Data yang Kami Kumpulkan",
        content: "Kami hanya mengumpulkan informasi yang Anda bagikan secara sukarela—seperti nama, email, nomor telepon, dan kebutuhan proyek saat Anda mengisi formulir kontak. Kami menggunakan data ini murni untuk berkomunikasi dengan Anda mengenai proyek yang ingin dibuat."
      },
      {
        id: "sec-2",
        icon: Shield,
        designator: "USE",
        heading: "2. Bagaimana Kami Menggunakan Data Anda",
        content: "Informasi Anda digunakan untuk menganalisis, merancang, dan mengembangkan software yang Anda percayakan kepada kami. Kami tidak pernah menjual, menyewakan, atau menyebarkan data pribadi Anda kepada pihak ketiga untuk kepentingan iklan atau pemasaran."
      },
      {
        id: "sec-3",
        icon: Lock,
        designator: "SECURITY",
        heading: "3. Keamanan Data Anda",
        content: "Kami menjaga kerahasiaan informasi Anda dengan sangat serius, sama seperti kami menjaga kode aplikasi kami sendiri. Kami menyimpan data pada infrastruktur cloud yang aman dan menggunakan enkripsi standar untuk mencegah kebocoran data atau akses tanpa izin."
      },
      {
        id: "sec-4",
        icon: Share2,
        designator: "SHARING",
        heading: "4. Layanan Pihak Ketiga",
        content: "Untuk menjalankan website dan aplikasi, kami bekerja sama dengan layanan infrastruktur terpercaya (seperti cloud hosting). Kami hanya membagikan data seminimal mungkin yang diperlukan untuk menjalankan sistem, dan memastikan mereka juga menjaga standar keamanan yang tinggi."
      },
      {
        id: "sec-5",
        icon: HelpCircle,
        designator: "CONTACT",
        heading: "5. Hubungi Kami",
        content: "Data Anda adalah hak Anda sepenuhnya. Jika Anda ingin kami menghapus riwayat kontak Anda, atau memiliki pertanyaan mengenai kebijakan privasi ini, silakan hubungi kami dengan santai via email di legal@zellio.id."
      }
    ]
  }
};

export default function PrivacyPolicyPage() {
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
                  <span className="w-1 h-1 rounded-full bg-slate-300" />
                  <span>DOC_ID: ZP-9388</span>
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
