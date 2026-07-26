"use client";

import { useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { clientLogos, type ClientLogo } from "@/lib/clients";

const localText = {
  en: {
    badge: "Trusted By",
    headline: "Companies that run on our code.",
    desc: "Ten organizations across nine industries — travel, logistics, legal, education, and beyond — operate on systems engineered by ZELLIO.",
    listLabel: "Our clients",
  },
  id: {
    badge: "Dipercaya Oleh",
    headline: "Perusahaan yang berjalan di atas kode kami.",
    desc: "Sepuluh organisasi dari sembilan industri — travel, logistik, hukum, pendidikan, dan lainnya — beroperasi dengan sistem yang dibangun ZELLIO.",
    listLabel: "Klien kami",
  },
};

const premiumEase = [0.22, 1, 0.36, 1] as [number, number, number, number];

// Split the roster into two counter-scrolling rows, wide and compact marks mixed.
const ROW_ONE = ["masterdiskon", "race", "jaja", "beego", "warungbungapagi"];
const rowOne = ROW_ONE.map((slug) => clientLogos.find((c) => c.slug === slug)!);
const rowTwo = clientLogos.filter((c) => !c.hidden && !ROW_ONE.includes(c.slug));

function LogoTile({ client, language }: { client: ClientLogo; language: "en" | "id" }) {
  return (
    <li className="group w-[176px] sm:w-[204px] h-[96px] sm:h-[104px] mr-8 sm:mr-12 flex-shrink-0 flex flex-col items-center justify-center gap-3 select-none">
      <span className="text-[9px] font-mono font-bold uppercase tracking-[0.18em] text-slate-400 group-hover:text-blue-600 transition-colors duration-300 whitespace-nowrap">
        {client.sector[language]}
      </span>
      <div className="flex-1 min-h-0 flex items-center justify-center">
        <Image
          src={client.src}
          alt={client.name}
          width={client.width}
          height={client.height}
          className="max-w-full max-h-full w-auto h-auto grayscale opacity-55 group-hover:grayscale-0 group-hover:opacity-100 transition-[filter,opacity] duration-500 ease-out"
        />
      </div>
    </li>
  );
}

/** Keeps v inside [min, max) so the track loops seamlessly. */
function wrap(min: number, max: number, v: number): number {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
}

function MarqueeRow({
  clients,
  direction,
  baseSpeed,
  language,
  listLabel,
}: {
  clients: ClientLogo[];
  direction: "left" | "right";
  /** Base drift in % of track per second. */
  baseSpeed: number;
  language: "en" | "id";
  listLabel?: string;
}) {
  const reduceMotion = useReducedMotion();
  const baseX = useMotionValue(0);
  const x = useTransform(baseX, (v) => `${v}%`);

  // Scroll velocity feeds extra speed into the drift, so the rows react to scrolling.
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const velocityBoost = useTransform(smoothVelocity, [0, 1200], [0, 3], { clamp: false });

  const isHovered = useRef(false);
  const speedMultiplier = useRef(1);
  const dir = direction === "left" ? -1 : 1;

  useAnimationFrame((_, delta) => {
    if (reduceMotion) return;
    // Ease toward pause on hover instead of stopping abruptly.
    const target = isHovered.current ? 0 : 1;
    speedMultiplier.current += (target - speedMultiplier.current) * Math.min(1, delta / 140);

    let moveBy = dir * baseSpeed * (delta / 1000) * speedMultiplier.current;
    moveBy *= 1 + Math.abs(velocityBoost.get());
    baseX.set(wrap(-50, 0, baseX.get() + moveBy));
  });

  // Each half repeats the set twice so it stays wider than the viewport;
  // the track holds two identical halves and loops seamlessly at -50%.
  const half = [...clients, ...clients];
  return (
    <div
      className="marquee"
      onMouseEnter={() => (isHovered.current = true)}
      onMouseLeave={() => (isHovered.current = false)}
    >
      <motion.div className="marquee-track" style={{ x }}>
        <ul className="flex" aria-label={listLabel}>
          {half.map((client, i) => (
            <LogoTile key={`${client.slug}-${i}`} client={client} language={language} />
          ))}
        </ul>
        <ul className="flex" aria-hidden="true">
          {half.map((client, i) => (
            <LogoTile key={`dup-${client.slug}-${i}`} client={client} language={language} />
          ))}
        </ul>
      </motion.div>
    </div>
  );
}

export default function TrustedBy() {
  const { language } = useLanguage();
  const text = localText[language];
  const reduceMotion = useReducedMotion();
  const rise = reduceMotion ? 0 : 14;

  return (
    <section
      id="clients"
      aria-labelledby="clients-heading"
      className="relative bg-white pt-10 lg:pt-8 pb-20 lg:pb-24 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Editorial header — same grammar as the other section headers */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-10 lg:mb-12">
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
              id="clients-heading"
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
      </div>

      {/* Endless dual-direction client marquee — pauses on hover */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.7, ease: premiumEase }}
        className="space-y-6 sm:space-y-8"
      >
        <MarqueeRow
          clients={rowOne}
          direction="left"
          baseSpeed={1.5}
          language={language}
          listLabel={text.listLabel}
        />
        <MarqueeRow clients={rowTwo} direction="right" baseSpeed={1.2} language={language} />
      </motion.div>
    </section>
  );
}
