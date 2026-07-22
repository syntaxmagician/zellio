"use client";

import { Monitor, BarChart2, Smartphone, Layers, Cloud, Palette, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { TranslationKey } from "@/lib/translations";

const iconMap: Record<string, React.ReactNode> = {
  "Monitor": <Monitor size={48} />,
  "BarChart2": <BarChart2 size={48} />,
  "Smartphone": <Smartphone size={48} />,
  "Layers": <Layers size={48} />,
  "Cloud": <Cloud size={48} />,
  "Palette": <Palette size={48} />,
};

const deliverablesMap = {
  en: {
    1: [
      "Single Page Applications (SPA)",
      "SEO & Core Web Vitals",
      "Custom API & Headless CMS",
      "Responsive & Fluid Layouts",
    ],
    2: [
      "Real-time Analytics Panels",
      "Custom CRM & ERP Solutions",
      "Financial Data Visualization",
      "Role-Based Access Control",
    ],
    3: [
      "Cross-Platform (iOS & Android)",
      "Push Notifications & Deep Linking",
      "Offline Support & Sync",
      "App Store Publishing",
    ],
    4: [
      "Database Architecture Design",
      "Third-Party API Integrations",
      "Legacy System Migration",
      "High-Concurrency Backend APIs",
    ],
    5: [
      "AWS / GCP / Azure Setup",
      "Docker & Kubernetes Deployments",
      "CI/CD Pipeline Automation",
      "Server Monitoring & Security",
    ],
    6: [
      "Figma Interactive Prototypes",
      "Wireframing & User Journey",
      "Design System Creation",
      "Usability Testing & Iteration",
    ],
  },
  id: {
    1: [
      "Aplikasi Halaman Tunggal (SPA)",
      "SEO & Core Web Vitals",
      "API Kustom & Headless CMS",
      "Tata Letak Responsif & Fleksibel",
    ],
    2: [
      "Panel Analitik Waktu Nyata",
      "Solusi CRM & ERP Kustom",
      "Visualisasi Data Keuangan",
      "Kontrol Akses Berbasis Peran",
    ],
    3: [
      "Lintas Platform (iOS & Android)",
      "Notifikasi Push & Deep Linking",
      "Dukungan Luring & Sinkronisasi",
      "Publikasi App Store",
    ],
    4: [
      "Desain Arsitektur Database",
      "Integrasi API Pihak Ketiga",
      "Migrasi Sistem Warisan",
      "API Backend Konkurensi Tinggi",
    ],
    5: [
      "Pengaturan AWS / GCP / Azure",
      "Penerapan Docker & Kubernetes",
      "Otomatisasi Jalur CI/CD",
      "Pemantauan & Keamanan Server",
    ],
    6: [
      "Prototipe Interaktif Figma",
      "Wireframing & Perjalanan Pengguna",
      "Pembuatan Sistem Desain",
      "Pengujian & Iterasi Usabilitas",
    ],
  }
};

export default function ServicePageClient({ service }: { service: any }) {
  const { language, t } = useLanguage();
  
  const getSlug = (title: string) => title.toLowerCase().replace(/[\s&/]+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
  const slug = getSlug(service.title);
  
  const titleKey = `service.${slug}` as TranslationKey;
  const descKey = `service.desc.${slug}` as TranslationKey;
  
  const translatedTitle = t(titleKey);
  const translatedDesc = t(descKey);
  
  const activeDeliverables = (deliverablesMap as any)[language][service.id] as string[];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div 
          className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full opacity-20 blur-[120px] pointer-events-none" 
          style={{ backgroundColor: service.color }} 
        />
        <div 
          className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full opacity-20 blur-[100px] pointer-events-none" 
          style={{ backgroundColor: service.color }} 
        />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            <div 
              className="w-24 h-24 rounded-[2rem] flex items-center justify-center mb-8 shadow-2xl" 
              style={{ backgroundColor: service.bgColor, color: service.color }}
            >
              {iconMap[service.icon]}
            </div>
            
            <span 
              className="px-5 py-2 rounded-full text-sm font-bold tracking-wider mb-6 shadow-sm border border-black/5" 
              style={{ backgroundColor: service.bgColor, color: service.color }}
            >
              {service.category} • {service.level}
            </span>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-8 leading-[1.1] tracking-tight">
              {translatedTitle}
            </h1>
            
            <p className="text-xl text-slate-600 leading-relaxed mb-12 max-w-2xl">
              {translatedDesc}
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link 
                href="/#contact" 
                className="px-8 py-4 bg-slate-900 text-white rounded-full font-bold shadow-[0_10px_30px_rgba(15,23,42,0.2)] hover:shadow-blue-500/30 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
              >
                {t("nav.startProject")} <ArrowRight size={18} />
              </Link>
              <Link 
                href="/portfolio" 
                className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-full font-bold shadow-sm hover:bg-slate-50 active:scale-95 transition-all"
              >
                {t("general.viewPortfolio")}
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-24 bg-slate-50 border-t border-slate-100 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 leading-tight">
                {t("service.whyChoose")} <br/> <span style={{ color: service.color }}>{translatedTitle}</span>?
              </h2>
              <p className="text-slate-600 mb-10 leading-relaxed text-lg">
                {t("service.choose.desc")}
              </p>
              
              <ul className="space-y-5">
                {activeDeliverables.map((feature, i) => (
                  <li key={i} className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                    <CheckCircle2 className="mt-0.5 shrink-0" size={24} style={{ color: service.color }} />
                    <span className="text-slate-800 font-semibold">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white p-10 rounded-[2.5rem] shadow-[0_30px_60px_rgba(0,0,0,0.06)] border border-slate-100 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 opacity-10" style={{ backgroundColor: service.color, filter: "blur(40px)" }} />
               
              <h3 className="text-2xl font-black text-slate-900 mb-8 relative z-10">{t("service.estim.title")}</h3>
              
              <div className="space-y-8 relative z-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100">
                    <span className="text-2xl font-black text-slate-300">1</span>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 mb-1 font-bold uppercase tracking-wider">{t("service.timeline")}</p>
                    <p className="text-2xl font-black text-slate-900">{service.duration}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                   <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100">
                    <span className="text-2xl font-black text-slate-300">2</span>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 mb-1 font-bold uppercase tracking-wider">{t("service.tier")}</p>
                    <p className="text-2xl font-black text-slate-900">{service.level} Grade</p>
                  </div>
                </div>
                
                <div className="pt-8 border-t border-slate-100">
                  <p className="text-slate-600 text-sm font-medium bg-slate-50 p-4 rounded-xl border border-slate-100">
                    {t("service.note")}
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
