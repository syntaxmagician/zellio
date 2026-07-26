/**
 * Normalizes raw client logo files into uniform, transparent, optically-balanced
 * marks for the TrustedBy section.
 *
 * Pipeline per logo:
 *   flatten(white) -> clamp near-white -> unflatten (white becomes transparent)
 *   -> trim empty borders -> resize to an equal *visual area* (not equal height)
 *   -> export @2x PNG into public/clients/
 *
 * Special treatments:
 *   - preCrop: crop a region first (nontonkuy has an invisible white tagline baked in)
 *   - mask:    rebuild the mark from luminance (beego ships as white text on a solid
 *              teal app-icon background) and fill it with a brand color
 *
 * Also generates src/lib/clients.ts (the manifest the section component imports).
 *
 * Run: npm run clients:normalize
 */
import sharp from "sharp";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const PUBLIC_DIR = path.join(ROOT, "public");
const OUT_DIR = path.join(PUBLIC_DIR, "clients");
const MANIFEST_PATH = path.join(ROOT, "src", "lib", "clients.ts");

// Every mark gets the same *area* budget so square and wide logos read equally sized.
const TARGET_AREA = 5200; // display px^2
const MIN_HEIGHT = 30;
const MAX_HEIGHT = 64;
const MAX_WIDTH = 170;
const EXPORT_SCALE = 2; // retina

const CLIENTS = [
  {
    slug: "masterdiskon",
    file: "masdis.png",
    name: "MasterDiskon",
    sector: { en: "Travel Platform", id: "Platform Travel" },
  },
  {
    slug: "eureka",
    file: "eurekalogo.png",
    name: "Eureka Group",
    sector: { en: "Logistics Group", id: "Grup Logistik" },
  },
  {
    slug: "race",
    file: "race.png",
    name: "RACE Raja Cepat",
    sector: { en: "Express Logistics", id: "Logistik Ekspres" },
  },
  {
    slug: "campos",
    file: "Logotipo.webp",
    name: "Campos Law Firm",
    sector: { en: "Law Firm", id: "Firma Hukum" },
  },
  {
    slug: "jaja",
    file: "jajaid.png",
    name: "Jaja.id",
    sector: { en: "Marketplace", id: "Marketplace" },
  },
  {
    slug: "palda",
    file: "palda.png",
    name: "Palda Solusi Sinergi",
    sector: { en: "Business Solutions", id: "Solusi Bisnis" },
  },
  {
    slug: "beego",
    file: "beego.webp",
    name: "Beego",
    sector: { en: "Ride-Hailing", id: "Transportasi Online" },
    treatment: "mask",
    fill: "#2BB5AC",
    // BT.709 luma: teal bg gradient tops out ~188, bee ~210, wordmark 255.
    maskThreshold: 198,
  },
  {
    slug: "guruinovatif",
    file: "guruino.png",
    name: "GuruInovatif",
    sector: { en: "EdTech", id: "EdTech" },
  },
  {
    slug: "warungbungapagi",
    file: "warungbungaweb.png",
    name: "Warung BungaPagi",
    sector: { en: "F&B Ecosystem", id: "Ekosistem F&B" },
    // The dedicated logo file is only 96x96; crop the hi-res header lockup
    // (badge + wordmark + tagline) out of the website screenshot instead.
    preCrop: { left: 465, top: 40, width: 410, height: 115 },
    // Header sits on a cream background — clamp harder so it goes transparent.
    whiteClamp: [1.35, -72],
  },
  {
    slug: "nontonkuy",
    file: "nontonkuy.png",
    name: "NontonKuy",
    sector: { en: "Streaming", id: "Streaming" },
    // The source file has a white (invisible) tagline under the wordmark.
    preCrop: { left: 0, top: 0, width: 564, height: 150 },
  },
  {
    slug: "elogs",
    file: "elogs.png",
    name: "Eureka Logistics",
    sector: { en: "Logistics Platform", id: "Platform Logistik" },
    // Testimonial-only mark (eureka! logistics product brand) — kept out of the marquee.
    hidden: true,
  },
];

async function whiteToAlpha(input, preCrop, whiteClamp = [1.06, -8]) {
  let img = sharp(input);
  if (preCrop) img = img.extract(preCrop);
  return img
    .flatten({ background: "#ffffff" })
    // Push near-white compression artifacts (or tinted backgrounds) to pure
    // white so unflatten catches them.
    .linear(whiteClamp[0], whiteClamp[1])
    .unflatten()
    .png()
    .toBuffer();
}

async function maskToColor(input, fill, threshold) {
  // Supersample 3x so the binary threshold edge is smoothed by the final downscale.
  const meta = await sharp(input).metadata();
  const up = 3;
  const width = meta.width * up;
  const height = meta.height * up;
  const mask = await sharp(input)
    .resize(width, height)
    .greyscale()
    .threshold(threshold)
    .toBuffer();
  return sharp({ create: { width, height, channels: 3, background: fill } })
    .joinChannel(mask)
    .png()
    .toBuffer();
}

function opticalSize(width, height, maxDisplayHeight) {
  const ratio = width / height;
  let h = Math.sqrt(TARGET_AREA / ratio);
  h = Math.max(MIN_HEIGHT, Math.min(maxDisplayHeight ?? MAX_HEIGHT, h));
  let w = h * ratio;
  if (w > MAX_WIDTH) {
    w = MAX_WIDTH;
    h = w / ratio;
  }
  return { w: Math.round(w), h: Math.round(h) };
}

async function normalize(client) {
  const srcPath = path.join(PUBLIC_DIR, client.file);
  const transparent =
    client.treatment === "mask"
      ? await maskToColor(srcPath, client.fill, client.maskThreshold ?? 198)
      : await whiteToAlpha(srcPath, client.preCrop, client.whiteClamp);

  const trimmed = await sharp(transparent).trim().png().toBuffer();
  const meta = await sharp(trimmed).metadata();
  const { w, h } = opticalSize(meta.width, meta.height, client.maxDisplayHeight);

  const outFile = path.join(OUT_DIR, `${client.slug}.png`);
  await sharp(trimmed)
    .resize(w * EXPORT_SCALE, h * EXPORT_SCALE, { fit: "fill" })
    .png()
    .toFile(outFile);

  console.log(
    `${client.slug.padEnd(16)} ${String(meta.width).padStart(5)}x${String(meta.height).padEnd(5)} -> display ${w}x${h}`
  );
  return { ...client, width: w, height: h };
}

function renderManifest(entries) {
  const rows = entries
    .map(
      (e) =>
        `  {\n` +
        `    slug: "${e.slug}",\n` +
        `    name: "${e.name}",\n` +
        `    sector: { en: "${e.sector.en}", id: "${e.sector.id}" },\n` +
        `    src: "/clients/${e.slug}.png",\n` +
        `    width: ${e.width},\n` +
        `    height: ${e.height},\n` +
        (e.hidden ? `    hidden: true,\n` : "") +
        `  },`
    )
    .join("\n");

  return `// AUTO-GENERATED by scripts/normalize-client-logos.mjs — do not edit by hand.
// Re-run \`npm run clients:normalize\` after changing the roster or raw logo files.

export interface ClientLogo {
  slug: string;
  name: string;
  sector: { en: string; id: string };
  src: string;
  /** Display size in CSS px (files are exported @2x). */
  width: number;
  height: number;
  /** Testimonial-only marks that stay out of the TrustedBy marquee. */
  hidden?: boolean;
}

export const clientLogos: ClientLogo[] = [
${rows}
];
`;
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });
  const entries = [];
  for (const client of CLIENTS) {
    entries.push(await normalize(client));
  }
  await writeFile(MANIFEST_PATH, renderManifest(entries));
  console.log(`\nWrote ${entries.length} logos to public/clients/`);
  console.log(`Wrote manifest to src/lib/clients.ts`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
