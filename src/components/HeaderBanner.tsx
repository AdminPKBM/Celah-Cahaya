import React from 'react';
import { ShieldCheck, Phone, MapPin, FileCheck } from 'lucide-react';
import { INSTITUTION_INFO } from '../data/mockData';

interface HeaderBannerProps {
  onNavigate: (path: string) => void;
  imageUrl?: string;
  webpUrl?: string;
}

export const HeaderBanner: React.FC<HeaderBannerProps> = ({
  onNavigate,
  imageUrl,
  webpUrl
}) => {
  return (
    <header className="w-full bg-[#0B192C] text-slate-300 transition-all border-b border-slate-800/80" aria-label="Identitas Lembaga Resmi">
      {/* Top Academic Credibility Strip */}
      <div className="text-[11px] sm:text-xs py-1.5 sm:py-2 px-3 sm:px-6 lg:px-8 tracking-normal">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-1.5 sm:gap-2 text-center md:text-left">
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-x-2 sm:gap-x-3 gap-y-0.5">
            <span className="inline-flex items-center text-sky-300 font-semibold tracking-wide">
              <ShieldCheck className="w-3.5 h-3.5 mr-1 text-sky-400 shrink-0" />
              <span>NPSN:</span> <span className="text-white ml-1 font-mono font-bold">{INSTITUTION_INFO.npsn}</span>
            </span>
            <span className="text-slate-600 hidden xs:inline">•</span>
            <span className="inline-flex items-center text-slate-300 font-normal hidden sm:inline-flex">
              <FileCheck className="w-3.5 h-3.5 mr-1 text-amber-400 shrink-0" />
              <span>SK:</span> <span className="text-slate-100 ml-1">{INSTITUTION_INFO.skNumber}</span>
            </span>
            <span className="text-slate-600 hidden md:inline">•</span>
            <span className="inline-flex items-center text-slate-400">
              <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1 text-sky-400/80 shrink-0" />
              <span>Singajaya, Garut</span>
            </span>
          </div>
          <div className="flex items-center justify-center space-x-2 sm:space-x-3 text-[11px] sm:text-xs">
            <span className="text-slate-400 hidden lg:inline font-normal">Pendidikan Kesetaraan DIKMAS</span>
            <a 
              href={`https://wa.me/${INSTITUTION_INFO.whatsapp}?text=Halo%20Admin%20PKBM%20Celah%20Cahaya,%20saya%20ingin%20tanya%20informasi%20pendidikan%20kesetaraan.`}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-slate-200 hover:text-white transition-all font-medium bg-slate-800/80 hover:bg-[#0284C7] px-2.5 sm:px-3 py-1 rounded-md border border-slate-700 hover:border-[#0284C7] shadow-xs active:scale-95"
            >
              <Phone className="w-3 h-3 mr-1 shrink-0 text-amber-300" />
              <span>WA: {INSTITUTION_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

