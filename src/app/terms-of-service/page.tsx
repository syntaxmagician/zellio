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
    lastUpdated: "Last Updated: August 2026",
    sections: [
      {
        id: "sec-1",
        icon: Shield,
        designator: "ACCEPTANCE",
        heading: "1. Accepting These Terms",
        content: "By accessing this website, submitting a project inquiry, or entering into a service agreement with ZELLIO, you acknowledge that you have read, understood, and agreed to these terms. If any part of this document conflicts with a signed project contract, the terms in the project contract take precedence."
      },
      {
        id: "sec-2",
        icon: Code2,
        designator: "SCOPE",
        heading: "2. What We Build Together",
        content: "ZELLIO provides end-to-end digital product development: websites, web applications, mobile apps, internal business systems, and ongoing technical maintenance. The exact scope of every engagement — features, deliverables, milestones, and deadlines — is always documented in a separate project agreement that both parties sign before any development begins. Nothing is assumed; everything is documented."
      },
      {
        id: "sec-3",
        icon: Database,
        designator: "PAYMENT",
        heading: "3. Payment Structure",
        content: "Project payments follow a milestone-based structure. A minimum deposit of 50% is required before development begins. The remaining balance is due upon final delivery or at agreed-upon milestones. All payments are made via bank transfer to ZELLIO's official accounts. Invoices are issued with clear breakdowns of work completed."
      },
      {
        id: "sec-4",
        icon: Code2,
        designator: "REVISIONS",
        heading: "4. Revisions & Change Requests",
        content: "Each project package includes a defined number of revision rounds, specified in the project agreement. Revisions within scope are handled at no additional cost. Requests that fall outside the original scope — such as new features, additional pages, or architectural changes — are treated as change orders with separate cost estimates and timelines, which we always discuss with you transparently before proceeding."
      },
      {
        id: "sec-5",
        icon: Database,
        designator: "OWNERSHIP",
        heading: "5. Intellectual Property & Ownership",
        content: "Upon full payment, the custom source code, designs, and assets we build specifically for your project become your property. You receive a perpetual, non-exclusive license to use, modify, and deploy them. However, ZELLIO retains rights to its proprietary frameworks, internal tools, and reusable components that pre-date your project. Third-party libraries used in your project remain governed by their respective open-source licenses."
      },
      {
        id: "sec-6",
        icon: Shield,
        designator: "WARRANTY",
        heading: "6. Warranty & Post-Launch Support",
        content: "Every ZELLIO project includes a complimentary bug-fix warranty period as outlined in your contract — typically 30 to 90 days after launch. This warranty covers functional defects in the code we delivered. It does not cover issues caused by unauthorized modifications by third parties, changes to external APIs beyond our control, or new feature requests. Extended maintenance agreements are available as a separate engagement."
      },
      {
        id: "sec-7",
        icon: UserCheck,
        designator: "CANCELLATION",
        heading: "7. Project Cancellation",
        content: "If a project is cancelled after development has commenced, charges will be calculated based on the percentage of work completed to date. Deposits already paid are non-refundable to the extent that they cover work already delivered. We will provide a transparent progress report and any completed deliverables up to the cancellation point."
      },
      {
        id: "sec-8",
        icon: Lock,
        designator: "CONFIDENTIALITY",
        heading: "8. Confidentiality & Non-Disclosure",
        content: "ZELLIO treats all client business information, system architectures, and proprietary data with strict confidentiality. We will not share your project details, internal processes, or data with any third party without your explicit written consent — except where required by law. This obligation survives the end of our business relationship."
      },
      {
        id: "sec-9",
        icon: Shield,
        designator: "LIABILITY",
        heading: "9. Limitation of Liability & Force Majeure",
        content: "ZELLIO's total liability for any claim arising from a project is limited to the total amount paid for that specific project. We are not liable for indirect losses such as lost revenue, business interruptions, or third-party claims. Delays or failures caused by events beyond reasonable control — including natural disasters, ISP outages, or government regulations — are considered force majeure and exempt from liability."
      }
    ]
  },
  id: {
    title: "Syarat dan Ketentuan",
    lastUpdated: "Pembaruan Terakhir: Agustus 2026",
    sections: [
      {
        id: "sec-1",
        icon: Shield,
        designator: "ACCEPTANCE",
        heading: "1. Menerima Ketentuan Ini",
        content: "Dengan mengakses website ini, mengirimkan pertanyaan proyek, atau menandatangani perjanjian layanan dengan ZELLIO, Anda mengakui bahwa Anda telah membaca, memahami, dan menyetujui ketentuan ini. Jika ada bagian dari dokumen ini yang bertentangan dengan kontrak proyek yang telah ditandatangani, ketentuan dalam kontrak proyek yang berlaku."
      },
      {
        id: "sec-2",
        icon: Code2,
        designator: "SCOPE",
        heading: "2. Lingkup Layanan Kami",
        content: "ZELLIO menyediakan pengembangan produk digital end-to-end: website, aplikasi web, aplikasi mobile, sistem bisnis internal, dan pemeliharaan teknis berkelanjutan. Ruang lingkup setiap pekerjaan — fitur, deliverables, milestone, dan tenggat waktu — selalu didokumentasikan dalam perjanjian proyek terpisah yang ditandatangani kedua pihak sebelum pengembangan dimulai."
      },
      {
        id: "sec-3",
        icon: Database,
        designator: "PAYMENT",
        heading: "3. Struktur Pembayaran",
        content: "Pembayaran proyek mengikuti struktur berbasis milestone. Deposit minimum 50% diperlukan sebelum pengembangan dimulai. Sisa pembayaran jatuh tempo saat penyerahan akhir atau pada milestone yang telah disepakati. Semua pembayaran dilakukan melalui transfer bank ke rekening resmi ZELLIO dengan invoice yang mencantumkan rincian pekerjaan yang telah diselesaikan."
      },
      {
        id: "sec-4",
        icon: Code2,
        designator: "REVISIONS",
        heading: "4. Revisi & Permintaan Perubahan",
        content: "Setiap paket proyek mencakup jumlah putaran revisi yang ditentukan dalam perjanjian proyek. Revisi dalam lingkup ditangani tanpa biaya tambahan. Permintaan yang berada di luar lingkup awal — seperti fitur baru, halaman tambahan, atau perubahan arsitektur — diperlakukan sebagai change order dengan estimasi biaya dan timeline terpisah yang selalu kami diskusikan secara transparan sebelum melanjutkan."
      },
      {
        id: "sec-5",
        icon: Database,
        designator: "OWNERSHIP",
        heading: "5. Hak Kekayaan Intelektual & Kepemilikan",
        content: "Setelah pembayaran penuh, source code kustom, desain, dan aset yang kami buat khusus untuk proyek Anda menjadi milik Anda. Anda menerima lisensi perpetual untuk menggunakan, memodifikasi, dan men-deploy-nya. Namun, ZELLIO mempertahankan hak atas framework proprietary, tools internal, dan komponen reusable yang sudah ada sebelum proyek Anda. Library pihak ketiga yang digunakan tetap tunduk pada lisensi open-source masing-masing."
      },
      {
        id: "sec-6",
        icon: Shield,
        designator: "WARRANTY",
        heading: "6. Garansi & Dukungan Pasca-Launch",
        content: "Setiap proyek ZELLIO menyertakan periode garansi perbaikan bug gratis seperti yang tercantum dalam kontrak Anda — biasanya 30 hingga 90 hari setelah launch. Garansi ini mencakup cacat fungsional pada kode yang kami deliver. Garansi tidak mencakup masalah yang disebabkan oleh modifikasi tidak sah oleh pihak ketiga, perubahan API eksternal di luar kendali kami, atau permintaan fitur baru."
      },
      {
        id: "sec-7",
        icon: UserCheck,
        designator: "CANCELLATION",
        heading: "7. Pembatalan Proyek",
        content: "Jika proyek dibatalkan setelah pengembangan dimulai, biaya akan dihitung berdasarkan persentase pekerjaan yang telah diselesaikan. Deposit yang sudah dibayarkan tidak dapat dikembalikan sejauh telah mencakup pekerjaan yang sudah di-deliver. Kami akan memberikan laporan progres transparan dan semua deliverables yang telah selesai hingga titik pembatalan."
      },
      {
        id: "sec-8",
        icon: Lock,
        designator: "CONFIDENTIALITY",
        heading: "8. Kerahasiaan & Non-Disclosure",
        content: "ZELLIO memperlakukan semua informasi bisnis klien, arsitektur sistem, dan data proprietary dengan kerahasiaan ketat. Kami tidak akan membagikan detail proyek, proses internal, atau data Anda kepada pihak ketiga manapun tanpa persetujuan tertulis eksplisit dari Anda — kecuali jika diwajibkan oleh hukum. Kewajiban ini tetap berlaku setelah hubungan bisnis kita berakhir."
      },
      {
        id: "sec-9",
        icon: Shield,
        designator: "LIABILITY",
        heading: "9. Batasan Tanggung Jawab & Force Majeure",
        content: "Total tanggung jawab ZELLIO untuk setiap klaim yang timbul dari sebuah proyek dibatasi pada jumlah total yang dibayarkan untuk proyek tersebut. Kami tidak bertanggung jawab atas kerugian tidak langsung seperti pendapatan yang hilang atau gangguan bisnis. Keterlambatan atau kegagalan yang disebabkan oleh kejadian di luar kendali wajar — termasuk bencana alam, gangguan ISP, atau regulasi pemerintah — dianggap sebagai force majeure."
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
                  <span>DOC_ID: ZS-4781</span>
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
