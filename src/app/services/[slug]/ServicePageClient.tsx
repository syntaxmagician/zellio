"use client";

import React, { useState, useEffect, useRef } from "react";
import { 
  Monitor, BarChart2, Smartphone, Layers, Cloud, Palette, 
  ArrowRight, CheckCircle2, Globe, FileText, ShoppingBag, 
  Database, Users, UserCheck, Package, Truck, Cpu, Brain,
  ChevronDown, Server, Code2, Zap, Shield, Activity, 
  ArrowUpRight, Play, LayoutGrid, HelpCircle,
  Network, Terminal
} from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useTransform, useMotionValueEvent, useInView, useMotionValue, useSpring } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { TranslationKey } from "@/lib/translations";

// Map of deliverables by service ID
const deliverablesMap = {
  en: {
    1: ["Single Page Applications (SPA)", "SEO & Core Web Vitals Optimization", "Custom API & Headless CMS Integration", "Responsive & Fluid Modern Layouts"],
    2: ["Visual Brand Identity Design", "Responsive Layout for Mobile/Tablet", "Lead Capture Form Integrations", "Super Fast Loading Performance"],
    3: ["Conversion Rate Optimization (CRO)", "A/B Testing Ready Architecture", "Google & Meta Ads Tracker Integration", "Optimized Copywriting Integration"],
    4: ["Payment Gateway Integration", "Automated Shipping & Courier API", "Stock & Inventory Synchronizer", "Secure Cart & Checkout Security"],
    5: ["Interactive Dashboard Interfaces", "Secure Database Architecture Design", "RESTful API & GraphQL Development", "High-Performance Frontend Systems"],
    6: ["Real-time Data Visualization Charts", "Business Intelligence Reporting", "Role-Based Access Control (RBAC)", "Seamless PDF/Excel Data Export"],
    7: ["Cross-Platform iOS & Android builds", "Push Notification & Deep Linking", "Offline Database & Cache Syncing", "App Store & Google Play Publishing"],
    8: ["Integrated Ledger & General Finance", "Supply Chain & Procurement Management", "Resource & Asset Allocation System", "Strict Auditing & Logs Traceability"],
    9: ["Visual Leads & Deal Pipelines", "Detailed Customer Profiling Matrix", "Automated Follow-up E-mail workflows", "Automated Sales Performance Reporting"],
    10: ["Shift Scheduling & Time Tracking", "Automated Leave & Reimbursement Request", "Flexible Payroll & Tax Calculation Engine", "Dynamic Payslip & Report Generator"],
    11: ["Inbound & Outbound Barcode Scanning", "Low Stock Level Alerts & Auto-order", "Multi-Location & Warehouse Sync", "Supplier & Vendor Order Tracking"],
    12: ["Multi-Tenant Database Separation", "Stripe/Payment Subscription Engine", "Tenant API Billing & Usage Analytics", "Clean Client-Facing Branding Dashboard"],
    13: ["Stunning Figma UI Mockups", "Interactive UX Journey Prototypes", "User Persona & Usability Reports", "Scalable Global Design System tokens"],
    14: ["AI Chatbots & Intelligent Search", "Predictive Machine Learning Models", "Automated Business Data Pipelines", "Third-Party GenAI API Integrations"],
    15: ["AWS / GCP Multi-zone Infrastructure", "Docker & Kubernetes Microservices", "Automated CI/CD Deployment pipelines", "Real-time Server Monitoring & Alerting"]
  },
  id: {
    1: ["Aplikasi Halaman Tunggal (SPA)", "Optimasi SEO & Core Web Vitals", "Integrasi API Kustom & Headless CMS", "Tata Letak Modern yang Responsif"],
    2: ["Desain Identitas Visual Brand", "Layout Responsif untuk Ponsel/Tablet", "Integrasi Formulir Penjaringan Lead", "Performa Pemuatan Sangat Cepat"],
    3: ["Optimasi Tingkat Konversi (CRO)", "Arsitektur Siap Pengujian A/B", "Integrasi Pelacak Iklan Google & Meta", "Integrasi Copywriting yang Dioptimalkan"],
    4: ["Integrasi Gerbang Pembayaran", "API Tarif Pengiriman & Kurir Otomatis", "Sinkronisasi Stok & Inventaris", "Keamanan Keranjang & Checkout"],
    5: ["Antarmuka Dasbor Interaktif", "Desain Arsitektur Database Aman", "Pengembangan RESTful API & GraphQL", "Sistem Frontend Berkinerja Tinggi"],
    6: ["Grafik Visualisasi Data Real-time", "Pelaporan Analitik Bisnis (BI)", "Kontrol Akses Berbasis Peran (RBAC)", "Ekspor Data PDF/Excel yang Mulus"],
    7: ["Build iOS & Android Lintas Platform", "Notifikasi Push & Deep Linking", "Sinkronisasi Database Luring & Cache", "Publikasi di App Store & Google Play"],
    8: ["Buku Besar & Keuangan Terintegrasi", "Manajemen Rantai Pasokan & Pengadaan", "Sistem Alokasi Sumber Daya & Aset", "Ketertelusuran Log Audit yang Ketat"],
    9: ["Visual Prospek & Saluran Penjualan", "Matriks Profil Pelanggan Detail", "Alur Kerja Email Tindak Lanjut Otomatis", "Laporan Kinerja Penjualan Otomatis"],
    10: ["Penjadwalan Shift & Pelacakan Waktu", "Pengajuan Cuti & Reimbursement Otomatis", "Mesin Perhitungan Gaji & Pajak Fleksibel", "Generator Slip Gaji & Laporan Dinamis"],
    11: ["Pemindaian Barcode Masuk & Keluar", "Notifikasi Batas Stok & Pesan Otomatis", "Sinkronisasi Multi-Lokasi & Gudang", "Pelacakan Pesanan Pemasok & Vendor"],
    12: ["Pemisahan Database Multi-Tenant", "Mesin Langganan Stripe/Pembayaran", "Tagihan API Penyewa & Analitik Penggunaan", "Dasbor Branding Sisi Klien yang Bersih"],
    13: ["Maket UI Figma yang Memukau", "Prototipe Perjalanan UX Interaktif", "Laporan Persona Pengguna & Usabilitas", "Token Sistem Desain Global yang Skalabel"],
    14: ["Chatbot AI & Pencarian Cerdas", "Model Pembelajaran Mesin Prediktif", "Alur Data Analisis Bisnis Otomatis", "Integrasi API GenAI Pihak Ketiga"],
    15: ["Infrastruktur Multi-zona AWS / GCP", "Mikrolayanan Docker & Kubernetes", "Jalur Penyebaran CI/CD Otomatis", "Pemantauan & Peringatan Server Real-time"]
  }
};

const deliverableDescriptions = {
  en: {
    1: [
      "High-performance client-side rendered apps for smooth, instant page transitions.",
      "Google-friendly semantic structures optimized for high ranking and performance metrics.",
      "Decoupled content frameworks providing flexible editing and scalable delivery.",
      "Fluid grid systems scaling layouts flawlessly across all modern device dimensions."
    ],
    2: [
      "Unique branding guidelines, logo suites, typography assets, and styling documents.",
      "Pixel-perfect viewing layouts for smartphones, tablets, and custom screens.",
      "Strategic form validation and database logging connected to modern CRM systems.",
      "Asset bundling, code splitting, and browser caching for speed optimizations."
    ],
    3: [
      "Scientific tracking of click paths and user behavior to maximize task completions.",
      "Deploy code variants side-by-side to gather concrete user conversion statistics.",
      "Standard client-side analytics trackers and server API integration setups.",
      "Clear, highly persuasive writing structure mapping interface hierarchies."
    ],
    4: [
      "Seamless integration of major secure processors supporting diverse payment methods.",
      "Direct postage calculators and courier label dispatch workflows.",
      "Instant catalog sync linked to warehousing databases and digital counters.",
      "Encrypted shopping cart logic complying with top-tier security standards."
    ],
    5: [
      "Rich control panels featuring real-time telemetry, user management, and stats.",
      "Strict data schemas, indexing protocols, and optimized backup structures.",
      "Robust REST endpoints and GraphQL queries featuring clean query routing.",
      "Speed-oriented interactive client apps using virtual DOM mechanisms."
    ],
    6: [
      "Stunning interactive line, bar, and node charts updating data instantly.",
      "Automated financial and sales metrics mapping business status.",
      "Granular user permissions defining read, write, and admin level access.",
      "Secure conversion scripts for instant data downloads in standard formats."
    ],
    7: [
      "Consolidated native application codebase delivering optimized mobile builds.",
      "Targeted system notifications redirecting users to specific context paths.",
      "Encrypted local store cache enabling application runtime without network sync.",
      "End-to-end publisher dashboard configuration for Google and iOS Stores."
    ],
    8: [
      "Unified journal records recording income, outflow, and tax allocations.",
      "Procurement trackers connecting raw materials directly with delivery cycles.",
      "Central schedules distributing personnel and computational power across hubs.",
      "Rigid security trails logging modifications across financial database instances."
    ],
    9: [
      "Interactive boards outlining deal progresses, stages, and customer contacts.",
      "Deep-dive client history pages compiling activities, interactions, and details.",
      "Transactional automated email runs triggered by specific user interactions.",
      "Interactive revenue reporting showing conversions and agent achievements."
    ],
    10: [
      "Flexible planning calendars capturing working hours and clock-in events.",
      "Approval pipelines managing employee vacations and expense submissions.",
      "Deduction calculation algorithms automating gross salary parameters.",
      "Standard report generators compiling print-ready payroll templates."
    ],
    11: [
      "Instant intake registration utilizing laser scanners and camera decoders.",
      "Automatic procurement thresholds sending replenishment orders to vendors.",
      "Distributed inventory balances mapped across physical store coordinates.",
      "Fulfillment records tracking incoming catalog items from ordering to storage."
    ],
    12: [
      "Strict server-level isolation ensuring tenant customer information safety.",
      "Subscription tier management integrating automated invoicing cycles.",
      "Granular API request trackers computing exact cost dimensions per client.",
      "Polished workspace setups allowing customers custom branding options."
    ],
    13: [
      "High-fidelity visual frames mapping interface colors, shapes, and positions.",
      "Clickable mockups mapping complete interactive paths for testing.",
      "Detailed analysis reports highlighting user friction points and observations.",
      "System tokens ensuring consistent design rules across development teams."
    ],
    14: [
      "Context-aware custom bots parsing corporate documents to answer questions.",
      "Data-trained logic identifying anomalies, trends, and business metrics.",
      "Optimized ETL scripts consolidating multiple incoming databases smoothly.",
      "Seamless integration of state-of-the-art Large Language Models."
    ],
    15: [
      "Multi-region hosting architectures maintaining uptime during provider outages.",
      "Isolated application blocks maximizing resource use and system scalability.",
      "Automated testing runs pushing validated software builds to deployment nodes.",
      "Continuous server logging alerting team members of resource changes."
    ]
  },
  id: {
    1: [
      "Aplikasi berbasis klien dengan performa tinggi untuk perpindahan halaman instan.",
      "Struktur semantik ramah Google yang dioptimalkan untuk peringkat dan kecepatan.",
      "Arsitektur konten terpisah yang menawarkan manajemen konten fleksibel dan cepat.",
      "Sistem grid dinamis yang menyesuaikan tata letak di semua ukuran perangkat modern."
    ],
    2: [
      "Panduan visual unik, logo, aset tipografi, dan dokumen gaya merek Anda.",
      "Desain tata letak visual sempurna untuk ponsel cerdas, tablet, dan desktop.",
      "Integrasi formulir peninjauan prospek (CRM) untuk penjaringan prospek penjualan.",
      "Optimasi ukuran aset, pemecahan kode, dan sistem penyimpanan cache cepat."
    ],
    3: [
      "Analisis mendalam terhadap klik pengguna untuk memaksimalkan sasaran halaman.",
      "Uji variasi desain secara paralel untuk mengumpulkan statistik konversi konkret.",
      "Konfigurasi piksel pelacakan standar industri untuk Google Ads dan Meta.",
      "Penulisan pesan persuasif yang terstruktur untuk mengoptimalkan navigasi."
    ],
    4: [
      "Integrasi mulus dengan pemroses pembayaran tepercaya untuk berbagai metode.",
      "Kalkulator ongkos kirim langsung dan alur pelabelan pengiriman kurir.",
      "Sinkronisasi inventaris instan yang terhubung ke basis data fisik toko.",
      "Keamanan alur belanja terenkripsi yang mematuhi standar sertifikasi digital."
    ],
    5: [
      "Panel kontrol interaktif lengkap dengan visual data, manajemen pengguna, dan stat.",
      "Desain basis data terstruktur, protokol indeks, dan pencadangan teratur.",
      "Endpoint REST API dan kueri GraphQL yang terstruktur dengan rute cepat.",
      "Aplikasi sisi klien super cepat dengan arsitektur virtual DOM termutakhir."
    ],
    6: [
      "Visual grafik garis, batang, dan sebaran interaktif yang memproses data instan.",
      "Dasbor ringkasan performa finansial dan transaksi bisnis secara otomatis.",
      "Pengaturan izin ketat yang menentukan hak akses data tingkat administrator.",
      "Konverter format data instan untuk dokumen laporan kerja harian."
    ],
    7: [
      "Build iOS & Android lintas platform siap rilis dengan performa tinggi.",
      "Notifikasi langsung pada perangkat yang mengarahkan pengguna ke halaman spesifik.",
      "Penyimpanan lokal yang aman sehingga aplikasi tetap berjalan tanpa koneksi internet.",
      "Bantuan penyerahan dan penerbitan aplikasi hingga tayang di Google Play & App Store."
    ],
    8: [
      "Sistem pencatatan laporan keuangan, pengeluaran, dan alokasi anggaran terpusat.",
      "Pelacak rantai pasok yang menghubungkan bahan mentah dengan siklus produksi.",
      "Perencana alokasi kapasitas kerja tim dan server komputasi perusahaan.",
      "Log pelacakan ketat yang merekam semua aktivitas sunting data penting."
    ],
    9: [
      "Papan pemantauan tahap prospek, status deal, dan riwayat komunikasi klien.",
      "Profil profil pelanggan lengkap berisi log pembelian dan kecenderungan minat.",
      "Pemicu email otomatis berdasarkan interaksi spesifik pengguna di sistem.",
      "Laporan penjualan periodik yang mengukur tingkat penutupan deal tim."
    ],
    10: [
      "Kalender kerja tim fleksibel untuk mengelola giliran kerja dan kehadiran.",
      "Sistem persetujuan cuti dan klaim reimburse karyawan secara digital.",
      "Kalkulator penghitungan gaji kotor dan bersih otomatis sesuai potongan pajak.",
      "Pembuat dokumen slip gaji PDF siap cetak dengan format baku perusahaan."
    ],
    11: [
      "Pemindaian kode batang masuk dan keluar barang menggunakan sensor kamera ponsel.",
      "Notifikasi otomatis saat stok menipis dan pemesanan kembali ke vendor.",
      "Sinkronisasi jumlah stok yang terdistribusi di beberapa lokasi gudang fisik.",
      "Pelacakan pesanan pasokan barang dari pemesanan hingga masuk rak penyimpanan."
    ],
    12: [
      "Isolasi data tingkat server untuk menjamin keamanan informasi antar penyewa.",
      "Manajemen penagihan berulang otomatis dengan sistem langganan Stripe.",
      "Pelacak penggunaan kueri API penyewa untuk perhitungan tagihan presisi.",
      "Dasbor kerja putih (white-label) yang mendukung kustomisasi logo dan domain."
    ],
    13: [
      "Desain maket visual beresolusi tinggi dengan skema warna dan tata letak pas.",
      "Prototipe antarmuka interaktif yang dapat diklik untuk uji alur kerja nyata.",
      "Laporan usabilitas yang memetakan titik hambatan pengguna saat navigasi.",
      "Aturan token desain global untuk mempermudah konsistensi tim pengembang."
    ],
    14: [
      "Bot asisten pintar yang merespons pertanyaan berdasarkan data dokumen internal.",
      "Pemrosesan data pintar untuk memprediksi kecenderungan grafik pertumbuhan bisnis.",
      "Alur pembersihan dan migrasi basis data dari berbagai platform eksternal.",
      "Integrasi model bahasa besar (LLM) OpenAI / Claude ke dalam sistem internal."
    ],
    15: [
      "Arsitektur server cadangan lintas wilayah untuk mencegah server mati.",
      "Isolasi fungsional aplikasi menggunakan teknologi kontainer modern.",
      "Rangkaian pengujian kode otomatis saat melakukan penggabungan kode baru.",
      "Sistem pemantauan penggunaan kapasitas RAM/CPU server dengan alarm notifikasi."
    ]
  }
};

const defaultTechDetails: Record<string, string> = {
  "React": "High-fidelity component model powering dynamic client-side experiences and modular responsive view rendering.",
  "Node": "Fast, event-driven server runtime handling asynchronous requests, high-throughput tasks, and backend integrations.",
  "Next": "Elite React framework providing optimized static rendering (SSG), server component logic, and high-speed routing.",
  "Nest": "Progressive Node.js framework building robust, strictly typed enterprise architectures and maintainable API controllers.",
  "Postgres": "Robust relational database holding structured application tables, constraints, transactions, and performance indexing.",
  "AWS": "Secure, highly available cloud hosting with auto-scaling compute groups, container runtimes, and isolated networks.",
  "Docker": "System application containerization enabling immutable staging environments and predictable production operations.",
  "Kubernetes": "Orchestration infrastructure scaling, load-balancing, and self-healing microservice clusters in modern cloud grids."
};

const defaultFaqData = {
  en: [
    { q: "How long does a typical custom build take?", a: "Depending on scale, small web layouts take 3-4 weeks. Extensive SaaS products or custom web app engines usually require 8-12 weeks." },
    { q: "Do you provide security auditing and penetration scans?", a: "Yes. Every custom build undergo strict security protocols including SQL injection tests, authorization audits, and API gateway rate-limits." },
    { q: "Can we migrate data from our existing legacy system?", a: "Absolutely. We specialize in custom migration scripts, safely porting PostgreSQL, MySQL, Excel spreadsheets, or third-party CRM hubs with zero active downtime." },
    { q: "What is your ongoing post-launch maintenance SLA?", a: "We offer continuous 24/7 cloud node monitoring, core framework updates, security patch rollouts, and direct developer support tickets." }
  ],
  id: [
    { q: "Berapa lama estimasi pengerjaan sistem kustom?", a: "Tergantung skala. Landing page atau company profile memakan waktu 3-4 minggu. Platform SaaS kompleks atau modul aplikasi web kustom biasanya membutuhkan waktu 8-12 minggu." },
    { q: "Apakah Anda menyediakan audit keamanan & pemindaian penetrasi?", a: "Ya. Setiap sistem yang kami bangun melewati prosedur audit keamanan ketat seperti validasi XSS, pengujian injeksi SQL, dan pembatasan laju API." },
    { q: "Apakah kami bisa memigrasikan data dari sistem lama?", a: "Bisa. Kami merancang skrip migrasi data khusus untuk memindahkan data SQL, Excel, maupun CRM pihak ketiga secara aman dengan waktu downtime nol." },
    { q: "Bagaimana SLA pemeliharaan setelah sistem diluncurkan?", a: "Kami menyediakan pemantauan server berkelanjutan, pembaruan keamanan berkala, optimasi basis data, serta tiket bantuan pengembang langsung." }
  ]
};

// Arounda-inspired tech icon SVGs
const AroundaTechs = [
  {
    name: "HTML",
    svg: (
      <svg className="w-10 h-10" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M108.4 0L67.6 455.3L256 512L444.4 455.3L403.6 0H108.4Z" fill="#E34F26" />
        <path d="M256 470.8L407.9 423.2L444.4 16H256V470.8Z" fill="#F16529" />
        <path d="M256 226H340L333.6 295.6L256 322.2V361L365.2 322.2L378 178H256V226Z" fill="#EBEBEB" />
        <path d="M256 86H146.8L153.2 154H256V202H159.6L166 270H256V322.2L198 305.6L194.8 270H146.8L156.4 378L256 410.8V86Z" fill="#FFFFFF" />
      </svg>
    )
  },
  {
    name: "CSS3",
    svg: (
      <svg className="w-10 h-10" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M108.4 0L67.6 455.3L256 512L444.4 455.3L403.6 0H108.4Z" fill="#1572B6" />
        <path d="M256 470.8L407.9 423.2L444.4 16H256V470.8Z" fill="#33A9DC" />
        <path d="M256 226H340L333.6 295.6L256 322.2V361L365.2 322.2L378 178H256V226Z" fill="#EBEBEB" />
        <path d="M256 86H146.8L153.2 154H256V202H159.6L166 270H256V322.2L198 305.6L194.8 270H146.8L156.4 378L256 410.8V86Z" fill="#FFFFFF" />
      </svg>
    )
  },
  {
    name: "JavaScript",
    svg: (
      <svg className="w-10 h-10" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="512" height="512" fill="#F7DF1E" />
        <path d="M296.8 385.8C296.8 424 321.4 443.2 355.8 443.2C389 443.2 409 423.6 409 385.8V285.8H365.8V379C365.8 398.2 357 405.4 345.8 405.4C334.8 405.4 327 398.2 327 379V285.8H283.8L296.8 385.8ZM164 344.6C176 366.6 195.4 377.2 219.6 377.2C241.6 377.2 254.2 368 254.2 352C254.2 334.4 240.2 326.6 211.2 316.6C176.2 304.8 147.2 291 147.2 248C147.2 210.8 176.2 189 217.2 189C251.6 189 275.6 205.8 288.6 230.8L251.6 252C243.6 238.4 232.2 230.6 216.8 230.6C203.2 230.6 193.4 236.4 193.4 246.6C193.4 259 203.2 265.4 227 274C267 288.2 300 302.2 300 348C300 391 266 412 219 412C172 412 143.6 385.8 131 344.6L164 344.6Z" fill="#000000" />
      </svg>
    )
  },
  {
    name: "ReactJS",
    svg: (
      <svg className="w-10 h-10 animate-[spin_20s_linear_infinite]" viewBox="-11.5 -10.23174 23 20.46348" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    )
  },
  {
    name: "Rust",
    svg: (
      <svg className="w-10 h-10" viewBox="0 0 106 106" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M60.5 4C60.5 8.1 63.9 11.5 68 11.5C72.1 11.5 75.5 8.1 75.5 4C75.5 -0.1 72.1 -3.5 68 -3.5C63.9 -3.5 60.5 -0.1 60.5 4ZM45.5 4C45.5 8.1 48.9 11.5 53 11.5C57.1 11.5 60.5 8.1 60.5 4C60.5 -0.1 57.1 -3.5 53 -3.5C48.9 -3.5 45.5 -0.1 45.5 4ZM53 103C48.9 103 45.5 106.4 45.5 110.5C45.5 114.6 48.9 118 53 118C57.1 118 60.5 114.6 60.5 110.5C60.5 106.4 57.1 103 53 103ZM68 103C63.9 103 60.5 106.4 60.5 110.5C60.5 114.6 63.9 118 68 118C72.1 118 75.5 114.6 75.5 110.5C75.5 106.4 72.1 103 68 103ZM22.5 13C22.5 17.1 25.9 20.5 30 20.5C34.1 20.5 37.5 17.1 37.5 13C37.5 8.9 34.1 5.5 30 5.5C25.9 5.5 22.5 8.9 22.5 13ZM75.5 13C75.5 17.1 78.9 20.5 83 20.5C87.1 20.5 90.5 17.1 90.5 13C90.5 8.9 87.1 5.5 83 5.5C78.9 5.5 75.5 8.9 75.5 13ZM83 93.5C78.9 93.5 75.5 96.9 75.5 101C75.5 105.1 78.9 108.5 83 108.5C87.1 108.5 90.5 105.1 90.5 101C90.5 96.9 87.1 93.5 83 93.5ZM30 93.5C25.9 93.5 22.5 96.9 22.5 101C22.5 105.1 25.9 108.5 30 108.5C34.1 108.5 37.5 105.1 37.5 101C37.5 96.9 34.1 93.5 30 93.5Z" fill="#DE5833" transform="scale(0.85) translate(10, 10)" />
        <circle cx="53" cy="53" r="32" stroke="#DE5833" strokeWidth="8" fill="none" />
        <path d="M37 38 L69 38 L69 44 L57 44 L57 68 L50 68 L50 44 L37 44 Z" fill="#DE5833" />
        <circle cx="53" cy="53" r="41" stroke="#DE5833" strokeWidth="2.5" strokeDasharray="6,4" fill="none" />
      </svg>
    )
  },
  {
    name: "Python",
    svg: (
      <svg className="w-10 h-10" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M54.2 8C33.1 8 34.8 17.1 34.8 17.1L34.9 26.5H54.7V29.3H27.1C27.1 29.3 14 30.7 14 51C14 71.3 25.6 70.1 25.6 70.1H32.5V60.4C32.5 60.4 32.1 48.7 43.9 48.7H62.7C62.7 62.7 62.7 62.7 62.7 62.7C62.7 62.7 73.8 62.5 73.8 42C73.8 21.5 66.8 21.6 66.8 21.6H60L60 17.1C60 17.1 60.7 8 54.2 8Z" fill="#3776AB" />
        <path d="M55.8 102C76.9 102 75.2 92.9 75.2 92.9L75.1 83.5H55.3V80.7H82.9C82.9 80.7 96 79.3 96 59C96 38.7 84.4 39.9 84.4 39.9H77.5V49.6C77.5 49.6 77.9 61.3 66.1 61.3H47.3C47.3 47.3 47.3 47.3 47.3 47.3C47.3 47.3 36.2 47.5 36.2 68C36.2 88.5 43.2 88.4 43.2 88.4H50L50 92.9C50 92.9 49.3 102 55.8 102Z" fill="#FFD43B" />
        <circle cx="45" cy="18" r="3.5" fill="#FFFFFF" />
        <circle cx="65" cy="92" r="3.5" fill="#111111" />
      </svg>
    )
  },
  {
    name: "NodeJS",
    svg: (
      <svg className="w-10 h-10" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M256 0L464 120V360L256 480L48 360V120L256 0Z" fill="#333333" />
        <path d="M256 20L440 126V354L256 460L72 354V126L256 20Z" fill="#444444" />
        <path d="M256 90V230L370 296V156L256 90Z" fill="#68A063" />
        <path d="M142 156V296L256 230V90L142 156Z" fill="#8CC84B" />
        <path d="M256 230L142 296L256 362V230Z" fill="#43853D" />
        <path d="M256 230V362L370 296L256 230Z" fill="#68A063" />
      </svg>
    )
  },
  {
    name: "Shopify",
    svg: (
      <svg className="w-10 h-10" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M110 32C110 24 104 18 96 18H54C46 18 40 24 40 32V38H110V32Z" fill="#95BF47" />
        <path d="M125 38H25L15 125C15 131 20 136 26 136H124C130 136 135 131 135 125L125 38Z" fill="#96BF48" />
        <path d="M50 38H100V48H50V38Z" fill="#5E8E3E" />
        <path d="M85 62C85 52 70 52 70 65C70 78 85 78 85 90C85 102 70 102 70 92" stroke="#FFFFFF" strokeWidth="8" strokeLinecap="round" fill="none" />
      </svg>
    )
  }
];

export default function ServicePageClient({ service }: { service: any }) {
  const { language, t } = useLanguage();
  
  const getSlug = (title: string) => title.toLowerCase().replace(/[\s&/]+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
  const slug = getSlug(service.title);
  
  const titleKey = `service.${slug}` as TranslationKey;
  const descKey = `service.desc.${slug}` as TranslationKey;
  
  const translatedTitle = t(titleKey) === titleKey ? service.title : t(titleKey);
  const translatedDesc = t(descKey) === descKey ? service.description : t(descKey);
  
  const whatsappTemplate = `Saya ingin konsultasi mengenai project yang sedang saya kembangkan, khususnya untuk layanan: ${translatedTitle}`;
  const whatsappUrl = `https://wa.me/6285158945811?text=${encodeURIComponent(whatsappTemplate)}`;

  // States
  const [activeProcessTab, setActiveProcessTab] = useState(0);

  // Section Refs for scroll tracking
  const heroRef = useRef(null);
  const overviewRef = useRef(null);
  const methodologyRef = useRef(null);
  const deliverablesRef = useRef(null);
  const orbitRef = useRef(null);

  // Cursor Tracking for Hero Background Animation
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set((e.clientX / window.innerWidth) * 2 - 1);
      mouseY.set((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const smoothX = useSpring(mouseX, { damping: 45, stiffness: 220 });
  const smoothY = useSpring(mouseY, { damping: 45, stiffness: 220 });

  // 3D rotation based on mouse coordinates
  const rotateX = useTransform(smoothY, [-1, 1], [15, -15]);
  const rotateY = useTransform(smoothX, [-1, 1], [-15, 15]);
  const translateX = useTransform(smoothX, [-1, 1], [-45, 45]);
  const translateY = useTransform(smoothY, [-1, 1], [-45, 45]);

  // Scroll hooks for rotating background
  const { scrollYProgress } = useScroll();
  const rotateScroll = useTransform(scrollYProgress, [0, 1], [0, 360]);

  // Timeline phases dynamic mapping
  const getProcessPhases = (serviceId: number, lang: "en" | "id") => {
    if (serviceId === 7) { // Mobile App
      return lang === "en" ? [
        { title: "Discovery", detail: "Scoping user personas, native platforms (iOS/Android), and device targets.", metric: "Week 01" },
        { title: "Wireframing", detail: "Creating interactive layout wireframes, gesture maps, and screen hierarchies.", metric: "Week 02" },
        { title: "UI/UX Design", detail: "Figma mobile prototypes, components, transitions, and dark/light modes.", metric: "Week 03" },
        { title: "App Development", detail: "Developing cross-platform React Native/Flutter code with local storage.", metric: "Sprint 1-2" },
        { title: "QA Testing", detail: "Testing on physical iOS/Android devices, APIs, offline state, and performance.", metric: "99.9% Pass" },
        { title: "Store Launch", detail: "Packaging binaries, configuring store listings, and App Store/Play Store review.", metric: "Store Live" },
        { title: "SLA Support", detail: "Crashing reports, OS upgrade compatibility, and security compliance.", metric: "Continuous" }
      ] : [
        { title: "Konsultasi", detail: "Menganalisis persona pengguna, platform native (iOS/Android), dan target perangkat.", metric: "Minggu 01" },
        { title: "Rancang Rangka", detail: "Membuat wireframe interaktif, pemetaan gestur, dan hierarki layar.", metric: "Minggu 02" },
        { title: "Desain UI/UX", detail: "Prototipe Figma mobile, komponen, transisi, serta mode gelap/terang.", metric: "Minggu 03" },
        { title: "Pengembangan", detail: "Menulis kode lintas platform React Native/Flutter dengan penyimpanan lokal.", metric: "Sprint 1-2" },
        { title: "Pengujian QA", detail: "Uji coba perangkat fisik iOS/Android, API, kondisi offline, dan performa.", metric: "99.9% Lulus" },
        { title: "Rilis Toko", detail: "Pengemasan binary, konfigurasi halaman toko, dan proses review App/Play Store.", metric: "Live di Toko" },
        { title: "Dukungan SLA", detail: "Laporan crash, kompatibilitas pembaruan OS, serta kepatuhan keamanan.", metric: "Berkelanjutan" }
      ];
    } else if (serviceId === 13) { // UI/UX Design
      return lang === "en" ? [
        { title: "Briefing", detail: "Aligning on brand vision, target audience, business goals, and visual direction.", metric: "Week 01" },
        { title: "UX Research", detail: "Analyzing competitors, conducting user interviews, and building personas.", metric: "Week 02" },
        { title: "Wireframing", detail: "Low-fidelity structural layouts, user flows, and page blueprint design.", metric: "Week 03" },
        { title: "UI Design", detail: "Creating stunning high-fidelity mockups, design patterns, and colors.", metric: "Week 04" },
        { title: "Prototyping", detail: "Building fully interactive, clickable prototypes in Figma for user testing.", metric: "Week 05" },
        { title: "Dev Handoff", detail: "Delivering production-ready design tokens, asset packages, and specifications.", metric: "Ready" },
        { title: "Design QA", detail: "Reviewing front-end implementations to ensure 100% pixel-perfect compliance.", metric: "Pixel Audit" }
      ] : [
        { title: "Konsultasi", detail: "Penyelarasan visi brand, audiens target, tujuan bisnis, dan arahan visual.", metric: "Minggu 01" },
        { title: "Riset UX", detail: "Menganalisis kompetitor, melakukan wawancara pengguna, dan menyusun persona.", metric: "Minggu 02" },
        { title: "Rancang Rangka", detail: "Tata letak struktural low-fidelity, alur pengguna, dan desain cetak biru halaman.", metric: "Minggu 03" },
        { title: "Desain UI", detail: "Pembuatan maket high-fidelity yang memukau, pola desain, dan warna.", metric: "Minggu 04" },
        { title: "Prototipe", detail: "Membangun prototipe klik interaktif penuh di Figma untuk uji coba pengguna.", metric: "Minggu 05" },
        { title: "Serah Terima", detail: "Menyerahkan token desain siap produksi, paket aset, dan spesifikasi detail.", metric: "Siap Kirim" },
        { title: "Audit QA", detail: "Meninjau hasil implementasi frontend untuk memastikan kesesuaian piksel 100%.", metric: "Audit Piksel" }
      ];
    } else if (serviceId === 14) { // AI & Automation
      return lang === "en" ? [
        { title: "Scoping", detail: "Identifying high-value AI cases, business logic, and database sources.", metric: "Week 01" },
        { title: "Data Prep", detail: "Cleaning, structuring, and labeling training data with secure pipelines.", metric: "Week 02" },
        { title: "Model Setup", detail: "Choosing frameworks (PyTorch, TensorFlow) and training base models.", metric: "Week 03" },
        { title: "AI Training", detail: "Fine-tuning parameters, validation tests, and optimization loops.", metric: "Sprint Phase" },
        { title: "Integration", detail: "Building secure gateways connecting AI models with target applications.", metric: "99% Success" },
        { title: "Deployment", detail: "Setting up auto-scaling GPU environments and real-time model inference.", metric: "Live Inference" },
        { title: "Monitoring", detail: "Tracking accuracy drift, database updates, and cost-efficiency audits.", metric: "Continuous" }
      ] : [
        { title: "Konsultasi", detail: "Mengidentifikasi kasus AI bernilai tinggi, logika bisnis, dan sumber data.", metric: "Minggu 01" },
        { title: "Preparasi Data", detail: "Membersihkan, menyusun, dan melabeli data latihan dengan jalur pipa aman.", metric: "Minggu 02" },
        { title: "Setup Model", detail: "Memilih kerangka kerja (PyTorch, TensorFlow) dan melatih model dasar.", metric: "Minggu 03" },
        { title: "Pelatihan AI", detail: "Penyempurnaan parameter, pengujian validasi, dan siklus optimasi.", metric: "Fase Sprint" },
        { title: "Integrasi", detail: "Membangun gerbang API aman yang menghubungkan model AI dengan aplikasi target.", metric: "99% Sukses" },
        { title: "Penyebaran", detail: "Menyiapkan lingkungan GPU auto-scaling dan inferensi model real-time.", metric: "Inferensi Aktif" },
        { title: "Pemantauan", detail: "Melacak pergeseran akurasi, pembaruan data, dan audit efisiensi biaya.", metric: "Berkelanjutan" }
      ];
    } else if (serviceId === 15) { // Cloud & DevOps
      return lang === "en" ? [
        { title: "Assessment", detail: "Assessing current server assets, scalability goals, and security standards.", metric: "Week 01" },
        { title: "Architecture", detail: "Designing VPC networks, database replication, and Kubernetes layouts.", metric: "Week 02" },
        { title: "IaC Provision", detail: "Writing Terraform scripts to safely build infrastructure environments.", metric: "Week 03" },
        { title: "Migration", detail: "Containerizing applications and setting up rolling CI/CD automation.", metric: "Migration" },
        { title: "Security Audit", detail: "Penetration scanning, configuring firewalls, and IAM role validation.", metric: "Audit Clear" },
        { title: "Switchover", detail: "Executing DNS cutovers and database traffic migration with zero downtime.", metric: "Live Infra" },
        { title: "24/7 SLA", detail: "Real-time logging, alert triggers, cloud backups, and capacity scaling.", metric: "Continuous" }
      ] : [
        { title: "Penilaian", detail: "Menilai aset server saat ini, target skalabilitas, dan standar keamanan.", metric: "Minggu 01" },
        { title: "Arsitektur", detail: "Merancang jaringan VPC, replikasi basis data, dan tata letak Kubernetes.", metric: "Minggu 02" },
        { title: "Provisi IaC", detail: "Menulis skrip Terraform untuk membangun lingkungan infrastruktur dengan aman.", metric: "Minggu 03" },
        { title: "Migrasi", detail: "Mengemas aplikasi ke kontainer dan mengatur otomatisasi CI/CD rolling.", metric: "Migrasi" },
        { title: "Audit Keamanan", detail: "Pemindaian penetrasi, mengonfigurasi firewall, dan validasi peran IAM.", metric: "Audit Bersih" },
        { title: "Transisi Rilis", detail: "Menjalankan DNS cutover dan migrasi lalu lintas database dengan downtime nol.", metric: "Infrastruktur Aktif" },
        { title: "SLA 24/7", detail: "Pemantauan log real-time, pemicu alarm, cadangan cloud, dan penskalaan kapasitas.", metric: "Berkelanjutan" }
      ];
    } else { // Standard Web & Systems
      return lang === "en" ? [
        { title: "Discovery", detail: "Comprehensive initial requirement scoping, technical roadmaps, and architecture outlines.", metric: "Week 01" },
        { title: "Architecture", detail: "Defining detailed database normalization plans, REST/GraphQL schemas, and wireframe pipelines.", metric: "Week 02" },
        { title: "Design UI/UX", detail: "High-fidelity user interface prototyping in Figma with scalable global design tokens.", metric: "Week 03-04" },
        { title: "Development", detail: "Writing strictly clean React/Next.js code structure and high-concurrency backend microservices.", metric: "Sprint Phase" },
        { title: "QA Testing", detail: "Strict unit testing, automated API stress analysis, and cross-platform compatibility checks.", metric: "99.9% Pass" },
        { title: "Cloud Launch", detail: "Production infrastructure deployment with zero-downtime rolling CI/CD pipeline setups.", metric: "Live Node" },
        { title: "SLA Support", detail: "Ongoing log analytics monitoring, security updates, and automated database tuning.", metric: "Continuous" }
      ] : [
        { title: "Konsultasi", detail: "Analisis kebutuhan sistem awal secara menyeluruh, penyusunan peta jalan teknis, dan rancangan arsitektur.", metric: "Minggu 01" },
        { title: "Arsitektur", detail: "Menyusun spesifikasi teknis rinci, skema normalisasi basis data, dan struktur rancang bangun sistem.", metric: "Minggu 02" },
        { title: "Desain UI/UX", detail: "Pembuatan prototipe antarmuka pengguna interaktif (UI/UX) di Figma dengan token sistem desain global.", metric: "Minggu 03-04" },
        { title: "Pengembangan", detail: "Penulisan baris kode React/Next.js yang bersih serta pengembangan layanan mikro backend yang skalabel.", metric: "Fase Sprint" },
        { title: "Pengujian QA", detail: "Pengujian unit ketat, analisis beban stres API, serta pemeriksaan kompatibilitas browser lintas platform.", metric: "99.9% Lulus" },
        { title: "Peluncuran", detail: "Penerapan infrastruktur produksi secara otomatis melalui konfigurasi jalur pipa CI/CD berkecepatan tinggi.", metric: "Live Node" },
        { title: "Pemeliharaan", detail: "Pemantauan berkala log analitik, pembaruan keamanan sistem, dan optimasi performa berkelanjutan.", metric: "Berkelanjutan" }
      ];
    }
  };

  const processPhases = getProcessPhases(service.id as number, language);
  const [activePhase, setActivePhase] = useState(0);

  return (
    <motion.main 
      className="min-h-screen font-sans selection:bg-blue-600/20 selection:text-blue-500 overflow-x-clip w-full bg-slate-50"
    >
      <Navbar />

      {/* 01 HERO SECTION (Normal Flow) */}
      <motion.section 
        ref={heroRef} 
        className="relative min-h-[90vh] flex items-center pt-28 pb-16 lg:pt-36 overflow-hidden bg-[#f8fafc] text-slate-900 bg-[linear-gradient(to_right,rgba(15,23,42,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.02)_1px,transparent_1px)] bg-[size:40px_40px] w-full"
      >
        {/* Interactive Background Shape: Parallax Z-Orbit (Zellio theme, cursor interactive) */}
        <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center" style={{ perspective: 1000 }}>
          <motion.div 
            className="w-[800px] h-[800px] opacity-80"
            style={{ 
              x: translateX, 
              y: translateY,
              rotateX, 
              rotateY,
              rotate: rotateScroll,
              transformStyle: "preserve-3d"
            }}
          >
            <svg viewBox="0 0 500 500" className="w-full h-full text-current">
              <defs>
                <linearGradient id="zellioGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.25" />
                </linearGradient>
                <path id="textCircle" d="M 250 250 m -110, 0 a 110,110 0 1,1 220,0 a 110,110 0 1,1 -220,0" />
                <path id="textCircleLarge" d="M 250 250 m -180, 0 a 180,180 0 1,1 360,0 a 180,180 0 1,1 -360,0" />
              </defs>

              {/* ID 1 — Custom Website Development: Browser wireframe + orbiting rings */}
              {service.id === 1 ? (
                <>
                  <rect x="60" y="90" width="380" height="280" rx="14" fill="none" stroke="url(#zellioGradient)" strokeWidth="1.5" />
                  <line x1="60" y1="132" x2="440" y2="132" stroke="url(#zellioGradient)" strokeWidth="1.5" />
                  <circle cx="86" cy="111" r="5" fill="url(#zellioGradient)" />
                  <circle cx="108" cy="111" r="5" fill="url(#zellioGradient)" />
                  <circle cx="130" cy="111" r="5" fill="url(#zellioGradient)" />
                  <rect x="80" y="152" width="220" height="100" rx="6" fill="none" stroke="url(#zellioGradient)" strokeWidth="1" strokeDasharray="3 4" />
                  <rect x="316" y="152" width="104" height="46" rx="6" fill="none" stroke="url(#zellioGradient)" strokeWidth="1" strokeDasharray="3 4" />
                  <rect x="316" y="210" width="104" height="46" rx="6" fill="none" stroke="url(#zellioGradient)" strokeWidth="1" strokeDasharray="3 4" />
                  <rect x="80" y="268" width="340" height="56" rx="6" fill="none" stroke="url(#zellioGradient)" strokeWidth="1" strokeDasharray="3 4" />
                  <motion.circle cx="250" cy="250" r="215" fill="none" stroke="url(#zellioGradient)" strokeWidth="0.5" strokeDasharray="4 8" animate={{ rotate: 360 }} transition={{ duration: 50, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "250px 250px" }} />
                  <motion.circle cx="250" cy="250" r="155" fill="none" stroke="url(#zellioGradient)" strokeWidth="0.5" strokeDasharray="2 6" animate={{ rotate: -360 }} transition={{ duration: 38, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "250px 250px" }} />
                </>
              ) : service.id === 2 ? (
                /* ID 2 — Company Profile Website: Building facade grid */
                <>
                  <rect x="120" y="80" width="260" height="340" rx="4" fill="none" stroke="url(#zellioGradient)" strokeWidth="1.5" />
                  {[0,1,2,3].map(row => [0,1,2].map(col => (
                    <rect key={`${row}-${col}`} x={140 + col*78} y={110 + row*72} width="52" height="44" rx="3" fill="none" stroke="url(#zellioGradient)" strokeWidth="0.8" strokeDasharray="2 3" />
                  )))}
                  <rect x="190" y="368" width="120" height="52" rx="2" fill="none" stroke="url(#zellioGradient)" strokeWidth="1" />
                  <motion.circle cx="250" cy="250" r="200" fill="none" stroke="url(#zellioGradient)" strokeWidth="0.5" strokeDasharray="3 7" animate={{ rotate: 360 }} transition={{ duration: 55, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "250px 250px" }} />
                  <motion.circle cx="250" cy="250" r="140" fill="none" stroke="url(#zellioGradient)" strokeWidth="0.4" strokeDasharray="2 8" animate={{ rotate: -360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "250px 250px" }} />
                </>
              ) : service.id === 3 ? (
                /* ID 3 — Landing Page: Conversion funnel */
                <>
                  <polygon points="250,60 430,170 430,330 250,440 70,330 70,170" fill="none" stroke="url(#zellioGradient)" strokeWidth="1.2" />
                  <polygon points="250,100 390,182 390,318 250,400 110,318 110,182" fill="none" stroke="url(#zellioGradient)" strokeWidth="0.8" strokeDasharray="3 4" />
                  <polygon points="250,145 350,200 350,300 250,355 150,300 150,200" fill="none" stroke="url(#zellioGradient)" strokeWidth="0.6" strokeDasharray="2 5" />
                  <motion.circle cx="250" cy="250" r="8" fill="url(#zellioGradient)" animate={{ scale: [1, 1.8, 1], opacity: [1, 0.3, 1] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }} style={{ transformOrigin: "250px 250px" }} />
                  <motion.circle cx="250" cy="250" r="190" fill="none" stroke="url(#zellioGradient)" strokeWidth="0.5" strokeDasharray="5 10" animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "250px 250px" }} />
                </>
              ) : service.id === 4 ? (
                /* ID 4 — E-Commerce: Shopping cart + grid products */
                <>
                  <rect x="80" y="80" width="100" height="100" rx="8" fill="none" stroke="url(#zellioGradient)" strokeWidth="1" strokeDasharray="2 3" />
                  <rect x="200" y="80" width="100" height="100" rx="8" fill="none" stroke="url(#zellioGradient)" strokeWidth="1" strokeDasharray="2 3" />
                  <rect x="320" y="80" width="100" height="100" rx="8" fill="none" stroke="url(#zellioGradient)" strokeWidth="1" strokeDasharray="2 3" />
                  <rect x="80" y="200" width="100" height="100" rx="8" fill="none" stroke="url(#zellioGradient)" strokeWidth="1" strokeDasharray="2 3" />
                  <rect x="200" y="200" width="100" height="100" rx="8" fill="none" stroke="url(#zellioGradient)" strokeWidth="1" strokeDasharray="2 3" />
                  <rect x="320" y="200" width="100" height="100" rx="8" fill="none" stroke="url(#zellioGradient)" strokeWidth="1" strokeDasharray="2 3" />
                  <path d="M 100 330 L 120 330 L 150 390 L 380 390 L 410 350" fill="none" stroke="url(#zellioGradient)" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="180" cy="420" r="18" fill="none" stroke="url(#zellioGradient)" strokeWidth="1.5" />
                  <circle cx="360" cy="420" r="18" fill="none" stroke="url(#zellioGradient)" strokeWidth="1.5" />
                  <motion.circle cx="250" cy="250" r="215" fill="none" stroke="url(#zellioGradient)" strokeWidth="0.4" strokeDasharray="2 8" animate={{ rotate: -360 }} transition={{ duration: 45, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "250px 250px" }} />
                </>
              ) : service.id === 5 ? (
                /* ID 5 — Custom Web App: Layered architecture blocks */
                <>
                  <rect x="100" y="80" width="300" height="60" rx="8" fill="none" stroke="url(#zellioGradient)" strokeWidth="1.5" />
                  <rect x="120" y="170" width="260" height="60" rx="8" fill="none" stroke="url(#zellioGradient)" strokeWidth="1.5" />
                  <rect x="140" y="260" width="220" height="60" rx="8" fill="none" stroke="url(#zellioGradient)" strokeWidth="1.5" />
                  <rect x="160" y="350" width="180" height="60" rx="8" fill="none" stroke="url(#zellioGradient)" strokeWidth="1.5" />
                  <line x1="250" y1="140" x2="250" y2="170" stroke="url(#zellioGradient)" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="250" y1="230" x2="250" y2="260" stroke="url(#zellioGradient)" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="250" y1="320" x2="250" y2="350" stroke="url(#zellioGradient)" strokeWidth="1" strokeDasharray="3 3" />
                  <motion.circle cx="250" cy="250" r="210" fill="none" stroke="url(#zellioGradient)" strokeWidth="0.5" strokeDasharray="3 7" animate={{ rotate: 360 }} transition={{ duration: 50, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "250px 250px" }} />
                  <motion.circle cx="250" cy="250" r="150" fill="none" stroke="url(#zellioGradient)" strokeWidth="0.3" strokeDasharray="2 6" animate={{ rotate: -360 }} transition={{ duration: 35, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "250px 250px" }} />
                </>
              ) : service.id === 6 ? (
                /* ID 6 — Admin & Analytics Dashboard: Bar chart + line chart */
                <>
                  <rect x="70" y="80" width="360" height="260" rx="10" fill="none" stroke="url(#zellioGradient)" strokeWidth="1.5" />
                  <line x1="70" y1="115" x2="430" y2="115" stroke="url(#zellioGradient)" strokeWidth="1" />
                  <rect x="100" y="220" width="40" height="90" rx="3" fill="none" stroke="url(#zellioGradient)" strokeWidth="1" />
                  <rect x="160" y="170" width="40" height="140" rx="3" fill="none" stroke="url(#zellioGradient)" strokeWidth="1" />
                  <rect x="220" y="200" width="40" height="110" rx="3" fill="none" stroke="url(#zellioGradient)" strokeWidth="1" />
                  <rect x="280" y="145" width="40" height="165" rx="3" fill="none" stroke="url(#zellioGradient)" strokeWidth="1" />
                  <rect x="340" y="185" width="40" height="125" rx="3" fill="none" stroke="url(#zellioGradient)" strokeWidth="1" />
                  <path d="M 100 230 C 140 200 200 260 250 190 C 300 130 360 210 400 175" fill="none" stroke="url(#zellioGradient)" strokeWidth="1.5" strokeLinecap="round" />
                  <rect x="90" y="360" width="100" height="70" rx="6" fill="none" stroke="url(#zellioGradient)" strokeWidth="0.8" strokeDasharray="2 3" />
                  <rect x="205" y="360" width="100" height="70" rx="6" fill="none" stroke="url(#zellioGradient)" strokeWidth="0.8" strokeDasharray="2 3" />
                  <rect x="320" y="360" width="100" height="70" rx="6" fill="none" stroke="url(#zellioGradient)" strokeWidth="0.8" strokeDasharray="2 3" />
                  <motion.circle cx="250" cy="250" r="210" fill="none" stroke="url(#zellioGradient)" strokeWidth="0.3" strokeDasharray="2 8" animate={{ rotate: -360 }} transition={{ duration: 55, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "250px 250px" }} />
                </>
              ) : service.id === 7 ? (
                /* ID 7 — Mobile App: Phone + floating elements */
                <>
                  <rect x="160" y="70" width="180" height="360" rx="32" fill="none" stroke="url(#zellioGradient)" strokeWidth="2" />
                  <line x1="215" y1="92" x2="285" y2="92" stroke="url(#zellioGradient)" strokeWidth="3" strokeLinecap="round" />
                  <rect x="178" y="118" width="144" height="200" rx="8" fill="none" stroke="url(#zellioGradient)" strokeWidth="0.8" strokeDasharray="2 3" />
                  <circle cx="250" cy="375" r="14" fill="none" stroke="url(#zellioGradient)" strokeWidth="1.5" />
                  <motion.circle cx="100" cy="180" r="20" fill="none" stroke="url(#zellioGradient)" strokeWidth="0.8" animate={{ y: [-8, 8, -8] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} />
                  <motion.circle cx="400" cy="300" r="30" fill="none" stroke="url(#zellioGradient)" strokeWidth="0.8" animate={{ y: [8, -8, 8] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
                  <motion.circle cx="250" cy="250" r="205" fill="none" stroke="url(#zellioGradient)" strokeWidth="0.4" strokeDasharray="3 6" animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "250px 250px" }} />
                </>
              ) : service.id === 8 ? (
                /* ID 8 — ERP: Interconnected module nodes */
                <>
                  <circle cx="250" cy="250" r="30" fill="none" stroke="url(#zellioGradient)" strokeWidth="2" />
                  <circle cx="250" cy="110" r="22" fill="none" stroke="url(#zellioGradient)" strokeWidth="1.5" />
                  <circle cx="390" cy="185" r="22" fill="none" stroke="url(#zellioGradient)" strokeWidth="1.5" />
                  <circle cx="390" cy="315" r="22" fill="none" stroke="url(#zellioGradient)" strokeWidth="1.5" />
                  <circle cx="250" cy="390" r="22" fill="none" stroke="url(#zellioGradient)" strokeWidth="1.5" />
                  <circle cx="110" cy="315" r="22" fill="none" stroke="url(#zellioGradient)" strokeWidth="1.5" />
                  <circle cx="110" cy="185" r="22" fill="none" stroke="url(#zellioGradient)" strokeWidth="1.5" />
                  <line x1="250" y1="220" x2="250" y2="132" stroke="url(#zellioGradient)" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="275" y1="235" x2="368" y2="197" stroke="url(#zellioGradient)" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="275" y1="265" x2="368" y2="303" stroke="url(#zellioGradient)" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="250" y1="280" x2="250" y2="368" stroke="url(#zellioGradient)" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="225" y1="265" x2="132" y2="303" stroke="url(#zellioGradient)" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="225" y1="235" x2="132" y2="197" stroke="url(#zellioGradient)" strokeWidth="1" strokeDasharray="3 3" />
                  <motion.circle cx="250" cy="250" r="200" fill="none" stroke="url(#zellioGradient)" strokeWidth="0.4" strokeDasharray="2 8" animate={{ rotate: 360 }} transition={{ duration: 50, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "250px 250px" }} />
                </>
              ) : service.id === 9 ? (
                /* ID 9 — CRM: Pipeline stages funnel */
                <>
                  <rect x="60" y="100" width="80" height="300" rx="6" fill="none" stroke="url(#zellioGradient)" strokeWidth="1.2" />
                  <rect x="155" y="130" width="80" height="240" rx="6" fill="none" stroke="url(#zellioGradient)" strokeWidth="1.2" />
                  <rect x="250" y="155" width="80" height="190" rx="6" fill="none" stroke="url(#zellioGradient)" strokeWidth="1.2" />
                  <rect x="345" y="175" width="80" height="150" rx="6" fill="none" stroke="url(#zellioGradient)" strokeWidth="1.2" />
                  {[3,4,5].map(i => <circle key={i} cx={100} cy={160 + i*55} r={14} fill="none" stroke="url(#zellioGradient)" strokeWidth="0.8" />)}
                  {[2,3,4].map(i => <circle key={i} cx={195} cy={185 + i*55} r={14} fill="none" stroke="url(#zellioGradient)" strokeWidth="0.8" />)}
                  <motion.circle cx="250" cy="250" r="205" fill="none" stroke="url(#zellioGradient)" strokeWidth="0.4" strokeDasharray="3 9" animate={{ rotate: -360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "250px 250px" }} />
                </>
              ) : service.id === 10 ? (
                /* ID 10 — HRIS & Payroll: Calendar/grid + check marks */
                <>
                  <rect x="80" y="80" width="340" height="300" rx="10" fill="none" stroke="url(#zellioGradient)" strokeWidth="1.5" />
                  <line x1="80" y1="120" x2="420" y2="120" stroke="url(#zellioGradient)" strokeWidth="1" />
                  {[0,1,2,3,4,5,6].map(i => <line key={i} x1={80 + (i+1)*340/7} y1="80" x2={80 + (i+1)*340/7} y2="380" stroke="url(#zellioGradient)" strokeWidth="0.5" strokeDasharray="2 4" />)}
                  {[0,1,2,3].map(i => <line key={i} x1="80" y1={120 + (i+1)*260/4} x2="420" y2={120 + (i+1)*260/4} stroke="url(#zellioGradient)" strokeWidth="0.5" strokeDasharray="2 4" />)}
                  <motion.circle cx="180" cy="152" r="14" fill="none" stroke="url(#zellioGradient)" strokeWidth="1.2" animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0 }} style={{ transformOrigin: "180px 152px" }} />
                  <motion.circle cx="228" cy="220" r="14" fill="none" stroke="url(#zellioGradient)" strokeWidth="1.2" animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.7 }} style={{ transformOrigin: "228px 220px" }} />
                  <rect x="80" y="390" width="340" height="60" rx="8" fill="none" stroke="url(#zellioGradient)" strokeWidth="1" strokeDasharray="3 4" />
                  <motion.circle cx="250" cy="250" r="215" fill="none" stroke="url(#zellioGradient)" strokeWidth="0.3" strokeDasharray="2 9" animate={{ rotate: 360 }} transition={{ duration: 65, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "250px 250px" }} />
                </>
              ) : service.id === 11 ? (
                /* ID 11 — Inventory: Barcode + warehouse grid */
                <>
                  <rect x="100" y="90" width="300" height="200" rx="8" fill="none" stroke="url(#zellioGradient)" strokeWidth="1.5" />
                  {[0,1,2,3,4,5,6,7,8,9,10,11].map(i => <line key={i} x1={120+i*22} y1="110" x2={120+i*22} y2="270" stroke="url(#zellioGradient)" strokeWidth={i%3===0?2:0.8} />)}
                  <rect x="140" y="290" width="220" height="30" rx="4" fill="none" stroke="url(#zellioGradient)" strokeWidth="1" />
                  {[0,1,2].map(col => [0,1,2].map(row => (
                    <rect key={`${col}-${row}`} x={80+col*130} y={350+row*48} width="110" height="36" rx="5" fill="none" stroke="url(#zellioGradient)" strokeWidth="0.8" strokeDasharray="2 3" />
                  )))}
                  <motion.circle cx="250" cy="250" r="210" fill="none" stroke="url(#zellioGradient)" strokeWidth="0.4" strokeDasharray="3 8" animate={{ rotate: -360 }} transition={{ duration: 50, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "250px 250px" }} />
                </>
              ) : service.id === 12 ? (
                /* ID 12 — SaaS Platform: Concentric data tiers */
                <>
                  <motion.circle cx="250" cy="250" r="180" fill="none" stroke="url(#zellioGradient)" strokeWidth="1" animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "250px 250px" }} />
                  <motion.circle cx="250" cy="250" r="130" fill="none" stroke="url(#zellioGradient)" strokeWidth="1.2" animate={{ rotate: -360 }} transition={{ duration: 45, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "250px 250px" }} />
                  <motion.circle cx="250" cy="250" r="85" fill="none" stroke="url(#zellioGradient)" strokeWidth="1.5" animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "250px 250px" }} />
                  <circle cx="250" cy="250" r="28" fill="none" stroke="url(#zellioGradient)" strokeWidth="2" />
                  {[0,60,120,180,240,300].map(deg => (
                    <motion.circle key={deg} cx={250 + 180 * Math.cos(deg*Math.PI/180)} cy={250 + 180 * Math.sin(deg*Math.PI/180)} r="10" fill="none" stroke="url(#zellioGradient)" strokeWidth="1.5" animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 3, repeat: Infinity, delay: deg/120 }} style={{ transformOrigin: `${250 + 180 * Math.cos(deg*Math.PI/180)}px ${250 + 180 * Math.sin(deg*Math.PI/180)}px` }} />
                  ))}
                </>
              ) : service.id === 13 ? (
                /* ID 13 — UI/UX Design: Color swatches + layout guides */
                <>
                  <rect x="80" y="80" width="160" height="200" rx="10" fill="none" stroke="url(#zellioGradient)" strokeWidth="1.5" />
                  <rect x="260" y="80" width="160" height="90" rx="10" fill="none" stroke="url(#zellioGradient)" strokeWidth="1.5" />
                  <rect x="260" y="185" width="160" height="95" rx="10" fill="none" stroke="url(#zellioGradient)" strokeWidth="1.5" />
                  <rect x="80" y="295" width="100" height="100" rx="50" fill="none" stroke="url(#zellioGradient)" strokeWidth="1.5" />
                  <rect x="195" y="295" width="100" height="100" rx="50" fill="none" stroke="url(#zellioGradient)" strokeWidth="1.5" />
                  <rect x="310" y="295" width="100" height="100" rx="50" fill="none" stroke="url(#zellioGradient)" strokeWidth="1.5" />
                  <path d="M 250 60 L 250 440" fill="none" stroke="url(#zellioGradient)" strokeWidth="0.5" strokeDasharray="4 4" />
                  <path d="M 60 250 L 440 250" fill="none" stroke="url(#zellioGradient)" strokeWidth="0.5" strokeDasharray="4 4" />
                  <motion.circle cx="250" cy="250" r="205" fill="none" stroke="url(#zellioGradient)" strokeWidth="0.4" strokeDasharray="2 7" animate={{ rotate: 360 }} transition={{ duration: 55, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "250px 250px" }} />
                </>
              ) : service.id === 14 ? (
                /* ID 14 — AI & Automation: Neural network nodes */
                <>
                  {[[110,120],[110,250],[110,380],[250,80],[250,200],[250,300],[250,420],[390,140],[390,250],[390,360]].map(([x,y], i) => (
                    <motion.circle key={i} cx={x} cy={y} r="14" fill="none" stroke="url(#zellioGradient)" strokeWidth="1.2" animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }} />
                  ))}
                  {[[110,120,250,80],[110,120,250,200],[110,250,250,200],[110,250,250,300],[110,380,250,300],[110,380,250,420],[250,80,390,140],[250,200,390,140],[250,200,390,250],[250,300,390,250],[250,300,390,360],[250,420,390,360]].map(([x1,y1,x2,y2], i) => (
                    <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="url(#zellioGradient)" strokeWidth="0.6" strokeDasharray="2 4" />
                  ))}
                  <motion.circle cx="250" cy="250" r="210" fill="none" stroke="url(#zellioGradient)" strokeWidth="0.3" strokeDasharray="2 8" animate={{ rotate: 360 }} transition={{ duration: 70, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "250px 250px" }} />
                </>
              ) : (
                /* ID 15 — Cloud Infrastructure: Server rack + orbit */
                <>
                  <rect x="140" y="80" width="220" height="300" rx="8" fill="none" stroke="url(#zellioGradient)" strokeWidth="1.5" />
                  {[0,1,2,3,4,5].map(i => (
                    <rect key={i} x="160" y={100+i*44} width="180" height="28" rx="4" fill="none" stroke="url(#zellioGradient)" strokeWidth="0.8" strokeDasharray="2 3" />
                  ))}
                  {[0,1,2,3,4,5].map(i => (
                    <circle key={i} cx={320} cy={114+i*44} r={6} fill="none" stroke="url(#zellioGradient)" strokeWidth="1" />
                  ))}
                  <path d="M 140 390 L 80 430 L 420 430 L 360 390" fill="none" stroke="url(#zellioGradient)" strokeWidth="1" strokeLinecap="round" />
                  <motion.ellipse cx="250" cy="250" rx="220" ry="80" fill="none" stroke="url(#zellioGradient)" strokeWidth="0.6" strokeDasharray="3 6" animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "250px 250px" }} />
                  <motion.circle cx="250" cy="250" r="200" fill="none" stroke="url(#zellioGradient)" strokeWidth="0.4" strokeDasharray="2 8" animate={{ rotate: -360 }} transition={{ duration: 55, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "250px 250px" }} />
                </>
              )}

              <motion.text 
                fill="url(#zellioGradient)" 
                className="text-[7.5px] font-mono tracking-[0.25em] font-bold"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                style={{ transformOrigin: "250px 250px" }}
              >
                <textPath href="#textCircle" startOffset="0%">
                  ZELLIO DIGITAL ENGINEERING // CREATIVE ARCHITECTURE // COGNITIVE LABS // 
                </textPath>
              </motion.text>
            </svg>
          </motion.div>
        </div>

        <div className="container mx-auto px-6 relative w-full z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="col-span-12 lg:col-span-10 flex flex-col items-start text-left relative z-20 max-w-[1000px]">
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-2.5 px-4 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-widest mb-10 border bg-blue-50/50 backdrop-blur-sm border-blue-100 text-blue-700 shadow-sm transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
                {service.category} Digital Experience
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl sm:text-7xl md:text-[5.5rem] lg:text-[7rem] font-black tracking-tighter mb-10 leading-[0.95] text-slate-900"
              >
                {translatedTitle}
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl md:text-3xl leading-relaxed mb-16 max-w-4xl font-light text-slate-700 opacity-90"
              >
                {translatedDesc}
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap items-center gap-6 w-full sm:w-auto"
              >
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-10 py-5 rounded-full font-bold hover:-translate-y-1 active:translate-y-0 transition-all flex items-center justify-center gap-3 text-base bg-slate-900 hover:bg-slate-800 text-white shadow-xl shadow-slate-900/15"
                >
                  {t("nav.startProject")} <ArrowRight size={18} />
                </a>
              </motion.div>
            </div>

          </div>
        </div>
      </motion.section>
        {/* 02 OVERVIEW — Baunfire/Instrument split with editorial image */}
        <section 
          ref={overviewRef}
          className="relative bg-white text-slate-900 overflow-hidden"
        >
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto py-24 md:py-36">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-20">

                {/* Left column — Label + headline, sticky on scroll */}
                <motion.div 
                  className="lg:col-span-5 flex flex-col justify-start mb-10 lg:mb-0 lg:sticky lg:top-32 lg:self-start"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-blue-600 mb-6 flex items-center gap-4">
                    01 // Vision Standard <div className="w-10 h-[1px] bg-blue-500/30" />
                  </span>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.9] uppercase text-slate-900 mb-8">
                    {language === "id" ? "Merancang Karya Digital yang Bermakna." : "Designed to Captivate. Built to Last."}
                  </h2>
                  {/* Minimal stat bar */}
                  <div className="hidden lg:flex gap-10 mt-4">
                    <div>
                      <span className="block text-3xl font-black text-slate-900 tracking-tighter">150+</span>
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-[0.2em]">{language === "id" ? "Proyek Selesai" : "Projects Done"}</span>
                    </div>
                    <div>
                      <span className="block text-3xl font-black text-slate-900 tracking-tighter">99%</span>
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-[0.2em]">{language === "id" ? "Klien Puas" : "Client Satisfaction"}</span>
                    </div>
                  </div>
                </motion.div>

                {/* Right column — Editorial image + text */}
                <div className="lg:col-span-7 flex flex-col gap-8">

                  {/* Editorial image — per service */}
                  <motion.div
                    className="w-full aspect-[4/3] overflow-hidden bg-slate-100 relative group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                  >
                    <img
                      src={(() => {
                        const imgMap: Record<number, string> = {
                          // 1 Custom Website — typography / editorial design studio
                          1:  "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200&q=80&fit=crop",
                          // 2 Company Profile — professional team in bright office
                          2:  "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=1200&q=80&fit=crop",
                          // 3 Landing Page — bold print magazine / editorial layout
                          3:  "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=1200&q=80&fit=crop",
                          // 4 E-Commerce — retail store interior, clean shelves
                          4:  "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80&fit=crop",
                          // 5 Custom Web App — whiteboard planning session
                          5:  "https://images.unsplash.com/photo-1531498860502-7c67cf519b9e?w=1200&q=80&fit=crop",
                          // 6 Admin Dashboard — overhead strategy table
                          6:  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&q=80&fit=crop",
                          // 7 Mobile App — person using phone outdoors
                          7:  "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80&fit=crop",
                          // 8 ERP — large open office, team environment
                          8:  "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80&fit=crop",
                          // 9 CRM — meeting room, business conversation
                          9:  "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?w=1200&q=80&fit=crop",
                          // 10 HRIS — HR team, diverse office people
                          10: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80&fit=crop",
                          // 11 Inventory — clean warehouse rows
                          11: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&q=80&fit=crop",
                          // 12 SaaS — glass office building exterior
                          12: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80&fit=crop",
                          // 13 UI/UX — sketching / wireframing on paper
                          13: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=1200&q=80&fit=crop",
                          // 14 AI & Automation — lab / research environment
                          14: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1200&q=80&fit=crop",
                          // 15 Cloud — aerial city infrastructure
                          15: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&q=80&fit=crop",
                        };
                        return imgMap[service.id as number] || imgMap[1];
                      })()}
                      alt={`${service.title} - Vision Standard`}
                      className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-105"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                    {/* Corner label */}
                    <div className="absolute bottom-5 left-6">
                      <span className="text-[9px] font-mono tracking-[0.3em] uppercase text-white/50">{service.category}</span>
                    </div>
                  </motion.div>

                  {/* Description text */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                  >
                    <p className="text-lg md:text-xl font-light leading-relaxed text-slate-600">
                      {language === "id"
                        ? "Kami menolak pendekatan instan. ZELLIO memadukan estetika desain yang manusiawi, interaksi yang kreatif, dan fondasi teknologi mutakhir untuk menciptakan karya digital yang memukau sekaligus berkinerja tinggi."
                        : "We reject template-based models. ZELLIO aggregates breathtaking human-centric aesthetics, creative interactions, and cutting-edge technology foundations to build digital experiences that are both beautiful and incredibly powerful."}
                    </p>
                  </motion.div>

                </div>
              </div>
            </div>
          </div>

          {/* Bottom divider line */}
          <div className="w-full h-px bg-slate-100" />
        </section>

      {/* 03 METHODOLOGY / CREATIVE SPRINTS */}
      <section 
        ref={methodologyRef} 
        className="relative z-20 bg-[#F4F4F5] text-slate-900 overflow-hidden py-24 md:py-32 border-y border-slate-200/60"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 relative">
            
            {/* LEFT COLUMN: Vertical Interactive Stepper */}
            <div className="lg:w-[320px] flex-shrink-0 relative">
              <div className="sticky top-32">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-mono font-bold tracking-widest uppercase mb-6">
                  02 — Our Process
                </span>
                <h3 className="text-4xl sm:text-5xl font-black tracking-tighter leading-[0.95] uppercase mb-10 text-slate-900">
                  {language === "id" ? "Cara Kami Bekerja" : "How We Work"}
                </h3>
                
                {/* Vertical Stepper Tracker */}
                <div className="relative border-l-2 border-slate-200 ml-3 pl-8 flex flex-col gap-8 pb-10">
                  {processPhases.map((phase, idx) => {
                    const isActive = activePhase === idx;
                    return (
                      <div 
                        key={idx}
                        className="relative group cursor-pointer"
                        onMouseEnter={() => setActivePhase(idx)}
                        onClick={() => setActivePhase(idx)}
                      >
                        {/* Connecting Dot */}
                        <div className={`absolute -left-[41px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
                          isActive ? "bg-white border-blue-600 shadow-[0_0_12px_rgba(37,99,235,0.4)]" : "bg-slate-100 border-slate-300 group-hover:border-blue-400 group-hover:scale-110"
                        }`}>
                          {isActive && <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />}
                        </div>

                        <div className="flex flex-col">
                          <span className={`text-[10px] font-mono font-bold tracking-widest transition-colors duration-300 ${
                            isActive ? "text-blue-600" : "text-slate-400 group-hover:text-blue-400"
                          }`}>
                            STEP {String(idx + 1).padStart(2, "0")}
                          </span>
                          <span className={`text-sm sm:text-base font-bold uppercase tracking-tight transition-colors duration-300 mt-1 ${
                            isActive ? "text-slate-900" : "text-slate-500 group-hover:text-slate-700"
                          }`}>
                            {phase.title}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Interactive Visual Card */}
            <div className="flex-1 relative">
               <div className="sticky top-32 w-full">
                 <AnimatePresence mode="wait">
                   <motion.div
                     key={activePhase}
                     initial={{ opacity: 0, y: 15 }}
                     animate={{ opacity: 1, y: 0 }}
                     exit={{ opacity: 0, y: -15 }}
                     transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                     className="flex flex-col justify-center min-h-[320px] md:min-h-[380px] w-full"
                   >
                     {/* Clean Typography Layout */}
                     <div className="py-8 md:py-12 relative flex-grow flex flex-col justify-center px-6 md:px-16 lg:border-l border-slate-300/50">
                       <div className="absolute -bottom-10 right-0 md:right-10 text-[12rem] md:text-[16rem] font-black text-slate-300/30 pointer-events-none select-none tracking-tighter leading-none z-0">
                         {String(activePhase + 1).padStart(2, "0")}
                       </div>
                       
                       <div className="relative z-10">
                         <div className="flex flex-wrap items-center gap-3 mb-6">
                           <span className="px-3 py-1.5 rounded-full bg-blue-50 text-blue-600 text-[10px] font-mono font-bold tracking-[0.15em] uppercase">
                             {processPhases[activePhase].metric}
                           </span>
                           <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                             PHASE {activePhase + 1}
                           </span>
                         </div>
                         
                         <h4 className="text-3xl sm:text-4xl font-black tracking-tighter uppercase text-slate-900 mb-4">
                           {processPhases[activePhase].title}
                         </h4>
                         
                         <p className="text-sm sm:text-base font-light text-slate-600 leading-relaxed max-w-xl">
                           {processPhases[activePhase].detail}
                         </p>
                       </div>
                     </div>
                   </motion.div>
                 </AnimatePresence>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* 04 KEY DELIVERABLES — Arounda-style outcomes grid */}
      <section 
        ref={deliverablesRef}
        className="py-24 md:py-32 relative z-10 bg-slate-50 text-slate-900"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">

            {/* Header */}
            <div className="mb-12 md:mb-16">
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-slate-400 mb-5 block">
                03 — What You Get
              </span>
              <h3 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter text-slate-900 leading-[0.9] uppercase max-w-3xl">
                {language === "id" ? "Hasil Yang Kami Jamin" : "Guaranteed Outcomes"}
              </h3>
            </div>

            {/* Editorial image — per service, Instrument/Baunfire style */}
            <motion.div
              className="w-full h-[300px] md:h-[420px] mb-px overflow-hidden bg-slate-200 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              <img
                src={(() => {
                  const imgMap: Record<number, string> = {
                    // 1 Custom Website — clean desk with notebook & coffee
                    1:  "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&q=80&fit=crop",
                    // 2 Company Profile — modern office corridor
                    2:  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=80&fit=crop",
                    // 3 Landing Page — marketing materials spread out
                    3:  "https://images.unsplash.com/photo-1523289333742-be1143f6b766?w=1200&q=80&fit=crop",
                    // 4 E-Commerce — packaging / unboxing lifestyle
                    4:  "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=1200&q=80&fit=crop",
                    // 5 Custom Web App — team around screen
                    5:  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80&fit=crop",
                    // 6 Admin Dashboard — data reports on table
                    6:  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80&fit=crop",
                    // 7 Mobile App — hands typing on phone
                    7:  "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?w=1200&q=80&fit=crop",
                    // 8 ERP — factory floor / production line
                    8:  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80&fit=crop",
                    // 9 CRM — handshake close-up
                    9:  "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&q=80&fit=crop",
                    // 10 HRIS — people walking in hallway
                    10: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=1200&q=80&fit=crop",
                    // 11 Inventory — organized storage boxes
                    11: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80&fit=crop",
                    // 12 SaaS — rooftop city view
                    12: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&q=80&fit=crop",
                    // 13 UI/UX — color swatches & materials
                    13: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&q=80&fit=crop",
                    // 14 AI — abstract neural connections
                    14: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&q=80&fit=crop",
                    // 15 Cloud — sunset sky with dramatic clouds
                    15: "https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=1200&q=80&fit=crop",
                  };
                  return imgMap[service.id as number] || imgMap[1];
                })()}
                alt={service.title}
                className="w-full h-full object-cover object-center transition-all duration-700 hover:scale-105"
              />
              {/* Subtle overlay for brand consistency */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/20 to-transparent pointer-events-none" />
              {/* Service label */}
              <div className="absolute bottom-6 left-8">
                <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-white/60">{service.category} / {service.title}</span>
              </div>
            </motion.div>

            {/* Outcomes grid — Arounda-style, 2 col */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-slate-200">
              {(deliverablesMap[language as "id" | "en"][service.id as keyof typeof deliverablesMap["en"]] || []).map((item, idx) => {
                const desc = deliverableDescriptions[language as "id" | "en"][service.id as keyof typeof deliverableDescriptions["en"]]?.[idx] || "";
                return (
                  <motion.div
                    key={idx}
                    className="group bg-slate-50 hover:bg-white transition-colors duration-300 p-8 md:p-10 flex flex-col gap-4 cursor-default"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: idx * 0.06 }}
                  >
                    <span className="text-[10px] font-mono text-slate-400 tracking-[0.25em] uppercase">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <h4 className="text-lg md:text-xl font-black tracking-tight text-slate-900 uppercase leading-tight group-hover:text-blue-600 transition-colors duration-300">
                      {item}
                    </h4>
                    {desc && (
                      <p className="text-sm text-slate-500 font-light leading-relaxed">
                        {desc}
                      </p>
                    )}
                  </motion.div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* COOPERATION BENEFITS — Premium Editorial */}
      <section className="relative z-10 bg-stone-100 text-slate-900 overflow-hidden">
        {/* Grain overlay */}
        <div className="absolute inset-0 opacity-40 pointer-events-none" style={{
          backgroundImage: "radial-gradient(circle, rgba(120,113,108,0.2) 1px, transparent 1px)",
          backgroundSize: "28px 28px"
        }} />

        {/* Header area */}
        <div className="border-b border-stone-300/60">
          <div className="container mx-auto px-6 py-20 md:py-28">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7 }}
                className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8"
              >
                <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black tracking-tighter leading-[0.9] text-slate-900 max-w-3xl">
                  {language === "id"
                    ? <>Apa yang Anda <em className="font-serif font-normal italic text-blue-600">dapatkan</em>:</>
                    : <>What you <em className="font-serif font-normal italic text-blue-600">get</em>:</>}
                </h2>
                <p className="text-sm md:text-base text-stone-500 font-light max-w-xs leading-relaxed lg:text-right">
                  {language === "id"
                    ? `Solusi ${service.category} yang dirancang khusus untuk pertumbuhan bisnis jangka panjang.`
                    : `${service.category} solutions engineered for long-term business growth.`}
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Benefits grid — 4 items as full-width editorial rows */}
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto pb-16 md:pb-24">
            {[
              {
                titleEn: "Expertise & Experience",
                titleId: "Keahlian & Pengalaman",
                descEn: `Deep industry knowledge and hands-on experience building robust, scalable ${service.category} systems with modern architecture.`,
                descId: `Pengetahuan industri mendalam dan pengalaman langsung membangun sistem ${service.category} yang tangguh dengan arsitektur modern.`,
                tagsEn: ["Senior-Led Engineers", "Flexible Methodology", "Performance First", "Process Transparency"],
                tagsId: ["Engineer Senior", "Metodologi Fleksibel", "Performa Utama", "Transparansi Proses"],
              },
              {
                titleEn: "Support & Security",
                titleId: "Dukungan & Keamanan",
                descEn: "Continuous monitoring, robust security protocols, and a dedicated team ensuring your system stays stable and protected.",
                descId: "Pemantauan berkelanjutan, protokol keamanan ketat, dan tim khusus yang menjaga sistem Anda tetap stabil dan terlindungi.",
                tagsEn: ["24/7 SLA Support", "Comprehensive Security", "Integration Services", "Scalability & Growth"],
                tagsId: ["Dukungan 24/7 SLA", "Keamanan Komprehensif", "Layanan Integrasi", "Skalabilitas & Pertumbuhan"],
              },
            ].map((block, idx) => (
              <motion.div
                key={idx}
                className="group border-b border-stone-300/60 py-14 md:py-20 flex flex-col lg:flex-row gap-8 lg:gap-20 items-start cursor-default"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                {/* Large number */}
                <div className="flex-shrink-0 lg:w-28">
                  <span className="text-6xl md:text-7xl font-black font-mono text-stone-300 group-hover:text-blue-400 transition-colors duration-500 select-none">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Title + description */}
                <div className="flex-1 max-w-md">
                  <h3 className="text-2xl md:text-3xl font-black tracking-tight text-slate-900 uppercase mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {language === "id" ? block.titleId : block.titleEn}
                  </h3>
                  <p className="text-sm text-stone-500 font-light leading-relaxed">
                    {language === "id" ? block.descId : block.descEn}
                  </p>
                </div>

                {/* Tags list */}
                <div className="flex-1 flex flex-col">
                  {(language === "id" ? block.tagsId : block.tagsEn).map((tag, i) => (
                    <div key={i} className="flex items-center justify-between py-3.5 border-b border-stone-300/50 last:border-0">
                      <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900 transition-colors duration-200">{tag}</span>
                      <ArrowUpRight size={13} className="text-stone-400 group-hover:text-blue-600 transition-colors duration-200 flex-shrink-0" />
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 05 TECHNOLOGY STACKS — Per-service */}
      <section 
        ref={orbitRef}
        className="py-24 md:py-36 relative z-10 bg-[#070d1e] text-white overflow-hidden"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">

            {/* Header — left aligned */}
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16 md:mb-20">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-blue-400 mb-4 block">
                  04 // Tech Stack
                </span>
                <h3 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-white leading-[0.9] uppercase">
                  {language === "id" ? "Teknologi Yang Kami Gunakan" : "Built With"}
                </h3>
              </div>
              <p className="text-sm text-slate-500 font-light max-w-xs leading-relaxed lg:text-right">
                {language === "id"
                  ? "Tech stack yang dipilih secara khusus untuk kebutuhan project ini."
                  : "Tech stack specifically curated for this project type."}
              </p>
            </div>

            {/* Tech icons — per service, with SVG logos */}
            <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-4 sm:gap-5">
              {((): { name: string; svg: React.ReactNode }[] => {
                const svgMap: Record<string, React.ReactNode> = {
                  "React":      <svg className="w-9 h-9 animate-[spin_20s_linear_infinite]" viewBox="-11.5 -10.23174 23 20.46348" fill="none"><circle cx="0" cy="0" r="2.05" fill="#61DAFB"/><g stroke="#61DAFB" strokeWidth="1"><ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/></g></svg>,
                  "Next.js":    <svg className="w-9 h-9" viewBox="0 0 180 180" fill="none"><mask id="nm" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180"><circle cx="90" cy="90" r="90" fill="white"/></mask><g mask="url(#nm)"><circle cx="90" cy="90" r="90" fill="black"/><path d="M149.508 157.52L69.142 54H54V125.97H66.1391V69.3841L139.86 164.637C143.175 162.557 146.399 160.269 149.508 157.52Z" fill="url(#ng)"/><rect x="115" y="54" width="12" height="72" fill="url(#ng2)"/></g><defs><linearGradient id="ng" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse"><stop stopColor="white"/><stop offset="1" stopColor="white" stopOpacity="0"/></linearGradient><linearGradient id="ng2" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse"><stop stopColor="white"/><stop offset="1" stopColor="white" stopOpacity="0"/></linearGradient></defs></svg>,
                  "TypeScript": <svg className="w-9 h-9" viewBox="0 0 400 400" fill="none"><rect width="400" height="400" fill="#3178C6" rx="8"/><path d="M87.3 287.7v-28.6c7.4 3.8 16.2 6.7 25.1 8.3 8.9 1.6 17.5 2.4 25.9 2.4 4.2 0 8.1-.3 11.7-.9 3.6-.6 6.7-1.5 9.2-2.8 2.5-1.3 4.5-3 5.9-5.1 1.4-2.1 2.1-4.7 2.1-7.7 0-3.7-1.1-6.9-3.2-9.7-2.1-2.7-5-5.1-8.5-7.3-3.5-2.1-7.5-4.1-12-5.9-4.5-1.8-9.2-3.7-14.1-5.7-13.3-5.3-23.2-12-29.7-20-6.5-8-9.7-17.8-9.7-29.4 0-9 1.9-16.8 5.8-23.3 3.8-6.5 9-11.8 15.5-15.9 6.5-4.1 14-7.1 22.4-9.1 8.4-2 17.3-3 26.5-3 9.6 0 18.1.7 25.4 2.1 7.4 1.4 14 3.1 20 5.1v27.6c-5.8-3-12-5.3-18.7-6.9-6.7-1.6-13.4-2.4-20.3-2.4-3.9 0-7.6.4-11.2 1.1-3.5.7-6.6 1.8-9.2 3.3-2.6 1.5-4.7 3.3-6.2 5.5-1.5 2.2-2.3 4.8-2.3 7.9 0 3.2.9 6 2.7 8.4 1.8 2.4 4.3 4.5 7.5 6.5 3.2 2 7 3.8 11.3 5.6 4.3 1.8 9 3.6 14.1 5.6 6.8 2.7 13 5.6 18.6 8.7 5.6 3.1 10.5 6.7 14.5 10.7 4 4 7.1 8.7 9.4 14 2.2 5.3 3.3 11.5 3.3 18.5 0 9.7-2 17.9-6 24.5-4 6.6-9.4 12-16.2 16.1-6.8 4.2-14.6 7.2-23.5 9-8.9 1.8-18.2 2.7-27.9 2.7-10 0-19.3-.9-27.7-2.6-8.5-1.7-16-4.1-22.3-7.4zM220 159.7h50.1v131.3h31.5V159.7H352v-25.4H220v25.4z" fill="white"/></svg>,
                  "Node.js":    <svg className="w-9 h-9" viewBox="0 0 512 512" fill="none"><path d="M256 0L464 120V360L256 480L48 360V120L256 0Z" fill="#333"/><path d="M256 90V230L370 296V156L256 90Z" fill="#68A063"/><path d="M142 156V296L256 230V90L142 156Z" fill="#8CC84B"/><path d="M256 230L142 296L256 362V230Z" fill="#43853D"/><path d="M256 230V362L370 296L256 230Z" fill="#68A063"/></svg>,
                  "PostgreSQL": <svg className="w-9 h-9" viewBox="0 0 60 60" fill="none"><ellipse cx="30" cy="12" rx="18" ry="8" fill="#336791"/><rect x="12" y="12" width="36" height="28" fill="#336791"/><ellipse cx="30" cy="40" rx="18" ry="8" fill="#336791"/><ellipse cx="30" cy="12" rx="18" ry="8" fill="#2c6e9e"/><path d="M12 20 Q12 28 30 28 Q48 28 48 20" stroke="#2c6e9e" strokeWidth="1.5" fill="none"/><path d="M12 30 Q12 38 30 38 Q48 38 48 30" stroke="#2c6e9e" strokeWidth="1.5" fill="none"/><ellipse cx="30" cy="12" rx="14" ry="5" fill="none" stroke="white" strokeWidth="1" opacity="0.3"/></svg>,
                  "Docker":     <svg className="w-9 h-9" viewBox="0 0 200 200" fill="none"><rect x="20" y="80" width="30" height="24" rx="3" fill="#0db7ed"/><rect x="55" y="80" width="30" height="24" rx="3" fill="#0db7ed"/><rect x="90" y="80" width="30" height="24" rx="3" fill="#0db7ed"/><rect x="55" y="50" width="30" height="24" rx="3" fill="#0db7ed"/><rect x="90" y="50" width="30" height="24" rx="3" fill="#0db7ed"/><rect x="90" y="20" width="30" height="24" rx="3" fill="#0db7ed"/><path d="M130 92 C140 85 155 88 158 100 C165 98 175 104 172 115 H45 C35 115 30 102 45 95 C42 78 60 72 65 82" fill="#0db7ed" opacity="0.6"/><line x1="158" y1="100" x2="158" y2="88" stroke="#0db7ed" strokeWidth="3"/></svg>,
                  "Python":     <svg className="w-9 h-9" viewBox="0 0 110 110" fill="none"><path d="M54.2 8C33.1 8 34.8 17.1 34.8 17.1L34.9 26.5H54.7V29.3H27.1C27.1 29.3 14 30.7 14 51C14 71.3 25.6 70.1 25.6 70.1H32.5V60.4C32.5 60.4 32.1 48.7 43.9 48.7H62.7V62.7C62.7 62.7 73.8 62.5 73.8 42C73.8 21.5 66.8 21.6 66.8 21.6H60L60 17.1C60 17.1 60.7 8 54.2 8Z" fill="#3776AB"/><path d="M55.8 102C76.9 102 75.2 92.9 75.2 92.9L75.1 83.5H55.3V80.7H82.9C82.9 80.7 96 79.3 96 59C96 38.7 84.4 39.9 84.4 39.9H77.5V49.6C77.5 49.6 77.9 61.3 66.1 61.3H47.3V47.3C47.3 47.3 36.2 47.5 36.2 68C36.2 88.5 43.2 88.4 43.2 88.4H50L50 92.9C50 92.9 49.3 102 55.8 102Z" fill="#FFD43B"/></svg>,
                  "AWS":        <svg className="w-9 h-9" viewBox="0 0 80 80" fill="none"><path d="M24 48 C16 48 10 42 10 34 C10 27 15 22 22 21 C22 12 29 6 38 6 C46 6 52 11 54 18 C58 18 64 22 64 28 C64 34 59 38 53 38 H24 Z" fill="#FF9900" opacity="0.8"/><path d="M15 58 L25 52 L35 60 L45 52 L55 58" stroke="#FF9900" strokeWidth="3" strokeLinecap="round" fill="none"/><path d="M20 65 L30 59 L40 67 L50 59 L60 65" stroke="#FF9900" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.5"/></svg>,
                  "Redis":      <svg className="w-9 h-9" viewBox="0 0 80 80" fill="none"><ellipse cx="40" cy="55" rx="32" ry="10" fill="#D82C20"/><rect x="8" y="25" width="64" height="30" fill="#D82C20"/><ellipse cx="40" cy="25" rx="32" ry="10" fill="#FF6B6B"/><ellipse cx="40" cy="25" rx="24" ry="6" fill="#FF9999" opacity="0.5"/><path d="M25 38 L40 32 L55 38 L40 44 Z" fill="white" opacity="0.6"/></svg>,
                  "Flutter":    <svg className="w-9 h-9" viewBox="0 0 200 200" fill="none"><polygon points="100,20 175,100 137,100" fill="#54C5F8"/><polygon points="100,20 62,100 25,62" fill="#01579B" opacity="0.9"/><polygon points="62,100 137,100 100,138" fill="#29B6F6"/><polygon points="100,138 137,100 175,138 138,175" fill="#01579B"/></svg>,
                  "Firebase":   <svg className="w-9 h-9" viewBox="0 0 200 200" fill="none"><path d="M40 160 L80 60 L110 110 Z" fill="#F57C00"/><path d="M80 60 L110 110 L160 40 Z" fill="#FFCA28"/><path d="M40 160 L110 110 L160 40 L140 130 Z" fill="#FFA000"/><path d="M40 160 L140 130 L160 160 Z" fill="#F57C00" opacity="0.7"/></svg>,
                  "Figma":      <svg className="w-9 h-9" viewBox="0 0 38 57" fill="none"><path d="M19 28.5C19 25.468 21.468 23 24.5 23C27.532 23 30 25.468 30 28.5C30 31.532 27.532 34 24.5 34C21.468 34 19 31.532 19 28.5Z" fill="#1ABCFE"/><path d="M8 39.5C8 36.468 10.468 34 13.5 34H19V39.5C19 42.532 16.532 45 13.5 45C10.468 45 8 42.532 8 39.5Z" fill="#0ACF83"/><path d="M19 6V17H24.5C27.532 17 30 14.532 30 11.5C30 8.468 27.532 6 24.5 6H19Z" fill="#FF7262"/><path d="M8 11.5C8 14.532 10.468 17 13.5 17H19V6H13.5C10.468 6 8 8.468 8 11.5Z" fill="#F24E1E"/><path d="M8 22.5C8 25.532 10.468 28 13.5 28H19V17H13.5C10.468 17 8 19.468 8 22.5Z" fill="#FF7262"/></svg>,
                  "Stripe":     <svg className="w-9 h-9" viewBox="0 0 80 80" fill="none"><rect width="80" height="80" rx="12" fill="#635BFF"/><path d="M35.2 32.8C35.2 30.2 37.4 29.2 41 29.2C46.4 29.2 53.2 30.8 58 33.2V22.4C53 20.4 48 19.6 41 19.6C29 19.6 21 25.8 21 35.6C21 51.2 41.4 48.8 41.4 55.6C41.4 58.6 38.8 59.6 35.2 59.6C29.4 59.6 22 57.2 16.6 54.4V65.2C22.6 67.6 28.8 68.4 35.2 68.4C47.4 68.4 56 62.4 56 52.4C56 35.4 35.2 38.4 35.2 32.8Z" fill="white"/></svg>,
                  "GraphQL":    <svg className="w-9 h-9" viewBox="0 0 400 400" fill="none"><circle cx="200" cy="50" r="28" fill="#E535AB"/><circle cx="200" cy="350" r="28" fill="#E535AB"/><circle cx="50" cy="140" r="28" fill="#E535AB"/><circle cx="350" cy="140" r="28" fill="#E535AB"/><circle cx="50" cy="260" r="28" fill="#E535AB"/><circle cx="350" cy="260" r="28" fill="#E535AB"/><circle cx="200" cy="200" r="40" stroke="#E535AB" strokeWidth="20" fill="none"/><line x1="200" y1="78" x2="200" y2="160" stroke="#E535AB" strokeWidth="16"/><line x1="200" y1="240" x2="200" y2="322" stroke="#E535AB" strokeWidth="16"/><line x1="72" y1="155" x2="165" y2="185" stroke="#E535AB" strokeWidth="16"/><line x1="235" y1="215" x2="328" y2="245" stroke="#E535AB" strokeWidth="16"/><line x1="72" y1="245" x2="165" y2="215" stroke="#E535AB" strokeWidth="16"/><line x1="235" y1="185" x2="328" y2="155" stroke="#E535AB" strokeWidth="16"/></svg>,
                  "Kubernetes": <svg className="w-9 h-9" viewBox="0 0 200 200" fill="none"><circle cx="100" cy="100" r="90" fill="#326CE5" opacity="0.15" stroke="#326CE5" strokeWidth="2"/><circle cx="100" cy="20" r="10" fill="#326CE5"/><circle cx="173" cy="60" r="10" fill="#326CE5"/><circle cx="173" cy="140" r="10" fill="#326CE5"/><circle cx="100" cy="180" r="10" fill="#326CE5"/><circle cx="27" cy="140" r="10" fill="#326CE5"/><circle cx="27" cy="60" r="10" fill="#326CE5"/><line x1="100" y1="30" x2="100" y2="70" stroke="#326CE5" strokeWidth="3"/><line x1="163" y1="65" x2="130" y2="82" stroke="#326CE5" strokeWidth="3"/><line x1="163" y1="135" x2="130" y2="118" stroke="#326CE5" strokeWidth="3"/><line x1="100" y1="170" x2="100" y2="130" stroke="#326CE5" strokeWidth="3"/><line x1="37" y1="135" x2="70" y2="118" stroke="#326CE5" strokeWidth="3"/><line x1="37" y1="65" x2="70" y2="82" stroke="#326CE5" strokeWidth="3"/><circle cx="100" cy="100" r="22" stroke="#326CE5" strokeWidth="3" fill="none"/></svg>,
                  "Vercel":     <svg className="w-9 h-9" viewBox="0 0 200 200" fill="none"><polygon points="100,20 185,175 15,175" fill="white"/></svg>,
                  "Tailwind":   <svg className="w-9 h-9" viewBox="0 0 54 33" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M27 0C19.8 0 15.3 3.6 13.5 10.8C16.2 7.2 19.35 5.85 22.95 6.75C25.004 7.263 26.472 8.754 28.097 10.403C30.744 13.09 33.808 16.2 40.5 16.2C47.7 16.2 52.2 12.6 54 5.4C51.3 9 48.15 10.35 44.55 9.45C42.496 8.937 41.028 7.446 39.403 5.797C36.756 3.11 33.692 0 27 0ZM13.5 16.2C6.3 16.2 1.8 19.8 0 27C2.7 23.4 5.85 22.05 9.45 22.95C11.504 23.463 12.972 24.954 14.597 26.603C17.244 29.29 20.308 32.4 27 32.4C34.2 32.4 38.7 28.8 40.5 21.6C37.8 25.2 34.65 26.55 31.05 25.65C28.996 25.137 27.528 23.646 25.903 21.997C23.256 19.31 20.192 16.2 13.5 16.2Z" fill="#38BDF8"/></svg>,
                  "OpenAI API": <svg className="w-9 h-9" viewBox="0 0 200 200" fill="none"><circle cx="100" cy="100" r="80" stroke="white" strokeWidth="8" fill="none" opacity="0.8"/><path d="M100 35 L135 65 L135 100 L100 130 L65 100 L65 65 Z" stroke="white" strokeWidth="5" fill="none"/><circle cx="100" cy="100" r="18" fill="white" opacity="0.6"/></svg>,
                };
                const perService: Record<number, string[]> = {
                  1:  ["React","Next.js","TypeScript","Tailwind","PostgreSQL","Vercel","Docker","GraphQL"],
                  2:  ["Next.js","React","Tailwind","PostgreSQL","Vercel","TypeScript","Docker","GraphQL"],
                  3:  ["Next.js","React","Tailwind","TypeScript","Vercel","PostgreSQL","Docker","GraphQL"],
                  4:  ["Next.js","Node.js","Stripe","PostgreSQL","Redis","Docker","TypeScript","GraphQL"],
                  5:  ["React","Next.js","Node.js","PostgreSQL","GraphQL","Docker","AWS","Redis"],
                  6:  ["React","Node.js","PostgreSQL","Redis","GraphQL","Docker","AWS","TypeScript"],
                  7:  ["Flutter","Firebase","React","Node.js","PostgreSQL","Redis","Docker","GraphQL"],
                  8:  ["React","Node.js","PostgreSQL","Redis","Docker","Kubernetes","AWS","GraphQL"],
                  9:  ["React","Node.js","PostgreSQL","Redis","Docker","TypeScript","GraphQL","AWS"],
                  10: ["React","Node.js","PostgreSQL","Redis","Docker","TypeScript","GraphQL","AWS"],
                  11: ["React","Node.js","PostgreSQL","Redis","Docker","TypeScript","GraphQL","AWS"],
                  12: ["Next.js","Node.js","PostgreSQL","Stripe","Redis","Docker","Kubernetes","AWS"],
                  13: ["Figma","React","Next.js","Tailwind","TypeScript","Vercel","Docker","GraphQL"],
                  14: ["Python","OpenAI API","Node.js","PostgreSQL","Docker","AWS","Redis","GraphQL"],
                  15: ["Docker","Kubernetes","AWS","Redis","PostgreSQL","GraphQL","Node.js","TypeScript"],
                };
                const names = perService[service.id as number] || perService[1];
                return names.map(n => ({ name: n, svg: svgMap[n] || <span className="text-lg font-black text-blue-400">{n[0]}</span> }));
              })().map((tech, idx) => (
                <motion.div
                  key={idx}
                  className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-blue-500/30 hover:bg-white/[0.06] transition-all duration-300 cursor-default gap-3 group"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.06 }}
                  whileHover={{ y: -5, scale: 1.04 }}
                >
                  <div className="w-12 h-12 flex items-center justify-center">
                    {tech.svg}
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 tracking-wide group-hover:text-blue-400 transition-colors duration-200 text-center leading-tight">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Bottom note */}
            <div className="mt-12 pt-8 border-t border-slate-800/50">
              <p className="text-[11px] font-mono text-slate-600 tracking-wide uppercase">
                {language === "id"
                  ? "Stack disesuaikan berdasarkan kebutuhan proyek. Konsultasikan kebutuhan Anda."
                  : "Stack tailored per project requirements. Consult us for your specific needs."}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 06 CTA BANNER (Work With Us) */}
      <section className="relative z-10 bg-[#eff6ff] py-24 md:py-32 overflow-hidden border-t border-slate-200/80 w-full">
        <div className="container mx-auto px-6">
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-11 lg:col-span-9 flex flex-col items-start">
              <span className="text-[10px] md:text-xs font-mono font-bold tracking-[0.3em] uppercase text-blue-600 mb-6 flex items-center gap-4">
                Work With Us <div className="w-12 h-[1px] bg-blue-500/20" />
              </span>
              
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-slate-900 mb-10 leading-[1.1]">
                {language === "id" ? "Mari bekerja sama untuk membangun sesuatu yang " : "Let's work together to build something "}
                <span className="font-serif italic font-medium">great.</span>
              </h2>
              
              <Link 
                href="/contact"
                className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-blue-600 text-white font-bold tracking-wide hover:bg-blue-500 hover:scale-105 transition-all duration-300 shadow-xl shadow-blue-900/10 group/btn"
              >
                <span className="text-sm">SAY HELLO</span>
                <div className="w-2 h-2 rounded-full bg-white group-hover/btn:animate-ping" />
              </Link>
            </div>

            <div className="md:col-span-1 lg:col-span-3 hidden md:flex justify-end items-end h-full">
              <div className="transform rotate-90 origin-bottom-right flex items-center gap-4 opacity-40 text-slate-500 text-[10px] font-mono tracking-[0.3em] whitespace-nowrap">
                <div className="w-16 h-[1px] bg-slate-300" />
                SCROLL
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </motion.main>
  );
}
