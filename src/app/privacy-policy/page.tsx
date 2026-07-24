"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Shield, Database, Lock, Share2, HelpCircle, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PrivacySplashLoader from "@/components/layout/PrivacySplashLoader";
import { useLanguage } from "@/context/LanguageContext";

const policyText = {
  en: {
    title: "Privacy Policy",
    lastUpdated: "Last Updated: October 2024",
    sections: [
      {
        id: "sec-1",
        icon: Database,
        designator: "DATA_COLLECTION",
        heading: "1. Information We Collect",
        content: "Zellio Digital collects information that you provide directly to us when utilizing our contact forms, project request forms, or when subscribing to our digital services. This may include your name, email address, phone number, company details, and project specifications."
      },
      {
        id: "sec-2",
        icon: Shield,
        designator: "DATA_USAGE",
        heading: "2. How We Use Your Information",
        content: "We use the information we collect to deliver, maintain, and improve our enterprise IT solutions and custom web platforms. Specifically, your data allows our engineering team to assess your project requirements, communicate effectively regarding timelines, and provide secure system integrations."
      },
      {
        id: "sec-3",
        icon: Lock,
        designator: "DATA_SECURITY",
        heading: "3. Data Security & Storage",
        content: "Security is embedded into our engineering philosophy. We implement strict, industry-standard encryption (AES-256) and data access controls to ensure your project details and personal data remain strictly confidential. Data is hosted on encrypted cloud infrastructures compliant with international data protection standards."
      },
      {
        id: "sec-4",
        icon: Share2,
        designator: "DATA_SHARING",
        heading: "4. Information Sharing",
        content: "Zellio Digital does not sell or rent your personal information to third parties. We may share information with trusted infrastructure partners (e.g., cloud hosting providers) solely for the purpose of executing the agreed-upon technical services."
      },
      {
        id: "sec-5",
        icon: HelpCircle,
        designator: "CONTACT_LEGAL",
        heading: "5. Contact Us",
        content: "If you have any questions or concerns regarding our data practices or this Privacy Policy, please contact our legal and compliance team at legal@zellio.id."
      }
    ]
  },
  id: {
    title: "Kebijakan Privasi",
    lastUpdated: "Pembaruan Terakhir: Oktober 2024",
    sections: [
      {
        id: "sec-1",
        icon: Database,
        designator: "DATA_COLLECTION",
        heading: "1. Informasi yang Kami Kumpulkan",
        content: "Zellio Digital mengumpulkan informasi yang Anda berikan secara langsung saat menggunakan formulir kontak, pengajuan proyek, atau saat berlangganan layanan digital kami. Ini dapat mencakup nama, alamat email, nomor telepon, detail perusahaan, dan spesifikasi proyek Anda."
      },
      {
        id: "sec-2",
        icon: Shield,
        designator: "DATA_USAGE",
        heading: "2. Penggunaan Informasi Anda",
        content: "Kami menggunakan informasi yang dikumpulkan untuk memberikan, memelihara, dan meningkatkan solusi IT enterprise kami. Secara khusus, data Anda memungkinkan tim engineer kami untuk menilai kebutuhan proyek Anda, berkomunikasi mengenai jadwal, dan menyediakan integrasi sistem yang aman."
      },
      {
        id: "sec-3",
        icon: Lock,
        designator: "DATA_SECURITY",
        heading: "3. Keamanan & Penyimpanan Data",
        content: "Keamanan adalah bagian dari filosofi engineering kami. Kami menerapkan enkripsi standar industri (AES-256) dan kontrol akses data untuk memastikan detail proyek dan data pribadi Anda tetap rahasia. Data di-hosting pada infrastruktur cloud yang terenkripsi dan mematuhi standar perlindungan data internasional."
      },
      {
        id: "sec-4",
        icon: Share2,
        designator: "DATA_SHARING",
        heading: "4. Pembagian Informasi",
        content: "Zellio Digital tidak menjual atau menyewakan informasi pribadi Anda kepada pihak ketiga. Kami hanya dapat membagikan informasi kepada mitra infrastruktur terpercaya (mis. penyedia cloud hosting) semata-mata untuk tujuan pelaksanaan layanan teknis yang disepakati."
      },
      {
        id: "sec-5",
        icon: HelpCircle,
        designator: "CONTACT_LEGAL",
        heading: "5. Hubungi Kami",
        content: "Jika Anda memiliki pertanyaan mengenai praktik data kami atau Kebijakan Privasi ini, silakan hubungi tim hukum dan kepatuhan kami di legal@zellio.id."
      }
    ]
  }
};

export default function PrivacyPolicyPage() {
  const { language } = useLanguage();
  const text = policyText[language];
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState(text.sections[0].id);

  // Set up splash loader
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "auto";
    }, 2800);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, []);

  // Update active section based on scroll
  useEffect(() => {
    if (loading) return;

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
  }, [loading, text.sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <PrivacySplashLoader key="privacy-loader" />}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={!loading ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
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
                  <span className="hidden sm:inline-block">DOC_ID: ZP-9388</span>
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
                      zellio-legal-framework.md
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
