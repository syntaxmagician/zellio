"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence, animate, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { clientLogos, type ClientLogo } from "@/lib/clients";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

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

/** Re-counts once on mount. */
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
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100/80 text-blue-700 font-medium shadow-sm shadow-blue-500/5">
      <span className="text-xl sm:text-2xl font-black tracking-tighter text-blue-600 tabular-nums">
        {prefix}
        {display}
        {suffix}
      </span>
      <span className="font-mono text-[9px] sm:text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-none max-w-[150px]">
        {label}
      </span>
    </div>
  );
}

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 200 : -200,
    opacity: 0,
    scale: 0.97,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 200 : -200,
    opacity: 0,
    scale: 0.97,
  }),
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export default function Testimonials() {
  const { language } = useLanguage();
  const text = localText[language];
  const items = testimonialsData[language];
  const reduceMotion = useReducedMotion();
  const rise = reduceMotion ? 0 : 16;

  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(0);
  const [paused, setPaused] = useState(false);

  const current = items[active];
  const mark = markFor(current.logoSlug);

  // Auto-advance
  useEffect(() => {
    if (paused || reduceMotion) return;
    const id = setTimeout(() => paginate(1), 8000);
    return () => clearTimeout(id);
  }, [active, paused, reduceMotion]);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setActive((prevActive) => {
      let nextActive = prevActive + newDirection;
      if (nextActive < 0) nextActive = items.length - 1;
      if (nextActive >= items.length) nextActive = 0;
      return nextActive;
    });
  };

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="relative py-24 lg:py-32 bg-gradient-to-b from-[#F3F6F9] to-[#F8FAFC] text-slate-900 border-t border-slate-200/60 overflow-hidden"
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

        {/* Carousel Container */}
        <div
          className="max-w-4xl mx-auto relative px-4"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative min-h-[440px] sm:min-h-[380px] overflow-hidden flex items-stretch">
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.figure
                key={active}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.25 },
                  scale: { duration: 0.25 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.7}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="w-full bg-white rounded-3xl p-8 sm:p-12 flex flex-col justify-between border border-slate-200/50 shadow-sm hover:shadow-[0_20px_50px_rgba(37,99,235,0.06)] transition-all duration-300 select-none cursor-grab active:cursor-grabbing relative overflow-hidden"
              >
                <Quote className="absolute top-6 right-6 w-20 h-20 text-blue-600/[0.03] pointer-events-none select-none" />

                <div className="flex flex-col flex-1">
                  <div className="mb-6 sm:mb-8">
                    <Metric value={current.metricValue} label={current.metricLabel} />
                  </div>

                  <blockquote className="flex-1 mb-8">
                    <p className="text-xl sm:text-2xl md:text-[1.75rem] font-bold tracking-tight leading-[1.4] text-slate-900">
                      &ldquo;{current.quote}&rdquo;
                    </p>
                  </blockquote>

                  <figcaption className="mt-auto flex flex-wrap items-center justify-between gap-x-4 gap-y-4 pt-6 border-t border-slate-100">
                    <div className="flex items-center gap-4">
                      <div className="relative shrink-0 w-12 h-12 sm:w-14 sm:h-14">
                        <Image
                          src={current.avatar}
                          alt={current.author}
                          fill
                          sizes="56px"
                          className="rounded-full object-cover pointer-events-none"
                        />
                        <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-slate-900/10" />
                      </div>
                      <div className="min-w-0">
                        <div className="font-bold text-slate-900 tracking-tight text-[15px] sm:text-base">
                          {current.author}
                        </div>
                        <div className="font-mono text-[9px] sm:text-[10px] text-slate-500 uppercase tracking-widest mt-0.5 sm:mt-1">
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
                        className="h-6 sm:h-7 w-auto object-contain pointer-events-none"
                      />
                    )}
                  </figcaption>
                </div>
              </motion.figure>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-between px-4">
            {/* Step indicators / pagination dots */}
            <div className="flex items-center gap-2">
              {items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > active ? 1 : -1);
                    setActive(i);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === active ? "w-6 bg-blue-600" : "w-2 bg-slate-200 hover:bg-slate-300"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            {/* Navigation buttons */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => paginate(-1)}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-600 shadow-sm hover:shadow-[0_10px_20px_rgba(37,99,235,0.06)] active:scale-95 transition-all duration-300"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => paginate(1)}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-600 shadow-sm hover:shadow-[0_10px_20px_rgba(37,99,235,0.06)] active:scale-95 transition-all duration-300"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
