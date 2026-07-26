"use client";

import { useState, useRef } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Laptop, Smartphone, LineChart, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

type Project = {
  title: string;
  category: { id: string; en: string };
  type: "Website" | "Internal Dashboard" | "APP";
  desc: { id: string; en: string };
  tags: string[];
  image?: string;
  images?: string[];
  icon: any;
  accent: string;
};

const projects: Project[] = [
  {
    title: "Master Diskon",
    category: { id: "Travel & Perhotelan", en: "Travel & Hospitality" },
    type: "Internal Dashboard",
    desc: { 
      id: "Aplikasi Web Dashboard komprehensif untuk travel agent. Memfasilitasi manajemen pencarian dan pemesanan tiket pesawat, hotel, serta paket wisata dengan sistem harga dinamis.", 
      en: "A comprehensive Web Dashboard App for travel agents. Facilitates the management of flights, hotels, and tour packages with dynamic pricing systems." 
    },
    tags: ["Next.js", "Payment Gateway", "Travel API"],
    image: "/MasterDiskon.png",
    icon: Globe,
    accent: "text-blue-600 bg-blue-50 border-blue-100",
  },
  {
    title: "Raja Cepat",
    category: { id: "Logistik & Pengiriman", en: "Logistics & Delivery" },
    type: "Internal Dashboard",
    desc: { 
      id: "Web Dashboard App untuk operasional ekspedisi pengiriman paket dan kargo. Dilengkapi pelacakan resi real-time (live tracking) dan manajemen armada kurir terpadu yang sangat akurat.", 
      en: "Web Dashboard App for expedition and cargo delivery operations. Features real-time tracking and highly accurate integrated courier fleet management." 
    },
    tags: ["React", "Node.js", "Geolocation API"],
    image: "/Raja Cepat.png",
    icon: Smartphone,
    accent: "text-red-600 bg-red-50 border-red-100",
  },
  {
    title: "Jaja ID",
    category: { id: "Marketplace E-Commerce", en: "E-Commerce Marketplace" },
    type: "Internal Dashboard",
    desc: { 
      id: "Sistem Web Dashboard untuk marketplace digital inovatif. Menawarkan manajemen keranjang pintar, kontrol inventaris mandiri bagi penjual, dan kalkulator ongkir multi-kurir.", 
      en: "Web Dashboard System for an innovative digital marketplace. Offers smart cart management, independent seller inventory control, and multi-courier shipping calculators." 
    },
    tags: ["React", "Express", "MongoDB", "Redux"],
    image: "/jaja id web.png",
    icon: Laptop,
    accent: "text-emerald-600 bg-emerald-50 border-emerald-100",
  },
  {
    title: "Jaja Auto",
    category: { id: "Showroom Otomotif", en: "Automotive Showroom" },
    type: "Internal Dashboard",
    desc: { 
      id: "Web Dashboard interaktif untuk manajemen showroom jual beli kendaraan. Menyediakan fitur inventaris mobil, perbandingan spesifikasi, hingga kalkulator simulasi kredit.", 
      en: "Interactive Web Dashboard for vehicle showroom management. Provides car inventory features, specification comparisons, and loan simulation calculators." 
    },
    tags: ["Vue.js", "TailwindCSS", "PostgreSQL"],
    image: "/jaja auto.png",
    icon: Laptop,
    accent: "text-indigo-600 bg-indigo-50 border-indigo-100",
  },
  {
    title: "Campos Law Firm",
    category: { id: "Portal Hukum Korporat", en: "Corporate Legal Portal" },
    type: "Website",
    desc: { 
      id: "Website representasi profesional untuk firma hukum Campos. Menampilkan profil pengacara, spesialisasi kasus, serta portal penjadwalan konsultasi hukum secara aman bagi klien.", 
      en: "Professional representation website for Campos Law Firm. Features lawyer profiles, case specializations, and a secure legal consultation scheduling portal for clients." 
    },
    tags: ["Next.js", "Framer Motion", "CMS"],
    image: "/Campos Law Firm.png",
    icon: Laptop,
    accent: "text-amber-600 bg-amber-50 border-amber-100",
  },
  {
    title: "Eureka Logistics Portal",
    category: { id: "Pusat Logistik", en: "Logistics Hub" },
    type: "Internal Dashboard",
    desc: { 
      id: "Web Dashboard App khusus klien Eureka Logistics untuk melakukan order pengiriman armada, pengecekan kontainer secara real-time, dan pengelolaan dokumen invoice tagihan.", 
      en: "Dedicated Web Dashboard App for Eureka Logistics clients to order fleet shipments, check containers in real-time, and manage invoice documents." 
    },
    tags: ["React", "Spring Boot", "Redis"],
    image: "/elogs web.jpeg",
    icon: Globe,
    accent: "text-teal-600 bg-teal-50 border-teal-100",
  },
  {
    title: "Eureka Internal ERP",
    category: { id: "Sistem ERP Korporat", en: "Enterprise ERP System" },
    type: "Internal Dashboard",
    desc: { 
      id: "Sistem ERP berskala Enterprise full-module. Mencakup keseluruhan manajemen mulai dari penjualan, monitoring unit, service unit, pembuatan invoice otomatis, hingga integrasi data vendor lengkap dengan ekstraksi harga PO.", 
      en: "Full-module Enterprise-scale ERP System. Covers overall management from sales, unit monitoring, service, automated invoice generation, to vendor data integration." 
    },
    tags: ["Angular", "Chart.js", "Java", "Oracle"],
    image: "/elogs dash.png",
    icon: LineChart,
    accent: "text-cyan-600 bg-cyan-50 border-cyan-100",
  },
  {
    title: "HR Management CMS",
    category: { id: "Sistem Sumber Daya Manusia", en: "Human Resource System" },
    type: "Internal Dashboard",
    desc: { 
      id: "Dashboard internal tersentralisasi khusus tim HR. Mengotomatisasi absensi, pengajuan cuti, perhitungan KPI, generasi slip gaji, hingga memonitor proses rekrutmen kandidat secara efisien.", 
      en: "Centralized internal dashboard dedicated to the HR team. Automates attendance, leave requests, KPI calculations, payroll generation, and candidate recruitment monitoring." 
    },
    tags: ["React", "Laravel REST API", "MySQL"],
    image: "/HR CMS Das.png",
    icon: LineChart,
    accent: "text-rose-600 bg-rose-50 border-rose-100",
  },
  {
    title: "Beego SuperApp",
    category: { id: "Transportasi On-Demand", en: "On-Demand Ride Hailing" },
    type: "APP",
    desc: { 
      id: "Aplikasi mobile multi-layanan on-demand (SuperApp). Mengintegrasikan layanan transportasi ojek online, pesan antar makanan, dan kurir barang dengan antarmuka native yang sangat responsif.", 
      en: "On-demand multi-service mobile app (SuperApp). Integrates ride-hailing, food delivery, and courier services with a highly responsive native interface." 
    },
    tags: ["React Native", "WebSockets", "Go", "Firebase"],
    images: ["/beego1.png", "/beego2.png"],
    icon: Smartphone,
    accent: "text-yellow-600 bg-yellow-50 border-yellow-100",
  },
  {
    title: "Warung BungaPagi Ecosystem",
    category: { id: "Ekosistem Digital F&B", en: "F&B Digital Ecosystem" },
    type: "Website",
    desc: { 
      id: "Rasa Asli Malaysia, Kehangatan Kebersamaan. Rasakan pengalaman kuliner otentik, keuntungan keanggotaan eksklusif, dan kemudahan pemesanan digital.", 
      en: "Authentic Malaysian Taste, Warmth of Togetherness. Experience authentic Malaysian cuisine, exclusive membership benefits, and a seamless digital ordering experience." 
    },
    tags: ["Next.js", "E-Commerce", "Membership API"],
    image: "/warungbungaweb.png",
    icon: Globe,
    accent: "text-fuchsia-600 bg-fuchsia-50 border-fuchsia-100",
  },
  {
    title: "Guruino",
    category: { id: "Platform EdTech", en: "EdTech Platform" },
    type: "Website",
    desc: { 
      id: "Platform pembelajaran daring interaktif untuk menghubungkan siswa dengan mentor ahli. Memiliki fitur ruang kelas virtual, penjadwalan sesi belajar, dan pembayaran aman.", 
      en: "Interactive online learning platform connecting students with expert mentors. Features virtual classrooms, study session scheduling, and secure payments." 
    },
    tags: ["Next.js", "TailwindCSS", "EdTech API"],
    image: "/guruino1.jpeg",
    icon: Globe,
    accent: "text-blue-600 bg-blue-50 border-blue-100",
  },
  {
    title: "NontonKuy",
    category: { id: "Komunitas Streaming", en: "Streaming Community" },
    type: "Website",
    desc: { 
      id: "Platform media hiburan untuk nonton bareng film secara virtual. Dilengkapi fitur live chat interaktif, sinkronisasi pemutaran video, dan ruang nonton publik.", 
      en: "Entertainment media platform for virtual watch parties. Equipped with interactive live chat, video playback synchronization, and public screening rooms." 
    },
    tags: ["React", "WebSockets", "TailwindCSS"],
    image: "/nontonkuy.jpeg",
    icon: Laptop,
    accent: "text-purple-600 bg-purple-50 border-purple-100",
  },
];

const filterCategories = ["All", "Website", "Internal Dashboard", "APP"] as const;
type FilterCategory = typeof filterCategories[number];

const ITEMS_PER_PAGE = 10;

export default function PortfolioPage() {
  const { language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("All");
  const [currentPage, setCurrentPage] = useState(1);
  const gridRef = useRef<HTMLDivElement>(null);

  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.type === activeCategory
  );

  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleFilterChange = (cat: FilterCategory) => {
    setActiveCategory(cat);
    setCurrentPage(1); // Reset to page 1 when filter changes
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    if (gridRef.current) {
      const topOffset = gridRef.current.getBoundingClientRect().top + window.scrollY - 150;
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col justify-between selection:bg-blue-500/30">
      <Navbar />

      <main className="flex-grow pb-24 relative z-10">
        
        {/* Asymmetrical Editorial Hero Section */}
        <section className="w-full bg-[#FAFAFA] pt-40 pb-16 relative overflow-hidden border-b border-slate-200/60">
          <div className="absolute inset-0 bg-[radial-gradient(#E2E8F0_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-50" />
          
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[11px] font-mono font-bold tracking-[0.3em] uppercase text-blue-600 mb-8 block"
            >
              03 — {language === "id" ? "Karya Kami" : "Our Work"}
            </motion.span>
            
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 lg:gap-24">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-6xl sm:text-7xl lg:text-[7rem] font-black tracking-tighter leading-[0.9] text-slate-900 uppercase max-w-4xl"
              >
                {language === "id" ? "Arsip" : "Creative"} <br className="hidden md:block"/> 
                {language === "id" ? "Kreatif." : "Archive."}
              </motion.h1>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:w-[350px] flex-shrink-0 border-l-2 border-blue-500 pl-6 lg:mb-4"
              >
                <p className="text-[15px] font-medium text-slate-600 leading-relaxed">
                  {language === "id" 
                    ? "Koleksi kurasi platform korporat skalabel dan aplikasi performa tinggi yang telah kami luncurkan."
                    : "A curated collection of scalable corporate platforms and high-performance applications we've deployed."}
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <span className="w-10 h-px bg-slate-300 block" />
                  <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-slate-500">
                    {filteredProjects.length} {language === "id" ? "Proyek Terpilih" : "Selected Projects"}
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Sticky Horizontal Filter Navigation */}
        <section className="sticky top-[80px] z-40 bg-white/80 backdrop-blur-xl border-b border-slate-200/60 shadow-sm py-4">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center gap-2 overflow-x-auto [&::-webkit-scrollbar]:hidden">
            {filterCategories.map((cat) => {
              const label = cat === "All" ? (language === "id" ? "Semua" : "All Work") : cat;
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => handleFilterChange(cat)}
                  className={`relative px-6 py-2.5 rounded-full text-[11px] font-black uppercase tracking-[0.15em] whitespace-nowrap transition-colors duration-300 ${
                    isActive ? "text-white" : "text-slate-500 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="portfolioTab"
                      className="absolute inset-0 bg-slate-900 rounded-full -z-10 shadow-md"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{label}</span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Editorial Project Grid */}
        <section ref={gridRef} className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 pt-16 lg:pt-24 min-h-[50vh]">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            <AnimatePresence mode="popLayout">
              {paginatedProjects.map((project, idx) => {
                const Icon = project.icon;
                // Asymmetric logic: 1st project spans 2 columns, then regular grid.
                const isFeatured = idx === 0 || idx === 6; 
                
                return (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -20 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    key={project.title}
                    className={`group flex flex-col gap-6 cursor-pointer ${isFeatured ? "md:col-span-2 lg:col-span-2" : "col-span-1"}`}
                  >
                    {/* Visual Container */}
                    <div className={`relative w-full rounded-[24px] overflow-hidden bg-slate-100 border border-slate-200/60 shadow-sm ${
                      isFeatured ? "aspect-[4/3] md:aspect-[21/9]" : "aspect-[4/3]"
                    }`}>
                      {project.images ? (
                        <div className="flex w-full h-full gap-1 bg-slate-200 p-0.5">
                          {project.images.map((img, i) => (
                            <div key={i} className="relative flex-1 h-full rounded-[20px] overflow-hidden">
                              <Image
                                src={img}
                                alt={`${project.title} Preview ${i + 1}`}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-cover transform scale-100 group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                              />
                            </div>
                          ))}
                        </div>
                      ) : (
                        <Image
                          src={project.image || ""}
                          alt={project.title}
                          fill
                          sizes={isFeatured ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
                          className="object-cover transform scale-100 group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                        />
                      )}
                      
                      {/* Hover Dark Overlay & Button */}
                      <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-colors duration-500 pointer-events-none flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm text-slate-900 flex items-center justify-center opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 shadow-xl">
                          <ArrowUpRight size={24} strokeWidth={2.5} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </div>
                      </div>
                    </div>

                    {/* Metadata & Typography */}
                    <div className="flex flex-col flex-grow">
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`flex items-center gap-1.5 px-2.5 py-1 rounded-[6px] text-[10px] font-bold uppercase tracking-widest border ${project.accent}`}>
                          <Icon size={12} strokeWidth={2.5} />
                          {project.category[language as "id" | "en"]}
                        </span>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400">
                          / {project.type}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="text-sm font-medium text-slate-500 leading-relaxed mb-6 line-clamp-2 md:line-clamp-3">
                        {project.desc[language as "id" | "en"]}
                      </p>

                      {/* Tech Tags */}
                      <div className="flex flex-wrap gap-2 pt-5 border-t border-slate-100 mt-auto">
                        {project.tags.map((tag, j) => (
                          <span
                            key={j}
                            className="text-[10px] font-bold px-2 py-1 rounded-[4px] bg-slate-50 border border-slate-200 text-slate-500"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="w-full flex items-center justify-center gap-2 mt-24 border-t border-slate-200 pt-12">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-200 text-slate-600 hover:bg-slate-50 disabled:opacity-30 disabled:pointer-events-none transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" /></svg>
              </button>
              
              {Array.from({ length: totalPages }).map((_, idx) => {
                const pageNum = idx + 1;
                const isActive = currentPage === pageNum;
                return (
                  <button
                    key={pageNum}
                    onClick={() => handlePageChange(pageNum)}
                    className={`w-10 h-10 flex items-center justify-center rounded-full text-xs font-black transition-colors ${
                      isActive ? "bg-slate-900 text-white shadow-md" : "text-slate-600 hover:bg-slate-100 border border-transparent"
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-200 text-slate-600 hover:bg-slate-50 disabled:opacity-30 disabled:pointer-events-none transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
