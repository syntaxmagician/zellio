// ============================================================
// ZELLIO – IT Services & Digital Agency Site Data
// ============================================================

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Why Us", href: "/#why-choose" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

export const stats = [
  { value: 4, suffix: "+", label: "Core Tech Stacks" },
  { value: 12, suffix: "+", label: "Production Systems" },
  { value: 5, suffix: "", label: "Dedicated Engineers" },
  { value: 3, suffix: "+", label: "Years Experience" },
];

export const missionItems = [
  {
    icon: "Target",
    title: "Client-Centric Solutions",
    description:
      "We design and build every system tailored specifically to your business flow and strategic requirements.",
  },
  {
    icon: "Globe",
    title: "Global Coding Standards",
    description:
      "Our team adheres to strict international coding standards, ensuring highly clean, maintainable, and scalable codebases.",
  },
  {
    icon: "Award",
    title: "High-Performance Systems",
    description:
      "We don't settle for slow. We build custom websites, dashboards, and scalable platforms optimized for speed and high traffic.",
  },
  {
    icon: "Users",
    title: "Expert Tech Engineers",
    description:
      "Our team consists of full-stack developers, UI/UX designers, and technical specialists working dedicatedly on each project.",
  },
  {
    icon: "TrendingUp",
    title: "Continuous Tech Innovation",
    description:
      "We constantly adopt the latest tech stacks and security patches to keep your digital infrastructure ahead of competitors.",
  },
];

export const servicesData = [
  {
    id: 1,
    category: "Website",
    icon: "Monitor",
    title: "Custom Website Development",
    description: "Kami merancang website profesional yang elegan dan super cepat untuk membantu bisnis Anda tampil memukau di dunia digital.",
    duration: "4-6 Weeks",
    level: "Premium",
    color: "#2563EB",
    bgColor: "#FFEBEA",
    heroMedia: { type: "image" as const, url: "/hero/service_custom_web.jpg" }
  },
  {
    id: 2,
    category: "Website",
    icon: "Globe",
    title: "Company Profile Website",
    description: "Kesan pertama itu penting. Kami bantu merangkum identitas perusahaan Anda menjadi sebuah website yang profesional dan tepercaya.",
    duration: "3-5 Weeks",
    level: "Premium",
    color: "#2563EB",
    bgColor: "#FFEBEA",
    heroMedia: { type: "image" as const, url: "/hero/service_company_profile.jpg" }
  },
  {
    id: 4,
    category: "Website",
    icon: "ShoppingBag",
    title: "E-Commerce Development",
    description: "Toko online milik Anda sendiri, lengkap dengan fitur pembayaran otomatis, penghitungan ongkos kirim, dan manajemen stok yang rapi.",
    duration: "6-10 Weeks",
    level: "Production",
    color: "#ec4899",
    bgColor: "#fce7f3",
    heroMedia: { type: "image" as const, url: "/hero/service_ecommerce.jpg" }
  },
  {
    id: 7,
    category: "Mobile",
    icon: "Smartphone",
    title: "Mobile App Development",
    description: "Aplikasi mobile responsif untuk iOS dan Android yang tidak hanya terlihat bagus, tapi juga sangat nyaman saat digunakan.",
    duration: "8-12 Weeks",
    level: "Premium",
    color: "#10b981",
    bgColor: "#d1fae5",
    heroMedia: { type: "image" as const, url: "/hero/service_mobile_app.jpg" }
  },
  {
    id: 8,
    category: "System",
    icon: "Database",
    title: "ERP System Development",
    description: "Sistem pusat yang cerdas untuk menghubungkan keuangan, inventaris, dan operasional harian dalam satu platform terintegrasi.",
    duration: "12-24 Weeks",
    level: "Production",
    color: "#dc2626",
    bgColor: "#fee2e2",
    heroMedia: { type: "image" as const, url: "/hero/service_erp.jpg" }
  },
  {
    id: 9,
    category: "System",
    icon: "Users",
    title: "CRM System Development",
    description: "Sistem manajemen agar tim sales Anda dapat melacak prospek dan berinteraksi dengan pelanggan secara lebih terorganisir.",
    duration: "8-16 Weeks",
    level: "Production",
    color: "#4f46e5",
    bgColor: "#e0e7ff",
    heroMedia: { type: "image" as const, url: "/hero/service_crm.jpg" }
  },
  {
    id: 10,
    category: "System",
    icon: "UserCheck",
    title: "HRIS & Payroll System",
    description: "Sistem HR modern untuk menyederhanakan manajemen absensi, pengaturan cuti, hingga pendistribusian slip gaji bulanan.",
    duration: "10-18 Weeks",
    level: "Production",
    color: "#06b6d4",
    bgColor: "#cffafe",
    heroMedia: { type: "image" as const, url: "/hero/service_hris.jpg" }
  },
  {
    id: 12,
    category: "SaaS",
    icon: "Cpu",
    title: "SaaS Platform Development",
    description: "Pengembangan platform SaaS menyeluruh, mencakup sistem pembayaran berlangganan yang aman dan arsitektur pengguna yang andal.",
    duration: "12-20 Weeks",
    level: "Production",
    color: "#a855f7",
    bgColor: "#f3e8ff",
    heroMedia: { type: "image" as const, url: "/hero/service_saas.jpg" }
  }
];

// Fallback export to prevent broken imports during refactoring
export const trainingPrograms = servicesData;

export const whyChooseItems = [
  {
    icon: "Code2",
    title: "Dedicated Engineers",
    description:
      "Our developers write clean, maintainable, and well-documented code using modern React, Node, and TypeScript ecosystems.",
    color: "#2563EB",
    bgColor: "#FFEBEA",
  },
  {
    icon: "Cpu",
    title: "Cutting-Edge Tech Stack",
    description:
      "We build on fast, lightweight frameworks like Next.js, TailwindCSS, Node.js, and Postgres to ensure peak performance.",
    color: "#06B6D4",
    bgColor: "#CFFAFE",
  },
  {
    icon: "ShieldAlert",
    title: "Robust Security Standards",
    description:
      "We implement data encryption, secure auth (OAuth/JWT), sanitization, and run security tests before final deployment.",
    color: "#22C55E",
    bgColor: "#DCFCE7",
  },
  {
    icon: "CalendarCheck",
    title: "Agile & On-Time Delivery",
    description:
      "We deliver in milestones using Scrum methodologies, giving you full visibility and ensuring we launch on schedule.",
    color: "#8B5CF6",
    bgColor: "#EDE9FE",
  },
];

export const developmentProcess = [
  {
    step: 1,
    title: "Consultation & Discovery",
    description: "Understand your business requirements, user persona, and technical scope.",
    icon: "MessageSquare",
  },
  {
    step: 2,
    title: "UI/UX Design",
    description: "Create interactive Figma prototypes and custom wireframes for your approval.",
    icon: "Palette",
  },
  {
    step: 3,
    title: "Development",
    description: "Agile sprints of clean coding, frontend building, and robust backend integrations.",
    icon: "Code2",
  },
  {
    step: 4,
    title: "QA & Testing",
    description: "Rigorous performance, security, responsive, and cross-browser testing.",
    icon: "ClipboardCheck",
  },
  {
    step: 5,
    title: "Deployment & Support",
    description: "Cloud deployment, SEO optimization, and 3 months of free maintenance support.",
    icon: "Award",
  },
];

// Fallback export
export const learningSteps = developmentProcess;

export const testimonials = [
  {
    quote_en: "Before, during peak seasons like Eid and TAB, our warehouse team struggled with manual courier routing. With Zellio's tracking system, driver routes are clustered automatically. It really cut down our sorting time.",
    quote_id: "Dulu pas volume paket naik pas Lebaran dan TAB, tim gudang pusing bagi rute kurir manual. Pas pakai sistem live tracking dari Zellio, rute kurir langsung ke-cluster otomatis. Jujur, ngebantu banget motong waktu sortir barang.",
    name: "Muhammad Kamalluki",
    company: "RACE Raja Cepat",
  },
  {
    quote_en: "We expected integrating this dashboard with our legacy Odoo core to be buggy and complex. But the Zellio team handled the middleware flawlessly. Vendor PO invoicing, which used to be a manual mess, now syncs automatically with zero errors.",
    quote_id: "Integrasi dashboard ini sama core Odoo lama kami awalnya kami kira bakal ribet dan banyak bug. Tapi tim Zellio rapi banget ngerjain middleware-nya. Sekarang invoice PO vendor yang tadinya manual ribet, langsung ke-sync otomatis tanpa selisih angka.",
    name: "Ahmad Husaini",
    company: "Eureka Group",
  },
  {
    quote_en: "Speed is everything in online travel booking. Our old site lagged when fetching airline API data. After Zellio rebuilt it with Redis caching, ticket searches became extremely fast. Users no longer drop off due to slow loading.",
    quote_id: "Sistem booking travel online itu kuncinya di speed pencarian tiket. Web lama kami sering lambat pas narik data API maskapai. Setelah di-rebuild sama Zellio pakai sistem cache Redis, loading search tiket jauh lebih responsif. User gak kabur lagi karena nunggu lama.",
    name: "Alan Dandi Siregar",
    company: "MasterDiskon",
  },
  {
    quote_en: "We needed a lightweight educational landing page that still looks clean and professional. The water intake calculator has been a huge hit with our users. The team was highly responsive with content updates.",
    quote_id: "Kita butuh landing page edukatif yang enteng tapi desainnya tetep keliatan bersih dan profesional medis. Fitur kalkulator minum airnya disukain banget sama user. Tim kerjanya gesit, responsif tiap ada revisi konten.",
    name: "Astri Novianti",
    company: "Batugin",
  },
  {
    quote_en: "Our biggest challenge was driver battery drain from background GPS tracking. Zellio's React Native optimization fixed this, keeping battery usage low and geofencing order dispatch highly accurate.",
    quote_id: "Tantangan terbesar kami itu baterai driver boros gara-gara GPS tracking di background. Aplikasi buatan Zellio ini optimal banget di React Native, konsumsi baterai driver aman, dan order dispatch geofencing-nya presisi.",
    name: "Aji Darusdi Pramana",
    company: "Beego SuperApp",
  },
  {
    quote_en: "I was hesitant to build a custom e-menu fearing it wouldn't sync with our kitchen printers. Zellio built a seamless WebSocket bridge. Now, web orders instantly trigger the kitchen printer.",
    quote_id: "Awalnya ragu bikin e-menu sendiri karena takut gak ke-print otomatis di dapur kasir. Zellio bikin sistem bridge-nya lancar banget. Orderan masuk dari web, printer kasir langsung bunyi cetak struk otomatis.",
    name: "Ester Damayanti",
    company: "Warung BungaPagi",
  },
  {
    quote_en: "During major sales, our server often crashed at checkout due to inventory race conditions. Zellio helped us refactor our database architecture using MongoDB transactions. Now, mass checkouts go smoothly with zero inventory errors.",
    quote_id: "Dulu pas promo gede-gedean, server kita sering down pas checkout gara-gara bentrok stok barang. Tim Zellio bantuin beresin arsitektur database-nya pakai MongoDB transaction. Sekarang checkout massal jalan lancar tanpa ada error stok minus lagi.",
    name: "Reza Pahlevi",
    company: "Jaja ID",
  },
  {
    quote_en: "The biggest pain on our old site was displaying side-by-side car spec comparisons. The layout frequently broke on mobile. Zellio's dashboard and catalog design are extremely neat, and the credit simulator is simple for buyers to use.",
    quote_id: "Masalah paling ribet di website lama kami itu pas nampilin spesifikasi mobil yang mau dibandingin secara side-by-side. Layoutnya sering berantakan di mobile. Desain dashboard dan katalog dari Zellio rapi banget, dan simulator kreditnya gampang dipake sama pembeli.",
    name: "Hendry Tan",
    company: "Jaja Auto",
  },
  {
    quote_en: "A law firm website must project high authority and professionalism. Zellio captured this perfectly with a clean, modern-minimalist design. The consultation calendar integrated with our Google Calendar has cut scheduling conflicts.",
    quote_id: "Website firma hukum harus bisa nunjukkin wibawa dan profesionalitas tinggi. Zellio dapet banget feel-nya dengan visual minimalis-modern. Kalender booking jadwal konsultasi yang diintegrasiin sama Google Calendar kami juga memangkas tabrakan agenda klien.",
    name: "Marcus Campos, S.H., LL.M.",
    company: "Campos Law Firm",
  },
  {
    quote_en: "Our B2B clients are thrilled they no longer need to email back and forth for invoices or container status updates. They can download shipment data directly through this portal. It has greatly relieved our customer service team.",
    quote_id: "Klien-klien B2B kami seneng banget sekarang gak perlu bolak-balik kirim email buat minta invoice atau update posisi kontainer. Semua data pengiriman bisa langsung mereka unduh mandiri lewat portal ini. Tim CS kami sangat terbantu.",
    name: "Bambang Sugiharto",
    company: "Eureka Logistics Portal",
  },
  {
    quote_en: "Calculating PPh 21 and BPJS taxes for thousands of employees at the end of the month was a HR nightmare. Zellio's HR dashboard automates payroll calculations instantly. Plus, salary data encryption gives us peace of mind regarding employee privacy.",
    quote_id: "Menghitung PPh 21 dan BPJS ribuan karyawan tiap akhir bulan dulunya adalah mimpi buruk tim HR. Dasbor HR buatan Zellio mengotomatisasi perhitungan payroll secara instan. Plus, enkripsi data gajinya bikin kami ngerasa aman soal privasi karyawan.",
    name: "Niken Ayu Lestari",
    company: "HR Management CMS",
  },
  {
    quote_en: "Tutor video calls used to disconnect when a student's internet slowed down in remote areas. Zellio's WebRTC classroom module is highly adaptive, automatically lowering video resolution while keeping audio clear. The payment escrow system is also secure for mentors.",
    quote_id: "Video call bimbingan belajar sering keputus kalau koneksi internet siswa di daerah lemot. Modul kelas virtual WebRTC dari Zellio adaptif banget, resolusi turun otomatis tapi suara tetep jernih. Sistem escrow pembayarannya juga aman buat mentor.",
    name: "Arief Rahman",
    company: "Guruino",
  },
  {
    quote_en: "Watching together is no fun if the video is out of sync. The WebSockets built by Zellio sync down to the video frame, so everyone in the room watches the same scene in real-time. The live chat doesn't lag even under heavy load.",
    quote_id: "Nonton bareng tapi video gak sinkron itu gak seru banget. WebSocket yang dibikin Zellio presisi sampai ke tingkat frame video, jadi semua orang di room nonton adegan yang sama secara real-time. Chat-nya juga gak nge-lag pas lagi rame.",
    name: "Davin Alamsyah",
    company: "NontonKuy",
  },
];
