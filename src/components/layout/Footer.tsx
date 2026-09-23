import React from 'react';
import { useRouter } from '../../context/RouterContext';
import { Truck, Phone, Mail, MapPin, Shield, Clock, ArrowRight } from 'lucide-react';
import { SERVICES_DATA } from '../../data/servicesData';

export const Footer: React.FC = () => {
  const { navigateTo } = useRouter();

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800">
      {/* Top CTA Banner */}
      <div className="border-b border-slate-800/80 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <span className="text-xs uppercase tracking-wider text-amber-400 font-semibold">Ready to move forward?</span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1 font-display">
                Moving shouldn’t be overwhelming — it should be exciting.
              </h3>
              <p className="text-slate-400 text-sm mt-1 max-w-xl">
                Get a guaranteed transparent moving estimate in under 60 seconds with zero obligation or sales calls.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => navigateTo({ name: 'calculator' })}
                className="flex items-center gap-2 px-5 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition-all shadow-md cursor-pointer whitespace-nowrap"
              >
                <span>Calculate Move Cost</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="tel:18005556683"
                className="px-5 py-3 rounded-lg border border-slate-700 hover:border-slate-500 text-white font-medium text-sm transition-colors whitespace-nowrap"
              >
                Call: 1-800-555-MOVE
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Col 1: Brand & Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center text-slate-950 font-black shrink-0">
                <Truck className="w-5 h-5 text-slate-950" />
              </div>
              <span className="text-lg sm:text-xl font-bold tracking-tight text-white font-display whitespace-nowrap">
                Man With A Van Moving Company
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed pr-6">
              Your trusted moving experts proudly serving homes and businesses with reliable, stress-free relocation solutions. Professionally trained teams, dedicated vans, transparent hourly and flat rates.
            </p>
            <div className="flex flex-col gap-2 pt-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>USDOT #3892011 · Provincial Motor Carrier Lic. #MC-841920</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Dispatch Hours: Mon – Sun 7:00 AM – 9:00 PM EST</span>
              </div>
            </div>
          </div>

          {/* Col 2: Moving Services */}
          <div>
            <h4 className="text-white text-sm font-semibold tracking-wider uppercase mb-4">
              Moving Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {SERVICES_DATA.map((srv) => (
                <li key={srv.id}>
                  <button
                    onClick={() => navigateTo({ name: 'service-detail', serviceId: srv.id })}
                    className="hover:text-amber-400 transition-colors text-left cursor-pointer"
                  >
                    {srv.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Navigation & Tools */}
          <div>
            <h4 className="text-white text-sm font-semibold tracking-wider uppercase mb-4">
              Resources & Tools
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => navigateTo({ name: 'calculator' })}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Instant Cost Estimator
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo({ name: 'moving-guide' })}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Moving Checklist & Packing Guide
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo({ name: 'about' })}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Our Fleet & Equipment
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo({ name: 'storage' })}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Storage Unit Specs
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo({ name: 'reviews' })}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Verified Move Reviews
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo({ name: 'booking-lookup' })}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Track Move / Quote
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Dispatch */}
          <div>
            <h4 className="text-white text-sm font-semibold tracking-wider uppercase mb-4">
              Headquarters & Dispatch
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>Central Logistics Hub, 450 Transport Parkway, Suite 100</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <a href="tel:18005556683" className="hover:text-white transition-colors">
                  1-800-555-MOVE (6683)
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <a href="mailto:dispatch@manwithavanmovers.com" className="hover:text-white transition-colors">
                  dispatch@manwithavanmovers.com
                </a>
              </div>
              <div className="pt-2">
                <button
                  onClick={() => navigateTo({ name: 'contact' })}
                  className="w-full py-2 px-3 text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white rounded transition-colors text-center cursor-pointer"
                >
                  Send Direct Dispatch Inquiry
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Terms */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Man With A Van Moving Company. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Privacy Policy</span>
            <span>·</span>
            <span>Terms of Carriage</span>
            <span>·</span>
            <span>Valuation & Cargo Protection</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
