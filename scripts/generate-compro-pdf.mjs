import fs from "fs";
import puppeteer from "puppeteer";
import { fileURLToPath, pathToFileURL } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const htmlPath = path.join(root, "public", "DIGIFORE-Company-Profile.html");
const pdfPath = path.join(root, "public", "DIGIFORE-Company-Profile.pdf");

if (!fs.existsSync(htmlPath)) {
  console.error(`HTML not found: ${htmlPath}`);
  process.exit(1);
}

const fileUrl = pathToFileURL(htmlPath).href;

const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();

await page.setViewport({ width: 1920, height: 1080, deviceScaleFactor: 1 });

await page.goto(fileUrl, {
  waitUntil: "networkidle0",
});

// Exact pixel size = no white edge from mm rounding
await page.pdf({
  path: pdfPath,
  width: "1920px",
  height: "1080px",
  printBackground: true,
  margin: { top: 0, right: 0, bottom: 0, left: 0 },
  preferCSSPageSize: false,
});

await browser.close();
console.log(`PDF generated: ${pdfPath}`);
