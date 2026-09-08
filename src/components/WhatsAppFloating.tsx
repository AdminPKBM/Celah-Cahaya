import React, { useState } from 'react';
import { MessageCircle, X, CheckCircle2 } from 'lucide-react';
import { INSTITUTION_INFO } from '../data/mockData';

export const WhatsAppFloating: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const defaultMessage = encodeURIComponent(
    'Halo Admin Celah Cahaya, saya ingin konsultasi mengenai program pendidikan kesetaraan (Paket A / Paket B / Paket C).'
  );

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40">
      {/* Popover Card */}
      {isOpen && (
        <div className="mb-3 w-[calc(100vw-2rem)] max-w-xs sm:w-80 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-3 duration-200">
          {/* Header */}
          <div className="bg-emerald-600 p-3.5 sm:p-4 text-white flex justify-between items-start">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-white p-1 flex items-center justify-center shrink-0 shadow-xs">
                <img
                  src="https://i.ibb.co.com/FL9BY0jW/LOGO-PKBM-CELAH-CAHAYA-1-1-1.webp"
                  alt="PKBM Celah Cahaya"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h4 className="font-bold text-sm leading-tight">Konsultasi Celah Cahaya</h4>
                <div className="flex items-center text-[11px] text-emerald-100 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-300 mr-1.5 animate-pulse"></span>
                  <span>Tutor Siap Membantu (Online)</span>
                </div>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              aria-label="Tutup konsultasi"
              className="text-white/80 hover:text-white p-2 rounded-lg active:scale-95 transition-transform"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-slate-50 text-xs text-slate-700 space-y-3">
            <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs">
              <p className="leading-relaxed text-xs sm:text-xs">
                Sampurasun! Ada yang bisa kami bantu seputar pendaftaran Paket A, B, C, biaya, atau info kuliah di Garut?
              </p>
              <span className="block text-[10px] text-slate-400 text-right mt-1">Admin Celah Cahaya</span>
            </div>

            <div className="space-y-1.5 text-[11px] text-slate-500">
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Konsultasi Gratis & Ramah</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Penjelasan Konversi Nilai Rapor</span>
              </div>
            </div>

            <a
              href={`https://wa.me/${INSTITUTION_INFO.whatsapp}?text=${defaultMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center py-3 bg-emerald-600 hover:bg-emerald-700 active:scale-98 text-white font-semibold rounded-xl transition-all shadow-xs min-h-[44px] flex items-center justify-center text-xs"
            >
              Mulai Chat WhatsApp Sekarang
            </a>
          </div>
        </div>
      )}

      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Konsultasi WhatsApp"
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white shadow-xl flex items-center justify-center transition-all group focus:outline-hidden"
      >
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white"></span>
        </span>
      </button>
    </div>
  );
};
