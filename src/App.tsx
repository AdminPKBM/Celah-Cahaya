import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppFloating } from './components/WhatsAppFloating';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProgramsPage } from './pages/ProgramsPage';
import { ProgramDetailPage } from './pages/ProgramDetailPage';
import { ArticlesPage } from './pages/ArticlesPage';
import { ArticleDetailPage } from './pages/ArticleDetailPage';
import { PanduanPage } from './pages/PanduanPage';
import { BeasiswaPage } from './pages/BeasiswaPage';
import { KegiatanPage } from './pages/KegiatanPage';
import { PendaftaranPage } from './pages/PendaftaranPage';
import { FAQPage } from './pages/FAQPage';
import { KontakPage } from './pages/KontakPage';
import { SitemapPage } from './pages/SitemapPage';
import { AdminCMSPage } from './pages/AdminCMSPage';
import { SEOStrategyPage } from './pages/SEOStrategyPage';
import { HeaderBanner } from './components/HeaderBanner';
import { BreadcrumbSchema } from './components/BreadcrumbSchema';
import { useSchemaValidator } from './hooks/useSchemaValidator';
import { updateMetaTags } from './utils/seo';

export default function App() {
  // Initialize currentPath from browser location or default to '/'
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined' && window.location.pathname) {
      return window.location.pathname === '' ? '/' : window.location.pathname;
    }
    return '/';
  });

  // Automated Schema.org Structured Data GSC Validator Hook
  useSchemaValidator({ currentPath, enabled: true, logToConsole: true });

  const [searchQueryParam, setSearchQueryParam] = useState<string>('');

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname || '/';
      setCurrentPath(path);
      const urlParams = new URLSearchParams(window.location.search);
      setSearchQueryParam(urlParams.get('search') || '');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Navigation handler
  const handleNavigate = (path: string) => {
    let cleanPath = path;
    let query = '';

    if (path.includes('?')) {
      const [p, q] = path.split('?');
      cleanPath = p;
      const urlParams = new URLSearchParams(q);
      query = urlParams.get('search') || '';
    }

    setSearchQueryParam(query);
    setCurrentPath(cleanPath);

    if (typeof window !== 'undefined' && window.history) {
      window.history.pushState({}, '', path);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Synchronize SEO Meta Tags based on active route
  useEffect(() => {
    if (currentPath === '/' || currentPath === '') {
      updateMetaTags({
        title: 'Celah Cahaya - PKBM & Pendidikan Kesetaraan Paket A, B, C di Garut',
        description: 'Website resmi PKBM Celah Cahaya (celahcahaya.sch.id). Layanan pendidikan kesetaraan Paket A, B, C resmi, ijazah negara, biaya terjangkau, dan beasiswa KIP di Garut.',
        canonicalPath: '/'
      });
    } else if (currentPath === '/tentang') {
      updateMetaTags({
        title: 'Tentang Kami & Legalitas Resmi | PKBM Celah Cahaya Garut',
        description: 'Profil lengkap PKBM Celah Cahaya, visi misi, izin operasional, akreditasi B BAN PNF, dan dedikasi pengajar di Kabupaten Garut.',
        canonicalPath: '/tentang'
      });
    } else if (currentPath === '/program') {
      updateMetaTags({
        title: 'Program Pendidikan Kesetaraan Paket A, B, C & Vokasi AI | Celah Cahaya',
        description: 'Pilihan jenjang kesetaraan Paket A (SD), Paket B (SMP), Paket C (SMA), dan kursus keahlian digital AI di PKBM Celah Cahaya Garut.',
        canonicalPath: '/program'
      });
    } else if (currentPath === '/artikel') {
      updateMetaTags({
        title: 'Artikel & Panduan Edukasi Kesetaraan | Celah Cahaya',
        description: 'Kumpulan artikel, tips lulus ujian kesetaraan, panduan masuk kuliah UTBK, beasiswa, dan inovasi AI untuk pendidikan.',
        canonicalPath: '/artikel'
      });
    } else if (currentPath === '/panduan') {
      updateMetaTags({
        title: 'Pusat Panduan & Tutorial Pendidikan Kesetaraan | Celah Cahaya',
        description: 'Panduan lengkap langkah demi langkah pendaftaran Paket C, kuliah di PTN, dan pemanfaatan AI untuk belajar mandiri.',
        canonicalPath: '/panduan'
      });
    } else if (currentPath === '/beasiswa') {
      updateMetaTags({
        title: 'Informasi Beasiswa KIP & Bantuan Pendidikan Kesetaraan | Celah Cahaya',
        description: 'Peluang bantuan biaya pendidikan gratis melalui beasiswa Program Indonesia Pintar (KIP) dan afirmasi dhuafa di Celah Cahaya.',
        canonicalPath: '/beasiswa'
      });
    } else if (currentPath === '/kegiatan') {
      updateMetaTags({
        title: 'Dokumentasi Kegiatan & Ujian Kesetaraan | Celah Cahaya Garut',
        description: 'Galeri foto dan berita aktivitas pembelajaran, gladi ANBK, workshop vokasi AI, dan wisuda alumni Celah Cahaya.',
        canonicalPath: '/kegiatan'
      });
    } else if (currentPath === '/pendaftaran') {
      updateMetaTags({
        title: 'Pendaftaran Warga Belajar Baru | PKBM Celah Cahaya Garut',
        description: 'Formulir pendaftaran online tahun ajaran baru Paket A, Paket B, dan Paket C. Proses cepat, mudah, dan resmi Dapodik.',
        canonicalPath: '/pendaftaran'
      });
    } else if (currentPath === '/faq') {
      updateMetaTags({
        title: 'Tanya Jawab (FAQ) Pendidikan Kesetaraan | Celah Cahaya',
        description: 'Jawaban atas pertanyaan yang sering diajukan mengenai keabsahan ijazah, kuliah di PTN, biaya, dan jadwal belajar.',
        canonicalPath: '/faq'
      });
    } else if (currentPath === '/kontak') {
      updateMetaTags({
        title: 'Kontak & Lokasi Lembaga | PKBM Celah Cahaya Garut',
        description: 'Alamat sekretariat Kp. Sukawangi, Desa Sukawangi, Kecamatan Singajaya, Kabupaten Garut, nomor telepon, WhatsApp konsultasi, dan panduan rute transportasi.',
        canonicalPath: '/kontak'
      });
    } else if (currentPath === '/sitemap') {
      updateMetaTags({
        title: 'Peta Situs (HTML Sitemap) | Celah Cahaya',
        description: 'Daftar navigasi hierarkis seluruh halaman dan materi informasi pada situs resmi celahcahaya.sch.id.',
        canonicalPath: '/sitemap'
      });
    } else if (currentPath === '/admin-cms') {
      updateMetaTags({
        title: 'CMS & Manajemen SEO | Celah Cahaya',
        description: 'Dasbor pengelola artikel, kata kunci, dan skor optimasi On-Page SEO Celah Cahaya.',
        canonicalPath: '/admin-cms'
      });
    } else if (currentPath === '/seo-strategi') {
      updateMetaTags({
        title: 'Strategi SEO & Klaster Topik | Celah Cahaya',
        description: 'Peta jalan kata kunci, topic cluster, matriks pencarian, dan structured data celahcahaya.sch.id.',
        canonicalPath: '/seo-strategi'
      });
    }
  }, [currentPath]);

  // Route Dispatcher
  const renderCurrentPage = () => {
    // 1. Single Article route: /artikel/:slug
    if (currentPath.startsWith('/artikel/')) {
      const slug = currentPath.replace('/artikel/', '');
      return <ArticleDetailPage slug={slug} onNavigate={handleNavigate} />;
    }

    // 2. Single Program route: /program/:slug
    if (currentPath.startsWith('/program/')) {
      const slug = currentPath.replace('/program/', '');
      return <ProgramDetailPage slug={slug} onNavigate={handleNavigate} />;
    }

    // 3. Static routes
    switch (currentPath) {
      case '/tentang':
        return <AboutPage onNavigate={handleNavigate} />;
      case '/program':
        return <ProgramsPage onNavigate={handleNavigate} />;
      case '/artikel':
        return <ArticlesPage onNavigate={handleNavigate} initialSearch={searchQueryParam} />;
      case '/panduan':
        return <PanduanPage onNavigate={handleNavigate} />;
      case '/beasiswa':
        return <BeasiswaPage onNavigate={handleNavigate} />;
      case '/kegiatan':
        return <KegiatanPage onNavigate={handleNavigate} />;
      case '/pendaftaran':
        return <PendaftaranPage onNavigate={handleNavigate} />;
      case '/faq':
        return <FAQPage onNavigate={handleNavigate} />;
      case '/kontak':
        return <KontakPage onNavigate={handleNavigate} />;
      case '/sitemap':
        return <SitemapPage onNavigate={handleNavigate} />;
      case '/admin':
      case '/login':
      case '/admin-cms':
        return <AdminCMSPage onNavigate={handleNavigate} />;
      case '/seo-strategy':
      case '/seo-strategi':
        return <SEOStrategyPage onNavigate={handleNavigate} />;
      case '/':
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-amber-100 selection:text-amber-900">
      {/* Global Dynamic Schema.org BreadcrumbList for Google Search Console */}
      <BreadcrumbSchema currentPath={currentPath} />

      {/* Primary Accessible Skip Link */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:p-3 focus:bg-amber-600 focus:text-white focus:rounded-xl focus:shadow-lg focus:outline-hidden"
      >
        Lewati ke Konten Utama
      </a>

      {/* Official Institution Header Banner (Komunitas Ngejah & PKBM Celah Cahaya) */}
      <HeaderBanner onNavigate={handleNavigate} />

      {/* Global Responsive Sticky Navigation */}
      <Navbar currentPath={currentPath} onNavigate={handleNavigate} />

      {/* Main Content View Container */}
      <main id="main-content" className="flex-1">
        {renderCurrentPage()}
      </main>

      {/* Global Comprehensive SEO Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating Fast Consultation WhatsApp Action */}
      <WhatsAppFloating />
    </div>
  );
}
