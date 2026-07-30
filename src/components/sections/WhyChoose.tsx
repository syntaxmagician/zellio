"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const localText = {
  en: {
    label: "WHY QUALITY MATTERS",
    manifesto: "Many software projects fail not because of technology, but because they are built with rushed architecture, short-term thinking, and code that cannot evolve. Cheap software often becomes the most expensive business decision. At ZELLIO, we engineer software that remains maintainable, scalable, secure, and reliable for years.",
    principles: [
      {
        title: "Elite Engineers",
        description: "Our team consists of top-tier full-stack developers, UI/UX designers, and cloud architects working dedicatedly for your project."
      },
      {
        title: "Modern Technology Stack",
        description: "We leverage cutting-edge tech stacks (React, Next.js, Node, TypeScript) for maximum performance, security, and scalability."
      },
      {
        title: "Enterprise Security",
        description: "Security is integrated into every layer from day one, adhering to global standards and protecting your digital infrastructure."
      },
      {
        title: "Reliable Delivery",
        description: "We combine elite engineering with an agile, transparent development process to guarantee your project's success on time."
      }
    ]
  },
  id: {
    label: "MENGAPA KUALITAS PENTING",
    manifesto: "Banyak proyek perangkat lunak gagal bukan karena teknologinya, melainkan karena dibangun dengan arsitektur yang terburu-buru, pemikiran jangka pendek, dan kode yang tidak dapat berkembang. Perangkat lunak murah sering kali menjadi keputusan bisnis yang paling mahal. Di ZELLIO, kami merancang perangkat lunak yang tetap dapat dipelihara, berskala besar, aman, dan andal selama bertahun-tahun.",
    principles: [
      {
        title: "Insinyur Elit",
        description: "Tim kami terdiri dari pengembang full-stack, desainer UI/UX, dan arsitek cloud tingkat atas yang bekerja secara dedikatif untuk proyek Anda."
      },
      {
        title: "Teknologi Modern",
        description: "Kami memanfaatkan teknologi terbaru (React, Next.js, Node, TypeScript) demi performa, keamanan, dan skalabilitas sistem yang maksimal."
      },
      {
        title: "Keamanan Enterprise",
        description: "Keamanan diintegrasikan ke dalam setiap lapisan sejak hari pertama, mematuhi standar global dan melindungi infrastruktur digital Anda."
      },
      {
        title: "Pengiriman Andal",
        description: "Kami memadukan rekayasa teknologi elit dengan proses pengembangan yang transparan dan tangkas untuk menjamin keberhasilan proyek Anda tepat waktu."
      }
    ]
  }
};




export default function WhyChoose() {
  const { language } = useLanguage();
  const text = localText[language];
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [clickedIdxs, setClickedIdxs] = useState<number[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  const containerTrackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerTrackRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.4], [0.95, 1]);
  const premiumEase = [0.22, 1, 0.36, 1] as [number, number, number, number];

  const words = [
    { text: "Invest", color: "text-slate-900" },
    { text: "in", color: "text-slate-900" },
    { text: "Quality.", color: "text-slate-900" },
    { text: "Avoid", color: "text-slate-900" },
    { text: "Broken", color: "text-blue-600" },
    { text: "Systems.", color: "text-blue-600" },
  ];

  return (
    <section id="why-choose" className="py-16 lg:py-24 bg-[#FFFFFF] overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Section Label */}
        <span className="text-xs sm:text-sm md:text-base font-mono font-bold tracking-[0.2em] uppercase text-blue-600 mb-4 block">
          {text.label}
        </span>

        {/* Viewport-Dominating Manifesto Headline */}
        <motion.h2 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "100px" }} // Reduced restriction so it always triggers
          variants={{
            visible: { transition: { staggerChildren: 0.08 } }
          }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5.5rem] font-black tracking-tighter leading-[1.05] mb-8 max-w-[1000px]"
        >
          {words.map((w, idx) => (
            <span key={idx} className="inline-block overflow-hidden py-1 mr-3 md:mr-5">
              <motion.span
                variants={{
                  hidden: { y: "120%", opacity: 0 },
                  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: premiumEase } }
                }}
                className={`inline-block ${w.color}`}
              >
                {w.text}
              </motion.span>
            </span>
          ))}
        </motion.h2>

        {/* Manifesto Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.45, ease: premiumEase }}
          className="text-slate-500 font-medium text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl mb-12"
        >
          {text.manifesto}
        </motion.p>

        {/* 
          FULL-WIDTH INTERACTIVE NETWORK CANVAS 
          Fixed Height to prevent it from becoming gigantic on wide screens
        */}
        <div ref={containerTrackRef} className="w-full relative overflow-hidden my-12 lg:my-16">
          <motion.div
            style={{ scale }}
            /* Capped at the video's own 1024px width — object-cover would
               otherwise stretch a 1024x576 file across the full 1350px column
               and soften it. */
            className="w-full max-w-[1024px] mx-auto h-[280px] md:h-[320px] lg:h-[380px] xl:h-[420px] rounded-[32px] md:rounded-[40px] overflow-hidden border border-slate-200/60 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.03)] relative bg-white"
          >
            <video
              src="/globe.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover pointer-events-none"
            />
          </motion.div>
        </div>

        {/* MINIMALIST ENGINEERING PRINCIPLES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mt-12 lg:mt-16">
          {text.principles.map((principle, idx) => {
            const isHovered = hoveredIdx === idx;
            const isClicked = clickedIdxs.includes(idx);
            const isVisible = isHovered || isClicked || isMobile;

            const handleToggleClick = () => {
              if (clickedIdxs.includes(idx)) {
                setClickedIdxs(clickedIdxs.filter(i => i !== idx));
              } else {
                setClickedIdxs([...clickedIdxs, idx]);
              }
            };

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: idx * 0.08, ease: premiumEase }}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                onClick={handleToggleClick}
                className="flex flex-col pt-8 border-t border-slate-200/80 cursor-pointer min-h-[160px] group select-none"
              >
                <span className="text-[10px] font-mono font-bold text-slate-400 mb-4 block group-hover:text-blue-600 transition-colors duration-300">
                  0{idx + 1}
                </span>
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-blue-600 transition-colors duration-300">
                  {principle.title}
                </h3>
                <div className="overflow-hidden">
                  <motion.p
                    className="text-slate-500 font-medium text-sm md:text-base leading-relaxed mt-2"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ 
                      height: isVisible ? "auto" : 0, 
                      opacity: isVisible ? 1 : 0 
                    }}
                    transition={{ duration: 0.35, ease: premiumEase }}
                  >
                    {principle.description}
                  </motion.p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
