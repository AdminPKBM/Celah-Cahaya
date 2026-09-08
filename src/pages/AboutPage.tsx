import React from 'react';
import { 
  ShieldCheck, Award, Heart, CheckCircle2, Users, 
  BookOpen, Sparkles, Building, FileText, ChevronRight, Phone
} from 'lucide-react';
import { INSTITUTION_INFO } from '../data/mockData';
import { Breadcrumb } from '../components/Breadcrumb';
import { OptimizedImage } from '../components/OptimizedImage';

interface AboutPageProps {
  onNavigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <Breadcrumb 
        items={[{ name: 'Tentang Celah Cahaya' }]} 
        onNavigate={onNavigate} 
      />

      {/* Header Profile with Official Logo */}
      <section className="flex flex-col sm:flex-row items-start sm:items-center gap-6 max-w-4xl">
        <div className="w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center p-2 bg-white rounded-2xl border border-stone-200 shadow-sm shrink-0">
          <img
            src="https://i.ibb.co.com/FL9BY0jW/LOGO-PKBM-CELAH-CAHAYA-1-1-1.webp"
            alt="Logo Resmi PKBM Celah Cahaya"
            width={112}
            height={112}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="space-y-2">
          <div className="inline-flex items-center space-x-2 bg-sky-50 text-sky-800 text-xs font-semibold px-3 py-1 rounded-full border border-sky-200">
            <Building className="w-3.5 h-3.5 text-[#0284C7]" />
            <span>Profil Lembaga Pendidikan Nonformal</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Pusat Kegiatan Belajar Masyarakat (PKBM) <span className="text-[#0284C7]">Celah Cahaya</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Didirikan atas keyakinan mendalam bahwa setiap individu berhak atas pendidikan berkualitas dan masa depan yang bermartabat. Celah Cahaya hadir menjadi jembatan kesempatan kedua bagi masyarakat di Kabupaten Garut dan seluruh Indonesia.
          </p>
        </div>
      </section>

      {/* Gedung Sekretariat & Kampus PKBM (Optimized WebP for LCP) */}
      <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-slate-200 aspect-16/9 sm:aspect-21/9 bg-stone-100">
        <OptimizedImage
          src="/assets/images/gedung-pkbm.webp"
          alt="Gedung Sekretariat dan Kampus PKBM Celah Cahaya di Singajaya Garut Jawa Barat"
          width={1000}
          height={430}
          isLCP={true}
          aspectRatio="16/9"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-3 left-3 sm:left-4 max-w-[calc(100%-1.5rem)] sm:max-w-md bg-slate-950/80 backdrop-blur-xs text-white text-[11px] sm:text-xs px-3 py-1.5 rounded-lg border border-white/10 truncate">
          Sekretariat & Kampus PKBM Celah Cahaya — Kp. Sukawangi, Singajaya, Garut
        </div>
      </div>

      {/* Profil Resmi Lembaga (Sesuai SK & Data Pokok Kemendikbudristek) */}
      <section className="bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm space-y-6">
        <div className="border-b border-slate-200 pb-4">
          <div className="inline-flex items-center space-x-2 text-xs font-bold text-[#0284C7] uppercase tracking-wider mb-1">
            <Building className="w-4 h-4 text-[#0284C7]" />
            <span>Profil Resmi Satuan Pendidikan</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
            Profil PKBM Celah Cahaya
          </h2>
        </div>

        <div className="prose prose-slate max-w-none text-sm text-slate-700 leading-relaxed space-y-4">
          <p>
            <strong>PKBM Celah Cahaya</strong> merupakan satuan pendidikan <strong>swasta berbentuk Pusat Kegiatan Belajar Masyarakat (PKBM)</strong> yang menyelenggarakan layanan pendidikan masyarakat pada jenjang <strong>Pendidikan Masyarakat (DIKMAS)</strong>. PKBM Celah Cahaya memiliki <strong>NPSN P9984574</strong> dan beralamat di <strong>Kp. Sukawangi, Desa Sukawangi, Kecamatan Singajaya, Kabupaten Garut, Provinsi Jawa Barat</strong>.
          </p>
          <p>
            Dalam penyelenggaraan pendidikan, PKBM Celah Cahaya menyediakan layanan <strong>Program Pendidikan Kesetaraan Paket B dan Paket C</strong> sebagai alternatif layanan pendidikan bagi masyarakat yang membutuhkan akses pendidikan nonformal yang setara dengan jenjang pendidikan formal.
          </p>
          <p>
            PKBM Celah Cahaya memiliki <strong>Izin Operasional dengan Nomor SK 421.9/1145-DISDIK</strong>, dengan <strong>TMT SK Operasional 22 Juli 2019</strong>. Keberadaan PKBM ini diharapkan dapat memberikan kesempatan yang lebih luas kepada masyarakat untuk memperoleh layanan pendidikan yang berkualitas, fleksibel, inklusif, dan berkelanjutan.
          </p>
          <p>
            Untuk informasi dan layanan lebih lanjut, masyarakat dapat menghubungi PKBM Celah Cahaya melalui WhatsApp di <strong>+62 821-1936-2454</strong>.
          </p>
          <div className="pt-2">
            <a
              href={`https://wa.me/${INSTITUTION_INFO.whatsapp}?text=Halo%20Admin%20PKBM%20Celah%20Cahaya,%20saya%20ingin%20tanya%20informasi%20layanan%20pendidikan%20kesetaraan.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-5 py-3 bg-emerald-600 hover:bg-emerald-700 active:scale-98 text-white text-xs sm:text-sm font-bold rounded-xl shadow-xs transition-all min-h-[44px]"
            >
              <Phone className="w-4 h-4 shrink-0" />
              <span>Hubungi via WhatsApp: +62 821-1936-2454</span>
            </a>
          </div>
        </div>

        {/* Data Spesifikasi Kelembagaan Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-1">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Bentuk Satuan Pendidikan</span>
            <div className="text-sm font-extrabold text-slate-900">PKBM (Pusat Kegiatan Belajar Masyarakat)</div>
            <div className="text-xs text-slate-600">Status Kelembagaan: Swasta</div>
          </div>
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-1">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Jenjang Pendidikan</span>
            <div className="text-sm font-extrabold text-slate-900">Pendidikan Masyarakat (DIKMAS)</div>
            <div className="text-xs text-slate-600">Nonformal Setara Formal</div>
          </div>
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-1">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">NPSN Resmi</span>
            <div className="text-sm font-extrabold text-amber-600">P9984574</div>
            <div className="text-xs text-slate-600">Terdaftar Aktif di Dapodik Kemendikbudristek</div>
          </div>
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-1">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Izin Operasional</span>
            <div className="text-sm font-extrabold text-slate-900">SK 421.9/1145-DISDIK</div>
            <div className="text-xs text-slate-600">Dinas Pendidikan Kabupaten Garut</div>
          </div>
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-1">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">TMT SK Operasional</span>
            <div className="text-sm font-extrabold text-emerald-700">22 Juli 2019</div>
            <div className="text-xs text-slate-600">Beroperasi Berkelanjutan</div>
          </div>
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-1">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Layanan Program Utama</span>
            <div className="text-sm font-extrabold text-sky-700">Paket B (SMP) & Paket C (SMA)</div>
            <div className="text-xs text-slate-600">Ijazah Resmi Berkelanjutan</div>
          </div>
        </div>
      </section>

      {/* Filosofi Nama */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-50/50 p-8 rounded-3xl border border-amber-200/70">
        <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center">
          <Sparkles className="w-5 h-5 text-amber-600 mr-2" />
          <span>Filosofi di Balik Nama "Celah Cahaya"</span>
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          Dalam kegelapan dan keterbatasan paling sempit sekalipun, selalu ada celah kecil tempat cahaya fajar dapat menerobos masuk. Nama <strong>Celah Cahaya</strong> melambangkan harapan yang tidak pernah padam. Bagi mereka yang sempat kehilangan arah karena putus sekolah, lembaga ini hadir sebagai celah jalan masuknya ilmu pengetahuan, budi pekerti, dan keterampilan nyata yang menerangi masa depan keluarga dan masyarakat.
        </p>
      </section>

      {/* Legalitas & Akreditasi Resmi (E-E-A-T) */}
      <section className="space-y-6">
        <div className="border-b border-slate-200 pb-3">
          <h2 className="text-2xl font-bold text-slate-900">Legalitas & Izin Operasional Resmi</h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Seluruh program dan ijazah yang diterbitkan dijamin keabsahan hukumnya oleh negara.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-sky-100 flex items-center justify-center text-[#0369A1]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">Nomor Pokok Sekolah Nasional</h3>
            <p className="text-2xl font-extrabold text-[#0284C7] tracking-wider">
              {INSTITUTION_INFO.npsn}
            </p>
            <p className="text-xs text-slate-500">
              Tercatat aktif di Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi RI (Dapodik DIKMAS).
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">Jenjang Layanan Pendidikan</h3>
            <p className="text-xl font-extrabold text-blue-600 tracking-wider">
              DIKMAS
            </p>
            <p className="text-xs text-slate-500">
              Pendidikan Masyarakat dengan Program Kesetaraan Paket B dan Paket C resmi berstandar nasional.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700">
              <FileText className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">Izin Operasional Resmi</h3>
            <p className="text-xs font-semibold text-slate-800 leading-relaxed">
              SK No. {INSTITUTION_INFO.skNumber}
            </p>
            <p className="text-xs text-slate-500">
              Diterbitkan oleh Dinas Pendidikan Kabupaten Garut dengan TMT 22 Juli 2019.
            </p>
          </div>
        </div>
      </section>

      {/* Visi & Misi */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-3xl border border-slate-200 space-y-4">
          <h3 className="text-xl font-bold text-[#0284C7]">Visi Lembaga</h3>
          <p className="text-sm text-slate-700 leading-relaxed font-medium">
            "Menjadi Pusat Kegiatan Belajar Masyarakat unggulan yang adaptif, berintegritas, dan melahirkan lulusan berkarakter mulia, berijazah resmi negara, serta berdaya saing melalui penguasaan teknologi digital dan keterampilan mandiri pada tahun 2030."
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-slate-200 space-y-4">
          <h3 className="text-xl font-bold text-[#0284C7]">Misi Utama</h3>
          <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
            <li className="flex items-start space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Menyelenggarakan layanan pendidikan kesetaraan Paket A, B, dan C yang inklusif, ramah, dan bebas diskriminasi usia.</span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Mengembangkan model pembelajaran fleksibel (blended learning) yang memudahkan pekerja dan warga belajar mandiri.</span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Membekali warga belajar dengan literasi digital terapan, pemanfaatan kecerdasan buatan (AI), dan kewirausahaan lokal Garut.</span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Membuka jejaring kemitraan dengan perguruan tinggi negeri/swasta dan dunia industri untuk penyerapan kerja alumni.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Fasilitas Pembelajaran */}
      <section className="space-y-6">
        <div className="border-b border-slate-200 pb-3">
          <h2 className="text-2xl font-bold text-slate-900">Fasilitas Belajar</h2>
          <p className="text-xs sm:text-sm text-slate-500">Mendukung kenyamanan belajar tatap muka maupun daring.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
            <h4 className="font-bold text-slate-900 text-sm mb-1">Lab Komputer & ANBK</h4>
            <p className="text-xs text-slate-600">Perangkat komputer modern untuk simulasi ujian nasional dan pelatihan keterampilan digital.</p>
          </div>
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
            <h4 className="font-bold text-slate-900 text-sm mb-1">Ruang Kelas Nyaman</h4>
            <p className="text-xs text-slate-600">Kelas berhawa sejuk di kawasan Singajaya Garut yang tenang dan asri untuk fokus belajar tatap muka.</p>
          </div>
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
            <h4 className="font-bold text-slate-900 text-sm mb-1">Perpustakaan & Pojok Baca</h4>
            <p className="text-xs text-slate-600">Koleksi modul kurikulum merdeka, buku pengembangan diri, sastra, dan modul vokasi.</p>
          </div>
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
            <h4 className="font-bold text-slate-900 text-sm mb-1">LMS Belajar Mandiri 24 Jam</h4>
            <p className="text-xs text-slate-600">Portal materi digital terintegrasi yang dapat diakses melalui smartphone kapan saja.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0B192C] text-white p-8 sm:p-10 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold">Ingin Mengunjungi Sekretariat Kami?</h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Kami menyambut hangat kedatangan Anda di Kp. Sukawangi, Desa Sukawangi, Kec. Singajaya, Kab. Garut untuk silaturahmi dan konsultasi langsung.
          </p>
        </div>
        <button
          onClick={() => onNavigate('/kontak')}
          className="px-6 py-3 bg-[#0284C7] hover:bg-[#0369A1] text-white font-bold rounded-xl text-sm shrink-0 shadow-xs cursor-pointer"
        >
          Lihat Alamat & Denah Lokasi
        </button>
      </section>
    </div>
  );
};
