import React, { useState, useMemo } from 'react';
import { 
  crawlAppRoutes, generateSitemapXml, generateRobotsTxt, 
  exportSitemapXmlFile, exportRobotsTxtFile, CrawledRoute 
} from '../../utils/sitemapGenerator';
import { 
  Download, Copy, Check, ExternalLink, Network, 
  FileCode, Terminal, RefreshCw, CheckCircle2, Globe
} from 'lucide-react';

export const SitemapCrawlerSection: React.FC = () => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [searchKeyword, setSearchKeyword] = useState<string>('');
  const [activeSubTab, setActiveSubTab] = useState<'table' | 'xml' | 'robots' | 'cli'>('table');

  const routes: CrawledRoute[] = useMemo(() => crawlAppRoutes(), []);

  const filteredRoutes = useMemo(() => {
    return routes.filter(r => {
      const matchCat = filterCategory === 'all' || r.category === filterCategory;
      const matchSearch = searchKeyword === '' || 
        r.path.toLowerCase().includes(searchKeyword.toLowerCase()) || 
        r.title.toLowerCase().includes(searchKeyword.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [routes, filterCategory, searchKeyword]);

  const sitemapXml = useMemo(() => generateSitemapXml(routes), [routes]);
  const robotsTxt = useMemo(() => generateRobotsTxt(), []);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  return (
    <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-2xs space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-100 pb-6">
        <div className="space-y-1">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-amber-50 text-amber-800 rounded-full text-xs font-semibold border border-amber-200">
            <Globe className="w-3.5 h-3.5 text-amber-600" />
            <span>Crawler Rute Otomatis & Generator Sitemap.xml</span>
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Perayapan Rute & Konfigurasi Indeksasi Googlebot
          </h2>
          <p className="text-xs text-slate-500 max-w-2xl">
            Generator otomatis mendeteksi seluruh rute statis, program belajar, dan seluruh artikel klaster untuk mengekspor sitemap.xml dan robots.txt yang selalu tersinkronisasi.
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => exportSitemapXmlFile(routes)}
            className="inline-flex items-center space-x-1.5 px-3.5 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-xs font-bold transition-all shadow-xs"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Unduh sitemap.xml</span>
          </button>
          <button
            onClick={() => exportRobotsTxtFile()}
            className="inline-flex items-center space-x-1.5 px-3.5 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-all shadow-xs"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Unduh robots.txt</span>
          </button>
        </div>
      </div>

      {/* Stats Counter */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
        <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100">
          <div className="text-xl font-black text-slate-900">{routes.length}</div>
          <div className="text-[11px] text-slate-500 font-medium">Total URL Terindeks</div>
        </div>
        <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100">
          <div className="text-xl font-black text-amber-600">
            {routes.filter(r => r.category === 'article').length}
          </div>
          <div className="text-[11px] text-slate-500 font-medium">Artikel & Panduan</div>
        </div>
        <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100">
          <div className="text-xl font-black text-emerald-600">
            {routes.filter(r => r.category === 'program').length}
          </div>
          <div className="text-[11px] text-slate-500 font-medium">Program Kesetaraan</div>
        </div>
        <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100">
          <div className="text-xl font-black text-blue-600">
            {routes.filter(r => r.category === 'core').length}
          </div>
          <div className="text-[11px] text-slate-500 font-medium">Halaman Utama (Core)</div>
        </div>
      </div>

      {/* Sub Navigation */}
      <div className="flex items-center gap-2 border-b border-slate-200 overflow-x-auto pb-1 text-xs">
        <button
          onClick={() => setActiveSubTab('table')}
          className={`px-3 py-2 font-bold rounded-lg transition-all ${
            activeSubTab === 'table' ? 'bg-amber-100 text-amber-900' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Daftar Rute ({filteredRoutes.length})
        </button>
        <button
          onClick={() => setActiveSubTab('xml')}
          className={`px-3 py-2 font-bold rounded-lg transition-all ${
            activeSubTab === 'xml' ? 'bg-amber-100 text-amber-900' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Pratinjau XML (sitemap.xml)
        </button>
        <button
          onClick={() => setActiveSubTab('robots')}
          className={`px-3 py-2 font-bold rounded-lg transition-all ${
            activeSubTab === 'robots' ? 'bg-amber-100 text-amber-900' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Pratinjau robots.txt
        </button>
        <button
          onClick={() => setActiveSubTab('cli')}
          className={`px-3 py-2 font-bold rounded-lg transition-all ${
            activeSubTab === 'cli' ? 'bg-amber-100 text-amber-900' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Script Otomatisasi CLI
        </button>
      </div>

      {/* SUBTAB 1: TABLE */}
      {activeSubTab === 'table' && (
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-2 justify-between items-center">
            <div className="flex gap-1.5 w-full sm:w-auto overflow-x-auto pb-1 text-xs">
              {['all', 'core', 'program', 'article', 'utility'].map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilterCategory(cat)}
                  className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition-all ${
                    filterCategory === cat 
                      ? 'bg-slate-900 text-white' 
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat === 'all' ? 'Semua' : cat.toUpperCase()}
                </button>
              ))}
            </div>

            <input
              type="text"
              placeholder="Cari rute atau judul..."
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
              className="w-full sm:w-64 px-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-hidden focus:border-amber-500"
            />
          </div>

          <div className="border border-slate-200 rounded-2xl overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-600">
                <tr>
                  <th className="py-2.5 px-3 font-bold">Rute & Halaman</th>
                  <th className="py-2.5 px-3 font-bold">Kategori</th>
                  <th className="py-2.5 px-3 font-bold">Priority</th>
                  <th className="py-2.5 px-3 font-bold">Changefreq</th>
                  <th className="py-2.5 px-3 font-bold">Lastmod</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-mono text-[11px]">
                {filteredRoutes.map((r, i) => (
                  <tr key={i} className="hover:bg-amber-50/40 transition-colors">
                    <td className="py-2 px-3">
                      <div className="font-bold text-slate-900 font-sans text-xs">{r.title}</div>
                      <div className="text-amber-700">{r.path}</div>
                    </td>
                    <td className="py-2 px-3 font-sans">
                      <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold ${
                        r.category === 'article' ? 'bg-amber-100 text-amber-800' :
                        r.category === 'program' ? 'bg-emerald-100 text-emerald-800' :
                        r.category === 'core' ? 'bg-blue-100 text-blue-800' : 'bg-slate-100 text-slate-700'
                      }`}>
                        {r.category}
                      </span>
                    </td>
                    <td className="py-2 px-3 text-slate-800 font-bold">{r.priority}</td>
                    <td className="py-2 px-3 text-slate-600">{r.changefreq}</td>
                    <td className="py-2 px-3 text-slate-500">{r.lastmod}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* SUBTAB 2: XML PREVIEW */}
      {activeSubTab === 'xml' && (
        <div className="relative">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs text-slate-500 font-mono">Format: sitemap.org/schemas/sitemap/0.9</span>
            <button
              onClick={() => handleCopy(sitemapXml, 'sitemap-xml')}
              className="inline-flex items-center space-x-1 text-xs text-amber-700 hover:text-amber-800 font-semibold"
            >
              {copiedKey === 'sitemap-xml' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedKey === 'sitemap-xml' ? 'Tersalin' : 'Salin Semua XML'}</span>
            </button>
          </div>
          <pre className="bg-slate-900 text-amber-300 p-4 rounded-2xl text-[11px] font-mono leading-relaxed overflow-x-auto max-h-96">
            {sitemapXml}
          </pre>
        </div>
      )}

      {/* SUBTAB 3: ROBOTS.TXT PREVIEW */}
      {activeSubTab === 'robots' && (
        <div className="relative">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs text-slate-500 font-mono">public/robots.txt</span>
            <button
              onClick={() => handleCopy(robotsTxt, 'robots-txt')}
              className="inline-flex items-center space-x-1 text-xs text-amber-700 hover:text-amber-800 font-semibold"
            >
              {copiedKey === 'robots-txt' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedKey === 'robots-txt' ? 'Tersalin' : 'Salin Isi robots.txt'}</span>
            </button>
          </div>
          <pre className="bg-slate-900 text-emerald-300 p-4 rounded-2xl text-[11px] font-mono leading-relaxed overflow-x-auto max-h-96">
            {robotsTxt}
          </pre>
        </div>
      )}

      {/* SUBTAB 4: CLI SCRIPT */}
      {activeSubTab === 'cli' && (
        <div className="space-y-4">
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs space-y-2">
            <div className="font-bold text-slate-900 flex items-center space-x-2">
              <Terminal className="w-4 h-4 text-amber-600" />
              <span>Cara Menjalankan Script Generator Sitemap via Terminal:</span>
            </div>
            <p className="text-slate-600 text-xs">
              Script crawler mandiri telah terdaftar pada <code className="px-1.5 py-0.5 bg-slate-200 rounded text-slate-800 font-mono font-bold">package.json</code>. Anda dapat mengeksekusinya kapan saja saat artikel atau program baru dipublikasikan:
            </p>

            <div className="bg-slate-900 text-amber-300 p-3 rounded-xl font-mono text-xs flex justify-between items-center">
              <span>npm run generate:sitemap</span>
              <button
                onClick={() => handleCopy('npm run generate:sitemap', 'cli-cmd')}
                className="text-slate-400 hover:text-white"
              >
                {copiedKey === 'cli-cmd' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
            <p className="text-[11px] text-slate-500">
              Script tersebut merayapi rute aplikasi, menghasilkan berkas <code>public/sitemap.xml</code> dan <code>public/robots.txt</code>, serta mencetak statistik rute secara instan.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
