import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { SERVICES_DATA } from '../data/servicesData';
import { ServiceIcon } from '../components/common/ServiceIcon';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { ArrowRight, CheckCircle2, ShieldCheck, ChevronRight, Sparkles } from 'lucide-react';
import { ServiceId } from '../types/moving';

export const ServicesPage: React.FC = () => {
  const { navigateTo } = useRouter();
  const [activeCategory, setActiveCategory] = useState<'all' | 'residential' | 'commercial' | 'labor'>('all');

  const filteredServices = SERVICES_DATA.filter((service) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'residential') {
      return service.id === 'local-moving' || service.id === 'residential-moves' || service.id === 'interstate-moving';
    }
    if (activeCategory === 'commercial') {
      return service.id === 'commercial-moving' || service.id === 'storage-solutions';
    }
    if (activeCategory === 'labor') {
      return service.id === 'labor-only';
    }
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-12 pb-20">
      <Breadcrumbs items={[{ label: 'Moving Services', current: true }]} />

      {/* Header */}
      <div className="max-w-3xl space-y-3">
        <span className="text-xs uppercase tracking-wider text-amber-600 font-bold">Full Moving Solutions</span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-950 tracking-tight font-display">
          Our Complete Range of Relocation Services
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          At Man With A Van Moving Company, we offer tailored moving packages designed for peace of mind. Every move includes licensed pros, protective equipment, and transparent pricing.
        </p>
      </div>

      {/* Category filter tabs */}
      <div className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-200/70 rounded-xl w-fit">
        <button
          onClick={() => setActiveCategory('all')}
          className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
            activeCategory === 'all'
              ? 'bg-white text-slate-950 shadow-sm'
              : 'text-slate-600 hover:text-slate-950'
          }`}
        >
          All Services (6)
        </button>
        <button
          onClick={() => setActiveCategory('residential')}
          className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
            activeCategory === 'residential'
              ? 'bg-white text-slate-950 shadow-sm'
              : 'text-slate-600 hover:text-slate-950'
          }`}
        >
          Residential & Local
        </button>
        <button
          onClick={() => setActiveCategory('commercial')}
          className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
            activeCategory === 'commercial'
              ? 'bg-white text-slate-950 shadow-sm'
              : 'text-slate-600 hover:text-slate-950'
          }`}
        >
          Commercial & Storage
        </button>
        <button
          onClick={() => setActiveCategory('labor')}
          className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
            activeCategory === 'labor'
              ? 'bg-white text-slate-950 shadow-sm'
              : 'text-slate-600 hover:text-slate-950'
          }`}
        >
          Labor Only (Movers Only)
        </button>
      </div>

      {/* Services List */}
      <div className="space-y-8">
        {filteredServices.map((service, index) => (
          <div
            key={service.id}
            className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 hover:border-slate-300 transition-all shadow-sm"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left col: Title, Tagline, Description */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                    <ServiceIcon name={service.iconName} className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400">SERVICE 0{index + 1}</span>
                    <h2 className="text-2xl font-bold text-slate-950 font-display">
                      {service.title}
                    </h2>
                  </div>
                </div>

                <p className="text-sm font-semibold text-amber-700 bg-amber-50/60 p-2.5 rounded-lg border border-amber-100">
                  {service.tagline}
                </p>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {service.fullDescription}
                </p>

                {/* What's included checklist */}
                <div className="pt-2">
                  <h4 className="text-xs uppercase tracking-wider font-bold text-slate-900 mb-2.5">
                    What’s Included:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                    {service.whatsIncluded.slice(0, 4).map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right col: Rates, Crew, and Actions */}
              <div className="lg:col-span-5 bg-slate-50 rounded-xl p-5 sm:p-6 border border-slate-200/80 flex flex-col justify-between h-full space-y-5">
                <div className="space-y-3">
                  <div className="flex items-baseline justify-between border-b border-slate-200 pb-3">
                    <span className="text-xs font-semibold text-slate-500 uppercase">Rate Guide</span>
                    <span className="text-xl font-extrabold text-slate-950 tabular-nums">
                      {service.startingPrice}
                    </span>
                  </div>

                  <div className="text-xs text-slate-600">
                    <span className="font-semibold text-slate-900 block mb-0.5">Pricing Model:</span>
                    <span>{service.pricingModel}</span>
                  </div>

                  <div className="text-xs text-slate-600">
                    <span className="font-semibold text-slate-900 block mb-0.5">Recommended Setup:</span>
                    <span>{service.recommendedCrew}</span>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-emerald-700 pt-1">
                    <ShieldCheck className="w-4 h-4 shrink-0" />
                    <span>{service.keyMetric.label}: <strong>{service.keyMetric.value}</strong></span>
                  </div>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-200">
                  <button
                    onClick={() => navigateTo({ name: 'service-detail', serviceId: service.id })}
                    className="w-full py-2.5 px-4 text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                  >
                    <span>View In-Depth Service Details</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => navigateTo({ name: 'calculator', prefillService: service.id })}
                    className="w-full py-2.5 px-4 text-sm font-bold text-slate-950 bg-amber-500 hover:bg-amber-400 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                  >
                    <span>Calculate Cost for {service.title}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick comparison table */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8">
        <h3 className="text-xl font-bold text-slate-950 mb-2 font-display">
          Service Comparison Matrix
        </h3>
        <p className="text-sm text-slate-600 mb-6">
          Find the right moving service tier based on distance, truck requirements, and packing assistance.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500 uppercase tracking-wider text-[11px]">
                <th className="py-3 px-4">Service</th>
                <th className="py-3 px-4">Truck Included</th>
                <th className="py-3 px-4">Disassembly / Assembly</th>
                <th className="py-3 px-4">Pads & Blankets</th>
                <th className="py-3 px-4">GPS Tracking</th>
                <th className="py-3 px-4">Ideal Scope</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr>
                <td className="py-3 px-4 font-bold text-slate-950">Local Moving</td>
                <td className="py-3 px-4 text-emerald-600 font-semibold">Yes (Van/Truck)</td>
                <td className="py-3 px-4">Standard Furniture</td>
                <td className="py-3 px-4">Up to 60 Blankets</td>
                <td className="py-3 px-4">City Routing</td>
                <td className="py-3 px-4">Apartment & House Intown</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-bold text-slate-950">Residential Moves</td>
                <td className="py-3 px-4 text-emerald-600 font-semibold">Yes (16–26ft Truck)</td>
                <td className="py-3 px-4">Complete Suite</td>
                <td className="py-3 px-4">Full Quilted Wrap</td>
                <td className="py-3 px-4">Live Updates</td>
                <td className="py-3 px-4">Condos, Houses, Estates</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-bold text-slate-950">Commercial Moving</td>
                <td className="py-3 px-4 text-emerald-600 font-semibold">Yes (Multi-Truck)</td>
                <td className="py-3 px-4">Cubicles & Desks</td>
                <td className="py-3 px-4">IT Anti-Static Wrap</td>
                <td className="py-3 px-4">Project Dispatch</td>
                <td className="py-3 px-4">Offices, Studios, Retail</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-bold text-slate-950">Interstate Moving</td>
                <td className="py-3 px-4 text-emerald-600 font-semibold">Yes (Dedicated Long-Haul)</td>
                <td className="py-3 px-4">Complete Suite</td>
                <td className="py-3 px-4">Heavy Highway Padded</td>
                <td className="py-3 px-4">Dedicated Daily GPS</td>
                <td className="py-3 px-4">Cross-Province / State</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-bold text-slate-950">Storage Solutions</td>
                <td className="py-3 px-4 text-emerald-600 font-semibold">Pickup & Delivery</td>
                <td className="py-3 px-4">Vault Preparation</td>
                <td className="py-3 px-4">Blanket Preservation</td>
                <td className="py-3 px-4">Inventory Barcode</td>
                <td className="py-3 px-4">Between Leases / Renos</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-bold text-slate-950">Labor Only Services</td>
                <td className="py-3 px-4 text-slate-400">Movers Only</td>
                <td className="py-3 px-4">Power Tools Provided</td>
                <td className="py-3 px-4">Movers Bring Straps</td>
                <td className="py-3 px-4">On-site Dispatch</td>
                <td className="py-3 px-4">PODS, U-Hauls, In-Home</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
