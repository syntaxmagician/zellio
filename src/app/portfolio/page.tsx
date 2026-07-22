"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Laptop, Smartphone, LineChart, Globe } from "lucide-react";

type Project = {
  title: string;
  category: string;
  type: "Website" | "Internal Dashboard" | "APP";
  desc: string;
  tags: string[];
  image?: string;
  images?: string[];
  icon: any;
  accent: string;
};

const projects: Project[] = [
  {
    title: "Master Diskon",
    category: "Travel & Hospitality",
    type: "Website",
    desc: "Platform travel agent komprehensif yang memfasilitasi pencarian dan pemesanan tiket pesawat, hotel, serta paket wisata domestik maupun internasional dengan sistem harga dinamis.",
    tags: ["Next.js", "Payment Gateway", "Travel API"],
    image: "/MasterDiskon.png",
    icon: Globe,
    accent: "text-blue-600 bg-blue-50 border-blue-100",
  },
  {
    title: "Raja Cepat",
    category: "Logistics & Delivery",
    type: "APP",
    desc: "Sistem ekspedisi pengiriman paket dan kargo super cepat. Dilengkapi pelacakan resi real-time (live tracking) dan manajemen armada kurir terpadu yang sangat akurat.",
    tags: ["React Native", "Node.js", "Geolocation API"],
    image: "/Raja Cepat.png",
    icon: Smartphone,
    accent: "text-red-600 bg-red-50 border-red-100",
  },
  {
    title: "Jaja ID",
    category: "E-Commerce Marketplace",
    type: "Website",
    desc: "Marketplace digital inovatif yang menghubungkan ribuan penjual dan pembeli. Menawarkan fitur keranjang pintar, manajemen inventaris mandiri, dan kalkulator ongkir multi-kurir.",
    tags: ["React", "Express", "MongoDB", "Redux"],
    image: "/jaja id web.png",
    icon: Laptop,
    accent: "text-emerald-600 bg-emerald-50 border-emerald-100",
  },
  {
    title: "Jaja Auto",
    category: "Automotive Showroom",
    type: "Website",
    desc: "Portal jual beli kendaraan dan showroom digital interaktif. Menyediakan fitur pencarian mobil pintar, perbandingan spesifikasi, hingga simulasi kalkulator kredit kendaraan.",
    tags: ["Vue.js", "TailwindCSS", "PostgreSQL"],
    image: "/jaja auto.png",
    icon: Laptop,
    accent: "text-indigo-600 bg-indigo-50 border-indigo-100",
  },
  {
    title: "Campos Law Firm",
    category: "Corporate Legal Portal",
    type: "Website",
    desc: "Website representasi hukum profesional untuk firma hukum Campos. Menampilkan profil pengacara, spesialisasi kasus, serta fitur penjadwalan konsultasi hukum secara aman.",
    tags: ["Next.js", "Framer Motion", "CMS"],
    image: "/Campos Law Firm.png",
    icon: Laptop,
    accent: "text-amber-600 bg-amber-50 border-amber-100",
  },
  {
    title: "Eureka Logistics Portal",
    category: "Logistics Hub",
    type: "Website",
    desc: "Portal web eksternal khusus klien Eureka Logistics untuk melakukan order pengiriman armada laut/darat, pengecekan kontainer, dan pengelolaan dokumen invoice tagihan.",
    tags: ["React", "Spring Boot", "Redis"],
    image: "/elogs web.jpeg",
    icon: Globe,
    accent: "text-teal-600 bg-teal-50 border-teal-100",
  },
  {
    title: "Eureka Internal ERP",
    category: "Enterprise ERP System",
    type: "Internal Dashboard",
    desc: "Dashboard internal berskala Enterprise (ERP) untuk memantau rute pengiriman, alokasi driver, manajemen gudang, hingga analitik finansial dan performa bisnis harian.",
    tags: ["Angular", "Chart.js", "Java", "Oracle"],
    image: "/elogs dash.png",
    icon: LineChart,
    accent: "text-cyan-600 bg-cyan-50 border-cyan-100",
  },
  {
    title: "HR Management CMS",
    category: "Human Resource System",
    type: "Internal Dashboard",
    desc: "Sistem manajemen HR tersentralisasi. Mengotomatisasi absensi, pengajuan cuti, perhitungan KPI, generasi slip gaji, hingga memonitor rekrutmen kandidat secara efisien.",
    tags: ["React", "Laravel REST API", "MySQL"],
    image: "/HR CMS Das.png",
    icon: LineChart,
    accent: "text-rose-600 bg-rose-50 border-rose-100",
  },
  {
    title: "Beego SuperApp",
    category: "On-Demand Ride Hailing",
    type: "APP",
    desc: "Aplikasi multi-layanan on-demand tingkat lanjut. Mengintegrasikan layanan transportasi ojek online, pesan antar makanan, dan kurir barang dengan antarmuka yang sangat responsif.",
    tags: ["React Native", "WebSockets", "Go", "Firebase"],
    images: ["/beego1.png", "/beego2.png"],
    icon: Smartphone,
    accent: "text-yellow-600 bg-yellow-50 border-yellow-100",
  },
];

const filterCategories = ["All", "Website", "Internal Dashboard", "APP"] as const;
type FilterCategory = typeof filterCategories[number];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("All");

  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.type === activeCategory
  );

  return (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col justify-between selection:bg-blue-500/30">
      <Navbar />

      {/* Floating Sidebar Filter - Tilted (Rotate 90deg) & Animated (Large Screens Only) */}
      <div className="hidden lg:flex fixed right-0 top-1/2 -translate-y-1/2 z-50 flex-col gap-10 bg-white/80 backdrop-blur-md shadow-2xl border-l border-y border-slate-200/80 rounded-l-[24px] py-12 px-5">
        {filterCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`relative py-4 px-1 rounded-md transition-all duration-300 [writing-mode:vertical-lr] rotate-180 select-none text-[11px] font-black uppercase tracking-[0.25em] ${
              activeCategory === cat
                ? "text-blue-600 scale-110 font-black"
                : "text-slate-400 hover:text-slate-800 hover:-translate-x-0.5"
            }`}
          >
            {cat}
            {activeCategory === cat && (
              <motion.div
                layoutId="activeIndicator"
                className="absolute right-0 top-0 bottom-0 w-[3px] bg-blue-600 rounded-l"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      <main className="flex-grow pt-32 pb-24 relative z-10">
        
        {/* Subtle background grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#E2E8F0_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-50" />

        {/* Header Section */}
        <section className="w-full max-w-7xl mx-auto px-[5vw] text-center mb-16 md:mb-20 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1.5 rounded-full bg-white text-[#2563EB] text-[11px] sm:text-xs font-bold uppercase tracking-widest mb-4 border border-blue-100 shadow-sm"
          >
            Our Work
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0F172A] tracking-tight leading-tight mb-4"
          >
            Featured Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm sm:text-base text-[#64748B] max-w-xl mx-auto leading-relaxed font-medium px-4 mt-3"
          >
            A curated collection of scalable corporate platforms and high-performance applications we've deployed.
          </motion.p>

          {/* Standard Pill Filters (Mobile/Tablet Only) */}
          <div className="flex lg:hidden justify-center flex-wrap gap-2.5 mt-8 px-4">
            {filterCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider border transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/20"
                    : "bg-white text-slate-500 border-slate-200 hover:text-slate-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* 3-Column Compact Grid with Smooth Layout Transitions */}
        <section className="w-full max-w-7xl mx-auto px-4 lg:px-8 xl:px-0">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => {
                const Icon = project.icon;
                return (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    key={project.title}
                    className="bg-white border border-slate-200/80 rounded-[24px] overflow-hidden shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_40px_-15px_rgba(37,99,235,0.1)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col group"
                  >
                    {/* Visual Mockup (16:9 Aspect Ratio) */}
                    <div className="relative overflow-hidden aspect-video bg-slate-100 border-b border-slate-100">
                      {project.images ? (
                        <div className="flex w-full h-full gap-0.5 bg-slate-200">
                          {project.images.map((img, idx) => (
                            <div key={idx} className="relative flex-1 h-full overflow-hidden">
                              <img
                                src={img}
                                alt={`${project.title} Preview ${idx + 1}`}
                                className="w-full h-full object-cover transform scale-100 group-hover:scale-[1.05] transition-transform duration-700 ease-out"
                              />
                            </div>
                          ))}
                        </div>
                      ) : (
                        <img
                          src={project.image || ""}
                          alt={project.title}
                          className="w-full h-full object-cover transform scale-100 group-hover:scale-[1.05] transition-transform duration-700 ease-out"
                        />
                      )}
                      <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
                    </div>

                    {/* Content Container */}
                    <div className="p-6 md:p-8 flex flex-col flex-grow">
                      
                      {/* Category */}
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`flex items-center gap-1.5 px-2.5 py-1 rounded-[6px] text-[10px] font-bold uppercase tracking-wider border ${project.accent}`}>
                          <Icon size={12} strokeWidth={2.5} />
                          {project.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg md:text-xl font-bold text-[#0F172A] mb-2.5 tracking-tight flex items-center justify-between group-hover:text-blue-600 transition-colors cursor-pointer">
                        {project.title}
                        <ArrowUpRight size={16} className="text-slate-300 group-hover:text-blue-600 transition-colors" />
                      </h3>

                      {/* Description */}
                      <p className="text-[13px] font-medium text-[#64748B] leading-relaxed mb-6 flex-grow line-clamp-3">
                        {project.desc}
                      </p>

                      {/* Tech Stacks */}
                      <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-100 mt-auto">
                        {project.tags.map((tag, j) => (
                          <span
                            key={j}
                            className="text-[10px] font-bold px-2 py-1 rounded-[6px] bg-slate-50 border border-slate-200 text-[#475569]"
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
        </section>
      </main>

      <Footer />
    </div>
  );
}
