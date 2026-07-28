"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Shield, Code2, Database, UserCheck, Lock, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useLanguage } from "@/context/LanguageContext";

const policyText = {
  en: {
    title: "Terms of Service",
    lastUpdated: "Last Updated: October 2024",
    sections: [
      {
        id: "sec-1",
        icon: Shield,
        designator: "TERMS_ACCEPTANCE",
        heading: "1. Acceptance of Terms",
        content: "By accessing or using Zellio Digital's services, websites, or custom software deliverables, you agree to be bound by these Terms of Service. If you do not agree to these terms, you must cease using our software, systems, and services immediately."
      },
      {
        id: "sec-2",
        icon: Code2,
        designator: "SCOPE_SERVICES",
        heading: "2. Scope of Engineering Services",
        content: "Zellio Digital provides custom software engineering, UI/UX design, cloud architecture design, and database normalization systems. All project milestones, engineering schedules, and custom feature sets are defined in individual Statements of Work (SOW) or signed Service Level Agreements (SLA)."
      },
      {
        id: "sec-3",
        icon: Database,
        designator: "INTELLECTUAL_PROPERTY",
        heading: "3. Intellectual Property Rights",
        content: "Unless explicitly stated otherwise in a custom project contract, all core code bases, custom components, and proprietary architectures developed by Zellio Digital remain our intellectual property. Upon full payment of all project fees, the client is granted a perpetual, non-exclusive license to run and modify the custom application built specifically for them."
      },
      {
        id: "sec-4",
        icon: UserCheck,
        designator: "CLIENT_RESPONSIBILITY",
        heading: "4. Client Obligations & Access",
        content: "Clients must provide timely system requirements, brand design assets, database specifications, and API access credentials necessary for project execution. Zellio Digital is not responsible for engineering delays resulting from client dependencies or missing parameters."
      },
      {
        id: "sec-5",
        icon: Lock,
        designator: "LIMITATION_LIABILITY",
        heading: "5. Limitation of Liability",
        content: "To the maximum extent permitted by law, Zellio Digital, its engineers, and partners shall not be held liable for any indirect, special, incidental, or consequential system failures (including server crashes, database corruptions, or loss of business profits) arising from the deployment of our systems."
      }
    ]
  },
  id: {
    title: "Syarat dan Ketentuan",
    lastUpdated: "Pembaruan Terakhir: Oktober 2024",
    sections: [
      {
        id: "sec-1",
        icon: Shield,
        designator: "TERMS_ACCEPTANCE",
        heading: "1. Penerimaan Ketentuan",
        content: "Dengan mengakses atau menggunakan layanan, situs web, atau produk perangkat lunak kustom Zellio Digital, Anda setuju untuk terikat oleh Syarat dan Ketentuan ini. Jika Anda tidak menyetujui ketentuan ini, Anda harus segera menghentikan penggunaan sistem dan layanan kami."
      },
      {
        id: "sec-2",
        icon: Code2,
        designator: "SCOPE_SERVICES",
        heading: "2. Cakupan Layanan Rekayasa",
        content: "Zellio Digital menyediakan rekayasa perangkat lunak kustom, desain UI/UX, arsitektur cloud, dan sistem normalisasi basis data. Semua pencapaian proyek, jadwal rekayasa, dan fitur kustom didefinisikan dalam Dokumen Kesepakatan Kerja (SOW) atau Perjanjian Tingkat Layanan (SLA) yang ditandatangani."
      },
      {
        id: "sec-3",
        icon: Database,
        designator: "INTELLECTUAL_PROPERTY",
        heading: "3. Hak Kekayaan Intelektual",
        content: "Kecuali dinyatakan secara eksplisit dalam kontrak proyek kustom, semua basis kode utama, komponen kustom, dan arsitektur berpemilik yang dikembangkan oleh Zellio Digital tetap menjadi hak kekayaan intelektual kami. Setelah pelunasan biaya proyek, klien diberikan lisensi abadi non-eksklusif untuk menjalankan dan memodifikasi aplikasi kustom yang dibangun khusus untuk mereka."
      },
      {
        id: "sec-4",
        icon: UserCheck,
        designator: "CLIENT_RESPONSIBILITY",
        heading: "4. Kewajiban & Akses Klien",
        content: "Klien harus menyediakan kebutuhan sistem, aset desain merek, spesifikasi basis data, dan kredensial akses API secara tepat waktu untuk pelaksanaan proyek. Zellio Digital tidak bertanggung jawab atas keterlambatan pengerjaan yang diakibatkan oleh dependensi klien atau parameter yang tidak lengkap."
      },
      {
        id: "sec-5",
        icon: Lock,
        designator: "LIMITATION_LIABILITY",
        heading: "5. Batasan Tanggung Jawab",
        content: "Sejauh yang diizinkan oleh hukum, Zellio Digital, para engineer, dan mitranya tidak bertanggung jawab atas kegagalan sistem tidak langsung, khusus, insidental, atau konsekuensial (termasuk crash server, kerusakan database, atau kerugian keuntungan bisnis) yang timbul dari penerapan sistem kami."
      }
    ]
  }
};

export default function TermsOfServicePage() {
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
                  <span className="hidden sm:inline-block">DOC_ID: ZS-4781</span>
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
                      zellio-terms-framework.md
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
