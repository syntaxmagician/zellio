"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const storiesData = [
  {
    category: "CULTURE",
    title: "Synergy in Motion",
    desc: "Behind ZELLIO's blueprints are teams working in a unified rhythm to craft digital assets that are as robust as they are beautiful.",
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop", // Bright office collaboration
    tags: ["Collaboration", "Agile", "Team"],
    buttonText: "Read Story"
  },
  {
    category: "ENGINEERING",
    title: "Crafting the Foundation",
    desc: "We focus on clean, documented, and resilient systems. A calm, focused environment leads to the highest quality of structural integrity.",
    img: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1200&auto=format&fit=crop", // Minimal desk with plant
    tags: ["Architecture", "Focus", "Quality"],
    buttonText: "Read Story"
  },
  {
    category: "PRODUCT",
    title: "The Anatomy of a Modern CRM",
    desc: "Re-engineering customer management starts with understanding the human element. Every great system begins with simple sketches and ideas.",
    img: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?q=80&w=1200&auto=format&fit=crop", // Notebook, pen, coffee
    tags: ["CRM", "Strategy", "UX"],
    buttonText: "View Case Study"
  },
  {
    category: "DESIGN",
    title: "Pixels with Purpose",
    desc: "Before any pixels are pushed, we map out user journeys on paper. Rigorous planning ensures that our interfaces are highly intuitive.",
    img: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=1200&auto=format&fit=crop", // Paper wireframes
    tags: ["UI/UX", "Research", "Wireframe"],
    buttonText: "Read Story"
  },
  {
    category: "MOBILE",
    title: "Unified Mobile Ecosystems",
    desc: "Creating seamless experiences across devices requires a holistic view of the entire operational workspace and human interaction.",
    img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop", // Team standing at desk
    tags: ["Mobile", "Ecosystem", "Human"],
    buttonText: "View Case Study"
  },
  {
    category: "INFRASTRUCTURE",
    title: "Microservices vs Monoliths",
    desc: "Our architectural philosophy is mirrored in the spaces we design: clean, scalable, transparent, and built to withstand massive capacity.",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop", // Clean modern bright office interior
    tags: ["Scaling", "Cloud", "Space"],
    buttonText: "Read Story"
  },
  {
    category: "INNOVATION",
    title: "Rapid Prototyping Labs",
    desc: "Transforming raw ideas into prototypes is a collaborative celebration. We believe the best digital products are born from strong human connections.",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop", // People laughing and high-fiving
    tags: ["Prototyping", "R&D", "Culture"],
    buttonText: "Read Story"
  }
];

export default function Insights() {
  const { language } = useLanguage();
  const titleText = language === "id" ? "Kisah di Balik Layar ZELLIO" : "The Stories Behind ZELLIO";
  const labelText = language === "id" ? "WAWASAN & KARYA" : "INSIGHTS & CRAFT";
  
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStory = storiesData[activeIndex];

  const handlePrev = () => setActiveIndex((prev) => Math.max(0, prev - 1));
  const handleNext = () => setActiveIndex((prev) => Math.min(storiesData.length - 1, prev + 1));

  return (
    // Changed to Light Mode
    <section className="w-full bg-[#FAFAFA] text-slate-900 py-24 relative overflow-hidden">
      
      {/* Light Ambient Background Glow */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-[0.03] transition-opacity duration-1000">
        <AnimatePresence mode="wait">
          <motion.div
            key={`bg-${activeIndex}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <Image src={activeStory.img} fill className="object-cover blur-[100px] scale-125 saturate-150" alt="blur" />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Top Header */}
        <div className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-8">
          <div>
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-indigo-600 mb-4 block"
            >
              {labelText}
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900"
            >
              {titleText}
            </motion.h2>
          </div>
          <div className="hidden md:flex gap-3">
             <button onClick={handlePrev} disabled={activeIndex === 0} className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-100 text-slate-600 disabled:opacity-30 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/></svg>
             </button>
             <button onClick={handleNext} disabled={activeIndex === storiesData.length - 1} className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-100 text-slate-600 disabled:opacity-30 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
             </button>
          </div>
        </div>

        {/* Cinematic Main Stage - REDUCED HEIGHT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center min-h-[350px] lg:min-h-[420px] mb-16">
          
          {/* Left: Text Content (Animated) */}
          <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={`text-${activeIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col gap-6"
              >
                <div className="inline-flex items-center gap-3">
                  <span className="w-8 h-[1px] bg-indigo-500 block" />
                  <span className="text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-slate-500">
                    {activeStory.category}
                  </span>
                </div>
                
                <h3 className="text-4xl lg:text-[42px] font-black tracking-tight leading-[1.1] text-slate-900">
                  {activeStory.title}
                </h3>
                
                <p className="text-base lg:text-lg text-slate-600 leading-relaxed font-medium">
                  {activeStory.desc}
                </p>

                <div className="flex flex-wrap items-center gap-3 mt-2">
                  {activeStory.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold text-slate-600 uppercase">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-4">
                  <button className="group inline-flex items-center gap-2 text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 px-7 py-3.5 rounded-full transition-all duration-300 shadow-md hover:shadow-xl">
                    <span>{activeStory.buttonText}</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: Big Image (Animated) - REDUCED HEIGHT */}
          <div className="lg:col-span-7 h-[280px] sm:h-[350px] lg:h-[420px] relative rounded-[28px] overflow-hidden shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] order-1 lg:order-2 border border-slate-200/50">
            <AnimatePresence mode="wait">
               <motion.div
                 key={`img-${activeIndex}`}
                 initial={{ opacity: 0, scale: 1.05 }}
                 animate={{ opacity: 1, scale: 1 }}
                 exit={{ opacity: 0 }}
                 transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                 className="absolute inset-0"
               >
                 <Image src={activeStory.img} fill className="object-cover" alt={activeStory.title} />
               </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Thumbnail Strip (Native Swipe/Scroll) */}
        <div className="flex flex-col gap-4 relative z-20">
           <div className="flex justify-between items-center text-slate-400 text-[10px] font-mono tracking-[0.2em] uppercase">
             <span>01 &mdash; 07 Stories</span>
             <span>Swipe to Explore</span>
           </div>

           {/* Hidden scrollbar trick */}
           <div className="flex gap-4 md:gap-5 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: 'none' }}>
              {storiesData.map((s, i) => (
                <button 
                  key={i} 
                  onClick={() => setActiveIndex(i)} 
                  className={`relative shrink-0 w-[140px] h-[90px] md:w-[200px] md:h-[120px] rounded-[16px] overflow-hidden snap-start transition-all duration-500 ease-out group ${
                    activeIndex === i 
                      ? 'ring-2 ring-indigo-500 ring-offset-4 ring-offset-[#FAFAFA] opacity-100 scale-100 shadow-md' 
                      : 'opacity-50 hover:opacity-80 scale-[0.98] hover:scale-100 grayscale-[30%] hover:grayscale-0'
                  }`}
                >
                   <Image src={s.img} fill className="object-cover transition-transform duration-700 group-hover:scale-110" alt={`thumb-${i}`} />
                   
                   {/* Light vignette for thumbnails to keep text readable */}
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                   
                   {/* Thumbnail Label */}
                   <div className="absolute bottom-3 left-3 right-3 text-left">
                     <span className="text-[10px] md:text-xs font-bold text-white leading-tight drop-shadow-md">
                       {s.title}
                     </span>
                   </div>
                </button>
              ))}
           </div>
        </div>

      </div>
    </section>
  );
}
