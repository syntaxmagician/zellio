"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const testimonialsData = {
  en: [
    {
      id: 1,
      name: "Rizky Pratama",
      position: "CTO",
      company: "FinTech Solutions",
      avatar: "/avatar-rizky.png",
      review: "They delivered our core payment dashboard in half the expected time.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      metrics: [
        { value: "+45%", label: "Transaction Speed" },
        { value: "99.99%", label: "Payment Uptime" },
        { value: "6 Weeks", label: "Delivery Duration" }
      ]
    },
    {
      id: 2,
      name: "Sari Dewi Kusuma",
      position: "Product Director",
      company: "RetailFlow Indonesia",
      avatar: "/avatar-sari.png",
      review: "The multi-vendor platform scales beautifully during high-traffic flash sales.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      metrics: [
        { value: "3.2x", label: "Conversion Rate" },
        { value: "100k+", label: "Active Vendors" },
        { value: "4 Months", label: "Delivery Duration" }
      ]
    },
    {
      id: 3,
      name: "Budi Santoso",
      position: "CEO",
      company: "LogiChain Logistics",
      avatar: "/avatar-budi.png",
      review: "Our custom ERP system displays fleet locations across 5 provinces flawlessly.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
      metrics: [
        { value: "+30%", label: "Efficiency Gain" },
        { value: "2.5s", label: "Sync Latency" },
        { value: "3 Months", label: "Delivery Duration" }
      ]
    },
    {
      id: 4,
      name: "Anisa Rahman",
      position: "Co-Founder",
      company: "EduSpace Platform",
      avatar: "/avatar-anisa.png",
      review: "A truly elite tech partner that designed and built our SaaS platform from scratch.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
      metrics: [
        { value: "80k+", label: "Enrolled Students" },
        { value: "99.98%", label: "Platform Uptime" },
        { value: "5 Months", label: "Delivery Duration" }
      ]
    }
  ],
  id: [
    {
      id: 1,
      name: "Rizky Pratama",
      position: "CTO",
      company: "FinTech Solutions",
      avatar: "/avatar-rizky.png",
      review: "Mereka merancang dashboard pembayaran utama kami dalam setengah estimasi waktu awal.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      metrics: [
        { value: "+45%", label: "Kecepatan Transaksi" },
        { value: "99.99%", label: "Uptime Pembayaran" },
        { value: "6 Minggu", label: "Waktu Pengiriman" }
      ]
    },
    {
      id: 2,
      name: "Sari Dewi Kusuma",
      position: "Product Director",
      company: "RetailFlow Indonesia",
      avatar: "/avatar-sari.png",
      review: "Platform multi-vendor yang mereka buat stabil saat puncak traffic kilat.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      metrics: [
        { value: "3.2x", label: "Tingkat Konversi" },
        { value: "100rb+", label: "Mitra Aktif" },
        { value: "4 Bulan", label: "Waktu Pengiriman" }
      ]
    },
    {
      id: 3,
      name: "Budi Santoso",
      position: "CEO",
      company: "LogiChain Logistics",
      avatar: "/avatar-budi.png",
      review: "Sistem ERP kustom mereka memetakan logistik di 5 provinsi secara real-time.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
      metrics: [
        { value: "+30%", label: "Efisiensi Operasional" },
        { value: "2.5d", label: "Latensi Sinkronisasi" },
        { value: "3 Bulan", label: "Waktu Pengiriman" }
      ]
    },
    {
      id: 4,
      name: "Anisa Rahman",
      position: "Co-Founder",
      company: "EduSpace Platform",
      avatar: "/avatar-anisa.png",
      review: "Mitra teknologi elit yang mendesain dan membangun platform SaaS kami dari nol.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
      metrics: [
        { value: "80rb+", label: "Siswa Terdaftar" },
        { value: "99.98%", label: "Uptime Platform" },
        { value: "5 Bulan", label: "Waktu Pengiriman" }
      ]
    }
  ]
};

const localText = {
  en: {
    bgText: "RESULTS PARTNERS SUCCESS",
    badge: "TESTIMONIALS",
    title: "Built with companies that refuse average.",
    at: "at"
  },
  id: {
    bgText: "HASIL KEMITRAAN SUKSES",
    badge: "TESTIMONI",
    title: "Membangun sistem dengan mereka yang menolak biasa.",
    at: "di"
  }
};

/**
 * Metric counter component with cubic-bezier interpolation
 */
const CountingMetric = ({ value, label, active }: { value: string; label: string; active: boolean }) => {
  const [displayVal, setDisplayVal] = useState("0");

  useEffect(() => {
    if (!active) {
      setDisplayVal("0");
      return;
    }

    const numMatch = value.match(/[\d.]+/);
    const suffix = value.replace(/[\d.]+/, "");
    if (!numMatch) {
      setDisplayVal(value);
      return;
    }

    const target = parseFloat(numMatch[0]);
    const duration = 1200; 
    const startTime = performance.now();

    const update = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // cubic-bezier(.22,1,.36,1) easeOutCubic approximation
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const current = target * easeProgress;
      
      const isFloat = value.includes(".");
      const formatted = isFloat ? current.toFixed(2) : Math.floor(current).toString();

      setDisplayVal(formatted + suffix);

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    };

    requestAnimationFrame(update);
  }, [value, active]);

  return (
    <div className="flex flex-col pt-6 border-t border-white/5 min-w-[140px] group cursor-default">
      <span className="text-3xl sm:text-4xl md:text-5xl font-mono font-bold text-[#F5F7FA] tracking-tight group-hover:text-blue-500 transition-colors duration-300">
        {displayVal}
      </span>
      <span className="text-xs md:text-sm font-medium text-[#94A3B8] tracking-wide mt-2">
        {label}
      </span>
    </div>
  );
};

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();
  const testimonials = testimonialsData[language];
  const text = localText[language];
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Background slow parallax drift
  const bgX = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      // Divide scroll progress into 4 active chapter zones
      const idx = Math.min(Math.floor(latest * 4), 3);
      if (idx !== activeIndex) {
        setActiveIndex(idx);
      }
    });
  }, [scrollYProgress, activeIndex]);

  const currentStory = testimonials[activeIndex];

  // Premium transitions cubic-bezier(.22,1,.36,1)
  const itemVariants = {
    initial: {
      opacity: 0,
      scale: 1.08,
      x: 120,
      filter: "blur(12px)"
    },
    animate: {
      opacity: 1,
      scale: 1,
      x: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    exit: {
      opacity: 0,
      scale: 0.94,
      x: -40,
      filter: "blur(6px)",
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section 
      id="testimonials" 
      ref={containerRef} 
      className="w-full relative bg-[#05070B] md:h-[400vh]"
    >
      {/* 
        DESKTOP VIEW: Sticky, Pinned Chapter Scroll
      */}
      <div className="hidden md:block w-full sticky top-0 h-screen overflow-hidden">
        
        {/* Ambient Grid and Noise */}
        <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.015] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

        {/* Slow Parallax Background Typography */}
        <motion.div
          style={{ x: bgX }}
          className="absolute top-[40%] left-0 whitespace-nowrap opacity-[0.02] pointer-events-none select-none z-0"
        >
          <h1 className="text-[28vw] font-black text-white leading-none tracking-tighter">
            {text.bgText}
          </h1>
        </motion.div>

        {/* HEADER BLOCK */}
        <div className="absolute top-16 left-0 w-full px-12 lg:px-20 z-20 pointer-events-none">
          <span className="text-[10px] md:text-[11px] font-mono font-bold tracking-[0.25em] text-[#94A3B8] mb-4 block uppercase">
            {text.badge}
          </span>
          <h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-[#F5F7FA] leading-tight max-w-2xl">
            {text.title}
          </h2>
        </div>

        {/* THREE ZONES GRID (LEFT - MIDDLE - RIGHT) */}
        <div className="max-w-[1400px] mx-auto px-12 lg:px-20 h-full grid grid-cols-12 gap-12 items-center relative z-10">
          
          {/* LEFT ZONE (35% width - cols 1 to 5) */}
          <div className="col-span-5 flex flex-col justify-center h-full pt-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                variants={itemVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="flex flex-col justify-center h-full"
              >
                <p className="text-2xl lg:text-3xl leading-[1.3] text-[#F5F7FA] font-medium tracking-tight mb-12">
                  "{currentStory.review}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden border border-white/10 relative flex-shrink-0">
                    <Image 
                      src={currentStory.avatar} 
                      fill 
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-500" 
                      alt={currentStory.name} 
                      unoptimized
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[#F5F7FA] font-bold text-base lg:text-lg">
                      {currentStory.name}
                    </span>
                    <span className="text-[#94A3B8] font-medium text-xs lg:text-sm mt-0.5">
                      {currentStory.position} <span className="text-[#475569] font-normal mx-0.5">{text.at}</span> <span className="text-[#3B82F6]">{currentStory.company}</span>
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT ZONE (60% width - cols 6 to 12) - Removed Metrics entirely to focus purely on testimonial narrative */}
          <div className="col-span-7 flex items-center justify-center pl-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                variants={itemVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="w-full aspect-[16/10] rounded-[24px] overflow-hidden border border-white/8 relative shadow-2xl bg-[#0B121F] group"
              >
                <Image 
                  src={currentStory.image} 
                  fill 
                  className="object-cover opacity-90 group-hover:scale-102 transition-transform duration-700" 
                  alt={currentStory.company} 
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* BOTTOM PROGRESS LINE */}
        <div className="absolute bottom-12 left-12 right-12 lg:left-20 lg:right-20 h-[1.5px] bg-white/10 rounded-full overflow-hidden">
          <motion.div 
            style={{ scaleX: scrollYProgress }} 
            className="h-full bg-blue-500 origin-left"
          />
        </div>

      </div>

      {/* 
        MOBILE VIEW: Graceful, Clean Vertical Case Story Stack
      */}
      <div className="block md:hidden space-y-16 py-20 px-6">
        
        {/* Header Block */}
        <div className="mb-12">
          <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-[#94A3B8] mb-3 block uppercase">
            {text.badge}
          </span>
          <h2 className="text-3xl font-medium tracking-tight text-[#F5F7FA] leading-tight">
            {text.title}
          </h2>
        </div>

        {testimonials.map((story) => (
          <div 
            key={story.id} 
            className="border-t border-white/5 pt-10 flex flex-col gap-6"
          >
            {/* Quote Statement */}
            <h3 className="text-2xl font-medium text-[#F5F7FA] leading-snug">
              "{story.review}"
            </h3>

            {/* Visual aspect Mockup */}
            <div className="w-full aspect-[16/10] bg-[#0B121F] border border-white/10 rounded-2xl overflow-hidden relative shadow-lg">
              <Image 
                src={story.image} 
                fill 
                className="object-cover opacity-85" 
                alt={story.company} 
                unoptimized
              />
            </div>

            {/* User Bio */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10 relative">
                <Image 
                  src={story.avatar} 
                  fill 
                  className="object-cover" 
                  alt={story.name} 
                  unoptimized
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[#F5F7FA] font-bold text-sm">
                  {story.name}
                </span>
                <span className="text-[#94A3B8] text-xs">
                  {story.position} {text.at} <span className="text-[#3B82F6]">{story.company}</span>
                </span>
              </div>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}
