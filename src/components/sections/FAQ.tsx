"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, MessageCircle, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const localText = {
  en: {
    badge: "Frequently Asked Questions",
    title1: "Got questions?",
    title2: "We have answers.",
    desc1: "Everything you need to know before starting your project. Can't find the answer you're looking for?",
    desc2: "Talk to our team.",
    faqList: [
      {
        q: "What types of digital projects do you handle?",
        a: "We design and build custom web applications, responsive corporate websites, analytics dashboards, mobile applications (iOS/Android), and robust enterprise IT systems.",
      },
      {
        q: "What technologies do you use?",
        a: "We specialize in modern tech stacks, primarily React, Next.js, TypeScript, TailwindCSS, and Node.js for frontend and backend. For databases, we use PostgreSQL and MongoDB, hosted on secure cloud platforms like AWS and GCP.",
      },
      {
        q: "How long does a typical IT project take?",
        a: "Corporate websites and landing pages usually take 4-6 weeks. Custom admin dashboards and mobile apps take 8-12 weeks. Large-scale enterprise systems can take 12-16+ weeks.",
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
    ctaTitle: "Still have questions?",
    ctaDesc: "Our team responds within 1 business day",
    contactBtn: "Contact Us"
  },
  id: {
    badge: "Pertanyaan Populer",
    title1: "Ada pertanyaan?",
    title2: "Kami punya jawabannya.",
    desc1: "Semua yang perlu Anda ketahui sebelum memulai proyek. Tidak menemukan jawaban yang Anda cari?",
    desc2: "Konsultasi sekarang.",
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
    ctaTitle: "Masih punya pertanyaan?",
    ctaDesc: "Tim kami akan merespon dalam waktu 1x24 jam kerja",
    contactBtn: "Hubungi Kami"
  }
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { language } = useLanguage();
  const text = localText[language];

  return (
    <section id="faq" className="py-24 lg:py-32 bg-white relative">
      <div className="section-container relative z-10">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 35, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="w-full mb-16 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-slate-50 text-slate-800 text-[10px] font-black uppercase tracking-[0.2em] mb-6 border border-slate-200">
              {text.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tighter leading-[1.1]">
              {text.title1} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
                {text.title2}
              </span>
            </h2>
          </div>
          <p className="text-slate-500 leading-relaxed max-w-sm md:text-right text-sm">
            {text.desc1}{" "}
            <a href="#contact" className="text-blue-600 font-bold hover:underline underline-offset-4">
              {text.desc2}
            </a>
          </p>
        </motion.div>

        {/* ── FAQ accordion — Single Column Editorial ── */}
        <div className="w-full flex flex-col gap-0 border-t-2 border-slate-900 mt-12">
          {text.faqList.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="border-b border-slate-200 overflow-hidden group"
              >
                {/* Question row */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between py-6 md:py-8 text-left outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-6 md:gap-12 flex-1">
                     <span className="text-sm font-mono font-medium text-slate-300 group-hover:text-blue-600 transition-colors duration-500 hidden sm:block">
                        {String(idx + 1).padStart(2, '0')}
                     </span>
                     <h3 className={`text-xl md:text-2xl font-bold tracking-tight transition-all duration-500 origin-left flex-1 ${
                         isOpen ? "text-blue-600" : "text-slate-900 group-hover:translate-x-3 group-hover:text-blue-600"
                     }`}>
                        {item.q}
                     </h3>
                  </div>

                  {/* Minimal Toggle Icon */}
                  <div className="relative w-8 h-8 flex-shrink-0 flex items-center justify-center text-slate-400 group-hover:text-blue-600 transition-colors duration-500 ml-4">
                    <motion.div
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <Plus size={24} strokeWidth={2} />
                    </motion.div>
                  </div>
                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="pl-0 sm:pl-20 pr-6 pb-8 md:pb-10 max-w-4xl">
                        <p className="text-slate-500 text-base md:text-lg font-light leading-relaxed">
                          {item.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* ── Bottom CTA strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="w-full mt-16"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-8 rounded-[32px] bg-slate-50 border border-slate-100 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-500">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 text-blue-600">
                <MessageCircle size={24} />
              </div>
              <div>
                <div className="text-lg font-bold text-slate-900">
                  {text.ctaTitle}
                </div>
                <div className="text-sm font-medium text-slate-500 mt-1">
                  {text.ctaDesc}
                </div>
              </div>
            </div>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 hover:bg-blue-600 text-white text-[11px] font-black tracking-[0.2em] uppercase rounded-full transition-all duration-300 hover:scale-105 active:scale-95 whitespace-nowrap shadow-lg hover:shadow-blue-500/20"
            >
              {text.contactBtn}
              <ArrowRight size={14} />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
