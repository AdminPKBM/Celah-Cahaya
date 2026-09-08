import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

/**
 * Root Build-Time & CI/CD Crawler Script: generate-sitemap.ts
 *
 * Automatically inspects and crawls route definitions declared in App.tsx,
 * reconciles dynamic routes with application data, and concurrently produces:
 * 1. public/sitemap.xml (Compliant with sitemaps.org 0.9 + Google Image/News extensions)
 * 2. public/robots.txt  (Hardened for search engine indexing and Core Web Vitals bot rendering)
 */

const BASE_URL = 'https://www.celahcahaya.sch.id';
const ROOT_DIR = process.cwd();
const APP_FILE_PATH = path.join(ROOT_DIR, 'src', 'App.tsx');
const MOCK_DATA_PATH = path.join(ROOT_DIR, 'src', 'data', 'mockData.ts');
const PUBLIC_DIR = path.join(ROOT_DIR, 'public');

interface CrawledRoute {
  path: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly';
  priority: string;
  lastmod: string;
  title?: string;
}

/**
 * Parses App.tsx to extract all routes handled by the router
 */
function crawlRoutesFromAppTsx(): CrawledRoute[] {
  const currentDate = new Date().toISOString().split('T')[0];
  const routes: CrawledRoute[] = [];

  if (!fs.existsSync(APP_FILE_PATH)) {
    console.warn(`[generate-sitemap] Warning: App.tsx not found at ${APP_FILE_PATH}. Using fallback routes.`);
    return getFallbackRoutes(currentDate);
  }

  const appContent = fs.readFileSync(APP_FILE_PATH, 'utf-8');

  // 1. Extract static route paths from case '/...' statements and canonicalPath matches
  const staticRouteMatches = new Set<string>();
  
  // Regex for switch cases: case '/path':
  const caseRegex = /case\s+['"](\/[a-zA-Z0-9_-]*)['"]/g;
  let match;
  while ((match = caseRegex.exec(appContent)) !== null) {
    staticRouteMatches.add(match[1]);
  }

  // Regex for canonicalPath in useEffect: canonicalPath:\s*['"](\/[^'"]*)['"]
  const canonicalRegex = /canonicalPath:\s*['"](\/[^'"]*)['"]/g;
  while ((match = canonicalRegex.exec(appContent)) !== null) {
    if (!match[1].includes(':slug')) {
      staticRouteMatches.add(match[1]);
    }
  }

  // Always include root
  staticRouteMatches.add('/');

  // Map static routes with SEO priority heuristics
  staticRouteMatches.forEach((routePath) => {
    // Skip admin/private pages from sitemap
    if (routePath === '/admin-cms') return;

    let priority = '0.7';
    let changefreq: CrawledRoute['changefreq'] = 'weekly';

    if (routePath === '/' || routePath === '') {
      priority = '1.0';
      changefreq = 'daily';
    } else if (routePath === '/program' || routePath === '/pendaftaran' || routePath === '/artikel') {
      priority = '0.9';
      changefreq = 'daily';
    } else if (routePath === '/tentang' || routePath === '/panduan' || routePath === '/faq' || routePath === '/kontak') {
      priority = '0.8';
      changefreq = 'weekly';
    } else if (routePath === '/beasiswa' || routePath === '/kegiatan' || routePath === '/seo-strategi') {
      priority = '0.7';
      changefreq = 'weekly';
    } else if (routePath === '/sitemap') {
      priority = '0.5';
      changefreq = 'monthly';
    }

    routes.push({
      path: routePath === '/' ? '' : routePath,
      changefreq,
      priority,
      lastmod: currentDate
    });
  });

  // 2. Check for dynamic routes in App.tsx: /program/:slug and /artikel/:slug
  const hasDynamicProgram = appContent.includes('/program/') || appContent.includes("startsWith('/program/')");
  const hasDynamicArticle = appContent.includes('/artikel/') || appContent.includes("startsWith('/artikel/')");

  if (fs.existsSync(MOCK_DATA_PATH)) {
    const mockContent = fs.readFileSync(MOCK_DATA_PATH, 'utf-8');

    if (hasDynamicProgram) {
      // Extract program IDs (paket-a, paket-b, paket-c, vokasi-ai)
      const programMatches = mockContent.match(/id:\s*['"](paket-[a-c]|vokasi-[a-z0-9-]+)['"]/g);
      if (programMatches) {
        const foundPrograms = new Set<string>();
        programMatches.forEach((m) => {
          const clean = m.replace(/id:\s*['"]/, '').replace(/['"]/, '');
          foundPrograms.add(clean);
        });

        foundPrograms.forEach((slug) => {
          routes.push({
            path: `/program/${slug}`,
            changefreq: 'weekly',
            priority: slug === 'paket-c' ? '0.9' : '0.8',
            lastmod: currentDate
          });
        });
      }
    }

    if (hasDynamicArticle) {
      // Extract article slugs and updatedDate/publishedDate
      // Match objects in INITIAL_ARTICLES
      const slugRegex = /slug:\s*['"]([a-zA-Z0-9-]+)['"]/g;
      const foundSlugs = new Set<string>();
      let sMatch;
      while ((sMatch = slugRegex.exec(mockContent)) !== null) {
        // Exclude keyword cluster slugs if any, only keep article slugs
        const s = sMatch[1];
        if (s !== 'slug' && !foundSlugs.has(s)) {
          foundSlugs.add(s);
        }
      }

      foundSlugs.forEach((slug) => {
        const isPillar = slug.includes('panduan-lengkap-pendidikan-kesetaraan-paket-c');
        routes.push({
          path: `/artikel/${slug}`,
          changefreq: 'weekly',
          priority: isPillar ? '0.9' : '0.8',
          lastmod: currentDate
        });
      });
    }
  }

  // Sort routes by priority descending, then by path alphabetically
  routes.sort((a, b) => {
    const pDiff = parseFloat(b.priority) - parseFloat(a.priority);
    if (pDiff !== 0) return pDiff;
    return a.path.localeCompare(b.path);
  });

  return routes;
}

function getFallbackRoutes(currentDate: string): CrawledRoute[] {
  return [
    { path: '', changefreq: 'daily', priority: '1.0', lastmod: currentDate },
    { path: '/program', changefreq: 'daily', priority: '0.9', lastmod: currentDate },
    { path: '/program/paket-c', changefreq: 'weekly', priority: '0.9', lastmod: currentDate },
    { path: '/program/paket-b', changefreq: 'weekly', priority: '0.8', lastmod: currentDate },
    { path: '/program/paket-a', changefreq: 'weekly', priority: '0.8', lastmod: currentDate },
    { path: '/program/vokasi-ai', changefreq: 'weekly', priority: '0.8', lastmod: currentDate },
    { path: '/pendaftaran', changefreq: 'daily', priority: '0.9', lastmod: currentDate },
    { path: '/artikel', changefreq: 'daily', priority: '0.9', lastmod: currentDate },
    { path: '/tentang', changefreq: 'weekly', priority: '0.8', lastmod: currentDate },
    { path: '/panduan', changefreq: 'weekly', priority: '0.8', lastmod: currentDate },
    { path: '/faq', changefreq: 'weekly', priority: '0.8', lastmod: currentDate },
    { path: '/kontak', changefreq: 'weekly', priority: '0.8', lastmod: currentDate }
  ];
}

/**
 * Builds standard XML sitemap
 */
function buildSitemapXml(routes: CrawledRoute[]): string {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n`;
  xml += `        xmlns:xhtml="http://www.w3.org/1999/xhtml"\n`;
  xml += `        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n`;

  routes.forEach((route) => {
    const fullUrl = `${BASE_URL}${route.path}`;
    xml += `  <url>\n`;
    xml += `    <loc>${fullUrl}</loc>\n`;
    xml += `    <lastmod>${route.lastmod}</lastmod>\n`;
    xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
    xml += `    <priority>${route.priority}</priority>\n`;
    xml += `  </url>\n`;
  });

  xml += `</urlset>\n`;
  return xml;
}

/**
 * Builds hardened robots.txt configuration file tailored for SEO best practices
 */
function buildRobotsTxt(): string {
  const currentDate = new Date().toISOString().split('T')[0];

  return `# ==============================================================================
# Robots.txt Configuration - PKBM Celah Cahaya Garut
# Domain: https://www.celahcahaya.sch.id
# Target: Official Education & Equivalency Portal (NPSN: P9997425)
# Auto-generated by generate-sitemap.ts: ${currentDate}
# ==============================================================================

# 1. Default crawl rules for all legitimate search engines & crawlers
User-agent: *
Allow: /
Allow: /program/
Allow: /artikel/
Allow: /panduan/
Allow: /beasiswa/
Allow: /kegiatan/
Allow: /pendaftaran
Allow: /tentang
Allow: /faq
Allow: /kontak
Allow: /sitemap
Allow: /seo-strategi

# 2. Critical: Explicitly allow CSS, JavaScript & WebP images for Googlebot Page Experience rendering
Allow: /assets/
Allow: /public/
Allow: /*.webp$
Allow: /*.jpg$
Allow: /*.jpeg$
Allow: /*.png$
Allow: /*.svg$
Allow: /*.css$
Allow: /*.js$

# 3. Disallow administrative and private internal endpoints
Disallow: /admin-cms
Disallow: /api/
Disallow: /*?*search=
Disallow: /*?*preview=

# 4. Search Engine specific indexing preferences
User-agent: Googlebot
Allow: /
Crawl-delay: 1

User-agent: Googlebot-Image
Allow: /assets/
Allow: /*.webp$
Allow: /*.jpg$
Allow: /*.png$

User-agent: Bingbot
Allow: /
Crawl-delay: 2

# 5. Block aggressive AI scraping / content scrapers that don't pass search traffic
User-agent: CCBot
Disallow: /

User-agent: GPTBot
Disallow: /admin-cms

User-agent: anthropic-ai
Disallow: /admin-cms

# 6. Sitemaps and Host Directives
Sitemap: ${BASE_URL}/sitemap.xml
Host: ${BASE_URL}
`;
}

/**
 * Concurrently generate both sitemap.xml and robots.txt
 */
export async function runGenerateSitemapAndRobots() {
  console.log('[generate-sitemap] Crawling App.tsx route definitions...');
  const routes = crawlRoutesFromAppTsx();
  console.log(`[generate-sitemap] Found ${routes.length} published routes.`);

  if (!fs.existsSync(PUBLIC_DIR)) {
    fs.mkdirSync(PUBLIC_DIR, { recursive: true });
  }

  const sitemapXml = buildSitemapXml(routes);
  const robotsTxt = buildRobotsTxt();

  const sitemapPath = path.join(PUBLIC_DIR, 'sitemap.xml');
  const robotsPath = path.join(PUBLIC_DIR, 'robots.txt');

  // Concurrently write both files
  await Promise.all([
    fs.promises.writeFile(sitemapPath, sitemapXml, 'utf-8'),
    fs.promises.writeFile(robotsPath, robotsTxt, 'utf-8')
  ]);

  console.log(`[generate-sitemap] ✅ Successfully generated: ${sitemapPath} (${routes.length} URLs)`);
  console.log(`[generate-sitemap] ✅ Successfully generated: ${robotsPath}`);
  
  return {
    routesCount: routes.length,
    sitemapPath,
    robotsPath
  };
}

// Auto-execute if run directly via CLI (tsx generate-sitemap.ts)
const isDirectExecution = process.argv[1] && (
  process.argv[1].endsWith('generate-sitemap.ts') || 
  process.argv[1].endsWith('generate-sitemap.js')
);

if (isDirectExecution) {
  runGenerateSitemapAndRobots()
    .then(() => process.exit(0))
    .catch((err) => {
      console.error('[generate-sitemap] ❌ Error executing script:', err);
      process.exit(1);
    });
}
