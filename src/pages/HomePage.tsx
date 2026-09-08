import React from 'react';
import { 
  GraduationCap, ShieldCheck, Award, Users, BookOpen, 
  ArrowRight, CheckCircle2, Star, Sparkles, MapPin, Phone,
  FileCheck, HelpCircle, ChevronRight, Laptop, Building, Calendar, ArrowUpRight
} from 'lucide-react';
import { INSTITUTION_INFO, PROGRAMS_DATA, INITIAL_ARTICLES } from '../data/mockData';
import { ArticleCard } from '../components/ArticleCard';
import { OptimizedImage } from '../components/OptimizedImage';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const primaryFeatured = INITIAL_ARTICLES.find(a => a.isPillar) || INITIAL_ARTICLES[0];
  const secondaryFeatures = INITIAL_ARTICLES.filter(a => a.id !== primaryFeatured.id).slice(0, 2);
  const featuredArticles = INITIAL_ARTICLES.filter(
    a => a.id !== primaryFeatured.id && !secondaryFeatures.some(s => s.id === a.id)
  ).slice(0, 3);

  return (
    <div className="space-y-20 sm:space-y-28 pb-12">
      
      {/* =========================================================================
          1. HERO SECTION (EDITORIAL / INSTITUTIONAL HARVARD-STYLE)
         ========================================================================= */}
      <section className="relative pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-stone-200/90 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Academic Typographic Hierarchy */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Institutional Eyebrow */}
              <div className="inline-flex items-center space-x-2 border-l-2 border-[#0284C7] pl-3 py-0.5 text-xs font-semibold text-stone-600 tracking-wider uppercase">
                <span>LEMBAGA PENDIDIKAN NONFORMAL RESMI</span>
                <span className="text-stone-300">•</span>
                <span className="text-stone-500 font-mono">NPSN: {INSTITUTION_INFO.npsn}</span>
              </div>

              {/* Large Editorial Headline */}
              <h1 className="font-serif-academic text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0F172A] tracking-tight leading-[1.12]">
                Belajar, Berkembang, dan Membangun Masa Depan
              </h1>

              {/* Mission Description */}
              <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-normal max-w-2xl">
                PKBM Celah Cahaya menghadirkan akses pendidikan kesetaraan <strong>Paket B</strong> dan <strong>Paket C</strong> resmi berijazah negara, fleksibel, inklusif, dan berkualitas tinggi — membuka kesempatan meraih pendidikan tinggi, karier formal, dan kemandirian berkarya.
              </p>

              {/* Institutional Action CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={() => {
                    onNavigate('/program');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-md font-semibold text-sm bg-[#0284C7] hover:bg-[#0369A1] text-white transition-colors duration-150 border border-[#0369A1] shadow-xs cursor-pointer group"
                >
                  <span>Jelajahi Program</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => {
                    onNavigate('/tentang');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-md font-medium text-sm bg-white hover:bg-stone-50 text-stone-800 border border-stone-300 transition-colors duration-150 cursor-pointer"
                >
                  <span>Pelajari Lebih Lanjut</span>
                </button>
              </div>

              {/* Academic Trust Highlights */}
              <div className="pt-6 border-t border-stone-200 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-stone-600 font-medium">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0284C7] shrink-0" />
                  <span>Ijazah Sah 100% Negara</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0284C7] shrink-0" />
                  <span>Eligibel UTBK-SNBT & CPNS</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0284C7] shrink-0" />
                  <span>Tersedia Beasiswa KIP</span>
                </div>
              </div>
            </div>

            {/* Right Column: High-Dignity Academic Visual & Institutional Caption */}
            <div className="lg:col-span-5">
              <div className="bg-white p-2.5 sm:p-3 border border-stone-200 shadow-sm rounded-lg">
                <div className="relative overflow-hidden rounded-md bg-stone-100 aspect-16/11">
                  <OptimizedImage
                    src="https://blogger.googleusercontent.com/img/a/AVvXsEiT8hhK7gpl6VbfrU_D8muZjCK31xuvcfDg0XJ7Vx_xR68g4lImyRebb43DWMSeqiXv6si_78InlPWo-arCgbGBHW1k6SlHzJ1iV9rw-L_skwiljMfr_DutD2Anxfqy_me-pB0HL0LdcRHgOOs6D3VXmn7yJgTNOGyzZSvTWXcNkkyJOJt8PSFz30-CVVmb"
                    alt="Belajar, Berkembang, dan Membangun Masa Depan di PKBM Celah Cahaya Garut"
                    width={800}
                    height={550}
                    aspectRatio="16/11"
                    isLCP={true}
                    className="w-full h-full object-cover transition-all duration-700 hover:scale-103"
                  />
                  <div className="absolute top-3 right-3 bg-[#0F172A]/90 text-white text-[11px] font-medium px-2.5 py-1 rounded-sm backdrop-blur-xs font-mono">
                    Garut, Jawa Barat
                  </div>
                </div>

                {/* Editorial Caption */}
                <div className="pt-3 px-1.5 pb-1">
                  <p className="text-xs text-stone-600 leading-relaxed italic">
                    "Pendidikan bukan sekadar mengejar lembaran kertas ijazah, melainkan memulihkan martabat, memperluas wawasan, dan menyalakan lentera masa depan."
                  </p>
                  <div className="mt-2 flex items-center justify-between text-[11px] text-stone-400 font-medium border-t border-stone-100 pt-1.5">
                    <span>Sekretariat Singajaya, Garut</span>
                    <span className="text-[#0284C7] font-semibold">SK: 421.9/1145-DISDIK</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          2. SECTION PROGRAM / PENDIDIKAN (EDITORIAL LAYOUT)
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="border-b border-stone-200 pb-5 mb-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-semibold text-[#0284C7] uppercase tracking-wider block">
                Kurikulum & Jenjang Belajar
              </span>
              <h2 className="font-serif-academic text-3xl sm:text-4xl font-bold text-[#0F172A] tracking-tight">
                Program Pendidikan & Pembelajaran
              </h2>
              <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-normal">
                Pendidikan kesetaraan terstruktur dengan fleksibilitas jadwal belajar tatap muka dan mandiri, dirancang bagi remaja maupun usia dewasa untuk menuntaskan pendidikan formal.
              </p>
            </div>
            <button
              onClick={() => {
                onNavigate('/program');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xs sm:text-sm font-semibold text-[#0284C7] hover:text-[#0369A1] inline-flex items-center space-x-1 shrink-0 group cursor-pointer"
            >
              <span>Lihat Rincian Seluruh Program</span>
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Editorial Grid: 3 Programs with Distinct Narrative */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          {/* Program 1: Paket B */}
          <div className="bg-white border border-stone-200 rounded-lg p-6 sm:p-7 flex flex-col justify-between hover:border-stone-400 transition-colors">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider font-mono">
                  Jenjang 01
                </span>
                <span className="text-[11px] bg-stone-100 text-stone-700 px-2 py-0.5 rounded-sm font-medium">
                  Setara SMP / MTs
                </span>
              </div>
              <h3 className="font-serif-academic text-2xl font-bold text-[#0F172A]">
                Paket B
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Penuntasan Wajib Belajar 9 Tahun bagi lulusan SD/MI atau putus sekolah tingkat pertama. Menekankan penguatan literasi dasar, numerasi, dan budi pekerti.
              </p>
              <ul className="space-y-2 text-xs text-stone-600 border-t border-stone-100 pt-3">
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]" />
                  <span>Ijazah resmi diakui untuk lanjut ke SMA/SMK/Paket C</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]" />
                  <span>Modul belajar terstruktur Kurikulum Merdeka</span>
                </li>
              </ul>
            </div>
            <div className="pt-6 border-t border-stone-100 mt-6">
              <button
                onClick={() => {
                  onNavigate('/program/paket-b');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-xs font-semibold text-[#0284C7] hover:text-[#0369A1] inline-flex items-center group cursor-pointer"
              >
                <span>Selengkapnya tentang Paket B</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Program 2: Paket C (Featured Flagship) */}
          <div className="bg-[#F0F9FF] border-2 border-[#0284C7]/40 rounded-lg p-6 sm:p-7 flex flex-col justify-between relative shadow-xs">
            <div className="absolute -top-3 left-6 bg-[#0284C7] text-white text-[10px] font-bold px-3 py-0.5 rounded-sm uppercase tracking-wider">
              Program Unggulan
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between pt-1">
                <span className="text-xs font-semibold text-[#0284C7] uppercase tracking-wider font-mono">
                  Jenjang 02
                </span>
                <span className="text-[11px] bg-[#0284C7]/10 text-[#0284C7] px-2 py-0.5 rounded-sm font-semibold">
                  Setara SMA (IPA & IPS)
                </span>
              </div>
              <h3 className="font-serif-academic text-2xl font-bold text-[#0F172A]">
                Paket C
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Pendidikan kesetaraan tingkat atas dengan ijazah negara berkekuatan hukum penuh. Memiliki hak sama untuk mendaftar <strong>UTBK-SNBT PTN</strong>, seleksi kedinasan, CPNS, serta jenjang karier perusahaan.
              </p>
              <ul className="space-y-2 text-xs text-stone-600 border-t border-stone-200/80 pt-3">
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]" />
                  <span>Bimbingan persiapan seleksi perguruan tinggi negeri</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]" />
                  <span>Jadwal belajar blended fleksibel untuk pekerja</span>
                </li>
              </ul>
            </div>
            <div className="pt-6 border-t border-stone-200/80 mt-6">
              <button
                onClick={() => {
                  onNavigate('/program/paket-c');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-xs font-semibold text-[#0284C7] hover:text-[#0369A1] inline-flex items-center group cursor-pointer"
              >
                <span>Selengkapnya tentang Paket C</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Program 3: Vokasi & Keterampilan Abad 21 */}
          <div className="bg-white border border-stone-200 rounded-lg p-6 sm:p-7 flex flex-col justify-between hover:border-stone-400 transition-colors">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider font-mono">
                  Jenjang 03
                </span>
                <span className="text-[11px] bg-stone-100 text-stone-700 px-2 py-0.5 rounded-sm font-medium">
                  Kecakapan Hidup
                </span>
              </div>
              <h3 className="font-serif-academic text-2xl font-bold text-[#0F172A]">
                Vokasi & AI Terapan
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Pemberdayaan keterampilan kerja riil: literasi komputer, aplikasi artificial intelligence untuk wirausaha, desain digital, dan pengelolaan bisnis UMKM lokal Garut.
              </p>
              <ul className="space-y-2 text-xs text-stone-600 border-t border-stone-100 pt-3">
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]" />
                  <span>Praktik langsung laboratorium komputer PKBM</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]" />
                  <span>Sertifikasi kompetensi keahlian vokasional</span>
                </li>
              </ul>
            </div>
            <div className="pt-6 border-t border-stone-100 mt-6">
              <button
                onClick={() => {
                  onNavigate('/program/vokasi-ai');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-xs font-semibold text-[#0284C7] hover:text-[#0369A1] inline-flex items-center group cursor-pointer"
              >
                <span>Selengkapnya tentang Vokasi</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          3. SECTION "TENTANG LEMBAGA" (STORYTELLING TWO-COLUMN)
         ========================================================================= */}
      <section className="bg-stone-50 border-y border-stone-200/90 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Mission Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <div className="border-l-2 border-[#0284C7] pl-3">
                <span className="text-xs font-semibold text-[#0284C7] uppercase tracking-wider block">
                  Filosofi & Dedikasi
                </span>
                <h2 className="font-serif-academic text-3xl sm:text-4xl font-bold text-[#0F172A] tracking-tight mt-1">
                  Membuka Celah Harapan, Menerangi Masa Depan Bangsa
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-stone-600 leading-relaxed font-normal">
                <p>
                  Didirikan pada tahun 2019 di Singajaya Garut, <strong>PKBM Celah Cahaya</strong> lahir dari sebuah kesadaran bahwa kesempatan belajar tidak boleh terhenti karena kendala ekonomi, usia, ataupun geografis.
                </p>
                <p>
                  Kami meyakini bahwa setiap insan berhak mendapatkan kesempatan kedua dalam menempuh pendidikan bermutu. Melalui kurikulum kesetaraan yang berorientasi pada kemajuan zaman serta pembinaan karakter, kami mendampingi ratusan warga belajar menemukan kembali rasa percaya diri mereka untuk melangkah ke jenjang yang lebih tinggi.
                </p>
                <p>
                  Sebagai satuan pendidikan resmi jenjang DIKMAS (NPSN P9984574, SK 421.9/1145-DISDIK), seluruh proses pembelajaran dan asesmen diselenggarakan sesuai standar nasional pendidikan yang kredibel dan terpercaya.
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => {
                    onNavigate('/tentang');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-xs sm:text-sm font-semibold text-[#0284C7] hover:text-[#0369A1] inline-flex items-center space-x-1.5 border-b border-[#0284C7] pb-0.5 group cursor-pointer"
                >
                  <span>Kenali Lembaga Kami Lebih Dalam</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Column: Institutional Educational Visual */}
            <div className="lg:col-span-6">
              <div className="bg-white p-3 border border-stone-200 shadow-sm rounded-lg">
                <div className="overflow-hidden rounded-md bg-stone-100 aspect-4/3">
                  <OptimizedImage
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOP1I-pT6Z56KBzmCixhjxGdadnmEHoocfHD_fgsKJUeIkmPq6Mwxfq9md&s=10"
                    alt="Gedung sekretariat dan pusat kegiatan belajar masyarakat PKBM Celah Cahaya Garut"
                    width={800}
                    height={600}
                    aspectRatio="4/3"
                    className="w-full h-full object-cover transition-all duration-700"
                  />
                </div>
                <div className="pt-3 px-1">
                  <div className="text-xs font-semibold text-stone-800">
                    Pusat Pembelajaran Komunitas Sukawangi, Singajaya
                  </div>
                  <p className="text-[11px] text-stone-500 mt-0.5">
                    Ruang kelas, perpustakaan baca, dan laboratorium komputer tempat berlangsungnya simulasi ANBK serta kursus keterampilan warga belajar.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          4. SECTION STATISTIK / AT A GLANCE ("SEKILAS TENTANG KAMI")
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-stone-200 pb-4 mb-10">
          <span className="text-xs font-semibold text-[#0284C7] uppercase tracking-wider block">
            Sekilas Tentang Kami
          </span>
          <h2 className="font-serif-academic text-3xl sm:text-4xl font-bold text-[#0F172A] tracking-tight mt-1">
            Fakta & Dampak Lembaga
          </h2>
        </div>

        {/* Minimalist Academic Number Grid (Large Serif Numbers, Clean Whitespace) */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-8 text-left">
          <div className="space-y-1 border-l border-stone-300 pl-4">
            <div className="font-serif-academic text-3xl sm:text-4xl font-bold text-[#0284C7]">
              02
            </div>
            <div className="text-xs font-semibold text-stone-800">
              Program Resmi
            </div>
            <div className="text-[11px] text-stone-500">
              Paket B & Paket C
            </div>
          </div>

          <div className="space-y-1 border-l border-stone-300 pl-4">
            <div className="font-serif-academic text-3xl sm:text-4xl font-bold text-[#0F172A]">
              450+
            </div>
            <div className="text-xs font-semibold text-stone-800">
              Peserta Didik
            </div>
            <div className="text-[11px] text-stone-500">
              Aktif Belajar
            </div>
          </div>

          <div className="space-y-1 border-l border-stone-300 pl-4">
            <div className="font-serif-academic text-3xl sm:text-4xl font-bold text-[#0284C7]">
              1.450+
            </div>
            <div className="text-xs font-semibold text-stone-800">
              Alumni Lulusan
            </div>
            <div className="text-[11px] text-stone-500">
              Berijazah Sah Negara
            </div>
          </div>

          <div className="space-y-1 border-l border-stone-300 pl-4">
            <div className="font-serif-academic text-3xl sm:text-4xl font-bold text-[#0F172A]">
              24
            </div>
            <div className="text-xs font-semibold text-stone-800">
              Tenaga Pendidik
            </div>
            <div className="text-[11px] text-stone-500">
              Tutor Berpengalaman
            </div>
          </div>

          <div className="space-y-1 border-l border-stone-300 pl-4">
            <div className="font-serif-academic text-3xl sm:text-4xl font-bold text-[#0284C7]">
              2019
            </div>
            <div className="text-xs font-semibold text-stone-800">
              Tahun Berdiri
            </div>
            <div className="text-[11px] text-stone-500">
              SK 421.9/1145-DISDIK
            </div>
          </div>

          <div className="space-y-1 border-l border-stone-300 pl-4">
            <div className="font-serif-academic text-3xl sm:text-4xl font-bold text-[#0F172A]">
              100%
            </div>
            <div className="text-xs font-semibold text-stone-800">
              Legalitas Negara
            </div>
            <div className="text-[11px] text-stone-500">
              NPSN P9984574
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. SECTION FEATURED CONTENT ("DALAM FOKUS")
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-stone-200 pb-4 mb-8 flex justify-between items-end">
          <div>
            <span className="text-xs font-semibold text-[#0284C7] uppercase tracking-wider block">
              Sorotan Informasi
            </span>
            <h2 className="font-serif-academic text-3xl sm:text-4xl font-bold text-[#0F172A] tracking-tight mt-1">
              Dalam Fokus
            </h2>
          </div>
          <button
            onClick={() => {
              onNavigate('/panduan');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-xs sm:text-sm font-semibold text-[#0284C7] hover:text-[#0369A1] hidden sm:inline-flex items-center space-x-1"
          >
            <span>Panduan Kesetaraan Lengkap →</span>
          </button>
        </div>

        {/* 1 Lead Feature Story + 2 Companion Feature Stories */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Lead Feature (8 Columns) */}
          <div className="lg:col-span-8 bg-white border border-stone-200 rounded-lg p-6 sm:p-8 hover:border-stone-400 transition-colors flex flex-col justify-between">
            <div className="space-y-4">
              <div className="relative overflow-hidden rounded-md bg-stone-100 aspect-16/9">
                <OptimizedImage
                  src={primaryFeatured.featuredImage}
                  alt={primaryFeatured.featuredImageAlt}
                  width={900}
                  height={500}
                  aspectRatio="16/9"
                  className="w-full h-full object-cover hover:scale-103 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-[#0284C7] text-white text-[11px] font-semibold px-2.5 py-0.5 rounded-sm">
                  {primaryFeatured.category}
                </span>
              </div>

              <div className="text-xs text-stone-500 font-mono">
                Dipublikasikan: {primaryFeatured.publishedDate} • Bacaan {primaryFeatured.readingTimeMinutes} Menit
              </div>

              <h3 className="font-serif-academic text-2xl sm:text-3xl font-bold text-[#0F172A] hover:text-[#0284C7] transition-colors leading-snug">
                <button
                  onClick={() => {
                    onNavigate(`/artikel/${primaryFeatured.slug}`);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-left cursor-pointer"
                >
                  {primaryFeatured.title}
                </button>
              </h3>

              <p className="text-sm text-stone-600 leading-relaxed">
                {primaryFeatured.excerpt}
              </p>
            </div>

            <div className="pt-6 border-t border-stone-100 mt-6 flex justify-between items-center">
              <span className="text-xs text-stone-500 font-medium">Oleh: {primaryFeatured.author.name}</span>
              <button
                onClick={() => {
                  onNavigate(`/artikel/${primaryFeatured.slug}`);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-xs font-semibold text-[#0284C7] inline-flex items-center group cursor-pointer"
              >
                <span>Baca Laporan Selengkapnya</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Supporting Companion Features (4 Columns) */}
          <div className="lg:col-span-4 space-y-6">
            {secondaryFeatures.map((item) => (
              <div 
                key={item.id} 
                className="bg-white border border-stone-200 rounded-lg p-5 hover:border-stone-400 transition-colors space-y-3"
              >
                <div className="relative overflow-hidden rounded-md bg-stone-100 aspect-16/10">
                  <OptimizedImage
                    src={item.featuredImage}
                    alt={item.featuredImageAlt}
                    width={500}
                    height={310}
                    aspectRatio="16/10"
                    className="w-full h-full object-cover hover:scale-103 transition-transform duration-500"
                  />
                  <span className="absolute top-2 left-2 bg-[#0F172A]/80 text-white text-[10px] font-semibold px-2 py-0.5 rounded-sm">
                    {item.category}
                  </span>
                </div>

                <div className="text-[11px] text-stone-400 font-mono">
                  {item.publishedDate}
                </div>

                <h4 className="font-serif-academic text-base font-bold text-[#0F172A] leading-snug line-clamp-2">
                  <button
                    onClick={() => {
                      onNavigate(`/artikel/${item.slug}`);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-left hover:text-[#0284C7] transition-colors cursor-pointer"
                  >
                    {item.title}
                  </button>
                </h4>

                <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                  {item.excerpt}
                </p>

                <div className="pt-2 border-t border-stone-100">
                  <button
                    onClick={() => {
                      onNavigate(`/artikel/${item.slug}`);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-xs font-semibold text-[#0284C7] hover:text-[#0369A1] inline-flex items-center group cursor-pointer"
                  >
                    <span>Pelajari →</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          6. SECTION BERITA & ARTIKEL (EDUCATIONAL NEWS PORTAL LAYOUT)
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-stone-200 pb-4 mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-semibold text-[#0284C7] uppercase tracking-wider block">
              Publikasi Akademik & Kabar
            </span>
            <h2 className="font-serif-academic text-3xl sm:text-4xl font-bold text-[#0F172A] tracking-tight mt-1">
              Warta & Artikel Edukasi
            </h2>
          </div>
          <button
            onClick={() => {
              onNavigate('/artikel');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-xs sm:text-sm font-semibold text-[#0284C7] hover:text-[#0369A1] inline-flex items-center space-x-1 group cursor-pointer"
          >
            <span>Buka Seluruh Arsip Artikel</span>
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Academic Journal Layout List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredArticles.map((article) => (
            <article 
              key={article.id} 
              className="bg-white border border-stone-200 rounded-lg p-5 flex flex-col justify-between hover:border-stone-400 transition-colors"
            >
              <div className="space-y-3.5">
                <div className="relative overflow-hidden rounded-md bg-stone-100 aspect-16/10">
                  <OptimizedImage
                    src={article.featuredImage}
                    alt={article.featuredImageAlt}
                    width={500}
                    height={310}
                    aspectRatio="16/10"
                    className="w-full h-full object-cover hover:scale-103 transition-transform duration-500"
                  />
                  <span className="absolute top-2 left-2 bg-[#0284C7] text-white text-[10px] font-semibold px-2 py-0.5 rounded-sm">
                    {article.category}
                  </span>
                </div>

                <div className="text-[11px] text-stone-500 font-mono">
                  {article.publishedDate}
                </div>

                <h3 className="font-serif-academic text-lg font-bold text-[#0F172A] leading-snug line-clamp-2">
                  <button
                    onClick={() => {
                      onNavigate(`/artikel/${article.slug}`);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-left hover:text-[#0284C7] transition-colors cursor-pointer"
                  >
                    {article.title}
                  </button>
                </h3>

                <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-stone-100 mt-4">
                <button
                  onClick={() => {
                    onNavigate(`/artikel/${article.slug}`);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-xs font-semibold text-[#0284C7] hover:text-[#0369A1] inline-flex items-center group cursor-pointer"
                >
                  <span>Baca selengkapnya</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* =========================================================================
          7. SECTION KEGIATAN / GALERI VISUAL (MODERN MASONRY / ASYMMETRIC)
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-stone-200 pb-4 mb-8 flex justify-between items-end">
          <div>
            <span className="text-xs font-semibold text-[#0284C7] uppercase tracking-wider block">
              Dokumentasi Lembaga
            </span>
            <h2 className="font-serif-academic text-3xl sm:text-4xl font-bold text-[#0F172A] tracking-tight mt-1">
              Aktivitas Nyata Pembelajaran
            </h2>
          </div>
          <button
            onClick={() => {
              onNavigate('/kegiatan');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-xs sm:text-sm font-semibold text-[#0284C7] hover:text-[#0369A1] inline-flex items-center space-x-1 cursor-pointer"
          >
            <span>Buka Galeri Lengkap →</span>
          </button>
        </div>

        {/* Visual Showcase Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Item 1 */}
          <div className="group bg-white border border-stone-200 rounded-lg p-2.5 hover:border-stone-400 transition-colors">
            <div className="relative overflow-hidden rounded-md aspect-4/3 bg-stone-100">
              <OptimizedImage
                src="https://blogger.googleusercontent.com/img/a/AVvXsEj3KzyMrdZuYBjAw8e-FrwdZYX1a7daYs3D7gYWaaTBpU4-FK9BVqOf6c1hsvfQ9v18h2C9oQySaNhTFUxINvOkSJzSDC45hGircCQCaWGNL5nKyrDalbnbS87KWAg-Yc_q-B3ocXP2Y80IdiuRxzQlFHycAINfPZEBUHAnr-nMgQNSCuxjYk9X-0IT-leO"
                alt="Pelaksanaan Asesmen Nasional Berbasis Komputer ANBK di PKBM Celah Cahaya"
                width={600}
                height={450}
                aspectRatio="4/3"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="pt-2 px-1">
              <span className="text-[10px] font-bold text-[#0284C7] uppercase tracking-wider block">
                Akademik & Ujian
              </span>
              <div className="font-semibold text-xs text-stone-800 mt-0.5">
                Simulasi Asesmen Nasional (ANBK)
              </div>
              <p className="text-[11px] text-stone-500 mt-0.5 line-clamp-2">
                Uji kesetaraan berbasis komputer di lab PKBM Celah Cahaya Singajaya.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="group bg-white border border-stone-200 rounded-lg p-2.5 hover:border-stone-400 transition-colors">
            <div className="relative overflow-hidden rounded-md aspect-4/3 bg-stone-100">
              <OptimizedImage
                src="https://blogger.googleusercontent.com/img/a/AVvXsEh2JnJiq3Y_dqrzfd779kKJ10iU0TWU7dP1OLgQf3V_M3dBQjM98B_RNJHJl5XqmksfpT3GYyUvsamlERFs6UCLL1F7BsZ2ACPzJERjW9TDlwVwXwykRGsgDm0-80mOI5PFCau0OFAVWHw2W04WxeFxP3pJwa_ovzZwCYJV-3viArIL4wKEQsRyMCmqFjrO"
                alt="Workshop Vokasi AI dan digital marketing untuk wirausaha warga belajar Garut"
                width={600}
                height={450}
                aspectRatio="4/3"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="pt-2 px-1">
              <span className="text-[10px] font-bold text-[#0284C7] uppercase tracking-wider block">
                Vokasi Terapan
              </span>
              <div className="font-semibold text-xs text-stone-800 mt-0.5">
                Pelatihan Literasi AI & Wirausaha
              </div>
              <p className="text-[11px] text-stone-500 mt-0.5 line-clamp-2">
                Pemanfaatan teknologi digital untuk promosi produk lokal Garut.
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="group bg-white border border-stone-200 rounded-lg p-2.5 hover:border-stone-400 transition-colors">
            <div className="relative overflow-hidden rounded-md aspect-4/3 bg-stone-100">
              <OptimizedImage
                src="https://blogger.googleusercontent.com/img/a/AVvXsEjO1GDsk9htNZC5gmuAlLN8btBxcF2jRQvAA01v1vdDlXK0YGWie4lf1V7NCH5y_IHPL5VpFOi-6vSJRNmfJA_zA_HFuVUL29ebu47x7G3iWTYMJG1miGAzHU_zMGiu44r6UAcQVuLCDFx-_9hBUyKXKtT7rbyDMruNLdwnuEHtBgR6Ac_TiK3xYBlPleUX"
                alt="Momen pelepasan dan wisuda kelulusan warga belajar PKBM Celah Cahaya"
                width={600}
                height={450}
                aspectRatio="4/3"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="pt-2 px-1">
              <span className="text-[10px] font-bold text-[#0284C7] uppercase tracking-wider block">
                Kelulusan Resmi
              </span>
              <div className="font-semibold text-xs text-stone-800 mt-0.5">
                Wisuda Warga Belajar Paket B & C
              </div>
              <p className="text-[11px] text-stone-500 mt-0.5 line-clamp-2">
                Penerimaan ijazah negara yang dihadiri Dinas Pendidikan Garut.
              </p>
            </div>
          </div>

          {/* Item 4 */}
          <div className="group bg-white border border-stone-200 rounded-lg p-2.5 hover:border-stone-400 transition-colors">
            <div className="relative overflow-hidden rounded-md aspect-4/3 bg-stone-100">
              <OptimizedImage
                src="https://blogger.googleusercontent.com/img/a/AVvXsEhzv92AS5x8T1d_yb03d3eYhx3USNhsOvsALrZ4FYuxa00Fx_KAH57hsFQSQnjdLF7DyNY23kBY-fd6MHc0pM4mcN4xF0I771mx_vMr-AvFAt975RccG7QTHROLqfknUNqaDLlNrtRzyQZyjc4a9JH-SXkIdtqP0htlJ0sk0EhQ-aut1b9fzx7iwllAoGV8"
                alt="Sesi bimbingan konseling dan UTBK masuk perguruan tinggi negeri"
                width={600}
                height={450}
                aspectRatio="4/3"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="pt-2 px-1">
              <span className="text-[10px] font-bold text-[#0284C7] uppercase tracking-wider block">
                Bimbingan Karier
              </span>
              <div className="font-semibold text-xs text-stone-800 mt-0.5">
                Persiapan Masuk PTN & UTBK
              </div>
              <p className="text-[11px] text-stone-500 mt-0.5 line-clamp-2">
                Konseling penjurusan dan strategi lolos seleksi perguruan tinggi negeri.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          8. INSTITUTIONAL CALL TO ACTION (CTA)
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0B192C] border border-stone-800 rounded-xl p-8 sm:p-14 text-white text-center space-y-6 relative overflow-hidden">
          
          <div className="max-w-3xl mx-auto space-y-3 relative z-10">
            <div className="inline-flex items-center space-x-2 text-sky-300 text-xs font-semibold tracking-wider uppercase border border-sky-800/80 bg-sky-950/40 px-3 py-1 rounded-sm">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Tahun Ajaran 2026/2027 Dibuka</span>
            </div>

            <h2 className="font-serif-academic text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Mulai Perjalanan Pendidikan Anda
            </h2>

            <p className="text-sm sm:text-base text-stone-300 max-w-xl mx-auto font-normal leading-relaxed">
              Temukan program yang sesuai dan bergabung bersama komunitas pembelajar kami. Layanan pendaftaran resmi, konsultasi kurikulum, dan informasi beasiswa selalu terbuka.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 pt-2 relative z-10">
            <button
              onClick={() => {
                onNavigate('/pendaftaran');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-8 py-3.5 rounded-md font-semibold text-sm bg-[#0284C7] hover:bg-[#0369A1] text-white transition-colors duration-150 border border-[#0369A1] shadow-xs cursor-pointer"
            >
              Daftar Sekarang
            </button>
            <a
              href={`https://wa.me/${INSTITUTION_INFO.whatsapp}?text=Halo%20Admin%20PKBM%20Celah%20Cahaya,%20saya%20ingin%20berkonsultasi%20mengenai%20pendaftaran%20Paket%20B%20dan%20Paket%20C.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 rounded-md font-medium text-sm bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700 transition-colors duration-150 inline-flex items-center justify-center space-x-2"
            >
              <Phone className="w-4 h-4 text-sky-300" />
              <span>Hubungi Kami via WhatsApp</span>
            </a>
          </div>

          <div className="pt-4 text-xs text-stone-400 font-mono relative z-10 border-t border-stone-800/80 max-w-lg mx-auto">
            Singajaya, Garut, Jawa Barat • NPSN: {INSTITUTION_INFO.npsn} • SK: {INSTITUTION_INFO.skNumber}
          </div>
        </div>
      </section>

    </div>
  );
};
