import React from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { Award, CheckCircle2, FileText, Heart, ShieldCheck, ArrowRight } from 'lucide-react';
import { INSTITUTION_INFO } from '../data/mockData';

interface BeasiswaPageProps {
  onNavigate: (path: string) => void;
}

export const BeasiswaPage: React.FC<BeasiswaPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <Breadcrumb
        items={[{ name: 'Beasiswa & Bantuan Belajar' }]}
        onNavigate={onNavigate}
      />

      {/* Header */}
      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center space-x-2 bg-emerald-50 text-emerald-800 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-200">
          <Heart className="w-3.5 h-3.5 text-emerald-600" />
          <span>Akses Pendidikan Inklusif & Berkeadilan</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Program Beasiswa & Bantuan Pendidikan Celah Cahaya
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Kami memastikan faktor ekonomi tidak menjadi penghalang untuk meraih ijazah resmi negara. PKBM Celah Cahaya memfasilitasi program bantuan pemerintah dan beasiswa yayasan bagi warga yang berhak.
        </p>
      </div>

      {/* Program Beasiswa Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Beasiswa 1: KIP / PIP */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <span className="text-xs font-bold text-[#0284C7] bg-sky-50 px-2.5 py-1 rounded-md">
              Program Pemerintah
            </span>
            <h3 className="text-lg font-bold text-slate-900">
              Beasiswa KIP / PIP Kesetaraan
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Bantuan biaya pendidikan dari Kemendikbudristek bagi anak usia sekolah (7-21 tahun) yang berasal dari keluarga prasejahtera pemegang Kartu Indonesia Pintar (KIP).
            </p>
            <ul className="text-xs text-slate-700 space-y-1.5 pt-2">
              <li className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Bebas biaya SPP & ujian 100%</span>
              </li>
              <li className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Bantuan dana tunai perlengkapan belajar</span>
              </li>
            </ul>
          </div>
          <button
            onClick={() => onNavigate('/pendaftaran')}
            className="w-full py-2.5 bg-[#0284C7] hover:bg-[#0369A1] text-white rounded-xl text-xs font-bold transition-colors cursor-pointer"
          >
            Ajukan Jalur KIP
          </button>
        </div>

        {/* Beasiswa 2: Afirmasi Yatim & Dhuafa */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
              Yayasan Celah Cahaya
            </span>
            <h3 className="text-lg font-bold text-slate-900">
              Beasiswa Afirmasi Yatim & Dhuafa
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Dukungan penuh dari donatur dan Yayasan Celah Cahaya bagi anak yatim piatu serta keluarga kurang mampu di wilayah Kabupaten Garut.
            </p>
            <ul className="text-xs text-slate-700 space-y-1.5 pt-2">
              <li className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Bebas biaya pendaftaran dan modul</span>
              </li>
              <li className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Pendampingan tutor dan pelatihan vokasi AI</span>
              </li>
            </ul>
          </div>
          <button
            onClick={() => onNavigate('/pendaftaran')}
            className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-colors"
          >
            Ajukan Jalur Afirmasi
          </button>
        </div>

        {/* Beasiswa 3: Prestasi & Tahfidz */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md">
              Apresiasi Talenta
            </span>
            <h3 className="text-lg font-bold text-slate-900">
              Beasiswa Prestasi & Hafidz Qur'an
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Penghargaan bagi santri, atlet, atau pemuda yang memiliki hafalan Al-Qur'an minimal 2 Juz atau prestasi kejuaraan di tingkat kabupaten/provinsi.
            </p>
            <ul className="text-xs text-slate-700 space-y-1.5 pt-2">
              <li className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Subsidi biaya pendidikan 50% - 100%</span>
              </li>
              <li className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Jadwal belajar sangat fleksibel</span>
              </li>
            </ul>
          </div>
          <button
            onClick={() => onNavigate('/pendaftaran')}
            className="w-full py-2.5 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-xs font-bold transition-colors"
          >
            Ajukan Jalur Prestasi
          </button>
        </div>
      </div>

      {/* Syarat Pengajuan Beasiswa */}
      <section className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-4">
        <h3 className="text-lg font-bold text-slate-900 flex items-center">
          <FileText className="w-5 h-5 text-amber-600 mr-2" />
          <span>Syarat Berkas Pengajuan Beasiswa</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
          <div className="flex items-start space-x-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span>Kartu Indonesia Pintar (KIP) / Kartu Keluarga Sejahtera (KKS) / PKH (jika ada).</span>
          </div>
          <div className="flex items-start space-x-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span>Surat Keterangan Tidak Mampu (SKTM) dari kelurahan / desa setempat di Garut.</span>
          </div>
          <div className="flex items-start space-x-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span>Fotokopi Kartu Keluarga (KK) dan Akta Kelahiran calon warga belajar.</span>
          </div>
          <div className="flex items-start space-x-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span>Komitmen sungguh-sungguh untuk menyelesaikan proses belajar hingga tuntas.</span>
          </div>
        </div>
      </section>
    </div>
  );
};
