import fs from "fs";
import path from "path";
import puppeteer from "puppeteer";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const outDir = path.join(root, "public", "insights");

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// ─── BANNER CONFIGS ────────────────────────────────────────────────────────────
const banners = [
  // ─── 4 NOTEBOOK STYLE ────────────────────────────────────────────────────
  {
    slug: "7-tanda-website-lambat",
    type: "notebook",
    badge: "PANDUAN TEKNIS",
    badgeColor: "#1e3a8a",
    badgeBg: "#dbeafe",
    titleLines: ["7 TANDA", "WEBSITE", "ANDA LAMBAT"],
    titleAccentLine: 2, // index of accent-colored line (0-based)
    titleColor: "#1e293b",
    accentColor: "#2563eb",
    accentLight: "#dbeafe",
    bgLeft: "#f0f5ff",
    bgPage: "#f8f4ec",
    arrowColor: "#2563eb",
    notebook1Title: "Tanda Website Lambat",
    notebook1Points: [
      { icon: "⏱️", text: "Skor LCP di atas 4 detik" },
      { icon: "📐", text: "Cumulative Layout Shift > 0.1" },
      { icon: "🖼️", text: "Gambar tanpa kompresi WebP" },
      { icon: "⚡", text: "JavaScript render-blocking" },
      { icon: "🗄️", text: "Tidak ada Redis caching" },
    ],
    notebook2Title: "Solusi Teknis",
    notebook2Points: [
      { icon: "🌐", text: "Server tanpa CDN global" },
      { icon: "🔤", text: "Font tanpa font-display: swap" },
    ],
    tagText: "CORE\nWEB\nVITALS",
    tagColor: "#2563eb",
    stickyText: "Setiap detik\ndelay = 7%\nkonversi hilang!",
    stickyColor: "#bfdbfe",
    bottomIcons: [
      { icon: "⏱️", label: "Core Web\nVitals" },
      { icon: "✅", label: "Checklist\nTeknis" },
      { icon: "🖥️", label: "Optimasi\nServer" },
      { icon: "🖼️", label: "Optimasi\nGambar" },
      { icon: "💰", label: "ROI\nKonversi" },
    ],
    subtitle: "Analisis komparatif Core Web Vitals dan 7 indikator penurunan performa yang sering diabaikan bisnis."
  },
  {
    slug: "7-celah-maintenance-website",
    type: "notebook",
    badge: "SECURITY AUDIT",
    badgeColor: "#7f1d1d",
    badgeBg: "#fee2e2",
    titleLines: ["7 CELAH", "KEAMANAN", "FATAL"],
    titleAccentLine: 1,
    titleColor: "#1e293b",
    accentColor: "#dc2626",
    accentLight: "#fee2e2",
    bgLeft: "#fff5f5",
    bgPage: "#f9f4ec",
    arrowColor: "#dc2626",
    notebook1Title: "Celah Keamanan Website",
    notebook1Points: [
      { icon: "💉", text: "SQL Injection via plugin usang" },
      { icon: "🔓", text: "SSL certificate kedaluwarsa" },
      { icon: "🕳️", text: "Zero-day pada CMS End-of-Life" },
      { icon: "🚪", text: "API endpoint tanpa autentikasi" },
      { icon: "💾", text: "Backup tidak pernah diuji" },
    ],
    notebook2Title: "Risiko Lanjutan",
    notebook2Points: [
      { icon: "📦", text: "Dependensi dengan CVE tinggi" },
      { icon: "💳", text: "API payment gateway usang" },
    ],
    tagText: "WEBSITE\nSECURITY\nAUDIT",
    tagColor: "#dc2626",
    stickyText: "Maintenance\nmurah dari\nbencana data!",
    stickyColor: "#fecaca",
    bottomIcons: [
      { icon: "🔒", label: "Security\nAudit" },
      { icon: "📜", label: "SSL\nCertificate" },
      { icon: "🔄", label: "Patch\nOtomatis" },
      { icon: "☁️", label: "Backup\nRecovery" },
      { icon: "🛡️", label: "Proteksi\nData" },
    ],
    subtitle: "Risiko nyata yang mengintai website bisnis yang tidak dirawat dan dipantau secara rutin."
  },
  {
    slug: "7-jenis-bug-kritis-enterprise",
    type: "notebook",
    badge: "DEBUGGING GUIDE",
    badgeColor: "#7c2d12",
    badgeBg: "#fed7aa",
    titleLines: ["7 JENIS BUG", "KRITIS", "ENTERPRISE"],
    titleAccentLine: 1,
    titleColor: "#1e293b",
    accentColor: "#ea580c",
    accentLight: "#fed7aa",
    bgLeft: "#fff8f4",
    bgPage: "#f9f0e6",
    arrowColor: "#ea580c",
    notebook1Title: "Bug Kritis di Sistem Produksi",
    notebook1Points: [
      { icon: "🔀", text: "Race condition pada concurrent user" },
      { icon: "🧠", text: "Memory leak yang terus membengkak" },
      { icon: "🔢", text: "Integer overflow di transaksi keuangan" },
      { icon: "🔐", text: "Deadlock di database multi-tabel" },
      { icon: "🕵️", text: "XSS & CSRF lolos dari sanitasi" },
    ],
    notebook2Title: "Bug Tersembunyi",
    notebook2Points: [
      { icon: "📄", text: "Off-by-one error di pagination" },
      { icon: "🎭", text: "Session fixation — hijack akun" },
    ],
    tagText: "BUG\nKRITIS\nSISTEM",
    tagColor: "#ea580c",
    stickyText: "Bug ini butuh\nsenior engineer,\nbukan junior!",
    stickyColor: "#fed7aa",
    bottomIcons: [
      { icon: "🐛", label: "Bug\nTracking" },
      { icon: "🔍", label: "Code\nReview" },
      { icon: "🧪", label: "Testing\nOtomatis" },
      { icon: "📝", label: "Post-mortem\nAnalysis" },
      { icon: "🛠️", label: "Hotfix\nDeploy" },
    ],
    subtitle: "Bug-bug ini bukan sekadar error — mereka bisa menghentikan operasional bisnis Anda sepenuhnya."
  },
  {
    slug: "7-fitur-wajib-dashboard-admin",
    type: "notebook",
    badge: "PRODUCT DESIGN",
    badgeColor: "#78350f",
    badgeBg: "#fef3c7",
    titleLines: ["7 FITUR WAJIB", "DASHBOARD", "ADMIN"],
    titleAccentLine: 1,
    titleColor: "#1e293b",
    accentColor: "#d97706",
    accentLight: "#fef3c7",
    bgLeft: "#fffdf0",
    bgPage: "#f9f4e0",
    arrowColor: "#d97706",
    notebook1Title: "Fitur Wajib Admin Dashboard",
    notebook1Points: [
      { icon: "👥", text: "Role-based access control (RBAC)" },
      { icon: "📊", text: "Real-time analytics + filter custom" },
      { icon: "📋", text: "Audit log setiap aksi admin otomatis" },
      { icon: "📤", text: "Bulk import/export CSV & Excel" },
      { icon: "🔔", text: "Notifikasi email + WhatsApp terintegrasi" },
    ],
    notebook2Title: "Fitur Lanjutan",
    notebook2Points: [
      { icon: "👤", text: "Manajemen user tanpa coding" },
      { icon: "🔗", text: "API webhook untuk integrasi eksternal" },
    ],
    tagText: "ADMIN\nDASH-\nBOARD",
    tagColor: "#d97706",
    stickyText: "Dashboard\nbukan dashboard\ntanpa 7 fitur ini!",
    stickyColor: "#fde68a",
    bottomIcons: [
      { icon: "👥", label: "Role &\nPermission" },
      { icon: "📊", label: "Analytics\nReal-time" },
      { icon: "📋", label: "Audit\nLog" },
      { icon: "🔔", label: "Notifikasi\nPintar" },
      { icon: "🔗", label: "API\nIntegrasi" },
    ],
    subtitle: "Bukan sekedar tampilan angka — ini fondasi operasional bisnis yang efisien dan terkelola."
  },
  // ─── 3 VS STYLE ──────────────────────────────────────────────────────────
  {
    slug: "shopify-vs-woocommerce-7-perbedaan",
    type: "vs",
    badge: "PERBANDINGAN PLATFORM",
    titleA: "Shopify",
    titleVS: "vs",
    titleB: "WooCommerce:",
    headline: "Mana yang Cocok\nuntuk Bisnis Anda?",
    subtitle: "Perbandingan 7 parameter krusial: biaya, kontrol, ekosistem, dan skalabilitas.",
    colorA: "#96bf48",
    colorB: "#7f54b3",
    bgColor: "#f0f7ed",
    bgScreen: "#f8fdf5",
    logoA: `<div style="width:52px;height:52px;border-radius:10px;background:linear-gradient(135deg,#a8d060,#78a832);display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:white;font-family:Georgia,serif;box-shadow:0 4px 12px #96bf4855;">S</div>`,
    logoB: `<div style="width:52px;height:52px;border-radius:10px;background:linear-gradient(135deg,#9b6bd6,#6a3da8);display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:900;color:white;font-family:system-ui;letter-spacing:-0.5px;box-shadow:0 4px 12px #7f54b355;">Woo</div>`,
    labelA: "Shopify",
    labelB: "WooCommerce",
    pointsA: ["All-in-One, Siap Pakai", "Hosting & CDN Terkelola", "Keamanan & SSL Otomatis", "App Store 8.000+ Plugin"],
    pointsB: ["Open Source & Gratis", "Kustomisasi Tanpa Batas", "Kontrol Penuh Atas Data", "Ekosistem WordPress Luas"],
    screenBg: "#f8fdf5",
    icons: [
      { emoji: "🛍️", label: "Mudah\nDigunakan" },
      { emoji: "🔧", label: "Fleksibel\n& Terbuka" },
      { emoji: "💰", label: "Biaya\nTerkelola" },
      { emoji: "📈", label: "Bisa\nBerkembang" },
    ]
  },
  {
    slug: "flutter-vs-react-native-7-parameter",
    type: "vs",
    badge: "PERBANDINGAN FRAMEWORK",
    titleA: "Flutter",
    titleVS: "vs",
    titleB: "React Native:",
    headline: "Framework Mana\nuntuk App Anda?",
    subtitle: "7 parameter teknis: performa, ekosistem, biaya SDM, dan kecepatan ship fitur.",
    colorA: "#027DFD",
    colorB: "#222222",
    bgColor: "#eef6ff",
    screenBg: "#f0f8ff",
    logoA: `<div style="width:52px;height:52px;border-radius:10px;background:linear-gradient(135deg,#3b9eff,#0055cc);display:flex;align-items:center;justify-content:center;font-size:26px;box-shadow:0 4px 12px #027DFD55;">🐦</div>`,
    logoB: `<div style="width:52px;height:52px;border-radius:10px;background:linear-gradient(135deg,#444,#111);display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900;color:#61DAFB;font-family:monospace;letter-spacing:-0.3px;box-shadow:0 4px 12px #00000044;">⚛ RN</div>`,
    labelA: "Flutter",
    labelB: "React Native",
    pointsA: ["Performa Animasi Superior", "Satu Codebase: iOS+Android+Web", "Engine Skia — Render Sendiri", "Desktop & Embedded Support"],
    pointsB: ["JS/TypeScript Familiar", "OTA Updates via CodePush", "Code-sharing dg React Web", "Ekosistem npm Sangat Besar"],
    icons: [
      { emoji: "📱", label: "Cross-\nPlatform" },
      { emoji: "⚡", label: "Performa\nTinggi" },
      { emoji: "💰", label: "Satu\nCodebase" },
      { emoji: "🚀", label: "Ship\nLebih Cepat" },
    ]
  },
  {
    slug: "7-indikator-bisnis-siap-chatbot-ai",
    type: "vs",
    badge: "ANALISIS BISNIS",
    titleA: "Tim CS",
    titleVS: "vs",
    titleB: "AI Chatbot:",
    headline: "Kapan Bisnis Anda\nSiap Pakai Chatbot?",
    subtitle: "7 indikator yang menentukan apakah AI chatbot tepat untuk bisnis Anda sekarang.",
    colorA: "#475569",
    colorB: "#7c3aed",
    bgColor: "#f5f0ff",
    screenBg: "#faf8ff",
    logoA: `<div style="width:52px;height:52px;border-radius:10px;background:linear-gradient(135deg,#64748b,#334155);display:flex;align-items:center;justify-content:center;font-size:24px;box-shadow:0 4px 12px #47556944;">👥</div>`,
    logoB: `<div style="width:52px;height:52px;border-radius:10px;background:linear-gradient(135deg,#8b5cf6,#5b21b6);display:flex;align-items:center;justify-content:center;font-size:24px;box-shadow:0 4px 12px #7c3aed55;">🤖</div>`,
    labelA: "Tim CS Manual",
    labelB: "AI Chatbot",
    pointsA: ["Empati & Judgment Manusiawi", "Tangani Kasus Non-Standar", "Bangun Relasi Personal", "Fleksibel di Situasi Unik"],
    pointsB: ["Respons Instan 24/7/365", "Skala Tanpa Batas Agen", "Biaya Operasional Rendah", "Konsisten Tanpa Burnout"],
    icons: [
      { emoji: "💬", label: "Respons\n24/7" },
      { emoji: "🚀", label: "Skala\nOtomatis" },
      { emoji: "🎯", label: "Akurasi\nTerprogram" },
      { emoji: "💡", label: "7 Indikator\nKesiapan" },
    ]
  },
];

// ─── NOTEBOOK TEMPLATE (premium photorealistic infographic style) ─────────────
function notebookTemplate(cfg) {
  const {
    badge, badgeColor, badgeBg, titleLines, titleAccentLine, titleColor, accentColor, accentLight,
    bgLeft, bgPage, arrowColor, notebook1Title, notebook1Points, notebook2Title, notebook2Points,
    tagText, tagColor, stickyText, stickyColor, bottomIcons, subtitle
  } = cfg;

  // Generate spiral rings as div elements for vertical layout
  const spiralCount = 12;
  const spirals1 = Array(spiralCount).fill(0).map(() =>
    `<div style="width:20px;height:20px;border-radius:50%;border:3px solid #a8a098;background:white;box-shadow:inset 0 1px 3px rgba(0,0,0,0.15),0 1px 2px rgba(0,0,0,0.08);flex-shrink:0;"></div>`
  ).join('');

  const spirals2 = Array(8).fill(0).map(() =>
    `<div style="width:18px;height:18px;border-radius:50%;border:2.5px solid #a8a098;background:white;box-shadow:inset 0 1px 2px rgba(0,0,0,0.12);flex-shrink:0;"></div>`
  ).join('');

  const nb1Points = notebook1Points.map(p => `
    <div style="display:flex;align-items:center;gap:10px;padding:10px 0;border-bottom:1px solid #ede8e0;">
      <div style="width:26px;height:26px;background:${accentLight};border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0;">${p.icon}</div>
      <span style="font-size:14px;color:#1e293b;font-weight:700;line-height:1.3;font-family:'Georgia',serif;">${p.text}</span>
    </div>
  `).join('');

  const nb2Points = notebook2Points.map(p => `
    <div style="display:flex;align-items:center;gap:10px;padding:9px 0;border-bottom:1px dashed #d4cfc0;">
      <div style="width:22px;height:22px;background:white;border:2px solid ${accentColor};border-radius:4px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="${accentColor}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
      </div>
      <span style="font-size:12.5px;color:#374151;font-weight:700;font-family:'Georgia',serif;">${p.text}</span>
    </div>
  `).join('');

  const titleHtml = titleLines.map((line, i) => {
    const isAccent = i === titleAccentLine;
    return `<div style="font-size:${i===0?'64px':'72px'};font-weight:900;letter-spacing:-0.03em;line-height:0.92;color:${isAccent ? accentColor : titleColor};font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">${line}</div>`;
  }).join('');

  const iconsHtml = bottomIcons.map(i => `
    <div style="display:flex;flex-direction:column;align-items:center;gap:6px;min-width:76px;">
      <div style="width:46px;height:46px;background:white;border-radius:12px;border:1.5px solid ${accentColor}33;display:flex;align-items:center;justify-content:center;font-size:22px;box-shadow:0 3px 10px rgba(0,0,0,0.08);">${i.icon}</div>
      <span style="font-size:10px;font-weight:700;text-align:center;color:#475569;line-height:1.35;white-space:pre-line;">${i.label}</span>
    </div>
  `).join('');

  return `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
* { box-sizing: border-box; margin: 0; padding: 0; }
body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  width: 1200px; height: 800px; overflow: hidden;
  background: ${bgLeft};
  display: flex; align-items: stretch;
  position: relative;
}
</style>
</head>
<body>

<!-- Big dark blob top-left -->
<div style="position:absolute;top:-120px;left:-120px;width:360px;height:360px;border-radius:50%;background:${badgeColor};opacity:0.92;pointer-events:none;z-index:1;"></div>

<!-- Decorative dot grid left panel -->
<div style="position:absolute;left:260px;top:180px;display:grid;grid-template-columns:repeat(4,1fr);gap:10px;opacity:0.35;z-index:1;">
  ${Array(16).fill(`<div style="width:5px;height:5px;border-radius:50%;background:${accentColor};"></div>`).join('')}
</div>

<!-- ══════════════ LEFT PANEL ══════════════ -->
<div style="flex:0 0 400px;padding:52px 32px 40px 52px;display:flex;flex-direction:column;justify-content:space-between;position:relative;z-index:10;">

  <!-- Badge -->
  <div>
    <div style="display:inline-flex;align-items:center;gap:8px;background:${badgeBg};color:${badgeColor};font-size:11px;font-weight:800;letter-spacing:0.12em;text-transform:uppercase;padding:7px 14px;border-radius:8px;width:max-content;margin-bottom:28px;border:1.5px solid ${accentColor}33;">
      <span style="font-size:14px;">📋</span> ${badge}
    </div>

    <!-- Title -->
    <div style="margin-bottom:20px;">
      ${titleHtml}
    </div>

    <!-- Subtitle -->
    <p style="font-size:13px;line-height:1.75;color:#64748b;font-weight:500;border-left:4px solid ${accentColor};padding-left:14px;max-width:300px;">${subtitle}</p>
  </div>

  <!-- Bottom icons row -->
  <div style="display:flex;gap:12px;align-items:flex-end;flex-wrap:wrap;">
    ${iconsHtml}
  </div>
</div>

<!-- ══════════════ RIGHT PANEL: Desk Scene ══════════════ -->
<div style="flex:1;position:relative;overflow:hidden;">

  <!-- Cream/warm background for the desk surface -->
  <div style="position:absolute;inset:0;background:linear-gradient(160deg,#f5f0e8 0%,#ece6d8 60%,#e0d8c8 100%);"></div>

  <!-- ── DECORATIVE: curved arrow ── -->
  <svg style="position:absolute;top:40px;left:-10px;z-index:5;" width="120" height="100" viewBox="0 0 120 100">
    <path d="M20 80 Q60 10 100 40" fill="none" stroke="${arrowColor}" stroke-width="2.5" stroke-dasharray="none" stroke-linecap="round"/>
    <polygon points="95,28 100,42 108,32" fill="${arrowColor}"/>
  </svg>

  <!-- ── PLANT (top-right decorative) ── -->
  <div style="position:absolute;top:-10px;right:20px;z-index:8;font-size:90px;line-height:1;filter:drop-shadow(0 8px 16px rgba(0,0,0,0.15));">🪴</div>

  <!-- ── COFFEE CUP (mid-right) ── -->
  <div style="position:absolute;top:130px;right:32px;z-index:8;font-size:58px;filter:drop-shadow(0 6px 12px rgba(0,0,0,0.12));">☕</div>

  <!-- ── PEN ── -->
  <div style="position:absolute;bottom:180px;right:28px;z-index:8;font-size:48px;transform:rotate(-30deg);filter:drop-shadow(0 4px 8px rgba(0,0,0,0.1));">🖊️</div>

  <!-- ── NOTEBOOK 1: MAIN (tilted slightly) — LEFT SIDE SPIRAL BINDING ── -->
  <div style="position:absolute;top:24px;left:24px;width:430px;z-index:6;transform:rotate(-2deg);display:flex;">
    <!-- Drop shadow layer -->
    <div style="position:absolute;left:30px;top:8px;right:-8px;bottom:-8px;background:rgba(0,0,0,0.12);border-radius:12px;filter:blur(10px);z-index:-1;"></div>
    <!-- Spiral binding column (left side, vertical) -->
    <div style="width:36px;flex-shrink:0;background:linear-gradient(180deg,#c8c0b0,#d8d0c0);border-radius:8px 0 0 8px;border:1px solid #b8b0a0;border-right:none;display:flex;flex-direction:column;align-items:center;padding:16px 0;gap:0;justify-content:space-around;position:relative;z-index:2;">
      ${spirals1}
    </div>
    <!-- Notebook pages -->  
    <div style="flex:1;background:white;border-radius:0 10px 10px 0;border:1px solid #e8e2d8;border-left:none;box-shadow:2px 0 0 #f0ece4 inset,0 12px 30px rgba(0,0,0,0.1);">
      <!-- Ruled lines background -->
      <div style="padding:20px 20px 16px;background:repeating-linear-gradient(to bottom,transparent,transparent 31px,#f0ece855 31px,#f0ece855 32px);">
        <div style="font-size:15.5px;font-weight:700;color:#1e293b;border-bottom:2.5px solid ${accentColor};padding-bottom:8px;margin-bottom:4px;font-family:'Georgia',serif;font-style:italic;">${notebook1Title}</div>
        ${nb1Points}
      </div>
    </div>
  </div>

  <!-- ── NOTEBOOK 2: SECONDARY (bottom-right corner, different paper tone, rotated) ── -->
  <div style="position:absolute;bottom:100px;right:90px;width:300px;z-index:7;transform:rotate(3deg);display:flex;">
    <div style="position:absolute;left:28px;top:6px;right:-6px;bottom:-6px;background:rgba(0,0,0,0.10);border-radius:8px;filter:blur(7px);z-index:-1;"></div>
    <!-- Spiral binding -->
    <div style="width:30px;flex-shrink:0;background:linear-gradient(180deg,#b8b0a0,#cac2b0);border-radius:6px 0 0 6px;border:1px solid #a8a090;border-right:none;display:flex;flex-direction:column;align-items:center;padding:12px 0;justify-content:space-around;">
      ${spirals2}
    </div>
    <!-- Pages -->
    <div style="flex:1;background:#fffdf5;border-radius:0 8px 8px 0;border:1px solid #e0d8c8;border-left:none;">
      <div style="padding:14px 16px;background:repeating-linear-gradient(to bottom,transparent,transparent 27px,#f0e8d855 27px,#f0e8d855 28px);">
        <div style="font-size:13px;font-weight:700;color:${accentColor};margin-bottom:8px;font-family:'Georgia',serif;font-style:italic;">${notebook2Title}</div>
        ${nb2Points}
      </div>
    </div>
  </div>

  <!-- ── PRICE TAG / LABEL (center, floating) ── -->
  <div style="position:absolute;bottom:240px;left:200px;z-index:8;transform:rotate(-8deg);">
    <!-- String -->
    <div style="width:2px;height:30px;background:#8b7355;margin:0 auto;border-radius:1px;"></div>
    <!-- Tag body -->
    <div style="background:linear-gradient(160deg,#f0e8d0,#e8dcc0);border:1px solid #c8b898;border-radius:6px 6px 6px 6px;padding:14px 16px;box-shadow:0 6px 16px rgba(0,0,0,0.12);position:relative;width:90px;text-align:center;margin-top:0;">
      <!-- Tag hole -->
      <div style="position:absolute;top:8px;left:50%;transform:translateX(-50%);width:10px;height:10px;border-radius:50%;border:2px solid #8b7355;background:#f0e8d0;"></div>
      <!-- Tag content -->
      <div style="margin-top:12px;">
        <div style="font-size:11px;font-weight:900;color:${tagColor};letter-spacing:0.05em;text-transform:uppercase;line-height:1.3;font-family:'Georgia',serif;white-space:pre-line;">${tagText}</div>
        <!-- Barcode lines -->
        <div style="display:flex;gap:2px;justify-content:center;margin-top:8px;">
          ${Array(8).fill(0).map((_, i) => `<div style="width:${i%3===0?3:2}px;height:18px;background:#4a3a2a;border-radius:1px;"></div>`).join('')}
        </div>
      </div>
    </div>
  </div>

  <!-- ── STICKY NOTE ── -->
  <div style="position:absolute;bottom:130px;left:80px;z-index:9;width:140px;transform:rotate(3deg);">
    <div style="background:${stickyColor};border-radius:2px;padding:14px 14px 20px;box-shadow:3px 4px 12px rgba(0,0,0,0.18),0 1px 3px rgba(0,0,0,0.08);">
      <!-- Sticky top fold line -->
      <div style="position:absolute;top:0;right:0;width:0;height:0;border-style:solid;border-width:0 20px 20px 0;border-color:transparent rgba(0,0,0,0.08) transparent transparent;"></div>
      <div style="font-size:12px;font-weight:700;color:${badgeColor};line-height:1.6;text-align:center;font-family:'Georgia',serif;font-style:italic;white-space:pre-line;">${stickyText}</div>
    </div>
  </div>

  <!-- ── LIGHT BULB icon floating ── -->
  <div style="position:absolute;bottom:210px;left:360px;z-index:8;font-size:44px;filter:drop-shadow(0 4px 8px rgba(0,0,0,0.1));">💡</div>

  <!-- ZELLIO watermark -->
  <div style="position:absolute;bottom:16px;right:16px;z-index:20;opacity:0.6;">
    <svg viewBox="0 0 120 36" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:72px;height:auto;">
      <path d="M8 28L20 8H8" stroke="#1e3a5f" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M20 8L32 28" stroke="#2563eb" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M8 28H32" stroke="#1e3a5f" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      <text x="40" y="25" font-family="system-ui, sans-serif" font-weight="900" font-size="18" fill="#1e3a5f" letter-spacing="1">ZELLIO</text>
    </svg>
  </div>

</div>
</body>
</html>`;
}

// ─── VS TEMPLATE (premium laptop split-screen style) ─────────────────────────
function vsTemplate(cfg) {
  const { badge, titleA, titleVS, titleB, headline, subtitle, colorA, colorB, bgColor, screenBg, logoA, logoB, labelA, labelB, pointsA, pointsB, icons } = cfg;

  const checkA = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="${colorA}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>`;
  const checkB = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="${colorB}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>`;

  const pointsAHtml = pointsA.map(p => `
    <div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid #f0f0f0;">
      ${checkA}
      <span style="font-size:13px;font-weight:600;color:#1e293b;">${p}</span>
    </div>
  `).join('');

  const pointsBHtml = pointsB.map(p => `
    <div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid #f0f0f0;">
      ${checkB}
      <span style="font-size:13px;font-weight:600;color:#1e293b;">${p}</span>
    </div>
  `).join('');

  const headlineLines = headline.split('\n');

  const iconsHtml = icons.map(i => `
    <div style="display:flex;flex-direction:column;align-items:center;gap:6px;min-width:80px;">
      <div style="width:52px;height:52px;border-radius:14px;background:white;border:1.5px solid ${colorA}33;display:flex;align-items:center;justify-content:center;font-size:24px;box-shadow:0 3px 10px rgba(0,0,0,0.07);">${i.emoji}</div>
      <span style="font-size:10px;font-weight:700;text-align:center;color:#64748b;line-height:1.35;white-space:pre-line;">${i.label}</span>
    </div>
  `).join('');

  return `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
* { box-sizing: border-box; margin: 0; padding: 0; }
body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  width: 1200px; height: 800px; overflow: hidden;
  background: ${bgColor};
  display: flex; align-items: stretch;
  position: relative;
}
</style>
</head>
<body>

<!-- Decorative blob top-left -->
<div style="position:absolute;top:-100px;left:-100px;width:300px;height:300px;border-radius:50%;background:${colorA};opacity:0.15;z-index:1;pointer-events:none;"></div>
<!-- Dots top right -->
<div style="position:absolute;top:28px;right:32px;z-index:2;display:grid;grid-template-columns:repeat(5,1fr);gap:7px;opacity:0.4;">
  ${Array(20).fill(`<div style="width:5px;height:5px;border-radius:50%;background:${colorA};"></div>`).join('')}
</div>
<!-- Blob bottom right -->
<div style="position:absolute;bottom:-80px;right:260px;width:200px;height:200px;border-radius:50%;background:${colorB};opacity:0.12;z-index:1;pointer-events:none;"></div>

<!-- ══════════════ LEFT PANEL ══════════════ -->
<div style="flex:0 0 430px;padding:48px 36px 44px 52px;display:flex;flex-direction:column;justify-content:space-between;position:relative;z-index:10;">

  <!-- Badge -->
  <div style="display:inline-flex;align-items:center;gap:8px;background:#1e293b;color:white;font-size:10px;font-weight:800;letter-spacing:0.15em;text-transform:uppercase;padding:7px 14px;border-radius:7px;width:max-content;margin-bottom:24px;">
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
    ZELLIO · ${badge}
  </div>

  <!-- Title block -->
  <div style="margin-bottom:20px;">
    <!-- A vs B -->
    <div style="display:flex;align-items:center;gap:14px;margin-bottom:6px;flex-wrap:wrap;">
      <span style="font-size:58px;font-weight:900;letter-spacing:-0.04em;color:${colorA};line-height:1.0;">${titleA}</span>
      <span style="background:#1e293b;color:white;font-size:12px;font-weight:900;letter-spacing:0.08em;padding:5px 11px;border-radius:6px;">${titleVS}</span>
    </div>
    <span style="font-size:52px;font-weight:900;letter-spacing:-0.04em;color:${colorB};line-height:1.0;display:block;margin-bottom:14px;">${titleB}</span>
    <!-- Headline -->
    ${headlineLines.map(l => `<div style="font-size:27px;font-weight:800;color:#1a1a2e;line-height:1.25;letter-spacing:-0.02em;">${l}</div>`).join('')}
  </div>

  <!-- Subtitle -->
  <p style="font-size:13px;line-height:1.75;color:#64748b;font-weight:500;border-left:4px solid ${colorA};padding-left:14px;margin-bottom:28px;max-width:340px;">${subtitle}</p>

  <!-- Bottom icons -->
  <div style="display:flex;gap:16px;align-items:flex-end;flex-wrap:wrap;">
    ${iconsHtml}
  </div>
</div>

<!-- ══════════════ RIGHT PANEL: Laptop ══════════════ -->
<div style="flex:1;padding:28px 36px 28px 0;display:flex;align-items:center;justify-content:center;position:relative;z-index:10;">

  <!-- Laptop wrapper -->
  <div style="position:relative;width:100%;max-width:660px;">

    <!-- Screen bezel -->
    <div style="background:#141d2e;border-radius:20px 20px 0 0;padding:14px 16px 12px;box-shadow:0 24px 64px rgba(0,0,0,0.4),0 0 0 2px #0a1020;">
      <!-- Camera -->
      <div style="width:7px;height:7px;border-radius:50%;background:#2d4060;margin:0 auto 10px;"></div>

      <!-- Screen: Split comparison -->
      <div style="background:white;border-radius:10px;overflow:hidden;display:flex;min-height:400px;box-shadow:inset 0 0 0 1px #e8e8e8;">

        <!-- Left: Platform A -->
        <div style="flex:1;padding:24px 20px;display:flex;flex-direction:column;background:white;">
          <div style="display:flex;align-items:center;gap:12px;margin-bottom:10px;">
            ${logoA}
            <div>
              <div style="font-size:19px;font-weight:900;color:${colorA};letter-spacing:-0.02em;">${labelA}</div>
              <div style="font-size:10px;color:#94a3b8;font-weight:600;letter-spacing:0.05em;text-transform:uppercase;">Platform A</div>
            </div>
          </div>
          <div style="height:3px;background:linear-gradient(90deg,${colorA},${colorA}44);border-radius:2px;margin-bottom:14px;"></div>
          ${pointsAHtml}
        </div>

        <!-- VS Badge center -->
        <div style="position:relative;width:0;display:flex;align-items:center;justify-content:center;z-index:5;overflow:visible;">
          <div style="position:absolute;width:40px;height:40px;border-radius:50%;background:#1e293b;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 14px rgba(0,0,0,0.35),0 0 0 3px white;transform:translateX(-20px);">
            <span style="font-size:11px;font-weight:900;color:white;letter-spacing:0.05em;">VS</span>
          </div>
        </div>

        <!-- Right: Platform B -->
        <div style="flex:1;padding:24px 20px;display:flex;flex-direction:column;background:${screenBg};">
          <div style="display:flex;align-items:center;gap:12px;margin-bottom:10px;">
            ${logoB}
            <div>
              <div style="font-size:19px;font-weight:900;color:${colorB};letter-spacing:-0.02em;">${labelB}</div>
              <div style="font-size:10px;color:#94a3b8;font-weight:600;letter-spacing:0.05em;text-transform:uppercase;">Platform B</div>
            </div>
          </div>
          <div style="height:3px;background:linear-gradient(90deg,${colorB},${colorB}44);border-radius:2px;margin-bottom:14px;"></div>
          ${pointsBHtml}
        </div>
      </div>
    </div>

    <!-- Laptop hinge -->
    <div style="background:linear-gradient(180deg,#c8cdd6 0%,#9ba3af 100%);height:14px;border-radius:0 0 4px 4px;box-shadow:0 4px 12px rgba(0,0,0,0.22);"></div>
    <div style="background:linear-gradient(180deg,#9ba3af 0%,#6b7280 100%);height:7px;border-radius:0 0 10px 10px;width:90%;margin:0 auto;box-shadow:0 4px 10px rgba(0,0,0,0.18);"></div>
  </div>
</div>

<!-- ZELLIO watermark -->
<div style="position:absolute;bottom:18px;right:22px;opacity:0.6;z-index:20;">
  <svg viewBox="0 0 120 36" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:72px;height:auto;">
    <path d="M8 28L20 8H8" stroke="#1e3a5f" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M20 8L32 28" stroke="#2563eb" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8 28H32" stroke="#1e3a5f" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    <text x="40" y="25" font-family="system-ui, sans-serif" font-weight="900" font-size="18" fill="#1e3a5f" letter-spacing="1">ZELLIO</text>
  </svg>
</div>

</body>
</html>`;
}

// ─── MAIN RUNNER ──────────────────────────────────────────────────────────────
async function run() {
  console.log("Launching Puppeteer...");
  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--font-render-hinting=none"],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 800, deviceScaleFactor: 2 });

  for (const banner of banners) {
    console.log(`Generating: ${banner.slug} [${banner.type}]`);
    const html = banner.type === "vs" ? vsTemplate(banner) : notebookTemplate(banner);

    await page.setContent(html, { waitUntil: "domcontentloaded", timeout: 60000 });
    await new Promise(r => setTimeout(r, 600));

    const outPath = path.join(outDir, `${banner.slug}.png`);
    await page.screenshot({ path: outPath, type: "png", clip: { x: 0, y: 0, width: 1200, height: 800 } });
    console.log(`  ✓ ${outPath}`);
  }

  await browser.close();
  console.log("\n✅ All banners generated!");
}

run().catch(console.error);
