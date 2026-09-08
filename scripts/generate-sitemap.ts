import fs from 'fs';
import path from 'path';

/**
 * Build-time crawler script that extracts App router paths and generates
 * production public/sitemap.xml and public/robots.txt
 */

const BASE_URL = 'https://www.celahcahaya.sch.id';
const currentDate = new Date().toISOString().split('T')[0];

// Static routes defined in App router
const staticRoutes = [
  { path: '', changefreq: 'daily', priority: '1.0' },
  { path: '/tentang', changefreq: 'weekly', priority: '0.8' },
  { path: '/program', changefreq: 'weekly', priority: '0.9' },
  { path: '/artikel', changefreq: 'daily', priority: '0.9' },
  { path: '/panduan', changefreq: 'weekly', priority: '0.8' },
  { path: '/beasiswa', changefreq: 'monthly', priority: '0.7' },
  { path: '/kegiatan', changefreq: 'weekly', priority: '0.7' },
  { path: '/pendaftaran', changefreq: 'daily', priority: '0.9' },
  { path: '/faq', changefreq: 'weekly', priority: '0.8' },
  { path: '/kontak', changefreq: 'monthly', priority: '0.8' },
  { path: '/sitemap', changefreq: 'monthly', priority: '0.5' },
  { path: '/seo-strategi', changefreq: 'weekly', priority: '0.7' }
];

// Dynamic program slugs
const programSlugs = [
  { slug: 'paket-a', changefreq: 'weekly', priority: '0.8' },
  { slug: 'paket-b', changefreq: 'weekly', priority: '0.8' },
  { slug: 'paket-c', changefreq: 'weekly', priority: '0.9' },
  { slug: 'vokasi-ai', changefreq: 'weekly', priority: '0.8' }
];

// Dynamic article slugs
const articleSlugs = [
  { slug: 'panduan-lengkap-pendidikan-kesetaraan-paket-c', lastmod: '2025-08-20', priority: '0.9' },
  { slug: 'apakah-ijazah-paket-c-bisa-kuliah-negeri', lastmod: '2025-08-14', priority: '0.8' },
  { slug: 'biaya-sekolah-paket-c-garut-beasiswa-kip', lastmod: '2025-08-10', priority: '0.8' },
  { slug: 'syarat-cara-daftar-paket-c-garut-2025', lastmod: '2025-08-05', priority: '0.8' },
  { slug: 'perbedaan-ijazah-paket-c-dengan-sma-formal', lastmod: '2025-07-28', priority: '0.8' },
  { slug: 'ai-untuk-belajar-mandiri-kesetaraan-paket-c', lastmod: '2025-07-20', priority: '0.8' },
  { slug: 'batas-usia-sekolah-paket-c-apakah-bisa-dewasa', lastmod: '2025-07-12', priority: '0.8' },
  { slug: 'panduan-ujian-anbk-dan-asesmen-kesetaraan-paket-c', lastmod: '2025-07-02', priority: '0.8' }
];

function buildSitemapXml(): string {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n`;
  xml += `        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"\n`;
  xml += `        xmlns:xhtml="http://www.w3.org/1999/xhtml"\n`;
  xml += `        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n`;

  // Static routes
  staticRoutes.forEach(r => {
    xml += `  <url>\n`;
    xml += `    <loc>${BASE_URL}${r.path}</loc>\n`;
    xml += `    <lastmod>${currentDate}</lastmod>\n`;
    xml += `    <changefreq>${r.changefreq}</changefreq>\n`;
    xml += `    <priority>${r.priority}</priority>\n`;
    xml += `  </url>\n`;
  });

  // Program routes
  programSlugs.forEach(p => {
    xml += `  <url>\n`;
    xml += `    <loc>${BASE_URL}/program/${p.slug}</loc>\n`;
    xml += `    <lastmod>${currentDate}</lastmod>\n`;
    xml += `    <changefreq>${p.changefreq}</changefreq>\n`;
    xml += `    <priority>${p.priority}</priority>\n`;
    xml += `  </url>\n`;
  });

  // Article routes
  articleSlugs.forEach(a => {
    xml += `  <url>\n`;
    xml += `    <loc>${BASE_URL}/artikel/${a.slug}</loc>\n`;
    xml += `    <lastmod>${a.lastmod}</lastmod>\n`;
    xml += `    <changefreq>weekly</changefreq>\n`;
    xml += `    <priority>${a.priority}</priority>\n`;
    xml += `  </url>\n`;
  });

  xml += `</urlset>\n`;
  return xml;
}

function buildRobotsTxt(): string {
  return `# ==============================================================================
# Robots.txt for PKBM Celah Cahaya Garut
# Domain: https://www.celahcahaya.sch.id
# Generated: ${currentDate}
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

# Disallow administrative and API endpoints
Disallow: /admin
Disallow: /admin-cms
Disallow: /api/
Disallow: /*?*search=
Disallow: /*?*preview=

# Crawl-Delay
Crawl-delay: 1

# Host Declaration
Host: https://www.celahcahaya.sch.id

# Official Sitemaps
Sitemap: https://www.celahcahaya.sch.id/sitemap.xml
Sitemap: https://www.celahcahaya.sch.id/rss.xml
`;
}

function run() {
  const publicDir = path.resolve(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const sitemapContent = buildSitemapXml();
  const robotsContent = buildRobotsTxt();

  const sitemapPath = path.join(publicDir, 'sitemap.xml');
  const robotsPath = path.join(publicDir, 'robots.txt');

  fs.writeFileSync(sitemapPath, sitemapContent, 'utf-8');
  fs.writeFileSync(robotsPath, robotsContent, 'utf-8');

  console.log(`✅ [Sitemap Generator] Berhasil mengekspor sitemap.xml ke ${sitemapPath}`);
  console.log(`✅ [Sitemap Generator] Berhasil mengekspor robots.txt ke ${robotsPath}`);
  console.log(`📊 Total URL terindeks: ${staticRoutes.length + programSlugs.length + articleSlugs.length}`);
}

run();
