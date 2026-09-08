/**
 * App Router Crawler & Sitemap / Robots.txt Generator Utility
 *
 * Automatically discovers all static routes and dynamic routes (Programs & Articles),
 * generating compliant XML sitemaps and robots.txt files with export/download capabilities.
 */

import { INITIAL_ARTICLES, PROGRAMS_DATA } from '../data/mockData';

export interface CrawledRoute {
  path: string;
  url: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: string;
  lastmod: string;
  category: 'core' | 'program' | 'article' | 'utility';
  title: string;
}

const BASE_URL = 'https://www.celahcahaya.sch.id';

/**
 * Crawls all registered routes across the application
 */
export function crawlAppRoutes(): CrawledRoute[] {
  const currentDate = new Date().toISOString().split('T')[0];

  // 1. Static Core Routes
  const staticRoutes: Omit<CrawledRoute, 'url'>[] = [
    {
      path: '/',
      changefreq: 'daily',
      priority: '1.0',
      lastmod: currentDate,
      category: 'core',
      title: 'Beranda - PKBM Celah Cahaya Garut'
    },
    {
      path: '/tentang',
      changefreq: 'weekly',
      priority: '0.8',
      lastmod: currentDate,
      category: 'core',
      title: 'Tentang Lembaga & Legalitas'
    },
    {
      path: '/program',
      changefreq: 'weekly',
      priority: '0.9',
      lastmod: currentDate,
      category: 'program',
      title: 'Pilihan Program Kesetaraan'
    },
    {
      path: '/artikel',
      changefreq: 'daily',
      priority: '0.9',
      lastmod: currentDate,
      category: 'article',
      title: 'Indeks Artikel & Panduan Edukasi'
    },
    {
      path: '/panduan',
      changefreq: 'weekly',
      priority: '0.8',
      lastmod: currentDate,
      category: 'utility',
      title: 'Pusat Panduan Warga Belajar'
    },
    {
      path: '/beasiswa',
      changefreq: 'monthly',
      priority: '0.7',
      lastmod: currentDate,
      category: 'utility',
      title: 'Informasi Beasiswa Afirmasi & KIP'
    },
    {
      path: '/kegiatan',
      changefreq: 'weekly',
      priority: '0.7',
      lastmod: currentDate,
      category: 'utility',
      title: 'Dokumentasi Aktivitas & Ujian'
    },
    {
      path: '/pendaftaran',
      changefreq: 'daily',
      priority: '0.9',
      lastmod: currentDate,
      category: 'core',
      title: 'Pendaftaran Online Warga Belajar Baru'
    },
    {
      path: '/faq',
      changefreq: 'weekly',
      priority: '0.8',
      lastmod: currentDate,
      category: 'utility',
      title: 'Tanya Jawab (FAQ) Kesetaraan'
    },
    {
      path: '/kontak',
      changefreq: 'monthly',
      priority: '0.8',
      lastmod: currentDate,
      category: 'core',
      title: 'Kontak & Lokasi Lembaga di Garut'
    },
    {
      path: '/sitemap',
      changefreq: 'monthly',
      priority: '0.5',
      lastmod: currentDate,
      category: 'utility',
      title: 'Peta Situs HTML'
    },
    {
      path: '/seo-strategi',
      changefreq: 'weekly',
      priority: '0.7',
      lastmod: currentDate,
      category: 'utility',
      title: 'Strategi SEO & Topic Cluster'
    }
  ];

  const routes: CrawledRoute[] = staticRoutes.map(r => ({
    ...r,
    url: `${BASE_URL}${r.path === '/' ? '' : r.path}`
  }));

  // 2. Dynamic Program Routes
  PROGRAMS_DATA.forEach(prog => {
    routes.push({
      path: `/program/${prog.slug}`,
      url: `${BASE_URL}/program/${prog.slug}`,
      changefreq: 'weekly',
      priority: prog.slug === 'paket-c' ? '0.9' : '0.8',
      lastmod: currentDate,
      category: 'program',
      title: prog.name
    });
  });

  // 3. Dynamic Article Routes
  INITIAL_ARTICLES.forEach(art => {
    routes.push({
      path: `/artikel/${art.slug}`,
      url: `${BASE_URL}/artikel/${art.slug}`,
      changefreq: 'weekly',
      priority: art.isPillar ? '0.9' : '0.8',
      lastmod: art.updatedDate || art.publishedDate || currentDate,
      category: 'article',
      title: art.title
    });
  });

  return routes;
}

/**
 * Generates an XML string conforming to the official Sitemap protocol
 */
export function generateSitemapXml(routes?: CrawledRoute[]): string {
  const crawled = routes || crawlAppRoutes();

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n`;
  xml += `        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"\n`;
  xml += `        xmlns:xhtml="http://www.w3.org/1999/xhtml"\n`;
  xml += `        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n`;

  crawled.forEach(route => {
    xml += `  <url>\n`;
    xml += `    <loc>${escapeXml(route.url)}</loc>\n`;
    xml += `    <lastmod>${route.lastmod}</lastmod>\n`;
    xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
    xml += `    <priority>${route.priority}</priority>\n`;
    xml += `  </url>\n`;
  });

  xml += `</urlset>\n`;
  return xml;
}

/**
 * Generates an optimized robots.txt file configuration
 */
export function generateRobotsTxt(): string {
  return `# ==============================================================================
# Robots.txt for PKBM Celah Cahaya Garut
# Domain: https://www.celahcahaya.sch.id
# Updated: ${new Date().toISOString().split('T')[0]}
# ==============================================================================

User-agent: *
Allow: /
Allow: /program/
Allow: /artikel/
Allow: /panduan/
Allow: /pendaftaran/
Allow: /kontak/
Allow: /beasiswa/
Allow: /kegiatan/
Allow: /faq/
Allow: /sitemap.xml
Allow: /robots.txt

# Disallow administrative and API paths
Disallow: /admin
Disallow: /admin-cms
Disallow: /api/
Disallow: /*?*search=
Disallow: /*?*preview=

# Crawl-Delay (Polite crawling for bots)
Crawl-delay: 1

# Host Declaration
Host: https://www.celahcahaya.sch.id

# Official Sitemaps
Sitemap: https://www.celahcahaya.sch.id/sitemap.xml
Sitemap: https://www.celahcahaya.sch.id/rss.xml
`;
}

/**
 * Escapes characters for XML safety
 */
function escapeXml(unsafe: string): string {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
      default: return c;
    }
  });
}

/**
 * Triggers a browser download for generated sitemap.xml
 */
export function exportSitemapXmlFile(routes?: CrawledRoute[]) {
  const xmlContent = generateSitemapXml(routes);
  const blob = new Blob([xmlContent], { type: 'application/xml;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'sitemap.xml';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/**
 * Triggers a browser download for generated robots.txt
 */
export function exportRobotsTxtFile() {
  const robotsContent = generateRobotsTxt();
  const blob = new Blob([robotsContent], { type: 'text/plain;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'robots.txt';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
