"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { servicesData } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";
import { TranslationKey } from "@/lib/translations";
import { gsap, useGSAP } from "@/lib/gsap";
import {
  WebDevIllustration,
  DashboardIllustration,
  MobileAppIllustration,
  ITSystemsIllustration,
  CloudDevOpsIllustration,
  UIDesignIllustration,
} from "../ui/ServiceIllustrations";

const illustrationMap: Record<number, React.FC<{ isHovered: boolean }>> = {
  1: WebDevIllustration,
  2: DashboardIllustration,
  3: MobileAppIllustration,
  4: ITSystemsIllustration,
  5: CloudDevOpsIllustration,
  6: UIDesignIllustration,
};

const localText = {
  en: {
    badge: "Our Expertise",
    headline: "Custom IT solutions.",
    desc: "Purpose-built engineering for modern enterprises. From scalable backend architectures to pixel-perfect interfaces, we build software that drives momentum.",
    hint: "Keep scrolling — the rail follows",
    explore: "Explore service",
  },
  id: {
    badge: "Keahlian Kami",
    headline: "Solusi IT kustom.",
    desc: "Rekayasa perangkat lunak untuk perusahaan modern. Dari arsitektur backend yang skalabel hingga antarmuka yang presisi, kami membangun sistem yang memacu pertumbuhan.",
    hint: "Terus scroll — galeri ikut bergeser",
    explore: "Lihat layanan",
  },
};

const getSlug = (title: string) =>
  title
    .toLowerCase()
    .replace(/[\s&/]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

function RailGrid() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <pattern id="rail-grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0F172A" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#rail-grid)" />
    </svg>
  );
}

function ServiceCard({
  program,
  index,
  exploreLabel,
  t,
}: {
  program: (typeof servicesData)[0];
  index: number;
  exploreLabel: string;
  t: (key: TranslationKey) => string;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const Illustration = illustrationMap[program.id];
  const slug = getSlug(program.title);

  return (
    <Link
      href={`/services/${slug}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="svc-card group relative flex flex-col bg-white border border-slate-200/80 rounded-3xl p-7 sm:p-8 w-full lg:w-[400px] xl:w-[420px] lg:h-[56vh] lg:min-h-[420px] lg:max-h-[560px] flex-shrink-0 transition-colors duration-300 hover:border-blue-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
    >
      <div className="flex items-center justify-between mb-6">
        <span className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-slate-400">
          FIG 0{index + 1}
        </span>
        <span className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-slate-950 group-hover:border-slate-950 group-hover:text-white transition-all duration-300">
          <ArrowUpRight size={15} />
        </span>
      </div>

      <div className="h-[140px] sm:h-[160px] mb-6 pointer-events-none">
        {Illustration && <Illustration isHovered={isHovered} />}
      </div>

      <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight leading-snug mb-3 group-hover:text-blue-700 transition-colors duration-300">
        {t(`service.${slug}` as TranslationKey)}
      </h3>
      <p className="text-sm text-slate-500 font-medium leading-relaxed flex-1">
        {t(`service.desc.${slug}` as TranslationKey)}
      </p>

      <span className="mt-6 text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-slate-400 group-hover:text-blue-600 transition-colors duration-300">
        {exploreLabel} →
      </span>
    </Link>
  );
}

export default function ServicesRail() {
  const { language, t } = useLanguage();
  const text = localText[language];
  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      const services = servicesData.slice(0, 6);

      // Desktop: pin the section and drive the rail horizontally with scroll.
      mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        const track = trackRef.current;
        const viewport = viewportRef.current;
        if (!track || !viewport) return;

        const distance = () => Math.max(0, track.scrollWidth - viewport.clientWidth);

        const scrub = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 0.7,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              if (counterRef.current) {
                const idx = Math.min(
                  services.length,
                  Math.floor(self.progress * services.length) + 1
                );
                counterRef.current.textContent = `0${idx}`;
              }
            },
          },
        });

        scrub
          .to(track, { x: () => -distance(), ease: "none" }, 0)
          .fromTo(".rail-progress", { scaleX: 0 }, { scaleX: 1, ease: "none" }, 0);
      });

      // Mobile / tablet: no pin, just a gentle stagger as cards enter.
      mm.add("(max-width: 1023px) and (prefers-reduced-motion: no-preference)", () => {
        gsap.from(".svc-card", {
          y: 24,
          opacity: 0,
          duration: 0.65,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: { trigger: trackRef.current, start: "top 85%", once: true },
        });
      });
    },
    { scope: sectionRef, dependencies: [language], revertOnUpdate: true }
  );

  return (
    <section
      id="services"
      ref={sectionRef}
      aria-labelledby="services-heading"
      className="relative bg-[#FAFAFA] border-t border-slate-200/60 overflow-hidden lg:h-screen lg:flex lg:flex-col py-20 lg:py-0"
    >
      <RailGrid />

      {/* Header */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:pt-28 lg:pb-8 pb-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <span className="text-[10px] font-mono font-bold tracking-[0.25em] uppercase text-blue-600 mb-4 block">
              {text.badge}
            </span>
            <h2
              id="services-heading"
              className="text-3xl sm:text-4xl md:text-[3rem] font-black text-slate-900 tracking-tight leading-[1.1]"
            >
              {text.headline}
            </h2>
          </div>
          <div className="max-w-md lg:text-right">
            <p className="text-[15px] md:text-base text-slate-500 leading-relaxed font-medium">
              {text.desc}
            </p>
            <p className="hidden lg:block mt-3 text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-slate-400">
              {text.hint} →
            </p>
          </div>
        </div>
      </div>

      {/* Rail */}
      <div ref={viewportRef} className="relative z-10 lg:flex-1 lg:flex lg:items-center overflow-hidden">
        <div
          ref={trackRef}
          className="svc-track grid grid-cols-1 sm:grid-cols-2 gap-5 px-6 max-w-[1400px] mx-auto lg:max-w-none lg:mx-0 lg:flex lg:w-max lg:gap-6 lg:px-[max(1.5rem,calc((100vw-1400px)/2))] will-change-transform"
        >
          {servicesData.slice(0, 6).map((program, index) => (
            <ServiceCard
              key={program.id}
              program={program}
              index={index}
              exploreLabel={text.explore}
              t={t}
            />
          ))}
        </div>
      </div>

      {/* Progress rule (desktop pin only) */}
      <div className="relative z-10 hidden lg:block w-full max-w-[1400px] mx-auto px-6 pb-10 pt-8">
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-slate-200 overflow-hidden">
            <div className="rail-progress h-px w-full bg-blue-600 origin-left" />
          </div>
          <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-slate-500 stat-number">
            <span ref={counterRef}>01</span>
            <span className="text-slate-300"> / 06</span>
          </span>
        </div>
      </div>
    </section>
  );
}
