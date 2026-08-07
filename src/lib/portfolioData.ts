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
    slug: "master-diskon",
    title: "Master Diskon",
    category: { id: "Travel & Perhotelan", en: "Travel & Hospitality" },
    type: "Internal Dashboard",
    desc: { 
      id: "Aplikasi Web Dashboard komprehensif untuk travel agent. Memfasilitasi manajemen pencarian dan pemesanan tiket pesawat, hotel, serta paket wisata dengan sistem harga dinamis.", 
      en: "A comprehensive Web Dashboard App for travel agents. Facilitates the management of flights, hotels, and tour packages with dynamic pricing systems." 
    },
    tags: ["Next.js", "Payment Gateway", "Travel API"],
    image: "/masdis das.png",
    icon: "Globe",
    accent: "text-blue-600 bg-blue-50 border-blue-100",
    url: "https://masterdiskon.com/id-id",
    overview: {
      id: "MasterDiskon adalah platform travel modern yang membantu agen dan traveler mencari, membandingkan, serta memesan produk perjalanan—tiket pesawat, hotel, dan voucher promo—secara real-time. Di industri travel yang kompetitif, konversi ditentukan oleh kecepatan pencarian dan kesederhanaan alur checkout. Sistem ini dibangun dengan fokus pada performa query API pencarian tiket dan transparansi harga. Melalui dashboard internal, admin dapat menyesuaikan margin keuntungan secara dinamis, mengelola kode promo musiman, serta melacak transaksi tiket yang dikeluarkan oleh berbagai maskapai penerbangan.",
      en: "MasterDiskon is a modern travel platform that helps agents and travelers search, compare, and book travel products—flight tickets, hotels, and promo vouchers—in real-time. In a highly competitive travel industry, conversion is determined by search speed and checkout simplicity. This system was built focusing on ticket search API query performance and pricing transparency. Through the internal dashboard, admins can dynamically adjust profit margins, manage seasonal promo codes, and track ticket transactions issued by various airlines."
    },
    challenges: {
      id: [
        "Menyederhanakan alur booking tiket perjalanan yang biasanya melibatkan banyak data penumpang dan opsi tambahan.",
        "Mengatasi latensi pencarian ketika melakukan query ke banyak API vendor (maskapai & hotel) secara bersamaan.",
        "Menjaga konsistensi data harga yang sering berubah mendadak dari API pihak ketiga sebelum pengguna membayar."
      ],
      en: [
        "Simplifying the travel ticket booking workflow, which usually involves multiple passenger details and add-ons.",
        "Overcoming search latency when querying multiple vendor APIs (airlines & hotels) concurrently.",
        "Maintaining consistency of price data that frequently changes suddenly from third-party APIs before the user makes a payment."
      ]
    },
    solutions: {
      id: [
        "Merancang alur checkout 3-langkah ringkas dengan validasi form instan di sisi klien.",
        "Mengimplementasikan caching berlapis pada halaman pencarian kritis menggunakan Redis untuk menampung hasil query API vendor.",
        "Membangun mekanisme penguncian harga (price lock) selama 15 menit menggunakan antrean sesi transaksi di backend."
      ],
      en: [
        "Designing a concise 3-step checkout flow with instant client-side form validation.",
        "Implementing multi-level caching on critical search pages using Redis to hold vendor API query results.",
        "Building a 15-minute price lock mechanism using transaction session queues in the backend."
      ]
    },
    workflow: {
      id: [
        { title: "Konsultasi", desc: "Membahas integrasi API aviasi global, struktur komisi keagenan, dan arsitektur dasbor operasional." },
        { title: "Perencanaan", desc: "Membuat cetak biru alur pencarian multi-rute pesawat dan skema alur pemesanan hotel." },
        { title: "Development", desc: "Membangun antarmuka dasbor dengan Next.js dan merancang gateway integrasi API travel." },
        { title: "Quality Assurance", desc: "Pengujian beban (stress testing) pada API pencarian dengan mensimulasikan ratusan request per detik." },
        { title: "Launch & Support", desc: "Peluncuran dasbor agen dan monitoring kestabilan transaksi tiket secara real-time." },
      ],
      en: [
        { title: "Consultation", desc: "Discussing global aviation API integration, agency commission structures, and operational dashboard architecture." },
        { title: "Planning", desc: "Creating blueprints for multi-route flight search layouts and hotel booking workflow schemes." },
        { title: "Development", desc: "Building the dashboard interface with Next.js and designing travel API integration gateways." },
        { title: "Quality Assurance", desc: "Stress testing the search APIs by simulating hundreds of concurrent requests per second." },
        { title: "Launch & Support", desc: "Launching the agent dashboard and monitoring ticket transaction stability in real-time." },
      ]
    },
    screenshots: [
      "/masdis/masdis1.jpeg",
      "/masdis/masdis2.jpeg",
      "/masdis/masdis3.jpeg",
      "/masdis/masdis4.jpeg",
      "/masdis/masdisdas.jpeg"
    ],
    impact: {
      id: [
        { title: "Konversi Pemesanan Naik", desc: "Penyederhanaan alur checkout tiket sukses menaikkan rasio konversi pembayaran pengguna sebesar 22%." },
        { title: "Akurasi Harga Real-Time", desc: "Integrasi API berhasil menekan angka pembatalan karena selisih harga menjadi di bawah 1%." },
        { title: "Efisiensi B2B", desc: "Dashboard agen mempercepat waktu cetak tiket dari rata-rata 15 menit menjadi kurang dari 2 menit." }
      ],
      en: [
        { title: "Booking Conversion Lift", desc: "Simplifying the ticket checkout flow successfully increased user payment conversion rates by 22%." },
        { title: "Real-Time Price Accuracy", desc: "API integration successfully suppressed price mismatch cancellations to below 1%." },
        { title: "B2B Efficiency", desc: "The agent dashboard accelerated ticketing time from an average of 15 minutes to under 2 minutes." }
      ]
    }
  },
  {
    slug: "raja-cepat",
    title: "Raja Cepat",
    category: { id: "Logistik & Pengiriman", en: "Logistics & Delivery" },
    type: "Internal Dashboard",
    desc: { 
      id: "Web Dashboard App untuk operasional ekspedisi pengiriman paket dan kargo. Dilengkapi pelacakan resi real-time (live tracking) dan manajemen armada kurir terpadu yang sangat akurat.", 
      en: "Web Dashboard App for expedition and cargo delivery operations. Features real-time tracking and highly accurate integrated courier fleet management." 
    },
    tags: ["React", "Node.js", "Geolocation API"],
    image: "/Raja Cepat.png",
    icon: "Smartphone",
    accent: "text-red-600 bg-red-50 border-red-100",
    url: "https://rajacepat.com/id",
    overview: {
      id: "Raja Cepat adalah platform manajemen pengiriman logistik yang dirancang untuk mempercepat proses sortir, distribusi, dan pelacakan paket. Dengan meningkatnya volume belanja online, perusahaan ekspedisi membutuhkan sistem internal yang tangguh untuk memantau keberadaan kurir, mengalokasikan armada secara cerdas, dan memberikan status resi yang akurat bagi penerima. Aplikasi dasbor ini menyatukan data operasional dari gudang pusat hingga ke tangan kurir lapangan melalui antarmuka peta interaktif dan sistem pelaporan otomatis.",
      en: "Raja Cepat is a logistics shipping management platform designed to accelerate package sorting, distribution, and tracking processes. With the rising volume of online shopping, delivery companies require a robust internal system to monitor courier locations, assign fleets intelligently, and provide accurate receipt status for recipients. This dashboard application unifies operational data from central warehouses to field couriers through an interactive map interface and automated reporting systems."
    },
    challenges: {
      id: [
        "Menyajikan visualisasi pelacakan kurir secara live di peta tanpa membebani browser admin.",
        "Mengotomatisasi pembagian wilayah pengiriman agar kurir mendapatkan rute paket yang seefisien mungkin.",
        "Sinkronisasi status paket yang dikirim kurir di daerah dengan sinyal internet tidak stabil."
      ],
      en: [
        "Presenting live courier tracking visualizations on maps without overloading the admin's browser.",
        "Automating delivery area assignments so couriers receive the most efficient package routes possible.",
        "Synchronizing status of packages sent by couriers in areas with unstable mobile internet connection."
      ]
    },
    solutions: {
      id: [
        "Menggunakan WebSockets untuk pembaruan koordinat real-time dengan library Mapbox GL JS yang dioptimalkan rendering-nya.",
        "Membangun algoritma pembagian rute (route clustering) berbasis jarak terdekat dari titik koordinat gudang sortir.",
        "Menerapkan mekanisme antrean sinkronisasi offline (offline sync queue) pada aplikasi kurir menggunakan Service Workers."
      ],
      en: [
        "Using WebSockets for real-time coordinate updates with Mapbox GL JS library optimized for rendering efficiency.",
        "Building a route clustering algorithm based on nearest distance from sorting warehouse coordinates.",
        "Applying offline sync queue mechanisms on the courier app using Service Workers."
      ]
    },
    workflow: {
      id: [
        { title: "Konsultasi", desc: "Menganalisis alur masuk-keluar barang di gudang ekspedisi dan skema operasional kurir." },
        { title: "Perencanaan", desc: "Merancang skema database pelacakan koordinat dan struktur antarmuka peta dasbor." },
        { title: "Development", desc: "Mengembangkan dasbor React terintegrasi Geolocation API dan server backend Node.js." },
        { title: "Quality Assurance", desc: "Simulasi beban data koordinat GPS dari ribuan kurir virtual untuk menguji skalabilitas WebSocket." },
        { title: "Launch & Support", desc: "Deploy sistem ke cloud server dan memberikan pelatihan intensif bagi tim admin operasional." },
      ],
      en: [
        { title: "Consultation", desc: "Analyzing warehouse inbound/outbound logistics flows and courier operational schemes." },
        { title: "Planning", desc: "Designing coordinate tracking database schemas and dashboard map interface wireframes." },
        { title: "Development", desc: "Developing the React dashboard integrated with Geolocation APIs and a Node.js backend server." },
        { title: "Quality Assurance", desc: "Simulating GPS coordinate load from thousands of virtual couriers to test WebSocket scalability." },
        { title: "Launch & Support", desc: "Deploying system to cloud servers and conducting intensive training for operational admins." },
      ]
    },
    screenshots: ["/Raja Cepat.png"],
    impact: {
      id: [
        { title: "Presisi Pelacakan", desc: "Sistem resi real-time berhasil mengurangi keluhan pelanggan tentang status paket hingga 40%." },
        { title: "Optimalisasi Rute", desc: "Algoritma pemetaan kurir menghemat biaya operasional bahan bakar armada hingga 15% setiap bulan." },
        { title: "Kapasitas Proses Data", desc: "Backend kini menangani lebih dari 100.000 sinkronisasi data resi per hari tanpa bottleneck." }
      ],
      en: [
        { title: "Tracking Precision", desc: "The real-time waybill system successfully reduced customer complaints about package status by 40%." },
        { title: "Route Optimization", desc: "The courier mapping algorithm saves fleet fuel operational costs by 15% every month." },
        { title: "Data Processing Capacity", desc: "The backend now handles over 100,000 waybill data synchronizations per day without bottlenecks." }
      ]
    }
  },
  {
    slug: "jaja-id",
    title: "Jaja ID",
    category: { id: "Marketplace E-Commerce", en: "E-Commerce Marketplace" },
    type: "Internal Dashboard",
    desc: { 
      id: "Sistem Web Dashboard untuk marketplace digital inovatif. Menawarkan manajemen keranjang pintar, kontrol inventaris mandiri bagi penjual, dan kalkulator ongkir multi-kurir.", 
      en: "Web Dashboard System for an innovative digital marketplace. Offers smart cart management, independent seller inventory control, and multi-courier shipping calculators." 
    },
    tags: ["React", "Express", "MongoDB", "Redux"],
    image: "/jaja id web.png",
    icon: "Laptop",
    accent: "text-emerald-600 bg-emerald-50 border-emerald-100",
    url: "https://jaja.id/",
    overview: {
      id: "Jaja ID adalah ekosistem marketplace e-commerce lokal yang bertujuan mempermudah transaksi jual beli dengan menyederhanakan estimasi ongkos kirim. Sistem ini memiliki dasbor penjual (seller center) mandiri yang memudahkan pengelolaan produk, pelacakan pesanan, dan perhitungan ongkos kirim dari berbagai ekspedisi secara langsung. Dengan sistem backend terintegrasi, Jaja ID mempertemukan ribuan pedagang dengan pembeli retail menggunakan arsitektur keranjang belanja yang fleksibel dan aman.",
      en: "Jaja ID is a local e-commerce marketplace ecosystem aiming to facilitate buy-and-sell transactions by simplifying shipping cost estimation. The system features a self-serve merchant dashboard (seller center) that eases product management, order tracking, and live shipping cost calculations from various courier partners. With an integrated backend system, Jaja ID connects thousands of merchants with retail buyers using a flexible and secure shopping cart architecture."
    },
    challenges: {
      id: [
        "Menyatukan berbagai produk dari merchant yang berbeda ke dalam satu pesanan dengan kalkulasi ongkir multi-asal.",
        "Mengelola inventaris merchant secara real-time guna menghindari penjualan produk yang stoknya kosong.",
        "Menyajikan statistik grafik penjualan harian merchant yang akurat dan interaktif."
      ],
      en: [
        "Consolidating products from different merchants into a single order with multi-origin shipping cost calculation.",
        "Managing merchant inventory in real-time to avoid selling out-of-stock products.",
        "Presenting accurate and interactive daily sales stats charts for merchants."
      ]
    },
    solutions: {
      id: [
        "Membangun algoritma pemecah pesanan (order splitting) otomatis berdasarkan lokasi gudang asal masing-masing penjual.",
        "Menerapkan transaksi atomik MongoDB guna menjamin konsistensi pengurangan stok produk saat checkout massal.",
        "Menggunakan Chart.js dikombinasikan dengan state management Redux Toolkit untuk visualisasi data analitik toko."
      ],
      en: [
        "Building an automated order splitting algorithm based on the origin warehouse location of each individual merchant.",
        "Applying MongoDB atomic transactions to guarantee consistency of product stock reduction during bulk checkout.",
        "Using Chart.js combined with Redux Toolkit state management for store analytics data visualization."
      ]
    },
    workflow: {
      id: [
        { title: "Konsultasi", desc: "Mendiskusikan skema split order e-commerce, integrasi kurir logistik, dan fitur manajemen toko." },
        { title: "Perencanaan", desc: "Merancang wireframe katalog e-menu interaktif dan pemodelan database poin loyalitas." },
        { title: "Development", desc: "Mengembangkan website customer dengan Next.js dan membuat dashboard admin outlet untuk manajemen pesanan." },
        { title: "Quality Assurance", desc: "Pengujian checkout dengan skenario multi-barang dan multi-kurir guna memvalidasi perhitungan ongkir." },
        { title: "Launch & Support", desc: "Meluncurkan platform seller center Jaja ID dan memantau stabilitas pemrosesan pesanan." },
      ],
      en: [
        { title: "Consultation", desc: "Discussing e-commerce split order logic, logistics courier integrations, and store management features." },
        { title: "Planning", desc: "Designing merchant-product-courier relation data models and structuring MongoDB database collections." },
        { title: "Development", desc: "Creating the seller center dashboard with React and building REST APIs using Express.js." },
        { title: "Quality Assurance", desc: "Testing checkouts with multi-item and multi-courier scenarios to validate shipping rate calculations." },
        { title: "Launch & Support", desc: "Launching the Jaja ID seller center platform and monitoring order processing stability." },
      ]
    },
    screenshots: [
      "/jajaid/jajaid1.jpeg",
      "/jajaid/jajaid2.jpeg",
      "/jajaid/jajaid3.jpeg",
      "/jajaid/jajaid4.jpeg",
      "/jajaid/jajaid5.jpeg"
    ],
    impact: {
      id: [
        { title: "Retensi Pengguna Aktif", desc: "Fitur rekomendasi keranjang belanja meningkatkan persentase returning buyers sebesar 25%." },
        { title: "Stabilitas Mega Sale", desc: "Arsitektur microservices memastikan uptime 99.9% selama kampanye diskon besar (tanggal kembar)." },
        { title: "Penurunan Cart Abandonment", desc: "Perbaikan alur e-wallet berhasil menekan pembatalan keranjang belanja sebanyak 18%." }
      ],
      en: [
        { title: "Active User Retention", desc: "The shopping cart recommendation feature increased the percentage of returning buyers by 25%." },
        { title: "Mega Sale Stability", desc: "Microservices architecture ensures 99.9% uptime during massive twin-date discount campaigns." },
        { title: "Cart Abandonment Drop", desc: "E-wallet flow improvements successfully reduced shopping cart abandonments by 18%." }
      ]
    }
  },
  {
    slug: "jaja-auto",
    title: "Jaja Auto",
    category: { id: "Showroom Otomotif", en: "Automotive Showroom" },
    type: "Internal Dashboard",
    desc: { 
      id: "Web Dashboard interaktif untuk manajemen showroom jual beli kendaraan. Menyediakan fitur inventaris mobil, perbandingan spesifikasi, hingga kalkulator simulasi kredit.", 
      en: "Interactive Web Dashboard for vehicle showroom management. Provides car inventory features, specification comparisons, and loan simulation calculators." 
    },
    tags: ["Vue.js", "TailwindCSS", "PostgreSQL"],
    image: "/jaja auto.png",
    icon: "Laptop",
    accent: "text-indigo-600 bg-indigo-50 border-indigo-100",
    url: "https://auto.jaja.id/",
    overview: {
      id: "Jaja Auto adalah platform digital yang dirancang untuk mentransformasi cara dealer otomotif mengelola unit kendaraan dan berinteraksi dengan calon pembeli. Aplikasi web ini berfungsi sebagai katalog interaktif yang tidak hanya memajang foto kendaraan, melainkan juga menyajikan spesifikasi mesin mendalam, fitur komparasi antar tipe mobil, dan simulator pembayaran cicilan kredit. Dengan sistem admin terpadu, manajer showroom dapat memperbarui status unit terjual secara instan dan melacak prospek calon pembeli yang mengajukan simulasi kredit.",
      en: "Jaja Auto is a digital platform designed to transform how automotive dealerships manage vehicle units and interact with prospective buyers. This web application functions as an interactive catalog that not only displays vehicle photos but also presents detailed engine specs, type comparison tools, and credit installment simulation calculators. With an integrated admin system, showroom managers can instantly update sold unit statuses and track leads requesting loan simulations."
    },
    challenges: {
      id: [
        "Menyajikan database spesifikasi mobil yang luas secara rapi dan mudah dibandingkan oleh pengguna.",
        "Menghitung kalkulasi suku bunga dan simulasi kredit kendaraan secara akurat sesuai standar lembaga pembiayaan leasing.",
        "Mengunggah dan mengoptimalkan gambar eksterior/interior mobil beresolusi tinggi agar halaman katalog tetap dimuat dengan cepat."
      ],
      en: [
        "Presenting a vast vehicle specs database in a tidy, easily comparable structure for users.",
        "Calculating interest rates and vehicle loan simulations accurately in compliance with leasing financial standards.",
        "Uploading and optimizing high-res exterior/interior car images so the catalog page loads swiftly."
      ]
    },
    solutions: {
      id: [
        "Membangun visual komparasi sisi-demi-sisi (side-by-side comparison matrix) menggunakan komponen dinamis Vue.js.",
        "Mengembangkan mesin kalkulator finansial di frontend yang dapat menyesuaikan persentase DP, tenor cicilan, dan bunga flat/efektif.",
        "Mengintegrasikan image pipeline otomatis di backend yang mengompresi foto kendaraan ke format WebP sebelum disimpan di database."
      ],
      en: [
        "Building a side-by-side visual comparison matrix using dynamic Vue.js components.",
        "Developing a financial calculator engine on the frontend that adjusts DP percentages, loan terms, and flat/effective interest.",
        "Integrating an automated backend image pipeline compressing vehicle photos to WebP format before database storage."
      ]
    },
    workflow: {
      id: [
        { title: "Konsultasi", desc: "Menganalisis alur bisnis penjualan dealer mobil, formula simulasi cicilan, dan parameter spesifikasi mobil." },
        { title: "Perencanaan", desc: "Merancang tata letak perbandingan mobil dan menyusun skema database PostgreSQL untuk katalog unit." },
        { title: "Development", desc: "Mengembangkan antarmuka dealer berbasis Vue.js dan menulis modul backend kalkulator finansial." },
        { title: "Quality Assurance", desc: "Verifikasi hasil hitung cicilan kredit dengan mencocokkannya langsung dengan tabel leasing partner resmi." },
        { title: "Launch & Support", desc: "Deploy sistem, setup backup database berkala, dan menghubungkan form prospek ke WhatsApp sales." },
      ],
      en: [
        { title: "Consultation", desc: "Analyzing dealership sales business flows, installment formula configurations, and car spec parameters." },
        { title: "Planning", desc: "Designing the car comparison UI layouts and structuring PostgreSQL database tables for vehicle listings." },
        { title: "Development", desc: "Developing the Vue.js-based dealer interface and writing the backend financial calculator module." },
        { title: "Quality Assurance", desc: "Verifying loan calculation outputs by matching them directly with official leasing partner rate tables." },
        { title: "Launch & Support", desc: "Deploying system, setting up scheduled database backups, and routing lead forms to sales WhatsApp." },
      ]
    },
    screenshots: [
      "/auto1.jpeg",
      "/auto2.jpeg",
      "/auto3.jpeg"
    ],
    impact: {
      id: [
        { title: "Konversi Lead Prospek", desc: "Sistem filter pencarian cerdas menaikkan jumlah konversi prospek survei mobil hingga 30%." },
        { title: "Interaksi Dealer Cepat", desc: "Integrasi chat langsung memotong rata-rata waktu respons dealer dari 2 jam menjadi 15 menit." },
        { title: "Akurasi Katalog", desc: "Sinkronisasi database gudang memastikan stok mobil di website 100% akurat dengan ketersediaan fisik." }
      ],
      en: [
        { title: "Prospect Lead Conversion", desc: "The smart search filter system increased car survey prospect conversions by up to 30%." },
        { title: "Fast Dealer Interaction", desc: "Direct chat integration cut average dealer response times from 2 hours to 15 minutes." },
        { title: "Catalog Accuracy", desc: "Warehouse database synchronization ensures website car stock is 100% accurate with physical availability." }
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
    slug: "eureka-logistics-portal",
    title: "Eureka Logistics Portal",
    category: { id: "Pusat Logistik", en: "Logistics Hub" },
    type: "Internal Dashboard",
    desc: { 
      id: "Web Dashboard App khusus klien Eureka Logistics untuk melakukan order pengiriman armada, pengecekan kontainer secara real-time, dan pengelolaan dokumen invoice tagihan.", 
      en: "Dedicated Web Dashboard App for Eureka Logistics clients to order fleet shipments, check containers in real-time, and manage invoice documents." 
    },
    tags: ["React", "Spring Boot", "Redis"],
    image: "/elogs web.jpeg",
    icon: "Globe",
    accent: "text-teal-600 bg-teal-50 border-teal-100",
    url: "https://eurekalogistics.co.id/id",
    overview: {
      id: "Eureka Logistics Portal adalah solusi digital B2B yang dirancang untuk memudahkan pelanggan korporat dalam mengelola rantai pengiriman barang kontainer mereka. Melalui portal terpusat ini, klien dapat melakukan pemesanan kontainer, memantau posisi pengiriman secara langsung, mengunduh bukti tanda terima digital, serta meninjau tagihan invoice bulanan tanpa perlu bertukar email secara manual. Platform ini menghemat waktu operasional customer service dan meningkatkan transparansi pengiriman logistik multimodalnya.",
      en: "Eureka Logistics Portal is a B2B digital solution designed to ease corporate clients in managing their container shipment supply chain. Through this centralized portal, clients can place container orders, track shipment status live, download digital delivery receipts, and review monthly billing invoices without manual email exchange. The platform saves operational time for customer service and boosts transparency of its multimodal logistics."
    },
    challenges: {
      id: [
        "Menyinkronkan data status kontainer dari sistem pelacakan GPS pihak ketiga dengan delay sesingkat mungkin.",
        "Mengamankan data invoice tagihan bernilai besar agar hanya dapat diakses oleh staf keuangan berwenang dari pihak klien.",
        "Menyediakan pencarian log riwayat pengiriman kontainer tahunan secara cepat dari database yang membesar."
      ],
      en: [
        "Syncing container status data from third-party GPS tracking systems with minimal latency.",
        "Securing high-value billing invoice data so it is only accessible by authorized finance staff on the client side.",
        "Providing rapid searches of annual container shipment log history from a ballooning database."
      ]
    },
    solutions: {
      id: [
        "Membangun worker backend terjadwal yang memproses update koordinat kontainer ke cache Redis sebelum dialirkan ke klien.",
        "Menerapkan Role-Based Access Control (RBAC) ketat dengan token JWT yang kedaluwarsa secara berkala.",
        "Mengoptimalkan indeks query basis data relational PostgreSQL pada kolom nomor kontainer dan rentang tanggal pengiriman."
      ],
      en: [
        "Building a scheduled backend worker that processes container coordinate updates to Redis cache before streaming to client.",
        "Implementing strict Role-Based Access Control (RBAC) using short-lived JWT tokens.",
        "Optimizing relational database query indexes on container number and shipment date range columns."
      ]
    },
    workflow: {
      id: [
        { title: "Konsultasi", desc: "Mendalami alur supply chain B2B Eureka Logistics, status kontainer, dan parameter invoice." },
        { title: "Perencanaan", desc: "Merancang skema database pelacakan kontainer dan struktur integrasi API tracker." },
        { title: "Development", desc: "Membangun antarmuka portal klien dengan React dan memprogram API backend menggunakan Spring Boot." },
        { title: "Quality Assurance", desc: "Audit keamanan celah OWASP Top 10 dan pengujian respon query filter data log kontainer." },
        { title: "Launch & Support", desc: "Deploy ke server korporat Eureka, setup log monitoring, dan rilis akses portal ke klien pilot." },
      ],
      en: [
        { title: "Consultation", desc: "Deep-diving into Eureka's B2B supply chain workflows, container status lifecycles, and invoice parameters." },
        { title: "Planning", desc: "Designing container tracking database schemas and planning API tracker integrations." },
        { title: "Development", desc: "Building the client portal interface with React and programming backend APIs using Spring Boot." },
        { title: "Quality Assurance", desc: "Auditing security vulnerabilities against OWASP Top 10 and testing container log search speeds." },
        { title: "Launch & Support", desc: "Deploying to corporate servers, setting up log monitors, and launching portal access to pilot clients." },
      ]
    },
    screenshots: [
      "/elogs1.jpeg",
      "/elogs2.jpeg"
    ],
    impact: {
      id: [
        { title: "Efisiensi Input Data", desc: "Otomatisasi pengisian resi memangkas waktu kerja administratif tim hingga 2 jam per hari." },
        { title: "Transparansi Vendor", desc: "Portal mandiri menurunkan jumlah pertanyaan via telepon terkait status tagihan sebesar 60%." },
        { title: "Akurasi Laporan", desc: "Pembuatan laporan digital menghilangkan keseluruhan kesalahan rekapitulasi data manual." }
      ],
      en: [
        { title: "Data Entry Efficiency", desc: "Waybill automation slashed team administrative work time by up to 2 hours per day." },
        { title: "Vendor Transparency", desc: "The self-service portal reduced phone inquiries regarding invoice status by 60%." },
        { title: "Report Accuracy", desc: "Digital report generation completely eliminated manual data recapitulation errors." }
      ]
    }
  },
  {
    slug: "eureka-internal-erp",
    title: "Eureka Internal ERP",
    category: { id: "Sistem ERP Korporat", en: "Production ERP System" },
    type: "Internal Dashboard",
    desc: { 
      id: "Sistem ERP skala produksi full-module. Mencakup keseluruhan manajemen mulai dari penjualan, monitoring unit, service unit, pembuatan invoice otomatis, hingga integrasi data vendor lengkap dengan ekstraksi harga PO.", 
      en: "Full-module Production-scale ERP System. Covers overall management from sales, unit monitoring, service, automated invoice generation, to vendor data integration." 
    },
    tags: ["Next.js", "Odoo ERP API", "WebSockets", "TailwindCSS"],
    image: "/elogs dash.png",
    icon: "LineChart",
    accent: "text-cyan-600 bg-cyan-50 border-cyan-100",
    url: "/insights/eureka-logistics-case-study",
    isPrivate: true,
    overview: {
      id: "Eureka Internal ERP adalah jantung operasional dari seluruh divisi Eureka Logistics. Sistem ini menggabungkan berbagai fungsi bisnis yang sebelumnya terfragmentasi—mulai dari manajemen penawaran penjualan (sales order), pengawasan perawatan unit truk di bengkel internal, pembuatan tagihan otomatis, hingga pengadaan suku cadang dari vendor eksternal. Dengan mengotomatiskan ekstraksi harga dari Purchase Order (PO), ERP ini berhasil memangkas kesalahan input manual dan menyajikan laporan laba-rugi divisi secara real-time.",
      en: "Eureka Internal ERP is the operational heart of the entire Eureka Logistics division. This system unifies various business functions that were previously fragmented—from sales quotation management (sales orders), tracking maintenance of truck units at internal workshops, auto-invoicing, to spare part procurement from external vendors. By automating price extraction from Purchase Orders (PO), this ERP has slashed manual input errors and displays real-time division profit-and-loss reports."
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
    screenshots: [
      "/elogs dash.png",
      "/el sales report.jpeg",
      "/el so.jpeg",
      "/el dashboard auto.jpeg",
      "/driver monitoring el.jpeg",
      "/vehicle monitoring el.jpeg"
    ],
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
    image: "/HR CMS Das.png",
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
    screenshots: [
      "/hr1.png",
      "/hr2.png",
      "/hr3.png",
      "/hr4.png"
    ],
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
  }
];
