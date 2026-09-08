import React, { useState, useEffect } from 'react';
import { INITIAL_ARTICLES, INSTITUTION_INFO } from '../data/mockData';
import { Breadcrumb } from '../components/Breadcrumb';
import { OptimizedImage } from '../components/OptimizedImage';
import { 
  Calendar, Clock, Share2, Bookmark, CheckCircle2, 
  HelpCircle, ArrowRight, User, Star, Copy, Check, ExternalLink 
} from 'lucide-react';
import { updateMetaTags } from '../utils/seo';

interface ArticleDetailPageProps {
  slug: string;
  onNavigate: (path: string) => void;
}

export const ArticleDetailPage: React.FC<ArticleDetailPageProps> = ({ slug, onNavigate }) => {
  const [copied, setCopied] = useState(false);
  const article = INITIAL_ARTICLES.find((a) => a.slug === slug) || INITIAL_ARTICLES[0];

  // Dynamic SEO meta tags and Schema.org injection
  useEffect(() => {
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": article.title,
      "description": article.metaDescription,
      "image": [article.featuredImage],
      "datePublished": article.publishedDate,
      "dateModified": article.updatedDate,
      "author": [{
        "@type": "Person",
        "name": article.author.name,
        "jobTitle": article.author.role
      }],
      "publisher": {
        "@type": "Organization",
        "name": INSTITUTION_INFO.name,
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.celahcahaya.sch.id/logo.png"
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://www.celahcahaya.sch.id/artikel/${article.slug}`
      }
    };

    const faqSchema = article.faqs.length > 0 ? {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": article.faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    } : null;

    const schemas = faqSchema ? [articleSchema, faqSchema] : [articleSchema];

    updateMetaTags({
      title: article.metaTitle || article.title,
      description: article.metaDescription || article.excerpt,
      canonicalPath: `/artikel/${article.slug}`,
      keywords: [article.primaryKeyword, ...article.secondaryKeywords],
      ogType: 'article',
      ogImage: article.featuredImage,
      publishedTime: article.publishedDate,
      modifiedTime: article.updatedDate,
      authorName: article.author.name,
      schemas
    });
  }, [article]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const relatedArticles = INITIAL_ARTICLES.filter(
    (a) => a.slug !== article.slug && (article.relatedArticleSlugs?.includes(a.slug) || a.category === article.category)
  ).slice(0, 3);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Breadcrumb with schema */}
      <Breadcrumb
        items={[
          { name: 'Artikel', path: '/artikel' },
          { name: article.title }
        ]}
        onNavigate={onNavigate}
      />

      {/* Article Header */}
      <header className="space-y-4">
        {/* Category & Intent Badges */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="bg-sky-100 text-sky-900 text-xs font-semibold px-3 py-1 rounded-full border border-sky-200">
            {article.category}
          </span>
          <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full">
            Intent: {article.searchIntent}
          </span>
          {article.isPillar && (
            <span className="bg-slate-900 text-sky-300 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
              <Star className="w-3 h-3 fill-sky-300" />
              Pillar Content Induk
            </span>
          )}
        </div>

        {/* H1 SEO Title */}
        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-[1.2]">
          {article.title}
        </h1>

        {/* Author & Publication Metadata (E-E-A-T) */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-slate-200 text-xs text-slate-500">
          <div className="flex items-center space-x-3">
            <img
              src={article.author.avatar}
              alt={article.author.name}
              className="w-10 h-10 rounded-full object-cover border border-slate-200 shadow-2xs"
            />
            <div>
              <div className="font-bold text-slate-900 text-sm">{article.author.name}</div>
              <div className="text-slate-500 text-[11px]">{article.author.role}</div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Calendar className="w-3.5 h-3.5 mr-1 text-slate-400" />
              <span>Publikasi: {article.publishedDate}</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-3.5 h-3.5 mr-1 text-slate-400" />
              <span>{article.readingTimeMinutes} menit baca</span>
            </div>
            <button
              onClick={handleCopyLink}
              className="inline-flex items-center space-x-1 text-[#0284C7] hover:text-[#0369A1] font-semibold px-2 py-1 bg-sky-50 rounded-md border border-sky-200 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Tersalin' : 'Salin Tautan'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Featured Image (Optimized WebP for LCP) */}
      <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-200">
        <OptimizedImage
          src={article.featuredImage}
          alt={article.featuredImageAlt}
          width={1200}
          height={630}
          isLCP={true}
          aspectRatio="16/9"
          className="w-full h-72 sm:h-96 object-cover"
        />
        <div className="bg-slate-50 px-4 py-2 text-[11px] text-slate-500 italic text-center border-t border-slate-200">
          {article.featuredImageAlt}
        </div>
      </div>

      {/* Table of Contents (Daftar Isi) */}
      {article.tableOfContents && article.tableOfContents.length > 0 && (
        <nav aria-label="Daftar Isi Artikel" className="bg-sky-50/70 p-6 rounded-2xl border border-sky-200/80 space-y-3">
          <div className="font-bold text-slate-900 text-sm sm:text-base flex items-center">
            <span>Daftar Isi Pembahasan (Table of Contents)</span>
          </div>
          <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
            {article.tableOfContents.map((toc) => (
              <li key={toc.id} className="hover:text-[#0284C7] transition-colors">
                <a href={`#${toc.id}`} className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]"></span>
                  <span>{toc.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {/* Main Content Body (Formatted Clean Reading) */}
      <div className="prose prose-slate max-w-none space-y-6 text-slate-700 leading-relaxed text-sm sm:text-base">
        {article.content.split('\n\n').map((paragraph, index) => {
          // Handle H2 Headings
          if (paragraph.startsWith('## ')) {
            const headingText = paragraph.replace('## ', '');
            const idMatch = headingText.match(/\{#(.*?)\}/);
            const cleanText = headingText.replace(/\{#.*?\}/, '').trim();
            const id = idMatch ? idMatch[1] : `section-${index}`;
            return (
              <h2 key={index} id={id} className="text-xl sm:text-2xl font-bold text-slate-900 pt-6 pb-2 border-b border-slate-200">
                {cleanText}
              </h2>
            );
          }

          // Handle Blockquote
          if (paragraph.startsWith('> ')) {
            const quoteContent = paragraph.replace(/^>\s*/gm, '');
            return (
              <blockquote key={index} className="p-4 bg-sky-50 border-l-4 border-[#0284C7] rounded-r-xl text-xs sm:text-sm text-sky-950 font-medium my-4">
                <span dangerouslySetInnerHTML={{ __html: quoteContent.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
              </blockquote>
            );
          }

          // Handle Markdown Table
          if (paragraph.includes('|') && paragraph.includes('---')) {
            const rows = paragraph.trim().split('\n').filter(r => r.trim().startsWith('|'));
            if (rows.length >= 2) {
              const headerCells = rows[0].split('|').map(c => c.trim()).filter(Boolean);
              const dataRows = rows.slice(2); // skip header and divider row
              return (
                <div key={index} className="overflow-x-auto my-6 rounded-2xl border border-slate-200">
                  <table className="w-full text-left text-xs sm:text-sm text-slate-700">
                    <thead className="bg-sky-50 text-sky-900 font-bold border-b border-sky-100">
                      <tr>
                        {headerCells.map((hc, i) => (
                          <th key={i} className="p-3 whitespace-nowrap">{hc.replace(/\*\*(.*?)\*\*/g, '$1')}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 bg-white">
                      {dataRows.map((row, rIdx) => {
                        const cells = row.split('|').map(c => c.trim()).filter(Boolean);
                        return (
                          <tr key={rIdx} className="hover:bg-slate-50">
                            {cells.map((cell, cIdx) => (
                              <td key={cIdx} className="p-3" dangerouslySetInnerHTML={{ __html: cell.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                            ))}
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              );
            }
          }

          // Handle Lists
          if (paragraph.startsWith('* ') || paragraph.startsWith('- ')) {
            const items = paragraph.split('\n');
            return (
              <ul key={index} className="space-y-2 list-disc pl-5 text-slate-700">
                {items.map((item, idx) => (
                  <li key={idx}>
                    <span dangerouslySetInnerHTML={{ __html: item.replace(/^(\*|-)\s+/, '').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                  </li>
                ))}
              </ul>
            );
          }

          // Handle Callout / Separator
          if (paragraph === '---') {
            return <hr key={index} className="my-8 border-slate-200" />;
          }

          // Default Paragraph with simple bold support
          return (
            <p key={index} className="leading-relaxed" dangerouslySetInnerHTML={{
              __html: paragraph
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                .replace(/\*(.*?)\*/g, '<em>$1</em>')
            }} />
          );
        })}
      </div>

      {/* FAQ Accordion Section for this Article */}
      {article.faqs && article.faqs.length > 0 && (
        <section className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-4">
          <div className="flex items-center space-x-2 text-slate-900 font-bold text-lg">
            <HelpCircle className="w-5 h-5 text-[#0284C7]" />
            <h3>FAQ Seputar {article.primaryKeyword}</h3>
          </div>
          <div className="space-y-3">
            {article.faqs.map((faq, i) => (
              <div key={i} className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-2xs space-y-1.5">
                <h4 className="font-bold text-slate-900 text-xs sm:text-sm">{faq.question}</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Author Bio Box (E-E-A-T) */}
      <section className="bg-white p-6 rounded-3xl border border-slate-200 flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 shadow-xs">
        <img
          src={article.author.avatar}
          alt={article.author.name}
          className="w-16 h-16 rounded-full object-cover border-2 border-[#0284C7] shrink-0"
        />
        <div className="space-y-1 text-center sm:text-left">
          <div className="text-xs font-bold text-[#0284C7] uppercase tracking-wider">Tentang Penulis (Author Expertise)</div>
          <h4 className="font-bold text-slate-900 text-base">{article.author.name}</h4>
          <p className="text-xs text-slate-500 font-medium">{article.author.role}</p>
          <p className="text-xs text-slate-600 leading-relaxed pt-1">{article.author.bio}</p>
        </div>
      </section>

      {/* Call to Action Pendaftaran Warga Belajar */}
      <section className="bg-gradient-to-r from-[#0284C7] to-[#0369A1] text-white p-6 sm:p-8 rounded-3xl shadow-lg flex flex-col sm:flex-row justify-between items-center gap-6">
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="font-bold text-lg sm:text-xl">Tertarik Mendaftar {article.primaryKeyword}?</h3>
          <p className="text-xs sm:text-sm text-sky-100">
            Dapatkan bimbingan penuh dari pendaftaran hingga wisuda dan ijazah resmi negara di Celah Cahaya Garut.
          </p>
        </div>
        <button
          onClick={() => onNavigate('/pendaftaran')}
          className="px-6 py-3 bg-white text-[#0284C7] hover:bg-sky-50 font-bold rounded-xl text-xs sm:text-sm shrink-0 transition-all shadow-md active:scale-98"
        >
          Daftar Warga Belajar Sekarang
        </button>
      </section>

      {/* Related Articles (Internal Linking) */}
      {relatedArticles.length > 0 && (
        <section className="space-y-4 pt-6 border-t border-slate-200">
          <h3 className="font-bold text-lg text-slate-900">
            Artikel Terkait Lainnya (Internal Cluster)
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {relatedArticles.map((rel) => (
              <div
                key={rel.id}
                onClick={() => onNavigate(`/artikel/${rel.slug}`)}
                className="p-4 bg-white rounded-2xl border border-slate-200 hover:border-[#0284C7] hover:shadow-xs transition-all cursor-pointer space-y-2 group"
              >
                <div className="text-[11px] font-semibold text-[#0284C7]">{rel.category}</div>
                <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#0284C7] transition-colors line-clamp-2">
                  {rel.title}
                </h4>
                <div className="text-xs font-semibold text-slate-500 flex items-center pt-1">
                  <span>Baca Selengkapnya</span>
                  <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
