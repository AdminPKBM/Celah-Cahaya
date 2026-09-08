import React from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { BookOpen, Award, ArrowRight, CheckCircle2, FileText, GraduationCap } from 'lucide-react';

interface PanduanPageProps {
  onNavigate: (path: string) => void;
}

export const PanduanPage: React.FC<PanduanPageProps> = ({ onNavigate }) => {
  const GUIDES = [
    {
      title: 'Panduan Lengkap Pendidikan Kesetaraan Paket C',
      desc: 'Panduan induk mengenai dasar hukum keabsahan ijazah setara SMA, syarat, biaya, dan perbandingan dengan SMA formal.',
      category: 'Pillar Guide',
      link: '/artikel/panduan-lengkap-pendidikan-kesetaraan-paket-c',
      badge: 'Pilar Utama'
    },
    {
      title: 'Panduan Mendaftar Kuliah PTN dengan Ijazah Paket C',
      desc: 'Tahapan registrasi akun SNPMB, pendaftaran UTBK-SNBT, dan tips memilih program studi universitas negeri.',
      category: 'Perkuliahan',
      link: '/artikel/apakah-ijazah-paket-c-bisa-kuliah-negeri',
      badge: 'SNBT & UTBK'
    },
    {
      title: 'Panduan Berkas Pendaftaran Siswa Baru di Garut',
      desc: 'Checklist dokumen wajib fotokopi ijazah, KK, akta, pas foto formal, dan surat keterangan pindah sekolah.',
      category: 'Pendaftaran',
      link: '/artikel/syarat-dan-cara-daftar-paket-c-garut',
      badge: 'Registrasi'
    },
    {
      title: 'Panduan Biaya & Skema Beasiswa KIP',
      desc: 'Rincian komponen biaya pendidikan di Celah Cahaya serta syarat pengajuan beasiswa afirmasi KIP Kemendikbud.',
      category: 'Finansial & Bantuan',
      link: '/artikel/biaya-sekolah-paket-c-terbaru',
      badge: 'Transparan'
    },
    {
      title: 'Panduan Belajar Mandiri Menggunakan AI',
      desc: 'Pemanfaatan alat kecerdasan buatan sebagai tutor pendamping privat 24 jam untuk memahami pelajaran sulit.',
      category: 'Teknologi Digital',
      link: '/artikel/pemanfaatan-ai-untuk-belajar-mandiri-pendidikan-kesetaraan',
      badge: 'Literasi AI'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <Breadcrumb
        items={[{ name: 'Pusat Panduan' }]}
        onNavigate={onNavigate}
      />

      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center space-x-2 bg-sky-50 text-sky-800 text-xs font-semibold px-3 py-1 rounded-full border border-sky-200">
          <BookOpen className="w-3.5 h-3.5 text-[#0284C7]" />
          <span>Direktori Panduan Resmi Celah Cahaya</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Pusat Panduan & Tutorial Pendidikan Kesetaraan
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Koleksi tutorial langkah demi langkah yang disusun secara sistematis untuk memandu warga belajar dari tahap persiapan masuk, proses studi, hingga pengurusan ijazah dan perkuliahan.
        </p>
      </div>

      {/* Guides Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {GUIDES.map((guide, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs hover:border-[#0284C7] hover:shadow-md transition-all flex flex-col justify-between group"
          >
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-xs font-semibold text-[#0284C7] bg-sky-50 px-2.5 py-1 rounded-md border border-sky-200">
                  {guide.category}
                </span>
                <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-sm">
                  {guide.badge}
                </span>
              </div>
              <h2 className="text-lg font-bold text-slate-900 group-hover:text-[#0284C7] transition-colors">
                {guide.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {guide.desc}
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-100">
              <button
                onClick={() => onNavigate(guide.link)}
                className="inline-flex items-center text-xs font-bold text-[#0284C7] hover:text-[#0369A1]"
              >
                <span>Buka Panduan Lengkap</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Alur Belajar 4 Tahap */}
      <section className="bg-[#0B192C] text-white rounded-3xl p-8 sm:p-10 space-y-6">
        <h3 className="text-xl sm:text-2xl font-bold">Alur 4 Tahap Menuntaskan Kesetaraan di Celah Cahaya</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700">
            <div className="w-8 h-8 rounded-full bg-[#0284C7] text-white font-bold flex items-center justify-center text-sm mb-3">1</div>
            <h4 className="font-bold text-sm text-white mb-1">Registrasi & Verifikasi</h4>
            <p className="text-xs text-slate-300">Konsultasi berkas, penyerahan fotokopi ijazah sebelumnya, dan entri Dapodik resmi.</p>
          </div>
          <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700">
            <div className="w-8 h-8 rounded-full bg-[#0284C7] text-white font-bold flex items-center justify-center text-sm mb-3">2</div>
            <h4 className="font-bold text-sm text-white mb-1">Pembelajaran Fleksibel</h4>
            <p className="text-xs text-slate-300">Akses modul LMS daring mandiri dan tatap muka berkala akhir pekan bersama tutor.</p>
          </div>
          <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700">
            <div className="w-8 h-8 rounded-full bg-[#0284C7] text-white font-bold flex items-center justify-center text-sm mb-3">3</div>
            <h4 className="font-bold text-sm text-white mb-1">ANBK & Uji Kesetaraan</h4>
            <p className="text-xs text-slate-300">Pelaksanaan asesmen nasional berbasis komputer di lab resmi Celah Cahaya.</p>
          </div>
          <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700">
            <div className="w-8 h-8 rounded-full bg-[#0284C7] text-white font-bold flex items-center justify-center text-sm mb-3">4</div>
            <h4 className="font-bold text-sm text-white mb-1">Penerimaan Ijazah</h4>
            <p className="text-xs text-slate-300">Penerbitan Ijazah Negara dengan Nomor Ijazah Nasional yang sah untuk kuliah & kerja.</p>
          </div>
        </div>
      </section>
    </div>
  );
};
