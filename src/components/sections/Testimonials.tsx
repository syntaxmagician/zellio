"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useMotionValueEvent } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Rizky Pratama",
    position: "CTO",
    company: "FinTech Solutions",
    avatar: "/avatar-rizky.png",
    rating: 5,
    review:
      "Digifore built our core payment dashboard. The level of professionalism, clean code, and speed of delivery exceeded our expectations. The real-time tracking graphs load instantly.",
  },
  {
    id: 2,
    name: "Sari Dewi Kusuma",
    position: "Product Director",
    company: "RetailFlow Indonesia",
    avatar: "/avatar-sari.png",
    rating: 5,
    review:
      "We hired them to build our multi-vendor e-commerce platform and admin portal. The system is extremely fast, responsive on mobile, and scales beautifully during high-traffic flash sales.",
  },
  {
    id: 3,
    name: "Budi Santoso",
    position: "CEO",
    company: "LogiChain Logistics",
    avatar: "/avatar-budi.png",
    rating: 5,
    review:
      "Their custom ERP system streamlined our logistics operations. The admin dashboard displays real-time tracking data across 5 provinces flawlessly. Our operational efficiency increased by 30%.",
  },
  {
    id: 4,
    name: "Anisa Rahman",
    position: "Co-Founder",
    company: "EduSpace Platform",
    avatar: "/avatar-anisa.png",
    rating: 5,
    review:
      "They designed and built our SaaS web platform from scratch. The UI/UX is outstanding, and the backend is highly scalable. A truly elite software agency that delivers what they promise.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Track max scroll progress reached so far using a MotionValue
  const maxScrollProgress = useMotionValue(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > maxScrollProgress.get()) {
      maxScrollProgress.set(latest);
    }
  });

  // Bind transforms to the monotonically increasing maxScrollProgress
  const flapRotateX = useTransform(maxScrollProgress, [0.05, 0.25], [0, 180]);
  const envelopeOpacity = useTransform(maxScrollProgress, [0.55, 0.75], [1, 0]);
  const envelopeY = useTransform(maxScrollProgress, [0.55, 0.75], [0, 150]);

  const cardsY = useTransform(maxScrollProgress, [0.15, 0.55], [250, 0]);
  const cardsScale = useTransform(maxScrollProgress, [0.15, 0.55], [0.5, 1]);
  const cardsOpacity = useTransform(maxScrollProgress, [0.15, 0.45], [0, 1]);
  const navOpacity = useTransform(maxScrollProgress, [0.45, 0.55], [0, 1]);

  const lastWheelTime = useRef(0);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  }, []);

  const handleWheel = useCallback((e: React.WheelEvent<HTMLDivElement>) => {
    const now = Date.now();
    if (now - lastWheelTime.current < 400) return;

    // Detect horizontal swipe (deltaX is dominant and exceeds threshold)
    if (Math.abs(e.deltaX) > 15 && Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      if (e.deltaX > 0) {
        next();
      } else {
        prev();
      }
      lastWheelTime.current = now;
    }
  }, [next, prev]);

  useEffect(() => {
    const timer = setInterval(next, 7000);
    return () => clearInterval(timer);
  }, [next]);

  const getCardStyles = (index: number) => {
    let diff = index - current;
    
    // Shortest circular path
    const half = testimonials.length / 2;
    if (diff > half) {
      diff -= testimonials.length;
    } else if (diff < -half) {
      diff += testimonials.length;
    }

    const isActive = diff === 0;
    const isLeft = diff < 0;
    const isRight = diff > 0;

    let x = "0%";
    let scale = 1;
    let rotateY = 0;
    let z = 0;
    let opacity = 1;

    if (isActive) {
      x = "0%";
      scale = 1;
      rotateY = 0;
      z = 150;
      opacity = 1;
    } else if (isLeft) {
      x = "-35%";
      scale = 0.85;
      rotateY = 25; // tilt inward
      z = -100;
      opacity = 0.35;
    } else if (isRight) {
      x = "35%";
      scale = 0.85;
      rotateY = -25; // tilt inward
      z = -100;
      opacity = 0.35;
    } else {
      // Behind background
      x = diff > 0 ? "70%" : "-70%";
      scale = 0.7;
      rotateY = diff > 0 ? -45 : 45;
      z = -250;
      opacity = 0;
    }

    return {
      x,
      scale,
      rotateY,
      z,
      opacity,
      pointerEvents: isActive ? ("auto" as const) : ("none" as const),
    };
  };

  return (
    <div ref={containerRef} className="h-[250vh] w-full relative">
      <div 
        onWheel={handleWheel}
        className="sticky top-0 h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-[#FAFAFA]"
      >
        
        {/* Subtle background ambient mesh */}
        <div className="absolute inset-0 bg-[radial-gradient(#E2E8F0_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-50" />

        <div className="section-container relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-12 flex flex-col items-center">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-[#2563EB] text-xs font-bold uppercase tracking-widest mb-3 border border-blue-100/80 shadow-sm">
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0F172A] tracking-tight mb-3">
              What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600">Clients Say</span>
            </h2>
            <p className="text-[#64748B] text-xs sm:text-sm leading-relaxed font-medium">
              Real results from businesses who scaled their operations with Digifore's IT solutions.
            </p>
          </div>

          {/* 3D Stack Slider Container */}
          <div 
            className="relative max-w-5xl w-full mx-auto h-[460px] sm:h-[400px] md:h-[360px] flex items-center justify-center"
            style={{ perspective: "1200px", transformStyle: "preserve-3d" }}
          >
            {/* Envelope Back */}
            <motion.div 
              style={{ 
                opacity: envelopeOpacity, 
                y: envelopeY,
                transform: "translateZ(-300px)",
              }}
              className="absolute bottom-[-100px] sm:bottom-[-60px] w-[95vw] max-w-[800px] h-[340px] bg-[#E2E8F0] rounded-b-[40px] border border-slate-300 pointer-events-none"
            />

            {testimonials.map((t, i) => {
              const styles = getCardStyles(i);
              const isActive = i === current;

              return (
                <motion.div
                  key={t.id}
                  style={{
                    y: cardsY,
                    scale: cardsScale,
                    opacity: cardsOpacity,
                    transformStyle: "preserve-3d",
                  }}
                  className="absolute w-full h-full flex justify-center items-center pointer-events-none"
                >
                  <motion.div
                    style={{
                      pointerEvents: styles.pointerEvents,
                    }}
                    animate={{
                      x: styles.x,
                      scale: styles.scale,
                      rotateY: styles.rotateY,
                      z: styles.z,
                      opacity: styles.opacity,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 80,
                      damping: 18,
                      mass: 0.9,
                    }}
                    onClick={() => !isActive && setCurrent(i)}
                    className={`absolute w-[90%] max-w-[640px] bg-white border border-slate-100 rounded-[32px] p-6 sm:p-10 md:p-12 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.06)] hover:shadow-2xl hover:border-blue-100 transition-shadow duration-300 flex flex-col justify-between cursor-pointer ${
                      isActive ? "shadow-[0_30px_70px_-20px_rgba(0,0,0,0.12)] border-blue-50/50" : ""
                    }`}
                  >
                    {/* Quote Decorative Icon */}
                    <Quote
                      size={64}
                      className={`absolute top-6 right-6 text-slate-50 rotate-180 pointer-events-none transition-colors duration-500 ${
                        isActive ? "text-blue-50/40" : ""
                      }`}
                      fill="currentColor"
                    />

                    <div className="relative z-10 flex-1 flex flex-col justify-between">
                      {/* Rating Stars */}
                      <div className="flex gap-1.5 mb-6">
                        {Array.from({ length: t.rating }).map((_, idx) => (
                          <Star
                            key={idx}
                            size={18}
                            className="text-amber-400"
                            fill="currentColor"
                          />
                        ))}
                      </div>

                      {/* Quote Review */}
                      <blockquote className="text-base sm:text-lg lg:text-xl text-[#1E293B] leading-relaxed font-semibold mb-6">
                        &ldquo;{t.review}&rdquo;
                      </blockquote>

                      {/* Profile info */}
                      <div className="flex items-center gap-4 border-t border-slate-50 pt-6">
                        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md flex-shrink-0 relative bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center font-bold text-blue-600 text-sm">
                          {t.avatar ? (
                            <Image
                              src={t.avatar}
                              alt={t.name}
                              width={48}
                              height={48}
                              className="object-cover w-full h-full"
                              unoptimized
                            />
                          ) : (
                            t.name.split(" ").map((n) => n[0]).join("")
                          )}
                        </div>
                        <div>
                          <div className="text-sm sm:text-base font-black text-[#0F172A]">{t.name}</div>
                          <div className="text-xs sm:text-sm font-semibold text-slate-500">
                            {t.position} <span className="text-blue-600">·</span> {t.company}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}

            {/* Envelope Front Group */}
            <motion.div
              style={{
                opacity: envelopeOpacity,
                y: envelopeY,
                transform: "translateZ(300px)",
              }}
              className="absolute bottom-[-100px] sm:bottom-[-60px] w-[95vw] max-w-[800px] h-[340px] pointer-events-none"
            >
              {/* Flap */}
              <motion.div
                style={{
                  rotateX: flapRotateX,
                  transformOrigin: "top",
                  clipPath: "polygon(0 0, 50% 100%, 100% 0)",
                }}
                className="absolute top-0 left-0 w-full h-[220px] bg-[#CBD5E1]"
              />
              {/* Pocket */}
              <div 
                style={{ clipPath: "polygon(0 100%, 0 0, 50% 65%, 100% 0, 100% 100%)" }}
                className="absolute inset-0 bg-[#F1F5F9] shadow-[0_-20px_40px_rgba(0,0,0,0.06)] rounded-b-[40px] border-t border-white"
              />
            </motion.div>
          </div>

          {/* Navigation arrow buttons at the bottom */}
          <motion.div 
            style={{ opacity: navOpacity }}
            className="flex justify-center gap-4 mt-6 sm:mt-10"
          >
            <button
              onClick={prev}
              className="w-12 h-12 rounded-2xl bg-white border border-slate-200/80 flex items-center justify-center text-slate-500 hover:border-blue-400 hover:text-blue-600 hover:shadow-lg hover:shadow-blue-500/5 active:scale-95 transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} strokeWidth={2.5} />
            </button>
            
            {/* Visual dots indicator */}
            <div className="flex items-center gap-2 px-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`rounded-full transition-all duration-300 ${
                    idx === current
                      ? "w-8 h-2.5 bg-blue-600"
                      : "w-2.5 h-2.5 bg-slate-200 hover:bg-slate-300"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-2xl bg-white border border-slate-200/80 flex items-center justify-center text-slate-500 hover:border-blue-400 hover:text-blue-600 hover:shadow-lg hover:shadow-blue-500/5 active:scale-95 transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} strokeWidth={2.5} />
            </button>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
