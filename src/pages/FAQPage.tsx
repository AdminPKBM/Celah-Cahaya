import React, { useState, useMemo } from 'react';
import { GENERAL_FAQS } from '../data/mockData';
import { Breadcrumb } from '../components/Breadcrumb';
import { HelpCircle, Search, ChevronDown, ChevronUp } from 'lucide-react';

interface FAQPageProps {
  onNavigate: (path: string) => void;
}

export const FAQPage: React.FC<FAQPageProps> = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState<string>('Semua');
  const [searchQuery, setSearchQuery] = useState('');
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    'faq-1': true,
    'faq-2': true
  });

  const categories = ['Semua', 'Legalitas & Ijazah', 'Paket C & Kuliah', 'Biaya & Pendaftaran', 'Metode Belajar', 'Umum'];

  const filteredFaqs = useMemo(() => {
    return GENERAL_FAQS.filter(faq => {
      const matchCat = activeCategory === 'Semua' || faq.category === activeCategory;
      const matchQuery = searchQuery.trim() === '' ||
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchQuery;
    });
  }, [activeCategory, searchQuery]);

  const toggleAccordion = (id: string) => {
    setOpenIds(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <Breadcrumb
        items={[{ name: 'FAQ (Tanya Jawab)' }]}
        onNavigate={onNavigate}
      />

      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center space-x-2 bg-sky-50 text-sky-800 text-xs font-semibold px-3 py-1 rounded-full border border-sky-200">
          <HelpCircle className="w-3.5 h-3.5 text-[#0284C7]" />
          <span>Pusat Tanya Jawab Resmi</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Pertanyaan yang Sering Diajukan (FAQ)
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Temukan jawaban cepat dan akurat seputar legalitas ijazah, perkuliahan di PTN, biaya, jadwal belajar, dan prosedur pendaftaran di PKBM Celah Cahaya.
        </p>
      </div>

      {/* Search & Category Filter */}
      <div className="space-y-4">
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari pertanyaan (misal: kuliah, biaya, ujian, usia)..."
            className="w-full px-4 py-3 pl-11 text-xs sm:text-sm bg-white border border-slate-200 rounded-2xl shadow-2xs focus:ring-2 focus:ring-[#0284C7]"
          />
          <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-3.5" />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                activeCategory === cat
                  ? 'bg-[#0284C7] text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* FAQs List */}
      <div className="space-y-4">
        {filteredFaqs.map((faq) => {
          const isOpen = !!openIds[faq.id];
          return (
            <div
              key={faq.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs transition-all"
            >
              <button
                onClick={() => toggleAccordion(faq.id)}
                className="w-full p-5 text-left flex justify-between items-center space-x-4 hover:bg-slate-50 transition-colors"
              >
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-[#0284C7] uppercase tracking-wider">
                    {faq.category}
                  </span>
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base leading-snug">
                    {faq.question}
                  </h3>
                </div>
                <div className="text-slate-400 shrink-0">
                  {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </div>
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Still Have Questions? */}
      <div className="bg-sky-50 rounded-3xl p-6 sm:p-8 border border-sky-200 text-center space-y-3">
        <h3 className="font-bold text-slate-900 text-base sm:text-lg">
          Punya Pertanyaan Lain yang Belum Terjawab?
        </h3>
        <p className="text-xs text-slate-600 max-w-md mx-auto">
          Tutor konseling kami siap menjawab seluruh pertanyaan Anda seputar proses belajar di Celah Cahaya.
        </p>
        <button
          onClick={() => onNavigate('/kontak')}
          className="px-6 py-2.5 bg-[#0284C7] hover:bg-[#0369A1] text-white font-bold text-xs rounded-xl transition-all shadow-xs"
        >
          Hubungi Layanan Konsultasi
        </button>
      </div>
    </div>
  );
};
