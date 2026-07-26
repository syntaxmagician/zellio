"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Star } from "lucide-react";

const testimonialsData = {
  en: [
    {
      id: 1,
      quote: "Zellio didn’t just build our portal; they engineered a strategic asset. The architecture is immaculate, and their attention to enterprise-grade security and uncompromising design standards completely transformed how we interact with our international clients.",
      author: "David Campos",
      role: "Managing Partner, Campos Law Firm",
      avatar: "/avatar-budi.png",
      rating: 5
    },
    {
      id: 2,
      quote: "The reduction in our operational latency by 45% was staggering. The real-time fleet management system they architected is robust, scalable, and beautifully designed. They are an elite tier engineering team.",
      author: "Sarah Jenkins",
      role: "Chief Operations Officer, Elogs Logistics",
      avatar: "/avatar-sari.png",
      rating: 5
    },
    {
      id: 3,
      quote: "Our luxury e-commerce platform demands absolute perfection in aesthetics and performance. Zellio delivered an experience that is incredibly fast and visually breathtaking, elevating our brand identity entirely.",
      author: "Amanda Wijaya",
      role: "Founder, Warung Bunga Pagi",
      avatar: "/avatar-anisa.png",
      rating: 5
    }
  ],
  id: [
    {
      id: 1,
      quote: "Zellio tidak sekadar membangun portal kami; mereka merancang sebuah aset strategis. Arsitektur teknisnya tanpa cacat, dan standar desain serta keamanan mereka benar-benar mengubah cara kami berinteraksi dengan klien internasional.",
      author: "David Campos",
      role: "Managing Partner, Campos Law Firm",
      avatar: "/avatar-budi.png",
      rating: 5
    },
    {
      id: 2,
      quote: "Penurunan latensi operasional kami hingga 45% sangat mengejutkan. Sistem manajemen armada real-time yang mereka bangun sangat kuat, skalabel, dan dirancang dengan sangat indah. Mereka adalah tim rekayasa tingkat elit.",
      author: "Sarah Jenkins",
      role: "Chief Operations Officer, Elogs Logistics",
      avatar: "/avatar-sari.png",
      rating: 5
    },
    {
      id: 3,
      quote: "Platform e-commerce mewah kami menuntut kesempurnaan mutlak dalam estetika dan performa. Zellio menghadirkan pengalaman yang sangat cepat dan memukau secara visual, benar-benar meningkatkan identitas merek kami.",
      author: "Amanda Wijaya",
      role: "Founder, Warung Bunga Pagi",
      avatar: "/avatar-anisa.png",
      rating: 5
    }
  ]
};

const localText = {
  en: {
    badge: "WHAT THEY SAY",
    title: "Client Testimonials",
  },
  id: {
    badge: "APA KATA MEREKA",
    title: "Testimoni Klien",
  }
};

export default function Testimonials() {
  const { language } = useLanguage();
  const text = localText[language];
  const quotes = testimonialsData[language];
  
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % quotes.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [quotes.length]);

  const activeQuote = quotes[currentIndex];

  return (
    <section id="testimonials" className="relative py-24 lg:py-36 bg-[#FAFAFA] text-slate-900 border-t border-slate-200/60 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col mb-16 lg:mb-24">
          <span className="text-[11px] font-mono font-bold tracking-[0.25em] text-blue-600 uppercase mb-4 block">
            {text.badge}
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.05]">
            {text.title}
          </h2>
        </div>

        {/* Minimalist Editorial Carousel */}
        <div className="relative min-h-[440px] md:min-h-[380px] lg:min-h-[340px] flex items-center">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeQuote.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 w-full"
            >
              <div className="max-w-5xl">
                {/* Stars Rating & Quote Mark Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(activeQuote.rating)].map((_, i) => (
                      <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="font-mono text-xs font-bold text-slate-400 uppercase tracking-widest">
                    Verified Client Review
                  </span>
                </div>
                
                {/* Quote Text */}
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight leading-[1.3] md:leading-[1.4] mb-12">
                  &ldquo;{activeQuote.quote}&rdquo;
                </h3>
                
                {/* Author Info + Avatar */}
                <div className="pt-6 border-t border-slate-200 w-full max-w-md flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border border-slate-200 bg-slate-100 flex-shrink-0 shadow-sm">
                    <Image 
                      src={activeQuote.avatar} 
                      alt={activeQuote.author}
                      fill
                      sizes="56px"
                      className="object-cover object-top"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-base md:text-lg tracking-tight mb-0.5">
                      {activeQuote.author}
                    </div>
                    <div className="font-mono text-[10px] md:text-xs text-slate-500 uppercase tracking-widest">
                      {activeQuote.role}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
        </div>

        {/* Navigation Indicators */}
        <div className="flex items-center gap-4 mt-16 lg:mt-24">
          {quotes.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className="group py-2 relative flex items-center"
              aria-label={`Go to testimonial ${idx + 1}`}
            >
              {/* Invisible touch target */}
              <div className="absolute inset-0 -top-2 -bottom-2 -left-2 -right-2" />
              
              <div className={`h-[2px] transition-all duration-500 ease-out ${
                idx === currentIndex ? "w-12 bg-blue-600" : "w-6 bg-slate-300 group-hover:bg-slate-400"
              }`} />
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
