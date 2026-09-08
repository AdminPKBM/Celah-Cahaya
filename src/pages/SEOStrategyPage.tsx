import React, { useState } from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { KEYWORD_STRATEGY, ARTICLE_IDEAS_ROADMAP, INSTITUTION_INFO } from '../data/mockData';
import { SchemaValidatorSuite } from '../components/seo/SchemaValidatorSuite';
import { SitemapCrawlerSection } from '../components/seo/SitemapCrawlerSection';
import { ImageOptimizerSection } from '../components/seo/ImageOptimizerSection';
import { 
  Target, Layers, Network, CheckCircle2, FileCode, 
  Download, Copy, Check, ExternalLink, Star, Sparkles, BookOpen,
  MapPin, Store, Building, HelpCircle, FileText, ArrowRight,
  PhoneCall, ShieldCheck, UserCheck, ChevronRight, Zap, CheckSquare, Square
} from 'lucide-react';

interface SEOStrategyPageProps {
  onNavigate: (path: string) => void;
}

export const SEOStrategyPage: React.FC<SEOStrategyPageProps> = ({ onNavigate }) => {
  const [copiedSection, setCopiedSection] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'clusters' | 'local' | 'template' | 'matrix' | 'roadmap' | 'schemas' | 'technical'>('clusters');

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(id);
    setTimeout(() => setCopiedSection(null), 2500);
  };

  // Technical SEO Checklist state
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({
    'cwv-1': true,
    'cwv-2': true,
    'cwv-3': true,
    'sem-1': true,
    'sem-2': true,
    'gsc-1': true,
    'gsc-2': true
  });

  const toggleCheckItem = (id: string) => {
    setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const TECHNICAL_CHECKLIST = [
    {
      category: '1. Core Web Vitals (Kecepatan & Performa UX)',
      icon: Zap,
      items: [
        {
          id: 'cwv-1',
          name: 'Largest Contentful Paint (LCP) < 2.5 Detik',
          standard: 'LCP ≤ 2.5s pada 75% traffic mobile (Good Threshold)',
          howToTest: 'Google PageSpeed Insights / Chrome DevTools Lighthouse',
          action: 'Format gambar modern WebP/AVIF, preload gambar hero (LCP element), hindari lazy-loading pada gambar di atas lipatan layar (above the fold).'
        },
        {
          id: 'cwv-2',
          name: 'Interaction to Next Paint (INP) < 200 Milidetik',
          standard: 'INP ≤ 200ms (Pengganti resmi FID sejak Maret 2024)',
          howToTest: 'Chrome UX Report (CrUX) & Web Vitals Extension',
          action: 'Pecah tugas JavaScript panjang (long tasks > 50ms), hindari perulangan render React yang tidak perlu, tunda skrip pihak ketiga (analytics).'
        },
        {
          id: 'cwv-3',
          name: 'Cumulative Layout Shift (CLS) < 0.1',
          standard: 'CLS ≤ 0.1 untuk stabilitas visual saat halaman dimuat',
          howToTest: 'Lighthouse Performance & Search Console Core Web Vitals report',
          action: 'Sertakan atribut width dan height eksplisit pada seluruh tag <img> dan <iframe>. Sediakan reservasi ruang (aspect-ratio) untuk kontainer dinamis.'
        },
        {
          id: 'cwv-4',
          name: 'Optimasi Font & Web Resources',
          standard: 'Hindari Flash of Invisible Text (FOIT) & Flash of Unstyled Text',
          howToTest: 'Network tab DevTools (Font Waterfall)',
          action: 'Terapkan font-display: swap, lakukan preconnect ke https://fonts.googleapis.com, kompres aset CSS dan JS via Brotli/Gzip.'
        }
      ]
    },
    {
      category: '2. Semantic HTML & Struktur Konten',
      icon: FileCode,
      items: [
        {
          id: 'sem-1',
          name: 'Tunggal H1 & Hierarki Heading Berjenjang',
          standard: 'Tepat 1 H1 per halaman, diikuti H2 untuk subtopik, dan H3 untuk detail',
          howToTest: 'HeadingsMap Extension / View Page Source',
          action: 'Pastikan H1 memuat target keyword utama. Jangan pernah melompati heading level (misal H1 langsung ke H3).'
        },
        {
          id: 'sem-2',
          name: 'Elemen HTML5 Semantik (Header, Main, Article, Footer)',
          standard: 'Struktur kode mengenali peran semantik konten secara baku',
          howToTest: 'W3C Markup Validation Service',
          action: 'Bungkus artikel utama dalam tag <article>, navigasi dalam <nav>, konten pendukung dalam <aside>, dan isi pokok dalam <main>.'
        },
        {
          id: 'sem-3',
          name: 'Aksesibilitas & Atribut Alt Gambar Lengkap',
          standard: '100% gambar memiliki alt text deskriptif & relevan',
          howToTest: 'Lighthouse Accessibility Audit',
          action: 'Gunakan alt text yang menjelaskan konteks visual dengan kata kunci alami (contoh: alt="Kegiatan simulasi ANBK Paket C di PKBM Celah Cahaya Garut").'
        },
        {
          id: 'sem-4',
          name: 'Tautan Semantik & Anchor Text Deskriptif',
          standard: 'Gunakan tag <a> dengan href valid, hindari "klik di sini"',
          howToTest: 'Screaming Frog SEO Spider / Semrush Audit',
          action: 'Gunakan frasa anchor yang menjelaskan halaman tujuan (misal: "syarat pendaftaran Paket C"), serta target="_blank" rel="noopener noreferrer" pada link eksternal.'
        }
      ]
    },
    {
      category: '3. Optimalisasi Indeksasi & Google Search Console',
      icon: Target,
      items: [
        {
          id: 'gsc-1',
          name: 'Self-Referencing Canonical Tag Wajib',
          standard: '<link rel="canonical" href="https://www.celahcahaya.sch.id/slug" />',
          howToTest: 'Inspect URL di Google Search Console (Google-selected vs User-declared canonical)',
          action: 'Mencegah duplikasi konten akibat parameter tracking (?utm_source, ?fbclid) atau variasi protokol (http vs https).'
        },
        {
          id: 'gsc-2',
          name: 'Meta Robots Tag Akses Terbuka (Index, Follow)',
          standard: '<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />',
          howToTest: 'URL Inspection GSC -> Perayapan diizinkan? Ya',
          action: 'Pastikan tidak ada directive "noindex" atau "disallow" di robots.txt yang memblokir perayapan Googlebot pada halaman baru.'
        },
        {
          id: 'gsc-3',
          name: 'Terdaftar Otomatis di Sitemap.xml & Ping GSC',
          standard: 'URL baru terdaftar di <urlset> sitemap.xml dengan <lastmod> ISO 8601',
          howToTest: 'Buka https://www.celahcahaya.sch.id/sitemap.xml di browser',
          action: 'Sertakan URL baru ke dalam sitemap XML dan lakukan request indexing melalui fitur "Inspeksi URL" di Google Search Console.'
        },
        {
          id: 'gsc-4',
          name: 'URL Slug Bersih (Kebab-Case) Tanpa Stop Words',
          standard: 'Maks 3-5 kata fokus, huruf kecil semua, pisahkan dengan tanda hubung (-)',
          howToTest: 'Periksa address bar browser',
          action: 'Hindari karakter khusus, huruf besar, dan ID acak (contoh benar: /artikel/syarat-daftar-paket-c-garut).'
        },
        {
          id: 'gsc-5',
          name: 'Mobile-Friendly Viewport Tag & Responsivitas Layar',
          standard: '<meta name="viewport" content="width=device-width, initial-scale=1.0" />',
          howToTest: 'Google Mobile-Friendly Test / Lighthouse Mobile',
          action: 'Pastikan elemen interaktif memiliki touch target minimal 44x44px dan tidak ada horizontal overflow scrollbar pada layar ponsel (360px).'
        },
        {
          id: 'gsc-6',
          name: 'Respons Status HTTP 200 OK Bersih',
          standard: 'Status 200 OK tanpa redirect chain (301 -> 302 -> 200)',
          howToTest: 'DevTools Network Tab / HTTP Header Checker',
          action: 'Pastikan link internal selalu merujuk langsung ke URL final tanpa melalui pengalihan.'
        }
      ]
    },
    {
      category: '4. Metadata & Schema.org (Rich Results & E-E-A-T)',
      icon: ShieldCheck,
      items: [
        {
          id: 'sch-1',
          name: 'Meta Title & Description Teroptimasi Pixel Width',
          standard: 'Title: 50-60 karakter (< 600px). Description: 150-160 karakter (< 960px)',
          howToTest: 'SERP Simulator / Yoast Preview',
          action: 'Sertakan keyword primer di awal judul (front-loaded) dan ajakan tindakan (CTA) memikat di meta description.'
        },
        {
          id: 'sch-2',
          name: 'Validasi JSON-LD Article, BreadcrumbList, & FAQPage',
          standard: 'Nol error dan nol warning pada Google Rich Results Test',
          howToTest: 'https://search.google.com/test/rich-results',
          action: 'Sematkan tag <script type="application/ld+json"> dengan struktur Schema.org yang valid.'
        },
        {
          id: 'sch-3',
          name: 'Kredensial Penulis E-E-A-T (Author Box)',
          standard: 'Penulis memiliki nama jelas, biografi ringkas, dan pengalaman pendidik',
          howToTest: 'Pedoman Penilai Kualitas Google (E-E-A-T Assessment)',
          action: 'Sertakan foto, nama tutor/pengelola PKBM, dan riwayat di bidang pendidikan nonformal di bagian akhir artikel.'
        },
        {
          id: 'sch-4',
          name: 'Open Graph (OG) & Twitter Card Social Meta',
          standard: 'og:title, og:description, og:image (1200x630px), twitter:card',
          howToTest: 'Facebook Sharing Debugger / Twitter Card Validator',
          action: 'Menjamin tampilan cuplikan link rapi dan menarik saat artikel dibagikan ke WhatsApp, Telegram, atau Facebook.'
        }
      ]
    }
  ];

  const totalChecklistItems = TECHNICAL_CHECKLIST.reduce((acc, cat) => acc + cat.items.length, 0);
  const totalChecked = Object.values(checkedItems).filter(Boolean).length;
  const progressPercent = Math.round((totalChecked / totalChecklistItems) * 100);
  const SUPPORTING_CLUSTERS = [
    {
      id: 1,
      title: 'Pilar 1: Pendidikan Kesetaraan: Pengertian, Program, Jenjang, Kurikulum, dan Ujian Lengkap',
      slug: 'pendidikan-kesetaraan-pengertian-program-kurikulum-ujian-panduan-lengkap',
      targetKeyword: 'pendidikan kesetaraan, apa itu pendidikan kesetaraan, tujuan pendidikan kesetaraan',
      searchIntent: 'Informational (Pillar Master)',
      volume: '8.100 / bln',
      anchorFromPillar: 'induk panduan sistem pendidikan kesetaraan nasional',
      anchorToPillar: 'pendidikan kesetaraan resmi di Indonesia',
      summary: 'Dasar hukum UU No. 20/2003 Ps 26, 8 Standar Nasional Pendidikan, jenjang Paket A B C, satuan PKBM/SKB, dan legalitas ijazah.',
      urgency: 'Pilar Induk Otoritas (Pilar 1)'
    },
    {
      id: 2,
      title: 'Cluster 2: Pendidikan Kesetaraan Paket A (Setara SD): Kurikulum, Modul, & Ujian',
      slug: 'pendidikan-kesetaraan-paket-a-setara-sd',
      targetKeyword: 'pendidikan kesetaraan paket a, paket a sejajar dengan tingkat, soal ujian paket a',
      searchIntent: 'Informational',
      volume: '12.100 / bln',
      anchorFromPillar: 'program kejar Paket A setara Sekolah Dasar (SD)',
      anchorToPillar: 'pendidikan kesetaraan Paket A',
      summary: 'Tingkatan 1 (kelas 1-3) & Tingkatan 2 (kelas 4-6), modul literasi-numerasi, soal UPK Paket A, dan hak melanjutkan ke SMP/Paket B.',
      urgency: 'Tinggi (Pengentasan Buta Aksara)'
    },
    {
      id: 3,
      title: 'Cluster 3: Pendidikan Kesetaraan Paket B (Setara SMP): Kurikulum, Modul, & Ujian',
      slug: 'pendidikan-kesetaraan-paket-b-setara-smp',
      targetKeyword: 'pendidikan kesetaraan paket b, kurikulum paket b, soal ujian paket b',
      searchIntent: 'Informational',
      volume: '18.100 / bln',
      anchorFromPillar: 'layanan pendidikan kesetaraan Paket B setara SMP/MTs',
      anchorToPillar: 'program Paket B resmi',
      summary: 'Tingkatan 3 & 4 setara SMP, alokasi SKK kelompok umum dan vokasi, modul belajar mandiri, dan kelulusan PPDB SMA/SMK.',
      urgency: 'Sangat Tinggi (Pilihan Lulusan SD)'
    },
    {
      id: 4,
      title: 'Pilar 2: Panduan Lengkap Pendidikan Kesetaraan Paket C (Setara SMA): Syarat & Kuliah PTN',
      slug: 'panduan-lengkap-pendidikan-kesetaraan-paket-c',
      targetKeyword: 'paket c, sekolah paket c, ijazah paket c, syarat paket c, biaya paket c',
      searchIntent: 'Informational & Commercial (Pilar)',
      volume: '33.100 / bln',
      anchorFromPillar: 'panduan lengkap pendidikan kesetaraan Paket C',
      anchorToPillar: 'sekolah Paket C terakreditasi resmi',
      summary: 'Legitimasi ijazah setara SMA untuk kuliah PTN (SNBP/SNBT UTBK), seleksi CPNS, TNI, Polri, dan dunia kerja modern.',
      urgency: 'Pilar Induk Terbesar (65% Pencarian)'
    },
    {
      id: 5,
      title: 'Pilar 3: Ujian Pendidikan Kesetaraan: Panduan Lengkap UPK, POS, Jadwal 2026, dan Tata Tertib',
      slug: 'ujian-pendidikan-kesetaraan-panduan-lengkap-upk-pos-jadwal-tata-tertib',
      targetKeyword: 'ujian pendidikan kesetaraan, UPK 2026, POS ujian kesetaraan, jadwal ujian 2026',
      searchIntent: 'Exam / Asesmen',
      volume: '11.200 / bln',
      anchorFromPillar: 'tahapan dan jadwal Ujian Pendidikan Kesetaraan (UPK) 2026',
      anchorToPillar: 'pedoman ujian pendidikan kesetaraan',
      summary: 'Regulasi BSKAP Kemendikbudristek, POS UPK 2026, tata tertib, SK Panitia Ujian, berita acara, format laporan, dan nilai ijazah.',
      urgency: 'Kritis (Kebutuhan Periodik Peserta)'
    },
    {
      id: 6,
      title: 'Pilar 4: Kurikulum Merdeka Pendidikan Kesetaraan: Struktur SKK, KOSP, CP, & Modul Ajar',
      slug: 'kurikulum-merdeka-pendidikan-kesetaraan-struktur-kosp-cp-modul-ajar',
      targetKeyword: 'kurikulum pendidikan kesetaraan, kurikulum merdeka kesetaraan, KOSP kesetaraan, CP kesetaraan',
      searchIntent: 'Educational Resource',
      volume: '9.450 / bln',
      anchorFromPillar: 'penerapan Kurikulum Merdeka dan penyusunan KOSP kesetaraan',
      anchorToPillar: 'kurikulum merdeka pendidikan kesetaraan',
      summary: 'Konsep fleksibilitas SKK, Capaian Pembelajaran (CP Fase A-F), modul ajar terintegrasi P5, dan pemberdayaan vokasi lokal.',
      urgency: 'Tinggi (Rujukan Guru & Tutor)'
    },
    {
      id: 7,
      title: 'Pilar 5: Modul Pendidikan Kesetaraan: E-Modul, Ebook, & Buku Pembelajaran Paket A, B, C',
      slug: 'modul-pendidikan-kesetaraan-emodul-ebook-buku-paket-a-b-c',
      targetKeyword: 'modul pendidikan kesetaraan, e-modul kemdikbud, buku paket c pdf, modul paket b',
      searchIntent: 'Educational Resource',
      volume: '8.120 / bln',
      anchorFromPillar: 'koleksi e-modul dan sumber belajar mandiri kesetaraan',
      anchorToPillar: 'modul resmi pendidikan kesetaraan Kemdikbud',
      summary: 'Standar 7 komponen modul self-instructional: petunjuk, tujuan, materi kontekstual, penugasan, latihan soal, dan evaluasi mandiri.',
      urgency: 'Tinggi (Kebutuhan Harian Siswa)'
    },
    {
      id: 8,
      title: 'Pilar 6: Rapor Pendidikan Kesetaraan: Rapor Peserta Didik, Rapor Pendidikan, & Aplikasi e-Rapor',
      slug: 'rapor-pendidikan-kesetaraan-panduan-peserta-didik-aplikasi-erapor',
      targetKeyword: 'rapor pendidikan kesetaraan, e-rapor kesetaraan, aplikasi rapor kesetaraan 2026',
      searchIntent: 'Informational & Tool',
      volume: '6.730 / bln',
      anchorFromPillar: 'panduan pencetakan buku rapor dan aplikasi e-rapor kesetaraan',
      anchorToPillar: 'sistem evaluasi rapor pendidikan kesetaraan',
      summary: 'Klarifikasi tuntas perbedaan rapor hasil belajar siswa vs platform mutu satuan Kemendikbud, serta panduan teknis aplikasi e-rapor.',
      urgency: 'Tinggi (Evaluasi Tiap Semester)'
    },
    {
      id: 9,
      title: 'Pilar 7: Regulasi Pendidikan Kesetaraan: Kumpulan UU, Permendikbud, Juknis, & Standar',
      slug: 'regulasi-pendidikan-kesetaraan-uu-permendikbud-juknis-standar',
      targetKeyword: 'regulasi pendidikan kesetaraan, dasar hukum pendidikan kesetaraan, undang-undang kesetaraan',
      searchIntent: 'Regulation / Legal',
      volume: '7.890 / bln',
      anchorFromPillar: 'tabel master regulasi dan perundang-undangan pendidikan kesetaraan',
      anchorToPillar: 'regulasi resmi pendidikan nonformal',
      summary: 'Tabel kompilasi UU No. 20/2003, PP 57/2021 jo PP 4/2022, Permendikbud 12/2024, Juknis BOSP, dan instrumen akreditasi BAN-PDM.',
      urgency: 'Pilar E-E-A-T (Sumber Yuridis)'
    },
    {
      id: 10,
      title: 'Pilar 8: PKBM: Pengertian, Fungsi, Program, Syarat Pendirian, dan Penyelenggaraan',
      slug: 'pkbm-pengertian-fungsi-program-syarat-dan-penyelenggaraan',
      targetKeyword: 'PKBM, apa itu PKBM, apa kepanjangan PKBM, fungsi PKBM, sekolah PKBM',
      searchIntent: 'Definition',
      volume: '14.200 / bln',
      anchorFromPillar: 'pengertian dan peran Pusat Kegiatan Belajar Masyarakat (PKBM)',
      anchorToPillar: 'lembaga PKBM resmi terdaftar',
      summary: 'Kupas tuntas kepanjangan PKBM, fungsi dalam pemberdayaan masyarakat, syarat izin operasional, NPSN Dapodik, dan akreditasi BAN-PDM.',
      urgency: 'Sangat Tinggi (Search Intent Mendasar)'
    },
    {
      id: 11,
      title: 'Cluster 9: Administrasi Pendidikan Kesetaraan: Format KOSP, RKT, SOP, SK Panitia, & Berita Acara',
      slug: 'administrasi-pendidikan-kesetaraan-kosp-rkt-sop-sk-panitia-berita-acara',
      targetKeyword: 'contoh KOSP pendidikan kesetaraan, RKT PKBM, SOP kesetaraan, berita acara ujian',
      searchIntent: 'Document / Template',
      volume: '5.420 / bln',
      anchorFromPillar: 'template format dokumen manajerial dan administrasi PKBM',
      anchorToPillar: 'administrasi resmi pendidikan kesetaraan',
      summary: 'Format siap pakai dokumen KOSP, Rencana Kerja Tahunan (RKT), SOP kehadiran tutor, SK kepanitiaan ujian, dan format berita acara resmi.',
      urgency: 'Tinggi (Kebutuhan Pengelola PKBM)'
    },
    {
      id: 12,
      title: 'Cluster 10: Kalender Pendidikan Kesetaraan 2026/2027: Jadwal Pembelajaran, UPK, & ANBK',
      slug: 'kalender-pendidikan-kesetaraan-2026-2027-jadwal-upk-anbk',
      targetKeyword: 'kalender pendidikan kesetaraan, kalender pendidikan 2026, jadwal UPK 2026',
      searchIntent: 'Informational',
      volume: '4.910 / bln',
      anchorFromPillar: 'kalender akademik dan jadwal pelaksanaan UPK 2026/2027',
      anchorToPillar: 'kalender pendidikan kesetaraan',
      summary: 'Distribusi minggu efektif semester ganjil-genap, simulasi ANBK, rentang waktu UPK Paket A B C, dan arsip tahun-tahun terdahulu.',
      urgency: 'Tinggi (Agenda Tahunan)'
    },
    {
      id: 13,
      title: 'Cluster 11: Tutor Pendidikan Kesetaraan: Pengertian, Standar Kompetensi, & Forum Tutor Nasional',
      slug: 'tutor-pendidikan-kesetaraan-kompetensi-dan-forum-tutor-nasional',
      targetKeyword: 'tutor pendidikan kesetaraan, forum tutor pendidikan kesetaraan, FTPKN',
      searchIntent: 'Definition',
      volume: '4.380 / bln',
      anchorFromPillar: 'standar kompetensi dan asosiasi profesi tutor kesetaraan',
      anchorToPillar: 'tutor pendidikan kesetaraan profesional',
      summary: '4 standar kompetensi pendidik nonformal (pedagogik andragogi, kepribadian, sosial, profesional), serta kiprah FTPKN & MGMP.',
      urgency: 'Sedang-Tinggi (Komunitas Guru)'
    },
    {
      id: 14,
      title: 'Cluster 12: Pendidikan dan Kesetaraan Gender: Peran, Kebijakan Inklusi, dan Analisis di Indonesia',
      slug: 'pendidikan-dan-kesetaraan-gender-peran-inklusi-analisis-indonesia',
      targetKeyword: 'kesetaraan gender dalam pendidikan, pendidikan dan kesetaraan gender, pendidikan inklusif',
      searchIntent: 'Informational (Sociology)',
      volume: '6.120 / bln',
      anchorFromPillar: 'kajian peran pendidikan dalam mewujudkan kesetaraan gender',
      anchorToPillar: 'pendidikan inklusif dan kesetaraan gender',
      summary: 'Analisis sosiologi pendidikan, pembongkaran stereotip, pencegahan perkawinan anak, dan peran safe-space PKBM bagi kaum perempuan.',
      urgency: 'Topical Differentiation (Klarifikasi Istilah)'
    },
    {
      id: 15,
      title: 'Local SEO: Profil PKBM Celah Cahaya Garut: NPSN P9984574, Layanan Paket A/B/C Singajaya',
      slug: 'pkbm-celah-cahaya-garut-pusat-pendidikan-kesetaraan-singajaya',
      targetKeyword: 'PKBM Celah Cahaya, PKBM Garut, Paket C Garut, sekolah kesetaraan terdekat Singajaya',
      searchIntent: 'Local SEO & Conversion',
      volume: '9.850 / bln',
      anchorFromPillar: 'profil dan sekretariat resmi PKBM Celah Cahaya Garut',
      anchorToPillar: 'PKBM Celah Cahaya Singajaya Garut',
      summary: 'Izin Operasional No. 421.9/1145-DISDIK, NPSN resmi, kelas fleksibel, beasiswa KIP, dan rute navigasi Google Maps Singajaya Garut.',
      urgency: 'Kritis (Konversi Pendaftaran Lokal)'
    }
  ];

  // Local SEO Garut Keywords
  const LOCAL_KEYWORDS_GARUT = [
    {
      keyword: 'PKBM Garut / PKBM di Garut',
      intent: 'Commercial / Navigational',
      volume: '480 / bln',
      competition: 'Rendah (Peluang Ranking #1 sangat besar)',
      targetUrl: 'https://www.celahcahaya.sch.id/tentang',
      optimization: 'Sertakan pada H1 beranda, footer NAP, dan meta description'
    },
    {
      keyword: 'Paket C Garut / Kejar Paket C Garut',
      intent: 'Transactional',
      volume: '390 / bln',
      competition: 'Rendah-Sedang',
      targetUrl: 'https://www.celahcahaya.sch.id/program/paket-c',
      optimization: 'Heading H1, schema Course, testimoni warga Garut, FAQ lokal'
    },
    {
      keyword: 'Sekolah Paket C Terdekat di Garut',
      intent: 'Local Commercial',
      volume: '260 / bln',
      competition: 'Rendah',
      targetUrl: 'https://www.celahcahaya.sch.id/kontak',
      optimization: 'Optimasi Google Business Profile, sematan Google Maps, rute Singajaya Garut'
    },
    {
      keyword: 'Biaya Paket C Garut',
      intent: 'Commercial Investigation',
      volume: '210 / bln',
      competition: 'Rendah',
      targetUrl: 'https://www.celahcahaya.sch.id/artikel/rincian-biaya-sekolah-paket-c-garut-beasiswa-kip',
      optimization: 'Tabel komparasi transparan, skema KIP gratis, CTA konsultasi biaya WA'
    },
    {
      keyword: 'Paket B Garut / Kejar Paket SMP Garut',
      intent: 'Transactional',
      volume: '170 / bln',
      competition: 'Rendah',
      targetUrl: 'https://www.celahcahaya.sch.id/program/paket-b',
      optimization: 'Landing page Paket B spesifik wilayah Garut & sekitarnya'
    },
    {
      keyword: 'Paket A Garut / Kejar Paket SD Garut',
      intent: 'Transactional',
      volume: '110 / bln',
      competition: 'Rendah',
      targetUrl: 'https://www.celahcahaya.sch.id/program/paket-a',
      optimization: 'Panduan keaksaraan dan ijazah SD formal bagi anak putus sekolah'
    },
    {
      keyword: 'PKBM Singajaya Garut / PKBM Peundeuy / PKBM Cikajang',
      intent: 'Hyper-Local Geo-Targeted',
      volume: '150 / bln',
      competition: 'Sangat Rendah (Dominasi Instan)',
      targetUrl: 'https://www.celahcahaya.sch.id/kontak',
      optimization: 'Konten jangkauan area layanan kecamatan sekitar Garut'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <Breadcrumb
        items={[{ name: 'Strategi SEO & Klaster Topik' }]}
        onNavigate={onNavigate}
      />

      {/* Header */}
      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center space-x-2 bg-sky-50 text-sky-800 text-xs font-semibold px-3 py-1 rounded-full border border-sky-200">
          <Target className="w-3.5 h-3.5 text-[#0284C7]" />
          <span>SEO Blueprints & Topical Authority Framework</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Strategi SEO & Matriks Klaster Konten Celah Cahaya
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Arsitektur lengkap optimasi mesin pencari berkelanjutan untuk mendominasi kata kunci pendidikan nonformal, Paket A/B/C, beasiswa, dan lokal Garut di domain <strong>https://www.celahcahaya.sch.id</strong>.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 border-b border-slate-200 scrollbar-none">
        <button
          onClick={() => setActiveTab('clusters')}
          className={`px-4 py-2.5 text-xs font-bold whitespace-nowrap rounded-t-xl transition-all border-b-2 flex items-center space-x-1.5 ${
            activeTab === 'clusters'
              ? 'border-[#0284C7] text-[#0284C7] bg-sky-50/70'
              : 'border-transparent text-slate-600 hover:text-slate-900'
          }`}
        >
          <Network className="w-3.5 h-3.5" />
          <span>1. Topic Cluster (Pillar & 7 Supporting)</span>
        </button>
        <button
          onClick={() => setActiveTab('local')}
          className={`px-4 py-2.5 text-xs font-bold whitespace-nowrap rounded-t-xl transition-all border-b-2 flex items-center space-x-1.5 ${
            activeTab === 'local'
              ? 'border-[#0284C7] text-[#0284C7] bg-sky-50/70'
              : 'border-transparent text-slate-600 hover:text-slate-900'
          }`}
        >
          <MapPin className="w-3.5 h-3.5" />
          <span>2. Strategi Local SEO Garut & GBP</span>
        </button>
        <button
          onClick={() => setActiveTab('template')}
          className={`px-4 py-2.5 text-xs font-bold whitespace-nowrap rounded-t-xl transition-all border-b-2 flex items-center space-x-1.5 ${
            activeTab === 'template'
              ? 'border-[#0284C7] text-[#0284C7] bg-sky-50/70'
              : 'border-transparent text-slate-600 hover:text-slate-900'
          }`}
        >
          <FileText className="w-3.5 h-3.5" />
          <span>3. Template Artikel SEO-Ready & Panduan</span>
        </button>
        <button
          onClick={() => setActiveTab('matrix')}
          className={`px-4 py-2.5 text-xs font-bold whitespace-nowrap rounded-t-xl transition-all border-b-2 flex items-center space-x-1.5 ${
            activeTab === 'matrix'
              ? 'border-[#0284C7] text-[#0284C7] bg-sky-50/70'
              : 'border-transparent text-slate-600 hover:text-slate-900'
          }`}
        >
          <Target className="w-3.5 h-3.5" />
          <span>4. Matriks Keyword & Search Intent</span>
        </button>
        <button
          onClick={() => setActiveTab('roadmap')}
          className={`px-4 py-2.5 text-xs font-bold whitespace-nowrap rounded-t-xl transition-all border-b-2 flex items-center space-x-1.5 ${
            activeTab === 'roadmap'
              ? 'border-[#0284C7] text-[#0284C7] bg-sky-50/70'
              : 'border-transparent text-slate-600 hover:text-slate-900'
          }`}
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>5. Roadmap 20+ Artikel Edukasi</span>
        </button>
        <button
          onClick={() => setActiveTab('schemas')}
          className={`px-4 py-2.5 text-xs font-bold whitespace-nowrap rounded-t-xl transition-all border-b-2 flex items-center space-x-1.5 ${
            activeTab === 'schemas'
              ? 'border-[#0284C7] text-[#0284C7] bg-sky-50/70'
              : 'border-transparent text-slate-600 hover:text-slate-900'
          }`}
        >
          <FileCode className="w-3.5 h-3.5" />
          <span>6. Schema.org & Rich Results Validator (0 Errors)</span>
        </button>
        <button
          onClick={() => setActiveTab('technical')}
          className={`px-4 py-2.5 text-xs font-bold whitespace-nowrap rounded-t-xl transition-all border-b-2 flex items-center space-x-1.5 ${
            activeTab === 'technical'
              ? 'border-[#0284C7] text-[#0284C7] bg-sky-50/70'
              : 'border-transparent text-slate-600 hover:text-slate-900'
          }`}
        >
          <Layers className="w-3.5 h-3.5" />
          <span>7. Technical SEO, Sitemap Crawler & WebP Optimizer</span>
        </button>
      </div>

      {/* TAB 1: TOPIC CLUSTERS */}
      {activeTab === 'clusters' && (
        <section className="space-y-8">
          {/* Overview Pillar Card */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-2xs space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-6">
              <div>
                <span className="bg-sky-100 text-sky-900 text-[11px] font-extrabold uppercase px-3 py-1 rounded-full tracking-wider">
                  Topik Utama Terpilih (Pillar Content)
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-2">
                  Panduan Lengkap Pendidikan Kesetaraan Paket C: Syarat, Biaya, Kurikulum, dan Prosedur Kuliah ke PTN
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 font-mono">
                  URL Sasaran: <span className="text-[#0284C7] font-bold">https://www.celahcahaya.sch.id/artikel/panduan-lengkap-pendidikan-kesetaraan-paket-c</span>
                </p>
              </div>
              <div className="bg-sky-50 border border-sky-200 rounded-2xl p-4 text-xs space-y-1 text-sky-900 shrink-0 md:max-w-xs">
                <div className="font-bold flex items-center space-x-1">
                  <Sparkles className="w-4 h-4 text-[#0284C7]" />
                  <span>Kekuatan Otoritas Topik (Topical Authority)</span>
                </div>
                <p className="text-sky-800 text-[11px] leading-relaxed">
                  Paket C menyumbang 65% volume pencarian pendidikan nonformal di Indonesia. Artikel pilar ini bertindak sebagai induk konversi dan rujukan resmi seluruh topik turunan.
                </p>
              </div>
            </div>

            {/* Architecture Graphic */}
            <div className="bg-slate-950 p-6 sm:p-8 rounded-3xl text-white space-y-6">
              <div className="text-center space-y-1.5 max-w-xl mx-auto">
                <span className="text-xs font-mono uppercase tracking-widest text-sky-400 font-bold">
                  Sistem Tautan Silo Dua Arah (Bi-Directional Internal Linking)
                </span>
                <p className="text-xs text-slate-400">
                  Setiap artikel pendukung (cluster) wajib memiliki minimal 1 tautan kontekstual ke artikel pilar utama, dan artikel pilar menautkan kembali ke klaster untuk menyalurkan PageRank & relevansi semantik.
                </p>
              </div>

              {/* Pillar Core Box */}
              <div className="max-w-2xl mx-auto bg-gradient-to-r from-[#0284C7] to-[#0369a1] p-5 rounded-2xl text-center shadow-xl border border-sky-400/40 space-y-2">
                <div className="inline-flex items-center space-x-1.5 bg-slate-950/70 text-sky-300 text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                  <Star className="w-3 h-3 fill-sky-300" />
                  <span>Pillar Content Utama (3.000+ Kata, Comprehensive)</span>
                </div>
                <h3 className="font-extrabold text-base sm:text-lg text-white">
                  Panduan Lengkap Pendidikan Kesetaraan Paket C di Indonesia
                </h3>
                <p className="text-xs text-sky-100">
                  Target Keyword: <strong>pendidikan kesetaraan paket c, sekolah paket c, kejar paket c, ijazah paket c</strong>
                </p>
              </div>

              <div className="text-center text-sky-400 text-xs font-mono font-bold">
                ▲ Internal Link Relevan Mengalir Dua Arah Antara Pillar & 7 Supporting Contents ▼
              </div>

              {/* 7 Supporting Items Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
                {SUPPORTING_CLUSTERS.map((cluster) => (
                  <div key={cluster.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex flex-col justify-between hover:border-sky-500/50 transition-all space-y-3">
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="text-sky-400 font-bold text-[11px]">Cluster {cluster.id}</span>
                        <span className="bg-slate-800 text-slate-300 text-[10px] px-2 py-0.5 rounded-full font-medium">
                          {cluster.volume}
                        </span>
                      </div>
                      <h4 className="font-bold text-white text-xs leading-snug line-clamp-2">
                        {cluster.title}
                      </h4>
                      <div className="text-[11px] text-slate-400">
                        <span className="font-semibold text-slate-300">Intent:</span> {cluster.searchIntent}
                      </div>
                    </div>

                    <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800 text-[10px] space-y-1 text-slate-300">
                      <div>
                        <span className="text-sky-400 font-mono">Anchor ke Pillar:</span> "{cluster.anchorToPillar}"
                      </div>
                      <div>
                        <span className="text-emerald-400 font-mono">Anchor dari Pillar:</span> "{cluster.anchorFromPillar}"
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Detailed Table Breakdown */}
            <div className="space-y-4 pt-4">
              <h3 className="text-base font-bold text-slate-900 flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Rincian 7 Ide Supporting Content, Search Intent, & Strategi Penautan</span>
              </h3>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs text-slate-600">
                  <thead className="bg-slate-100 text-slate-700 uppercase text-[10px] tracking-wider font-bold">
                    <tr>
                      <th className="p-3">No & Judul Artikel</th>
                      <th className="p-3">Target Keyword</th>
                      <th className="p-3">Search Intent</th>
                      <th className="p-3">Anchor Text Masuk & Keluar</th>
                      <th className="p-3">Peran Strategis Topical Authority</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {SUPPORTING_CLUSTERS.map((c) => (
                      <tr key={c.id} className="hover:bg-slate-50/80">
                        <td className="p-3.5 max-w-xs font-bold text-slate-900 space-y-1">
                          <div>{c.id}. {c.title}</div>
                          <div className="text-[10px] font-mono text-[#0284C7]">/artikel/{c.slug}</div>
                        </td>
                        <td className="p-3.5 font-mono text-slate-700">{c.targetKeyword}</td>
                        <td className="p-3.5">
                          <span className="px-2 py-0.5 rounded-md font-semibold text-[10px] bg-blue-100 text-blue-800">
                            {c.searchIntent}
                          </span>
                        </td>
                        <td className="p-3.5 space-y-1 text-[11px]">
                          <div><strong className="text-sky-800">Ke Pillar:</strong> "{c.anchorToPillar}"</div>
                          <div><strong className="text-emerald-800">Dari Pillar:</strong> "{c.anchorFromPillar}"</div>
                        </td>
                        <td className="p-3.5 text-slate-700 text-[11px] max-w-xs">
                          {c.summary}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* TAB 2: LOCAL SEO GARUT */}
      {activeTab === 'local' && (
        <section className="space-y-8">
          {/* Local Keywords Matrix */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-2xs space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
              <div>
                <div className="flex items-center space-x-2 text-[#0284C7] font-bold text-xs uppercase tracking-wider">
                  <MapPin className="w-4 h-4" />
                  <span>Dominasi Pencarian Geografis Garut</span>
                </div>
                <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 mt-1">
                  1. Rekomendasi Target Keyword Lokal Garut & Sekitarnya
                </h2>
              </div>
              <span className="bg-emerald-100 text-emerald-800 text-xs px-3 py-1 rounded-full font-bold self-start sm:self-auto">
                Tingkat Persaingan Rendah
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-600">
                <thead className="bg-slate-100 text-slate-700 uppercase text-[10px] tracking-wider font-bold">
                  <tr>
                    <th className="p-3">Keyword Lokal Garut</th>
                    <th className="p-3">Search Intent</th>
                    <th className="p-3">Est. Volume</th>
                    <th className="p-3">Tingkat Kompetisi</th>
                    <th className="p-3">Target Landing Page & Strategi On-Page</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {LOCAL_KEYWORDS_GARUT.map((item, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/80">
                      <td className="p-3 font-bold text-slate-900 font-mono">{item.keyword}</td>
                      <td className="p-3">
                        <span className="bg-sky-100 text-sky-900 px-2 py-0.5 rounded-sm font-semibold text-[10px]">
                          {item.intent}
                        </span>
                      </td>
                      <td className="p-3 font-semibold text-slate-700">{item.volume}</td>
                      <td className="p-3 text-emerald-700 font-bold">{item.competition}</td>
                      <td className="p-3 max-w-xs space-y-0.5">
                        <div className="text-sky-800 font-medium text-[11px] truncate">{item.targetUrl}</div>
                        <div className="text-[10px] text-slate-500">{item.optimization}</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Schema LocalBusiness & EducationalOrganization */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-2xs space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
              <div>
                <div className="flex items-center space-x-2 text-[#0284C7] font-bold text-xs uppercase tracking-wider">
                  <Building className="w-4 h-4" />
                  <span>Structured Data JSON-LD</span>
                </div>
                <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 mt-1">
                  2. Struktur Schema Markup EducationalOrganization & LocalBusiness
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  Markup terverifikasi W3C & Google Rich Results untuk memicu Knowledge Panel dan Local 3-Pack Maps.
                </p>
              </div>

              <button
                onClick={() => copyToClipboard(`{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["EducationalOrganization", "LocalBusiness"],
      "@id": "https://www.celahcahaya.sch.id/#organization",
      "name": "PKBM Celah Cahaya Garut",
      "alternateName": "Pusat Kegiatan Belajar Masyarakat Celah Cahaya",
      "legalName": "PKBM Celah Cahaya Garut",
      "url": "https://www.celahcahaya.sch.id",
      "logo": "https://www.celahcahaya.sch.id/assets/logo.png",
      "image": "https://blogger.googleusercontent.com/img/a/AVvXsEj3KzyMrdZuYBjAw8e-FrwdZYX1a7daYs3D7gYWaaTBpU4-FK9BVqOf6c1hsvfQ9v18h2C9oQySaNhTFUxINvOkSJzSDC45hGircCQCaWGNL5nKyrDalbnbS87KWAg-Yc_q-B3ocXP2Y80IdiuRxzQlFHycAINfPZEBUHAnr-nMgQNSCuxjYk9X-0IT-leO",
      "description": "Lembaga pendidikan nonformal resmi jenjang Pendidikan Masyarakat (DIKMAS) di Kabupaten Garut. Menyelenggarakan pendidikan kesetaraan Paket B (SMP) dan Paket C (SMA), beasiswa KIP, dan kursus kecakapan vokasi digital.",
      "telephone": "+62 821-1936-2454",
      "email": "info@celahcahaya.sch.id",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Kp. Sukawangi, Desa Sukawangi",
        "addressLocality": "Singajaya, Garut",
        "addressRegion": "Jawa Barat",
        "postalCode": "44173",
        "addressCountry": "ID"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -7.4912,
        "longitude": 107.8765
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "08:00",
          "closes": "16:00"
        }
      ],
      "priceRange": "Rp 0 - Rp 350.000",
      "currenciesAccepted": "IDR",
      "paymentAccepted": "Cash, Bank Transfer",
      "sameAs": [
        "https://www.facebook.com/pkbmcelahcahaya",
        "https://www.instagram.com/celahcahaya.sch",
        "https://maps.google.com/?cid=pkbmcelahcahaya"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Layanan Pendidikan Kesetaraan Garut",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Course",
              "name": "Pendidikan Kesetaraan Paket C (Setara SMA)",
              "description": "Pendidikan kesetaraan tingkat atas berijazah negara resmi untuk melanjutkan kuliah atau bekerja."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Course",
              "name": "Pendidikan Kesetaraan Paket B (Setara SMP)",
              "description": "Pendidikan kesetaraan tingkat menengah pertama."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Course",
              "name": "Pendidikan Kesetaraan Paket A (Setara SD)",
              "description": "Pendidikan kesetaraan tingkat dasar dan keaksaraan."
            }
          }
        ]
      }
    }
  ]
}`, 'schema-local')}
                className="inline-flex items-center space-x-1.5 px-4 py-2 bg-[#0284C7] hover:bg-[#0369a1] text-white text-xs font-bold rounded-xl shadow-xs transition-colors shrink-0"
              >
                {copiedSection === 'schema-local' ? <Check className="w-4 h-4 text-emerald-200" /> : <Copy className="w-4 h-4" />}
                <span>{copiedSection === 'schema-local' ? 'Tersalin ke Clipboard!' : 'Salin JSON-LD'}</span>
              </button>
            </div>

            <div className="bg-slate-950 p-5 rounded-2xl text-xs font-mono text-emerald-300 overflow-x-auto leading-relaxed border border-slate-800 max-h-96">
              <pre>{`{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["EducationalOrganization", "LocalBusiness"],
      "@id": "https://www.celahcahaya.sch.id/#organization",
      "name": "PKBM Celah Cahaya Garut",
      "alternateName": "Pusat Kegiatan Belajar Masyarakat Celah Cahaya",
      "url": "https://www.celahcahaya.sch.id",
      "telephone": "+62 821-1936-2454",
      "email": "info@celahcahaya.sch.id",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Kp. Sukawangi, Desa Sukawangi",
        "addressLocality": "Singajaya, Garut",
        "addressRegion": "Jawa Barat",
        "postalCode": "44173",
        "addressCountry": "ID"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -7.4912,
        "longitude": 107.8765
      },
      "openingHoursSpecification": [{
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "08:00",
        "closes": "16:00"
      }],
      "priceRange": "Rp 0 - Rp 350.000",
      "sameAs": [
        "https://www.instagram.com/celahcahaya.sch",
        "https://maps.google.com/?cid=pkbmcelahcahaya"
      ]
    }
  ]
}`}</pre>
            </div>
          </div>

          {/* Google Business Profile Optimization Guide */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-2xs space-y-6">
            <div>
              <div className="flex items-center space-x-2 text-[#0284C7] font-bold text-xs uppercase tracking-wider">
                <Store className="w-4 h-4" />
                <span>Google Business Profile (GBP) Mastery</span>
              </div>
              <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 mt-1">
                3. Panduan Optimasi Google Business Profile Celah Cahaya Garut
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Langkah konkret mengamankan peringkat #1 di Google Maps dan Local 3-Pack saat calon peserta mencari "sekolah paket c terdekat" di area Garut.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                <div className="font-bold text-slate-900 flex items-center space-x-2">
                  <span className="w-5 h-5 rounded-full bg-[#0284C7] text-white flex items-center justify-center text-[10px]">1</span>
                  <span>Penamaan Profil Resmi (NAP Standard)</span>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Gunakan format nama: <strong>"PKBM Celah Cahaya Garut - Pusat Pendidikan Kesetaraan Paket A B C"</strong>. Menghindari penumpukan kata kunci spam, namun tetap memuat identitas lembaga dan kata kunci lokal utama.
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                <div className="font-bold text-slate-900 flex items-center space-x-2">
                  <span className="w-5 h-5 rounded-full bg-[#0284C7] text-white flex items-center justify-center text-[10px]">2</span>
                  <span>Pemilihan Kategori Primer & Sekunder</span>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  <strong>Kategori Primer:</strong> <em>Pusat Pendidikan Nonformal / Adult Education School</em>.<br />
                  <strong>Kategori Sekunder:</strong> <em>Sekolah Menengah Atas Swasta, Lembaga Pelatihan Komputer, Pusat Kegiatan Masyarakat</em>.
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                <div className="font-bold text-slate-900 flex items-center space-x-2">
                  <span className="w-5 h-5 rounded-full bg-[#0284C7] text-white flex items-center justify-center text-[10px]">3</span>
                  <span>Deskripsi Bisnis Teroptimasi (750 Karakter)</span>
                </div>
                <p className="text-slate-600 leading-relaxed font-mono bg-white p-2 rounded-lg border border-slate-200 text-[11px]">
                  "PKBM Celah Cahaya adalah satuan pendidikan swasta Pusat Kegiatan Belajar Masyarakat (PKBM) jenjang DIKMAS resmi di Kabupaten Garut (NPSN P9984574, SK Izin No. 421.9/1145-DISDIK). Menyelenggarakan Program Pendidikan Kesetaraan Paket B dan Paket C dengan ijazah resmi negara untuk kuliah PTN atau bekerja. Beralamat di Kp. Sukawangi, Desa Sukawangi, Kec. Singajaya, Kab. Garut, Jawa Barat. Konsultasi WhatsApp di +62 821-1936-2454."
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                <div className="font-bold text-slate-900 flex items-center space-x-2">
                  <span className="w-5 h-5 rounded-full bg-[#0284C7] text-white flex items-center justify-center text-[10px]">4</span>
                  <span>Foto Geotagged Berkualitas Tinggi</span>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Unggah minimal 15-20 foto nyata dengan metadata koordinat Garut: Plang gedung tampak depan Kp. Sukawangi Singajaya, ruang kelas belajar, laboratorium komputer ANBK, aktivitas belajar mengajar, dan piagam akreditasi.
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                <div className="font-bold text-slate-900 flex items-center space-x-2">
                  <span className="w-5 h-5 rounded-full bg-[#0284C7] text-white flex items-center justify-center text-[10px]">5</span>
                  <span>Katalog Produk & Layanan (Services Menu)</span>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Tambahkan setiap program sebagai produk: Paket C (Setara SMA), Paket B (Setara SMP), Paket A (Setara SD), Pelatihan Digital AI. Tautkan tombol 'Daftar' langsung ke URL: <em>https://www.celahcahaya.sch.id/pendaftaran</em>.
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                <div className="font-bold text-slate-900 flex items-center space-x-2">
                  <span className="w-5 h-5 rounded-full bg-[#0284C7] text-white flex items-center justify-center text-[10px]">6</span>
                  <span>SOP Ulasan Bintang 5 & Balasan Cepat</span>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Berikan QR code tautan review Google ke setiap warga belajar yang lulus atau menerima beasiswa. Balas 100% ulasan dalam 24 jam dengan menyisipkan kata kunci alami: <em>"Terima kasih atas kepercayaannya belajar Paket C di PKBM Celah Cahaya Garut..."</em>.
                </p>
              </div>
            </div>
          </div>

          {/* Local Citations / NAP Checklist */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-2xs space-y-4">
            <div>
              <div className="flex items-center space-x-2 text-[#0284C7] font-bold text-xs uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>Konsistensi Kutipan Lokal (NAP Citations)</span>
              </div>
              <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 mt-1">
                4. Direktori Wajib & Standar Penulisan NAP (Name, Address, Phone)
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Google mencocokkan data dari ratusan direktori web untuk memvalidasi keberadaan fisik lembaga. Sedikit perbedaan penulisan alamat dapat melemahkan ranking lokal.
              </p>
            </div>

            <div className="p-4 bg-sky-50 border border-sky-200 rounded-2xl text-xs space-y-2">
              <div className="font-bold text-sky-900">Format Standar Tunggal Wajib (Jangan Pernah Diubah-ubah):</div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 font-mono text-[11px] text-amber-950">
                <div className="bg-white p-2 rounded-lg border border-sky-200">
                  <span className="text-slate-400 block text-[10px] uppercase font-sans">Name (Nama Resmi)</span>
                  <strong>PKBM Celah Cahaya</strong>
                </div>
                <div className="bg-white p-2 rounded-lg border border-sky-200">
                  <span className="text-slate-400 block text-[10px] uppercase font-sans">Address (Alamat)</span>
                  <strong>Kp. Sukawangi, Desa Sukawangi, Kec. Singajaya, Garut, Jawa Barat 44173</strong>
                </div>
                <div className="bg-white p-2 rounded-lg border border-sky-200">
                  <span className="text-slate-400 block text-[10px] uppercase font-sans">Phone & Web</span>
                  <strong>+62 821-1936-2454<br />https://www.celahcahaya.sch.id</strong>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs pt-2">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                <div className="font-bold text-slate-900">1. Portal Kemendikbud</div>
                <p className="text-slate-500 text-[11px]">Data Referensi Kemdikbud (referensi.data.kemdikbud.go.id) & SekolahKita.</p>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                <div className="font-bold text-slate-900">2. Peta Digital Utama</div>
                <p className="text-slate-500 text-[11px]">Google Maps, Apple Maps, Bing Places for Business, OpenStreetMap.</p>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                <div className="font-bold text-slate-900">3. Direktori Bisnis Lokal</div>
                <p className="text-slate-500 text-[11px]">Yellow Pages Indonesia, Kompasiana Lembaga Edukasi, Direktori GarutKab.go.id.</p>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                <div className="font-bold text-slate-900">4. Media Sosial Resmi</div>
                <p className="text-slate-500 text-[11px]">Facebook Page, Instagram @celahcahaya.sch, LinkedIn Organization, YouTube Channel.</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* TAB 3: ARTICLE TEMPLATE */}
      {activeTab === 'template' && (
        <section className="space-y-8">
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-2xs space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
              <div>
                <div className="flex items-center space-x-2 text-[#0284C7] font-bold text-xs uppercase tracking-wider">
                  <FileText className="w-4 h-4" />
                  <span>Content Production Standard</span>
                </div>
                <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 mt-1">
                  Template Artikel Edukasi Standar SEO Celah Cahaya (Siap Pakai)
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  Kerangka penulisan komprehensif yang dirancang untuk lolos peninjauan Helpful Content System, tampil di Google AI Overviews, dan merangking di halaman 1.
                </p>
              </div>

              <button
                onClick={() => copyToClipboard(`---
Judul Artikel (H1): [Judul Menarik Mengandung Kata Kunci Utama - Maks 65 Karakter]
Meta Title: [Judul SEO 50-60 Karakter | PKBM Celah Cahaya Garut]
Meta Description: [Ringkasan Padat 150-160 Karakter dengan Action Verb + Ajakan Membaca]
Target Keyword Utama: [Keyword Fokus]
Keyword LSI / Sekunder: [Keyword 1, Keyword 2, Keyword 3]
Target Search Intent: [Informational / Commercial / Transactional]
Target URL Slug: /artikel/[kata-kunci-utama-pemisah-strip]
Penulis / Reviewer: [Nama Penulis & Kredensial Pendidik E-E-A-T]
Estimasi Waktu Baca: [X] Menit
---

# [H1: Judul Utama Artikel]

> **Ringkasan Cepat (Key Takeaways / AI Overview Snippet):**
> * **Poin Utama 1:** [Jawaban langsung dari pertanyaan inti pembaca dalam 1-2 kalimat].
> * **Poin Utama 2:** [Fakta regulasi Kemendikbud atau data pendukung terverifikasi].
> * **Poin Utama 3:** [Solusi praktis yang disediakan oleh PKBM Celah Cahaya Garut].

---

## Daftar Isi
1. [Pendahuluan & Konteks Masalah](#pendahuluan)
2. [Poin Pembahasan Inti 1](#poin-1)
3. [Poin Pembahasan Inti 2](#poin-2)
4. [Tabel Komparasi / Rincian Biaya / Syarat Dokumen](#tabel-data)
5. [Tanya Jawab Seputar Topik (FAQ)](#faq)
6. [Kesimpulan & Langkah Pendaftaran](#kesimpulan)

---

<a id="pendahuluan"></a>
## 1. Pendahuluan
[Paragraf pembuka 100-150 kata. Buka dengan empati terhadap masalah yang dihadapi pembaca (misal: usia sudah dewasa tapi belum punya ijazah SMA, atau ingin kuliah tapi terkendala biaya). Sebutkan kata kunci utama secara alami di paragraf pertama. Jelaskan secara ringkas apa yang akan mereka pelajari di panduan ini.]

---

<a id="poin-1"></a>
## 2. [Subtopik Utama Pertama: Regulasi & Fakta Dasar]
[Uraikan dasar hukum resmi, misalnya UU No. 20 Tahun 2003 atau Permendikbud terbaru. Berikan penjelasan lugas tanpa bahasa berbelit.]

### [H3: Detail Turunan dari Subtopik 1]
* **Syarat Dokumen:** [Jelaskan rincian berkas].
* **Keabsahan Ijazah:** [Tautkan secara internal ke artikel pilar: "Pelajari selengkapnya pada [Panduan Lengkap Pendidikan Kesetaraan Paket C](/artikel/panduan-lengkap-pendidikan-kesetaraan-paket-c)."]

---

<a id="poin-2"></a>
## 3. [Subtopik Utama Kedua: Langkah Praktis / Prosedur]
[Berikan panduan langkah demi langkah (Numbered list 1, 2, 3) agar mudah dipindai pembaca dan Google crawler.]

1. **Langkah Pertama:** [Deskripsi tindakan].
2. **Langkah Kedua:** [Deskripsi tindakan].
3. **Langkah Ketiga:** [Deskripsi tindakan].

---

<a id="tabel-data"></a>
## 4. Rincian & Tabel Komparasi Resmi
| Kategori / Parameter | Program Paket C Resmi | Sekolah Menengah Formal |
| :--- | :--- | :--- |
| **Legalitas Hukum** | Ijazah Resmi Negara (Kemendikbudristek) | Ijazah Resmi Negara |
| **Hak Kuliah PTN** | Setara (Bisa ikut UTBK-SNBT) | Bisa ikut UTBK-SNBT |
| **Fleksibilitas Jam** | Sangat Fleksibel (Bisa sambil kerja) | Pagi - Sore Penuh |

---

<a id="faq"></a>
## 5. Pertanyaan yang Sering Diajukan (FAQ)

### Q: Apakah lulusan Paket C bisa kuliah di Universitas Negeri (PTN)?
**A:** Sangat bisa. Berdasarkan Permendikbudristek No. 63 Tahun 2022, pemegang ijazah Paket C memiliki hak hukum yang sama persis untuk mendaftar seleksi nasional masuk perguruan tinggi (SNPMB dan UTBK).

### Q: Berapa lama waktu yang dibutuhkan untuk menyelesaikan pendidikan Paket C di Celah Cahaya?
**A:** Durasi belajar disesuaikan dengan rekam jejak raport sebelumnya. Bagi yang memiliki raport kelas 1-2 SMA, proses penyetaraan dapat berlangsung lebih cepat sesuai kurikulum fleksibel Dapodik.

---

<a id="kesimpulan"></a>
## 6. Kesimpulan & Cara Mulai Belajar di Celah Cahaya Garut
[Paragraf penutup 50-80 kata yang memberikan semangat optimisme bahwa pendidikan tidak mengenal kata terlambat.]

### [Kotak Call-to-Action / CTA Pendaftaran]
> **Siap Melanjutkan Pendidikan dan Meraih Ijazah Resmi?**
> Jangan biarkan masa depan Anda tertunda. PKBM Celah Cahaya membuka pendaftaran warga belajar baru jenjang Paket A, B, dan C dengan biaya terjangkau dan beasiswa KIP.
>
> 🚀 **[Daftar Warga Belajar Baru Sekarang Online](/pendaftaran)**
> 💬 **[Konsultasi Gratis via WhatsApp (+62 821-1936-2454)](https://wa.me/6282119362454?text=Halo%20Admin%20PKBM%20Celah%20Cahaya,%20saya%20ingin%20konsultasi%20Paket%20C)**

---

### Profil Penulis (E-E-A-T Author Box)
**Ditulis oleh:** Tim Akademik PKBM Celah Cahaya Garut  
**Ditinjau oleh:** Kepala PKBM Celah Cahaya (Pengalaman 15+ Tahun dalam Pendidikan Kesetaraan dan Pemberdayaan Nonformal Garut).
`, 'markdown-template')}
                className="inline-flex items-center space-x-1.5 px-4 py-2 bg-[#0284C7] hover:bg-[#0369a1] text-white text-xs font-bold rounded-xl shadow-xs transition-colors shrink-0"
              >
                {copiedSection === 'markdown-template' ? <Check className="w-4 h-4 text-emerald-200" /> : <Copy className="w-4 h-4" />}
                <span>{copiedSection === 'markdown-template' ? 'Template Tersalin!' : 'Salin Template Markdown'}</span>
              </button>
            </div>

            {/* Step-by-Step Filling Guide */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider text-sky-800">
                Panduan Praktis Mengisi Setiap Elemen Artikel SEO Celah Cahaya
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-1.5">
                  <div className="font-bold text-slate-900 flex items-center space-x-2">
                    <span className="w-5 h-5 rounded-full bg-sky-100 text-sky-800 flex items-center justify-center text-[10px] font-bold">1</span>
                    <span>H1 & Judul Meta (50 - 60 Karakter)</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    Sertakan kata kunci utama di awal judul (front-loading). Gunakan kata pemikat yang relevan: <em>"Panduan Lengkap", "Syarat Terbaru 2024", "Bisa Kuliah di PTN"</em>. Hindari judul yang terpotong di hasil pencarian Google.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-1.5">
                  <div className="font-bold text-slate-900 flex items-center space-x-2">
                    <span className="w-5 h-5 rounded-full bg-sky-100 text-sky-800 flex items-center justify-center text-[10px] font-bold">2</span>
                    <span>Meta Description (150 - 160 Karakter)</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    Tuliskan intisari artikel yang memicu CTR tinggi. Contoh: <em>"Temukan syarat lengkap pendaftaran Paket C di Garut, rincian biaya, panduan beasiswa KIP, dan cara melanjutkan kuliah ke universitas negeri di sini."</em>
                  </p>
                </div>

                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-1.5">
                  <div className="font-bold text-slate-900 flex items-center space-x-2">
                    <span className="w-5 h-5 rounded-full bg-sky-100 text-sky-800 flex items-center justify-center text-[10px] font-bold">3</span>
                    <span>Kotak Key Takeaways (Snippet Optimizer)</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    Tempatkan 3 poin ringkas di bawah H1. Format ini dirancang khusus untuk memicu Google Featured Snippet (posisi 0) dan mempermudah AI Overviews menyimpulkan jawaban Celah Cahaya.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-1.5">
                  <div className="font-bold text-slate-900 flex items-center space-x-2">
                    <span className="w-5 h-5 rounded-full bg-sky-100 text-sky-800 flex items-center justify-center text-[10px] font-bold">4</span>
                    <span>Daftar Isi (Table of Contents)</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    Gunakan jump links `#heading-id`. Google menggunakan tautan ini untuk membuat navigasi "Jump to section" di SERP seluler yang meningkatkan keterlihatan artikel.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-1.5">
                  <div className="font-bold text-slate-900 flex items-center space-x-2">
                    <span className="w-5 h-5 rounded-full bg-sky-100 text-sky-800 flex items-center justify-center text-[10px] font-bold">5</span>
                    <span>Internal Linking Kontekstual (Aturan Silo)</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    Wajib menautkan minimal: (1) Artikel Pillar induk, (2) Satu artikel klaster pendukung yang relevan, dan (3) Halaman Formulir Pendaftaran online. Hindari anchor generik seperti "klik di sini".
                  </p>
                </div>

                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-1.5">
                  <div className="font-bold text-slate-900 flex items-center space-x-2">
                    <span className="w-5 h-5 rounded-full bg-sky-100 text-sky-800 flex items-center justify-center text-[10px] font-bold">6</span>
                    <span>FAQPage Schema & CTA Pendaftaran</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    Sertakan 2-4 FAQ nyata dari masyarakat Garut. Akhiri dengan kartu ajakan bertindak (CTA) yang mencantumkan tautan pendaftaran online serta tombol chat WhatsApp otomatis dengan pesan salam pembuka.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* TAB 4: KEYWORD MATRIX */}
      {activeTab === 'matrix' && (
        <section className="space-y-6">
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-2xs space-y-4">
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Matriks Target Kata Kunci Utama & Turunan (Search Volume & Intent)
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Kombinasi keyword Short-Tail bervolume tinggi, Long-Tail berniat kuat, serta Geo-targeted Garut.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-600">
                <thead className="bg-slate-100 text-slate-700 uppercase text-[10px] tracking-wider font-bold">
                  <tr>
                    <th className="p-3.5">Kata Kunci (Keyword)</th>
                    <th className="p-3.5">Search Intent</th>
                    <th className="p-3.5">Est. Volume / Bln</th>
                    <th className="p-3.5">Difficulty</th>
                    <th className="p-3.5">Target Landing Page</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {KEYWORD_STRATEGY.map((item, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/80">
                      <td className="p-3.5 font-bold text-slate-900 font-mono">
                        {item.keyword}
                      </td>
                      <td className="p-3.5">
                        <span className={`px-2 py-0.5 rounded-md font-semibold text-[10px] ${
                          item.searchIntent === 'Transactional' ? 'bg-emerald-100 text-emerald-800' :
                          item.searchIntent === 'Commercial' ? 'bg-sky-100 text-sky-800' : 'bg-blue-100 text-blue-800'
                        }`}>
                          {item.searchIntent}
                        </span>
                      </td>
                      <td className="p-3.5 font-semibold text-slate-700">
                        {item.estimatedVolume}
                      </td>
                      <td className="p-3.5">
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                          item.competition === 'Rendah' ? 'bg-emerald-50 text-emerald-700' :
                          item.competition === 'Sedang' ? 'bg-sky-50 text-[#0284C7]' : 'bg-red-50 text-red-700'
                        }`}>
                          {item.competition}
                        </span>
                      </td>
                      <td className="p-3.5 text-[#0284C7] font-medium">
                        {item.targetPage}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* TAB 5: 20+ ARTICLE ROADMAP */}
      {activeTab === 'roadmap' && (
        <section className="space-y-6">
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-2xs space-y-4">
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Daftar Ide 20+ Artikel Edukasi Berkelanjutan (Content Roadmap)
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Rencana publikasi konten terstruktur untuk mencakup seluruh topik permintaan pengguna (Kesetaraan, PKBM, Beasiswa, AI, Karier).
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-600">
                <thead className="bg-slate-100 text-slate-700 uppercase text-[10px] tracking-wider font-bold">
                  <tr>
                    <th className="p-3">No</th>
                    <th className="p-3">Judul Artikel yang Direncanakan</th>
                    <th className="p-3">Kategori</th>
                    <th className="p-3">Target Keyword</th>
                    <th className="p-3">Intent</th>
                    <th className="p-3">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {ARTICLE_IDEAS_ROADMAP.map((item) => (
                    <tr key={item.no} className="hover:bg-slate-50/80">
                      <td className="p-3 font-bold text-slate-400">{item.no}</td>
                      <td className="p-3 font-bold text-slate-900 max-w-sm">{item.title}</td>
                      <td className="p-3">
                        <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded-sm">
                          {item.category}
                        </span>
                      </td>
                      <td className="p-3 font-mono text-slate-700">{item.targetKeyword}</td>
                      <td className="p-3">{item.searchIntent}</td>
                      <td className="p-3">
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                          item.role.includes('Pillar') ? 'bg-sky-100 text-sky-900' : 'bg-slate-100 text-slate-600'
                        }`}>
                          {item.role}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* TAB 6: SCHEMA MARKUP & RICH RESULTS VALIDATOR SUITE */}
      {activeTab === 'schemas' && (
        <section className="space-y-6">
          <SchemaValidatorSuite />
        </section>
      )}

      {/* TAB 7: TECHNICAL SEO CHECKLIST, SITEMAP & WEBP OPTIMIZER */}
      {activeTab === 'technical' && (
        <section className="space-y-8">
          {/* 1. Automated Sitemap.xml & Robots.txt Crawler */}
          <SitemapCrawlerSection />

          {/* 2. WebP Image Optimization & Core Web Vitals (LCP) */}
          <ImageOptimizerSection />

          {/* 3. Header Card & Interactive Checklist Progress */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-2xs space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-6">
              <div>
                <div className="flex items-center space-x-2 text-[#0284C7] font-bold text-xs uppercase tracking-wider">
                  <Zap className="w-4 h-4" />
                  <span>Audit Mutu & Standar Produksi Web</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                  Daftar Periksa (Checklist) SEO Technical Halaman Baru
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Prosedur kendali mutu wajib bagi tim editorial & webmaster sebelum mempublikasikan halaman atau artikel baru di <strong>celahcahaya.sch.id</strong>.
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <button
                  onClick={() => copyToClipboard(`# Checklist SEO Technical Halaman Baru - PKBM Celah Cahaya Garut

## 1. Core Web Vitals (Kecepatan & UX)
- [ ] LCP < 2.5 Detik: Format WebP/AVIF, preload hero image, tanpa lazy load above-the-fold
- [ ] INP < 200 ms: Tidak ada long-tasks JS > 50ms, defer script non-esensial
- [ ] CLS < 0.1: Atribut width & height eksplisit pada semua <img> dan <iframe>
- [ ] Font Optimization: Gunakan font-display: swap dan preconnect fonts.googleapis.com

## 2. Semantic HTML & Struktur Konten
- [ ] Tepat 1 H1 per halaman memuat primary keyword
- [ ] Hierarki heading runtut H1 -> H2 -> H3 tanpa melompati level
- [ ] Markup semantik: <header>, <nav>, <main>, <article>, <aside>, <footer>
- [ ] 100% gambar memiliki atribut alt deskriptif & memuat konteks
- [ ] Tautan semantik <a> dengan anchor text deskriptif, bukan "klik di sini"

## 3. Optimalisasi Indeksasi & Google Search Console
- [ ] Self-referencing canonical tag terpasang (<link rel="canonical" href="..." />)
- [ ] Meta robots: index, follow, max-image-preview:large, max-snippet:-1
- [ ] URL baru otomatis tercatat di sitemap.xml dengan format <lastmod> ISO 8601
- [ ] URL slug bersih kebab-case, ringkas, tanpa stop words / parameter tracking
- [ ] Mobile-friendly viewport tag terpasang, touch target min 44x44px
- [ ] Status response server 200 OK langsung tanpa redirect chain

## 4. Metadata & Schema.org (Rich Results & E-E-A-T)
- [ ] Meta title 50-60 karakter (front-loaded keyword) & description 150-160 karakter
- [ ] Schema.org JSON-LD (Article, BreadcrumbList, FAQPage) valid di Rich Results Test
- [ ] Author box lengkap dengan foto, nama, gelar, dan bio pengajar E-E-A-T
- [ ] Open Graph & Twitter Card tags valid untuk preview WhatsApp/FB/X
`, 'checklist-md')}
                  className="inline-flex items-center space-x-1.5 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition-all shadow-xs"
                >
                  {copiedSection === 'checklist-md' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedSection === 'checklist-md' ? 'Checklist Tersalin!' : 'Salin Format Markdown'}</span>
                </button>
              </div>
            </div>

            {/* Live Progress Bar */}
            <div className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200/80 space-y-2">
              <div className="flex justify-between items-center text-xs font-bold">
                <span className="text-slate-800">
                  Status Kesiapan Publikasi ({totalChecked} dari {totalChecklistItems} Kriteria Terpenuhi)
                </span>
                <span className={progressPercent === 100 ? 'text-emerald-700 font-extrabold' : 'text-[#0284C7] font-extrabold'}>
                  {progressPercent}% Siap Indexing
                </span>
              </div>
              <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
                <div 
                  className={`h-full transition-all duration-500 rounded-full ${
                    progressPercent === 100 
                      ? 'bg-emerald-600' 
                      : progressPercent > 50 
                        ? 'bg-sky-500' 
                        : 'bg-rose-500'
                  }`}
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
              <p className="text-[11px] text-slate-500">
                Klik kotak centang di bawah untuk menandai verifikasi sebelum URL didaftarkan ke Google Search Console.
              </p>
            </div>

            {/* Checklist Groups */}
            <div className="space-y-6">
              {TECHNICAL_CHECKLIST.map((group, gIdx) => {
                const GroupIcon = group.icon;
                return (
                  <div key={gIdx} className="border border-slate-200 rounded-2xl overflow-hidden shadow-2xs">
                    <div className="bg-slate-50/80 px-4 py-3 border-b border-slate-200 flex items-center justify-between">
                      <div className="flex items-center space-x-2 font-bold text-slate-900 text-xs sm:text-sm">
                        <GroupIcon className="w-4 h-4 text-[#0284C7]" />
                        <span>{group.category}</span>
                      </div>
                      <span className="text-[10px] bg-slate-200 text-slate-700 px-2 py-0.5 rounded-full font-bold">
                        {group.items.filter(i => checkedItems[i.id]).length} / {group.items.length} Lolos
                      </span>
                    </div>

                    <div className="divide-y divide-slate-100">
                      {group.items.map((item) => {
                        const isChecked = !!checkedItems[item.id];
                        return (
                          <div 
                            key={item.id} 
                            onClick={() => toggleCheckItem(item.id)}
                            className={`p-4 transition-colors flex items-start gap-3.5 cursor-pointer select-none ${
                              isChecked ? 'bg-white hover:bg-slate-50/70' : 'bg-sky-50/20 hover:bg-sky-50/40'
                            }`}
                          >
                            <button
                              type="button"
                              className={`mt-0.5 w-5 h-5 rounded-md flex items-center justify-center border transition-all shrink-0 ${
                                isChecked 
                                  ? 'bg-emerald-600 border-emerald-600 text-white shadow-2xs' 
                                  : 'border-slate-300 bg-white text-transparent hover:border-amber-500'
                              }`}
                            >
                              <Check className="w-3.5 h-3.5 stroke-[3]" />
                            </button>

                            <div className="space-y-1 flex-1 text-xs">
                              <div className="flex flex-wrap items-center gap-2">
                                <span className={`font-bold ${isChecked ? 'text-slate-900' : 'text-amber-950 font-black'}`}>
                                  {item.name}
                                </span>
                                <span className="text-[10px] font-mono px-2 py-0.5 bg-slate-100 text-slate-700 rounded-md">
                                  Standar: {item.standard}
                                </span>
                              </div>

                              <p className="text-slate-600 leading-relaxed text-[11px]">
                                <strong className="text-slate-700">Tindakan Wajib:</strong> {item.action}
                              </p>

                              <div className="text-[10px] text-slate-500 flex items-center gap-1 font-mono">
                                <span className="text-[#0284C7] font-bold">Alat Penguji:</span> {item.howToTest}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Technical Files Card */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-2xs space-y-4">
            <div>
              <div className="flex items-center space-x-2 text-[#0284C7] font-bold text-xs uppercase tracking-wider">
                <FileCode className="w-4 h-4" />
                <span>Arsitektur Berkas Statis</span>
              </div>
              <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 mt-1">
                Berkas Teknis Mesin Pencari (Technical SEO Artifacts)
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Konfigurasi public/robots.txt, sitemap.xml, rss.xml, dan manifest.json aktif di domain <strong>celahcahaya.sch.id</strong>.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2 flex flex-col justify-between">
                <div className="space-y-1">
                  <div className="font-bold text-slate-900">1. public/robots.txt</div>
                  <p className="text-slate-600 text-[11px]">Memberi izin perayapan Googlebot, mengarahkan ke sitemap.xml resmi.</p>
                </div>
                <a 
                  href="/robots.txt" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center space-x-1 text-[#0284C7] hover:text-sky-800 font-bold text-[11px]"
                >
                  <span>Lihat Dokumen</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2 flex flex-col justify-between">
                <div className="space-y-1">
                  <div className="font-bold text-slate-900">2. public/sitemap.xml</div>
                  <p className="text-slate-600 text-[11px]">Indeks XML berhierarki dengan priority & changefreq untuk seluruh URL.</p>
                </div>
                <a 
                  href="/sitemap.xml" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center space-x-1 text-[#0284C7] hover:text-sky-800 font-bold text-[11px]"
                >
                  <span>Lihat Dokumen</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2 flex flex-col justify-between">
                <div className="space-y-1">
                  <div className="font-bold text-slate-900">3. public/rss.xml</div>
                  <p className="text-slate-600 text-[11px]">Sindikasi artikel berkala untuk Google News & pembaca RSS agregator.</p>
                </div>
                <a 
                  href="/rss.xml" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center space-x-1 text-[#0284C7] hover:text-sky-800 font-bold text-[11px]"
                >
                  <span>Lihat Dokumen</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2 flex flex-col justify-between">
                <div className="space-y-1">
                  <div className="font-bold text-slate-900">4. public/manifest.json</div>
                  <p className="text-slate-600 text-[11px]">Dukungan PWA & web installable untuk optimalisasi mobile first indexing.</p>
                </div>
                <a 
                  href="/manifest.json" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center space-x-1 text-[#0284C7] hover:text-sky-800 font-bold text-[11px]"
                >
                  <span>Lihat Dokumen</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
