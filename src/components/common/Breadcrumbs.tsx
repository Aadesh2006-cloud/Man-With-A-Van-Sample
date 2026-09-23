import React from 'react';
import { useRouter } from '../../context/RouterContext';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  onClick?: () => void;
  current?: boolean;
}

export const Breadcrumbs: React.FC<{ items: BreadcrumbItem[] }> = ({ items }) => {
  const { navigateTo } = useRouter();

  return (
    <nav className="flex items-center space-x-2 text-xs text-slate-500 py-3" aria-label="Breadcrumb">
      <button
        onClick={() => navigateTo({ name: 'home' })}
        className="flex items-center gap-1 hover:text-slate-900 transition-colors cursor-pointer"
      >
        <Home className="w-3.5 h-3.5 text-slate-400" />
        <span>Home</span>
      </button>

      {items.map((item, index) => (
        <React.Fragment key={index}>
          <ChevronRight className="w-3.5 h-3.5 text-slate-300 shrink-0" />
          {item.current ? (
            <span className="font-semibold text-slate-900 truncate max-w-xs" aria-current="page">
              {item.label}
            </span>
          ) : (
            <button
              onClick={item.onClick}
              className="hover:text-slate-900 transition-colors cursor-pointer truncate max-w-xs"
            >
              {item.label}
            </button>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};
