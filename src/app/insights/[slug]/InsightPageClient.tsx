"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Story } from "@/lib/insightsData";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function InsightPageClient({ story }: { story: Story }) {
  const { language } = useLanguage();
  const content = story[language];
  const { details } = content;

  // Parallax effect on the hero image
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  
  const yImage = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacityHero = useTransform(scrollYProgress, [0, 1], [1, 0.2]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] selection:bg-blue-600 selection:text-white">
      {/* Re-use Navbar with light theme support if possible, or just standard */}
      <Navbar />

      <main className="pt-[120px] pb-24 md:pb-32 overflow-hidden">
        
        {/* Breadcrumb & Navigation */}
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 mb-8 md:mb-12">
          <Link 
            href="/#insights" 
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            {language === 'id' ? "Kembali ke Beranda" : "Back to Home"}
          </Link>
        </div>

        {/* Hero Section */}
        <article className="max-w-[1200px] mx-auto px-6 lg:px-8">
          
          <header className="mb-10 md:mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-8 h-[1px] bg-blue-600 block" />
              <span className="text-xs md:text-sm font-mono font-bold tracking-[0.2em] uppercase text-blue-600">
                {story.category}
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter text-slate-900 leading-[1.05] max-w-4xl"
            >
              {content.title}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-lg md:text-xl text-slate-600 font-medium max-w-2xl leading-relaxed"
            >
              {content.desc}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-10 flex flex-wrap items-center gap-6 md:gap-10 border-t border-slate-200 pt-6"
            >
              <div className="flex flex-col gap-1">
                <span className="text-[10px] md:text-xs font-mono font-bold tracking-[0.1em] text-slate-400 uppercase">Author</span>
                <span className="text-sm md:text-base font-bold text-slate-900">{story.author}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] md:text-xs font-mono font-bold tracking-[0.1em] text-slate-400 uppercase">Published</span>
                <span className="text-sm md:text-base font-bold text-slate-900">{story.date}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] md:text-xs font-mono font-bold tracking-[0.1em] text-slate-400 uppercase">Duration</span>
                <span className="text-sm md:text-base font-bold text-slate-900">{story.readTime}</span>
              </div>
            </motion.div>
          </header>

          {/* Hero Image */}
          <motion.div 
            ref={heroRef}
            style={{ opacity: opacityHero }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="w-full h-[40vh] md:h-[60vh] lg:h-[70vh] rounded-[24px] md:rounded-[40px] overflow-hidden relative shadow-2xl bg-slate-900"
          >
            <motion.div style={{ y: yImage }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
              <Image 
                src={story.img} 
                fill 
                className="object-cover" 
                alt={content.title}
                priority 
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
            </motion.div>
          </motion.div>

          {/* Content Layout */}
          <div className="mt-16 md:mt-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            
            {/* Left Sidebar (Sticky) */}
            <div className="lg:col-span-4 order-2 lg:order-1">
              <div className="sticky top-32 flex flex-col gap-10">
                
                {/* Tech Stack */}
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
                  <h4 className="text-xs font-mono font-bold tracking-[0.2em] text-slate-400 uppercase mb-5">
                    {language === 'id' ? "Teknologi Inti" : "Core Tech Stack"}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {story.techStack.map(tech => (
                      <span key={tech} className="px-3 py-1.5 bg-slate-50 border border-slate-200 text-slate-700 text-xs font-bold rounded-lg">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Topics / Tags */}
                <div>
                  <h4 className="text-xs font-mono font-bold tracking-[0.2em] text-slate-400 uppercase mb-4">
                    {language === 'id' ? "Topik Bahasan" : "Covered Topics"}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {story.tags.map(tag => (
                      <span key={tag} className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Share (Mock) */}
                <div className="pt-6 border-t border-slate-200">
                   <button className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors flex items-center gap-2">
                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
                     {language === 'id' ? "Bagikan Cerita Ini" : "Share this Story"}
                   </button>
                </div>

              </div>
            </div>

            {/* Right Main Content */}
            <div className="lg:col-span-8 order-1 lg:order-2">
              <div className="prose prose-lg prose-slate max-w-none prose-headings:font-black prose-headings:tracking-tight prose-a:text-blue-600 prose-img:rounded-xl">
                
                {/* Section: Context */}
                <h2 className="text-2xl md:text-3xl mt-0 mb-6 text-slate-900">
                  {language === 'id' ? "Konteks & Visi" : "The Context & Vision"}
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-10">
                  {details.introduction}
                </p>

                {/* Section: Challenge */}
                <h2 className="text-2xl md:text-3xl mt-12 mb-6 text-slate-900">
                  {language === 'id' ? "Tantangan Utama" : "The Core Challenge"}
                </h2>
                <div className="pl-6 border-l-4 border-blue-600 bg-blue-50/50 py-4 pr-4 rounded-r-xl mb-10">
                  <p className="text-slate-700 text-lg leading-relaxed italic m-0">
                    {details.challenge}
                  </p>
                </div>

                {/* Section: Approach */}
                <h2 className="text-2xl md:text-3xl mt-12 mb-6 text-slate-900">
                  {language === 'id' ? "Pendekatan Strategis" : "Strategic Approach"}
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-10">
                  {details.approach}
                </p>

                {/* Section: Impact */}
                <h2 className="text-2xl md:text-3xl mt-12 mb-6 text-slate-900">
                  {language === 'id' ? "Dampak & Hasil" : "Impact & Results"}
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-10">
                  {details.impact}
                </p>

              </div>
            </div>

          </div>

        </article>

        {/* CTA Section */}
        <section className="mt-24 md:mt-32 max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="bg-slate-900 rounded-[32px] md:rounded-[40px] p-10 md:p-16 lg:p-20 text-center flex flex-col items-center relative overflow-hidden">
            {/* Abstract Background pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <svg width="100%" height="100%">
                <defs>
                  <pattern id="cta-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M0 40L40 0H20L0 20M40 40V20L20 40" stroke="white" strokeWidth="1" fill="none" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#cta-grid)" />
              </svg>
            </div>
            
            <h3 className="text-3xl md:text-5xl font-black text-white mb-6 relative z-10 tracking-tight">
              {language === 'id' ? "Siap Membangun Sesuatu yang Luar Biasa?" : "Ready to Build Something Extraordinary?"}
            </h3>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mb-10 relative z-10">
              {language === 'id' ? "Mari bekerja sama untuk mengubah visi Anda menjadi produk digital kelas dunia." : "Let's collaborate to turn your vision into a world-class digital product."}
            </p>
            <Link 
              href="/contact"
              className="relative z-10 bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-10 rounded-full transition-colors shadow-[0_0_20px_rgba(37,99,235,0.4)]"
            >
              {language === 'id' ? "Mulai Proyek Anda" : "Start Your Project"}
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
