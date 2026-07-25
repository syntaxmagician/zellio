"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, ChevronDown, Monitor, BarChart2, Smartphone, Layers, Cloud, Palette, Globe, FileText, ShoppingBag, Database, Users, UserCheck, Package, Truck, Cpu, Brain } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { servicesData } from "@/lib/data";

// The premium minimal links
const mainLinks = [
  { label: "Home", href: "/", idKey: "Beranda" },
  { label: "Services", href: "/#services", idKey: "Layanan" },
  { label: "Portfolio", href: "/portfolio", idKey: "Portofolio" },
  { label: "Team", href: "/team", idKey: "Tim" },
  { label: "About", href: "/#about", idKey: "Tentang" },
  { label: "Contact", href: "/contact", idKey: "Kontak" },
];

const iconMap: Record<string, React.ElementType> = {
  Monitor,
  BarChart2,
  Smartphone,
  Layers,
  Cloud,
  Palette,
  Globe,
  FileText,
  ShoppingBag,
  Database,
  Users,
  UserCheck,
  Package,
  Truck,
  Cpu,
  Brain,
};

const getSlug = (title: string) => title.toLowerCase().replace(/[\s&/]+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [hoveredItemId, setHoveredItemId] = useState<number | null>(null);

  // Monitor scroll for premium float transition
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    if (!mobileOpen) setMobileServicesOpen(false); // Reset dropdown when menu closes
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
              <Image 
                src="/zelio.png" 
                alt="Zellio Logo" 
                width={240}
                height={44}
                className="w-auto object-contain drop-shadow-sm"
                style={{ 
                  height: '44px', 
                  transform: 'scale(3.2)', 
                  transformOrigin: 'left center' 
                }}
                priority
              />
            </Link>
          </div>

          {/* CENTER: Editorial Navigation Links */}
          <div className="flex items-center gap-8 lg:gap-10 h-full">
            {mainLinks.map((link) => {
              if (link.label === "Services") {
                return (
                  <div 
                    key={link.href}
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => {
                      setDropdownOpen(false);
                      setHoveredItemId(null);
                    }}
                    className="group relative flex flex-col justify-center h-full cursor-pointer py-1"
                  >
                    <div className="flex items-center gap-1">
                      <span className={`text-[13px] font-medium tracking-wide transition-colors duration-200 uppercase ${dropdownOpen ? "text-slate-900" : "text-slate-600 group-hover:text-slate-900"}`}>
                        {language === "id" ? link.idKey : link.label}
                      </span>
                      <ChevronDown size={14} className={`text-slate-400 transition-all duration-300 ${dropdownOpen ? "rotate-180 text-slate-900" : "group-hover:text-slate-900"}`} />
                    </div>
                    
                    {/* Subtle Hover Underline Animation */}
                    <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-slate-900 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                    
                    {/* Premium Asymmetric Mega Menu with Framer Motion */}
                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 15, scale: 0.95, filter: "blur(4px)" }}
                          animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                          exit={{ opacity: 0, y: 10, scale: 0.95, filter: "blur(4px)" }}
                          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                          className="absolute top-[28px] left-1/2 -translate-x-1/2 pt-4 z-[110] pointer-events-auto"
                        >
                          <div className="w-[560px] bg-white/95 backdrop-blur-2xl rounded-[28px] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] border border-slate-200/60 p-5 flex flex-col gap-4">
                            
                            {/* Grid of 6 Top Services */}
                            <div className="grid grid-cols-2 gap-2.5">
                              {servicesData.slice(0, 6).map((service) => {
                                const Icon = iconMap[service.icon];
                                return (
                                  <Link
                                    key={service.id}
                                    href={`/services/${getSlug(service.title)}`}
                                    onMouseEnter={() => setHoveredItemId(service.id)}
                                    onMouseLeave={() => setHoveredItemId(null)}
                                    onClick={() => setDropdownOpen(false)}
                                    className="group/item flex items-center gap-3.5 p-3 rounded-2xl border border-transparent transition-all duration-300 text-left hover:bg-slate-50 hover:shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:border-slate-100"
                                  >
                                    {/* 3D Glassmorphic Icon Wrapper */}
                                    <div 
                                      className="relative w-11 h-11 rounded-[12px] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover/item:scale-110 shadow-sm"
                                      style={{
                                        background: `linear-gradient(135deg, ${service.bgColor}, #ffffff)`,
                                        boxShadow: `4px 4px 10px rgba(0,0,0,0.03), -4px -4px 10px rgba(255,255,255,0.8), inset 0px 2px 4px rgba(255,255,255,0.6), inset 0px -2px 6px ${service.color}15`,
                                        border: '1px solid rgba(255,255,255,0.9)'
                                      }}
                                    >
                                      <div style={{ color: service.color, filter: 'drop-shadow(0px 2px 3px rgba(0,0,0,0.12))' }}>
                                        {Icon && <Icon size={20} strokeWidth={2.5} />}
                                      </div>
                                    </div>
                                    
                                    <div className="flex flex-col flex-1 min-w-0 justify-center">
                                      <span className="text-[13px] font-bold text-slate-900 leading-tight group-hover/item:text-blue-600 transition-colors truncate">
                                        {service.title}
                                      </span>
                                      <span className="text-[10px] text-slate-500 font-medium leading-[1.3] truncate transition-colors group-hover/item:text-slate-600 mt-0.5">
                                        {service.description}
                                      </span>
                                    </div>
                                  </Link>
                                );
                              })}
                            </div>

                            {/* View All Services Bottom Bar */}
                            <div className="pt-4 border-t border-slate-100 flex justify-between items-center px-2">
                               <div className="flex items-center gap-3">
                                  <div className="flex -space-x-1.5">
                                    <div className="w-6 h-6 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center z-10 shadow-sm">
                                      <Globe size={10} className="text-blue-600" />
                                    </div>
                                    <div className="w-6 h-6 rounded-full bg-emerald-100 border-2 border-white flex items-center justify-center z-20 shadow-sm">
                                      <Database size={10} className="text-emerald-600" />
                                    </div>
                                    <div className="w-6 h-6 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-[8px] font-bold text-slate-500 z-30 shadow-sm">
                                      +{servicesData.length - 6}
                                    </div>
                                  </div>
                                  <span className="text-[10px] font-medium text-slate-400">
                                    {language === "id" ? "Layanan digital lainnya" : "More digital services"}
                                  </span>
                               </div>
                               <Link
                                  href="/services"
                                  onClick={() => setDropdownOpen(false)}
                                  className="flex items-center gap-1.5 text-[12px] font-bold text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-full transition-all duration-300 group/link"
                               >
                                  {language === "id" ? "Lihat Semua Layanan" : "Explore All Services"}
                                  <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                               </Link>
                            </div>

                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
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
              );
            })}
          </div>

          {/* RIGHT: Controls (Language + CTA) */}
          <div className="flex items-center justify-end shrink-0 w-[180px] gap-6">
            
            {/* Minimal Segmented Language Control */}
            <div className="flex items-center gap-1 bg-slate-100 border border-slate-200/60 rounded-full p-0.5 text-[11px] font-bold font-mono text-slate-500 shadow-inner">
              <button 
                onClick={() => setLanguage("en")}
                className={`px-2.5 py-1 rounded-full transition-all duration-200 ${language === "en" ? "bg-white text-slate-900 shadow-sm" : "hover:text-slate-800 opacity-60 hover:opacity-100"}`}
              >
                EN
              </button>
              <button 
                onClick={() => setLanguage("id")}
                className={`px-2.5 py-1 rounded-full transition-all duration-200 ${language === "id" ? "bg-white text-slate-900 shadow-sm" : "hover:text-slate-800 opacity-60 hover:opacity-100"}`}
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
              <Image 
                src="/zelio.png" 
                alt="Zellio Logo" 
                width={160}
                height={36}
                className="w-auto object-contain drop-shadow-sm"
                style={{ 
                  height: '36px', 
                  transform: 'scale(3.2)', 
                  transformOrigin: 'left center' 
                }}
                priority
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
              className="absolute top-20 left-0 w-full bg-white border-t border-slate-100 overflow-y-auto flex flex-col"
            >
              <div className="px-8 pt-8 pb-32 flex flex-col gap-6">
                {/* Mobile Links */}
                {mainLinks.map((link, i) => {
                  if (link.label === "Services") {
                    return (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 + 0.1 }}
                        className="flex flex-col gap-2"
                      >
                        <button
                          onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                          className="text-2xl font-bold tracking-tight text-slate-900 hover:text-blue-600 transition-colors flex items-center justify-between w-full"
                        >
                          {language === "id" ? link.idKey : link.label}
                          <ChevronDown size={20} className={`text-slate-400 transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""}`} />
                        </button>
                        <AnimatePresence>
                          {mobileServicesOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="flex flex-col gap-3 pl-4 overflow-hidden border-l-2 border-slate-100 mt-2"
                            >
                              {servicesData.map((service) => (
                                <Link
                                  key={service.id}
                                  href={`/services/${getSlug(service.title)}`}
                                  onClick={() => setMobileOpen(false)}
                                  className="text-[15px] font-bold text-slate-600 hover:text-blue-600 py-1"
                                >
                                  {service.title}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  }
                  
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 + 0.1 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className="text-2xl font-bold tracking-tight text-slate-900 hover:text-blue-600 transition-colors block"
                      >
                        {language === "id" ? link.idKey : link.label}
                      </Link>
                    </motion.div>
                  );
                })}

                
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
                  <div className="flex items-center gap-1 bg-slate-100 border border-slate-200/60 rounded-full p-0.5 text-[11px] font-bold font-mono text-slate-500 shadow-inner">
                    <button 
                      onClick={() => setLanguage("en")}
                      className={`px-2.5 py-1 rounded-full transition-all duration-200 ${language === "en" ? "bg-white text-slate-900 shadow-sm" : "hover:text-slate-800 opacity-60 hover:opacity-100"}`}
                    >
                      EN
                    </button>
                    <button 
                      onClick={() => setLanguage("id")}
                      className={`px-2.5 py-1 rounded-full transition-all duration-200 ${language === "id" ? "bg-white text-slate-900 shadow-sm" : "hover:text-slate-800 opacity-60 hover:opacity-100"}`}
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
