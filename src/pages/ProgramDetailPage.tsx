import React, { useEffect } from 'react';
import { PROGRAMS_DATA, INSTITUTION_INFO } from '../data/mockData';
import { Breadcrumb } from '../components/Breadcrumb';
import { OptimizedImage } from '../components/OptimizedImage';
import { 
  CheckCircle2, Clock, Award, ShieldCheck, ArrowRight, 
  HelpCircle, GraduationCap, Phone, FileCheck
} from 'lucide-react';
import { updateMetaTags } from '../utils/seo';

interface ProgramDetailPageProps {
  slug: string;
  onNavigate: (path: string) => void;
}

export const ProgramDetailPage: React.FC<ProgramDetailPageProps> = ({ slug, onNavigate }) => {
  const program = PROGRAMS_DATA.find((p) => p.slug === slug) || PROGRAMS_DATA[2]; // Default to Paket C if not found

  useEffect(() => {
    const courseSchema = {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": program.name,
      "description": program.description,
      "provider": {
        "@type": "EducationalOrganization",
        "name": INSTITUTION_INFO.name,
        "sameAs": INSTITUTION_INFO.domain
      },
      "educationalCredentialAwarded": `Ijazah Resmi ${program.level}`,
      "hasCourseInstance": {
        "@type": "CourseInstance",
        "courseMode": "blended",
        "courseWorkload": "Fleksibel"
      },
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "IDR",
        "category": program.tuitionFee
      }
    };

    updateMetaTags({
      title: `${program.name} | PKBM Celah Cahaya Garut`,
      description: program.description,
      canonicalPath: `/program/${program.slug}`,
      keywords: [program.name, program.level, 'PKBM Garut', 'pendidikan kesetaraan'],
      schemas: [courseSchema]
    });
  }, [program]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <Breadcrumb
        items={[
          { name: 'Program', path: '/program' },
          { name: program.name }
        ]}
        onNavigate={onNavigate}
      />

      {/* Program Header */}
      <section className="bg-[#0B192C] text-white rounded-3xl p-6 sm:p-10 relative overflow-hidden shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center space-x-2 bg-sky-500/20 text-sky-300 text-xs font-bold px-3 py-1 rounded-full border border-sky-500/30">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{program.level} • {program.badge}</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              {program.name}
            </h1>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl font-normal">
              {program.description}
            </p>

            <div className="flex flex-wrap gap-4 pt-3 text-xs text-slate-300">
              <div className="flex items-center space-x-1.5">
                <Clock className="w-4 h-4 text-sky-300" />
                <span>Durasi: {program.duration}</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <Award className="w-4 h-4 text-sky-300" />
                <span>Legalitas: Ijazah Negara Resmi</span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={() => onNavigate('/pendaftaran')}
                className="px-6 py-3 bg-[#0284C7] hover:bg-[#0369A1] text-white font-bold rounded-xl text-xs sm:text-sm transition-all shadow-md"
              >
                Daftar {program.name} Sekarang
              </button>
              <a
                href={`https://wa.me/${INSTITUTION_INFO.whatsapp}?text=Halo%20Admin%20Celah%20Cahaya,%20saya%20ingin%20konsultasi%20mengenai%20${encodeURIComponent(program.name)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold rounded-xl text-xs sm:text-sm transition-all"
              >
                Konsultasi WhatsApp
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 h-64 lg:h-72 rounded-2xl overflow-hidden border-2 border-white/20">
            <OptimizedImage 
              src={program.image} 
              alt={program.name} 
              width={600}
              height={360}
              isLCP={true}
              aspectRatio="16/10"
              className="w-full h-full object-cover" 
            />
          </div>
        </div>
      </section>

      {/* Main Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left 2 Cols: Kurikulum & Syarat */}
        <div className="lg:col-span-2 space-y-8">
          {/* Target Audience */}
          <section className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900">
              Siapa yang Membutuhkan Program Ini?
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {program.targetAudience}
            </p>
          </section>

          {/* Kurikulum */}
          <section className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center">
              <GraduationCap className="w-5 h-5 text-[#0284C7] mr-2" />
              <span>Mata Pelajaran & Muatan Kurikulum</span>
            </h2>
            <p className="text-xs text-slate-500">
              Mengacu pada Kurikulum Merdeka Pendidikan Kesetaraan yang disempurnakan dengan keterampilan vokasi siap kerja.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {program.curriculum.map((c, i) => (
                <div key={i} className="flex items-start space-x-2 text-xs text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-200/70">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{c}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Syarat Pendaftaran */}
          <section className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center">
              <FileCheck className="w-5 h-5 text-[#0284C7] mr-2" />
              <span>Persyaratan Berkas Pendaftaran</span>
            </h2>
            <div className="space-y-2.5">
              {program.requirements.map((req, i) => (
                <div key={i} className="flex items-start space-x-3 text-xs sm:text-sm text-slate-700 bg-sky-50/50 p-3 rounded-xl border border-sky-200/50">
                  <span className="w-5 h-5 rounded-full bg-[#0284C7] text-white font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span>{req}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Manfaat & Peluang Setelah Lulus */}
          <section className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900">
              Keuntungan & Peluang Alumni {program.name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {program.benefits.map((benefit, i) => (
                <div key={i} className="flex items-start space-x-2 text-xs text-slate-700 bg-emerald-50/50 p-3 rounded-xl border border-emerald-200/50">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right 1 Col: Quick Info Sidebar & CTA */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4">
            <h3 className="font-bold text-slate-900 text-base border-b border-slate-100 pb-2">
              Ringkasan Program
            </h3>
            <div className="space-y-3 text-xs">
              <div>
                <span className="text-slate-400 block mb-0.5">Jenjang Penyetaraan:</span>
                <span className="font-semibold text-slate-800">{program.level}</span>
              </div>
              <div>
                <span className="text-slate-400 block mb-0.5">Metode Belajar:</span>
                <span className="font-semibold text-slate-800">{program.learningMethod}</span>
              </div>
              <div>
                <span className="text-slate-400 block mb-0.5">Estimasi Biaya:</span>
                <span className="font-semibold text-[#0284C7]">{program.tuitionFee}</span>
              </div>
              <div>
                <span className="text-slate-400 block mb-0.5">Status Ijazah:</span>
                <span className="font-semibold text-emerald-700">Ijazah Resmi Kemendikbudristek</span>
              </div>
            </div>

            <button
              onClick={() => onNavigate('/pendaftaran')}
              className="w-full py-3 bg-[#0284C7] hover:bg-[#0369A1] text-white font-bold rounded-xl text-xs transition-all shadow-xs"
            >
              Mulai Pendaftaran Online
            </button>
          </div>

          {/* Related Pillar Guide Promo */}
          <div className="bg-sky-50 p-6 rounded-3xl border border-sky-200 space-y-3">
            <div className="text-[11px] font-bold text-[#0369A1] uppercase tracking-wider">Artikel Terkait</div>
            <h4 className="font-bold text-slate-900 text-sm">
              Panduan Lengkap Pendidikan Kesetaraan Paket C
            </h4>
            <p className="text-xs text-slate-600">
              Pelajari rincian hukum, syarat konversi nilai rapor, dan prosedur masuk perguruan tinggi negeri.
            </p>
            <button
              onClick={() => onNavigate('/artikel/panduan-lengkap-pendidikan-kesetaraan-paket-c')}
              className="text-xs font-bold text-[#0284C7] hover:text-[#0369A1] flex items-center"
            >
              <span>Baca Panduan Induk</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
