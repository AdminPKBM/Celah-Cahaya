import React from 'react';
import { Clock, Calendar, ArrowRight, User, Star } from 'lucide-react';
import { Article } from '../types';
import { OptimizedImage } from './OptimizedImage';

interface ArticleCardProps {
  article: Article;
  onRead: (slug: string) => void;
  featured?: boolean;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article, onRead, featured = false }) => {
  return (
    <article 
      className={`group bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col ${
        featured ? 'md:grid md:grid-cols-12 md:gap-6' : ''
      }`}
    >
      {/* Featured Image */}
      <div 
        className={`relative overflow-hidden cursor-pointer bg-stone-100 ${
          featured ? 'md:col-span-6 aspect-16/10 md:aspect-auto md:h-full' : 'aspect-16/9 w-full'
        }`}
        onClick={() => onRead(article.slug)}
      >
        <OptimizedImage
          src={article.featuredImage}
          alt={article.featuredImageAlt || article.title}
          width={600}
          height={340}
          aspectRatio="16/9"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Category & Intent Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-2 z-10">
          <span className="bg-[#0284C7] text-white text-[11px] font-semibold px-2.5 py-1 rounded-md shadow-xs">
            {article.category}
          </span>
          {article.isPillar && (
            <span className="bg-slate-900/90 text-amber-300 text-[11px] font-semibold px-2.5 py-1 rounded-md shadow-xs flex items-center gap-1">
              <Star className="w-3 h-3 fill-amber-300" />
              Pillar Content
            </span>
          )}
        </div>
      </div>

      {/* Content Area */}
      <div className={`p-5 sm:p-6 flex flex-col justify-between flex-1 ${featured ? 'md:col-span-6' : ''}`}>
        <div>
          {/* Metadata Row */}
          <div className="flex items-center text-xs text-slate-500 space-x-3 mb-2.5">
            <span className="flex items-center">
              <Calendar className="w-3.5 h-3.5 mr-1 text-slate-400" />
              {article.publishedDate}
            </span>
            <span>•</span>
            <span className="flex items-center">
              <Clock className="w-3.5 h-3.5 mr-1 text-slate-400" />
              {article.readingTimeMinutes} mnt baca
            </span>
          </div>

          {/* Heading */}
          <h3 
            onClick={() => onRead(article.slug)}
            className={`font-bold text-slate-900 group-hover:text-[#0284C7] transition-colors cursor-pointer line-clamp-2 ${
              featured ? 'text-xl sm:text-2xl mb-3' : 'text-base sm:text-lg mb-2'
            }`}
          >
            {article.title}
          </h3>

          {/* Excerpt */}
          <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed mb-4">
            {article.excerpt}
          </p>
        </div>

        {/* Footer info: Author & CTA */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
          <div className="flex items-center space-x-2">
            <img 
              src={article.author.avatar} 
              alt={article.author.name}
              width={28}
              height={28}
              className="w-7 h-7 rounded-full object-cover border border-slate-200" 
            />
            <span className="text-xs font-medium text-slate-700 truncate max-w-[130px]">
              {article.author.name}
            </span>
          </div>

          <button
            onClick={() => onRead(article.slug)}
            className="inline-flex items-center text-xs font-semibold text-[#0284C7] hover:text-[#0369A1] transition-colors cursor-pointer"
          >
            <span>Baca Panduan</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </article>
  );
};
