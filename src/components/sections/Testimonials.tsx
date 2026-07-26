"use client";

import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { clientLogos, type ClientLogo } from "@/lib/clients";
import { gsap, useGSAP } from "@/lib/gsap";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  logoSlug: string;
}

interface FeaturedTestimonial extends Testimonial {
  metricValue: string;
  metricLabel: string;
}

const testimonialsData: Record<
  "en" | "id",
  { featured: FeaturedTestimonial; others: Testimonial[] }
> = {
  en: {
    featured: {
      quote:
        "The reduction in our operational latency by 45% was staggering. The real-time fleet management system they architected is robust, scalable, and beautifully designed. They are an elite tier engineering team.",
      author: "Sarah Jenkins",
      role: "Chief Operations Officer, Elogs Logistics",
      logoSlug: "elogs",
      metricValue: "-45%",
      metricLabel: "operational latency after go-live",
    },
    others: [
      {
        quote:
          "Zellio didn’t just build our portal; they engineered a strategic asset. The architecture is immaculate, and their attention to enterprise-grade security completely transformed how we interact with our international clients.",
        author: "David Campos",
        role: "Managing Partner, Campos Law Firm",
        logoSlug: "campos",
      },
      {
        quote:
          "Our e-commerce platform demands absolute perfection in aesthetics and performance. Zellio delivered an experience that is incredibly fast and visually breathtaking, elevating our brand identity entirely.",
        author: "Amanda Wijaya",
        role: "Founder, Warung BungaPagi",
        logoSlug: "warungbungapagi",
      },
    ],
  },
  id: {
    featured: {
      quote:
        "Penurunan latensi operasional kami hingga 45% sangat mengejutkan. Sistem manajemen armada real-time yang mereka bangun sangat kuat, skalabel, dan dirancang dengan sangat indah. Mereka adalah tim rekayasa tingkat elit.",
      author: "Sarah Jenkins",
      role: "Chief Operations Officer, Elogs Logistics",
      logoSlug: "elogs",
      metricValue: "-45%",
      metricLabel: "latensi operasional setelah rilis",
    },
    others: [
      {
        quote:
          "Zellio tidak sekadar membangun portal kami; mereka merancang sebuah aset strategis. Arsitektur teknisnya tanpa cacat, dan standar keamanan mereka benar-benar mengubah cara kami berinteraksi dengan klien internasional.",
        author: "David Campos",
        role: "Managing Partner, Campos Law Firm",
        logoSlug: "campos",
      },
      {
        quote:
          "Platform e-commerce kami menuntut kesempurnaan mutlak dalam estetika dan performa. Zellio menghadirkan pengalaman yang sangat cepat dan memukau secara visual, benar-benar meningkatkan identitas merek kami.",
        author: "Amanda Wijaya",
        role: "Founder, Warung BungaPagi",
        logoSlug: "warungbungapagi",
      },
    ],
  },
};

const localText = {
  en: {
    badge: "What They Say",
    headline: "Results, in their words.",
    desc: "Unfiltered feedback from the founders and operators who run their businesses on ZELLIO systems.",
  },
  id: {
    badge: "Apa Kata Mereka",
    headline: "Hasil nyata, dari kata mereka.",
    desc: "Umpan balik langsung dari para founder dan operator yang menjalankan bisnisnya di atas sistem ZELLIO.",
  },
};

const premiumEase = [0.22, 1, 0.36, 1] as [number, number, number, number];

function markFor(slug: string): ClientLogo | undefined {
  return clientLogos.find((c) => c.slug === slug);
}

function ClientMark({ slug, heightClass = "h-7" }: { slug: string; heightClass?: string }) {
  const mark = markFor(slug);
  if (!mark) return null;
  return (
    <Image
      src={mark.src}
      alt={mark.name}
      width={mark.width}
      height={mark.height}
      className={`${heightClass} w-auto grayscale opacity-60`}
    />
  );
}

function AuthorRow({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-4">
      <div>
        <div className="font-bold text-slate-900 tracking-tight">{testimonial.author}</div>
        <div className="font-mono text-[10px] text-slate-500 uppercase tracking-widest mt-1">
          {testimonial.role}
        </div>
      </div>
      <ClientMark slug={testimonial.logoSlug} />
    </div>
  );
}

export default function Testimonials() {
  const { language } = useLanguage();
  const text = localText[language];
  const data = testimonialsData[language];
  const reduceMotion = useReducedMotion();
  const rise = reduceMotion ? 0 : 16;
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      // The featured "-45%" rolls from 0 down to its value when it scrolls in.
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const el = sectionRef.current?.querySelector<HTMLElement>(".testi-metric");
        if (!el) return;
        const target = Number(el.dataset.target ?? 0);
        const prefix = el.dataset.prefix ?? "";
        const suffix = el.dataset.suffix ?? "";
        const state = { value: 0 };
        el.textContent = `0${suffix}`;
        gsap.to(state, {
          value: target,
          duration: 1.8,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
          onUpdate: () => {
            const v = Math.round(state.value);
            el.textContent = v === 0 ? `0${suffix}` : `${prefix}${v}${suffix}`;
          },
        });
      });
    },
    { scope: sectionRef, dependencies: [language], revertOnUpdate: true }
  );

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      aria-labelledby="testimonials-heading"
      className="relative py-24 lg:py-32 bg-[#FAFAFA] text-slate-900 border-t border-slate-200/60 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Editorial header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: rise }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: premiumEase }}
            className="max-w-2xl"
          >
            <span className="text-[10px] font-mono font-bold tracking-[0.25em] uppercase text-blue-600 mb-4 block">
              {text.badge}
            </span>
            <h2
              id="testimonials-heading"
              className="text-3xl sm:text-4xl md:text-[3rem] font-black text-slate-900 tracking-tight leading-[1.1]"
            >
              {text.headline}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: rise }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.12, ease: premiumEase }}
            className="max-w-md lg:pb-2 text-left lg:text-right"
          >
            <p className="text-[15px] md:text-base text-slate-500 leading-relaxed font-medium">
              {text.desc}
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">
          {/* Featured quote with its measurable outcome */}
          <motion.figure
            initial={{ opacity: 0, y: rise }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: premiumEase }}
            className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 lg:p-12 flex flex-col"
          >
            <div className="flex items-baseline gap-4 mb-8">
              <span
                className="testi-metric text-5xl sm:text-6xl font-black tracking-tighter text-blue-600 stat-number"
                data-target={data.featured.metricValue.replace(/\D/g, "")}
                data-prefix={data.featured.metricValue.match(/^[^0-9]*/)?.[0] ?? ""}
                data-suffix={data.featured.metricValue.match(/[^0-9]*$/)?.[0] ?? ""}
              >
                {data.featured.metricValue}
              </span>
              <span className="font-mono text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest max-w-[220px] leading-relaxed">
                {data.featured.metricLabel}
              </span>
            </div>

            <blockquote className="flex-1">
              <p className="text-xl sm:text-2xl lg:text-[1.7rem] font-bold tracking-tight leading-[1.35] text-slate-900">
                &ldquo;{data.featured.quote}&rdquo;
              </p>
            </blockquote>

            <figcaption className="mt-10">
              <AuthorRow testimonial={data.featured} />
            </figcaption>
          </motion.figure>

          {/* Supporting quotes */}
          <div className="lg:col-span-5 flex flex-col gap-5 lg:gap-6">
            {data.others.map((t, i) => (
              <motion.figure
                key={t.author}
                initial={{ opacity: 0, y: rise }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.1, ease: premiumEase }}
                className="flex-1 bg-white rounded-3xl p-8 sm:p-9 flex flex-col"
              >
                <blockquote className="flex-1">
                  <p className="text-[15px] sm:text-base font-medium leading-relaxed text-slate-600">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </blockquote>
                <figcaption className="mt-7">
                  <AuthorRow testimonial={t} />
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
