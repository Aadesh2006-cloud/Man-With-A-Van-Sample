/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { RouterProvider, useRouter } from './context/RouterContext';
import { BookingProvider } from './context/BookingContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

// Pages
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { CalculatorPage } from './pages/CalculatorPage';
import { AboutPage } from './pages/AboutPage';
import { StoragePage } from './pages/StoragePage';
import { MovingGuidePage } from './pages/MovingGuidePage';
import { ReviewsPage } from './pages/ReviewsPage';
import { ContactPage } from './pages/ContactPage';
import { BookingLookupPage } from './pages/BookingLookupPage';

const PageContent: React.FC = () => {
  const { currentPage } = useRouter();

  switch (currentPage.name) {
    case 'home':
      return <HomePage />;
    case 'services':
      return <ServicesPage />;
    case 'service-detail':
      return <ServiceDetailPage serviceId={currentPage.serviceId} />;
    case 'calculator':
      return <CalculatorPage prefillService={currentPage.prefillService} />;
    case 'about':
      return <AboutPage />;
    case 'storage':
      return <StoragePage />;
    case 'moving-guide':
      return <MovingGuidePage />;
    case 'reviews':
      return <ReviewsPage />;
    case 'contact':
      return <ContactPage prefillSubject={currentPage.prefillSubject} />;
    case 'booking-lookup':
      return <BookingLookupPage queryId={currentPage.queryId} />;
    default:
      return <HomePage />;
  }
};

export default function App() {
  return (
    <RouterProvider>
      <BookingProvider>
        <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-amber-400 selection:text-slate-950">
          <Navbar />
          <main className="flex-1">
            <PageContent />
          </main>
          <Footer />
        </div>
      </BookingProvider>
    </RouterProvider>
  );
}
