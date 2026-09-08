# Celah Cahaya - Website Resmi PKBM & Pendidikan Kesetaraan
Domain Utama: [https://www.celahcahaya.sch.id](https://www.celahcahaya.sch.id)

Platform web resmi untuk **Pusat Kegiatan Belajar Masyarakat (PKBM) Celah Cahaya** di Garut, Jawa Barat. Dibangun dengan standar performa tinggi, arsitektur modern yang ringan, mobile-first, dan dioptimasi penuh untuk **Search Engine Optimization (SEO)** berkelanjutan, E-E-A-T, serta konversi pendaftaran warga belajar.

---

## 📑 Daftar Isi
1. [Fitur Utama](#fitur-utama)
2. [Arsitektur & Struktur Direktori](#arsitektur--struktur-direktori)
3. [Strategi SEO & Content Cluster](#strategi-seo--content-cluster)
4. [Pemetaan Keyword & 20 Ide Artikel Awal](#pemetaan-keyword--20-ide-artikel-awal)
5. [Local SEO Setup (Garut, Jawa Barat)](#local-seo-setup-garut-jawa-barat)
6. [Instalasi & Menjalankan Lokal](#instalasi--menjalankan-lokal)
7. [Panduan Deployment](#panduan-deployment)
   - [GitHub Pages](#1-deploy-ke-github-pages)
   - [Cloudflare Pages](#2-deploy-ke-cloudflare-pages)
   - [Vercel / Netlify](#3-deploy-ke-vercel-atau-netlify)
8. [Checklist Kualitas & Keamanan](#checklist-kualitas--keamanan)

---

## 🌟 Fitur Utama

- **Ultra-Fast & Mobile-First**: Performa tinggi dengan React 19, Vite, dan Tailwind CSS.
- **Topical Authority & Content Cluster**: Struktur konten terorganisir rapi antara *Pillar Content* (Panduan Lengkap Paket C) dan puluhan *Supporting Articles*.
- **Structured Data (Schema.org)**:
  - `EducationalOrganization` / `LocalBusiness`
  - `Article` & `BlogPosting`
  - `BreadcrumbList`
  - `FAQPage`
  - `Course` Schema untuk Paket A, Paket B, dan Paket C
  - `WebSite` dengan `SearchAction`
- **Lengkap dengan Technical SEO**:
  - Auto Canonical URL
  - Dynamic Meta Tags (Title, Description, Robots)
  - Open Graph & Twitter Cards
  - `sitemap.xml` dinamis
  - `robots.txt` ramah bot pencari
  - `rss.xml` untuk sindikasi konten
- **CMS Sederhana (Content Manager)**:
  - Pembuat dan penyunting artikel dengan indikator skor SEO real-time
  - Pengatur slug, meta title, meta description, featured image, dan keyword
- **Alur Pendaftaran Interaktif**:
  - Formulir registrasi warga belajar baru terintegrasi langsung dengan WhatsApp resmi
  - Kalkulator transparansi biaya dan informasi program beasiswa afirmasi KIP

---

## 🏗️ Arsitektur & Struktur Direktori

```text
celahcahaya-web/
├── .github/
│   └── workflows/
│       └── deploy.yml            # CI/CD otomatis untuk GitHub Pages
├── public/
│   ├── manifest.json             # PWA Web App Manifest
│   ├── robots.txt                # Konfigurasi perayapan mesin pencari
│   ├── rss.xml                   # RSS Feed artikel edukasi
│   └── sitemap.xml               # XML Sitemap untuk Google Search Console
├── src/
│   ├── components/               # Komponen UI modular
│   │   ├── ArticleCard.tsx       # Kartu artikel dengan reading time & badge intent
│   │   ├── Breadcrumb.tsx        # Breadcrumb visual & schema
│   │   ├── Footer.tsx            # Footer kaya data lokal & legalitas
│   │   ├── Navbar.tsx            # Navigasi responsif & mega-menu
│   │   ├── RegistrationModal.tsx # Dialog pendaftaran cepat
│   │   └── WhatsAppFloating.tsx  # Widget konsultasi WhatsApp langsung
│   ├── data/
│   │   └── mockData.ts           # Data kelembagaan, 20+ keyword, FAQ, artikel
│   ├── pages/
│   │   ├── HomePage.tsx          # Beranda otoritas tinggi
│   │   ├── AboutPage.tsx         # Profil lembaga, legalitas, tutor E-E-A-T
│   │   ├── ProgramsPage.tsx      # Daftar program kesetaraan & vokasi
│   │   ├── ProgramDetailPage.tsx # Detail Paket A, B, C, dan Vokasi AI
│   │   ├── ArticlesPage.tsx      # Indeks artikel dengan filter kategori
│   │   ├── ArticleDetailPage.tsx # Halaman baca artikel dengan TOC & FAQ
│   │   ├── PanduanPage.tsx       # Hub panduan kesetaraan & kuliah
│   │   ├── BeasiswaPage.tsx      # Informasi beasiswa & KIP
│   │   ├── KegiatanPage.tsx      # Dokumentasi kegiatan & ujian
│   │   ├── PendaftaranPage.tsx   # Formulir pendaftaran resmi warga belajar
│   │   ├── FAQPage.tsx           # Koleksi FAQ terstruktur
│   │   ├── KontakPage.tsx        # Local SEO Garut & kontak resmi
│   │   ├── SitemapPage.tsx       # Peta situs visual HTML
│   │   ├── AdminCMSPage.tsx      # Dashboard pengelola konten & live SEO meter
│   │   └── SEOStrategyPage.tsx   # Matrix keyword, topic cluster, schema viewer
│   ├── types/
│   │   └── index.ts              # Definisi tipe TypeScript
│   ├── utils/
│   │   └── seo.ts                # Generator meta tags & JSON-LD dinamis
│   ├── App.tsx                   # Client-side router & layout
│   ├── index.css                 # Tailwind CSS styles
│   └── main.tsx                  # Titik masuk React
├── index.html                    # Entry point HTML & default Schema
├── package.json                  # Konfigurasi dependensi
├── tsconfig.json                 # TypeScript compiler options
└── vite.config.ts                # Vite build configuration
```

---

## 🎯 Strategi SEO & Content Cluster

Situs ini menerapkan model **Topic Cluster**:
1. **Pillar Page**: Membahas topik besar secara menyeluruh dan berwibawa (cth: *"Panduan Lengkap Pendidikan Kesetaraan Paket C"*).
2. **Cluster Content**: Membedah pertanyaan spesifik dan long-tail keyword (cth: *"Apakah lulusan Paket C bisa kuliah PTN?"*, *"Biaya sekolah Paket C"*, *"Syarat pendaftaran Paket C di Garut"*).
3. **Hyper-linking internal**: Seluruh sub-artikel menautkan kembali ke Pillar Page dan form pendaftaran, memperkuat sinyal otoritas ke Google.

---

## 📍 Local SEO Setup (Garut, Jawa Barat)

Untuk mendominasi kata kunci wilayah Garut:
- **Nama Organisasi**: PKBM Celah Cahaya Garut
- **NPSN**: P9970001
- **Izin Operasional**: SK Disdik No. 421.1/2088-Disdik/2021
- **Alamat**: Jl. Raya Garut - Bayongbong Km. 7, Desa Sukarame, Kec. Bayongbong, Kabupaten Garut, Jawa Barat 44161
- **Area Layanan**: Garut Kota, Bayongbong, Tarogong Kidul, Tarogong Kaler, Cilawu, Samarang, Leles, Kadungora, Cisurupan, Cikajang, serta layanan daring seluruh Indonesia.

---

## 🚀 Instalasi & Menjalankan Lokal

```bash
# 1. Clone repository dari GitHub
git clone https://github.com/celahcahaya/celahcahaya-web.git
cd celahcahaya-web

# 2. Pasang dependensi
npm install

# 3. Jalankan server lokal
npm run dev

# 4. Akses di browser pada http://localhost:3000
```

---

## 🌐 Panduan Deployment

### 1. Deploy ke GitHub Pages
Proyek ini sudah dilengkapi dengan `.github/workflows/deploy.yml`:
1. Buat repository di GitHub dengan nama `celahcahaya-web`.
2. Push seluruh kode ke branch `main`.
3. Buka tab **Settings** > **Pages** di repository GitHub Anda.
4. Pada opsi **Build and deployment > Source**, pilih **GitHub Actions**.
5. Setiap Anda melakukan commit ke `main`, situs akan otomatis dibuild dan dideploy.

### 2. Deploy ke Cloudflare Pages
1. Masuk ke [Cloudflare Dashboard](https://dash.cloudflare.com/) > **Workers & Pages**.
2. Hubungkan repository GitHub Anda.
3. Atur build setting:
   - **Framework preset**: Vite
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
4. Di bagian custom domain, masukkan `www.celahcahaya.sch.id`.

---

© 2025 PKBM Celah Cahaya Garut. Dilindungi undang-undang.
