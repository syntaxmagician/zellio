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
    lastUpdated: "Last Updated: August 2026",
    sections: [
      {
        id: "sec-1",
        icon: Database,
        designator: "COLLECTION",
        heading: "1. What We Collect — and Nothing More",
        content: "At ZELLIO, we operate on a strict \"minimum necessary\" principle. We only collect information you actively provide when reaching out to us — typically your name, email address, phone number, and the details of your project or inquiry. We do not scrape social profiles, run background checks, or collect behavioral data without your explicit awareness. If you consult with us, you share what you're comfortable sharing. That's the only deal we operate on."
      },
      {
        id: "sec-2",
        icon: Shield,
        designator: "PURPOSE",
        heading: "2. Why We Use Your Information",
        content: "The information you provide is used exclusively to serve you: responding to project inquiries, preparing technical proposals, coordinating development timelines, and delivering progress updates during active engagements. We may occasionally send relevant industry insights if you've opted in — and opting out is always one click away. We will never use your data to retarget you with ads, resell it to lead brokers, or hand it to third-party marketing services."
      },
      {
        id: "sec-3",
        icon: Lock,
        designator: "SECURITY",
        heading: "3. How We Protect Your Data",
        content: "We apply the same standards of craftsmanship to your data security as we do to the code we ship. All data is stored on enterprise-grade cloud infrastructure with encryption at rest and in transit. Access is restricted to team members directly involved in your project, and internal access logs are maintained. While no system is immune to all risk — we're transparent about that — we continuously audit our own security posture and apply patches as threats evolve."
      },
      {
        id: "sec-4",
        icon: Share2,
        designator: "SHARING",
        heading: "4. When Data Is Shared — and With Whom",
        content: "We do not sell, rent, or trade your personal data to any third party. Period. Where necessary to deliver our services — such as using cloud hosting providers like Vercel or communication tools — only the absolute minimum required data is shared with those vendors, and they are contractually bound to handle it responsibly. If we are ever required to disclose information by law or legal order, we will notify you to the extent legally permitted and limit disclosure to what is strictly required."
      },
      {
        id: "sec-5",
        icon: CheckCircle2,
        designator: "YOUR_RIGHTS",
        heading: "5. Your Rights Over Your Data",
        content: "You have full rights over the information you've provided us. At any time, you may request to access a copy of your data, ask us to correct inaccurate records, or request permanent deletion from our systems. You may also withdraw any previously given consent for communications. To exercise any of these rights, simply email legal@zellio.id — we respond promptly and without friction."
      },
      {
        id: "sec-6",
        icon: HelpCircle,
        designator: "COOKIES",
        heading: "6. Cookies on This Website",
        content: "This website uses a small number of cookies to maintain language preferences across sessions and gather anonymous aggregate analytics via tools like Google Analytics. We do not use advertising cookies or cross-site tracking cookies. You can configure your browser to refuse cookies at any time — note that some functional elements of the site may behave differently if session cookies are blocked. See our dedicated Cookie Policy page for more granular detail."
      },
      {
        id: "sec-7",
        icon: Database,
        designator: "CHANGES",
        heading: "7. Policy Updates & How to Reach Us",
        content: "This policy reflects how ZELLIO operates today and will be updated whenever our practices materially change — always with a visible revision date at the top. We won't bury major changes in legal jargon. For questions, correction requests, or deletion of your data, reach out to us directly at legal@zellio.id. We're a real team of engineers and designers in Indonesia, and we take these responsibilities seriously."
      }
    ]
  },
  id: {
    title: "Kebijakan Privasi",
    lastUpdated: "Pembaruan Terakhir: Agustus 2026",
    sections: [
      {
        id: "sec-1",
        icon: Database,
        designator: "COLLECTION",
        heading: "1. Data yang Kami Kumpulkan — Tidak Lebih",
        content: "ZELLIO beroperasi dengan prinsip \"minimum yang diperlukan\". Kami hanya mengumpulkan informasi yang Anda berikan secara aktif saat menghubungi kami — biasanya nama, alamat email, nomor telepon, dan detail proyek atau pertanyaan Anda. Kami tidak mengikis profil media sosial, melakukan pemeriksaan latar belakang, atau mengumpulkan data perilaku tanpa sepengetahuan Anda."
      },
      {
        id: "sec-2",
        icon: Shield,
        designator: "PURPOSE",
        heading: "2. Mengapa Kami Menggunakan Informasi Anda",
        content: "Informasi yang Anda berikan digunakan semata-mata untuk melayani Anda: merespons pertanyaan proyek, menyiapkan proposal teknis, mengoordinasikan timeline pengembangan, dan memberikan pembaruan progres selama proyek berjalan. Kami tidak akan pernah menggunakan data Anda untuk menargetkan iklan, menjualnya ke broker data pihak ketiga, atau menyerahkannya ke layanan pemasaran manapun."
      },
      {
        id: "sec-3",
        icon: Lock,
        designator: "SECURITY",
        heading: "3. Cara Kami Melindungi Data Anda",
        content: "Kami menerapkan standar yang sama pada keamanan data Anda seperti yang kami terapkan pada kode yang kami kirimkan. Semua data disimpan di infrastruktur cloud tingkat enterprise dengan enkripsi saat istirahat dan dalam transit. Akses dibatasi hanya untuk anggota tim yang langsung terlibat dalam proyek Anda, dan log akses internal dikelola. Kami terus mengaudit postur keamanan kami sendiri dan menerapkan patch seiring berkembangnya ancaman."
      },
      {
        id: "sec-4",
        icon: Share2,
        designator: "SHARING",
        heading: "4. Kapan Data Dibagikan — dan Kepada Siapa",
        content: "Kami tidak menjual, menyewakan, atau memperdagangkan data pribadi Anda kepada pihak manapun. Di mana diperlukan untuk memberikan layanan kami — seperti menggunakan penyedia hosting cloud atau alat komunikasi — hanya data minimum yang diperlukan yang dibagikan, dan mereka terikat secara kontraktual untuk menanganinya dengan bertanggung jawab. Jika kami diwajibkan oleh hukum untuk mengungkapkan informasi, kami akan memberi tahu Anda sejauh diizinkan secara hukum."
      },
      {
        id: "sec-5",
        icon: CheckCircle2,
        designator: "YOUR_RIGHTS",
        heading: "5. Hak-Hak Anda atas Data",
        content: "Anda memiliki hak penuh atas informasi yang Anda berikan kepada kami. Kapan saja, Anda dapat meminta salinan data Anda, meminta kami memperbaiki catatan yang tidak akurat, atau meminta penghapusan permanen dari sistem kami. Anda juga dapat menarik persetujuan yang sebelumnya diberikan untuk komunikasi. Untuk menggunakan hak-hak ini, cukup email ke legal@zellio.id — kami merespons dengan cepat."
      },
      {
        id: "sec-6",
        icon: HelpCircle,
        designator: "COOKIES",
        heading: "6. Cookie di Website Ini",
        content: "Website ini menggunakan sejumlah kecil cookie untuk mempertahankan preferensi bahasa antar sesi dan mengumpulkan analitik agregat anonim melalui alat seperti Google Analytics. Kami tidak menggunakan cookie iklan atau cookie pelacakan lintas situs. Anda dapat mengonfigurasi browser untuk menolak cookie kapan saja. Lihat halaman Kebijakan Cookie kami untuk detail lebih lengkap."
      },
      {
        id: "sec-7",
        icon: Database,
        designator: "CHANGES",
        heading: "7. Pembaruan Kebijakan & Cara Menghubungi Kami",
        content: "Kebijakan ini mencerminkan cara ZELLIO beroperasi saat ini dan akan diperbarui setiap kali praktik kami berubah secara material — selalu dengan tanggal revisi yang terlihat di bagian atas. Untuk pertanyaan, permintaan koreksi, atau penghapusan data Anda, hubungi kami langsung di legal@zellio.id. Kami adalah tim nyata yang berbasis di Indonesia, dan kami menganggap tanggung jawab ini dengan serius."
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
