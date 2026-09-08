import React from 'react';
import { PROGRAMS_DATA } from '../data/mockData';
import { Breadcrumb } from '../components/Breadcrumb';
import { CheckCircle2, ChevronRight, Clock, Award, BookOpen } from 'lucide-react';
import { OptimizedImage } from '../components/OptimizedImage';

interface ProgramsPageProps {
  onNavigate: (path: string) => void;
}

export const ProgramsPage: React.FC<ProgramsPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <Breadcrumb 
        items={[{ name: 'Program Pendidikan Kesetaraan' }]} 
        onNavigate={onNavigate} 
      />

      {/* Header */}
      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center space-x-2 bg-sky-50 text-sky-800 text-xs font-semibold px-3 py-1 rounded-full border border-sky-200">
          <BookOpen className="w-3.5 h-3.5 text-[#0284C7]" />
          <span>Kurikulum Merdeka & Kesetaraan Resmi</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Program Pendidikan Kesetaraan & Vokasi
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Pilihan jenjang Paket A (Setara SD), Paket B (Setara SMP), Paket C (Setara SMA), serta kursus vokasi teknologi digital dan AI. Seluruh program diakui legal oleh Kemendikbudristek RI dan berhak menerima Ijazah Negara.
        </p>
      </div>

      {/* Programs List Detailed */}
      <div className="space-y-8">
        {PROGRAMS_DATA.map((prog, index) => (
          <div
            key={prog.id}
            className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-8 items-center"
          >
            {/* Image & Badge */}
            <div 
              onClick={() => {
                onNavigate(`/program/${prog.slug}`);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="lg:col-span-4 h-56 sm:h-64 lg:h-72 w-full rounded-2xl overflow-hidden relative group cursor-pointer bg-stone-100"
            >
              <OptimizedImage 
                src={prog.image} 
                alt={prog.name} 
                width={600}
                height={375}
                aspectRatio="16/10"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 bg-slate-900/90 text-amber-400 text-xs font-bold px-3 py-1 rounded-md shadow-xs z-10">
                {prog.badge}
              </span>
            </div>

            {/* Content Details */}
            <div className="lg:col-span-8 space-y-4">
              <div>
                <span className="text-xs font-bold text-[#0284C7] uppercase tracking-wider">
                  {prog.level}
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                  <button
                    onClick={() => {
                      onNavigate(`/program/${prog.slug}`);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-left hover:text-[#0284C7] transition-colors cursor-pointer"
                  >
                    {prog.name}
                  </button>
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {prog.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                <div>
                  <span className="font-bold text-slate-900">Durasi Studi:</span> {prog.duration}
                </div>
                <div>
                  <span className="font-bold text-slate-900">Biaya:</span> {prog.tuitionFee}
                </div>
                <div className="sm:col-span-2">
                  <span className="font-bold text-slate-900">Metode Belajar:</span> {prog.learningMethod}
                </div>
              </div>

              {/* Requirements sample */}
              <div>
                <div className="text-xs font-bold text-slate-900 mb-2">Beberapa Keunggulan Program:</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {prog.benefits.slice(0, 4).map((benefit, i) => (
                    <div key={i} className="flex items-start space-x-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="pt-3 flex flex-wrap gap-3">
                <button
                  onClick={() => onNavigate(`/program/${prog.slug}`)}
                  className="px-5 py-2.5 bg-[#0284C7] hover:bg-[#0369A1] text-white font-bold text-xs rounded-xl transition-all shadow-xs cursor-pointer"
                >
                  Detail Kurikulum & Syarat
                </button>
                <button
                  onClick={() => onNavigate('/pendaftaran')}
                  className="px-5 py-2.5 bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 font-semibold text-xs rounded-xl transition-all cursor-pointer"
                >
                  Daftar Program Ini
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
