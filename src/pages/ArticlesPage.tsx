import React, { useState, useMemo } from 'react';
import { INITIAL_ARTICLES } from '../data/mockData';
import { ArticleCard } from '../components/ArticleCard';
import { Breadcrumb } from '../components/Breadcrumb';
import { Search, Filter, BookOpen, Star, Sparkles } from 'lucide-react';
import { ArticleCategory } from '../types';

interface ArticlesPageProps {
  onNavigate: (path: string) => void;
  initialSearch?: string;
}

const CATEGORIES: ('Semua' | ArticleCategory)[] = [
  'Semua',
  'Pendidikan Kesetaraan',
  'Kurikulum & Modul',
  'Ujian & Rapor',
  'Regulasi & Administrasi',
  'Isu Pendidikan & Inklusi',
  'Panduan & Tutorial',
  'Info Beasiswa',
  'Teknologi & AI',
  'Karier & Vokasi'
];

export const ArticlesPage: React.FC<ArticlesPageProps> = ({ onNavigate, initialSearch = '' }) => {
  const [selectedCategory, setSelectedCategory] = useState<'Semua' | ArticleCategory>('Semua');
  const [searchQuery, setSearchQuery] = useState(initialSearch);

  const filteredArticles = useMemo(() => {
    return INITIAL_ARTICLES.filter((article) => {
      const matchCategory = selectedCategory === 'Semua' || article.category === selectedCategory;
      const matchSearch = searchQuery.trim() === '' || 
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.primaryKeyword.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  const pillarArticle = INITIAL_ARTICLES.find(a => a.isPillar) || INITIAL_ARTICLES[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <Breadcrumb
        items={[{ name: 'Artikel & Panduan Edukasi' }]}
        onNavigate={onNavigate}
      />

      {/* Hero Header */}
      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center space-x-2 bg-sky-50 text-sky-800 text-xs font-semibold px-3 py-1 rounded-full border border-sky-200">
          <BookOpen className="w-3.5 h-3.5 text-[#0284C7]" />
          <span>Topical Authority & Edukasi Nonformal</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Artikel, Panduan & Wawasan Pendidikan Kesetaraan
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Sumber rujukan terpercaya dan terverifikasi mengenai Paket A, B, C, prosedur masuk perguruan tinggi, panduan beasiswa, serta integrasi teknologi AI untuk pendidikan mandiri.
        </p>
      </div>

      {/* Search & Category Filter Controls */}
      <div className="space-y-4 bg-white p-4 sm:p-6 rounded-3xl border border-slate-200 shadow-2xs">
        {/* Search input */}
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari artikel berdasarkan kata kunci (contoh: Paket C, kuliah, syarat, AI)..."
            className="w-full px-4 py-3 pl-11 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#0284C7] focus:bg-white transition-all"
          />
          <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-3.5" />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-3 text-xs text-slate-400 hover:text-slate-600 font-medium"
            >
              Reset
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-[#0284C7] text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Pillar Article Highlight (Shown if no active search filter) */}
      {!searchQuery && selectedCategory === 'Semua' && (
        <section className="space-y-3">
          <div className="flex items-center space-x-2 text-xs font-bold text-[#0284C7] uppercase tracking-wider">
            <Star className="w-4 h-4 fill-[#0284C7] text-[#0284C7]" />
            <span>Pillar Content Rekomendasi Utama</span>
          </div>
          <ArticleCard 
            article={pillarArticle} 
            onRead={(slug) => onNavigate(`/artikel/${slug}`)}
            featured={true}
          />
        </section>
      )}

      {/* Articles Grid */}
      <section className="space-y-6">
        <div className="flex justify-between items-center text-xs text-slate-500">
          <span>Menampilkan {filteredArticles.length} artikel</span>
          {searchQuery && (
            <span>Hasil pencarian: "<strong>{searchQuery}</strong>"</span>
          )}
        </div>

        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((art) => (
              <ArticleCard
                key={art.id}
                article={art}
                onRead={(slug) => onNavigate(`/artikel/${slug}`)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-slate-50 rounded-3xl border border-dashed border-slate-300 space-y-3">
            <p className="text-sm font-semibold text-slate-700">Tidak ada artikel yang sesuai dengan pencarian Anda.</p>
            <p className="text-xs text-slate-500">Coba kata kunci lain atau pilih kategori "Semua".</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('Semua');
              }}
              className="px-4 py-2 bg-[#0284C7] text-white rounded-xl text-xs font-bold"
            >
              Reset Filter
            </button>
          </div>
        )}
      </section>
    </div>
  );
};
