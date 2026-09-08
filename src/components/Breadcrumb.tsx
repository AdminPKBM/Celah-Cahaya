import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  name: string;
  path?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  onNavigate: (path: string) => void;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, onNavigate }) => {
  return (
    <nav aria-label="Breadcrumb" className="py-3 px-4 bg-slate-100/70 rounded-xl mb-6 border border-slate-200/70 text-xs sm:text-sm">
      <ol className="flex items-center flex-wrap space-x-1 sm:space-x-2 text-slate-600">
        <li>
          <button
            onClick={() => onNavigate('/')}
            className="flex items-center text-slate-500 hover:text-[#0284C7] transition-colors"
          >
            <Home className="w-3.5 h-3.5 mr-1" />
            <span>Beranda</span>
          </button>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center space-x-1 sm:space-x-2">
              <ChevronRight className="w-3 h-3 text-slate-400 shrink-0" />
              {isLast || !item.path ? (
                <span className="font-semibold text-slate-800 line-clamp-1 max-w-xs sm:max-w-md" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <button
                  onClick={() => onNavigate(item.path!)}
                  className="text-slate-600 hover:text-[#0284C7] transition-colors line-clamp-1"
                >
                  {item.name}
                </button>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
