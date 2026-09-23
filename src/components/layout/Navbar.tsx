import React, { useState } from 'react';
import { useRouter } from '../../context/RouterContext';
import { Phone, Menu, X, ArrowRight, ShieldCheck, Truck } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { currentPage, navigateTo } = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const mobileNavLinks = [
    { label: 'Home', page: { name: 'home' as const }, active: currentPage.name === 'home' },
    { 
      label: 'Services Catalog', 
      page: { name: 'services' as const }, 
      active: currentPage.name === 'services' || currentPage.name === 'service-detail' 
    },
    { label: 'Storage Solutions', page: { name: 'storage' as const }, active: currentPage.name === 'storage' },
    { label: 'Instant Cost Estimator', page: { name: 'calculator' as const }, active: currentPage.name === 'calculator' },
    { label: 'Fleet & Company Info', page: { name: 'about' as const }, active: currentPage.name === 'about' },
    { label: 'Moving Checklist & Guide', page: { name: 'moving-guide' as const }, active: currentPage.name === 'moving-guide' },
    { label: 'Customer Reviews (4.9★)', page: { name: 'reviews' as const }, active: currentPage.name === 'reviews' },
    { label: 'Contact & Dispatch', page: { name: 'contact' as const }, active: currentPage.name === 'contact' }
  ];

  const desktopNavLinks = [
    { label: 'Home', page: { name: 'home' as const }, active: currentPage.name === 'home' },
    { 
      label: 'Services', 
      page: { name: 'services' as const }, 
      active: currentPage.name === 'services' || currentPage.name === 'service-detail' 
    },
    { label: 'Storage', page: { name: 'storage' as const }, active: currentPage.name === 'storage' },
    { label: 'Calculator', page: { name: 'calculator' as const }, active: currentPage.name === 'calculator' },
    { label: 'Fleet & About', page: { name: 'about' as const }, active: currentPage.name === 'about' },
    { label: 'Checklist', page: { name: 'moving-guide' as const }, active: currentPage.name === 'moving-guide' },
    { label: 'Reviews', page: { name: 'reviews' as const }, active: currentPage.name === 'reviews' },
    { label: 'Contact', page: { name: 'contact' as const }, active: currentPage.name === 'contact' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-colors">
      {/* Emergency dispatch top announcement hairline */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-3 sm:px-4 lg:px-6">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-amber-400 font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Licensed & Fully Insured Carrier</span>
            </span>
            <span className="hidden sm:inline text-slate-500">·</span>
            <span className="hidden sm:inline text-slate-300">Over 15,000 Moves Completed</span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <button 
              onClick={() => navigateTo({ name: 'booking-lookup' })} 
              className="text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              Track Move / Estimate
            </button>
            <span className="text-slate-600">|</span>
            <a 
              href="tel:18005556683" 
              className="font-medium text-amber-400 hover:text-amber-300 flex items-center gap-1"
            >
              <Phone className="w-3 h-3" />
              <span>1-800-555-MOVE</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main 3-Zone Top Bar Contract */}
      <div className="max-w-[1440px] mx-auto px-3 sm:px-4 lg:pl-3 lg:pr-5 xl:pl-4 xl:pr-6">
        <div className="flex items-center justify-between h-18">
          {/* Zone 1: Single text element Brand Zone shifted left with divider */}
          <div className="flex items-center shrink-0 mr-3 lg:mr-5 xl:mr-6">
            <button 
              onClick={() => navigateTo({ name: 'home' })}
              className="group flex items-center gap-2 sm:gap-2.5 text-left cursor-pointer focus-visible:outline-none"
              title="Man With A Van Moving Company - Home"
            >
              <div className="w-8 h-8 sm:w-8.5 sm:h-8.5 rounded-xl bg-amber-500 flex items-center justify-center text-slate-950 font-black shadow-xs group-hover:bg-amber-400 group-hover:scale-105 transition-all shrink-0">
                <Truck className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-slate-950" />
              </div>
              <span className="text-xs min-[400px]:text-sm sm:text-base xl:text-lg font-bold tracking-tight text-slate-900 font-display whitespace-nowrap">
                Man With A Van Moving Company
              </span>
            </button>
            {/* Elegant vertical divider separator */}
            <div className="hidden xl:block h-4.5 w-px bg-slate-200 ml-4 xl:ml-5" />
          </div>

          {/* Zone 2: Clean, spacious navigation links including Home */}
          <nav className="hidden xl:flex items-center gap-3.5 2xl:gap-5 text-[13px] 2xl:text-sm font-medium text-slate-700">
            {desktopNavLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => navigateTo(link.page)}
                className={`py-1 cursor-pointer transition-colors whitespace-nowrap relative ${
                  link.active
                    ? 'text-slate-950 font-semibold'
                    : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                {link.label}
                {link.active && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500 rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Zone 3: Primary actions */}
          <div className="hidden lg:flex items-center gap-2.5 xl:gap-3 shrink-0 ml-3 xl:ml-4">
            <a
              href="tel:18005556683"
              className="flex items-center gap-1.5 text-xs xl:text-sm font-semibold text-slate-900 hover:text-amber-600 px-2 py-2 transition-colors whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              <span>(800) 555-MOVE</span>
            </a>
            <button
              onClick={() => navigateTo({ name: 'calculator' })}
              className="flex items-center gap-1.5 px-3.5 xl:px-4 py-2 text-xs xl:text-sm font-semibold text-slate-950 bg-amber-500 rounded-lg hover:bg-amber-400 active:bg-amber-600 transition-all shadow-sm hover:shadow cursor-pointer whitespace-nowrap"
            >
              <span>Instant Estimate</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile hamburger menu button */}
          <div className="flex items-center gap-2 xl:hidden shrink-0">
            <button
              onClick={() => navigateTo({ name: 'calculator' })}
              className="hidden sm:inline-flex px-3 py-1.5 text-xs font-bold text-slate-950 bg-amber-500 rounded-md whitespace-nowrap"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-950 focus:outline-none rounded-lg hover:bg-slate-100"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-1 shadow-lg">
          <div className="grid grid-cols-1 gap-1">
            {mobileNavLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => {
                  navigateTo(link.page);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left px-3 py-2.5 rounded-md text-base font-medium transition-colors ${
                  link.active
                    ? 'bg-amber-50 text-amber-900 font-semibold border-l-4 border-amber-500'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-200 space-y-2">
            <button
              onClick={() => {
                navigateTo({ name: 'booking-lookup' });
                setMobileMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2 text-sm text-slate-600 hover:text-slate-950 font-medium"
            >
              Track Move / Estimate Reference
            </button>
            <button
              onClick={() => {
                navigateTo({ name: 'calculator' });
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-center font-bold text-slate-950 bg-amber-500 rounded-lg hover:bg-amber-400"
            >
              <span>Get Free Instant Estimate</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="tel:18005556683"
              className="flex items-center justify-center gap-2 py-2 text-center text-sm font-semibold text-slate-800"
            >
              <Phone className="w-4 h-4 text-amber-500" />
              <span>Call Us: 1-800-555-MOVE</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
