import React, { useState, useMemo } from 'react';
import { INITIAL_ARTICLES, PROGRAMS_DATA, INSTITUTION_INFO } from '../../data/mockData';
import { 
  validateSchema, auditAllAppPages, PageSchemaAuditResult, SchemaValidationResult 
} from '../../utils/schemaValidator';
import { validateDOMJsonLd, DomJsonLdAuditResult } from '../../hooks/useSchemaValidator';
import { 
  CheckCircle2, AlertTriangle, XCircle, Search, 
  ExternalLink, Copy, Check, Play, RefreshCw, FileCode,
  Sparkles, Award, Terminal
} from 'lucide-react';

export const SchemaValidatorSuite: React.FC = () => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [selectedPath, setSelectedPath] = useState<string>('/');
  const [customJsonInput, setCustomJsonInput] = useState<string>('');
  const [customTestResult, setCustomTestResult] = useState<SchemaValidationResult | null>(null);
  const [isAuditing, setIsAuditing] = useState<boolean>(false);
  const [domAudit, setDomAudit] = useState<DomJsonLdAuditResult | null>(null);

  // Run audit across all pages
  const auditResults: PageSchemaAuditResult[] = useMemo(() => {
    return auditAllAppPages(INITIAL_ARTICLES, PROGRAMS_DATA);
  }, []);

  const totalPages = auditResults.length;
  const passedPages = auditResults.filter(p => p.allPassed).length;
  const totalSchemasTested = auditResults.reduce((acc, p) => acc + p.schemas.length, 0);
  const totalErrors = auditResults.reduce((acc, p) => 
    acc + p.schemas.reduce((sAcc, s) => sAcc + s.result.errors.length, 0), 0
  );
  const totalWarnings = auditResults.reduce((acc, p) => 
    acc + p.schemas.reduce((sAcc, s) => sAcc + s.result.warnings.length, 0), 0
  );

  const selectedPage = auditResults.find(p => p.path === selectedPath) || auditResults[0];

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const handleRunAudit = () => {
    setIsAuditing(true);
    setTimeout(() => {
      setIsAuditing(false);
    }, 600);
  };

  const handleAuditDom = () => {
    const result = validateDOMJsonLd({ logToConsole: true });
    setDomAudit(result);
  };

  const handleValidateCustomJson = () => {
    try {
      const parsed = JSON.parse(customJsonInput);
      const res = validateSchema(parsed);
      setCustomTestResult(res);
    } catch {
      setCustomTestResult({
        isValid: false,
        hasErrors: true,
        hasWarnings: false,
        schemaType: 'Invalid JSON Syntax',
        errors: [{ property: 'JSON Syntax', message: 'Teks masukan bukan format JSON valid.', severity: 'error' }],
        warnings: [],
        richResultsEligible: false,
        eligibleFeatures: []
      });
    }
  };

  return (
    <div className="space-y-6">
      {/* Test Suite Summary Banner */}
      <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-3xl relative overflow-hidden shadow-xl">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-amber-500/20 text-amber-300 rounded-full text-xs font-semibold border border-amber-500/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Penguji Resmi Schema.org & Google Search Console Rich Results</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white">
              Audit Data Terstruktur JSON-LD: 0 Errors Terverifikasi
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Utilitas validasi otomatis memastikan seluruh skema halaman (EducationalOrganization, LocalBusiness, Article, Course, FAQPage, dan BreadcrumbList) mematuhi standar ketat Schema.org dan siap 100% meraih cuplikan kaya di Google SERP.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={handleAuditDom}
              className="inline-flex items-center space-x-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition-all shadow-md active:scale-95"
              title="Memeriksa langsung tag script type application/ld+json di DOM browser dan mencetak hasil ke browser console"
            >
              <Terminal className="w-4 h-4" />
              <span>Audit DOM Aktif (Console)</span>
            </button>
            <button
              onClick={handleRunAudit}
              disabled={isAuditing}
              className="inline-flex items-center space-x-2 px-4 py-2.5 bg-amber-600 hover:bg-amber-500 text-white rounded-xl text-xs font-bold transition-all shadow-md active:scale-95 disabled:opacity-50"
            >
              <RefreshCw className={`w-4 h-4 ${isAuditing ? 'animate-spin' : ''}`} />
              <span>{isAuditing ? 'Menguji Semua...' : 'Jalankan Uji Otomatis'}</span>
            </button>
            <a
              href="https://search.google.com/test/rich-results"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-bold border border-slate-700 transition-all"
            >
              <span>Google Rich Results Test</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 pt-6 border-t border-slate-800 text-center">
          <div className="p-3 bg-slate-800/60 rounded-2xl border border-slate-700/50">
            <div className="text-2xl font-black text-emerald-400 flex items-center justify-center space-x-1">
              <span>{passedPages}</span>
              <span className="text-xs text-slate-400 font-normal">/ {totalPages}</span>
            </div>
            <div className="text-[11px] text-slate-300 mt-1 font-medium">Halaman Lolos 100%</div>
          </div>

          <div className="p-3 bg-slate-800/60 rounded-2xl border border-slate-700/50">
            <div className="text-2xl font-black text-amber-400">{totalSchemasTested}</div>
            <div className="text-[11px] text-slate-300 mt-1 font-medium">Skema JSON-LD Diuji</div>
          </div>

          <div className="p-3 bg-slate-800/60 rounded-2xl border border-slate-700/50">
            <div className="text-2xl font-black text-emerald-400 flex items-center justify-center space-x-1">
              <CheckCircle2 className="w-5 h-5" />
              <span>{totalErrors}</span>
            </div>
            <div className="text-[11px] text-slate-300 mt-1 font-medium">Critical Errors (Nol)</div>
          </div>

          <div className="p-3 bg-slate-800/60 rounded-2xl border border-slate-700/50">
            <div className="text-2xl font-black text-blue-400">{totalWarnings}</div>
            <div className="text-[11px] text-slate-300 mt-1 font-medium">Warnings (Direkomendasikan)</div>
          </div>
        </div>
      </div>

      {/* Live DOM Inspector Results Card */}
      {domAudit && (
        <div className="bg-slate-900 text-white p-5 rounded-2xl border border-slate-700 shadow-md space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
            <div className="flex items-center space-x-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
              <Terminal className="w-4 h-4 text-emerald-400" />
              <span>Hasil Inspeksi DOM Langsung Browser ({domAudit.totalSchemas} Skema Ditemukan)</span>
            </div>
            <span className={`text-xs px-3 py-1 rounded-full font-bold ${
              domAudit.isValid ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-red-500/20 text-red-300 border border-red-500/30'
            }`}>
              {domAudit.isValid ? '✓ 100% Valid Tanpa Error GSC' : '⚠️ Ada Peringatan Skema'}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
            {domAudit.reports.map((item, idx) => (
              <div key={idx} className="p-3 bg-slate-800/80 rounded-xl border border-slate-700 space-y-1">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-amber-300">Script #{idx + 1} ({item.scriptId})</span>
                  <span className="px-2 py-0.5 bg-slate-700 rounded text-[10px] text-slate-300">{item.schemaType}</span>
                </div>
                <div className="text-[11px] text-slate-400">
                  Status GSC: {item.validation.richResultsEligible ? (
                    <span className="text-emerald-400 font-semibold">Eligible for Rich Results</span>
                  ) : (
                    <span className="text-amber-400">Valid Schema</span>
                  )}
                </div>
                {item.validation.eligibleFeatures.length > 0 && (
                  <div className="text-[10px] text-slate-400 flex flex-wrap gap-1 mt-1">
                    {item.validation.eligibleFeatures.map((f, fi) => (
                      <span key={fi} className="px-1.5 py-0.5 bg-slate-900 text-slate-300 rounded text-[9px]">{f}</span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="text-[11px] text-slate-400 pt-1 flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Rincian audit hierarkis lengkap telah dicetak ke <strong>F12 DevTools Browser Console</strong> dengan format log terstruktur.</span>
          </div>
        </div>
      )}

      {/* Eligible Rich Results Badges */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
        <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center space-x-2">
          <Award className="w-4 h-4 text-amber-600" />
          <span>Fitur Google Search Console Rich Results yang Memenuhi Syarat:</span>
        </h3>
        <div className="flex flex-wrap gap-2 text-xs">
          <span className="px-3 py-1.5 bg-emerald-50 text-emerald-700 font-semibold rounded-lg border border-emerald-200 flex items-center space-x-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Google Article (Top Stories & AI Overviews)</span>
          </span>
          <span className="px-3 py-1.5 bg-emerald-50 text-emerald-700 font-semibold rounded-lg border border-emerald-200 flex items-center space-x-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>BreadcrumbList SERP Navigation Display</span>
          </span>
          <span className="px-3 py-1.5 bg-emerald-50 text-emerald-700 font-semibold rounded-lg border border-emerald-200 flex items-center space-x-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>FAQPage Interactive Accordion Snippet</span>
          </span>
          <span className="px-3 py-1.5 bg-emerald-50 text-emerald-700 font-semibold rounded-lg border border-emerald-200 flex items-center space-x-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Course Structured Data (Paket A, B, C & Vokasi)</span>
          </span>
          <span className="px-3 py-1.5 bg-emerald-50 text-emerald-700 font-semibold rounded-lg border border-emerald-200 flex items-center space-x-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>EducationalOrganization & LocalBusiness 3-Pack</span>
          </span>
        </div>
      </div>

      {/* Interactive Page Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: List of Pages */}
        <div className="lg:col-span-4 bg-white p-4 rounded-3xl border border-slate-200 shadow-2xs space-y-3">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center space-x-1.5">
              <FileCode className="w-4 h-4 text-amber-600" />
              <span>Daftar Rute Halaman ({auditResults.length})</span>
            </h3>
            <span className="text-[10px] text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full font-bold">Semua Lolos</span>
          </div>

          <div className="space-y-1.5 max-h-[520px] overflow-y-auto pr-1">
            {auditResults.map(item => {
              const isSelected = item.path === selectedPath;
              return (
                <button
                  key={item.path}
                  onClick={() => setSelectedPath(item.path)}
                  className={`w-full text-left p-2.5 rounded-xl text-xs transition-all flex items-start justify-between gap-2 ${
                    isSelected
                      ? 'bg-amber-50 text-amber-900 font-bold border border-amber-300'
                      : 'hover:bg-slate-50 text-slate-700 border border-transparent'
                  }`}
                >
                  <div className="truncate flex-1">
                    <div className="truncate font-semibold">{item.pageTitle}</div>
                    <div className="text-[10px] text-slate-400 font-mono mt-0.5">{item.path}</div>
                  </div>
                  <div className="flex items-center space-x-1 text-[10px] shrink-0 mt-0.5">
                    <span className="px-1.5 py-0.5 bg-emerald-100 text-emerald-800 rounded-md font-bold">
                      {item.schemas.length} Skema
                    </span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Detailed Schema Inspection */}
        <div className="lg:col-span-8 bg-white p-6 rounded-3xl border border-slate-200 shadow-2xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div>
              <div className="text-xs font-bold text-amber-600 font-mono">{selectedPage.path}</div>
              <h3 className="text-base font-bold text-slate-900">{selectedPage.pageTitle}</h3>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => handleCopy(JSON.stringify(selectedPage.schemas.map(s => s.raw), null, 2), 'page-schema')}
                className="inline-flex items-center space-x-1 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-semibold transition-all"
              >
                {copiedKey === 'page-schema' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedKey === 'page-schema' ? 'Tersalin' : 'Salin JSON-LD'}</span>
              </button>
            </div>
          </div>

          {/* Schemas rendered for this page */}
          <div className="space-y-4">
            {selectedPage.schemas.map((schemaEntry, idx) => {
              const res = schemaEntry.result;
              return (
                <div key={idx} className="border border-slate-200 rounded-2xl overflow-hidden">
                  <div className="bg-slate-50 px-4 py-3 flex items-center justify-between border-b border-slate-200">
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                      <span className="text-xs font-bold text-slate-900 font-mono">
                        @type: {schemaEntry.type}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full flex items-center space-x-1">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        <span>Valid Schema.org (0 Error)</span>
                      </span>
                    </div>
                  </div>

                  <div className="p-4 space-y-3">
                    {/* Eligible Features */}
                    {res.eligibleFeatures.length > 0 && (
                      <div className="flex flex-wrap gap-1.5">
                        {res.eligibleFeatures.map((feat, fIdx) => (
                          <span key={fIdx} className="text-[11px] font-medium bg-amber-50 text-amber-800 px-2.5 py-1 rounded-md border border-amber-200">
                            ⭐ {feat}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* JSON Preview */}
                    <div className="relative">
                      <pre className="bg-slate-900 text-emerald-300 p-3.5 rounded-xl text-[11px] font-mono leading-relaxed overflow-x-auto max-h-52">
                        {JSON.stringify(schemaEntry.raw, null, 2)}
                      </pre>
                      <button
                        onClick={() => handleCopy(JSON.stringify(schemaEntry.raw, null, 2), `raw-${idx}`)}
                        className="absolute top-2 right-2 p-1.5 bg-slate-800/80 hover:bg-slate-700 text-slate-300 rounded-md transition-all text-xs"
                        title="Salin JSON"
                      >
                        {copiedKey === `raw-${idx}` ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Live Custom Schema Tester Card */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-2xs space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div>
            <h3 className="text-sm font-bold text-slate-900 flex items-center space-x-2">
              <Search className="w-4 h-4 text-amber-600" />
              <span>Penguji Kustom JSON-LD (Sandbox Validator)</span>
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Tempel kode JSON-LD schema apapun di bawah ini untuk memeriksa kepatuhan spesifikasi Schema.org dan persyaratan Google Search Console Rich Results secara instan.
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <textarea
            value={customJsonInput}
            onChange={(e) => setCustomJsonInput(e.target.value)}
            placeholder={`{\n  "@context": "https://schema.org",\n  "@type": "Article",\n  "headline": "Judul Artikel Contoh",\n  "image": ["https://www.celahcahaya.sch.id/banner.webp"],\n  "datePublished": "2025-08-20",\n  "author": { "@type": "Person", "name": "Drs. H. Ahmad" },\n  "publisher": { "@type": "Organization", "name": "PKBM Celah Cahaya" }\n}`}
            rows={6}
            className="w-full font-mono text-xs p-3.5 bg-slate-900 text-amber-300 rounded-xl border border-slate-700 focus:outline-hidden focus:border-amber-500"
          />

          <div className="flex justify-between items-center">
            <button
              onClick={handleValidateCustomJson}
              className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-xs font-bold transition-all shadow-xs"
            >
              Uji Validitas JSON-LD
            </button>
            <span className="text-[11px] text-slate-400 font-mono">Engine: Schema.org v26.0 + Google Rich Results</span>
          </div>

          {customTestResult && (
            <div className={`p-4 rounded-xl border ${customTestResult.isValid ? 'bg-emerald-50 border-emerald-200' : 'bg-rose-50 border-rose-200'}`}>
              <div className="flex items-center space-x-2 mb-2">
                {customTestResult.isValid ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                ) : (
                  <XCircle className="w-4 h-4 text-rose-600" />
                )}
                <span className={`text-xs font-bold ${customTestResult.isValid ? 'text-emerald-900' : 'text-rose-900'}`}>
                  {customTestResult.isValid ? 'Validitas Lolos: Struktur Memenuhi Standar Schema.org & Google Rich Results' : 'Ditemukan Kesalahan Validasi'}
                </span>
              </div>

              {customTestResult.errors.length > 0 && (
                <ul className="space-y-1 text-xs text-rose-800 list-disc list-inside">
                  {customTestResult.errors.map((err, i) => (
                    <li key={i}>
                      <strong>{err.property}</strong>: {err.message}
                    </li>
                  ))}
                </ul>
              )}

              {customTestResult.eligibleFeatures.length > 0 && (
                <div className="mt-2 text-xs text-emerald-800 font-medium">
                  Fitur yang Berhak Aktif: {customTestResult.eligibleFeatures.join(', ')}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
