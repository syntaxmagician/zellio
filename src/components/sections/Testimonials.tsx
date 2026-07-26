"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence, animate, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { clientLogos, type ClientLogo } from "@/lib/clients";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  logoSlug: string;
  metricValue: string;
  metricLabel: string;
}

/** How long each quote holds before the roster advances. */
const HOLD_MS = 7000;

const testimonialsData: Record<"en" | "id", Testimonial[]> = {
  en: [
    {
      quote:
        "The reduction in our operational latency by 45% was staggering. The real-time fleet management system they architected is robust, scalable, and beautifully designed. They are an elite tier engineering team.",
      author: "Sarah Jenkins",
      role: "Chief Operations Officer",
      company: "Elogs Logistics",
      avatar: "/avatar-sari.png",
      logoSlug: "elogs",
      metricValue: "-45%",
      metricLabel: "operational latency after go-live",
    },
    {
      quote:
        "Zellio didn’t just build our portal; they engineered a strategic asset. The architecture is immaculate, and their attention to enterprise-grade security completely transformed how we interact with our international clients.",
      author: "David Campos",
      role: "Managing Partner",
      company: "Campos Law Firm",
      avatar: "/avatar-budi.png",
      logoSlug: "campos",
      metricValue: "3x",
      metricLabel: "faster client onboarding",
    },
    {
      quote:
        "Our e-commerce platform demands absolute perfection in aesthetics and performance. Zellio delivered an experience that is incredibly fast and visually breathtaking, elevating our brand identity entirely.",
      author: "Amanda Wijaya",
      role: "Founder",
      company: "Warung BungaPagi",
      avatar: "/avatar-anisa.png",
      logoSlug: "warungbungapagi",
      metricValue: "+68%",
      metricLabel: "online order conversion",
    },
    {
      quote:
        "Peak season used to break us. Zellio re-architected the booking engine so it absorbs the load instead of buckling under it — and they shipped it without a single day of downtime for our travellers.",
      author: "Rizky Pratama",
      role: "Head of Product",
      company: "MasterDiskon",
      avatar: "/avatar-rizky.png",
      logoSlug: "masterdiskon",
      metricValue: "+140%",
      metricLabel: "booking throughput at peak season",
    },
    {
      quote:
        "They questioned our assumptions before writing a line of code. The checkout they rebuilt is the single highest-performing thing on our marketplace, and it still feels effortless to use.",
      author: "Michelle Tanaka",
      role: "VP of Engineering",
      company: "Jaja.id",
      avatar: "/asian-consultant.png",
      logoSlug: "jaja",
      metricValue: "-60%",
      metricLabel: "checkout drop-off",
    },
  ],
  id: [
    {
      quote:
        "Penurunan latensi operasional kami hingga 45% sangat mengejutkan. Sistem manajemen armada real-time yang mereka bangun sangat kuat, skalabel, dan dirancang dengan sangat indah. Mereka adalah tim rekayasa tingkat elit.",
      author: "Sarah Jenkins",
      role: "Chief Operations Officer",
      company: "Elogs Logistics",
      avatar: "/avatar-sari.png",
      logoSlug: "elogs",
      metricValue: "-45%",
      metricLabel: "latensi operasional setelah rilis",
    },
    {
      quote:
        "Zellio tidak sekadar membangun portal kami; mereka merancang sebuah aset strategis. Arsitektur teknisnya tanpa cacat, dan standar keamanan mereka benar-benar mengubah cara kami berinteraksi dengan klien internasional.",
      author: "David Campos",
      role: "Managing Partner",
      company: "Campos Law Firm",
      avatar: "/avatar-budi.png",
      logoSlug: "campos",
      metricValue: "3x",
      metricLabel: "onboarding klien lebih cepat",
    },
    {
      quote:
        "Platform e-commerce kami menuntut kesempurnaan mutlak dalam estetika dan performa. Zellio menghadirkan pengalaman yang sangat cepat dan memukau secara visual, benar-benar meningkatkan identitas merek kami.",
      author: "Amanda Wijaya",
      role: "Founder",
      company: "Warung BungaPagi",
      avatar: "/avatar-anisa.png",
      logoSlug: "warungbungapagi",
      metricValue: "+68%",
      metricLabel: "konversi pesanan online",
    },
    {
      quote:
        "Musim puncak dulu selalu menumbangkan sistem kami. Zellio merancang ulang mesin pemesanan agar mampu menyerap lonjakan trafik, dan meluncurkannya tanpa sehari pun downtime bagi pelanggan kami.",
      author: "Rizky Pratama",
      role: "Head of Product",
      company: "MasterDiskon",
      avatar: "/avatar-rizky.png",
      logoSlug: "masterdiskon",
      metricValue: "+140%",
      metricLabel: "kapasitas pemesanan saat puncak",
    },
    {
      quote:
        "Mereka mempertanyakan asumsi kami sebelum menulis satu baris kode pun. Halaman checkout yang mereka bangun ulang jadi bagian dengan performa tertinggi di marketplace kami, dan tetap terasa ringan digunakan.",
      author: "Michelle Tanaka",
      role: "VP of Engineering",
      company: "Jaja.id",
      avatar: "/asian-consultant.png",
      logoSlug: "jaja",
      metricValue: "-60%",
      metricLabel: "tingkat checkout yang ditinggalkan",
    },
  ],
};

const localText = {
  en: {
    badge: "What They Say",
    headline: "Results, in their words.",
    desc: "Unfiltered feedback from the founders and operators who run their businesses on ZELLIO systems.",
    roster: "The roster",
  },
  id: {
    badge: "Apa Kata Mereka",
    headline: "Hasil nyata, dari kata mereka.",
    desc: "Umpan balik langsung dari para founder dan operator yang menjalankan bisnisnya di atas sistem ZELLIO.",
    roster: "Daftar klien",
  },
};

const premiumEase = [0.22, 1, 0.36, 1] as [number, number, number, number];

function markFor(slug: string): ClientLogo | undefined {
  return clientLogos.find((c) => c.slug === slug);
}

/** Re-counts every time the active quote changes. */
function Metric({ value, label }: { value: string; label: string }) {
  const target = parseInt(value.replace(/\D/g, ""), 10) || 0;
  const prefix = value.match(/^[^0-9]*/)?.[0] ?? "";
  const suffix = value.match(/[^0-9]*$/)?.[0] ?? "";
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(reduceMotion ? target : 0);

  useEffect(() => {
    if (reduceMotion) {
      setDisplay(target);
      return;
    }
    const controls = animate(0, target, {
      duration: 1.4,
      ease: premiumEase,
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [target, reduceMotion]);

  return (
    <div className="flex items-baseline gap-4">
      <span className="text-5xl sm:text-6xl font-black tracking-tighter text-blue-600 tabular-nums">
        {prefix}
        {display}
        {suffix}
      </span>
      <span className="font-mono text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest max-w-[220px] leading-relaxed">
        {label}
      </span>
    </div>
  );
}

export default function Testimonials() {
  const { language } = useLanguage();
  const text = localText[language];
  const items = testimonialsData[language];
  const reduceMotion = useReducedMotion();
  const rise = reduceMotion ? 0 : 16;

  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const current = items[active];
  const mark = markFor(current.logoSlug);

  // Auto-advance. Restarting the interval on every change keeps a manual pick
  // from being cut short by whatever was left of the previous tick.
  useEffect(() => {
    if (paused || reduceMotion) return;
    const id = setTimeout(() => setActive((i) => (i + 1) % items.length), HOLD_MS);
    return () => clearTimeout(id);
  }, [active, paused, reduceMotion, items.length]);

  const select = useCallback((i: number) => setActive(i), []);

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="relative py-24 lg:py-32 bg-[#FAFAFA] text-slate-900 border-t border-slate-200/60 overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
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

          <motion.p
            initial={{ opacity: 0, y: rise }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.12, ease: premiumEase }}
            className="max-w-md lg:pb-2 text-left lg:text-right text-[15px] md:text-base text-slate-500 leading-relaxed font-medium"
          >
            {text.desc}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* ---- Stage: the active quote ---- */}
          <motion.figure
            initial={{ opacity: 0, y: rise }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: premiumEase }}
            className="lg:col-span-8 bg-white rounded-3xl p-8 sm:p-10 lg:p-14 flex flex-col min-h-[440px]"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={`${language}-${active}`}
                initial={{ opacity: 0, y: reduceMotion ? 0 : 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: reduceMotion ? 0 : -10 }}
                transition={{ duration: 0.45, ease: premiumEase }}
                className="flex flex-col flex-1"
              >
                <div className="mb-8">
                  <Metric value={current.metricValue} label={current.metricLabel} />
                </div>

                <blockquote className="flex-1">
                  <p className="text-xl sm:text-2xl lg:text-[1.7rem] font-bold tracking-tight leading-[1.35] text-slate-900">
                    &ldquo;{current.quote}&rdquo;
                  </p>
                </blockquote>

                <figcaption className="mt-10 flex flex-wrap items-center justify-between gap-x-6 gap-y-5 pt-6 border-t border-slate-100">
                  <div className="flex items-center gap-4">
                    <div className="relative shrink-0 w-16 h-16">
                      <Image
                        src={current.avatar}
                        alt={current.author}
                        fill
                        sizes="64px"
                        className="rounded-full object-cover"
                      />
                      <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-slate-900/10" />
                      <span className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-sm ring-2 ring-white">
                        <span className="font-serif text-[15px] leading-none pt-1.5">
                          &rdquo;
                        </span>
                      </span>
                    </div>
                    <div className="min-w-0">
                      <div className="font-bold text-slate-900 tracking-tight text-lg">
                        {current.author}
                      </div>
                      <div className="font-mono text-[10px] text-slate-500 uppercase tracking-widest mt-1">
                        {current.role}, {current.company}
                      </div>
                    </div>
                  </div>

                  {mark && (
                    <Image
                      src={mark.src}
                      alt={mark.name}
                      width={mark.width}
                      height={mark.height}
                      className="h-7 w-auto grayscale opacity-60"
                    />
                  )}
                </figcaption>
              </motion.div>
            </AnimatePresence>
          </motion.figure>

          {/* ---- Roster: an index, not a set of dots ---- */}
          <motion.div
            initial={{ opacity: 0, y: rise }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, delay: 0.1, ease: premiumEase }}
            className="lg:col-span-4 flex flex-col"
          >
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400 mb-5 px-1">
              {text.roster}
              <span className="text-slate-300 ml-2">
                {String(active + 1).padStart(2, "0")}/{String(items.length).padStart(2, "0")}
              </span>
            </span>

            <div className="flex flex-col">
              {items.map((t, i) => {
                const isActive = i === active;
                return (
                  <button
                    key={t.author}
                    type="button"
                    onClick={() => select(i)}
                    aria-current={isActive}
                    className={`group relative text-left px-1 py-5 border-t border-slate-200/80 last:border-b transition-colors duration-300 ${
                      isActive ? "" : "hover:bg-white/60"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`relative shrink-0 w-10 h-10 transition-all duration-500 ${
                          isActive ? "opacity-100 grayscale-0" : "opacity-45 grayscale"
                        }`}
                      >
                        <Image
                          src={t.avatar}
                          alt=""
                          aria-hidden="true"
                          fill
                          sizes="40px"
                          className="rounded-full object-cover"
                        />
                        <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-slate-900/10" />
                      </div>
                      <div className="min-w-0">
                        <div
                          className={`font-bold tracking-tight text-[15px] transition-colors duration-300 ${
                            isActive
                              ? "text-slate-900"
                              : "text-slate-400 group-hover:text-slate-600"
                          }`}
                        >
                          {t.author}
                        </div>
                        <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-slate-400 mt-1 truncate">
                          {t.company}
                        </div>
                      </div>
                    </div>

                    {/* Hairline that fills for as long as this quote holds */}
                    {isActive && (
                      <motion.span
                        key={`bar-${active}-${paused}`}
                        className="absolute left-0 -bottom-px h-px bg-blue-600"
                        initial={{ width: reduceMotion ? "100%" : 0 }}
                        animate={{ width: "100%" }}
                        transition={{
                          duration: reduceMotion || paused ? 0 : HOLD_MS / 1000,
                          ease: "linear",
                        }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
