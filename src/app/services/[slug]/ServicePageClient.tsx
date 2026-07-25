"use client";

import { Monitor, BarChart2, Smartphone, Layers, Cloud, Palette, ArrowRight, CheckCircle2, Globe, FileText, ShoppingBag, Database, Users, UserCheck, Package, Truck, Cpu, Brain } from "lucide-react";
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
  "Globe": <Globe size={48} />,
  "FileText": <FileText size={48} />,
  "ShoppingBag": <ShoppingBag size={48} />,
  "Database": <Database size={48} />,
  "Users": <Users size={48} />,
  "UserCheck": <UserCheck size={48} />,
  "Package": <Package size={48} />,
  "Truck": <Truck size={48} />,
  "Cpu": <Cpu size={48} />,
  "Brain": <Brain size={48} />,
};

const deliverablesMap = {
  en: {
    1: [
      "Single Page Applications (SPA)",
      "SEO & Core Web Vitals Optimization",
      "Custom API & Headless CMS Integration",
      "Responsive & Fluid Modern Layouts",
    ],
    2: [
      "Visual Brand Identity Design",
      "Responsive Layout for Mobile/Tablet",
      "Lead Capture Form Integrations",
      "Super Fast Loading Performance",
    ],
    3: [
      "Conversion Rate Optimization (CRO)",
      "A/B Testing Ready Architecture",
      "Google & Meta Ads Tracker Integration",
      "Optimized Copywriting Integration",
    ],
    4: [
      "Payment Gateway Integration",
      "Automated Shipping & Courier API",
      "Stock & Inventory Synchronizer",
      "Secure Cart & Checkout Security",
    ],
    5: [
      "Interactive Dashboard Interfaces",
      "Secure Database Architecture Design",
      "RESTful API & GraphQL Development",
      "High-Performance Frontend Systems",
    ],
    6: [
      "Real-time Data Visualization Charts",
      "Business Intelligence Reporting",
      "Role-Based Access Control (RBAC)",
      "Seamless PDF/Excel Data Export",
    ],
    7: [
      "Cross-Platform iOS & Android builds",
      "Push Notification & Deep Linking",
      "Offline Database & Cache Syncing",
      "App Store & Google Play Publishing",
    ],
    8: [
      "Integrated Ledger & General Finance",
      "Supply Chain & Procurement Management",
      "Resource & Asset Allocation System",
      "Strict Auditing & Logs Traceability",
    ],
    9: [
      "Visual Leads & Deal Pipelines",
      "Detailed Customer Profiling Matrix",
      "Automated Follow-up E-mail workflows",
      "Automated Sales Performance Reporting",
    ],
    10: [
      "Shift Scheduling & Time Tracking",
      "Automated Leave & Reimbursement Request",
      "Flexible Payroll & Tax Calculation Engine",
      "Dynamic Payslip & Report Generator",
    ],
    11: [
      "Inbound & Outbound Barcode Scanning",
      "Low Stock Level Alerts & Auto-order",
      "Multi-Location & Warehouse Sync",
      "Supplier & Vendor Order Tracking",
    ],
    12: [
      "Multi-Tenant Database Separation",
      "Stripe/Payment Subscription Engine",
      "Tenant API Billing & Usage Analytics",
      "Clean Client-Facing Branding Dashboard",
    ],
    13: [
      "Stunning Figma UI Mockups",
      "Interactive UX Journey Prototypes",
      "User Persona & Usability Reports",
      "Scalable Global Design System tokens",
    ],
    14: [
      "AI Chatbots & Intelligent Search",
      "Predictive Machine Learning Models",
      "Automated Business Data Pipelines",
      "Third-Party GenAI API Integrations",
    ],
    15: [
      "AWS / GCP Multi-zone Infrastructure",
      "Docker & Kubernetes Microservices",
      "Automated CI/CD Deployment pipelines",
      "Real-time Server Monitoring & Alerting",
    ]
  },
  id: {
    1: [
      "Aplikasi Halaman Tunggal (SPA)",
      "Optimasi SEO & Core Web Vitals",
      "Integrasi API Kustom & Headless CMS",
      "Tata Letak Modern yang Responsif",
    ],
    2: [
      "Desain Identitas Visual Brand",
      "Layout Responsif untuk Ponsel/Tablet",
      "Integrasi Formulir Penjaringan Lead",
      "Performa Pemuatan Sangat Cepat",
    ],
    3: [
      "Optimasi Tingkat Konversi (CRO)",
      "Arsitektur Siap Pengujian A/B",
      "Integrasi Pelacak Iklan Google & Meta",
      "Integrasi Copywriting yang Dioptimalkan",
    ],
    4: [
      "Integrasi Gerbang Pembayaran",
      "API Tarif Pengiriman & Kurir Otomatis",
      "Sinkronisasi Stok & Inventaris",
      "Keamanan Keranjang & Checkout",
    ],
    5: [
      "Antarmuka Dasbor Interaktif",
      "Desain Arsitektur Database Aman",
      "Pengembangan RESTful API & GraphQL",
      "Sistem Frontend Berkinerja Tinggi",
    ],
    6: [
      "Grafik Visualisasi Data Real-time",
      "Pelaporan Analitik Bisnis (BI)",
      "Kontrol Akses Berbasis Peran (RBAC)",
      "Ekspor Data PDF/Excel yang Mulus",
    ],
    7: [
      "Build iOS & Android Lintas Platform",
      "Notifikasi Push & Deep Linking",
      "Sinkronisasi Database Luring & Cache",
      "Publikasi di App Store & Google Play",
    ],
    8: [
      "Buku Besar & Keuangan Terintegrasi",
      "Manajemen Rantai Pasokan & Pengadaan",
      "Sistem Alokasi Sumber Daya & Aset",
      "Ketertelusuran Log Audit yang Ketat",
    ],
    9: [
      "Visual Prospek & Saluran Penjualan",
      "Matriks Profil Pelanggan Detail",
      "Alur Kerja Email Tindak Lanjut Otomatis",
      "Laporan Kinerja Penjualan Otomatis",
    ],
    10: [
      "Penjadwalan Shift & Pelacakan Waktu",
      "Pengajuan Cuti & Reimbursement Otomatis",
      "Mesin Perhitungan Gaji & Pajak Fleksibel",
      "Generator Slip Gaji & Laporan Dinamis",
    ],
    11: [
      "Pemindaian Barcode Masuk & Keluar",
      "Notifikasi Batas Stok & Pesan Otomatis",
      "Sinkronisasi Multi-Lokasi & Gudang",
      "Pelacakan Pesanan Pemasok & Vendor",
    ],
    12: [
      "Pemisahan Database Multi-Tenant",
      "Mesin Langganan Stripe/Pembayaran",
      "Tagihan API Penyewa & Analitik Penggunaan",
      "Dasbor Branding Sisi Klien yang Bersih",
    ],
    13: [
      "Maket UI Figma yang Memukau",
      "Prototipe Perjalanan UX Interaktif",
      "Laporan Persona Pengguna & Usabilitas",
      "Token Sistem Desain Global yang Skalabel",
    ],
    14: [
      "Chatbot AI & Pencarian Cerdas",
      "Model Pembelajaran Mesin Prediktif",
      "Alur Data Analisis Bisnis Otomatis",
      "Integrasi API GenAI Pihak Ketiga",
    ],
    15: [
      "Infrastruktur Multi-zona AWS / GCP",
      "Mikrolayanan Docker & Kubernetes",
      "Jalur Penyebaran CI/CD Otomatis",
      "Pemantauan & Peringatan Server Real-time",
    ]
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
  
  const whatsappTemplate = `Saya ingin kosultasi mengenai project yang saya sedang kembangkan, khususnya untuk layanan: ${translatedTitle}`;
  const whatsappUrl = `https://wa.me/6285158945811?text=${encodeURIComponent(whatsappTemplate)}`;

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
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-slate-900 text-white rounded-full font-bold shadow-[0_10px_30px_rgba(15,23,42,0.2)] hover:shadow-blue-500/30 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
              >
                {t("nav.startProject")} <ArrowRight size={18} />
              </a>
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
