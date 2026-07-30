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
    lastUpdated: "Last Updated: June 2026",
    sections: [
      {
        id: "sec-1",
        icon: Shield,
        designator: "WELCOME",
        heading: "1. Welcome to Zellio",
        content: "Hello and welcome to Zellio! We're thrilled to have you here. By using our website, reaching out for projects, or hiring us to build your software, you're agreeing to these terms. If you don't agree, that's completely fine, but it means we won't be able to work together or offer our services to you."
      },
      {
        id: "sec-2",
        icon: Code2,
        designator: "OUR_WORK",
        heading: "2. How We Work Together",
        content: "Our goal is to build amazing digital products for you—whether that's a new website, a custom mobile app, or a complex software system. The exact details, timelines, and costs of what we'll build together will always be clearly written down in a separate, friendly project agreement before we write a single line of code."
      },
      {
        id: "sec-3",
        icon: Database,
        designator: "OWNERSHIP",
        heading: "3. Who Owns What",
        content: "We believe in fairness. While we retain the rights to our underlying frameworks and the core tools we use every day, you get a perpetual license to use, run, and modify the custom software we build specifically for your business once the project is fully paid for. Simple as that."
      },
      {
        id: "sec-4",
        icon: UserCheck,
        designator: "TEAMWORK",
        heading: "4. Your Role in the Project",
        content: "Great software is built through collaboration. To keep everything on schedule, we'll need you to share your requirements, feedback, and any necessary assets (like logos or server access) in a timely manner. If things get delayed on your end, it might push back our delivery dates, but we'll always communicate with you along the way."
      },
      {
        id: "sec-5",
        icon: Lock,
        designator: "LIABILITY",
        heading: "5. Keeping Expectations Clear",
        content: "We take immense pride in our code, but software is complex and sometimes unpredictable. To the extent allowed by law, we can't be held financially responsible for indirect issues like lost profits or unexpected server downtime after hand-off. We promise to do our best work, and we ask that you use the systems responsibly."
      }
    ]
  },
  id: {
    title: "Syarat dan Ketentuan",
    lastUpdated: "Pembaruan Terakhir: Juni 2026",
    sections: [
      {
        id: "sec-1",
        icon: Shield,
        designator: "WELCOME",
        heading: "1. Selamat Datang di Zellio",
        content: "Halo dan selamat datang! Kami senang Anda ada di sini. Dengan menelusuri website kami atau bekerja sama dalam sebuah proyek, Anda setuju dengan ketentuan ini. Jika Anda kurang nyaman dengan aturan ini, tidak apa-apa, tapi sayangnya kita mungkin tidak bisa bekerja sama lebih jauh."
      },
      {
        id: "sec-2",
        icon: Code2,
        designator: "OUR_WORK",
        heading: "2. Cara Kita Bekerja Sama",
        content: "Fokus utama kami adalah menciptakan produk digital yang luar biasa untuk Anda—baik itu website, aplikasi mobile, maupun sistem internal. Semua detail mengenai waktu pengerjaan, harga, dan fitur akan selalu kita sepakati bersama secara tertulis sebelum proyek dimulai, jadi tidak ada kejutan di akhir."
      },
      {
        id: "sec-3",
        icon: Database,
        designator: "OWNERSHIP",
        heading: "3. Kepemilikan Sistem",
        content: "Kami percaya pada kerja sama yang adil. Kami tetap memiliki hak atas framework dasar yang kami gunakan, namun setelah pembayaran proyek lunas, Anda bebas menggunakan, menjalankan, dan memodifikasi aplikasi yang kami buat khusus untuk bisnis Anda. Sangat sederhana dan transparan."
      },
      {
        id: "sec-4",
        icon: UserCheck,
        designator: "TEAMWORK",
        heading: "4. Peran Anda dalam Proyek",
        content: "Aplikasi yang hebat lahir dari komunikasi yang baik. Agar proyek selesai tepat waktu, kami sangat membutuhkan bantuan Anda untuk memberikan feedback, materi desain, atau akses yang diperlukan sesuai jadwal. Keterlambatan dari pihak Anda tentu bisa menggeser tenggat waktu, tapi tenang saja, kita akan selalu berkoordinasi."
      },
      {
        id: "sec-5",
        icon: Lock,
        designator: "LIABILITY",
        heading: "5. Harapan dan Tanggung Jawab",
        content: "Kami sangat bangga dengan kualitas pekerjaan kami, namun dunia software terkadang sulit diprediksi secara absolut. Sesuai batasan hukum, kami tidak dapat dimintai pertanggungjawaban finansial atas hal-hal di luar kendali seperti server yang down atau hilangnya potensi keuntungan setelah sistem diserahkan. Kami berjanji memberikan yang terbaik, dan kami harap Anda menggunakannya dengan bijak."
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
