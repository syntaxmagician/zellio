"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { gsap, useGSAP } from "@/lib/gsap";

interface CaseProject {
  title: string;
  sector: { en: string; id: string };
  desc: { en: string; id: string };
  tags: string[];
  image: string;
}

const projects: CaseProject[] = [
  {
    title: "MasterDiskon",
    sector: { en: "Travel & Hospitality — Booking Dashboard", id: "Travel & Perhotelan — Dashboard Booking" },
    desc: {
      en: "A comprehensive dashboard for travel agents — flights, hotels, and tour packages with dynamic pricing systems.",
      id: "Dashboard komprehensif untuk travel agent — tiket pesawat, hotel, dan paket wisata dengan sistem harga dinamis.",
    },
    tags: ["Next.js", "Payment Gateway", "Travel API"],
    image: "/masdis das.png",
  },
  {
    title: "Eureka Internal ERP",
    sector: { en: "Enterprise ERP System", id: "Sistem ERP Korporat" },
    desc: {
      en: "Full-module ERP covering sales, unit monitoring, service, automated invoicing, and vendor data integration.",
      id: "ERP full-module yang mencakup penjualan, monitoring unit, servis, invoice otomatis, hingga integrasi data vendor.",
    },
    tags: ["Angular", "Java", "Oracle"],
    image: "/elogs dash.png",
  },
  {
    title: "Jaja.id",
    sector: { en: "E-Commerce Marketplace", id: "Marketplace E-Commerce" },
    desc: {
      en: "A digital marketplace with smart cart management, seller inventory control, and multi-courier shipping.",
      id: "Marketplace digital dengan manajemen keranjang pintar, kontrol inventaris penjual, dan ongkir multi-kurir.",
    },
    tags: ["React", "Express", "MongoDB"],
    image: "/jaja id web.png",
  },
];

const localText = {
  en: {
    badge: "Selected Work",
    headline: "Real systems, in production.",
    desc: "Three of the platforms businesses run on every day — pulled straight from the full portfolio.",
    cta: "View Full Portfolio",
    open: "View portfolio",
    caseLabel: "Case",
  },
  id: {
    badge: "Karya Pilihan",
    headline: "Sistem nyata, sudah berjalan.",
    desc: "Tiga platform yang dipakai bisnis setiap hari — diambil langsung dari portofolio lengkap kami.",
    cta: "Lihat Portofolio Lengkap",
    open: "Lihat portofolio",
    caseLabel: "Case",
  },
};

export default function SelectedWork() {
  const { language } = useLanguage();
  const text = localText[language];
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // As the next card slides over, the one beneath settles back into the deck.
      mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        const cards = gsap.utils.toArray<HTMLElement>(".work-card");
        cards.forEach((card, i) => {
          const next = cards[i + 1];
          if (!next) return;
          gsap.to(card, {
            scale: 0.94,
            filter: "brightness(0.8)",
            transformOrigin: "center top",
            ease: "none",
            scrollTrigger: {
              trigger: next,
              start: "top 90%",
              end: "top 20%",
              scrub: 0.4,
            },
          });
        });
      });
    },
    { scope: sectionRef, dependencies: [language], revertOnUpdate: true }
  );

  return (
    <section
      id="work"
      ref={sectionRef}
      aria-labelledby="work-heading"
      className="relative py-20 lg:py-28 bg-white border-t border-slate-200/50"
    >
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Editorial header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-12 lg:mb-16">
          <div className="max-w-2xl">
            <span className="text-[10px] font-mono font-bold tracking-[0.25em] uppercase text-blue-600 mb-4 block">
              {text.badge}
            </span>
            <h2
              id="work-heading"
              className="text-3xl sm:text-4xl md:text-[3rem] font-black text-slate-900 tracking-tight leading-[1.1]"
            >
              {text.headline}
            </h2>
          </div>
          <div className="max-w-md lg:pb-2 text-left lg:text-right">
            <p className="text-[15px] md:text-base text-slate-500 leading-relaxed font-medium">
              {text.desc}
            </p>
          </div>
        </div>

        {/* Stacked case deck */}
        <div className="relative">
          {projects.map((project, i) => (
            <Link
              key={project.title}
              href="/portfolio"
              aria-label={`${project.title} — ${text.open}`}
              className="work-card group sticky block overflow-hidden rounded-3xl bg-[#0B2545] text-white mb-6 lg:mb-10 will-change-transform focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
              style={{
                top: `calc(88px + ${i * 14}px)`,
                backgroundImage: `
                  linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)
                `,
                backgroundSize: "44px 44px",
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center p-7 sm:p-10 lg:p-14 lg:min-h-[68vh]">
                {/* Copy */}
                <div className="lg:col-span-5 flex flex-col order-2 lg:order-1">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-blue-300/90">
                      {text.caseLabel} 0{i + 1}
                    </span>
                    <span className="h-px flex-1 max-w-[80px] bg-white/15" />
                    <span className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-slate-400">
                      0{i + 1} / 0{projects.length}
                    </span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl xl:text-5xl font-black tracking-tight leading-[1.05] mb-3 group-hover:text-blue-200 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-[11px] font-mono font-bold tracking-[0.18em] uppercase text-slate-400 mb-6">
                    {project.sector[language]}
                  </p>
                  <p className="text-[15px] sm:text-base text-slate-300/90 font-medium leading-relaxed max-w-md mb-8">
                    {project.desc[language]}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-10">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-300 border border-white/15 rounded-full px-3.5 py-1.5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className="mt-auto inline-flex items-center gap-2 text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-white/80 group-hover:text-white transition-colors duration-300">
                    {text.open}
                    <ArrowUpRight
                      size={14}
                      className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                    />
                  </span>
                </div>

                {/* Product screenshot in a browser frame */}
                <div className="lg:col-span-7 order-1 lg:order-2">
                  <div className="rounded-2xl bg-white/[0.06] border border-white/10 p-2 sm:p-2.5 backdrop-blur-[1px]">
                    <div className="flex items-center gap-1.5 px-3 py-2">
                      <span className="w-2 h-2 rounded-full bg-white/20" />
                      <span className="w-2 h-2 rounded-full bg-white/20" />
                      <span className="w-2 h-2 rounded-full bg-white/20" />
                    </div>
                    <div className="relative aspect-[16/10] rounded-lg overflow-hidden bg-slate-900">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 58vw"
                        className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-4 lg:mt-8">
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-slate-950 hover:bg-slate-900 text-white font-bold text-sm uppercase tracking-widest rounded-2xl transition-all duration-300"
          >
            <span>{text.cta}</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}
