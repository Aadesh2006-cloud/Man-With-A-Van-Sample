import React, { createContext, useContext, useState, useEffect } from 'react';
import { ServiceId } from '../types/moving';

export type PageRoute = 
  | { name: 'home' }
  | { name: 'services'; filter?: string }
  | { name: 'service-detail'; serviceId: ServiceId }
  | { name: 'calculator'; prefillService?: ServiceId }
  | { name: 'about' }
  | { name: 'storage' }
  | { name: 'moving-guide' }
  | { name: 'reviews' }
  | { name: 'contact'; prefillSubject?: string }
  | { name: 'booking-lookup'; queryId?: string };

interface RouterContextType {
  currentPage: PageRoute;
  navigateTo: (page: PageRoute) => void;
  navigateToString: (path: string) => void;
}

const RouterContext = createContext<RouterContextType | null>(null);

function parseHash(hash: string): PageRoute {
  const cleanHash = hash.replace(/^#\/?/, '').trim();
  if (!cleanHash || cleanHash === 'home') {
    return { name: 'home' };
  }

  const parts = cleanHash.split('/');
  const route = parts[0];
  const param = parts[1];

  if (route === 'services') {
    if (param && ['local-moving', 'residential-moves', 'commercial-moving', 'interstate-moving', 'storage-solutions', 'labor-only'].includes(param)) {
      return { name: 'service-detail', serviceId: param as ServiceId };
    }
    return { name: 'services', filter: param };
  }

  if (route === 'calculator' || route === 'estimate' || route === 'quote') {
    return { 
      name: 'calculator', 
      prefillService: (param && ['local-moving', 'residential-moves', 'commercial-moving', 'interstate-moving', 'storage-solutions', 'labor-only'].includes(param)) 
        ? (param as ServiceId) 
        : undefined 
    };
  }

  if (route === 'about' || route === 'fleet') {
    return { name: 'about' };
  }

  if (route === 'storage') {
    return { name: 'storage' };
  }

  if (route === 'guide' || route === 'checklist' || route === 'moving-guide') {
    return { name: 'moving-guide' };
  }

  if (route === 'reviews' || route === 'testimonials') {
    return { name: 'reviews' };
  }

  if (route === 'contact') {
    return { name: 'contact', prefillSubject: param };
  }

  if (route === 'track' || route === 'lookup' || route === 'booking-lookup') {
    return { name: 'booking-lookup', queryId: param };
  }

  return { name: 'home' };
}

function routeToHash(page: PageRoute): string {
  switch (page.name) {
    case 'home':
      return '#/';
    case 'services':
      return page.filter ? `#/services/${page.filter}` : '#/services';
    case 'service-detail':
      return `#/services/${page.serviceId}`;
    case 'calculator':
      return page.prefillService ? `#/calculator/${page.prefillService}` : '#/calculator';
    case 'about':
      return '#/about';
    case 'storage':
      return '#/storage';
    case 'moving-guide':
      return '#/moving-guide';
    case 'reviews':
      return '#/reviews';
    case 'contact':
      return page.prefillSubject ? `#/contact/${page.prefillSubject}` : '#/contact';
    case 'booking-lookup':
      return page.queryId ? `#/track/${page.queryId}` : '#/track';
    default:
      return '#/';
  }
}

function getPageTitle(page: PageRoute): string {
  switch (page.name) {
    case 'home':
      return 'Man With A Van Moving Company — Trusted Moving Experts';
    case 'services':
      return 'Relocation Services — Man With A Van Moving Company';
    case 'service-detail':
      return 'Service Details — Man With A Van Moving Company';
    case 'calculator':
      return 'Instant Moving Cost Calculator — Man With A Van';
    case 'about':
      return 'About Our Company & Fleet — Man With A Van';
    case 'storage':
      return 'Climate-Controlled Storage Solutions — Man With A Van';
    case 'moving-guide':
      return 'Interactive Moving Checklist & Guide — Man With A Van';
    case 'reviews':
      return 'Customer Reviews & Stories — Man With A Van';
    case 'contact':
      return 'Contact & Dispatch — Man With A Van Moving Company';
    case 'booking-lookup':
      return 'Track Your Booking & Estimate — Man With A Van';
  }
}

export const RouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState<PageRoute>(() => parseHash(window.location.hash));

  useEffect(() => {
    const handleHashChange = () => {
      const parsed = parseHash(window.location.hash);
      setCurrentPage(parsed);
      document.title = getPageTitle(parsed);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    document.title = getPageTitle(currentPage);

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: PageRoute) => {
    const hash = routeToHash(page);
    window.location.hash = hash;
    setCurrentPage(page);
    document.title = getPageTitle(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToString = (path: string) => {
    const parsed = parseHash(path);
    navigateTo(parsed);
  };

  return (
    <RouterContext.Provider value={{ currentPage, navigateTo, navigateToString }}>
      {children}
    </RouterContext.Provider>
  );
};

export const useRouter = () => {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider');
  }
  return context;
};
