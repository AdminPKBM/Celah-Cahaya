import React from 'react';
import { 
  GraduationCap, MapPin, Phone, Mail, Clock, ShieldCheck, 
  ExternalLink, ChevronRight, FileCheck, Globe, Lock
} from 'lucide-react';
import { INSTITUTION_INFO } from '../data/mockData';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (path: string) => {
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#07111F] text-slate-300 border-t border-slate-800" aria-label="Footer Resmi Institusi">
      {/* Top Accreditation & Regional Coverage Strip */}
      <div className="border-b border-slate-800/80 bg-[#0B192C] py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3.5">
            <div className="w-10 h-10 rounded-sm bg-[#0284C7] border border-[#0369A1] flex items-center justify-center text-white shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-white font-serif-academic text-base font-bold tracking-tight">
                Satuan Pendidikan Kesetaraan Terakreditasi Resmi (DIKMAS)
              </div>
              <div className="text-xs text-slate-400 mt-0.5 flex flex-wrap gap-x-2">
                <span>NPSN: <span className="text-stone-100 font-mono font-semibold">{INSTITUTION_INFO.npsn}</span></span>
                <span>•</span>
                <span>SK Operasional: <span className="text-stone-200">{INSTITUTION_INFO.skNumber}</span></span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-400">
            <span className="text-slate-500 mr-1">Wilayah Layanan:</span>
            {['Singajaya', 'Peundeuy', 'Cikajang', 'Banjarwangi', 'Cisurupan', 'Kabupaten Garut', 'Kelas Fleksibel'].map((area, i) => (
              <span key={i} className="bg-slate-900 text-slate-300 px-2.5 py-1 rounded-sm border border-slate-800 text-[11px]">
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main Multi-Column Institutional Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          
          {/* Kolom 1: Tentang Lembaga */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 flex items-center justify-center shrink-0">
                <img 
                  src="https://i.ibb.co.com/FL9BY0jW/LOGO-PKBM-CELAH-CAHAYA-1-1-1.webp" 
                  alt="Logo Resmi PKBM Celah Cahaya" 
                  width={40} 
                  height={40} 
                  className="w-full h-full object-contain drop-shadow-xs"
                />
              </div>
              <span className="font-serif-academic text-lg font-bold text-white tracking-tight">
                PKBM Celah Cahaya
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-normal">
              Pusat Kegiatan Belajar Masyarakat (PKBM) resmi di Garut yang menyelenggarakan pendidikan kesetaraan Paket A, Paket B, dan Paket C secara fleksibel, bermutu, serta membekali peserta didik dengan keterampilan terapan yang bermanfaat.
            </p>
            <div className="space-y-1.5 text-xs text-slate-400 pt-1">
              <div><strong>Status:</strong> Satuan Pendidikan Nonformal Swasta</div>
              <div><strong>NPSN:</strong> {INSTITUTION_INFO.npsn}</div>
              <div><strong>SK Izin:</strong> {INSTITUTION_INFO.skNumber}</div>
              <div><strong>TMT SK:</strong> 22 Juli 2019</div>
            </div>
          </div>

          {/* Kolom 2: Program Pendidikan */}
          <div className="space-y-3">
            <h3 className="font-serif-academic text-sm font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Program Pendidikan
            </h3>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button 
                  onClick={() => handleNav('/program/paket-b')} 
                  className="hover:text-white transition-colors flex items-center space-x-1.5 text-left"
                >
                  <ChevronRight className="w-3 h-3 text-[#0284C7]" />
                  <span>Paket B (Setara SMP / MTs)</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('/program/paket-c')} 
                  className="hover:text-white text-stone-200 font-semibold transition-colors flex items-center space-x-1.5 text-left"
                >
                  <ChevronRight className="w-3 h-3 text-[#0284C7]" />
                  <span>Paket C (Setara SMA - IPA / IPS)</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('/program/vokasi-ai')} 
                  className="hover:text-white transition-colors flex items-center space-x-1.5 text-left"
                >
                  <ChevronRight className="w-3 h-3 text-[#0284C7]" />
                  <span>Keterampilan Vokasi & Digital</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('/program')} 
                  className="hover:text-white transition-colors flex items-center space-x-1.5 text-left"
                >
                  <ChevronRight className="w-3 h-3 text-[#0284C7]" />
                  <span>Informasi Kurikulum & Modul</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('/beasiswa')} 
                  className="hover:text-white transition-colors flex items-center space-x-1.5 text-left"
                >
                  <ChevronRight className="w-3 h-3 text-[#0284C7]" />
                  <span>Beasiswa Program Indonesia Pintar (KIP)</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('/pendaftaran')} 
                  className="hover:text-white transition-colors flex items-center space-x-1.5 text-left text-sky-300 font-medium"
                >
                  <ChevronRight className="w-3 h-3 text-[#0284C7]" />
                  <span>Pendaftaran Warga Belajar Baru</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Informasi & Warta */}
          <div className="space-y-3">
            <h3 className="font-serif-academic text-sm font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Informasi & Riset
            </h3>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button 
                  onClick={() => handleNav('/artikel')} 
                  className="hover:text-white transition-colors flex items-center space-x-1.5 text-left"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>Warta Berita & Artikel Edukasi</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('/panduan')} 
                  className="hover:text-white transition-colors flex items-center space-x-1.5 text-left"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>Panduan Pendidikan Kesetaraan</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('/artikel/apakah-ijazah-paket-c-bisa-kuliah-negeri')} 
                  className="hover:text-white transition-colors flex items-center space-x-1.5 text-left"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>Ketentuan Masuk Perguruan Tinggi Negeri</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('/kegiatan')} 
                  className="hover:text-white transition-colors flex items-center space-x-1.5 text-left"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>Dokumentasi Kegiatan & ANBK</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('/faq')} 
                  className="hover:text-white transition-colors flex items-center space-x-1.5 text-left"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>Tanya Jawab Seputar Kesetaraan (FAQ)</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('/tentang')} 
                  className="hover:text-white transition-colors flex items-center space-x-1.5 text-left"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>Dewan Tutor & Tenaga Pendidik</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Kolom 4: Hubungi Kami */}
          <div className="space-y-3">
            <h3 className="font-serif-academic text-sm font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Hubungi Kami
            </h3>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>{INSTITUTION_INFO.address}</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <a 
                  href={`https://wa.me/${INSTITUTION_INFO.whatsapp}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-colors font-medium text-stone-200"
                >
                  {INSTITUTION_INFO.phone} (WhatsApp Resmi)
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <span>{INSTITUTION_INFO.email}</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Clock className="w-4 h-4 text-sky-400 shrink-0" />
                <span>{INSTITUTION_INFO.operationalHours}</span>
              </div>
              <div className="pt-2">
                <button
                  onClick={() => handleNav('/admin-cms')}
                  className="inline-flex items-center space-x-1.5 text-slate-500 hover:text-slate-300 text-[11px] font-mono transition-colors"
                >
                  <Lock className="w-3 h-3" />
                  <span>Portal Pengelola Lembaga</span>
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bagian Bawah: Hak Cipta, Kebijakan Privasi, Syarat, Sitemap, Disclaimer Resmi */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div className="text-center md:text-left space-y-1">
            <p>© {new Date().getFullYear()} PKBM Celah Cahaya Garut (celahcahaya.sch.id). Seluruh Hak Cipta Dilindungi Undang-Undang.</p>
            <p className="text-[11px] text-slate-600">
              Catatan: Ijazah pendidikan kesetaraan Paket A, Paket B, dan Paket C diterbitkan secara resmi melalui Kemendikbudristek RI dengan pengakuan hukum yang setara dengan sekolah formal.
            </p>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-[11px]">
            <button onClick={() => handleNav('/tentang')} className="hover:text-slate-300 transition-colors">
              Profil & Legalitas
            </button>
            <span>•</span>
            <button onClick={() => handleNav('/faq')} className="hover:text-slate-300 transition-colors">
              FAQ & Kebijakan
            </button>
            <span>•</span>
            <button onClick={() => handleNav('/sitemap')} className="hover:text-slate-300 transition-colors">
              Sitemap
            </button>
            <span>•</span>
            <a href="/robots.txt" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 inline-flex items-center space-x-1">
              <span>Robots</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
