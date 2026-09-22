"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ArrowRight,
  ChevronDown,
  ChevronRight,
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
  Sparkles,
  Code2,
  ShieldCheck
} from "lucide-react";
import Link from "next/link";
import { localizedPath } from "@/lib/seo";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { servicesData } from "@/lib/data";
import { translations } from "@/lib/translations";

// The premium minimal links
const mainLinks = [
  { label: "Home", href: "/", idKey: "Beranda" },
  { label: "Services", href: "/#services", idKey: "Layanan" },
  { label: "Portfolio", href: "/portfolio", idKey: "Portofolio" },
  // { label: "Team", href: "/team", idKey: "Tim" },
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

const serviceSubtitles: Record<string, { en: string; id: string }> = {
  "custom-website-development": {
    en: "High-performance bespoke web applications",
    id: "Website kustom modern & performa tinggi",
  },
  "company-profile-website": {
    en: "Credible & elegant corporate digital identity",
    id: "Profil digital kredibel & representatif",
  },
  "e-commerce-development": {
    en: "Scalable online stores & payment gateways",
    id: "Toko online otomatis & payment gateway",
  },
  "mobile-app-development": {
    en: "Native iOS & Android apps with seamless UX",
    id: "Aplikasi mobile iOS & Android responsif",
  },
  "erp-system-development": {
    en: "Unified operations, logistics & inventory hub",
    id: "Integrasi operasional, logistik & inventaris",
  },
  "crm-system-development": {
    en: "Pipeline tracking & sales automation tools",
    id: "Otomasi prospek & manajemen sales pipeline",
  },
  "hris-payroll-system": {
    en: "Workforce attendance, leaves & automated payroll",
    id: "Manajemen absensi, cuti & payroll otomatis",
  },
  "saas-platform-development": {
    en: "Multi-tenant architecture & subscription billing",
    id: "Arsitektur multi-tenant & billing subscription",
  },
};

const getSlug = (title: string) =>
  title.toLowerCase().replace(/[\s&/]+/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "");

export default function Navbar() {
  const pathname = usePathname();
  const { language, setLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Compute theme based on page and scroll status
  const isHomepage = pathname === "/" || pathname === "/id" || pathname === "/id/" || pathname === "/en" || pathname === "/en/";
  const isDarkTheme = !scrolled && isHomepage;

  // Split services cleanly into 2 logical categories
  const webAndMobileServices = servicesData.slice(0, 4); // Custom Web, Compro, E-Com, Mobile App
  const enterpriseAndSaaSServices = servicesData.slice(4, 8); // ERP, CRM, HRIS, SaaS

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
    return () => {
      document.body.style.overflow = "";
    };
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
            ? "bg-white/80 backdrop-blur-md border-b border-slate-200/60 py-4 shadow-sm"
            : "bg-transparent border-b border-transparent py-7"
        }`}
      >
        <div className="max-w-none px-6 lg:px-12 w-full flex items-center justify-between">
          {/* LEFT: Logo */}
          <div className="relative w-[180px] lg:w-[240px] h-10 shrink-0">
            <Link href={localizedPath("/", language)} className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center">
              <Image
                src="/zellio3.png"
                alt="Zellio Logo"
                width={240}
                height={44}
                className="w-auto object-contain drop-shadow-sm transition-all duration-300"
                style={{
                  height: "44px",
                  transform: "scale(3.2)",
                  transformOrigin: "left center",
                  filter: isDarkTheme ? "brightness(0) invert(1)" : "brightness(0)",
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
                    onMouseLeave={() => setDropdownOpen(false)}
                    className="group relative flex flex-col justify-center h-full cursor-pointer py-1"
                  >
                    <div className="flex items-center gap-1.5">
                      <span
                        className={`text-[13px] font-semibold tracking-wider transition-colors duration-200 uppercase ${
                          isDarkTheme
                            ? "text-slate-300 group-hover:text-white"
                            : dropdownOpen
                            ? "text-slate-900"
                            : "text-slate-600 group-hover:text-slate-900"
                        }`}
                      >
                        {language === "id" ? link.idKey : link.label}
                      </span>
                      <ChevronDown
                        size={14}
                        className={`transition-all duration-300 ${
                          isDarkTheme
                            ? "text-slate-400 group-hover:text-white"
                            : dropdownOpen
                            ? "rotate-180 text-slate-900"
                            : "text-slate-400 group-hover:text-slate-900"
                        }`}
                      />
                    </div>

                    {/* Subtle Hover Underline Animation */}
                    <span
                      className={`absolute bottom-0 left-0 w-full h-[1.5px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out ${
                        isDarkTheme ? "bg-white" : "bg-slate-900"
                      }`}
                    />

                    {/* Modern Clean Mega Menu with Framer Motion */}
                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 12, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.98 }}
                          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                          className="absolute top-[28px] left-1/2 -translate-x-1/2 pt-4 z-[110] pointer-events-auto"
                        >
                          <div className="w-[880px] bg-white/95 backdrop-blur-2xl rounded-2xl shadow-[0_25px_60px_-15px_rgba(15,23,42,0.12),0_0_0_1px_rgba(15,23,42,0.06)] p-6 flex flex-col gap-5 border border-slate-200/80">
                            
                            {/* Main Content Area: 2 Columns of Services + 1 Featured Architecture Panel */}
                            <div className="grid grid-cols-12 gap-6">
                              
                              {/* Left & Middle: Categorized Services (8 Columns span) */}
                              <div className="col-span-8 grid grid-cols-2 gap-6">
                                
                                {/* Group 1: Web & Mobile */}
                                <div className="flex flex-col gap-1.5">
                                  <div className="px-2.5 pb-2 text-[10px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-1.5 border-b border-slate-100 mb-1">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                    {language === "id" ? "Web & Aplikasi Mobile" : "Web & Mobile Platforms"}
                                  </div>

                                  {webAndMobileServices.map((service) => {
                                    const slug = getSlug(service.title);
                                    const Icon = iconMap[service.icon];
                                    const title = translations[language]?.service?.[slug] || service.title;
                                    const subtitle = serviceSubtitles[slug]?.[language] || service.description;

                                    return (
                                      <Link
                                        key={service.id}
                                        href={localizedPath(`/services/${slug}`, language)}
                                        onClick={() => setDropdownOpen(false)}
                                        className="group/item flex items-start gap-3 p-2.5 rounded-xl transition-all duration-150 hover:bg-slate-50 border border-transparent hover:border-slate-100/80 text-left"
                                      >
                                        <div className="w-8 h-8 rounded-lg bg-slate-100 border border-slate-200/70 flex items-center justify-center shrink-0 text-slate-700 group-hover/item:bg-slate-900 group-hover/item:text-white group-hover/item:border-slate-900 transition-colors duration-200 mt-0.5">
                                          {Icon && <Icon size={16} strokeWidth={2.2} />}
                                        </div>
                                        <div className="flex flex-col flex-1 min-w-0">
                                          <div className="flex items-center justify-between gap-1">
                                            <span className="text-[13px] font-semibold text-slate-900 group-hover/item:text-blue-600 transition-colors truncate">
                                              {title}
                                            </span>
                                            <ChevronRight
                                              size={13}
                                              className="text-slate-300 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 group-hover/item:text-blue-600 transition-all duration-200 shrink-0"
                                            />
                                          </div>
                                          <span className="text-[11px] text-slate-500 font-normal leading-tight mt-0.5 line-clamp-1">
                                            {subtitle}
                                          </span>
                                        </div>
                                      </Link>
                                    );
                                  })}
                                </div>

                                {/* Group 2: Enterprise & SaaS */}
                                <div className="flex flex-col gap-1.5">
                                  <div className="px-2.5 pb-2 text-[10px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-1.5 border-b border-slate-100 mb-1">
                                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700" />
                                    {language === "id" ? "Sistem Enterprise & SaaS" : "Enterprise Systems & SaaS"}
                                  </div>

                                  {enterpriseAndSaaSServices.map((service) => {
                                    const slug = getSlug(service.title);
                                    const Icon = iconMap[service.icon];
                                    const title = translations[language]?.service?.[slug] || service.title;
                                    const subtitle = serviceSubtitles[slug]?.[language] || service.description;

                                    return (
                                      <Link
                                        key={service.id}
                                        href={localizedPath(`/services/${slug}`, language)}
                                        onClick={() => setDropdownOpen(false)}
                                        className="group/item flex items-start gap-3 p-2.5 rounded-xl transition-all duration-150 hover:bg-slate-50 border border-transparent hover:border-slate-100/80 text-left"
                                      >
                                        <div className="w-8 h-8 rounded-lg bg-slate-100 border border-slate-200/70 flex items-center justify-center shrink-0 text-slate-700 group-hover/item:bg-slate-900 group-hover/item:text-white group-hover/item:border-slate-900 transition-colors duration-200 mt-0.5">
                                          {Icon && <Icon size={16} strokeWidth={2.2} />}
                                        </div>
                                        <div className="flex flex-col flex-1 min-w-0">
                                          <div className="flex items-center justify-between gap-1">
                                            <span className="text-[13px] font-semibold text-slate-900 group-hover/item:text-blue-600 transition-colors truncate">
                                              {title}
                                            </span>
                                            <ChevronRight
                                              size={13}
                                              className="text-slate-300 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 group-hover/item:text-blue-600 transition-all duration-200 shrink-0"
                                            />
                                          </div>
                                          <span className="text-[11px] text-slate-500 font-normal leading-tight mt-0.5 line-clamp-1">
                                            {subtitle}
                                          </span>
                                        </div>
                                      </Link>
                                    );
                                  })}
                                </div>

                              </div>

                              {/* Right: Featured Engineering & Consultation Side Panel (4 Columns span) */}
                              <div className="col-span-4 bg-slate-900 rounded-xl p-5 flex flex-col justify-between relative overflow-hidden border border-slate-800 text-left shadow-sm">
                                <div>
                                  {/* Pill Badge */}
                                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 text-[10px] font-mono font-medium text-slate-200 tracking-wider">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                    {language === "id" ? "ARSITEKTUR KUSTOM" : "BESPOKE ENGINEERING"}
                                  </div>

                                  <h4 className="text-[14px] font-bold text-white tracking-tight mt-3 leading-snug">
                                    {language === "id"
                                      ? "Punya Kebutuhan Sistem Khusus?"
                                      : "Need Custom Architecture?"}
                                  </h4>

                                  <p className="text-[11px] text-slate-300 leading-relaxed font-normal mt-2">
                                    {language === "id"
                                      ? "Diskusikan arsitektur sistem, pemilihan tech stack, serta estimasi timeline langsung dengan tech lead kami."
                                      : "Discuss system design, tech stack selection, and delivery timeline directly with our tech leads."}
                                  </p>

                                  {/* Tech tags */}
                                  <div className="flex flex-wrap gap-1.5 mt-3.5">
                                    {["Next.js", "React Native", "Node.js", "PostgreSQL", "AWS"].map((tag) => (
                                      <span
                                        key={tag}
                                        className="text-[10px] font-medium font-mono px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/10"
                                      >
                                        {tag}
                                      </span>
                                    ))}
                                  </div>
                                </div>

                                {/* Direct CTA Button */}
                                <div className="pt-4 border-t border-white/10 mt-4">
                                  <a
                                    href="https://wa.me/6285158945811?text=Saya%20ingin%20konsultasi%20mengenai%20kebutuhan%20arsitektur%20sistem%20digital"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-between w-full px-3.5 py-2 rounded-lg bg-white text-slate-900 text-[11px] font-bold hover:bg-slate-100 transition-all duration-200 group/btn"
                                  >
                                    <span>{language === "id" ? "Konsultasi Tech Lead" : "Talk with Tech Lead"}</span>
                                    <ArrowRight size={13} className="group-hover/btn:translate-x-0.5 transition-transform" />
                                  </a>
                                </div>
                              </div>

                            </div>

                            {/* Dropdown Bottom Bar */}
                            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs px-1">
                              <div className="flex items-center gap-2 text-slate-400 text-[11px]">
                                <ShieldCheck size={14} className="text-emerald-500 shrink-0" />
                                <span>
                                  {language === "id"
                                    ? "Seluruh sistem mencakup garansi SLA, arsitektur modular, & source code penuh."
                                    : "All systems include SLA warranty, clean modular codebase, & full source ownership."}
                                </span>
                              </div>
                              <Link
                                href={localizedPath("/services", language)}
                                onClick={() => setDropdownOpen(false)}
                                className="flex items-center gap-1.5 text-[11px] font-bold text-slate-800 hover:text-blue-600 transition-colors group/view"
                              >
                                <span>
                                  {language === "id" ? "Lihat Semua 8 Layanan" : "View All 8 Services"}
                                </span>
                                <ArrowRight size={13} className="group-hover/view:translate-x-1 transition-transform" />
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
                  href={localizedPath(link.href, language)}
                  className="group relative flex items-center h-full cursor-pointer py-1"
                >
                  <span
                    className={`text-[13px] font-semibold tracking-wider transition-colors duration-200 uppercase ${
                      isDarkTheme ? "text-slate-300 group-hover:text-white" : "text-slate-600 group-hover:text-slate-900"
                    }`}
                  >
                    {language === "id" ? link.idKey : link.label}
                  </span>

                  {/* Subtle Hover Underline Animation */}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-[1.5px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out ${
                      isDarkTheme ? "bg-white" : "bg-slate-900"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* RIGHT: Controls (Language + CTA) */}
          <div className="flex items-center justify-end shrink-0 w-[180px] gap-6">
            {/* Minimal Segmented Language Control */}
            <div
              className={`flex items-center gap-1 border rounded-full p-0.5 text-[11px] font-bold font-mono transition-all duration-300 ${
                isDarkTheme
                  ? "bg-white/5 border-white/10 text-slate-400"
                  : "bg-slate-100 border-slate-200/60 text-slate-500 shadow-inner"
              }`}
            >
              <button
                onClick={() => setLanguage("en")}
                aria-label="Switch to English"
                aria-pressed={language === "en"}
                className={`px-2.5 py-1 rounded-full transition-all duration-200 ${
                  language === "en"
                    ? isDarkTheme
                      ? "bg-white/15 text-white shadow-sm"
                      : "bg-white text-slate-900 shadow-sm"
                    : isDarkTheme
                    ? "hover:text-white opacity-60 hover:opacity-100"
                    : "hover:text-slate-800 opacity-60 hover:opacity-100"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage("id")}
                aria-label="Ganti ke Bahasa Indonesia"
                aria-pressed={language === "id"}
                className={`px-2.5 py-1 rounded-full transition-all duration-200 ${
                  language === "id"
                    ? isDarkTheme
                      ? "bg-white/15 text-white shadow-sm"
                      : "bg-white text-slate-900 shadow-sm"
                    : isDarkTheme
                    ? "hover:text-white opacity-60 hover:opacity-100"
                    : "hover:text-slate-800 opacity-60 hover:opacity-100"
                }`}
              >
                ID
              </button>
            </div>

            {/* Premium Minimal CTA */}
            <a
              href="https://wa.me/6285158945811?text=Saya%20ingin%20kosultasi%20mengenai%20project%20yang%20saya%20sedang%20kembangkan%2C%20"
              target="_blank"
              rel="noopener noreferrer"
              className={`group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[12px] font-semibold tracking-wide transition-all duration-300 hover:scale-[1.02] shadow-sm hover:shadow-md cursor-pointer whitespace-nowrap ${
                isDarkTheme ? "bg-white text-slate-900 hover:bg-slate-100" : "bg-slate-900 text-white hover:bg-slate-800"
              }`}
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
            <Link href={localizedPath("/", language)} className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center">
              <Image
                src="/zellio3.png"
                alt="Zellio Logo"
                width={160}
                height={36}
                className="w-auto object-contain drop-shadow-sm transition-all duration-300"
                style={{
                  height: "36px",
                  transform: "scale(3.2)",
                  transformOrigin: "left center",
                  filter: isDarkTheme && !mobileOpen ? "brightness(0) invert(1)" : "brightness(0)",
                }}
                priority
              />
            </Link>
          </div>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`p-2 z-20 focus:outline-none transition-colors duration-300 ${
              isDarkTheme && !mobileOpen ? "text-white" : "text-slate-800"
            }`}
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
              <div className="px-6 pt-6 pb-32 flex flex-col gap-5">
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
                          className="text-2xl font-bold tracking-tight text-slate-900 hover:text-blue-600 transition-colors flex items-center justify-between w-full py-1"
                        >
                          {language === "id" ? link.idKey : link.label}
                          <ChevronDown
                            size={20}
                            className={`text-slate-400 transition-transform duration-300 ${
                              mobileServicesOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {mobileServicesOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="flex flex-col gap-2 pl-3 overflow-hidden border-l-2 border-slate-200 mt-2"
                            >
                              {servicesData.map((service) => {
                                const slug = getSlug(service.title);
                                const Icon = iconMap[service.icon];
                                const title = translations[language]?.service?.[slug] || service.title;
                                const subtitle = serviceSubtitles[slug]?.[language] || service.description;

                                return (
                                  <Link
                                    key={service.id}
                                    href={localizedPath(`/services/${slug}`, language)}
                                    onClick={() => setMobileOpen(false)}
                                    className="flex items-center gap-3 p-2 rounded-xl hover:bg-slate-50 transition-colors"
                                  >
                                    <div className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center shrink-0 text-slate-700">
                                      {Icon && <Icon size={14} />}
                                    </div>
                                    <div className="flex flex-col min-w-0">
                                      <span className="text-[14px] font-semibold text-slate-800 leading-tight">
                                        {title}
                                      </span>
                                      <span className="text-[11px] text-slate-400 leading-tight truncate mt-0.5">
                                        {subtitle}
                                      </span>
                                    </div>
                                  </Link>
                                );
                              })}

                              <Link
                                href={localizedPath("/services", language)}
                                onClick={() => setMobileOpen(false)}
                                className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 pt-2 pl-2"
                              >
                                {language === "id" ? "Lihat Semua Layanan →" : "View All Services →"}
                              </Link>
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
                        href={localizedPath(link.href, language)}
                        onClick={() => setMobileOpen(false)}
                        className="text-2xl font-bold tracking-tight text-slate-900 hover:text-blue-600 transition-colors block py-1"
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
                  className="w-full h-px bg-slate-100 my-3"
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
                      aria-label="Switch to English"
                      aria-pressed={language === "en"}
                      className={`px-2.5 py-1 rounded-full transition-all duration-200 ${
                        language === "en" ? "bg-white text-slate-900 shadow-sm" : "hover:text-slate-800 opacity-60 hover:opacity-100"
                      }`}
                    >
                      EN
                    </button>
                    <button
                      onClick={() => setLanguage("id")}
                      aria-label="Ganti ke Bahasa Indonesia"
                      aria-pressed={language === "id"}
                      className={`px-2.5 py-1 rounded-full transition-all duration-200 ${
                        language === "id" ? "bg-white text-slate-900 shadow-sm" : "hover:text-slate-800 opacity-60 hover:opacity-100"
                      }`}
                    >
                      ID
                    </button>
                  </div>

                  <a
                    href="https://wa.me/6285158945811?text=Saya%20ingin%20kosultasi%20mengenai%20project%20yang%20saya%20sedang%20kembangkan%2C%20"
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

