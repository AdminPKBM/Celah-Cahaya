import React, { useState, useRef, useEffect } from 'react';
import { 
  Menu, X, ChevronDown, GraduationCap,
  Search, Lock, Sparkles, BookOpen, Award, HelpCircle, Camera, Phone
} from 'lucide-react';
import { INSTITUTION_INFO } from '../data/mockData';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [programsDropdownOpen, setProgramsDropdownOpen] = useState(false);
  const [infoDropdownOpen, setInfoDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  const handleNav = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    setProgramsDropdownOpen(false);
    setInfoDropdownOpen(false);
    setIsSearchOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onNavigate(`/artikel?search=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200/90 transition-all shadow-xs" aria-label="Navigasi Utama Lembaga">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Kiri: Logo Lembaga, Nama, Tagline Singkat */}
          <button 
            onClick={() => handleNav('/')} 
            className="flex items-center space-x-2.5 sm:space-x-3.5 text-left group focus:outline-hidden cursor-pointer min-w-0"
            aria-label="Beranda PKBM Celah Cahaya"
          >
            {/* Official Institutional Logo */}
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center shrink-0">
              <img 
                src="https://i.ibb.co.com/FL9BY0jW/LOGO-PKBM-CELAH-CAHAYA-1-1-1.webp" 
                alt="Logo Resmi PKBM Celah Cahaya" 
                width={48} 
                height={48} 
                className="w-full h-full object-contain drop-shadow-xs group-hover:scale-105 transition-transform duration-200"
              />
            </div>

            <div className="min-w-0">
              <div className="flex items-baseline space-x-2">
                <span className="font-serif-academic text-lg sm:text-2xl font-bold tracking-tight text-[#0F172A] group-hover:text-[#0284C7] transition-colors leading-tight truncate block">
                  PKBM Celah Cahaya
                </span>
              </div>
              <span className="block text-[10px] sm:text-[11px] font-medium text-stone-500 tracking-wider uppercase truncate">
                <span className="hidden sm:inline">Pusat Kegiatan Belajar Masyarakat • </span>Garut
              </span>
            </div>
          </button>

          {/* Kanan: Navigasi Institusi (Desktop) */}
          <div className="hidden xl:flex items-center space-x-1 font-medium text-[14px] text-stone-700">
            {/* Beranda */}
            <button
              onClick={() => handleNav('/')}
              className={`px-3 py-2 rounded-md transition-colors ${
                currentPath === '/' 
                  ? 'text-[#0284C7] font-semibold border-b-2 border-[#0284C7] rounded-b-none' 
                  : 'hover:text-[#0284C7] hover:bg-stone-50'
              }`}
            >
              Beranda
            </button>

            {/* Tentang */}
            <button
              onClick={() => handleNav('/tentang')}
              className={`px-3 py-2 rounded-md transition-colors ${
                currentPath === '/tentang' 
                  ? 'text-[#0284C7] font-semibold border-b-2 border-[#0284C7] rounded-b-none' 
                  : 'hover:text-[#0284C7] hover:bg-stone-50'
              }`}
            >
              Tentang
            </button>

            {/* Program (Dropdown) */}
            <div 
              className="relative"
              onMouseEnter={() => setProgramsDropdownOpen(true)}
              onMouseLeave={() => setProgramsDropdownOpen(false)}
            >
              <button
                onClick={() => handleNav('/program')}
                className={`px-3 py-2 rounded-md transition-colors inline-flex items-center space-x-1 ${
                  currentPath.startsWith('/program') 
                    ? 'text-[#0284C7] font-semibold border-b-2 border-[#0284C7] rounded-b-none' 
                    : 'hover:text-[#0284C7] hover:bg-stone-50'
                }`}
              >
                <span>Program</span>
                <ChevronDown className="w-3.5 h-3.5 text-stone-400" />
              </button>

              {programsDropdownOpen && (
                <div className="absolute left-0 mt-0.5 w-64 rounded-lg bg-white border border-stone-200 shadow-xl py-2 z-50 animate-in fade-in duration-150 text-left">
                  <div className="px-4 py-2 text-[11px] font-bold text-stone-400 uppercase tracking-wider border-b border-stone-100">
                    Jenjang Kesetaraan & Vokasi
                  </div>
                  <button
                    onClick={() => handleNav('/program')}
                    className="w-full text-left px-4 py-2.5 text-xs text-stone-700 hover:bg-stone-50 hover:text-[#0284C7] font-medium"
                  >
                    Ikhtisar Seluruh Program →
                  </button>
                  <button
                    onClick={() => handleNav('/program/paket-b')}
                    className="w-full text-left px-4 py-2 hover:bg-stone-50 text-stone-800 transition-colors"
                  >
                    <div className="font-semibold text-xs text-[#0F172A]">Paket B (Setara SMP)</div>
                    <div className="text-[11px] text-stone-500">Ijazah Resmi Kemendikbudristek</div>
                  </button>
                  <button
                    onClick={() => handleNav('/program/paket-c')}
                    className="w-full text-left px-4 py-2 hover:bg-stone-50 text-stone-800 transition-colors"
                  >
                    <div className="font-semibold text-xs text-[#0284C7]">Paket C (Setara SMA)</div>
                    <div className="text-[11px] text-stone-500">Bisa Kuliah PTN & Ikut CPNS</div>
                  </button>
                  <button
                    onClick={() => handleNav('/program/vokasi-ai')}
                    className="w-full text-left px-4 py-2 hover:bg-stone-50 text-stone-800 transition-colors border-t border-stone-100 mt-1"
                  >
                    <div className="font-semibold text-xs text-[#0F172A]">Keahlian Vokasi & Digital</div>
                    <div className="text-[11px] text-stone-500">Keterampilan Komputer & Usaha Mandiri</div>
                  </button>
                </div>
              )}
            </div>

            {/* Pendidikan (Panduan & Kurikulum) */}
            <button
              onClick={() => handleNav('/panduan')}
              className={`px-3 py-2 rounded-md transition-colors ${
                currentPath === '/panduan' 
                  ? 'text-[#0284C7] font-semibold border-b-2 border-[#0284C7] rounded-b-none' 
                  : 'hover:text-[#0284C7] hover:bg-stone-50'
              }`}
            >
              Pendidikan
            </button>

            {/* Berita (Artikel & Publikasi) */}
            <button
              onClick={() => handleNav('/artikel')}
              className={`px-3 py-2 rounded-md transition-colors ${
                currentPath.startsWith('/artikel') 
                  ? 'text-[#0284C7] font-semibold border-b-2 border-[#0284C7] rounded-b-none' 
                  : 'hover:text-[#0284C7] hover:bg-stone-50'
              }`}
            >
              Berita
            </button>

            {/* Informasi (Dropdown) */}
            <div 
              className="relative"
              onMouseEnter={() => setInfoDropdownOpen(true)}
              onMouseLeave={() => setInfoDropdownOpen(false)}
            >
              <button
                className={`px-3 py-2 rounded-md transition-colors inline-flex items-center space-x-1 ${
                  ['/beasiswa', '/kegiatan', '/faq'].includes(currentPath)
                    ? 'text-[#0284C7] font-semibold border-b-2 border-[#0284C7] rounded-b-none' 
                    : 'hover:text-[#0284C7] hover:bg-stone-50'
                }`}
              >
                <span>Informasi</span>
                <ChevronDown className="w-3.5 h-3.5 text-stone-400" />
              </button>

              {infoDropdownOpen && (
                <div className="absolute left-0 mt-0.5 w-60 rounded-lg bg-white border border-stone-200 shadow-xl py-2 z-50 animate-in fade-in duration-150 text-left">
                  <button
                    onClick={() => handleNav('/beasiswa')}
                    className="w-full text-left px-4 py-2 hover:bg-stone-50 text-stone-800 transition-colors flex items-center space-x-2"
                  >
                    <Award className="w-4 h-4 text-[#F59E0B]" />
                    <div>
                      <div className="text-xs font-semibold">Beasiswa KIP</div>
                      <div className="text-[11px] text-stone-500">Bantuan Biaya Pendidikan</div>
                    </div>
                  </button>
                  <button
                    onClick={() => handleNav('/kegiatan')}
                    className="w-full text-left px-4 py-2 hover:bg-stone-50 text-stone-800 transition-colors flex items-center space-x-2"
                  >
                    <Camera className="w-4 h-4 text-stone-500" />
                    <div>
                      <div className="text-xs font-semibold">Galeri & Kegiatan</div>
                      <div className="text-[11px] text-stone-500">Dokumentasi Pembelajaran</div>
                    </div>
                  </button>
                  <button
                    onClick={() => handleNav('/faq')}
                    className="w-full text-left px-4 py-2 hover:bg-stone-50 text-stone-800 transition-colors flex items-center space-x-2"
                  >
                    <HelpCircle className="w-4 h-4 text-stone-500" />
                    <div>
                      <div className="text-xs font-semibold">Tanya Jawab (FAQ)</div>
                      <div className="text-[11px] text-stone-500">Pertanyaan Seputar Kesetaraan</div>
                    </div>
                  </button>
                </div>
              )}
            </div>

            {/* Kontak */}
            <button
              onClick={() => handleNav('/kontak')}
              className={`px-3 py-2 rounded-md transition-colors ${
                currentPath === '/kontak' 
                  ? 'text-[#0284C7] font-semibold border-b-2 border-[#0284C7] rounded-b-none' 
                  : 'hover:text-[#0284C7] hover:bg-stone-50'
              }`}
            >
              Kontak
            </button>
          </div>

          {/* Action Tools: Search, Login/Dashboard, and CTA */}
          <div className="hidden lg:flex items-center space-x-2.5">
            {/* Search Button & Input */}
            <div className="relative">
              {isSearchOpen ? (
                <form onSubmit={handleSearchSubmit} className="flex items-center animate-in fade-in duration-200">
                  <input
                    ref={searchInputRef}
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Cari program, berita, panduan..."
                    className="w-56 px-3 py-1.5 text-xs bg-stone-100 border border-stone-300 rounded-md focus:outline-hidden focus:ring-1 focus:ring-[#0284C7] focus:border-[#0284C7]"
                  />
                  <button 
                    type="button" 
                    onClick={() => setIsSearchOpen(false)}
                    aria-label="Tutup pencarian"
                    className="ml-1 p-1 text-stone-400 hover:text-stone-700"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </form>
              ) : (
                <button
                  onClick={() => setIsSearchOpen(true)}
                  aria-label="Cari artikel dan informasi"
                  title="Cari materi dan informasi"
                  className="p-2 text-stone-600 hover:text-[#0284C7] hover:bg-stone-100 rounded-md transition-colors"
                >
                  <Search className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Tombol Login / Dashboard Pengelola */}
            <button
              onClick={() => handleNav('/admin-cms')}
              className="inline-flex items-center space-x-1 px-3 py-1.5 text-xs font-medium text-stone-700 hover:text-[#0284C7] hover:bg-stone-100 rounded-md transition-colors border border-stone-200"
              title="Portal Pengelola & Manajemen Lembaga"
              aria-label="Login Pengelola Lembaga"
            >
              <Lock className="w-3.5 h-3.5 text-stone-500" />
              <span>Login Pengelola</span>
            </button>

            {/* CTA Pendaftaran - Institutional Harvard Crimson Accent */}
            <button
              onClick={() => handleNav('/pendaftaran')}
              className="px-4 py-2 rounded-md font-semibold text-xs tracking-wide bg-[#0284C7] hover:bg-[#0369A1] text-white shadow-xs transition-colors border border-[#0369A1] cursor-pointer"
            >
              Daftar Sekarang
            </button>
          </div>

          {/* Mobile Hamburger & Search Buttons */}
          <div className="flex xl:hidden items-center space-x-1 sm:space-x-2">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              aria-label="Buka pencarian"
              className="w-11 h-11 flex items-center justify-center text-stone-600 hover:text-[#0284C7] hover:bg-stone-100 rounded-lg transition-colors cursor-pointer"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-11 h-11 flex items-center justify-center rounded-lg text-stone-700 hover:bg-stone-100 focus:outline-hidden active:scale-95 transition-transform cursor-pointer"
              aria-label={mobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-rose-600" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Search Bar Dropdown (if triggered on mobile) */}
      {isSearchOpen && (
        <div className="xl:hidden px-4 py-3 bg-stone-50 border-t border-stone-200">
          <form onSubmit={handleSearchSubmit} className="flex items-center space-x-2">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari program, berita, kurikulum..."
              className="flex-1 px-3.5 py-2.5 text-base sm:text-xs bg-white border border-stone-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#0284C7]"
              autoFocus
            />
            <button 
              type="submit" 
              className="px-4 py-2.5 bg-[#0284C7] text-white text-xs rounded-lg font-semibold min-h-[44px] flex items-center justify-center"
            >
              Cari
            </button>
          </form>
        </div>
      )}

      {/* Mobile Menu Sliding Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-stone-200 bg-white px-4 pt-3 pb-8 space-y-1.5 shadow-xl animate-in slide-in-from-top-2 duration-200 max-h-[calc(100vh-5rem)] overflow-y-auto overscroll-contain">
          <div className="pb-1 text-[11px] font-bold text-stone-400 uppercase tracking-wider px-2">
            Menu Navigasi
          </div>
          <button
            onClick={() => handleNav('/')}
            className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-medium min-h-[44px] flex items-center space-x-3 transition-colors ${
              currentPath === '/' ? 'text-[#0284C7] bg-sky-50 font-semibold' : 'text-stone-800 hover:bg-stone-50'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#0284C7] shrink-0" />
            <span>Beranda</span>
          </button>
          <button
            onClick={() => handleNav('/tentang')}
            className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-medium min-h-[44px] flex items-center space-x-3 transition-colors ${
              currentPath === '/tentang' ? 'text-[#0284C7] bg-sky-50 font-semibold' : 'text-stone-800 hover:bg-stone-50'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#0284C7] shrink-0" />
            <span>Tentang Lembaga</span>
          </button>
          <button
            onClick={() => handleNav('/program')}
            className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-medium min-h-[44px] flex items-center space-x-3 transition-colors ${
              currentPath.startsWith('/program') ? 'text-[#0284C7] bg-sky-50 font-semibold' : 'text-stone-800 hover:bg-stone-50'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#0284C7] shrink-0" />
            <span>Program Pendidikan Kesetaraan</span>
          </button>
          <button
            onClick={() => handleNav('/panduan')}
            className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-medium min-h-[44px] flex items-center space-x-3 transition-colors ${
              currentPath === '/panduan' ? 'text-[#0284C7] bg-sky-50 font-semibold' : 'text-stone-800 hover:bg-stone-50'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#0284C7] shrink-0" />
            <span>Pusat Panduan & Kurikulum</span>
          </button>
          <button
            onClick={() => handleNav('/artikel')}
            className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-medium min-h-[44px] flex items-center space-x-3 transition-colors ${
              currentPath.startsWith('/artikel') ? 'text-[#0284C7] bg-sky-50 font-semibold' : 'text-stone-800 hover:bg-stone-50'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#0284C7] shrink-0" />
            <span>Berita & Artikel Edukasi</span>
          </button>
          <button
            onClick={() => handleNav('/beasiswa')}
            className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-medium min-h-[44px] flex items-center space-x-3 transition-colors ${
              currentPath === '/beasiswa' ? 'text-[#0284C7] bg-sky-50 font-semibold' : 'text-stone-800 hover:bg-stone-50'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#0284C7] shrink-0" />
            <span>Informasi Beasiswa KIP</span>
          </button>
          <button
            onClick={() => handleNav('/kegiatan')}
            className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-medium min-h-[44px] flex items-center space-x-3 transition-colors ${
              currentPath === '/kegiatan' ? 'text-[#0284C7] bg-sky-50 font-semibold' : 'text-stone-800 hover:bg-stone-50'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#0284C7] shrink-0" />
            <span>Dokumentasi Kegiatan</span>
          </button>
          <button
            onClick={() => handleNav('/faq')}
            className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-medium min-h-[44px] flex items-center space-x-3 transition-colors ${
              currentPath === '/faq' ? 'text-[#0284C7] bg-sky-50 font-semibold' : 'text-stone-800 hover:bg-stone-50'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#0284C7] shrink-0" />
            <span>Tanya Jawab (FAQ)</span>
          </button>
          <button
            onClick={() => handleNav('/kontak')}
            className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-medium min-h-[44px] flex items-center space-x-3 transition-colors ${
              currentPath === '/kontak' ? 'text-[#0284C7] bg-sky-50 font-semibold' : 'text-stone-800 hover:bg-stone-50'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#0284C7] shrink-0" />
            <span>Kontak & Lokasi Lembaga</span>
          </button>

          <div className="pt-3 border-t border-stone-200 space-y-2.5">
            <button
              onClick={() => handleNav('/pendaftaran')}
              className="w-full py-3.5 rounded-xl bg-[#0284C7] hover:bg-[#0369A1] active:scale-98 text-white text-sm font-bold text-center shadow-md transition-all flex items-center justify-center space-x-2 min-h-[44px]"
            >
              <span>Daftar Warga Belajar Baru</span>
            </button>
            <button
              onClick={() => handleNav('/admin-cms')}
              className="w-full py-3 rounded-xl bg-stone-100 hover:bg-stone-200 active:scale-98 text-stone-700 text-xs font-semibold text-center transition-all flex items-center justify-center space-x-2 min-h-[44px]"
            >
              <Lock className="w-4 h-4 text-stone-500" />
              <span>Login Portal Pengelola Lembaga</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
