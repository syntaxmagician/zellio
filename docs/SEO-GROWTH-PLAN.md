# ZELLIO: rencana pertumbuhan pencarian organik

Tanggal audit kode: 17 September 2026. Ini rencana kerja, bukan prediksi ranking. Belum ada akses ke Search Console atau data inquiry, sehingga baseline dan target angka belum dapat ditetapkan. Hasil lokal tidak membuktikan perubahan sudah tayang di zellio.id.

## Yang diperbaiki dalam perubahan ini

- Metadata, canonical, hreflang, dan bahasa HTML menyesuaikan URL Indonesia/Inggris.
- Konten terjemahan tersedia saat server merender halaman.
- Homepage mengenalkan ZELLIO sebagai software house Indonesia; WebSite dan Organization schema memakai identitas yang konsisten serta LinkedIn yang sudah tercantum di footer.
- Delapan halaman layanan memakai judul yang sesuai penawaran dan bahasa pembacanya, dengan Service dan BreadcrumbList schema. Tidak menambahkan rating, harga, alamat, atau hasil proyek rekaan.
- Artikel, portofolio, dan halaman kebijakan memiliki metadata sendiri. Judul sosial mengikuti halaman, bukan selalu homepage.
- Sitemap mencantumkan kedua versi bahasa. lastmod otomatis dihapus karena waktu build bukan tanggal perubahan isi.
- Navigasi utama mengarah langsung ke URL canonical, bukan melewati redirect /id.

Pemakaian locale dari request membuat halaman dirender dinamis. Pantau latensi server dan cache platform saat deployment; jangan menambahkan cache publik tanpa memisahkan URL/bahasa. Asset statis tetap dapat di-cache.

## Peta intent: perkuat halaman yang sudah ada

Keyword di bawah adalah hipotesis target berdasarkan layanan, bukan hasil riset volume pencarian atau klaim posisi Google.

| Prioritas | Halaman | Intent utama | Bukti yang perlu dikembangkan |
| --- | --- | --- | --- |
| 1 | / | zellio; zellio software house | Identitas perusahaan, profil resmi, proses, tim, tautan proyek |
| 1 | /services/custom-website-development | jasa pembuatan website kustom | Contoh website, CMS, integrasi, lingkup dan faktor biaya |
| 1 | /services/company-profile-website | jasa website company profile | Studi kasus B2B, struktur konten, proses pengumpulan materi |
| 2 | /services/mobile-app-development | jasa pembuatan aplikasi Android dan iOS | Demo yang diizinkan klien, platform, integrasi, alur rilis |
| 2 | /services/erp-system-development | jasa pembuatan ERP; ERP kustom | Modul, alur approval, migrasi data, contoh implementasi |
| 2 | /services/hris-payroll-system | pengembangan HRIS payroll kustom | Lingkup absensi, hak akses, workflow payroll |
| 3 | /services/crm-system-development | jasa pembuatan CRM | Alur prospek, integrasi, kebutuhan pelaporan |
| 3 | /services/e-commerce-development | jasa pembuatan website toko online | Katalog, pembayaran, stok, pengiriman |
| 3 | /services/saas-platform-development | jasa pengembangan SaaS | Pemisahan tenant, langganan, kebutuhan operasional |

## Hari 1–7: publish dan baseline

1. Deploy perubahan yang sudah diuji melalui alur deployment proyek. Jalankan `npm run seo:check -- https://zellio.id` setelah tayang.
2. Di Search Console, periksa Manual actions dan Security issues. Komentar di data artikel mencatat riwayat remediasi spam; itu bukan bukti status saat ini. Konfirmasi melalui laporan resmi, bukan dari tampilan satu hasil pencarian.
3. Inspect URL homepage, layanan website, company profile, dan ERP. Bandingkan canonical yang dinyatakan dengan yang dipilih Google. Request indexing untuk URL penting yang berubah; tidak perlu mengulanginya setiap hari.
4. Submit atau cek sitemap https://zellio.id/sitemap.xml.
5. Ekspor Performance 3 bulan: query, halaman, negara, perangkat, clicks, impressions, CTR, average position. Pisahkan brand (`zellio` dan variasinya) dari non-brand. Simpan baseline sebelum menilai hasil.
6. Pastikan LinkedIn perusahaan benar-benar dikelola ZELLIO dan menautkan https://zellio.id. Tambahkan sameAs lain hanya bila profil resmi tersebut dapat diverifikasi.

## Hari 8–30: buktikan kualitas pekerjaan

Pilih dua proyek terbaik yang memang boleh dipublikasikan. Perkaya halaman portofolio yang ada dengan masalah awal, lingkup pekerjaan ZELLIO, pendekatan teknis, gambar hasil yang disetujui, dan hasil yang dapat dibuktikan. Metrik performa atau konversi perlu tanggal, metode pengukuran, dan sumber; hapus atau lunakkan angka yang tidak punya bukti.

Tautkan studi kasus ke layanan yang relevan dan sebaliknya. Minta izin klien sebelum publikasi nama, data, screenshot internal, atau kutipan. Penyebutan/tautan dari klien harus sukarela dan relevan; jangan membeli paket backlink.

Lengkapi halaman layanan website dan company profile lebih dulu dengan pertanyaan calon pembeli: apa yang termasuk, apa yang disiapkan klien, faktor biaya, pengelolaan konten, dan apa yang terjadi setelah rilis. Hindari harga atau janji waktu baru yang belum disepakati tim.

## Hari 31–60: jawab pertanyaan calon klien

Terbitkan satu atau dua panduan yang ditulis/direview engineer ZELLIO, berdasarkan pertanyaan penjualan nyata. Kandidat: “Apa yang perlu disiapkan sebelum membuat website company profile?” atau “Kapan bisnis perlu ERP kustom?”. Sertakan contoh pekerjaan yang boleh dibagikan dan link ke layanan terkait. Jadikan artikel berguna sendiri, bukan sekadar pengulangan keyword.

Jangan membuat banyak halaman kota dengan isi serupa atau artikel peringkat “software house terbaik” tanpa riset. Riwayat remediasi dalam kode membuat kualitas editorial perlu diperhatikan.

## Hari 61–90: optimasi berdasarkan data

Bandingkan 28 hari terakhir dengan 28 hari sebelumnya, memakai filter negara/perangkat yang sama. Untuk situs dengan trafik kecil, tunggu data cukup sebelum menarik kesimpulan.

- Banyak impressions tetapi CTR rendah: periksa intent, judul, dan snippet halaman tersebut.
- Query relevan mulai muncul: tambahkan jawaban dan bukti pada halaman yang menerima impressions, bukan membuat duplikat.
- Klik naik tetapi inquiry tidak naik: evaluasi pesan penawaran, form, dan CTA.
- Core Web Vitals bermasalah: gunakan data lapangan Search Console/PageSpeed; jangan menyebut skor laboratorium sebagai pengalaman semua pengguna.

## Scorecard mingguan

Catat tanggal, impressions/clicks brand, impressions/clicks non-brand, landing page organik, inquiry organik yang valid, dan perubahan yang dilakukan. Ranking “zellio” berguna dipantau, tetapi inquiry yang sesuai layanan adalah hasil bisnis utama. Definisikan event konversi bersama alur kontak; jangan menghitung klik tombol sebagai proyek atau penjualan.

## Referensi

- Site name: https://developers.google.com/search/docs/appearance/site-names
- Organization: https://developers.google.com/search/docs/appearance/structured-data/organization
- Sitemap: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- Crawling, indexing, dan penyajian hasil: https://developers.google.com/search/docs/fundamentals/how-search-works

## Hasil validasi lokal

- `npm run build`: berhasil, termasuk pemeriksaan TypeScript. Peringatan yang tersisa: konvensi middleware Next.js deprecated dan runtime edge untuk gambar Open Graph.
- `npm run seo:check`: PASS untuk 60 URL sitemap (Indonesia + Inggris), canonical, hreflang, metadata sosial, Organization/WebSite/Service/BreadcrumbList, redirect /id dengan query string, missing route, respons HTML user-agent browser, dan override header locale.
- ESLint terarah pada helper SEO, route server yang diperbarui, dan script audit: berhasil.
- Pemeriksaan visual/interaksi browser belum dilakukan: koneksi Browser gagal pada konfigurasi sandbox sesi.
- Belum dilakukan deployment atau verifikasi Search Console. Audit di atas berlaku pada snapshot build lokal yang diuji, bukan jaminan ranking atau status produksi.
