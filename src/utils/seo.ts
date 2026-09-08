/**
 * SEO Utility for dynamic metadata, OpenGraph, Canonical tags, and JSON-LD Structured Data
 */

export interface SEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  keywords?: string[];
  ogType?: 'website' | 'article';
  ogImage?: string;
  publishedTime?: string;
  modifiedTime?: string;
  authorName?: string;
  schemas?: Record<string, any>[];
}

const BASE_URL = 'https://www.celahcahaya.sch.id';

export function updateMetaTags({
  title,
  description,
  canonicalPath = '',
  keywords = [],
  ogType = 'website',
  ogImage = 'https://blogger.googleusercontent.com/img/a/AVvXsEhWfI4H4uVtyAqg-a-tYYkMV-E-invtSbOIT9z7BtpkiFc7Yq_VRlKD4sAVmg-l7EchzdfhVJechv7PlNmt3f3VTVQFq2fB-HmdZctQngiZmGnPB31nXDgT4Xc4i46-cgTtg0pNcJFmwCLTwjla7aS0pBz-erB6xrfIHTg9YWAfnccARN9nMZPrXEiCZewu',
  publishedTime,
  modifiedTime,
  authorName = 'PKBM Celah Cahaya',
  schemas = []
}: SEOProps) {
  // Update Title
  const formattedTitle = title.includes('Celah Cahaya') ? title : `${title} | Celah Cahaya Garut`;
  document.title = formattedTitle;

  // Helper to set or create meta
  const setMeta = (name: string, content: string, isProperty = false) => {
    const attribute = isProperty ? 'property' : 'name';
    let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement | null;
    if (!element) {
      element = document.createElement('meta');
      element.setAttribute(attribute, name);
      document.head.appendChild(element);
    }
    element.setAttribute('content', content);
  };

  // Standard Meta
  setMeta('description', description);
  if (keywords.length > 0) {
    setMeta('keywords', keywords.join(', '));
  }
  setMeta('author', authorName);

  // Canonical Link
  const fullCanonicalUrl = `${BASE_URL}${canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`}`;
  let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!canonicalLink) {
    canonicalLink = document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalLink);
  }
  canonicalLink.setAttribute('href', fullCanonicalUrl);

  // Open Graph
  setMeta('og:title', formattedTitle, true);
  setMeta('og:description', description, true);
  setMeta('og:url', fullCanonicalUrl, true);
  setMeta('og:type', ogType, true);
  setMeta('og:image', ogImage, true);
  setMeta('og:site_name', 'Celah Cahaya', true);
  setMeta('og:locale', 'id_ID', true);

  // Twitter
  setMeta('twitter:card', 'summary_large_image');
  setMeta('twitter:title', formattedTitle);
  setMeta('twitter:description', description);
  setMeta('twitter:image', ogImage);

  if (ogType === 'article') {
    if (publishedTime) setMeta('article:published_time', publishedTime, true);
    if (modifiedTime) setMeta('article:modified_time', modifiedTime, true);
    if (authorName) setMeta('article:author', authorName, true);
  }

  // Manage Dynamic Page Schemas
  // Remove previously injected dynamic schemas
  document.querySelectorAll('script[data-schema="dynamic-page"]').forEach(el => el.remove());

  // Inject new schemas if any
  schemas.forEach((schemaObj, index) => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-schema', 'dynamic-page');
    script.id = `dynamic-schema-${index}`;
    script.textContent = JSON.stringify(schemaObj, null, 2);
    document.head.appendChild(script);
  });
}

/**
 * Generate XML Sitemap dynamically
 */
export function generateSitemapXml(articles: { slug: string; updatedDate: string }[]): string {
  const staticRoutes = [
    { loc: '', changefreq: 'daily', priority: '1.0' },
    { loc: '/tentang', changefreq: 'weekly', priority: '0.8' },
    { loc: '/program', changefreq: 'weekly', priority: '0.9' },
    { loc: '/program/paket-a', changefreq: 'weekly', priority: '0.8' },
    { loc: '/program/paket-b', changefreq: 'weekly', priority: '0.8' },
    { loc: '/program/paket-c', changefreq: 'weekly', priority: '0.9' },
    { loc: '/program/vokasi-ai', changefreq: 'weekly', priority: '0.8' },
    { loc: '/artikel', changefreq: 'daily', priority: '0.9' },
    { loc: '/panduan', changefreq: 'weekly', priority: '0.8' },
    { loc: '/beasiswa', changefreq: 'monthly', priority: '0.7' },
    { loc: '/kegiatan', changefreq: 'weekly', priority: '0.7' },
    { loc: '/pendaftaran', changefreq: 'daily', priority: '0.9' },
    { loc: '/faq', changefreq: 'weekly', priority: '0.8' },
    { loc: '/kontak', changefreq: 'monthly', priority: '0.8' },
    { loc: '/sitemap', changefreq: 'monthly', priority: '0.5' },
    { loc: '/seo-strategy', changefreq: 'weekly', priority: '0.7' }
  ];

  const currentDate = new Date().toISOString().split('T')[0];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  staticRoutes.forEach(route => {
    xml += `  <url>\n    <loc>${BASE_URL}${route.loc}</loc>\n    <lastmod>${currentDate}</lastmod>\n    <changefreq>${route.changefreq}</changefreq>\n    <priority>${route.priority}</priority>\n  </url>\n`;
  });

  articles.forEach(article => {
    xml += `  <url>\n    <loc>${BASE_URL}/artikel/${article.slug}</loc>\n    <lastmod>${article.updatedDate}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;
  });

  xml += `</urlset>`;
  return xml;
}

/**
 * Generate Robots.txt content
 */
export function generateRobotsTxt(): string {
  return `# Robots.txt for Celah Cahaya (https://www.celahcahaya.sch.id)
User-agent: *
Allow: /
Disallow: /admin
Disallow: /api/

# Host & Sitemaps
Host: https://www.celahcahaya.sch.id
Sitemap: https://www.celahcahaya.sch.id/sitemap.xml
`;
}

/**
 * Generate RSS Feed XML
 */
export function generateRssXml(articles: any[]): string {
  let rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>Celah Cahaya - Artikel Pendidikan & Kesetaraan</title>
  <link>${BASE_URL}</link>
  <description>Artikel, tutorial, dan wawasan resmi seputar pendidikan nonformal, Paket A, Paket B, Paket C, dan teknologi AI dari PKBM Celah Cahaya Garut.</description>
  <language>id-ID</language>
  <atom:link href="${BASE_URL}/rss.xml" rel="self" type="application/rss+xml" />
`;

  articles.forEach(art => {
    rss += `  <item>
    <title><![CDATA[${art.title}]]></title>
    <link>${BASE_URL}/artikel/${art.slug}</link>
    <guid>${BASE_URL}/artikel/${art.slug}</guid>
    <pubDate>${new Date(art.publishedDate).toUTCString()}</pubDate>
    <description><![CDATA[${art.excerpt}]]></description>
    <category>${art.category}</category>
  </item>
`;
  });

  rss += `</channel>
</rss>`;
  return rss;
}
