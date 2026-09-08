import React, { useEffect } from 'react';
import { INITIAL_ARTICLES, PROGRAMS_DATA } from '../data/mockData';

export interface BreadcrumbEntry {
  name: string;
  url: string;
}

const BASE_URL = 'https://www.celahcahaya.sch.id';

/**
 * Resolves the structured breadcrumb hierarchy for any app route
 */
export function getBreadcrumbEntriesForPath(currentPath: string): BreadcrumbEntry[] {
  const cleanPath = currentPath.split('?')[0].replace(/\/$/, '') || '/';
  const crumbs: BreadcrumbEntry[] = [
    { name: 'Beranda', url: `${BASE_URL}/` }
  ];

  if (cleanPath === '/') {
    return crumbs;
  }

  // 1. Article Detail Route (/artikel/:slug)
  if (cleanPath.startsWith('/artikel/')) {
    const slug = cleanPath.replace('/artikel/', '');
    crumbs.push({ name: 'Artikel & Panduan', url: `${BASE_URL}/artikel` });
    const matchedArticle = INITIAL_ARTICLES.find(a => a.slug === slug);
    const title = matchedArticle ? matchedArticle.title : slug.replace(/-/g, ' ');
    crumbs.push({ name: title, url: `${BASE_URL}${cleanPath}` });
    return crumbs;
  }

  // 2. Program Detail Route (/program/:slug)
  if (cleanPath.startsWith('/program/')) {
    const slug = cleanPath.replace('/program/', '');
    crumbs.push({ name: 'Program Pendidikan', url: `${BASE_URL}/program` });
    const matchedProgram = PROGRAMS_DATA.find(p => p.slug === slug);
    const progName = matchedProgram ? matchedProgram.name : slug.toUpperCase();
    crumbs.push({ name: progName, url: `${BASE_URL}${cleanPath}` });
    return crumbs;
  }

  // 3. Static Pages Mapping
  const staticTitles: Record<string, string> = {
    '/tentang': 'Tentang Kami & Legalitas',
    '/program': 'Program Pendidikan Kesetaraan',
    '/artikel': 'Artikel & Panduan Edukasi',
    '/panduan': 'Pusat Panduan & Tutorial',
    '/beasiswa': 'Informasi Beasiswa KIP',
    '/kegiatan': 'Dokumentasi Kegiatan & Ujian',
    '/pendaftaran': 'Pendaftaran Warga Belajar',
    '/faq': 'Tanya Jawab (FAQ)',
    '/kontak': 'Kontak & Lokasi Lembaga',
    '/sitemap': 'Peta Situs (Sitemap)',
    '/admin-cms': 'Manajemen Konten & SEO',
    '/seo-strategi': 'Strategi SEO & Klaster Topik'
  };

  if (staticTitles[cleanPath]) {
    crumbs.push({ name: staticTitles[cleanPath], url: `${BASE_URL}${cleanPath}` });
  } else {
    const segments = cleanPath.split('/').filter(Boolean);
    let accumulated = '';
    segments.forEach(seg => {
      accumulated += `/${seg}`;
      crumbs.push({
        name: seg.charAt(0).toUpperCase() + seg.slice(1).replace(/-/g, ' '),
        url: `${BASE_URL}${accumulated}`
      });
    });
  }

  return crumbs;
}

/**
 * Builds Schema.org compliant BreadcrumbList JSON-LD object
 */
export function generateBreadcrumbListSchema(crumbs: BreadcrumbEntry[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': crumb.name,
      'item': crumb.url
    }))
  };
}

interface BreadcrumbSchemaProps {
  currentPath: string;
}

/**
 * Global BreadcrumbList JSON-LD Schema component for App.tsx
 * Automatically registers breadcrumbs with Google for every route visited.
 */
export const BreadcrumbSchema: React.FC<BreadcrumbSchemaProps> = ({ currentPath }) => {
  useEffect(() => {
    const crumbs = getBreadcrumbEntriesForPath(currentPath);
    const schemaData = generateBreadcrumbListSchema(crumbs);

    let scriptTag = document.getElementById('schema-breadcrumb-jsonld') as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'schema-breadcrumb-jsonld';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    scriptTag.textContent = JSON.stringify(schemaData, null, 2);

    return () => {
      // Keep breadcrumb clean on teardown if needed
    };
  }, [currentPath]);

  return null;
};
