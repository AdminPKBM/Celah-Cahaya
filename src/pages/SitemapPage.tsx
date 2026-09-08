import React from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { INITIAL_ARTICLES, PROGRAMS_DATA } from '../data/mockData';
import { FileCode, Globe, BookOpen, GraduationCap, Link2, ExternalLink } from 'lucide-react';

interface SitemapPageProps {
  onNavigate: (path: string) => void;
}

export const SitemapPage: React.FC<SitemapPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <Breadcrumb
        items={[{ name: 'Peta Situs (HTML Sitemap)' }]}
        onNavigate={onNavigate}
      />

      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center space-x-2 bg-sky-50 text-sky-800 text-xs font-semibold px-3 py-1 rounded-full border border-sky-200">
          <Globe className="w-3.5 h-3.5 text-[#0284C7]" />
          <span>Struktur Arsitektur Web</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Peta Situs Lengkap (HTML Sitemap)
        </h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          Struktur navigasi menyeluruh seluruh halaman, materi panduan, dan file konfigurasi SEO teknis pada domain <strong>https://www.celahcahaya.sch.id</strong>.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Kolom 1: Halaman Pokok & Program */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-2xs space-y-4">
            <h2 className="font-bold text-slate-900 text-base flex items-center">
              <GraduationCap className="w-4 h-4 text-[#0284C7] mr-2" />
              <span>Halaman Utama & Profil</span>
            </h2>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
              <li>
                <button onClick={() => onNavigate('/')} className="hover:text-[#0284C7] transition-colors">
                  • Beranda (Home)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/tentang')} className="hover:text-[#0284C7] transition-colors">
                  • Tentang Celah Cahaya (Profil & Legalitas)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/panduan')} className="hover:text-[#0284C7] transition-colors">
                  • Pusat Panduan & Tutorial
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/pendaftaran')} className="hover:text-[#0284C7] transition-colors">
                  • Formulir Pendaftaran Siswa Baru
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/beasiswa')} className="hover:text-[#0284C7] transition-colors">
                  • Informasi Beasiswa KIP & Bantuan Belajar
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/kegiatan')} className="hover:text-[#0284C7] transition-colors">
                  • Galeri & Dokumentasi Kegiatan
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/faq')} className="hover:text-[#0284C7] transition-colors">
                  • Tanya Jawab Lengkap (FAQ)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/kontak')} className="hover:text-[#0284C7] transition-colors">
                  • Kontak & Peta Lokasi Garut
                </button>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-2xs space-y-4">
            <h2 className="font-bold text-slate-900 text-base flex items-center">
              <BookOpen className="w-4 h-4 text-[#0284C7] mr-2" />
              <span>Program Kesetaraan & Vokasi</span>
            </h2>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
              <li>
                <button onClick={() => onNavigate('/program')} className="hover:text-[#0284C7] font-semibold transition-colors">
                  • Indeks Semua Program
                </button>
              </li>
              {PROGRAMS_DATA.map((prog) => (
                <li key={prog.id} className="pl-3">
                  <button onClick={() => onNavigate(`/program/${prog.slug}`)} className="hover:text-[#0284C7] transition-colors">
                    - {prog.name} ({prog.level})
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Kolom 2: Direktori Artikel & File Teknis */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-2xs space-y-4">
            <h2 className="font-bold text-slate-900 text-base flex items-center">
              <Link2 className="w-4 h-4 text-[#0284C7] mr-2" />
              <span>Daftar Artikel & Panduan Edukasi</span>
            </h2>
            <ul className="space-y-2 text-xs text-slate-600">
              <li>
                <button onClick={() => onNavigate('/artikel')} className="hover:text-[#0284C7] font-bold transition-colors">
                  • Indeks Seluruh Artikel
                </button>
              </li>
              {INITIAL_ARTICLES.map((art) => (
                <li key={art.id} className="pl-3 leading-snug">
                  <button onClick={() => onNavigate(`/artikel/${art.slug}`)} className="text-left hover:text-[#0284C7] transition-colors">
                    - {art.title} {art.isPillar && <span className="text-[10px] font-bold text-[#0284C7]">[Pillar]</span>}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 space-y-4">
            <h2 className="font-bold text-slate-900 text-base flex items-center">
              <FileCode className="w-4 h-4 text-[#0284C7] mr-2" />
              <span>File Teknis Mesin Pencari (Search Engines)</span>
            </h2>
            <div className="space-y-2 text-xs text-slate-700">
              <div className="flex items-center justify-between p-2.5 bg-white rounded-xl border border-slate-200">
                <span>XML Sitemap (Sitemap Index)</span>
                <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="font-bold text-[#0284C7] hover:text-[#0369a1] flex items-center">
                  <span>/sitemap.xml</span>
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </div>
              <div className="flex items-center justify-between p-2.5 bg-white rounded-xl border border-slate-200">
                <span>Robots.txt Crawl Directives</span>
                <a href="/robots.txt" target="_blank" rel="noopener noreferrer" className="font-bold text-[#0284C7] hover:text-[#0369a1] flex items-center">
                  <span>/robots.txt</span>
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </div>
              <div className="flex items-center justify-between p-2.5 bg-white rounded-xl border border-slate-200">
                <span>RSS 2.0 Feed</span>
                <a href="/rss.xml" target="_blank" rel="noopener noreferrer" className="font-bold text-[#0284C7] hover:text-[#0369a1] flex items-center">
                  <span>/rss.xml</span>
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
