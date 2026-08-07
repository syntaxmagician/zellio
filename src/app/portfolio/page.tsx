"use client";

import { useState, useRef } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Laptop, Smartphone, LineChart, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { gsap, useGSAP } from "@/lib/gsap";

import { projects } from "@/lib/portfolioData";
import type { Project } from "@/lib/portfolioData";

const iconMap = {
  Globe,
  Smartphone,
  Laptop,
  LineChart,
};

const filterCategories = ["All", "Website", "Internal Dashboard", "APP"] as const;
type FilterCategory = typeof filterCategories[number];

const ITEMS_PER_PAGE = 12;

export default function PortfolioPage() {
  const { language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("All");
  const [currentPage, setCurrentPage] = useState(1);
  const gridRef = useRef<HTMLDivElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);

  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.type === activeCategory
  );

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Intro syncs with the curtain transition from template.tsx.
        const tl = gsap.timeline({ delay: 0.45, defaults: { ease: "power4.out" } });
        tl.from(".porto-eyebrow", { y: 16, opacity: 0, duration: 0.6 })
          .from(".porto-line", { yPercent: 115, duration: 1, stagger: 0.1 }, "-=0.35")
          .from(".porto-rail", { y: 18, opacity: 0, duration: 0.7 }, "-=0.55")
          .from(".porto-video", { y: 32, opacity: 0, scale: 0.98, duration: 0.8 }, "-=0.4");

        // Project counter rolls up to the real archive size.
        const el = counterRef.current;
        if (el) {
          const target = Number(el.dataset.target ?? 0);
          const state = { value: 0 };
          el.textContent = "0";
          gsap.to(state, {
            value: target,
            duration: 1.6,
            delay: 0.8,
            ease: "power2.out",
            onUpdate: () => {
              el.textContent = `${Math.round(state.value)}`;
            },
          });
        }

        // Quiet reveal for the closing CTA band.
        gsap.from(".porto-cta", {
          y: 28,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: ".porto-cta", start: "top 88%", once: true },
        });
      });
    },
    { scope: rootRef, dependencies: [language], revertOnUpdate: true }
  );

  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleFilterChange = (cat: FilterCategory) => {
    setActiveCategory(cat);
    setCurrentPage(1); // Reset to page 1 when filter changes
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    if (gridRef.current) {
      const topOffset = gridRef.current.getBoundingClientRect().top + window.scrollY - 150;
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
  };

  return (
    <div ref={rootRef} className="min-h-screen bg-[#FAFAFA] flex flex-col justify-between selection:bg-blue-500/30">
      <Navbar />

      <main className="flex-grow pb-24 relative z-10">

        {/* Asymmetrical Editorial Hero Section (Dark & Immersive) */}
        <section
          className="w-full bg-white pt-40 pb-20 relative overflow-hidden border-b border-slate-200"
        >
          {/* Subtle Radial Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.04),transparent_45%)]" />

          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
            <span className="porto-eyebrow flex items-center gap-3 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shadow-[0_0_8px_rgba(59,130,246,0.3)]" />
              <span className="text-[11px] font-mono font-bold tracking-[0.3em] uppercase text-blue-600">
                {language === "id" ? "Karya Kami" : "Our Work"}
              </span>
            </span>

            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 lg:gap-24">
              <h1 className="text-6xl sm:text-7xl lg:text-[7rem] font-black tracking-tighter leading-[0.9] text-slate-900 uppercase max-w-4xl">
                <span className="block overflow-hidden py-1">
                  <span className="porto-line block will-change-transform">
                    {language === "id" ? "Arsip" : "Creative"}
                  </span>
                </span>
                <span className="block overflow-hidden py-1">
                  <span className="porto-line block will-change-transform">
                    {language === "id" ? "Kreatif." : "Archive."}
                  </span>
                </span>
              </h1>

              <div className="porto-rail lg:w-[380px] flex-shrink-0 border-l-2 border-blue-500 pl-6 lg:mb-4">
                <p className="text-[15px] font-medium text-slate-600 leading-relaxed">
                  {language === "id"
                    ? "Di Zellio, kami merancang platform digital, dasbor internal, dan sistem produksi berkinerja tinggi. Jelajahi arsip karya terpilih kami."
                    : "At Zellio, we engineer high-performance digital platforms, internal dashboards, and scalable systems. Explore our curated archive of selected works."}
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <span className="w-10 h-px bg-slate-200 block" />
                  <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-slate-500 stat-number">
                    <span ref={counterRef} data-target={12}>
                      12
                    </span>+{" "}
                    {language === "id" ? "Proyek Terpilih" : "Selected Projects"}
                  </span>
                </div>
              </div>
            </div>

            {/* Featured Showreel Video */}
            <div className="porto-video mt-16 relative w-full aspect-[16/9] md:aspect-[21/9] rounded-[24px] md:rounded-[32px] overflow-hidden bg-slate-900 shadow-2xl border border-slate-200 group">
              <video
                src="/lumina3.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="w-full h-full object-cover transform scale-[1.01] transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              <div className="absolute inset-0 ring-1 ring-inset ring-slate-200 rounded-[24px] md:rounded-[32px] pointer-events-none" />
            </div>
          </div>
        </section>

        {/* Sticky Horizontal Filter Navigation */}
        <section className="sticky top-[80px] z-40 bg-white/80 backdrop-blur-xl border-b border-slate-200/60 shadow-sm py-4">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center gap-2 overflow-x-auto [&::-webkit-scrollbar]:hidden">
            {filterCategories.map((cat) => {
              const label = cat === "All" ? (language === "id" ? "Semua" : "All Work") : cat;
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => handleFilterChange(cat)}
                  className={`relative px-6 py-2.5 rounded-full text-[11px] font-black uppercase tracking-[0.15em] whitespace-nowrap transition-colors duration-300 ${
                    isActive ? "text-white" : "text-slate-500 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="portfolioTab"
                      className="absolute inset-0 bg-slate-900 rounded-full -z-10 shadow-md"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{label}</span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Editorial Project Grid */}
        <section ref={gridRef} className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 pt-16 lg:pt-24 min-h-[50vh]">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            <AnimatePresence mode="popLayout">
              {paginatedProjects.map((project, idx) => {
                const Icon = iconMap[project.icon] || Globe;
                // Asymmetric editorial logic: pattern repeats every 10 items perfectly.
                // 1 wide, 1 narrow -> 3 narrow -> 1 narrow, 1 wide -> 3 narrow.
                const isFeatured = idx % 10 === 0 || idx % 10 === 6;
                
                return (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -20 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    key={project.title}
                    className={`group flex flex-col gap-6 cursor-pointer ${isFeatured ? "md:col-span-2 lg:col-span-2" : "col-span-1"}`}
                  >
                    {/* Visual Container */}
                    <Link href={`/portfolio/${project.slug}`} className="block relative">
                      <div className={`relative w-full rounded-[24px] overflow-hidden bg-slate-100 border border-slate-200/60 shadow-sm ${
                        isFeatured ? "aspect-[4/3] md:aspect-[21/9]" : "aspect-[4/3]"
                      }`}>
                        {project.images ? (
                          <div className="flex w-full h-full gap-1 bg-slate-200 p-0.5">
                            {project.images.map((img, i) => (
                              <div key={i} className="relative flex-1 h-full rounded-[20px] overflow-hidden">
                                <Image
                                  src={img}
                                  alt={`${project.title} Preview ${i + 1}`}
                                  fill
                                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                  className="object-cover transform scale-100 group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                                />
                              </div>
                            ))}
                          </div>
                        ) : (
                          <Image
                            src={project.image || ""}
                            alt={project.title}
                            fill
                            sizes={isFeatured ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
                            className="object-cover transform scale-100 group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                          />
                        )}
                        
                        {/* Hover Dark Overlay & Button */}
                        <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-colors duration-500 pointer-events-none flex items-center justify-center">
                          <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm text-slate-900 flex items-center justify-center opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 shadow-xl">
                            <ArrowUpRight size={24} strokeWidth={2.5} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </Link>

                    {/* Metadata & Typography */}
                    <div className="flex flex-col flex-grow">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-widest border border-slate-200 bg-white text-slate-500 group-hover:text-blue-600 group-hover:border-blue-200 transition-colors duration-300">
                          <Icon size={12} strokeWidth={2.5} />
                          {project.category[language as "id" | "en"]}
                        </span>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400">
                          / {project.type}
                        </span>
                        {project.isPrivate && (
                          <span className="text-[10px] font-mono font-bold uppercase tracking-widest px-2 py-1 rounded-sm bg-slate-900 text-white ml-auto">
                            {language === "id" ? "Sistem Internal Privat" : "Private Internal System"}
                          </span>
                        )}
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="text-sm font-medium text-slate-500 leading-relaxed mb-6 line-clamp-2 md:line-clamp-3">
                        {project.desc[language as "id" | "en"]}
                      </p>

                      <Link 
                        href={`/portfolio/${project.slug}`}
                        className="inline-flex items-center gap-2 text-[11px] font-bold text-blue-600 hover:text-blue-700 transition-colors uppercase tracking-widest mb-4 z-10 relative"
                      >
                        {language === "id" ? "Lihat Detail Proyek" : "View Project Details"}
                        <ArrowUpRight size={14} strokeWidth={3} />
                      </Link>

                      {/* Tech Tags */}
                      <div className="flex flex-wrap gap-2 pt-5 border-t border-slate-100 mt-auto">
                        {project.tags.map((tag, j) => (
                          <span
                            key={j}
                            className="text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-slate-100 text-slate-500"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="w-full flex items-center justify-center gap-2 mt-24 border-t border-slate-200 pt-12">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-200 text-slate-600 hover:bg-slate-50 disabled:opacity-30 disabled:pointer-events-none transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" /></svg>
              </button>
              
              {Array.from({ length: totalPages }).map((_, idx) => {
                const pageNum = idx + 1;
                const isActive = currentPage === pageNum;
                return (
                  <button
                    key={pageNum}
                    onClick={() => handlePageChange(pageNum)}
                    className={`w-10 h-10 flex items-center justify-center rounded-full text-xs font-black transition-colors ${
                      isActive ? "bg-slate-900 text-white shadow-md" : "text-slate-600 hover:bg-slate-100 border border-transparent"
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-200 text-slate-600 hover:bg-slate-50 disabled:opacity-30 disabled:pointer-events-none transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          )}
        </section>

        {/* Closing CTA band */}
        <section className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 mt-24">
          <div
            className="porto-cta relative overflow-hidden rounded-3xl bg-[#0B2545] text-white p-10 sm:p-14 lg:p-16"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)
              `,
              backgroundSize: "44px 44px",
            }}
          >
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
              <div className="max-w-2xl">
                <span className="text-[10px] font-mono font-bold tracking-[0.25em] uppercase text-blue-300/90 mb-5 block">
                  {language === "id" ? "Proyek Berikutnya" : "Next Project"}
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.05]">
                  {language === "id"
                    ? "Punya sistem yang ingin dibangun?"
                    : "Have a system in mind?"}
                </h2>
                <p className="mt-4 text-[15px] sm:text-base text-slate-300/90 font-medium leading-relaxed max-w-xl">
                  {language === "id"
                    ? "Ceritakan kebutuhan Anda — kami bantu merancang arsitektur, membangun, dan meluncurkannya."
                    : "Tell us what you need — we'll help architect it, build it, and ship it."}
                </p>
              </div>
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-950 hover:bg-blue-50 font-bold text-sm uppercase tracking-widest rounded-2xl transition-all duration-300 flex-shrink-0"
              >
                <span>{language === "id" ? "Mulai Proyek" : "Start Your Project"}</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
