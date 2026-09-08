import React, { useState } from 'react';
import { 
  convertImageToWebP, auditDocumentImages, downloadWebPFile, 
  WebPConversionResult, ImageAuditItem 
} from '../../utils/imageOptimizer';
import { 
  Upload, Image as ImageIcon, Download, Zap, CheckCircle2, 
  AlertCircle, Sliders, RefreshCw, Copy, Check, FileCheck
} from 'lucide-react';

export const ImageOptimizerSection: React.FC = () => {
  const [conversionResult, setConversionResult] = useState<WebPConversionResult | null>(null);
  const [isConverting, setIsConverting] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [quality, setQuality] = useState<number>(0.85);
  const [maxWidth, setMaxWidth] = useState<number>(1200);
  const [originalFilename, setOriginalFilename] = useState<string>('gambar-celah-cahaya');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // Live Page Image Audit state
  const [auditData, setAuditData] = useState<{
    items: ImageAuditItem[];
    lcpScore: number;
    totalImages: number;
    webpCount: number;
    withDimensionsCount: number;
  } | null>(null);

  const handleFileUpload = async (file: File) => {
    if (!file.type.startsWith('image/')) {
      setErrorMsg('Harap pilih berkas gambar yang valid (JPG, PNG, WebP).');
      return;
    }

    setErrorMsg(null);
    setIsConverting(true);
    const cleanName = file.name.replace(/\.[^/.]+$/, '');
    setOriginalFilename(cleanName);

    try {
      const res = await convertImageToWebP(file, {
        quality,
        maxWidth
      });
      setConversionResult(res);
    } catch (err: any) {
      setErrorMsg(err.message || 'Gagal mengonversi gambar ke WebP.');
    } finally {
      setIsConverting(false);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileUpload(e.dataTransfer.files[0]);
    }
  };

  const handleAuditImages = () => {
    const res = auditDocumentImages();
    setAuditData(res);
  };

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const formatBytes = (bytes: number) => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  };

  return (
    <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-2xs space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-100 pb-6">
        <div className="space-y-1">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-emerald-50 text-emerald-800 rounded-full text-xs font-semibold border border-emerald-200">
            <Zap className="w-3.5 h-3.5 text-emerald-600" />
            <span>Optimalisasi Gambar WebP & Core Web Vitals (LCP & CLS)</span>
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Konverter Otomatis WebP & Peningkatan Skor LCP Google
          </h2>
          <p className="text-xs text-slate-500 max-w-2xl">
            Format WebP mampu memangkas ukuran aset gambar hingga 70-85% tanpa menurunkan ketajaman visual, mempercepat <strong>Largest Contentful Paint (LCP &lt; 2.5s)</strong> dan mencegah <strong>Cumulative Layout Shift (CLS)</strong>.
          </p>
        </div>

        <button
          onClick={handleAuditImages}
          className="inline-flex items-center space-x-2 px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-all shadow-xs"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Audit Gambar di Halaman Ini</span>
        </button>
      </div>

      {/* Main Converter Tool */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Dropzone & Settings */}
        <div className="lg:col-span-6 space-y-4">
          <div
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
            className="border-2 border-dashed border-amber-300 hover:border-amber-500 bg-amber-50/40 hover:bg-amber-50/80 transition-all rounded-3xl p-6 text-center cursor-pointer flex flex-col items-center justify-center min-h-[220px] relative"
          >
            <input
              type="file"
              accept="image/png, image/jpeg, image/jpg, image/webp"
              onChange={(e) => e.target.files?.[0] && handleFileUpload(e.target.files[0])}
              className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
            />
            <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-700 mb-3 shadow-inner">
              <Upload className="w-6 h-6" />
            </div>
            <div className="font-bold text-slate-900 text-sm">
              Tarik & Lepas Gambar ke Sini, atau <span className="text-amber-600 underline">Klik untuk Pilih</span>
            </div>
            <div className="text-[11px] text-slate-500 mt-1">
              Mendukung format JPG, PNG, JPEG. Otomatis dikonversi ke format <strong>.webp</strong> di sisi browser.
            </div>
            {isConverting && (
              <div className="mt-3 text-xs font-bold text-amber-700 flex items-center space-x-1.5 animate-pulse">
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>Memproses konversi ke format WebP...</span>
              </div>
            )}
          </div>

          {/* Compression Settings */}
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs space-y-3">
            <div className="font-bold text-slate-800 flex items-center space-x-1.5">
              <Sliders className="w-3.5 h-3.5 text-amber-600" />
              <span>Pengaturan Kompresi WebP</span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <div className="flex justify-between text-[11px] text-slate-600">
                  <span>Kualitas WebP:</span>
                  <span className="font-bold text-amber-700">{Math.round(quality * 100)}%</span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="1.0"
                  step="0.05"
                  value={quality}
                  onChange={(e) => setQuality(parseFloat(e.target.value))}
                  className="w-full accent-amber-600"
                />
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-[11px] text-slate-600">
                  <span>Maks. Lebar:</span>
                  <span className="font-bold text-amber-700">{maxWidth}px</span>
                </div>
                <select
                  value={maxWidth}
                  onChange={(e) => setMaxWidth(parseInt(e.target.value, 10))}
                  className="w-full text-xs p-1 bg-white border border-slate-200 rounded-md"
                >
                  <option value={800}>800px (Thumbnail / Mobile)</option>
                  <option value={1200}>1200px (Google Discover / Hero)</option>
                  <option value={1600}>1600px (Layar Lebar Desktop)</option>
                  <option value={1920}>1920px (Full HD)</option>
                </select>
              </div>
            </div>
          </div>

          {errorMsg && (
            <div className="p-3 bg-rose-50 border border-rose-200 text-rose-800 text-xs rounded-xl flex items-center space-x-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
              <span>{errorMsg}</span>
            </div>
          )}
        </div>

        {/* Conversion Result Preview */}
        <div className="lg:col-span-6 bg-slate-50 p-6 rounded-3xl border border-slate-200 flex flex-col justify-between">
          {conversionResult ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <span className="text-xs font-bold text-slate-900 flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Hasil Konversi Berhasil</span>
                </span>
                <span className="text-xs font-black text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full">
                  Hemat {conversionResult.savingsPercent}%
                </span>
              </div>

              {/* Image Preview */}
              <div className="relative rounded-2xl overflow-hidden bg-slate-200 aspect-video flex items-center justify-center border border-slate-300">
                <img
                  src={conversionResult.dataUrl}
                  alt="WebP Optimized Preview"
                  className="w-full h-full object-contain"
                />
                <div className="absolute bottom-2 right-2 bg-slate-900/80 backdrop-blur-xs text-white text-[10px] px-2 py-0.5 rounded-md font-mono">
                  {conversionResult.width} × {conversionResult.height} px
                </div>
              </div>

              {/* Stats Comparison */}
              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <div className="p-2.5 bg-white rounded-xl border border-slate-200">
                  <div className="text-slate-400 text-[10px]">Ukuran Asli</div>
                  <div className="font-bold text-slate-700">{formatBytes(conversionResult.originalSize)}</div>
                </div>
                <div className="p-2.5 bg-white rounded-xl border border-slate-200">
                  <div className="text-slate-400 text-[10px]">Format WebP</div>
                  <div className="font-bold text-emerald-600">{formatBytes(conversionResult.optimizedSize)}</div>
                </div>
                <div className="p-2.5 bg-white rounded-xl border border-slate-200">
                  <div className="text-slate-400 text-[10px]">Penyelamatan</div>
                  <div className="font-bold text-blue-600">{formatBytes(conversionResult.savedBytes)}</div>
                </div>
              </div>

              <button
                onClick={() => downloadWebPFile(conversionResult.blob, `${originalFilename}.webp`)}
                className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-all shadow-md flex items-center justify-center space-x-2"
              >
                <Download className="w-4 h-4" />
                <span>Unduh {originalFilename}.webp</span>
              </button>
            </div>
          ) : (
            <div className="h-full min-h-[220px] flex flex-col items-center justify-center text-center text-slate-400 space-y-2 p-6">
              <ImageIcon className="w-12 h-12 stroke-[1.2] text-slate-300" />
              <div className="text-xs font-medium text-slate-600">Belum ada gambar yang dipilih</div>
              <p className="text-[11px] text-slate-400 max-w-xs">
                Unggah gambar apa saja di sebelah kiri untuk melihat penghematan ukuran berkas dan pratinjau WebP resolusi tinggi.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* LCP Preload Code & Component Guide */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
        <div className="bg-slate-900 text-slate-200 p-4 rounded-2xl text-xs font-mono space-y-2">
          <div className="flex justify-between items-center text-amber-400 font-bold border-b border-slate-800 pb-2">
            <span>1. Snippet Preload LCP Hero Image (&lt;head&gt;)</span>
            <button
              onClick={() => handleCopy(`<link rel="preload" as="image" href="https://www.celahcahaya.sch.id/hero-banner.webp" type="image/webp" fetchpriority="high">`, 'lcp-snippet')}
              className="text-slate-400 hover:text-white"
            >
              {copiedKey === 'lcp-snippet' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>
          <pre className="overflow-x-auto text-[11px] leading-relaxed text-emerald-300">
{`<link 
  rel="preload" 
  as="image" 
  href="/images/hero-banner.webp" 
  type="image/webp" 
  fetchpriority="high"
/>`}
          </pre>
          <div className="text-[10px] text-slate-400 font-sans">
            Memicu pengunduhan gambar hero lebih awal saat parsing HTML sehingga waktu Largest Contentful Paint berada di bawah 2.5 detik.
          </div>
        </div>

        <div className="bg-slate-900 text-slate-200 p-4 rounded-2xl text-xs font-mono space-y-2">
          <div className="flex justify-between items-center text-amber-400 font-bold border-b border-slate-800 pb-2">
            <span>2. Pemakaian Komponen &lt;OptimizedImage&gt;</span>
            <button
              onClick={() => handleCopy(`<OptimizedImage\n  src="/images/kelas.jpg"\n  alt="Warga belajar Paket C"\n  isLCP={true}\n  aspectRatio="16/9"\n/>`, 'comp-snippet')}
              className="text-slate-400 hover:text-white"
            >
              {copiedKey === 'comp-snippet' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>
          <pre className="overflow-x-auto text-[11px] leading-relaxed text-amber-300">
{`<OptimizedImage
  src="/images/kelas.jpg"
  alt="Warga belajar Paket C"
  isLCP={true}
  aspectRatio="16/9"
/>`}
          </pre>
          <div className="text-[10px] text-slate-400 font-sans">
            Otomatis menyajikan <code>&lt;picture&gt;</code> WebP, lazy loading untuk gambar bawah, dan aspect-ratio tetap untuk mencegah layout shift.
          </div>
        </div>
      </div>

      {/* Live Audit Report */}
      {auditData && (
        <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center space-x-2">
              <FileCheck className="w-4 h-4 text-amber-600" />
              <span>Hasil Audit Gambar Halaman Ini ({auditData.totalImages} Gambar Ditemukan)</span>
            </h3>
            <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
              Skor Kesiapan Core Web Vitals: {auditData.lcpScore}/100
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-center text-xs">
            <div className="p-2.5 bg-white rounded-xl border border-slate-200">
              <div className="text-[10px] text-slate-400">Format Modern WebP</div>
              <div className="font-bold text-slate-900">{auditData.webpCount} / {auditData.totalImages}</div>
            </div>
            <div className="p-2.5 bg-white rounded-xl border border-slate-200">
              <div className="text-[10px] text-slate-400">Atribut Dimensi (Anti CLS)</div>
              <div className="font-bold text-slate-900">{auditData.withDimensionsCount} / {auditData.totalImages}</div>
            </div>
            <div className="p-2.5 bg-white rounded-xl border border-slate-200">
              <div className="text-[10px] text-slate-400">Rekomendasi</div>
              <div className="font-bold text-emerald-600">Semua Teroptimasi</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
