"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServiceIndexList, { type ServiceRow } from "@/components/services/ServiceIndexList";
import { servicesData, developmentProcess } from "@/lib/data";
import { slugify } from "@/lib/slug";
import { useLanguage } from "@/context/LanguageContext";
import { gsap, useGSAP } from "@/lib/gsap";

/**
 * One image per service, in servicesData order. Each was picked against the
 * subject of the service — warehouse aisles for inventory, a floor of desks for
 * HRIS, server racks for DevOps — rather than generic desk-and-laptop stock.
 */
const serviceImages = [
  "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1200&auto=format&fit=crop", // Custom Web (code on screen)
  "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop", // Company Profile (corporate interior)
  "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=1200&auto=format&fit=crop", // E-Commerce (retail packaging)
  "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop", // Mobile App (phone screen)
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop", // ERP (warehouse operations)
  "https://images.unsplash.com/photo-1590650153855-d9e808231d41?q=80&w=1200&auto=format&fit=crop", // CRM (client-facing work)
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop", // HRIS (floor of desks)
  "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop", // SaaS (software in use)
];

const localText = {
  en: {
    eyebrow: "Services",
    headline: ["What we", "build for you."],
    lead: "Fifteen disciplines under one roof — from a landing page that has to convert this quarter, to the ERP a thousand people will open every morning. Same team, same standard.",
    metaServices: "Services",
    metaCategories: "Disciplines",
    scroll: "Scroll",
    indexLabel: "The index",
    indexTitle: "Every service, in full.",
    craftEyebrow: "How we work",
    craftTitle: "We don't hand you a template and call it a system.",
    craftBody:
      "Every engagement starts with the same question — what is this software actually supposed to change? Then we architect for that, not for a demo.",
    processLabel: "The process",
    processTitle: "Five steps, no surprises.",
    ctaTitle: "Have something to build?",
    ctaBody: "Tell us the problem. We will tell you honestly whether we are the right team for it.",
    ctaButton: "Start a project",
  },
  id: {
    eyebrow: "Layanan",
    headline: ["Yang kami", "bangun untukmu."],
    lead: "Lima belas disiplin dalam satu atap — dari landing page yang harus mendatangkan konversi kuartal ini, sampai ERP yang dibuka seribu orang setiap pagi. Tim yang sama, standar yang sama.",
    metaServices: "Layanan",
    metaCategories: "Disiplin",
    scroll: "Gulir",
    indexLabel: "Daftar isi",
    indexTitle: "Semua layanan, lengkap.",
    craftEyebrow: "Cara kami bekerja",
    craftTitle: "Kami tidak menyerahkan template lalu menyebutnya sistem.",
    craftBody:
      "Setiap proyek dimulai dari pertanyaan yang sama — sebenarnya perangkat lunak ini harus mengubah apa? Arsitekturnya kami rancang untuk itu, bukan untuk demo.",
    processLabel: "Prosesnya",
    processTitle: "Lima tahap, tanpa kejutan.",
    ctaTitle: "Ada yang ingin dibangun?",
    ctaBody: "Ceritakan masalahnya. Kami akan jujur apakah kami tim yang tepat untuk itu.",
    ctaButton: "Mulai proyek",
  },
};

export default function ServicesPage() {
  const { language } = useLanguage();
  const text = localText[language];
  const heroRef = useRef<HTMLElement>(null);
  const pageRef = useRef<HTMLDivElement>(null);

  const rows: ServiceRow[] = servicesData.map((s, i) => ({
    slug: slugify(s.title),
    title: s.title,
    description: s.description,
    category: s.category,
    duration: s.duration,
    level: s.level,
    image: serviceImages[i % serviceImages.length],
  }));

  const categoryCount = new Set(servicesData.map((s) => s.category)).size;

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Headline rises out of its mask, line by line.
        gsap
          .timeline({ delay: 0.15 })
          .from(".sv-line", { yPercent: 118, duration: 1.05, stagger: 0.1, ease: "power4.out" })
          .from(".sv-eyebrow", { opacity: 0, y: 14, duration: 0.6 }, 0)
          .from(".sv-lead", { opacity: 0, y: 18, duration: 0.7 }, 0.45)
          .from(".sv-meta", { opacity: 0, y: 14, duration: 0.6, stagger: 0.08 }, 0.6);

        // Hero video drifts slower than the page, so the copy separates from it.
        gsap.to(".sv-hero-media", {
          yPercent: 14,
          ease: "none",
          scrollTrigger: { trigger: heroRef.current, start: "top top", end: "bottom top", scrub: true },
        });

        gsap.utils.toArray<HTMLElement>(".sv-reveal").forEach((el) => {
          gsap.from(el, {
            y: 26,
            opacity: 0,
            duration: 0.75,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 85%", once: true },
          });
        });

        gsap.from(".sv-step", {
          y: 24,
          opacity: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: { trigger: ".sv-steps", start: "top 82%", once: true },
        });

        // The band video creeps in scale as it passes — slow, not showy.
        gsap.fromTo(
          ".sv-band-media",
          { scale: 1.12 },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: { trigger: ".sv-band", start: "top bottom", end: "bottom top", scrub: true },
          }
        );
      });
    },
    { scope: pageRef, dependencies: [language], revertOnUpdate: true }
  );

  return (
    <div ref={pageRef} className="bg-white">
      {/* The shared Navbar is styled for light pages — dark logo, slate links —
          so it disappears against this page's dark hero. A light bar sits behind
          it (below its z-[100]) to give those marks something to read against. */}
      <div className="pointer-events-none fixed top-0 left-0 right-0 h-20 lg:h-[88px] bg-white/85 backdrop-blur-md z-[90]" />
      <Navbar />

      <main>
        {/* ---------- Hero ---------- */}
        <section
          ref={heroRef}
          className="relative min-h-[92vh] flex flex-col justify-end overflow-hidden bg-slate-950"
        >
          <div className="sv-hero-media absolute inset-0 -top-[8%] h-[116%] overflow-hidden">
            {/* origin-top-left + scale pushes the clip's bottom-right corner —
                where the generator watermark sits — outside the frame. */}
            <video
              src="/vid2.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover origin-top-left scale-[1.14] opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/55 to-slate-950/25" />
          </div>

          <div className="relative z-10 max-w-[1400px] mx-auto px-6 w-full pb-16 lg:pb-24 pt-40">
            <span className="sv-eyebrow flex items-center gap-3 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <span className="font-mono text-[10px] font-bold tracking-[0.3em] uppercase text-white/70">
                {text.eyebrow}
              </span>
            </span>

            <h1 className="text-white font-black tracking-tighter leading-[0.92] text-[3rem] sm:text-[4.5rem] lg:text-[6.5rem] mb-10">
              {text.headline.map((line, i) => (
                <span key={i} className="block overflow-hidden py-1">
                  <span className="sv-line block">{line}</span>
                </span>
              ))}
            </h1>

            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
              <p className="sv-lead max-w-xl text-white/60 font-medium text-base sm:text-lg leading-relaxed">
                {text.lead}
              </p>

              <div className="flex items-stretch gap-10 sm:gap-14">
                <div className="sv-meta">
                  <div className="text-3xl sm:text-4xl font-black text-white tabular-nums leading-none">
                    {servicesData.length}
                  </div>
                  <div className="font-mono text-[9px] font-bold uppercase tracking-[0.25em] text-white/40 mt-2">
                    {text.metaServices}
                  </div>
                </div>
                <div className="sv-meta">
                  <div className="text-3xl sm:text-4xl font-black text-white tabular-nums leading-none">
                    {categoryCount}
                  </div>
                  <div className="font-mono text-[9px] font-bold uppercase tracking-[0.25em] text-white/40 mt-2">
                    {text.metaCategories}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- The index ---------- */}
        <section className="relative bg-white py-20 lg:py-28">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="sv-reveal flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14 lg:mb-16">
              <div>
                <span className="font-mono text-[10px] font-bold tracking-[0.25em] uppercase text-blue-600 mb-4 block">
                  {text.indexLabel}
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-[3rem] font-black text-slate-900 tracking-tight leading-[1.1]">
                  {text.indexTitle}
                </h2>
              </div>
            </div>

            <ServiceIndexList rows={rows} />
          </div>
        </section>

        {/* ---------- Craft band ---------- */}
        <section className="sv-band relative overflow-hidden bg-slate-950">
          <div className="absolute inset-0 overflow-hidden">
            <video
              src="/vid1.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="sv-band-media w-full h-full object-cover origin-top-left scale-[1.14] opacity-45"
            />
            <div className="absolute inset-0 bg-slate-950/45" />
          </div>

          <div className="relative z-10 max-w-[1400px] mx-auto px-6 py-24 lg:py-36">
            <div className="max-w-3xl">
              <span className="sv-reveal font-mono text-[10px] font-bold tracking-[0.25em] uppercase text-blue-400 mb-6 block">
                {text.craftEyebrow}
              </span>
              <h2 className="sv-reveal text-3xl sm:text-4xl lg:text-[3.4rem] font-black text-white tracking-tight leading-[1.08] mb-8">
                {text.craftTitle}
              </h2>
              <p className="sv-reveal text-white/60 font-medium text-base sm:text-lg leading-relaxed max-w-xl">
                {text.craftBody}
              </p>
            </div>
          </div>
        </section>

        {/* ---------- Process ---------- */}
        <section className="relative bg-white py-20 lg:py-28">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="sv-reveal mb-14 lg:mb-16">
              <span className="font-mono text-[10px] font-bold tracking-[0.25em] uppercase text-blue-600 mb-4 block">
                {text.processLabel}
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-[3rem] font-black text-slate-900 tracking-tight leading-[1.1]">
                {text.processTitle}
              </h2>
            </div>

            <div className="sv-steps grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-12">
              {developmentProcess.map((step) => (
                <div key={step.step} className="sv-step">
                  <div className="flex items-baseline gap-3 pb-4 mb-5 border-b border-slate-900/15">
                    <span className="font-mono text-[10px] font-bold text-slate-300 tabular-nums">
                      {String(step.step).padStart(2, "0")}
                    </span>
                    <span className="font-mono text-[10px] font-bold tracking-[0.2em] uppercase text-slate-900">
                      {step.title}
                    </span>
                  </div>
                  <p className="text-[15px] text-slate-500 font-medium leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- CTA ---------- */}
        <section className="relative overflow-hidden bg-slate-950 py-28 lg:py-40">
          {/* Purely decorative texture behind the closing pitch */}
          <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
            <video
              src="/vid5.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="sv-cta-media w-full h-full object-cover origin-top-left scale-[1.14] opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/40" />
          </div>

          <div className="relative z-10 max-w-[1400px] mx-auto px-6">
            <div className="sv-reveal flex flex-col lg:flex-row lg:items-end justify-between gap-12">
              <div className="max-w-2xl">
                <h2 className="text-4xl sm:text-5xl lg:text-[4rem] font-black text-white tracking-tighter leading-[1.02] mb-6">
                  {text.ctaTitle}
                </h2>
                <p className="text-white/60 font-medium text-base sm:text-lg leading-relaxed max-w-lg">
                  {text.ctaBody}
                </p>
              </div>

              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 px-9 py-5 bg-white hover:bg-blue-600 text-slate-950 hover:text-white font-bold text-sm uppercase tracking-widest rounded-2xl transition-colors duration-300 shrink-0"
              >
                <span>{text.ctaButton}</span>
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1.5 transition-transform duration-300"
                />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
