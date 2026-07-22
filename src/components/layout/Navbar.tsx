"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import { Menu, X, ArrowRight, Monitor, BarChart2, Smartphone, Layers, Cloud, Palette, ChevronDown, Zap } from "lucide-react";
import { navLinks, servicesData } from "@/lib/data";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { TranslationKey } from "@/lib/translations";

const iconMap: Record<string, React.ReactNode> = {
  "Monitor": <Monitor size={20} />,
  "BarChart2": <BarChart2 size={20} />,
  "Smartphone": <Smartphone size={20} />,
  "Layers": <Layers size={20} />,
  "Cloud": <Cloud size={20} />,
  "Palette": <Palette size={20} />,
};

const getNavLabelKey = (label: string): TranslationKey => {
  switch (label.toLowerCase()) {
    case "home": return "nav.home";
    case "about us": return "nav.about";
    case "services": return "nav.services";
    case "why us": return "nav.whyUs";
    case "portfolio": return "nav.portfolio";
    case "contact": return "nav.contact";
    default: return "nav.home";
  }
};

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [showServices, setShowServices] = useState(false);
  
  const navRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);

  // Smooth springs for mouse follow spotlight
  const smoothX = useSpring(mouseX, { damping: 25, stiffness: 150 });
  const smoothY = useSpring(mouseY, { damping: 25, stiffness: 150 });

  const handleNavMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!navRef.current) return;
    const rect = navRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };
  
  const handleNavMouseLeave = () => {
    setIsHovered(false);
    setHoveredIdx(null);
    setShowServices(false);
  };

  const spotlightBackground = useMotionTemplate`radial-gradient(400px circle at ${smoothX}px ${smoothY}px, rgba(59, 130, 246, 0.15), rgba(168, 85, 247, 0.08) 30%, transparent 80%)`;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      {/* DESKTOP NAVBAR: CLEAN CYBER-GLASS DOCK */}
      <motion.nav
        ref={navRef}
        onMouseMove={handleNavMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleNavMouseLeave}
        style={{
          top: "24px",
          width: "90%",
          maxWidth: "1152px",
          height: "80px",
          borderRadius: "100px",
        }}
        animate={{
          backgroundColor: scrolled ? "rgba(255, 255, 255, 0.85)" : "rgba(255, 255, 255, 0.65)",
          border: scrolled ? "1px solid rgba(59, 130, 246, 0.25)" : "1px solid rgba(226, 232, 240, 0.8)",
          boxShadow: scrolled ? "0 20px 40px rgba(59, 130, 246, 0.08)" : "0 10px 30px rgba(0, 0, 0, 0.04)",
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="hidden lg:flex fixed left-1/2 -translate-x-1/2 z-[100] px-8 xl:px-12 items-center justify-between backdrop-blur-3xl transition-colors will-change-transform"
      >
        {/* DYNAMIC HOLOGRAPHIC GLOW EFFECT */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="pointer-events-none absolute inset-0 z-[-1] rounded-full mix-blend-color-burn dark:mix-blend-color-dodge"
              style={{ background: spotlightBackground }}
            />
          )}
        </AnimatePresence>

        {/* LOGO */}
        <Link href="/" className="flex items-center group relative w-56 h-10 pl-2">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center">
            <img 
              src="/zelio.png" 
              alt="Zellio Logo" 
              className="w-auto object-contain transition-all duration-300 origin-left drop-shadow-sm scale-[2.6]"
              style={{ height: '40px' }}
            />
          </div>
        </Link>

        {/* NAVIGATION LINKS */}
        <div className="flex items-center gap-1 relative h-full">
          {navLinks.map((link, idx) => (
            <div
              key={link.href}
              className="h-full flex items-center"
              onMouseEnter={() => {
                setHoveredIdx(idx);
                if (link.label === "Services") setShowServices(true);
                else setShowServices(false);
              }}
            >
              <Link href={link.href} className="relative px-5 py-2.5 rounded-full group flex items-center gap-1 z-10 cursor-pointer">
                <span className="relative z-10 text-[11px] font-black tracking-[0.22em] uppercase text-slate-700 transition-colors duration-200 group-hover:text-blue-600 flex items-center gap-1">
                  {t(getNavLabelKey(link.label))}
                  {link.label === "Services" && <ChevronDown size={12} className={`transition-transform duration-300 ${showServices ? 'rotate-180 text-blue-600' : ''}`} />}
                </span>
                
                <AnimatePresence>
                  {hoveredIdx === idx && (
                    <motion.div
                      layoutId="nav-hover-pill-neon"
                      className="absolute inset-0 rounded-full z-0 border border-blue-500/20 bg-blue-500/5 shadow-[0_0_15px_rgba(59,130,246,0.1)] backdrop-blur-sm"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </AnimatePresence>
              </Link>
            </div>
          ))}

          {/* BENTO MEGA-MENU FOR SERVICES */}
          <AnimatePresence>
            {showServices && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.98 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute top-[85px] left-1/2 -translate-x-1/2 w-[700px] bg-white/95 backdrop-blur-2xl border border-slate-200/60 rounded-[2rem] p-6 shadow-[0_40px_80px_rgba(0,0,0,0.1),0_0_0_1px_rgba(255,255,255,0.5)] origin-top will-change-transform"
                onMouseEnter={() => setShowServices(true)}
                onMouseLeave={() => setShowServices(false)}
              >
                <div className="grid grid-cols-2 gap-3">
                  {servicesData.slice(0, 6).map((service) => {
                    const slug = service.title.toLowerCase().replace(/[\s&/]+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
                    const titleKey = `service.${slug}` as TranslationKey;
                    const descKey = `service.desc.${slug}` as TranslationKey;
                    return (
                      <Link 
                        key={service.id} 
                        href={`/services/${slug}`}
                        onClick={() => setShowServices(false)}
                        className="group/bento p-4 rounded-2xl hover:bg-slate-50/80 transition-all duration-200 flex gap-4 border border-transparent hover:border-slate-100 hover:shadow-sm cursor-pointer"
                      >
                        <div 
                          className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-inner group-hover/bento:scale-110 transition-transform duration-300" 
                          style={{ backgroundColor: service.bgColor, color: service.color }}
                        >
                          {iconMap[service.icon] || <Zap size={20} />}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-[13px] font-bold text-slate-900 mb-1 group-hover/bento:text-blue-600 transition-colors flex items-center justify-between">
                            {t(titleKey)}
                            <ArrowRight size={12} className="opacity-0 -translate-x-2 group-hover/bento:opacity-100 group-hover/bento:translate-x-0 transition-all text-blue-600" />
                          </h4>
                          <p className="text-[11px] text-slate-500 leading-relaxed line-clamp-2">{t(descKey)}</p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
                <div className="mt-4 pt-4 border-t border-slate-100 flex justify-between items-center px-4">
                  <p className="text-xs text-slate-500 font-medium">{t("service.elevate")}</p>
                  <Link href="/#services" onClick={() => setShowServices(false)} className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 group/more cursor-pointer">
                    {t("service.viewAll")} <ArrowRight size={12} className="group-hover/more:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* CONTROLS (LANGUAGE + CTA) */}
        <div className="flex items-center">
          {/* Modern EN / ID Pill Toggle */}
          <div className="flex items-center bg-slate-100 hover:bg-slate-200/80 p-[4px] rounded-full border border-slate-200 shadow-inner mr-4">
            <button
              onClick={() => setLanguage("en")}
              className={`px-3 py-1.5 rounded-full text-[10px] font-black tracking-wider transition-all uppercase ${
                language === "en"
                  ? "bg-slate-900 text-white shadow-sm"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage("id")}
              className={`px-3 py-1.5 rounded-full text-[10px] font-black tracking-wider transition-all uppercase ${
                language === "id"
                  ? "bg-slate-900 text-white shadow-sm"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              ID
            </button>
          </div>

          <Link
            href="/#contact"
            className="group relative px-6 py-3 rounded-full overflow-hidden bg-slate-900 text-white text-[13px] font-semibold transition-all duration-200 shadow-[0_8px_20px_rgba(15,23,42,0.15)] hover:shadow-blue-500/25 flex items-center gap-2 border border-slate-700 hover:border-blue-500 cursor-pointer"
          >
            <span className="relative flex h-[6px] w-[6px] mr-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-[6px] w-[6px] bg-emerald-500"></span>
            </span>
            <span className="relative z-10 flex items-center gap-2 tracking-wide">
              {t("nav.startProject")} <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </div>
      </motion.nav>

      {/* MOBILE NAVBAR: SLEEK GLASS DOCK PILL */}
      <header className="lg:hidden fixed top-4 left-0 right-0 z-[100] mx-auto w-[calc(100%-2rem)]">
        <div 
          className={`relative overflow-hidden transition-all duration-300 border bg-white/95 backdrop-blur-2xl border-slate-200/80 shadow-[0_15px_35px_rgba(0,0,0,0.08)] ${
            mobileOpen ? "rounded-3xl" : "rounded-full"
          }`}
        >
          <nav className="relative z-20 h-16 px-6 flex items-center justify-between">
            <Link href="/" className="flex items-center group relative w-36 h-10">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center">
                <img 
                  src="/zelio.png" 
                  alt="Zellio Logo" 
                  className="w-auto object-contain origin-left drop-shadow-sm" 
                  style={{ 
                    height: '32px',
                    transform: 'scale(2.2)',
                  }}
                />
              </div>
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2.5 rounded-full transition-all border bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100 active:scale-95"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </nav>

          <AnimatePresence>
            {mobileOpen && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="relative z-10 bg-slate-50/50"
              >
                <div className="px-5 pb-6 pt-2 flex flex-col gap-1 border-t border-slate-100">
                  {navLinks.map((link, i) => (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      key={link.href}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className="px-4 py-3 text-[13px] font-bold tracking-wider uppercase text-slate-700 hover:text-blue-600 hover:bg-white rounded-xl transition-all flex items-center justify-between group"
                      >
                        {t(getNavLabelKey(link.label))}
                        <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-blue-600" />
                      </Link>
                    </motion.div>
                  ))}
                  
                  {/* Mobile Language Toggle */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navLinks.length * 0.05 }}
                    className="flex items-center justify-between px-4 py-3 mt-2 bg-white rounded-xl border border-slate-100"
                  >
                    <span className="text-[12px] font-bold tracking-wider text-slate-600 uppercase">Language</span>
                    <div className="flex items-center bg-slate-100 p-1 rounded-full border border-slate-200">
                      <button
                        onClick={() => setLanguage("en")}
                        className={`px-3 py-1 rounded-full text-[10px] font-black transition-all ${
                          language === "en" ? "bg-slate-900 text-white" : "text-slate-500"
                        }`}
                      >
                        EN
                      </button>
                      <button
                        onClick={() => setLanguage("id")}
                        className={`px-3 py-1 rounded-full text-[10px] font-black transition-all ${
                          language === "id" ? "bg-slate-900 text-white" : "text-slate-500"
                        }`}
                      >
                        ID
                      </button>
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mt-4 pt-4 border-t border-slate-200"
                  >
                    <Link
                      href="/#contact"
                      onClick={() => setMobileOpen(false)}
                      className="w-full py-3.5 bg-slate-900 hover:bg-blue-600 text-white text-center text-sm font-bold tracking-wide rounded-xl flex items-center justify-center gap-2 shadow-lg hover:shadow-blue-500/25 transition-all active:scale-[0.98]"
                    >
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                      </span>
                      {t("nav.startProject")}
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>
    </>
  );
}
