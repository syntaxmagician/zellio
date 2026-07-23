"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

// The premium minimal links
const mainLinks = [
  { label: "Home", href: "/", idKey: "Beranda" },
  { label: "Services", href: "/#services", idKey: "Layanan" },
  { label: "Portfolio", href: "/portfolio", idKey: "Portofolio" },
  { label: "About", href: "/#about", idKey: "Tentang" },
  { label: "Contact", href: "/#contact", idKey: "Kontak" },
];

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Monitor scroll for premium float transition
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      {/* 
        DESKTOP NAVBAR
        Top bar transition: Transparent -> Backdrop blur + border
      */}
      <nav
        className={`hidden lg:flex fixed top-0 left-0 right-0 z-[100] w-full transition-all duration-300 ease-out ${
          scrolled 
            ? "bg-white/75 backdrop-blur-md border-b border-slate-200/50 py-4 shadow-sm" 
            : "bg-transparent border-b border-transparent py-7"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 w-full flex items-center justify-between">
          
          {/* LEFT: Logo */}
          <div className="relative w-[180px] lg:w-[240px] h-10 shrink-0">
            <Link href="/" className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center">
              <img 
                src="/zelio.png" 
                alt="Zellio Logo" 
                className="w-auto object-contain drop-shadow-sm"
                style={{ 
                  height: '44px', 
                  transform: 'scale(3.2)', 
                  transformOrigin: 'left center' 
                }}
              />
            </Link>
          </div>

          {/* CENTER: Editorial Navigation Links */}
          <div className="flex items-center gap-8 lg:gap-10">
            {mainLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className="group relative flex items-center h-full cursor-pointer py-1"
              >
                <span className="text-[13px] font-medium tracking-wide text-slate-600 group-hover:text-slate-900 transition-colors duration-200 uppercase">
                  {language === "id" ? link.idKey : link.label}
                </span>
                
                {/* Subtle Hover Underline Animation */}
                <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-slate-900 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
              </Link>
            ))}
          </div>

          {/* RIGHT: Controls (Language + CTA) */}
          <div className="flex items-center justify-end shrink-0 w-[180px] gap-6">
            
            {/* Minimal Segmented Language Control */}
            <div className="flex items-center text-[11px] font-bold tracking-widest font-mono text-slate-400">
              <button 
                onClick={() => setLanguage("en")}
                className={`transition-opacity duration-200 hover:opacity-100 ${language === "en" ? "text-slate-900 opacity-100" : "opacity-40"}`}
              >
                EN
              </button>
              <span className="mx-1.5 opacity-30">/</span>
              <button 
                onClick={() => setLanguage("id")}
                className={`transition-opacity duration-200 hover:opacity-100 ${language === "id" ? "text-slate-900 opacity-100" : "opacity-40"}`}
              >
                ID
              </button>
            </div>

            {/* Premium Minimal CTA */}
            <a
              href="https://wa.me/6285158945811?text=Saya%20ingin%20kosultasi%20mengenai%20project%20yang%20saya%20sedang%20kembangkan%2C%20"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-slate-900 text-white rounded-full px-5 py-2.5 text-[12px] font-semibold tracking-wide transition-all duration-300 hover:bg-slate-800 hover:scale-[1.02] shadow-sm hover:shadow-md cursor-pointer whitespace-nowrap"
            >
              {language === "id" ? "Mulai Proyek" : "Start Project"}
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>

          </div>

        </div>
      </nav>

      {/* 
        MOBILE NAVBAR
        Clean, full-width responsive header
      */}
      <header 
        className={`lg:hidden fixed top-0 left-0 right-0 z-[100] w-full transition-all duration-300 ${
          scrolled || mobileOpen
            ? "bg-white/95 backdrop-blur-md border-b border-slate-200/50 shadow-sm" 
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="flex items-center justify-between h-20 px-6">
          {/* Mobile Logo */}
          <div className="relative w-[160px] h-10 shrink-0 z-20">
            <Link href="/" className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center">
              <img 
                src="/zelio.png" 
                alt="Zellio Logo" 
                className="w-auto object-contain drop-shadow-sm"
                style={{ 
                  height: '36px', 
                  transform: 'scale(3.2)', 
                  transformOrigin: 'left center' 
                }}
              />
            </Link>
          </div>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 z-20 text-slate-800 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu Overlay */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "100vh", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-20 left-0 w-full bg-white border-t border-slate-100 overflow-hidden flex flex-col"
            >
              <div className="px-8 pt-8 pb-12 flex flex-col gap-6">
                {/* Mobile Links */}
                {mainLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-2xl font-bold tracking-tight text-slate-900 hover:text-blue-600 transition-colors"
                    >
                      {language === "id" ? link.idKey : link.label}
                    </Link>
                  </motion.div>
                ))}
                
                {/* Mobile Divider */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="w-full h-px bg-slate-100 my-4"
                />

                {/* Mobile Controls */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-2 text-sm font-bold tracking-widest font-mono text-slate-400">
                    <button 
                      onClick={() => setLanguage("en")}
                      className={`transition-opacity duration-200 ${language === "en" ? "text-slate-900" : ""}`}
                    >
                      EN
                    </button>
                    <span>/</span>
                    <button 
                      onClick={() => setLanguage("id")}
                      className={`transition-opacity duration-200 ${language === "id" ? "text-slate-900" : ""}`}
                    >
                      ID
                    </button>
                  </div>

                  <a
                    href="https://wa.me/6285158945811"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileOpen(false)}
                    className="inline-flex items-center gap-2 bg-slate-900 text-white rounded-full px-6 py-3 text-[13px] font-bold tracking-wide shadow-md hover:bg-slate-800"
                  >
                    {language === "id" ? "Mulai Proyek" : "Start Project"}
                    <ArrowRight size={14} />
                  </a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
