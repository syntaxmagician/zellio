// ============================================================
// ZELLIO – Insights & Craft Case Study Data
// ============================================================

export interface StoryDetail {
  body: string;
}

export interface Story {
  slug: string;
  category: string;
  title: string;
  desc: string;
  img: string;
  tags: string[];
  buttonText: string;
  duration: string;
  author: string;
  date: string;
  readTime: string;
  techStack: string[];
  id: {
    title: string;
    desc: string;
    buttonText: string;
    details: StoryDetail;
  };
  en: {
    title: string;
    desc: string;
    buttonText: string;
    details: StoryDetail;
  };
}

import { caseStudiesData } from "./caseStudiesData";

export const insightsData: Story[] = [
  {
    slug: "origins-of-zellio",
    category: "CULTURE",
    title: "The Origins of ZELLIO: Why We Founded Our Own Agency",
    desc: "How a group of former colleagues reunited to rebuild the standard of software development in Indonesia.",
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop",
    tags: ["Origins", "Engineering Ethics", "Transparency"],
    buttonText: "Read Story",
    duration: "Ongoing",
    author: "ZELLIO Founders",
    date: "August 02, 2026",
    readTime: "4 Min Read",
    techStack: ["Next.js", "PostgreSQL", "Docker", "Gantt Planning"],
    id: {
      title: "Asal-usul ZELLIO: Mengapa Kami Mendirikan Agensi Sendiri",
      desc: "Bagaimana sekelompok mantan kolega bersatu kembali untuk membangun standar baru pengembangan perangkat lunak di Indonesia.",
      buttonText: "Baca Selengkapnya",
      details: {
        body: `
          <h2 class="text-2xl md:text-3xl mt-0 mb-6 text-slate-900 font-bold">Berawal dari Satu Visi yang Sama</h2>
          <p>Kami, para pendiri ZELLIO, awalnya adalah rekan kerja di satu perusahaan teknologi yang sama. Selama bekerja bersama, kami membentuk sinergi yang kuat dan saling melengkapi keahlian satu sama lain. Meskipun perjalanan karier sempat memisahkan kami ke tempat kerja yang berbeda-beda, ikatan profesional dan mimpi bersama tetap terjaga. Kami akhirnya bersepakat untuk bersatu kembali dan mendirikan ZELLIO.</p>
          <p>Langkah ini bukan hanya untuk memajukan karier individu kami, melainkan dorongan kuat untuk memiliki bisnis perusahaan sendiri yang membawa standar baru dalam pengembangan sistem.</p>
          <br />
          <h2 class="text-2xl md:text-3xl mt-8 mb-6 text-slate-900 font-bold">Keresahan Terhadap Layanan Pembuatan Sistem Murah</h2>
          <p>Latar belakang berdirinya ZELLIO didasari oleh keprihatinan kami terhadap industri pembuatan perangkat lunak di Indonesia. Kami sering melihat penawaran pembuatan website atau sistem dengan harga sangat murah, namun hasilnya sangat kritis bagi bisnis klien: pengembang sulit dihubungi (jarang membalas pesan), tidak ada pembaruan berkala, sistem sering mengalami kerusakan (crash), dan kode dasarnya berantakan.</p>
          <blockquote class="pl-6 border-l-4 border-blue-600 bg-blue-50/50 py-4 pr-4 rounded-r-xl my-8 italic text-slate-700">
            "Perangkat lunak yang murah di awal sering kali menjadi investasi termahal yang merusak operasional bisnis Anda."
          </blockquote>
          <br />
          <h2 class="text-2xl md:text-3xl mt-8 mb-6 text-slate-900 font-bold">Misi ZELLIO: Membangun Sistem yang Kuat dan Transparan</h2>
          <p>Di ZELLIO, kami berkomitmen untuk mematahkan stigma tersebut. Kami ingin membangun sistem yang tangguh, terstruktur dengan kode bersih, dan mudah dikembangkan untuk jangka panjang. Lebih dari itu, kami mengutamakan transparansi dan komunikasi yang andal. Oleh karena itu, kami memberikan estimasi lini masa (timeline) yang realistis menggunakan Gantt chart dan membangun dashboard pemantauan proyek khusus agar setiap klien dapat melihat progres pengerjaan kami secara real-time.</p>
        `
      }
    },
    en: {
      title: "The Origins of ZELLIO: Why We Founded Our Own Agency",
      desc: "How a group of former colleagues reunited to rebuild the standard of software development in Indonesia.",
      buttonText: "Read Story",
      details: {
        body: `
          <h2 class="text-2xl md:text-3xl mt-0 mb-6 text-slate-900 font-bold">Reuniting Under a Shared Vision</h2>
          <p>The founders of ZELLIO originally started as colleagues at the same technology company. Over years of working together, we formed a tight-knit synergy, combining our strengths in design, backend architecture, and project execution. Even after our careers took us to different organizations, our professional bond and shared dream remained intact. We eventually agreed to reunite and establish ZELLIO.</p>
          <p>This step was not just to advance our personal careers, but to build our own enterprise that raises the standard of software development in our region.</p>
          <br />
          <h2 class="text-2xl md:text-3xl mt-8 mb-6 text-slate-900 font-bold">Frustration with Cheap, Broken Software</h2>
          <p>The driving force behind ZELLIO was our shared frustration with the current state of local software development. We noticed a flooding market of dirt-cheap website and system offers. However, the post-sale reality for these clients was disastrous: developers rarely replied to messages, systems were left unmaintained, and the codebases were so unstable they frequently crashed, halting business operations.</p>
          <blockquote class="pl-6 border-l-4 border-blue-600 bg-blue-50/50 py-4 pr-4 rounded-r-xl my-8 italic text-slate-700">
            "Cheap software initially almost always becomes the most expensive mistake for a growing company."
          </blockquote>
          <br />
          <h2 class="text-2xl md:text-3xl mt-8 mb-6 text-slate-900 font-bold">The ZELLIO Promise: Clean Systems & Real-time Transparency</h2>
          <p>At ZELLIO, we are dedicated to breaking this cycle. We focus on building resilient, clean-coded systems that scale effortlessly. But just as importantly, we prioritize professional communication. Every project is backed by a structured Gantt timeline and a dedicated progress monitoring dashboard, giving clients full, real-time visibility into the code we ship.</p>
        `
      }
    }
  },
  ...caseStudiesData,
  {
    slug: "eureka-logistics-case-study",
    category: "CASE STUDY",
    title: "Sistem Internal Logistics (Multi Business Unit)",
    desc: "Sistem Informasi Operasional Terintegrasi untuk mendigitalisasi alur kerja logistik di 2 unit bisnis sekaligus.",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
    tags: ["Logistics", "ERP Integration", "Real-time Dashboard"],
    buttonText: "Lihat Studi Kasus",
    duration: "4 Months",
    author: "ZELLIO Engineering",
    date: "August 02, 2026",
    readTime: "6 Min Read",
    techStack: ["Next.js", "Odoo ERP API", "PostgreSQL", "TailwindCSS", "WebSockets"],
    id: {
      title: "Sistem Internal Logistics (Multi Business Unit)",
      desc: "Sistem Informasi Operasional Terintegrasi untuk mendigitalisasi alur kerja logistik di 2 unit bisnis sekaligus.",
      buttonText: "Lihat Studi Kasus",
      details: {
        body: `
          <h2 class="text-2xl md:text-3xl mt-0 mb-6 text-slate-900 font-bold">Latar Belakang & Tantangan</h2>
          <p>Eureka Logistics membutuhkan digitalisasi menyeluruh untuk menghubungkan operasional lapangan dengan sistem manajemen pusat di 2 unit bisnis secara real-time. Proses sebelumnya bersifat manual dan terfragmentasi, memicu keterlambatan koordinasi dan risiko kesalahan input data operasional, terutama pada pengelolaan armada dan klaim keuangan driver.</p>
          <p>Tantangan teknis utama mencakup:</p>
          <ul class="list-disc pl-6 my-4 space-y-2">
            <li>Manajemen kompleks dari <strong>7 jenis tarif SO (Sales Order)</strong> yang harus terintegrasi dinamis dengan sistem Quotation.</li>
            <li>Validasi bertingkat yang ketat untuk persetujuan penawaran harga operasional.</li>
            <li>Sinkronisasi data pengiriman, penyerahan Surat Jalan (SJ), perhitungan Uang Jalan, serta add cost (biaya tambahan tak terduga) di perjalanan.</li>
          </ul>
          <br />
          <h2 class="text-2xl md:text-3xl mt-8 mb-6 text-slate-900 font-bold">Solusi ZELLIO: Sistem Informasi Operasional Terintegrasi</h2>
          <p>Kami merancang dan mengembangkan platform manajemen logistik khusus yang secara penuh mendigitalisasi seluruh alur kerja operasional Eureka Logistics. Sistem ini menghubungkan admin kantor, manajer operasional, dispatcher armada, hingga akuntansi ke dalam satu ekosistem terpadu.</p>
          <p>Dengan <strong>real-time operational dashboard</strong> yang ditenagai oleh koneksi WebSocket, semua perubahan status armada, posisi pengiriman, serta pembaruan dokumen Surat Jalan (SJ) langsung tersinkronisasi secara otomatis tanpa perlu memuat ulang halaman (page refresh). Data mutasi pengiriman langsung diintegrasikan dengan <strong>Odoo ERP API</strong> secara instan untuk efisiensi pembukuan keuangan perusahaan.</p>
          <br />
          <h3 class="text-xl md:text-2xl mt-8 mb-4 text-slate-900 font-bold">Kemampuan Utama Sistem (Core Capabilities)</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <div class="p-5 rounded-xl border border-slate-200 bg-white">
              <h4 class="font-bold text-slate-900 mb-2">Manajemen Sales Order (SO) & Quotation</h4>
              <p class="text-sm text-slate-600">Menangani 7 jenis struktur tarif SO yang terhubung ke Quotation dengan persetujuan bertingkat untuk meminimalisir kesalahan harga.</p>
            </div>
            <div class="p-5 rounded-xl border border-slate-200 bg-white">
              <h4 class="font-bold text-slate-900 mb-2">Manajemen Surat Jalan (SJ) & Keuangan Sopir</h4>
              <p class="text-sm text-slate-600">Pelacakan fisik SJ, perhitungan otomatis Uang Jalan, serta Add Cost jalan tol/parkir/ban bocor secara transparan.</p>
            </div>
            <div class="p-5 rounded-xl border border-slate-200 bg-white">
              <h4 class="font-bold text-slate-900 mb-2">Integrasi Odoo ERP</h4>
              <p class="text-sm text-slate-600">Sinkronisasi data transaksi otomatis dengan modul accounting Odoo untuk efisiensi audit internal perusahaan.</p>
            </div>
            <div class="p-5 rounded-xl border border-slate-200 bg-white">
              <h4 class="font-bold text-slate-900 mb-2">Real-time Vehicle & Driver Monitoring</h4>
              <p class="text-sm text-slate-600">Dashboard operasional dinamis yang otomatis memperbarui status muatan, kurir, dan performa armada logistik secara instan.</p>
            </div>
          </div>
          <br />
          <h2 class="text-2xl md:text-3xl mt-12 mb-6 text-slate-900 font-bold">Antarmuka Sistem (The Interface)</h2>
          <p class="mb-8">Berikut adalah tangkapan layar antarmuka sistem Eureka Logistics yang telah dideploy ke produksi. Semua data sensitif (seperti nama pelanggan, email, nomor telepon, dan nominal keuangan tertentu) telah disamarkan melalui proses Gaussian blur demi menjaga keamanan informasi klien.</p>
          <div class="flex flex-col gap-10">
            <div class="border border-slate-200 rounded-2xl overflow-hidden bg-white p-4 shadow-sm">
              <p class="text-xs font-mono text-slate-400 mb-3 uppercase tracking-wider">1. Dashboard Utama Operasional</p>
              <img src="/el dashboard auto.jpeg" alt="Dashboard Utama Eureka Logistics" class="w-full h-auto rounded-lg object-contain border border-slate-100" />
            </div>
            <div class="border border-slate-200 rounded-2xl overflow-hidden bg-white p-4 shadow-sm">
              <p class="text-xs font-mono text-slate-400 mb-3 uppercase tracking-wider">2. Pemantauan Kendaraan Logistik (Vehicle Monitoring)</p>
              <img src="/vehicle monitoring el.jpeg" alt="Vehicle Monitoring" class="w-full h-auto rounded-lg object-contain border border-slate-100" />
            </div>
            <div class="border border-slate-200 rounded-2xl overflow-hidden bg-white p-4 shadow-sm">
              <p class="text-xs font-mono text-slate-400 mb-3 uppercase tracking-wider">3. Pemantauan Status & Kinerja Driver</p>
              <img src="/driver monitoring el.jpeg" alt="Driver Monitoring" class="w-full h-auto rounded-lg object-contain border border-slate-100" />
            </div>
            <div class="border border-slate-200 rounded-2xl overflow-hidden bg-white p-4 shadow-sm">
              <p class="text-xs font-mono text-slate-400 mb-3 uppercase tracking-wider">4. Pembuatan & Manajemen Sales Order (SO)</p>
              <img src="/el so.jpeg" alt="Sales Order Management" class="w-full h-auto rounded-lg object-contain border border-slate-100" />
            </div>
            <div class="border border-slate-200 rounded-2xl overflow-hidden bg-white p-4 shadow-sm">
              <p class="text-xs font-mono text-slate-400 mb-3 uppercase tracking-wider">5. Laporan & Rekap Penjualan (Sales Report)</p>
              <img src="/el sales report.jpeg" alt="Sales Report" class="w-full h-auto rounded-lg object-contain border border-slate-100" />
            </div>
          </div>
        `
      }
    },
    en: {
      title: "Sistem Internal Logistics (Multi Business Unit)",
      desc: "Integrated Operational Information System to digitalize logistics workflows for 2 business units simultaneously.",
      buttonText: "View Case Study",
      details: {
        body: `
          <h2 class="text-2xl md:text-3xl mt-0 mb-6 text-slate-900 font-bold">The Challenge</h2>
          <p>Eureka Logistics required a comprehensive digital transformation to connect their field operations with central management across 2 separate business units in real-time. The previous manual processes led to coordination delays, delivery tracking blindspots, and higher risks of transaction discrepancies, particularly around driver allowances and cargo invoices.</p>
          <p>Key technical constraints included:</p>
          <ul class="list-disc pl-6 my-4 space-y-2">
            <li>Handling <strong>7 distinct Sales Order (SO) tariff structures</strong> that map dynamically to Quotations.</li>
            <li>Enforcing complex, multi-tiered validation workflows for custom quote approvals.</li>
            <li>Tracking trip milestones, Delivery Notes (Surat Jalan), driver allowances (Uang Jalan), and unexpected on-road additional costs.</li>
          </ul>
          <br />
          <h2 class="text-2xl md:text-3xl mt-8 mb-6 text-slate-900 font-bold">What We Built: Integrated Operations Management Platform</h2>
          <p>ZELLIO designed and developed a bespoke logistics management platform that fully digitalizes Eureka Logistics' daily workflows. The platform unites office administrators, dispatchers, truck drivers, and accountants into a single, cohesive application.</p>
          <p>By implementing a <strong>real-time operational dashboard</strong> built on top of secure WebSockets, fleet status changes and delivery progress update instantly across active client devices without requiring manual page reloads. Shipping manifests and operational records sync automatically via <strong>Odoo ERP API</strong> to facilitate automated bookkeeping.</p>
          <br />
          <h3 class="text-xl md:text-2xl mt-8 mb-4 text-slate-900 font-bold">Core Capabilities</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <div class="p-5 rounded-xl border border-slate-200 bg-white">
              <h4 class="font-bold text-slate-900 mb-2">Sales Order & Quotation Engine</h4>
              <p class="text-sm text-slate-600">Supports 7 complex tariff structures dynamically linked to quotations, requiring role-based validation to minimize price leakage.</p>
            </div>
            <div class="p-5 rounded-xl border border-slate-200 bg-white">
              <h4 class="font-bold text-slate-900 mb-2">Trip Expense & Add-Cost Billing</h4>
              <p class="text-sm text-slate-600">Automates calculation of driver allowances, road tolls, and unforeseen maintenance costs while digitizing physical receipt logs.</p>
            </div>
            <div class="p-5 rounded-xl border border-slate-200 bg-white">
              <h4 class="font-bold text-slate-900 mb-2">Direct Odoo ERP Integration</h4>
              <p class="text-sm text-slate-600">Automatically exports billing data, ledger details, and shipping records directly into corporate Odoo modules for real-time auditing.</p>
            </div>
            <div class="p-5 rounded-xl border border-slate-200 bg-white">
              <h4 class="font-bold text-slate-900 mb-2">Real-time Vehicle & Driver Monitoring</h4>
              <p class="text-sm text-slate-600">A high-performance WebSocket dashboard that updates delivery routes, driver assignments, and vehicle utilization instantly.</p>
            </div>
          </div>
          <br />
          <h2 class="text-2xl md:text-3xl mt-12 mb-6 text-slate-900 font-bold">The Interface</h2>
          <p class="mb-8">Below are authentic screenshots of the Eureka Logistics interface running in production. To preserve client privacy, all sensitive data fields (including client names, email addresses, phone numbers, and financials) have been securely redacted/blurred via a Gaussian filter.</p>
          <div class="flex flex-col gap-10">
            <div class="border border-slate-200 rounded-2xl overflow-hidden bg-white p-4 shadow-sm">
              <p class="text-xs font-mono text-slate-400 mb-3 uppercase tracking-wider">1. Core Operational Dashboard</p>
              <img src="/el dashboard auto.jpeg" alt="Eureka Logistics Operational Dashboard" class="w-full h-auto rounded-lg object-contain border border-slate-100" />
            </div>
            <div class="border border-slate-200 rounded-2xl overflow-hidden bg-white p-4 shadow-sm">
              <p class="text-xs font-mono text-slate-400 mb-3 uppercase tracking-wider">2. Vehicle Monitoring & Fleet Dispatch</p>
              <img src="/vehicle monitoring el.jpeg" alt="Vehicle Monitoring" class="w-full h-auto rounded-lg object-contain border border-slate-100" />
            </div>
            <div class="border border-slate-200 rounded-2xl overflow-hidden bg-white p-4 shadow-sm">
              <p class="text-xs font-mono text-slate-400 mb-3 uppercase tracking-wider">3. Driver Activity & Trip Statuses</p>
              <img src="/driver monitoring el.jpeg" alt="Driver Monitoring" class="w-full h-auto rounded-lg object-contain border border-slate-100" />
            </div>
            <div class="border border-slate-200 rounded-2xl overflow-hidden bg-white p-4 shadow-sm">
              <p class="text-xs font-mono text-slate-400 mb-3 uppercase tracking-wider">4. Sales Order (SO) Management</p>
              <img src="/el so.jpeg" alt="Sales Order Management" class="w-full h-auto rounded-lg object-contain border border-slate-100" />
            </div>
            <div class="border border-slate-200 rounded-2xl overflow-hidden bg-white p-4 shadow-sm">
              <p class="text-xs font-mono text-slate-400 mb-3 uppercase tracking-wider">5. Operational Sales Reports & Analytics</p>
              <img src="/el sales report.jpeg" alt="Sales Report" class="w-full h-auto rounded-lg object-contain border border-slate-100" />
            </div>
          </div>
        `
      }
    }
  },
  {
    slug: "crafting-the-foundation",
    category: "ENGINEERING",
    title: "Crafting the Foundation",
    desc: "We focus on clean, documented, and resilient systems. A calm, focused environment leads to the highest quality of structural integrity.",
    img: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1200&auto=format&fit=crop",
    tags: ["Architecture", "Focus", "Quality"],
    buttonText: "Read Story",
    duration: "Continuous",
    author: "Core Architecture Group",
    date: "June 28, 2026",
    readTime: "5 Min Read",
    techStack: ["TypeScript", "Next.js", "Docker", "ESLint"],
    id: {
      title: "Membangun Fondasi Kokoh",
      desc: "Fokus kami adalah pada sistem yang bersih, terdokumentasi, dan tangguh. Lingkungan yang tenang melahirkan kualitas struktur terbaik.",
      buttonText: "Baca Selengkapnya",
      details: {
        body: `
          <p class="text-xl font-medium text-slate-800 mb-6">Rekayasa perangkat lunak yang hebat tidak dibangun dalam ketergesaan. Di ZELLIO, kami mendedikasikan waktu untuk merancang arsitektur sistem yang bersih dan terdokumentasi dengan baik sebelum kode pertama ditulis.</p>
          <p>Banyak perusahaan menghadapi "utang teknis" yang menumpuk karena kode yang ditulis terburu-buru demi mengejar tenggat waktu. Akibatnya, sistem menjadi sulit diperbarui, lambat, dan rentan terhadap celah keamanan seiring pertumbuhan bisnis.</p>
          <br />
          <h3 class="text-xl md:text-2xl mt-8 mb-4 text-slate-900 font-bold border-b border-slate-200 pb-2">Pendekatan Arsitektur Kami</h3>
          <p>Kami menerapkan standar pemrograman global yang ketat, termasuk tinjauan kode sejawat (peer reviews) secara wajib, integrasi pengujian otomatis (CI/CD), dan arsitektur modular yang memisahkan logika bisnis dari lapisan presentasi.</p>
          <ul class="list-disc pl-6 my-6 space-y-2">
            <li>Sistem bebas bug dengan tingkat kegagalan produksi mendekati nol.</li>
            <li>Pembuatan fitur baru menjadi 50% lebih cepat karena basis kode yang rapi.</li>
            <li>Keamanan infrastruktur yang tahan terhadap perubahan skala.</li>
          </ul>
          <p>Pada akhirnya, fondasi yang kokoh adalah investasi terbaik yang bisa dilakukan oleh perusahaan mana pun.</p>
        `
      }
    },
    en: {
      title: "Crafting the Foundation",
      desc: "We focus on clean, documented, and resilient systems. A calm, focused environment leads to the highest quality of structural integrity.",
      buttonText: "Read Story",
      details: {
        body: `
          <p class="text-xl font-medium text-slate-800 mb-6">Great software engineering is not built in a rush. At ZELLIO, we dedicate time to craft clean and well-documented system architectures before the first line of code is written.</p>
          <p>Many companies face mounting "technical debt" due to rushed code written under tight deadlines. Consequently, systems become difficult to update, sluggish, and vulnerable to security flaws as the business scales.</p>
          <br />
          <h3 class="text-xl md:text-2xl mt-8 mb-4 text-slate-900 font-bold border-b border-slate-200 pb-2">Our Architectural Approach</h3>
          <p>We enforce strict global coding standards, including mandatory peer code reviews, automated integration testing (CI/CD), and modular architecture that cleanly separates business logic from the presentation layer.</p>
          <ul class="list-disc pl-6 my-6 space-y-2">
            <li>Bug-free deployments with a near-zero production failure rate.</li>
            <li>Development time for new features cut by 50% due to an incredibly readable codebase.</li>
            <li>Infrastructure security that effortlessly scales with demand.</li>
          </ul>
          <p>Ultimately, a strong foundation is the best long-term investment any enterprise can make.</p>
        `
      }
    }
  },
  {
    slug: "hris-corporate-case-study",
    category: "CASE STUDY",
    title: "Sistem HRIS & Portal Karyawan Terintegrasi",
    desc: "Platform HRIS terpadu dengan Single Sign-On (SSO), rekrutmen Kanban otomatis, dan 18+ modul pengajuan karyawan.",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
    tags: ["HRIS", "SSO Integration", "Kanban Recruitment"],
    buttonText: "Lihat Studi Kasus",
    duration: "6 Months",
    author: "ZELLIO Engineering",
    date: "August 02, 2026",
    readTime: "7 Min Read",
    techStack: ["Next.js", "Express.js", "Redis SSO", "PostgreSQL", "React Flow"],
    id: {
      title: "Sistem HRIS & Portal Karyawan Terintegrasi",
      desc: "Platform HRIS terpadu dengan Single Sign-On (SSO), rekrutmen Kanban otomatis, dan 18+ modul pengajuan karyawan.",
      buttonText: "Lihat Studi Kasus",
      details: {
        body: `
          <h2 class="text-2xl md:text-3xl mt-0 mb-6 text-slate-900 font-bold">Latar Belakang & Tantangan</h2>
          <p>Sebuah perusahaan berskala besar dengan ratusan karyawan membutuhkan satu sistem HRIS tersentralisasi untuk merapikan alur kerja administrasi karyawan yang sebelumnya terfragmentasi di berbagai aplikasi. Tantangan utama mencakup:</p>
          <ul class="list-disc pl-6 my-4 space-y-2">
            <li>Proses rekrutmen yang tidak efisien dari pendaftaran kandidat hingga onboarding.</li>
            <li>Kebutuhan <strong>Single Sign-On (SSO)</strong> yang aman untuk mengakses seluruh ekosistem internal perusahaan dengan satu kredensial.</li>
            <li>Kebutuhan digitalisasi penuh untuk <strong>18 modul pengajuan karyawan</strong> yang dinamis dan terintegrasi dengan struktur persetujuan bertingkat (approval workflow).</li>
          </ul>
          <br />
          <h2 class="text-2xl md:text-3xl mt-8 mb-6 text-slate-900 font-bold">Solusi ZELLIO: Portal Karyawan & HRIS Terpadu</h2>
          <p>Kami merancang dan mengembangkan sistem HRIS kustom lengkap dengan fitur SSO terpusat. Solusi ini mencakup siklus lengkap dari hulu ke hilir (End-to-End Employee Lifecycle):</p>
          <ul class="list-disc pl-6 my-4 space-y-2">
            <li><strong>Public-to-Private Candidate Portal</strong>: Calon karyawan menerima tautan privat yang aman untuk mengunggah dokumen pribadi mereka secara mandiri, mengurangi beban kerja admin HR dalam memasukkan data.</li>
            <li><strong>Kanban Recruitment Pipeline</strong>: Tim HR dan user manajer memantau serta memperbarui status kandidat menggunakan papan Kanban interaktif (Accept, Reject, Pending). Setelah kandidat disetujui untuk diterima, data langsung dikonversi menjadi data karyawan aktif secara instan.</li>
            <li><strong>Custom Printable PDF Generation</strong>: Sistem secara otomatis menghasilkan dokumen kontrak kerja, surat pengangkatan, atau lembar KPI sesuai dengan format resmi/kop surat perusahaan yang dapat langsung dicetak.</li>
            <li><strong>Single Sign-On (SSO)</strong>: Sistem login terpadu menggunakan Redis Session Store dan OAuth2 untuk otentikasi aman di semua anak aplikasi internal perusahaan.</li>
          </ul>
          <br />
          <h3 class="text-xl md:text-2xl mt-8 mb-4 text-slate-900 font-bold">18 Modul Pengajuan Karyawan yang Didukung</h3>
          <p>Sistem ini memfasilitasi 18 jenis alur kerja pengajuan operasional dan administratif secara digital:</p>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
            <div class="p-4 rounded-xl border border-slate-200 bg-white">
              <div class="flex items-center gap-2 mb-2">
                <span class="p-1.5 rounded-lg bg-blue-50 text-blue-600 text-xs font-bold font-mono">01</span>
                <h4 class="font-bold text-slate-900 text-sm">Permintaan SDM</h4>
              </div>
              <p class="text-xs text-slate-500">Pengajuan penambahan personel baru oleh kepala divisi.</p>
            </div>
            <div class="p-4 rounded-xl border border-slate-200 bg-white">
              <div class="flex items-center gap-2 mb-2">
                <span class="p-1.5 rounded-lg bg-blue-50 text-blue-600 text-xs font-bold font-mono">02</span>
                <h4 class="font-bold text-slate-900 text-sm">Kesehatan</h4>
              </div>
              <p class="text-xs text-slate-500">Klaim asuransi kesehatan, kacamata, dan rawat jalan.</p>
            </div>
            <div class="p-4 rounded-xl border border-slate-200 bg-white">
              <div class="flex items-center gap-2 mb-2">
                <span class="p-1.5 rounded-lg bg-blue-50 text-blue-600 text-xs font-bold font-mono">03</span>
                <h4 class="font-bold text-slate-900 text-sm">Promosi</h4>
              </div>
              <p class="text-xs text-slate-500">Usulan kenaikan jabatan karyawan oleh manajer terkait.</p>
            </div>
            <div class="p-4 rounded-xl border border-slate-200 bg-white">
              <div class="flex items-center gap-2 mb-2">
                <span class="p-1.5 rounded-lg bg-blue-50 text-blue-600 text-xs font-bold font-mono">04</span>
                <h4 class="font-bold text-slate-900 text-sm">Demosi</h4>
              </div>
              <p class="text-xs text-slate-500">Proses penurunan jabatan karyawan berdasarkan evaluasi kinerja.</p>
            </div>
            <div class="p-4 rounded-xl border border-slate-200 bg-white">
              <div class="flex items-center gap-2 mb-2">
                <span class="p-1.5 rounded-lg bg-blue-50 text-blue-600 text-xs font-bold font-mono">05</span>
                <h4 class="font-bold text-slate-900 text-sm">Mutasi</h4>
              </div>
              <p class="text-xs text-slate-500">Pemindahan area kerja atau rotasi departemen karyawan.</p>
            </div>
            <div class="p-4 rounded-xl border border-slate-200 bg-white">
              <div class="flex items-center gap-2 mb-2">
                <span class="p-1.5 rounded-lg bg-blue-50 text-blue-600 text-xs font-bold font-mono">06</span>
                <h4 class="font-bold text-slate-900 text-sm">Kenaikan Gaji</h4>
              </div>
              <p class="text-xs text-slate-500">Pengajuan penyesuaian gaji berkala atau kompensasi khusus.</p>
            </div>
            <div class="p-4 rounded-xl border border-slate-200 bg-white">
              <div class="flex items-center gap-2 mb-2">
                <span class="p-1.5 rounded-lg bg-blue-50 text-blue-600 text-xs font-bold font-mono">07</span>
                <h4 class="font-bold text-slate-900 text-sm">Pengangkatan</h4>
              </div>
              <p class="text-xs text-slate-500">Perubahan status dari karyawan kontrak (PKWT) menjadi karyawan tetap.</p>
            </div>
            <div class="p-4 rounded-xl border border-slate-200 bg-white">
              <div class="flex items-center gap-2 mb-2">
                <span class="p-1.5 rounded-lg bg-blue-50 text-blue-600 text-xs font-bold font-mono">08</span>
                <h4 class="font-bold text-slate-900 text-sm">Perpanjangan Kontrak</h4>
              </div>
              <p class="text-xs text-slate-500">Pembaruan masa kontrak kerja bagi staf PKWT aktif.</p>
            </div>
            <div class="p-4 rounded-xl border border-slate-200 bg-white">
              <div class="flex items-center gap-2 mb-2">
                <span class="p-1.5 rounded-lg bg-blue-50 text-blue-600 text-xs font-bold font-mono">09</span>
                <h4 class="font-bold text-slate-900 text-sm">Pemutusan Kontrak</h4>
              </div>
              <p class="text-xs text-slate-500">Prosedur formal pengakhiran kerja karena habis masa kontrak.</p>
            </div>
            <div class="p-4 rounded-xl border border-slate-200 bg-white">
              <div class="flex items-center gap-2 mb-2">
                <span class="p-1.5 rounded-lg bg-blue-50 text-blue-600 text-xs font-bold font-mono">10</span>
                <h4 class="font-bold text-slate-900 text-sm">Cuti</h4>
              </div>
              <p class="text-xs text-slate-500">Pengajuan cuti tahunan, sakit bersertifikat, atau cuti khusus melahirkan.</p>
            </div>
            <div class="p-4 rounded-xl border border-slate-200 bg-white">
              <div class="flex items-center gap-2 mb-2">
                <span class="p-1.5 rounded-lg bg-blue-50 text-blue-600 text-xs font-bold font-mono">11</span>
                <h4 class="font-bold text-slate-900 text-sm">Perjalanan Dinas</h4>
              </div>
              <p class="text-xs text-slate-500">Permohonan uang saku, tiket, dan hotel untuk penugasan luar kota.</p>
            </div>
            <div class="p-4 rounded-xl border border-slate-200 bg-white">
              <div class="flex items-center gap-2 mb-2">
                <span class="p-1.5 rounded-lg bg-blue-50 text-blue-600 text-xs font-bold font-mono">12</span>
                <h4 class="font-bold text-slate-900 text-sm">Perjalanan Dinas Training</h4>
              </div>
              <p class="text-xs text-slate-500">Pembiayaan dan surat tugas acara pelatihan/seminar eksternal.</p>
            </div>
            <div class="p-4 rounded-xl border border-slate-200 bg-white">
              <div class="flex items-center gap-2 mb-2">
                <span class="p-1.5 rounded-lg bg-blue-50 text-blue-600 text-xs font-bold font-mono">13</span>
                <h4 class="font-bold text-slate-900 text-sm">Keterangan Tidak Absen</h4>
              </div>
              <p class="text-xs text-slate-500">Form klarifikasi lupa absen mesin biometrik atau tugas luar dadakan.</p>
            </div>
            <div class="p-4 rounded-xl border border-slate-200 bg-white">
              <div class="flex items-center gap-2 mb-2">
                <span class="p-1.5 rounded-lg bg-blue-50 text-blue-600 text-xs font-bold font-mono">14</span>
                <h4 class="font-bold text-slate-900 text-sm">Izin Tidak Masuk</h4>
              </div>
              <p class="text-xs text-slate-500">Pemberitahuan izin berhalangan hadir dengan melampirkan berkas bukti.</p>
            </div>
            <div class="p-4 rounded-xl border border-slate-200 bg-white">
              <div class="flex items-center gap-2 mb-2">
                <span class="p-1.5 rounded-lg bg-blue-50 text-blue-600 text-xs font-bold font-mono">15</span>
                <h4 class="font-bold text-slate-900 text-sm">Pelatihan</h4>
              </div>
              <p class="text-xs text-slate-500">Program keikutsertaan sertifikasi atau pengembangan kompetensi internal.</p>
            </div>
            <div class="p-4 rounded-xl border border-slate-200 bg-white">
              <div class="flex items-center gap-2 mb-2">
                <span class="p-1.5 rounded-lg bg-blue-50 text-blue-600 text-xs font-bold font-mono">16</span>
                <h4 class="font-bold text-slate-900 text-sm">Pengunduran Diri</h4>
              </div>
              <p class="text-xs text-slate-500">Pemberitahuan pengunduran diri 30 hari sebelumnya dan pelaporan handover.</p>
            </div>
            <div class="p-4 rounded-xl border border-slate-200 bg-white">
              <div class="flex items-center gap-2 mb-2">
                <span class="p-1.5 rounded-lg bg-blue-50 text-blue-600 text-xs font-bold font-mono">17</span>
                <h4 class="font-bold text-slate-900 text-sm">PHK / Pensiun</h4>
              </div>
              <p class="text-xs text-slate-500">Prosedur akhir penyelesaian pesangon, BPJS, dan administrasi masa pensiun.</p>
            </div>
            <div class="p-4 rounded-xl border border-slate-200 bg-white">
              <div class="flex items-center gap-2 mb-2">
                <span class="p-1.5 rounded-lg bg-blue-50 text-blue-600 text-xs font-bold font-mono">18</span>
                <h4 class="font-bold text-slate-900 text-sm">Rekomendasi Keluar</h4>
              </div>
              <p class="text-xs text-slate-500">Generate surat referensi (paklaring) otomatis berdasar catatan HRIS positif.</p>
            </div>
          </div>
          <br />
          <h2 class="text-2xl md:text-3xl mt-12 mb-6 text-slate-900 font-bold">Antarmuka Portal (The Interface)</h2>
          <p class="mb-8">Berikut adalah visualisasi antarmuka sistem portal HRIS terpusat ini. Seluruh data identitas karyawan, nomor dokumen, profil pribadi, dan komponen gaji bersifat rahasia dan telah disamarkan secara permanen menggunakan <i>Gaussian Blur</i> demi menjaga keamanan privasi.</p>
          <div class="flex flex-col gap-10">
            <div class="border border-slate-200 rounded-2xl overflow-hidden bg-white p-4 shadow-sm">
              <p class="text-xs font-mono text-slate-400 mb-3 uppercase tracking-wider">1. Dashboard Portal Utama & Statistik HR</p>
              <img src="/hr1.png" alt="Dashboard Utama HRIS" class="w-full h-auto rounded-lg object-contain border border-slate-100" />
            </div>
            <div class="border border-slate-200 rounded-2xl overflow-hidden bg-white p-4 shadow-sm">
              <p class="text-xs font-mono text-slate-400 mb-3 uppercase tracking-wider">2. Alur Pengajuan Surat & Form Karyawan (18 Modul)</p>
              <img src="/hr2.png" alt="Form Pengajuan Karyawan" class="w-full h-auto rounded-lg object-contain border border-slate-100" />
            </div>
            <div class="border border-slate-200 rounded-2xl overflow-hidden bg-white p-4 shadow-sm">
              <p class="text-xs font-mono text-slate-400 mb-3 uppercase tracking-wider">3. Monitoring Perekrutan & Kanban Board Pelamar</p>
              <img src="/hr3.png" alt="Kanban Board Rekrutmen" class="w-full h-auto rounded-lg object-contain border border-slate-100" />
            </div>
            <div class="border border-slate-200 rounded-2xl overflow-hidden bg-white p-4 shadow-sm">
              <p class="text-xs font-mono text-slate-400 mb-3 uppercase tracking-wider">4. Manajemen Profil & Berkas Kandidat</p>
              <img src="/hr4.png" alt="Profil Kandidat" class="w-full h-auto rounded-lg object-contain border border-slate-100" />
            </div>
          </div>
        `
      }
    },
    en: {
      title: "Sistem HRIS & Portal Karyawan Terintegrasi",
      desc: "Integrated HRIS platform with Single Sign-On (SSO), automated Kanban recruitment, and 18+ employee request modules.",
      buttonText: "View Case Study",
      details: {
        body: `
          <h2 class="text-2xl md:text-3xl mt-0 mb-6 text-slate-900 font-bold">The Challenge</h2>
          <p>A large enterprise scale company with hundreds of employees needed a centralized HRIS system to streamline employee administration workflows that were previously fragmented across various disparate applications. Key challenges included:</p>
          <ul class="list-disc pl-6 my-4 space-y-2">
            <li>An inefficient recruitment process from candidate registration to onboarding.</li>
            <li>The absolute need for a secure <strong>Single Sign-On (SSO)</strong> to access the entire internal corporate app ecosystem using just one credential.</li>
            <li>Full digitization requirement for <strong>18 highly-dynamic employee request modules</strong>, all integrated with a multi-tiered approval workflow structure.</li>
          </ul>
          <br />
          <h2 class="text-2xl md:text-3xl mt-8 mb-6 text-slate-900 font-bold">What We Built: Integrated Employee Portal & HRIS</h2>
          <p>We designed and developed a bespoke, comprehensive HRIS system with a centralized SSO feature. This solution covers the entire End-to-End Employee Lifecycle:</p>
          <ul class="list-disc pl-6 my-4 space-y-2">
            <li><strong>Public-to-Private Candidate Portal</strong>: Prospective employees receive a secure, private link to upload their personal documents independently, heavily reducing HR admin data entry workload.</li>
            <li><strong>Kanban Recruitment Pipeline</strong>: The HR team and user managers track and update candidate status using an interactive Kanban board (Accept, Reject, Pending). Once accepted, candidate data is instantly converted into active employee records.</li>
            <li><strong>Custom Printable PDF Generation</strong>: The system automatically generates employment contracts, appointment letters, and KPI sheets according to the official corporate letterhead formats for direct printing.</li>
            <li><strong>Single Sign-On (SSO)</strong>: A unified login system powered by a Redis Session Store and OAuth2 for secure authentication across all internal corporate subsidiary applications.</li>
          </ul>
          <br />
          <h3 class="text-xl md:text-2xl mt-8 mb-4 text-slate-900 font-bold">18 Supported Employee Workflow Modules</h3>
          <p>The system digitally facilitates 18 types of operational and administrative request workflows:</p>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
            <div class="p-4 rounded-xl border border-slate-200 bg-white">
              <div class="flex items-center gap-2 mb-2">
                <span class="p-1.5 rounded-lg bg-blue-50 text-blue-600 text-xs font-bold font-mono">01</span>
                <h4 class="font-bold text-slate-900 text-sm">HR Request</h4>
              </div>
            </div>
            <div class="p-4 rounded-xl border border-slate-200 bg-white">
              <div class="flex items-center gap-2 mb-2">
                <span class="p-1.5 rounded-lg bg-blue-50 text-blue-600 text-xs font-bold font-mono">02</span>
                <h4 class="font-bold text-slate-900 text-sm">Health Benefits</h4>
              </div>
            </div>
            <div class="p-4 rounded-xl border border-slate-200 bg-white">
              <div class="flex items-center gap-2 mb-2">
                <span class="p-1.5 rounded-lg bg-blue-50 text-blue-600 text-xs font-bold font-mono">03</span>
                <h4 class="font-bold text-slate-900 text-sm">Promotion</h4>
              </div>
            </div>
            <div class="p-4 rounded-xl border border-slate-200 bg-white">
              <div class="flex items-center gap-2 mb-2">
                <span class="p-1.5 rounded-lg bg-blue-50 text-blue-600 text-xs font-bold font-mono">04</span>
                <h4 class="font-bold text-slate-900 text-sm">Demotion</h4>
              </div>
            </div>
            <div class="p-4 rounded-xl border border-slate-200 bg-white">
              <div class="flex items-center gap-2 mb-2">
                <span class="p-1.5 rounded-lg bg-blue-50 text-blue-600 text-xs font-bold font-mono">05</span>
                <h4 class="font-bold text-slate-900 text-sm">Transfer</h4>
              </div>
            </div>
            <div class="p-4 rounded-xl border border-slate-200 bg-white">
              <div class="flex items-center gap-2 mb-2">
                <span class="p-1.5 rounded-lg bg-blue-50 text-blue-600 text-xs font-bold font-mono">06</span>
                <h4 class="font-bold text-slate-900 text-sm">Salary Raise</h4>
              </div>
            </div>
            <div class="p-4 rounded-xl border border-slate-200 bg-white">
              <div class="flex items-center gap-2 mb-2">
                <span class="p-1.5 rounded-lg bg-blue-50 text-blue-600 text-xs font-bold font-mono">07</span>
                <h4 class="font-bold text-slate-900 text-sm">Appointment</h4>
              </div>
            </div>
            <div class="p-4 rounded-xl border border-slate-200 bg-white">
              <div class="flex items-center gap-2 mb-2">
                <span class="p-1.5 rounded-lg bg-blue-50 text-blue-600 text-xs font-bold font-mono">08</span>
                <h4 class="font-bold text-slate-900 text-sm">Contract Extension</h4>
              </div>
            </div>
            <div class="p-4 rounded-xl border border-slate-200 bg-white">
              <div class="flex items-center gap-2 mb-2">
                <span class="p-1.5 rounded-lg bg-blue-50 text-blue-600 text-xs font-bold font-mono">09</span>
                <h4 class="font-bold text-slate-900 text-sm">Termination</h4>
              </div>
            </div>
            <div class="p-4 rounded-xl border border-slate-200 bg-white">
              <div class="flex items-center gap-2 mb-2">
                <span class="p-1.5 rounded-lg bg-blue-50 text-blue-600 text-xs font-bold font-mono">10</span>
                <h4 class="font-bold text-slate-900 text-sm">Time Off / Leave</h4>
              </div>
            </div>
            <div class="p-4 rounded-xl border border-slate-200 bg-white">
              <div class="flex items-center gap-2 mb-2">
                <span class="p-1.5 rounded-lg bg-blue-50 text-blue-600 text-xs font-bold font-mono">11</span>
                <h4 class="font-bold text-slate-900 text-sm">Business Trip</h4>
              </div>
            </div>
            <div class="p-4 rounded-xl border border-slate-200 bg-white">
              <div class="flex items-center gap-2 mb-2">
                <span class="p-1.5 rounded-lg bg-blue-50 text-blue-600 text-xs font-bold font-mono">12</span>
                <h4 class="font-bold text-slate-900 text-sm">Training Trip</h4>
              </div>
            </div>
            <div class="p-4 rounded-xl border border-slate-200 bg-white">
              <div class="flex items-center gap-2 mb-2">
                <span class="p-1.5 rounded-lg bg-blue-50 text-blue-600 text-xs font-bold font-mono">13</span>
                <h4 class="font-bold text-slate-900 text-sm">Missing Attendance</h4>
              </div>
            </div>
            <div class="p-4 rounded-xl border border-slate-200 bg-white">
              <div class="flex items-center gap-2 mb-2">
                <span class="p-1.5 rounded-lg bg-blue-50 text-blue-600 text-xs font-bold font-mono">14</span>
                <h4 class="font-bold text-slate-900 text-sm">Permission Note</h4>
              </div>
            </div>
            <div class="p-4 rounded-xl border border-slate-200 bg-white">
              <div class="flex items-center gap-2 mb-2">
                <span class="p-1.5 rounded-lg bg-blue-50 text-blue-600 text-xs font-bold font-mono">15</span>
                <h4 class="font-bold text-slate-900 text-sm">Training Request</h4>
              </div>
            </div>
            <div class="p-4 rounded-xl border border-slate-200 bg-white">
              <div class="flex items-center gap-2 mb-2">
                <span class="p-1.5 rounded-lg bg-blue-50 text-blue-600 text-xs font-bold font-mono">16</span>
                <h4 class="font-bold text-slate-900 text-sm">Resignation</h4>
              </div>
            </div>
            <div class="p-4 rounded-xl border border-slate-200 bg-white">
              <div class="flex items-center gap-2 mb-2">
                <span class="p-1.5 rounded-lg bg-blue-50 text-blue-600 text-xs font-bold font-mono">17</span>
                <h4 class="font-bold text-slate-900 text-sm">Layoff / Retirement</h4>
              </div>
            </div>
            <div class="p-4 rounded-xl border border-slate-200 bg-white">
              <div class="flex items-center gap-2 mb-2">
                <span class="p-1.5 rounded-lg bg-blue-50 text-blue-600 text-xs font-bold font-mono">18</span>
                <h4 class="font-bold text-slate-900 text-sm">Exit Reference</h4>
              </div>
            </div>
          </div>
          <br />
          <h2 class="text-2xl md:text-3xl mt-12 mb-6 text-slate-900 font-bold">The Interface</h2>
          <p class="mb-8">Below is a visualization of the deployed HRIS portal interface. All employee identity data, document numbers, personal profiles, and salary components are strictly confidential and have been permanently redacted using <i>Gaussian Blur</i> to safeguard data privacy.</p>
          <div class="flex flex-col gap-10">
            <div class="border border-slate-200 rounded-2xl overflow-hidden bg-white p-4 shadow-sm">
              <p class="text-xs font-mono text-slate-400 mb-3 uppercase tracking-wider">1. Main Portal Dashboard & HR Stats</p>
              <img src="/hr1.png" alt="HRIS Main Dashboard" class="w-full h-auto rounded-lg object-contain border border-slate-100" />
            </div>
            <div class="border border-slate-200 rounded-2xl overflow-hidden bg-white p-4 shadow-sm">
              <p class="text-xs font-mono text-slate-400 mb-3 uppercase tracking-wider">2. Employee Form & Letter Workflows</p>
              <img src="/hr2.png" alt="Employee Request Forms" class="w-full h-auto rounded-lg object-contain border border-slate-100" />
            </div>
            <div class="border border-slate-200 rounded-2xl overflow-hidden bg-white p-4 shadow-sm">
              <p class="text-xs font-mono text-slate-400 mb-3 uppercase tracking-wider">3. Recruitment Kanban Board Tracker</p>
              <img src="/hr3.png" alt="Recruitment Kanban Board" class="w-full h-auto rounded-lg object-contain border border-slate-100" />
            </div>
            <div class="border border-slate-200 rounded-2xl overflow-hidden bg-white p-4 shadow-sm">
              <p class="text-xs font-mono text-slate-400 mb-3 uppercase tracking-wider">4. HRD Dashboard & Document Management</p>
              <img src="/hr4.png" alt="Candidate Profile" class="w-full h-auto rounded-lg object-contain border border-slate-100" />
            </div>
          </div>
        `
      }
    }
  }
];
