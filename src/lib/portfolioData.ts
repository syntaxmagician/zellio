export type ProjectWorkflowStep = {
  title: string;
  desc: string;
};

export type ProjectImpactItem = {
  title: string;
  desc: string;
};

export type Project = {
  slug: string;
  title: string;
  category: { id: string; en: string };
  type: "Website" | "Internal Dashboard" | "APP";
  desc: { id: string; en: string };
  tags: string[];
  image?: string;
  images?: string[];
  icon: "Globe" | "Smartphone" | "Laptop" | "LineChart";
  accent: string;
  url?: string;
  isPrivate?: boolean;

  // Detailed Section Content
  overview: { id: string; en: string };
  challenges: { id: string[]; en: string[] };
  solutions: { id: string[]; en: string[] };
  workflow: {
    id: ProjectWorkflowStep[];
    en: ProjectWorkflowStep[];
  };
  screenshots: string[];
  impact: {
    id: ProjectImpactItem[];
    en: ProjectImpactItem[];
  };
};

export const projects: Project[] = [
  {
    slug: "palda",
    title: "Palda Solusi Sinergi",
    category: { id: "Teknik Industri & EPC", en: "Industrial Engineering & EPC" },
    type: "Website",
    desc: {
      id: "Website Company Profile korporat resmi untuk PT Palda Solusi Sinergi. Menampilkan kapabilitas teknik industri, layanan EPC komprehensif, inspeksi integritas aset, dan proteksi coating berstandar internasional.",
      en: "Official corporate Company Profile website for PT Palda Solusi Sinergi. Showcasing industrial engineering capabilities, comprehensive EPC services, asset integrity inspection, and protective coating solutions with international standards."
    },
    tags: ["Next.js", "TailwindCSS", "Framer Motion", "SEO Optimization"],
    image: "/palda1.jpeg",
    images: ["/palda1.jpeg", "/palda2.jpeg", "/palda3.jpeg"],
    icon: "Globe",
    accent: "text-amber-600 bg-amber-50 border-amber-100",
    url: "https://paldasolusisinergi.com/our-services/",
    overview: {
      id: "PT Palda Solusi Sinergi adalah perusahaan penyedia solusi rekayasa teknik industri dan EPC (Engineering, Procurement, Construction) yang melayani sektor minyak & gas, manufaktur berat, dan infrastruktur sipil. Untuk memperkuat kredibilitas dalam tender proyek skala besar dan mempermudah klien korporat memahami spektrum layanan menyeluruh, ZELLIO merancang website profil korporat modern berkinerja tinggi. Platform ini mengartikulasikan keahlian teknis perusahaan—mulai dari Mechanical & EPC Services, Asset Integrity & Inspection, Fabrication & Installation, hingga Specialized Coating—dengan arsitektur informasi terstruktur, visualisasi dokumentasi proyek lapangan yang kredibel, serta tata letak responsif yang dirancang untuk mempercepat konversi prospek B2B.",
      en: "PT Palda Solusi Sinergi is an industrial engineering and EPC (Engineering, Procurement, Construction) solutions provider serving critical sectors such as oil & gas, heavy manufacturing, and civil infrastructure. To strengthen credibility in large-scale project tenders and help corporate clients navigate their comprehensive suite of services, ZELLIO engineered a modern, high-performance corporate profile website. The platform articulates the company's technical capabilities—ranging from Mechanical & EPC Services, Asset Integrity & Inspection, Fabrication & Installation, to Specialized Coating—with structured information architecture, robust industrial field project visualization, and a responsive layout tailored for B2B lead conversion."
    },
    challenges: {
      id: [
        "Menyajikan spektrum 8 lini layanan teknik spesifik (EPC, asset integrity, coating, civil infrastructure) agar mudah dipahami pengambil keputusan korporat tanpa mengurangi kedalaman spesifikasi teknis.",
        "Menampilkan dokumentasi proyek lapangan berat (instalasi pipa, pengelasan industri, sandblasting, pengujian NDT) dalam galeri visual beresolusi tinggi dengan kecepatan pemuatan instan.",
        "Menyediakan saluran komunikasi langsung dan formulir RFQ (Request for Quotation) yang intuitif untuk menangani permintaan penawaran proyek industri secara cepat."
      ],
      en: [
        "Presenting a spectrum of 8 specialized technical service lines (EPC, asset integrity, coating, civil infrastructure) in an easily digestible manner for corporate decision-makers without sacrificing technical depth.",
        "Showcasing heavy industrial field project documentation (pipeline installation, industrial welding, sandblasting, NDT testing) in high-resolution visual galleries with instant load speeds.",
        "Providing immediate communication channels and an intuitive RFQ (Request for Quotation) workflow to capture incoming industrial project inquiries rapidly."
      ]
    },
    solutions: {
      id: [
        "Merancang arsitektur navigasi multi-tier yang mengelompokkan portofolio layanan teknis secara intuitif dengan sub-halaman terdedikasi untuk setiap bidang keahlian.",
        "Menerapkan optimasi media Next.js Image dan kompresi WebP adaptif untuk memastikan foto dokumentasi proyek tampil tajam namun tetap ringan diakses.",
        "Mengintegrasikan tombol direct action WhatsApp dan formulir konsultasi cepat yang terhubung langsung ke tim sales engineering Palda Solusi Sinergi."
      ],
      en: [
        "Designing an intuitive multi-tier navigation architecture categorizing technical service lines with dedicated sub-pages for each engineering discipline.",
        "Applying Next.js Image optimization and adaptive WebP compression to ensure field documentation photos remain razor-sharp while loading instantly.",
        "Integrating WhatsApp direct-action buttons and quick inquiry forms connecting prospective corporate clients directly to Palda Solusi Sinergi's sales engineering team."
      ]
    },
    workflow: {
      id: [
        { title: "Konsultasi", desc: "Mendalami profil bisnis industri EPC, portofolio proyek lapangan yang telah diselesaikan, dan kualifikasi tender korporat." },
        { title: "Perencanaan", desc: "Menyusun arsitektur informasi 'Our Services', taksonomi kategori proyek, serta wireframe berbasis konversi B2B." },
        { title: "Development", desc: "Membangun antarmuka modern dengan Next.js, TailwindCSS, dan micro-animation yang mencerminkan standar keunggulan industri." },
        { title: "Quality Assurance", desc: "Audit performa lintas perangkat, optimasi Core Web Vitals, dan validasi form penawaran proyek." },
        { title: "Launch & Support", desc: "Deployment di server cloud andal, konfigurasi SEO industri EPC, dan integrasi analitik pemantauan prospek." }
      ],
      en: [
        { title: "Consultation", desc: "Analyzing the EPC industrial business profile, past completed field project track records, and corporate tender requirements." },
        { title: "Planning", desc: "Structuring the 'Our Services' information architecture, project categorization taxonomy, and B2B conversion-focused wireframes." },
        { title: "Development", desc: "Engineering the modern web interface with Next.js, TailwindCSS, and sleek micro-animations reflecting industrial excellence." },
        { title: "Quality Assurance", desc: "Cross-device responsiveness testing, Core Web Vitals optimization, and project quotation inquiry validation." },
        { title: "Launch & Support", desc: "Deploying to high-availability cloud servers, configuring EPC industrial SEO, and setting up lead tracking analytics." }
      ]
    },
    screenshots: [
      "/palda1.jpeg",
      "/palda2.jpeg",
      "/palda3.jpeg"
    ],
    impact: {
      id: [
        { title: "Kredibilitas Tender Meningkat", desc: "Representasi digital yang terstruktur memperkuat portofolio kualifikasi dalam proses tender proyek skala nasional." },
        { title: "Konversi Prospek B2B Cepat", desc: "Akses kontak cepat memangkas waktu respon komunikasi antara calon klien dengan tim sales engineering." },
        { title: "Performa Akses Cepat", desc: "Optimasi aset menghasilkan skor Core Web Vitals 95+ dengan waktu muat halaman di bawah 1.2 detik." }
      ],
      en: [
        { title: "Enhanced Tender Credibility", desc: "Structured digital representation bolsters qualification portfolios during national-scale industrial project tenders." },
        { title: "Rapid B2B Lead Conversion", desc: "Fast-action contact access reduces inquiry response times between prospective corporate clients and sales engineers." },
        { title: "High-Speed Access Performance", desc: "Asset optimization delivers 95+ Core Web Vitals scores with page load times under 1.2 seconds." }
      ]
    }
  },
  {
    slug: "batugin",
    title: "Batugin",
    category: { id: "Farmasi & Kesehatan", en: "Healthcare & Pharmaceuticals" },
    type: "Website",
    desc: {
      id: "Website Company Profile resmi untuk lini produk kesehatan unggulan Batugin. Menghadirkan informasi produk terpercaya dengan desain medis yang bersih, profesional, dan edukatif.",
      en: "Official Company Profile website for the Batugin healthcare product line. Presents trusted product information with a clean, professional, and educational medical design."
    },
    tags: ["Next.js", "TailwindCSS", "Framer Motion"],
    image: "/batugin_compro.jpeg",
    icon: "Globe",
    accent: "text-rose-600 bg-rose-50 border-rose-100",
    url: "https://batugin.id/",
    overview: {
      id: "Batugin adalah portal informasi herbal yang berfokus memberikan edukasi mengenai kesehatan ginjal dan saluran kemih kepada masyarakat Indonesia. Sebagai salah satu produk farmasi terkemuka, Batugin membutuhkan representasi digital yang dapat dipercaya, interaktif, dan mudah diakses oleh berbagai kalangan usia. Platform ini dirancang untuk menyajikan informasi produk, artikel kesehatan, kalkulator asupan air harian, serta direktori apotek terdekat. Desain visual yang higienis, bersih, dan berorientasi medis dipadukan dengan performa pemuatan yang cepat agar pembaca mendapatkan info kesehatan penting tanpa hambatan.",
      en: "Batugin is a herbal information portal focused on providing education about kidney and urinary tract health to the Indonesian public. As a leading pharmaceutical product, Batugin requires a digital representation that is trusted, interactive, and easily accessible by various age groups. The platform is designed to present product information, health articles, a daily water intake calculator, and a nearby pharmacy directory. A hygienic, clean, and medically oriented visual design is combined with fast loading performance so readers get critical health info without friction."
    },
    challenges: {
      id: [
        "Membangun kredibilitas merek obat herbal di ruang digital dengan menyajikan informasi ilmiah yang mudah dipahami orang awam.",
        "Mengoptimalkan performa SEO agar artikel kesehatan Batugin menempati peringkat teratas pada pencarian Google terkait kesehatan ginjal.",
        "Mengintegrasikan fitur kalkulator hidrasi interaktif yang responsif dan ringan diakses dari browser mobile berspesifikasi rendah."
      ],
      en: [
        "Building credibility for a herbal medicine brand in the digital space by presenting scientific information that is easy for laypeople to understand.",
        "Optimizing SEO performance so Batugin's health articles rank at the top of Google searches related to kidney health.",
        "Integrating an interactive hydration calculator feature that is responsive and lightweight to access from low-spec mobile browsers."
      ]
    },
    solutions: {
      id: [
        "Menggunakan Next.js Static Site Generation (SSG) untuk memastikan artikel dapat diindeks oleh mesin pencari secara instan dengan kecepatan muat di bawah 1.2 detik.",
        "Menerapkan struktur markup semantik HTML5 dan skema JSON-LD terstruktur untuk mengoptimalkan SEO artikel medis.",
        "Merancang kalkulator hidrasi berbasis React Hooks yang menghitung kebutuhan cairan secara instan di sisi klien tanpa overhead jaringan."
      ],
      en: [
        "Using Next.js Static Site Generation (SSG) to ensure articles can be indexed by search engines instantly with load speeds under 1.2 seconds.",
        "Applying HTML5 semantic markup structure and structured JSON-LD schemas to optimize medical article SEO.",
        "Designing a React Hooks-based hydration calculator that calculates fluid needs instantly on the client side with zero network overhead."
      ]
    },
    workflow: {
      id: [
        { title: "Konsultasi", desc: "Menganalisis kebutuhan branding medis, target audiens konsumen obat herbal, dan modul konten edukasi." },
        { title: "Perencanaan", desc: "Menyusun peta situs artikel kesehatan, kalkulator hidrasi, serta struktur metadata SEO." },
        { title: "Development", desc: "Pengembangan frontend dengan Next.js dan TailwindCSS dengan transisi halus Framer Motion." },
        { title: "Quality Assurance", desc: "Audit Core Web Vitals dengan skor performa di atas 95% serta pengujian kompatibilitas browser." },
        { title: "Launch & Support", desc: "Deployment di server cloud andal dan setup monitoring performa SEO secara berkala." },
      ],
      en: [
        { title: "Consultation", desc: "Analyzing medical branding requirements, targets of herbal medicine consumers, and educational content modules." },
        { title: "Planning", desc: "Mapping the health article sitemap, hydration calculator, and structured SEO metadata." },
        { title: "Development", desc: "Frontend development with Next.js and TailwindCSS with smooth Framer Motion transitions." },
        { title: "Quality Assurance", desc: "Auditing Core Web Vitals with performance scores above 95% and cross-browser compatibility testing." },
        { title: "Launch & Support", desc: "Deployment on reliable cloud servers and setting up periodic SEO performance monitoring." },
      ]
    },
    screenshots: [
      "/batugin/batugin1.jpeg",
      "/batugin/batugin2.jpeg",
      "/batugin/batugin3.jpeg",
      "/batugin/batugin4.jpeg",
      "/batugin/batugin5.jpeg",
      "/batugin/batugindash.jpeg"
    ],
    impact: {
      id: [
        { title: "Pengalaman Akses Cepat", desc: "Waktu muat halaman turun dari 4.2 detik menjadi 1.1 detik, mengurangi angka bounce rate hingga 28%." },
        { title: "Lonjakan Kunjungan Organik", desc: "Pembaruan arsitektur Next.js menaikkan lalu lintas organik sebesar 34% di kuartal pertama." },
        { title: "Stabilitas Traffic Tinggi", desc: "Sistem kini memproses lebih dari 50.000 pengunjung aktif per hari tanpa gangguan (downtime)." }
      ],
      en: [
        { title: "Lightning Fast Access", desc: "Page load time decreased from 4.2 seconds to 1.1 seconds, reducing bounce rate by 28%." },
        { title: "Organic Traffic Surge", desc: "The Next.js architecture update boosted organic search traffic by 34% in the first quarter." },
        { title: "High-Traffic Stability", desc: "The system now processes over 50,000 active daily visitors with zero downtime." }
      ]
    }
  },
  {
    slug: "campos-law-firm",
    title: "Campos Law Firm",
    category: { id: "Portal Hukum Korporat", en: "Corporate Legal Portal" },
    type: "Website",
    desc: { 
      id: "Website representasi profesional untuk firma hukum Campos. Menampilkan profil pengacara, spesialisasi kasus, serta portal penjadwalan konsultasi hukum secara aman bagi klien.", 
      en: "Professional representation website for Campos Law Firm. Features lawyer profiles, case specializations, and a secure legal consultation scheduling portal for clients." 
    },
    tags: ["Next.js", "Framer Motion", "CMS"],
    image: "/Campos Law Firm.png",
    icon: "Laptop",
    accent: "text-amber-600 bg-amber-50 border-amber-100",
    url: "https://camposlawfirm.com/",
    overview: {
      id: "Campos Law Firm adalah portal digital premium yang mewakili identitas hukum korporat dan litigasi sebuah firma hukum terkemuka. Dalam industri hukum, kesan pertama dari profesionalisme sangatlah krusial. Website ini dirancang sebagai jembatan komunikasi antara pengacara senior dengan klien korporat. Selain menampilkan rekam jejak kemenangan kasus dan publikasi hukum, portal ini dilengkapi sistem pemesanan konsultasi terjadwal yang meminimalisir tabrakan agenda pengacara.",
      en: "Campos Law Firm is a premium digital portal representing the corporate and litigation legal identity of a leading law firm. In the legal industry, first impressions of professionalism are crucial. This website is designed as a communication bridge between senior attorneys and corporate clients. In addition to showcasing case victory track records and legal publications, the portal features a scheduled consultation booking system that minimizes attorney calendar conflicts."
    },
    challenges: {
      id: [
        "Membangun estetika visual bernuansa premium, prestisius, dan formal yang mencerminkan martabat firma hukum.",
        "Mengelola kalender jadwal konsultasi interaktif yang harus disinkronisasikan dengan jadwal kesibukan masing-masing advokat.",
        "Menyediakan sistem pengunggahan dokumen kasus awal oleh klien secara aman dan rahasia."
      ],
      en: [
        "Building a premium, prestigious, and formal visual aesthetic that reflects the law firm's high dignity.",
        "Managing an interactive consultation calendar that must sync with each advocate's busy work schedules.",
        "Providing a secure and confidential system for clients to upload preliminary case documents."
      ]
    },
    solutions: {
      id: [
        "Merancang antarmuka minimalis elegan menggunakan tipografi serif klasik yang dikombinasikan dengan micro-animation dari Framer Motion.",
        "Membangun portal booking jadwal terintegrasi API Google Calendar agar waktu konsultasi terupdate dua arah secara instan.",
        "Menerapkan enkripsi data AES-256 pada database penyimpanan dokumen kasus klien guna menjaga kerahasiaan hukum."
      ],
      en: [
        "Designing an elegant minimalist interface using classic serif typography combined with subtle Framer Motion micro-animations.",
        "Building a scheduling portal integrated with Google Calendar APIs so booking slots update bi-directionally instantly.",
        "Applying AES-256 data encryption on client case document database storage to preserve legal confidentiality."
      ]
    },
    workflow: {
      id: [
        { title: "Konsultasi", desc: "Mendiskusikan profil firma hukum, spesialisasi kasus litigasi, dan regulasi privasi klien." },
        { title: "Perencanaan", desc: "Penyusunan arsitektur halaman biografi pengacara, modul artikel hukum, dan struktur form booking." },
        { title: "Development", desc: "Pembangunan situs menggunakan Next.js dan integrasi Headless CMS untuk manajemen tulisan artikel hukum." },
        { title: "Quality Assurance", desc: "Uji coba alur booking kalender dan validasi enkripsi pengunggahan dokumen rahasia." },
        { title: "Launch & Support", desc: "Rilis situs resmi, konfigurasi domain HTTPS aman, serta optimasi SEO pencarian nama firma." },
      ],
      en: [
        { title: "Consultation", desc: "Discussing the firm's brand identity, litigation case specialties, and client privacy regulations." },
        { title: "Planning", desc: "Structuring pages for attorney bio profiles, legal publications modules, and booking form inputs." },
        { title: "Development", desc: "Building the website using Next.js and integrating a Headless CMS for legal article content updates." },
        { title: "Quality Assurance", desc: "Testing the calendar booking workflow and validating the security of confidential document uploads." },
        { title: "Launch & Support", desc: "Deploying official site, configuring secure HTTPS domains, and optimizing search engine SEO." },
      ]
    },
    screenshots: ["/Campos Law Firm.png"],
    impact: {
      id: [
        { title: "Kredibilitas Digital", desc: "Desain web editorial meningkatkan rata-rata durasi kunjungan klien potensial sebesar 45%." },
        { title: "Penjadwalan Konsultasi", desc: "Otomatisasi formulir penjadwalan melipatgandakan jumlah permintaan konsultasi mingguan." },
        { title: "Keamanan Data Klien", desc: "Implementasi standar enkripsi menjamin 100% kerahasiaan pengiriman dokumen hukum." }
      ],
      en: [
        { title: "Digital Credibility", desc: "The editorial web design increased the average session duration of potential clients by 45%." },
        { title: "Consultation Scheduling", desc: "Scheduling form automation doubled the number of weekly consultation requests." },
        { title: "Client Data Security", desc: "Encryption standard implementation guarantees 100% confidentiality of legal document transmissions." }
      ]
    }
  },
  {
    slug: "internal-erp",
    title: "Internal ERP",
    category: { id: "Sistem ERP Korporat", en: "Production ERP System" },
    type: "Internal Dashboard",
    desc: {
      id: "Sistem ERP skala produksi full-module. Mencakup keseluruhan manajemen mulai dari penjualan, monitoring unit, service unit, pembuatan invoice otomatis, hingga integrasi data vendor lengkap dengan ekstraksi harga PO.",
      en: "Full-module Production-scale ERP System. Covers overall management from sales, unit monitoring, service, automated invoice generation, to vendor data integration."
    },
    tags: ["Next.js", "Odoo ERP API", "WebSockets", "TailwindCSS"],
    image: "/logistics-erp-dashboard.jpg",
    icon: "LineChart",
    accent: "text-cyan-600 bg-cyan-50 border-cyan-100",
    url: "/insights/eureka-logistics-case-study",
    isPrivate: true,
    overview: {
      id: "Internal ERP adalah jantung operasional dari seluruh divisi Eureka Logistics. Sistem ini menggabungkan berbagai fungsi bisnis yang sebelumnya terfragmentasi—mulai dari manajemen penawaran penjualan (sales order), pengawasan perawatan unit truk di bengkel internal, pembuatan tagihan otomatis, hingga pengadaan suku cadang dari vendor eksternal. Dengan mengotomatiskan ekstraksi harga dari Purchase Order (PO), ERP ini berhasil memangkas kesalahan input manual dan menyajikan laporan laba-rugi divisi secara real-time.",
      en: "Internal ERP is the operational heart of the entire Eureka Logistics division. This system unifies various business functions that were previously fragmented—from sales quotation management (sales orders), tracking maintenance of truck units at internal workshops, auto-invoicing, to spare part procurement from external vendors. By automating price extraction from Purchase Orders (PO), this ERP has slashed manual input errors and displays real-time division profit-and-loss reports."
    },
    challenges: {
      id: [
        "Mengintegrasikan data secara dua arah dengan core Odoo ERP yang sudah berjalan lama tanpa merusak skema akuntansi bawaan.",
        "Mengotomatisasi pencatatan servis truk (bengkel) yang memiliki puluhan variabel sparepart dan estimasi biaya mekanik.",
        "Menyajikan live dashboard yang memantau unit truk aktif, mengantre muatan, dan sedang masuk perawatan bengkel secara serentak."
      ],
      en: [
        "Integrating data bi-directionally with the legacy Odoo ERP core without breaking the default accounting schemes.",
        "Automating truck service logging (workshop) which has dozens of spare parts and mechanic cost estimate variables.",
        "Presenting a live dashboard that monitors active truck units, queued trucks, and those in workshop maintenance simultaneously."
      ]
    },
    solutions: {
      id: [
        "Membangun middleware API khusus yang menstandarisasi pertukaran data JSON antara Next.js frontend dengan XML-RPC API milik Odoo.",
        "Merancang modul bengkel dinamis dengan auto-complete stok suku cadang dari gudang logistik internal.",
        "Mengimplementasikan WebSockets untuk memperbarui status aktivitas truk secara instan tanpa perlu memuat ulang halaman dasbor."
      ],
      en: [
        "Building a dedicated API middleware that standardizes JSON data exchange between Next.js frontend and Odoo's XML-RPC API.",
        "Designing a dynamic workshop module with real-time autocomplete for spare parts stock from internal warehouses.",
        "Implementing WebSockets to update truck activity statuses instantly without reloading the dashboard page."
      ]
    },
    workflow: {
      id: [
        { title: "Konsultasi", desc: "Menganalisis proses operasional bengkel, siklus PO keuangan, dan pemetaan API Odoo." },
        { title: "Perencanaan", desc: "Menyusun skema sinkronisasi data dua arah dan pemodelan relasi database suku cadang." },
        { title: "Development", desc: "Membangun antarmuka ERP dengan Next.js & TailwindCSS serta membuat modul sinkronisasi API Odoo." },
        { title: "Quality Assurance", desc: "Uji integrasi menyeluruh (E2E) dari pembuatan PO hingga verifikasi sinkronisasi jurnal akuntansi di Odoo." },
        { title: "Launch & Support", desc: "Transisi sistem secara bertahap, migrasi database logistik lama, dan pemeliharaan server lokal." },
      ],
      en: [
        { title: "Consultation", desc: "Analyzing workshop workflows, financial PO cycles, and Odoo API structure mappings." },
        { title: "Planning", desc: "Designing the bi-directional data sync schema and database modeling for spare parts relationships." },
        { title: "Development", desc: "Building the ERP interface with Next.js & TailwindCSS and programming the Odoo API sync modules." },
        { title: "Quality Assurance", desc: "Running End-to-End (E2E) integration testing from PO creation to verifying accounting journal synchronization in Odoo." },
        { title: "Launch & Support", desc: "Phased system transition, migration of legacy logs, and on-premises server maintenance." },
      ]
    },
    screenshots: [],
    impact: {
      id: [
        { title: "Penyatuan Data Pusat", desc: "Integrasi sistem menghilangkan gap antar departemen, membuat pengesahan dokumen 3x lebih cepat." },
        { title: "Penghematan Lisensi", desc: "Kepemilikan ERP internal menghemat puluhan juta rupiah dari biaya langganan software per bulan." },
        { title: "Akurasi Stok Gudang", desc: "Modul inventaris terpusat menurunkan persentase selisih stok dari 4% menjadi di bawah 0.5%." }
      ],
      en: [
        { title: "Central Data Unification", desc: "System integration eliminated inter-departmental gaps, making document validation 3x faster." },
        { title: "License Cost Savings", desc: "Internal ERP ownership saved tens of millions of rupiah in monthly software subscription costs." },
        { title: "Warehouse Stock Accuracy", desc: "The centralized inventory module reduced stock discrepancy percentages from 4% to under 0.5%." }
      ]
    }
  },
  {
    slug: "hr-management-cms",
    title: "HR Management CMS",
    category: { id: "Sistem Sumber Daya Manusia", en: "Human Resource System" },
    type: "Internal Dashboard",
    desc: {
      id: "Dashboard internal tersentralisasi khusus tim HR. Mengotomatisasi absensi, pengajuan cuti, perhitungan KPI, generasi slip gaji, hingga memonitor proses rekrutmen kandidat secara efisien.",
      en: "Centralized internal dashboard dedicated to the HR team. Automates attendance, leave requests, KPI calculations, payroll generation, and candidate recruitment monitoring."
    },
    tags: ["Next.js", "Express.js", "Redis SSO", "PostgreSQL"],
    image: "/hr-cms-dashboard.jpg",
    icon: "LineChart",
    accent: "text-rose-600 bg-rose-50 border-rose-100",
    url: "/insights/hris-corporate-case-study",
    isPrivate: true,
    overview: {
      id: "HR Management CMS adalah platform penunjang produktivitas internal yang dirancang untuk memodernisasi cara kerja departemen Sumber Daya Manusia. Sistem ini menyatukan berbagai proses administratif mulai dari absensi berbasis biometrik/lokasi GPS, pengajuan izin cuti, pelacakan target KPI tahunan karyawan, hingga otomasi kalkulasi gaji bersih (payroll) bulanan yang menyertakan potongan pajak PPh 21 dan iuran BPJS. Dengan sistem rekrutmen terintegrasi, HR juga dapat memantau perjalanan wawancara calon kandidat secara sistematis.",
      en: "HR Management CMS is an internal productivity tool designed to modernize the workflows of the Human Resources department. This system unifies administrative processes from biometric/GPS-based attendance, leave approval workflows, tracking annual employee KPI metrics, to automated monthly payroll calculations containing PPh 21 income tax deductions and BPJS insurance. With an integrated applicant tracking system, HR can also systematically monitor candidate interviews."
    },
    challenges: {
      id: [
        "Menghitung rumus slip gaji bulanan yang rumit karena keterlibatan variabel lembur, bonus performa, potongan denda terlambat, dan kalkulasi PPh 21.",
        "Mengamankan data sensitif gaji karyawan agar tidak bocor ke pihak yang tidak berhak.",
        "Mengelola data absensi ribuan karyawan harian secara real-time saat jam masuk kerja."
      ],
      en: [
        "Calculating monthly payroll formulas which are complicated due to variables like overtime, performance bonuses, late fines, and PPh 21 tax deductions.",
        "Securing highly sensitive employee salary details from unauthorized access.",
        "Handling GPS/biometric check-in attendance logs from thousands of employees simultaneously during peak hours."
      ]
    },
    solutions: {
      id: [
        "Mengembangkan mesin kalkulator payroll dinamis berbasis JavaScript yang memproses aturan penghitungan pajak dan komponen gaji secara fleksibel.",
        "Menerapkan enkripsi data tingkat kolom (column-level encryption) di database PostgreSQL untuk nominal gaji karyawan.",
        "Menggunakan sistem Single Sign-On (SSO) berbasis Redis untuk mengelola otentikasi sesi yang aman lintas dasbor internal."
      ],
      en: [
        "Developing a dynamic JavaScript-based payroll calculation engine that processes tax rules and salary components flexibly.",
        "Applying column-level encryption in the PostgreSQL database for sensitive salary digits.",
        "Using a Redis-based Single Sign-On (SSO) system to manage secure user authentication sessions across internal dashboards."
      ]
    },
    workflow: {
      id: [
        { title: "Konsultasi", desc: "Mengkaji formula perhitungan pajak PPh 21, kebijakan BPJS, dan proses persetujuan cuti perusahaan." },
        { title: "Perencanaan", desc: "Menyusun skema basis data karyawan, matriks izin akses (RBAC), dan arsitektur backend." },
        { title: "Development", desc: "Membangun UI dasbor HR dengan Next.js dan memprogram endpoint payroll di Express.js." },
        { title: "Quality Assurance", desc: "Verifikasi presisi nominal payroll dengan membandingkannya terhadap perhitungan Excel manual." },
        { title: "Launch & Support", desc: "Deploy sistem di intranet perusahaan, integrasi mesin absensi fisik, dan monitoring performa server." },
      ],
      en: [
        { title: "Consultation", desc: "Reviewing PPh 21 income tax calculation formulas, BPJS policies, and corporate leave approval rules." },
        { title: "Planning", desc: "Structuring employee database tables, Role-Based Access Control matrix, and backend system architecture." },
        { title: "Development", desc: "Building the HR dashboard UI with Next.js and programming payroll endpoints in Express.js." },
        { title: "Quality Assurance", desc: "Verifying payroll precision by cross-checking outputs directly with manual spreadsheets." },
        { title: "Launch & Support", desc: "Deploying system to corporate intranet, integrating physical biometric machines, and monitoring server performance." },
      ]
    },
    screenshots: [],
    impact: {
      id: [
        { title: "Proses Payroll Cepat", desc: "Kalkulasi otomatis gaji dan PPh21 memangkas beban kerja rekapitulasi dari 5 hari menjadi 1 hari." },
        { title: "Kedisiplinan Absensi", desc: "Sistem clock-in berbasis lokasi (geo-tagging) terbukti menekan angka keterlambatan karyawan sebesar 12%." },
        { title: "Efisiensi Rekrutmen", desc: "Pelacakan pelamar digital mengurangi waktu siklus perekrutan untuk posisi baru hingga 20%." }
      ],
      en: [
        { title: "Fast Payroll Processing", desc: "Automated salary and PPh21 calculations slashed recapitulation workload from 5 days to 1 day." },
        { title: "Attendance Discipline", desc: "The location-based clock-in system (geo-tagging) proved to reduce employee tardiness by 12%." },
        { title: "Recruitment Efficiency", desc: "Digital applicant tracking reduced the recruitment cycle time for new positions by up to 20%." }
      ]
    }
  },
  {
    slug: "beego-superapp",
    title: "Beego SuperApp",
    category: { id: "Transportasi On-Demand", en: "On-Demand Ride Hailing" },
    type: "APP",
    desc: {
      id: "Aplikasi mobile multi-layanan on-demand (SuperApp). Mengintegrasikan layanan transportasi ojek online, pesan antar makanan, dan kurir barang dengan antarmuka native yang sangat responsif.",
      en: "On-demand multi-service mobile app (SuperApp). Integrates ride-hailing, food delivery, and courier services with a highly responsive native interface."
    },
    tags: ["React Native", "WebSockets", "Go", "Firebase"],
    images: ["/beego1.png", "/beego2.png"],
    icon: "Smartphone",
    accent: "text-yellow-600 bg-yellow-50 border-yellow-100",
    url: "https://play.google.com/store/apps/details?id=com.beego.mobile",
    overview: {
      id: "Beego SuperApp adalah aplikasi mobile ekosistem on-demand yang mempertemukan pelanggan dengan mitra pengemudi dan merchant makanan lokal. Dirancang untuk pasar Indonesia yang dinamis, aplikasi ini menggabungkan layanan ride-hailing (motor & mobil), pengantaran paket kilat, dan layanan pemesanan makanan (food delivery). Kesuksesan SuperApp ini bergantung pada keandalan sistem penentuan lokasi GPS mitra pengemudi, estimasi waktu tiba (ETA), pemrosesan transaksi dompet digital, dan kelancaran alur pemesanan makanan secara real-time.",
      en: "Beego SuperApp is a mobile ecosystem app that connects customers with delivery drivers and local food merchants. Designed for Indonesia's dynamic market, this app integrates ride-hailing (bikes & cars), express parcel delivery, and food delivery services. The success of this SuperApp relies on the reliability of driver GPS tracking, ETA calculations, digital wallet transactions, and seamless real-time food order placement."
    },
    challenges: {
      id: [
        "Melacak lokasi pergerakan mitra driver secara konstan tanpa menghabiskan daya baterai smartphone mereka.",
        "Menghubungkan pesanan makanan secara otomatis kepada mitra driver terdekat yang berstatus aktif.",
        "Menjaga koneksi real-time chat antara pelanggan dan driver tetap terhubung saat koneksi internet melemah."
      ],
      en: [
        "Constantly tracking driver movement locations without draining their smartphone battery.",
        "Automatically assigning food orders to the nearest active delivery driver.",
        "Maintaining real-time chat connection between customer and driver when cellular internet signal drops."
      ]
    },
    solutions: {
      id: [
        "Mengembangkan modul pelacakan GPS latar belakang (background tracking) yang efisien menggunakan native library React Native.",
        "Membangun mesin alokasi pesanan (dispatch engine) berbasis geofencing di backend menggunakan bahasa pemrograman Go yang terkenal cepat.",
        "Menggunakan protokol WebSockets terintegrasi Firebase Realtime Database untuk pesan instan dengan cadangan offline storage."
      ],
      en: [
        "Developing an efficient background GPS tracking module using native React Native libraries.",
        "Building a geofencing-based order dispatch engine in the backend using Go programming language for high performance.",
        "Using WebSockets integrated with Firebase Realtime Database for instant messaging with offline storage backups."
      ]
    },
    workflow: {
      id: [
        { title: "Konsultasi", desc: "Mendiskusikan model bisnis ride-hailing, arsitektur peta geofencing, dan skema pembayaran nontunai." },
        { title: "Perencanaan", desc: "Merancang antarmuka UI mobile (user, driver, merchant) dan skema database real-time." },
        { title: "Development", desc: "Membangun aplikasi mobile React Native, panel admin, serta backend microservices dengan Go." },
        { title: "Quality Assurance", desc: "Pengujian lapangan (field testing) pelacakan GPS, pengujian transaksi e-wallet, dan uji beban database." },
        { title: "Launch & Support", desc: "Penerbitan aplikasi di Google Play Store & Apple App Store, serta setup server auto-scaling." },
      ],
      en: [
        { title: "Consultation", desc: "Discussing ride-hailing business rules, geofencing map logic, and e-wallet payment integrations." },
        { title: "Planning", desc: "Designing mobile UI interfaces (user, driver, merchant) and real-time database schemas." },
        { title: "Development", desc: "Building React Native mobile apps, admin panels, and backend microservices with Go." },
        { title: "Quality Assurance", desc: "Field testing GPS tracking accuracy, verifying e-wallet transactions, and database load testing." },
        { title: "Launch & Support", desc: "Publishing apps to Google Play Store & Apple App Store, and configuring auto-scaling cloud servers." },
      ]
    },
    screenshots: ["/beego1.png", "/beego2.png"],
    impact: {
      id: [
        { title: "Adopsi Pengguna Tinggi", desc: "Konsolidasi banyak layanan harian menaikkan metrik Daily Active Users (DAU) aplikasi sebesar 35%." },
        { title: "Cross-Selling Layanan", desc: "Lebih dari 20% pengguna ojek online perlahan beralih menjadi pengguna rutin fitur pesan-antar makanan." },
        { title: "Ukuran Aplikasi Ringan", desc: "Optimasi arsitektur menjaga ukuran instalasi tetap di bawah 50MB tanpa mengorbankan kelengkapan fitur." }
      ],
      en: [
        { title: "High User Adoption", desc: "Consolidating multiple daily services increased app Daily Active Users (DAU) metrics by 35%." },
        { title: "Service Cross-Selling", desc: "Over 20% of ride-hailing users gradually transitioned into routine users of the food delivery feature." },
        { title: "Lightweight App Size", desc: "Architecture optimization kept the installation size under 50MB without sacrificing feature completeness." }
      ]
    }
  },
  {
    slug: "warung-bungapagi-ecosystem",
    title: "Warung BungaPagi Ecosystem",
    category: { id: "Ekosistem Digital F&B", en: "F&B Digital Ecosystem" },
    type: "Website",
    desc: {
      id: "Rasa Asli Malaysia, Kehangatan Kebersamaan. Rasakan pengalaman kuliner otentik, keuntungan keanggotaan eksklusif, dan kemudahan pemesanan digital.",
      en: "Authentic Malaysian Taste, Warmth of Togetherness. Experience authentic Malaysian cuisine, exclusive membership benefits, and a seamless digital ordering experience."
    },
    tags: ["Next.js", "E-Commerce", "Membership API"],
    image: "/warungbungaweb.png",
    icon: "Globe",
    accent: "text-fuchsia-600 bg-fuchsia-50 border-fuchsia-100",
    url: "https://warungpagipagi.com/",
    overview: {
      id: "Warung BungaPagi Ecosystem adalah transformasi digital komprehensif untuk jaringan restoran hidangan tradisional Melayu. Ekosistem ini menggabungkan portal pemesanan online (e-menu), sistem loyalitas pelanggan (membership), dan integrasi promo eksklusif. Pelanggan dapat memesan makanan untuk dibawa pulang (takeaway) atau dikirim ke rumah, mengumpulkan poin loyalitas, serta menukarkannya dengan voucher diskon secara langsung, memberikan pengalaman F&B modern yang mengikat loyalitas pelanggan.",
      en: "Warung BungaPagi Ecosystem is a comprehensive digital transformation for a network of traditional Malay cuisine restaurants. The ecosystem combines an online ordering portal (e-menu), a customer loyalty system (membership), and exclusive promotion integrations. Customers can order food for takeaway or home delivery, collect loyalty points, and redeem them for discount vouchers directly, delivering a modern F&B experience that builds customer loyalty."
    },
    challenges: {
      id: [
        "Menghubungkan pesanan menu digital langsung ke printer kasir POS fisik yang terpasang di outlet restoran.",
        "Mengelola pembaruan menu harian dan status ketersediaan bahan makanan di jam sibuk makan siang.",
        "Membangun program poin loyalitas yang aman dari eksploitasi pembuatan akun ganda."
      ],
      en: [
        "Connecting digital menu orders directly to physical POS receipt printers installed at restaurant outlets.",
        "Managing daily menu updates and ingredient availability statuses during peak lunch hours.",
        "Building a customer loyalty points engine that is secure against multi-account registration exploits."
      ]
    },
    solutions: {
      id: [
        "Membangun bridge API websocket yang menghubungkan pesanan cloud dengan hardware printer thermal lokal.",
        "Menyusun halaman manajemen stok instan (quick inventory status toggle) pada dasbor kasir outlet.",
        "Menerapkan sistem verifikasi nomor telepon OTP (One-Time Password) untuk setiap pendaftaran keanggotaan baru."
      ],
      en: [
        "Building a WebSocket API bridge connecting cloud order queues with local thermal printer hardware.",
        "Structuring a quick inventory status toggle page on the outlet cashier dashboard.",
        "Applying phone number OTP (One-Time Password) verification for every new membership registration."
      ]
    },
    workflow: {
      id: [
        { title: "Konsultasi", desc: "Menganalisis operasional kasir restoran, skema program poin keanggotaan, dan kebutuhan visual menu." },
        { title: "Perencanaan", desc: "Merancang wireframe katalog e-menu interaktif dan pemodelan database poin loyalitas." },
        { title: "Development", desc: "Mengembangkan website customer dengan Next.js dan membuat dashboard admin outlet untuk manajemen pesanan." },
        { title: "Quality Assurance", desc: "Uji cetak pesanan otomatis ke printer thermal outlet dan audit kalkulasi voucher diskon." },
        { title: "Launch & Support", desc: "Peluncuran website pemesanan, pemasangan modul di kasir restoran, dan pemantauan trafik transaksi harian." },
      ],
      en: [
        { title: "Consultation", desc: "Analyzing restaurant cashier operations, loyalty membership point structures, and menu visual design goals." },
        { title: "Planning", desc: "Designing wireframes for the interactive e-menu catalog and database models for loyalty points." },
        { title: "Development", desc: "Developing the customer-facing website with Next.js and building the outlet admin dashboard for order tracking." },
        { title: "Quality Assurance", desc: "Testing automatic order receipt printing to physical thermal printers and auditing discount voucher logic." },
        { title: "Launch & Support", desc: "Launching the ordering website, installing cashier sync modules, and monitoring daily transaction traffic." },
      ]
    },
    screenshots: [
      "/bungapagi/bungapagi1.jpeg",
      "/bungapagi/bungapagi2.jpeg",
      "/bungapagi/bungapagi3.jpeg",
      "/bungapagi/bungapagi4.jpeg",
      "/bungapagi/bungapagi5.jpeg",
      "/bungapagi/bungapagi6.jpeg",
      "/bungapagi/bungapagihris.jpeg"
    ],
    impact: {
      id: [
        { title: "Peningkatan Omzet", desc: "Manajemen inventaris digital membantu mitra warung menaikkan penjualan harian rata-rata sebesar 18%." },
        { title: "Perluasan Jangkauan", desc: "Sistem pesan-antar online memungkinkan warung melayani pesanan hingga radius 5km dari lokasi." },
        { title: "Digitalisasi Pembayaran", desc: "Integrasi QRIS berhasil menekan jumlah piutang/kasbon pelanggan warung sebesar 40%." }
      ],
      en: [
        { title: "Revenue Increase", desc: "Digital inventory management helped kiosk partners increase average daily sales by 18%." },
        { title: "Reach Expansion", desc: "The online delivery system enabled kiosks to serve orders within a 5km radius of their location." },
        { title: "Payment Digitalization", desc: "QRIS integration successfully reduced kiosk customer credit/debt by 40%." }
      ]
    }
  },
  {
    slug: "klik-travel-id",
    title: "Klik Travel ID",
    category: { id: "Travel & Pariwisata", en: "Travel & Tourism" },
    type: "Website",
    desc: { 
      id: "Platform kurasi open trip dan private tour modern untuk destinasi liburan domestik dan internasional. Menghadirkan eksplorasi destinasi interaktif, filter jadwal keberangkatan fleksibel, serta integrasi reservasi instan.", 
      en: "A modern curated open trip and private tour platform for domestic and international holiday destinations. Features interactive destination exploration, flexible departure schedules, and instant booking integration." 
    },
    tags: ["Next.js", "TailwindCSS", "Framer Motion", "SEO Architecture", "Travel Platform"],
    image: "/klik1.jpeg",
    icon: "Globe",
    accent: "text-sky-600 bg-sky-50 border-sky-100",
    url: "https://kliktravelid.com",
    overview: {
      id: "Klik Travel ID adalah platform perjalanan wisata terkurasi di bawah naungan PT Bersama Jelajah Dunia yang dirancang untuk mewujudkan pengalaman liburan impian yang mudah, aman, nyaman, dan berkesan. Menghadirkan paket Open Trip terjadwal yang ramah anggaran, Private Trip yang dapat dikustomisasi, hingga Corporate Gathering dan Incentive Tour melintasi berbagai destinasi unggulan di Indonesia (Labuan Bajo, Belitung, Banyuwangi, dll.) hingga mancanegara (Jepang, Korea Selatan, Thailand, Vietnam, Eropa). Dibangun dengan pendekatan desain modern yang bersih dan responsif, platform ini memadukan visual sinematik dengan alur reservasi terintegrasi WhatsApp Concierge untuk memastikan kemudahan eksplorasi bagi para traveler.",
      en: "Klik Travel ID is a curated travel and tour platform under PT Bersama Jelajah Dunia designed to turn dream vacation experiences into seamless, secure, comfortable, and memorable journeys. Offering budget-friendly scheduled Open Trips, fully customizable Private Trips, as well as Corporate Gatherings and Incentive Tours across top destinations in Indonesia (Labuan Bajo, Belitung, Banyuwangi, etc.) and abroad (Japan, South Korea, Thailand, Vietnam, Europe). Built with a clean, modern, and responsive design philosophy, the platform combines cinematic visuals with integrated WhatsApp Concierge inquiry flows to ensure effortless exploration for travelers."
    },
    challenges: {
      id: [
        "Menyajikan katalog paket wisata multi-kategori (Open Trip, Private Trip, dan Jadwal Keberangkatan) secara dinamis tanpa mengorbankan kecepatan muat halaman.",
        "Mengoptimalkan aset visual dan media promosi destinasi resolusi tinggi agar tetap tajam namun sangat ringan diakses pada koneksi seluler.",
        "Membangun alur konversi reservasi dan konsultasi cepat yang menghubungkan calon wisatawan langsung ke tim konsultan perjalanan."
      ],
      en: [
        "Presenting a multi-category tour catalog (Open Trips, Private Trips, and Departure Calendars) dynamically without compromising page load speeds.",
        "Optimizing high-resolution destination media and visual assets to remain crisp yet extremely lightweight over mobile networks.",
        "Building an instant reservation and inquiry conversion flow that seamlessly connects prospective travelers directly with travel consultants."
      ]
    },
    solutions: {
      id: [
        "Mengimplementasikan arsitektur Next.js Static Site Generation (SSG) & Incremental Static Regeneration (ISR) untuk pemuatan katalog destinasi ultra-cepat dengan skor Core Web Vitals tinggi.",
        "Mengintegrasikan optimasi gambar otomatis berbasis Next.js Image & WebP modern serta lazy loading untuk efisiensi transfer data hingga 65%.",
        "Merancang antarmuka filter destinasi interaktif dan integrasi floating WhatsApp concierge dengan pre-filled template pesan untuk konversi instan."
      ],
      en: [
        "Implementing Next.js Static Site Generation (SSG) & Incremental Static Regeneration (ISR) architecture for ultra-fast destination catalog rendering and top Core Web Vitals.",
        "Integrating automated image optimization with Next.js Image, WebP formatting, and lazy loading to cut bandwidth consumption by up to 65%.",
        "Designing an interactive destination filter UI and floating WhatsApp concierge integration with pre-filled inquiry templates for instant conversion."
      ]
    },
    workflow: {
      id: [
        { title: "Konsultasi", desc: "Menganalisis kebutuhan branding travel, segmentasi pasar open trip & corporate tour, serta struktur paket wisata." },
        { title: "Perencanaan", desc: "Merancang arsitektur informasi katalog destinasi, taksonomi filter perjalanan, dan struktur metadata SEO perjalanan." },
        { title: "Development", desc: "Membangun antarmuka responsif dengan Next.js, Tailwind CSS, dan transisi halus interaktif menggunakan Framer Motion." },
        { title: "Quality Assurance", desc: "Audit performa web lintas perangkat mobile/desktop, pengujian alur form konsultasi, dan optimasi skema JSON-LD." },
        { title: "Launch & Support", desc: "Deployment di infrastruktur cloud berperforma tinggi, setup analitik kunjungan, dan pemeliharaan katalog berkala." }
      ],
      en: [
        { title: "Consultation", desc: "Analyzing travel branding requirements, market segmentation for open trips & corporate tours, and package structures." },
        { title: "Planning", desc: "Designing information architecture for destination catalogs, travel filter taxonomy, and structured travel SEO metadata." },
        { title: "Development", desc: "Developing a responsive interface with Next.js, Tailwind CSS, and smooth interactive transitions powered by Framer Motion." },
        { title: "Quality Assurance", desc: "Auditing performance across mobile/desktop devices, validating inquiry workflows, and optimizing JSON-LD schema." },
        { title: "Launch & Support", desc: "Deploying on high-performance cloud infrastructure, setting up visitor analytics, and providing periodic catalog support." }
      ]
    },
    screenshots: [
      "/klik1.jpeg",
      "/klik2.jpeg",
      "/klik3.jpeg",
      "/klik4.jpeg",
      "/klik5.jpeg"
    ],
    impact: {
      id: [
        { title: "Peningkatan Konversi Inquiry", desc: "Alur konsultasi WhatsApp terstruktur dan filter jadwal yang intuitif menaikkan konversi pertanyaan calon traveler sebesar 38%." },
        { title: "Kecepatan Akses Mobile Unggul", desc: "Skor performa Core Web Vitals mencapai 95+ dengan waktu respon halaman di bawah 1 detik di seluruh perangkat." },
        { title: "Katalog Destinasi Terpadu", desc: "Membantu pengelolaan ratusan jadwal keberangkatan open trip dan paket private trip dalam satu platform terpusat." }
      ],
      en: [
        { title: "Inquiry Conversion Growth", desc: "Structured WhatsApp consultation flows and intuitive departure filtering boosted traveler inquiry conversion rates by 38%." },
        { title: "Superior Mobile Performance", desc: "Core Web Vitals performance score exceeded 95+ with sub-second page responsiveness across all mobile devices." },
        { title: "Unified Destination Catalog", desc: "Streamlined the management of dozens of open trip departure schedules and private trip packages in a centralized platform." }
      ]
    }
  },
  {
    slug: "nontonkuy",
    title: "NontonKuy",
    category: { id: "Komunitas Streaming", en: "Streaming Community" },
    type: "Website",
    desc: {
      id: "Platform media hiburan untuk nonton bareng film secara virtual. Dilengkapi fitur live chat interaktif, sinkronisasi pemutaran video, dan ruang nonton publik.",
      en: "Entertainment media platform for virtual watch parties. Equipped with interactive live chat, video playback synchronization, and public screening rooms."
    },
    tags: ["React", "WebSockets", "TailwindCSS"],
    image: "/nontonkuy.jpeg",
    icon: "Laptop",
    accent: "text-purple-600 bg-purple-50 border-purple-100",
    overview: {
      id: "NontonKuy adalah platform streaming sosial inovatif yang dirancang untuk mengatasi jarak dengan membawa konsep bioskop bareng (watch party) secara virtual ke layar browser Anda. Pengguna dapat membuat ruang pemutaran film pribadi maupun publik, mengundang teman-teman mereka, dan menonton video secara bersamaan. Dilengkapi dengan live chat interaktif berkemampuan stiker dan reaksi cepat, NontonKuy mengubah aktivitas pasif menonton film menjadi pengalaman komunal yang dinamis dan menyenangkan.",
      en: "NontonKuy is an innovative social streaming platform designed to bridge physical distance by bringing the concept of virtual watch parties to your browser screen. Users can create private or public screening rooms, invite their friends, and watch videos in perfect synchronization. Equipped with an interactive live chat featuring stickers and reactions, NontonKuy turns passive video viewing into a dynamic and fun communal experience."
    },
    challenges: {
      id: [
        "Menjaga video tetap terputar pada detik yang sama (perfect frame synchronization) di antara puluhan penonton di ruang yang sama.",
        "Menghindari jeda (lag) pada pesan live chat saat penonton bereaksi secara massal di momen klimaks film.",
        "Mengelola bandwidth pemutaran video agar tidak membebani server hosting ketika banyak ruang nonton aktif secara bersamaan."
      ],
      en: [
        "Keeping the video playing at the exact same second (perfect frame synchronization) across dozens of viewers in the same room.",
        "Preventing live chat lags when viewers react en masse during climax movie moments.",
        "Managing video playback bandwidth so it doesn't overload hosting servers when multiple watch rooms are active concurrently."
      ]
    },
    solutions: {
      id: [
        "Mengembangkan mesin sinkronisasi status pemutar video (play/pause/seek) menggunakan protokol WebSocket dengan kalkulasi kompensasi latensi jaringan.",
        "Menerapkan throttling pesan dan optimasi rendering komponen chat di React menggunakan virtualized list.",
        "Mengintegrasikan video streaming berbasis HLS (HTTP Live Streaming) dikombinasikan dengan CDN (Content Delivery Network) eksternal."
      ],
      en: [
        "Developing a video player state sync engine (play/pause/seek) using WebSocket protocols with network latency compensation calculations.",
        "Applying message throttling and optimizing chat rendering components in React using virtualized lists.",
        "Integrating HLS (HTTP Live Streaming) video streaming combined with an external CDN (Content Delivery Network)."
      ]
    },
    workflow: {
      id: [
        { title: "Konsultasi", desc: "Mendiskusikan konsep watch party, format video streaming, dan skalabilitas websocket chat." },
        { title: "Perencanaan", desc: "Merancang skema sinkronisasi timestamp video dan visual tata letak ruang nonton bareng." },
        { title: "Development", desc: "Membangun frontend aplikasi React dan memprogram websocket server berbasis Node.js." },
        { title: "Quality Assurance", desc: "Pengujian sinkronisasi video lintas perangkat berbeda dan beban simulasi chat ribuan pesan per menit." },
        { title: "Launch & Support", desc: "Deploy server WebSocket di cloud dengan load balancing dan peluncuran versi beta publik." },
      ],
      en: [
        { title: "Consultation", desc: "Discussing the watch party user flow, video streaming formats, and websocket chat scalability." },
        { title: "Planning", desc: "Designing video timestamp sync algorithms and the user interface layout for the watch room." },
        { title: "Development", desc: "Building the React frontend application and programming the Node.js-based WebSocket server." },
        { title: "Quality Assurance", desc: "Testing video sync accuracy across different devices and simulating chat loads of thousands of messages per minute." },
        { title: "Launch & Support", desc: "Deploying WebSocket servers on cloud with load balancing and launching the public beta version." },
      ]
    },
    screenshots: ["/nontonkuy.jpeg"],
    impact: {
      id: [
        { title: "Penghematan Server", desc: "Proses kompresi video yang baru berhasil menekan biaya penyimpanan AWS sebesar 30% per bulan." },
        { title: "Bebas Buffering", desc: "Adaptive bitrate menjamin resolusi film otomatis menyesuaikan kecepatan internet pengguna tanpa hambatan." },
        { title: "Durasi Tontonan Naik", desc: "Algoritma rekomendasi yang relevan meningkatkan rata-rata waktu menonton dari 45 menjadi 75 menit." }
      ],
      en: [
        { title: "Server Cost Savings", desc: "The new video compression process successfully reduced monthly AWS storage costs by 30%." },
        { title: "Buffer-Free Streaming", desc: "Adaptive bitrate ensures movie resolution automatically adjusts to user internet speed without stuttering." },
        { title: "Increased Watch Time", desc: "Relevant recommendation algorithms increased average watch times from 45 to 75 minutes." }
      ]
    }
  },
  {
    slug: "guruino",
    title: "Guruino",
    category: { id: "Platform EdTech", en: "EdTech Platform" },
    type: "Website",
    desc: {
      id: "Platform pembelajaran daring interaktif untuk menghubungkan siswa dengan mentor ahli. Memiliki fitur ruang kelas virtual, penjadwalan sesi belajar, dan pembayaran aman.",
      en: "Interactive online learning platform connecting students with expert mentors. Features virtual classrooms, study session scheduling, and secure payments."
    },
    tags: ["Next.js", "TailwindCSS", "EdTech API"],
    image: "/guruino1.jpeg",
    icon: "Globe",
    accent: "text-blue-600 bg-blue-50 border-blue-100",
    overview: {
      id: "Guruino adalah platform EdTech inovatif yang memfasilitasi pencarian, penjadwalan, dan pelaksanaan bimbingan belajar privat secara online maupun offline. Menyadari tingginya kebutuhan akan pendidikan tambahan yang berkualitas, Guruino hadir menyaring mentor-mentor terbaik dengan proses verifikasi ketat. Siswa dapat mencari mentor berdasarkan spesialisasi mata pelajaran, membaca ulasan dari siswa lain, memesan jam belajar kosong, melakukan pembayaran aman, dan mengikuti bimbingan interaktif melalui ruang kelas virtual terintegrasi.",
      en: "Guruino is an innovative EdTech platform that facilitates the search, scheduling, and execution of private tutoring sessions both online and offline. Recognizing the high demand for quality supplemental education, Guruino filters the best mentors through a strict verification process. Students can search for tutors by subject specialization, read peer reviews, book open slots, process secure payments, and attend interactive sessions in integrated virtual classrooms."
    },
    challenges: {
      id: [
        "Menyinkronkan zona waktu belajar antara siswa dan tutor di seluruh wilayah Indonesia (WIB, WITA, WIT) secara dinamis.",
        "Mengintegrasikan ruang konferensi video interaktif yang hemat bandwidth namun tetap jernih bagi pengguna di daerah terpencil.",
        "Mengelola pembayaran di muka (escrow) agar aman bagi kedua belah pihak hingga sesi belajar selesai terlaksana."
      ],
      en: [
        "Dynamically syncing tutoring session time zones between students and tutors across Indonesia (WIB, WITA, WIT).",
        "Integrating an interactive video conferencing space that is bandwidth-friendly yet clear for users in remote areas.",
        "Managing upfront payments (escrow system) to be secure for both parties until the study session is fully completed."
      ]
    },
    solutions: {
      id: [
        "Menerapkan penanganan zona waktu berbasis UTC di basis data dan mengonversinya secara otomatis ke waktu lokal browser pengguna.",
        "Mengintegrasikan WebRTC via platform kustom yang secara adaptif menurunkan resolusi video ketika kualitas sinyal internet melambat.",
        "Membangun mekanisme pembayaran rekening penampung (escrow account) terintegrasi dengan Payment Gateway untuk otomatisasi pencairan dana tutor."
      ],
      en: [
        "Applying UTC-based time zone handling in the database and converting it automatically to the user's local browser time.",
        "Integrating WebRTC via a custom platform that adaptively lowers video resolution when internet connection speed drops.",
        "Building an escrow account system integrated with our Payment Gateway to automate tutor funds payout upon session completion."
      ]
    },
    workflow: {
      id: [
        { title: "Konsultasi", desc: "Mengidentifikasi model bimbingan belajar, kebutuhan fitur video conference, dan skema bagi hasil tutor." },
        { title: "Perencanaan", desc: "Merancang wireframe pemesanan jadwal kalender mentor dan skema alur dana escrow." },
        { title: "Development", desc: "Pengembangan website Next.js untuk siswa & mentor serta pembuatan platform video WebRTC." },
        { title: "Quality Assurance", desc: "Pengujian kestabilan video conference pada koneksi 3G/4G lambat dan audit validasi escrow." },
        { title: "Launch & Support", desc: "Deploy server, proses onboarding tutor gelombang pertama, dan peluncuran pemasaran digital." },
      ],
      en: [
        { title: "Consultation", desc: "Identifying tutoring workflows, video conferencing feature goals, and tutor profit-sharing rules." },
        { title: "Planning", desc: "Designing wireframes for tutor calendar booking layouts and mapping the escrow payment workflows." },
        { title: "Development", desc: "Developing the Next.js website for students & tutors and building the WebRTC video classroom platform." },
        { title: "Quality Assurance", desc: "Testing video conference stability on slow 3G/4G cellular connections and auditing escrow validation logs." },
        { title: "Launch & Support", desc: "Deploying system, onboarding the first wave of verified tutors, and launching digital marketing campaigns." },
      ]
    },
    screenshots: ["/guruino1.jpeg"],
    impact: {
      id: [
        { title: "Keterlibatan Belajar", desc: "Elemen kuis interaktif menaikkan tingkat kelulusan dan penyelesaian kursus sebesar 40%." },
        { title: "Stabilitas Video", desc: "Penggunaan arsitektur CDN khusus meminimalisir buffering video materi meskipun di jaringan 3G." },
        { title: "Pertumbuhan Pendapatan", desc: "Otomatisasi langganan (subscription) meningkatkan pendapatan pasif bulanan instruktur sebesar 25%." }
      ],
      en: [
        { title: "Learning Engagement", desc: "Interactive quiz elements increased course completion and graduation rates by 40%." },
        { title: "Video Stability", desc: "The use of custom CDN architecture minimized material video buffering even on 3G networks." },
        { title: "Revenue Growth", desc: "Subscription automation increased instructors' monthly passive revenue by 25%." }
      ]
    }
  }
];
