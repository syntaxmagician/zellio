"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const localText = {
  en: {
    sectionLabel: "Before We Start",
    title: "Questions Worth Asking.",
    desc: "Everything you need to know about our workflow, technology, and engineering standards before we build together.",
    readTimeLabel: "Reading Time",
    readTimeValue: "5 Min Read",
    transparencyLabel: "Collaboration",
    transparencyValue: "Direct with Engineers",
    faqList: [
      {
        q: "What types of digital projects do you handle?",
        a: "We design and build custom web applications, responsive corporate websites, analytics dashboards, mobile applications (iOS/Android), and custom business systems.",
      },
      {
        q: "What technologies do you use?",
        a: "We specialize in modern tech stacks, primarily React, Next.js, TypeScript, TailwindCSS, and Node.js for frontend and backend. For databases, we use PostgreSQL and MongoDB, hosted on secure cloud platforms like AWS and GCP.",
      },
      {
        q: "How long does a typical IT project take?",
        a: "Corporate websites and landing pages usually take 4-6 weeks. Custom admin dashboards and mobile apps take 8-12 weeks. Large-scale business systems can take 12-16+ weeks.",
      },
      {
        q: "How do you structure project pricing?",
        a: "Our pricing is project-based and depends entirely on the technical scope and timeline. After our discovery call, we provide a detailed technical proposal with a fixed-price estimate and transparent milestones.",
      },
      {
        q: "Do you design the UI/UX as well?",
        a: "Yes. Every development project includes a dedicated UI/UX design phase in Figma. We create wireframes and high-fidelity prototypes for your approval before writing a single line of code.",
      },
      {
        q: "Do you provide maintenance and support after launch?",
        a: "Absolutely. We provide 3 months of free post-launch support to monitor server performance, fix bugs, and ensure everything runs smoothly. Ongoing monthly maintenance retainers are also available.",
      },
      {
        q: "What is your project development methodology?",
        a: "We work using agile methodologies. We divide the project into 2-week sprints and hold regular progress reviews. You will also get access to a live staging link to track development progress.",
      }
    ],
  },
  id: {
    sectionLabel: "Sebelum Memulai",
    title: "Pertanyaan Penting.",
    desc: "Semua yang perlu Anda ketahui tentang alur kerja, teknologi, dan standar koding kami sebelum kita membangun bersama.",
    readTimeLabel: "Waktu Baca",
    readTimeValue: "5 Menit",
    transparencyLabel: "Kolaborasi",
    transparencyValue: "Langsung dengan Engineer",
    faqList: [
      {
        q: "Jenis proyek digital apa saja yang Anda tangani?",
        a: "Kami merancang dan membangun aplikasi web kustom, website perusahaan interaktif, dashboard analitik, aplikasi mobile (iOS/Android), hingga sistem IT skala enterprise.",
      },
      {
        q: "Teknologi apa saja yang digunakan?",
        a: "Kami ahli menggunakan tech stack modern seperti React, Next.js, TypeScript, TailwindCSS, dan Node.js. Untuk database, kami menggunakan PostgreSQL & MongoDB, serta deployment di AWS atau GCP.",
      },
      {
        q: "Berapa lama waktu pengerjaan sebuah proyek?",
        a: "Website company profile biasanya memakan waktu 4-6 minggu. Custom dashboard dan aplikasi mobile sekitar 8-12 minggu. Sistem skala besar bisa memakan waktu 12-16+ minggu.",
      },
      {
        q: "Bagaimana sistem harga dan pembayarannya?",
        a: "Harga berbasis pada skala proyek, fitur, dan tingkat kerumitan. Setelah sesi konsultasi, kami akan memberikan proposal teknis dengan estimasi harga tetap (fixed-price) dan timeline yang transparan.",
      },
      {
        q: "Apakah layanan termasuk desain UI/UX?",
        a: "Tentu saja. Setiap proyek mencakup fase desain UI/UX khusus di Figma. Kami akan membuat prototipe interaktif (mockup) untuk Anda setujui sebelum mulai tahap koding.",
      },
      {
        q: "Apakah ada layanan maintenance (pemeliharaan) setelah rilis?",
        a: "Pastinya! Kami memberikan gratis dukungan (support) paska rilis selama 3 bulan untuk memonitor server dan memperbaiki bug. Kami juga menyediakan paket retainer bulanan untuk maintenance jangka panjang.",
      },
      {
        q: "Bagaimana metodologi kerja ZELLIO?",
        a: "Kami menggunakan metode Agile/Scrum. Proyek dibagi dalam sprint 2 mingguan beserta review berkala. Anda juga akan mendapat akses tautan server 'staging' untuk memantau progres secara live.",
      }
    ],
  }
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { language } = useLanguage();
  const text = localText[language];

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white border-t border-slate-200/50">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Split Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT SIDE: Sticky Header Column (col-span-4) */}
          <div className="col-span-1 lg:col-span-4 lg:sticky lg:top-32 flex flex-col justify-start">
            
            {/* Section label */}
            <div className="flex items-center gap-3 mb-6 lg:mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              <span className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-slate-800">
                {text.sectionLabel}
              </span>
            </div>

            {/* Editorial Heading */}
            <h2 className="text-3xl lg:text-[2.25rem] font-black text-slate-900 tracking-tight leading-[1.1] mb-5">
              {text.title}
            </h2>

            {/* Intro paragraph */}
            <p className="text-slate-500 font-medium text-sm lg:text-base leading-relaxed mb-8 lg:mb-10 max-w-sm">
              {text.desc}
            </p>

            {/* Statistics details */}
            <div className="space-y-5 max-w-xs">
              <div className="border-t border-slate-100 pt-4">
                <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest mb-1">
                  {text.readTimeLabel}
                </div>
                <div className="text-sm font-bold text-slate-900 font-mono">
                  {text.readTimeValue}
                </div>
              </div>
              <div className="border-t border-slate-100 pt-4">
                <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest mb-1">
                  {text.transparencyLabel}
                </div>
                <div className="text-sm font-bold text-slate-900 font-mono">
                  {text.transparencyValue}
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE: Vertical Question Stack (col-span-8) */}
          <div className="col-span-1 lg:col-span-8 flex flex-col border-t border-slate-900">
            {text.faqList.map((item, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div
                  key={idx}
                  className="border-b border-slate-200 overflow-hidden group"
                >
                  {/* Text-based Question Button */}
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full text-left py-5 lg:py-6 outline-none flex items-start justify-between gap-6"
                    aria-expanded={isOpen}
                  >
                    <h3
                      className={`text-base lg:text-lg font-bold tracking-tight transition-colors duration-300 leading-snug pr-8 ${
                        isOpen 
                          ? "text-slate-400 font-semibold" 
                          : "text-slate-900 group-hover:text-slate-600"
                      }`}
                    >
                      {item.q}
                    </h3>
                  </button>

                  {/* Editorial Answer (Fades & Translates cleanly) */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0, y: -8 }}
                        animate={{ height: "auto", opacity: 1, y: 0 }}
                        exit={{ height: 0, opacity: 0, y: -8 }}
                        transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="text-slate-500 font-medium text-xs sm:text-sm lg:text-[0.95rem] leading-relaxed max-w-2xl pb-6 lg:pb-7">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
        
      </div>
    </section>
  );
}
