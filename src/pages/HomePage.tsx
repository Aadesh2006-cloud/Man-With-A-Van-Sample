import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { SERVICES_DATA } from '../data/servicesData';
import { ServiceIcon } from '../components/common/ServiceIcon';
import { TruckIllustration } from '../components/common/TruckIllustration';
import { FLEET_VEHICLES } from '../data/fleetData';
import { REVIEWS_DATA } from '../data/reviewsData';
import { 
  ArrowRight, ShieldCheck, Clock, Award, Star, CheckCircle2, 
  Sparkles, Calendar, MapPin, ChevronRight, HelpCircle
} from 'lucide-react';
import { ServiceId } from '../types/moving';

export const HomePage: React.FC = () => {
  const { navigateTo } = useRouter();

  // Quick estimator widget state
  const [quickService, setQuickService] = useState<ServiceId>('residential-moves');
  const [quickOrigin, setQuickOrigin] = useState('');
  const [quickDestination, setQuickDestination] = useState('');
  const [quickSize, setQuickSize] = useState('2bed');

  const handleQuickEstimateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigateTo({ name: 'calculator', prefillService: quickService });
  };

  // FAQ state
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const homeFaqs = [
    {
      q: 'Why should I hire Man With A Van Moving Company instead of renting a truck myself?',
      a: 'Renting a truck requires you to purchase fuel, pay security deposits, navigate stressful oversized city driving, find parking permits, and risk serious physical strain or scratched furniture. Our trained, background-checked movers handle all heavy lifting, wrapping, truck transport, and assembly — usually faster and safer for a predictable price.'
    },
    {
      q: 'Are your quotes guaranteed, or will there be surprise fees on moving day?',
      a: 'We pride ourselves on zero hidden fees. We do not charge extra for standard stairs, tape, furniture blankets, fuel, or travel inside standard zones. What we quote in our binding estimates is what you pay.'
    },
    {
      q: 'Do you carry full insurance coverage for our home and belongings?',
      a: 'Yes. We are a fully licensed and insured motor carrier. Every move includes standard carrier cargo valuation, and we provide high-limit Certificates of Insurance (COI) for luxury condo and commercial building managers free of charge.'
    },
    {
      q: 'How far in advance should we book our move?',
      a: 'For weekend slots and end-of-month dates, we suggest booking 2 to 3 weeks ahead. However, we maintain active dispatch capacity and often accommodate short-notice same-week moves.'
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* HERO SECTION */}
      <section className="relative pt-6 sm:pt-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Value Proposition & Copy */}
            <div className="lg:col-span-7 space-y-6">
              {/* Unboxed inline trust marker */}
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                <span className="flex items-center gap-1 text-amber-600">
                  <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  <span>4.95 Rating</span>
                </span>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <span>15,000+ Relocations</span>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <span className="text-emerald-700 font-medium">Licensed & Fully Insured</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.08] font-display text-balance">
                Moving shouldn’t be overwhelming — it should be <span className="text-amber-600">exciting</span>.
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl">
                At <strong className="text-slate-900 font-semibold">Man With A Van Moving Company</strong>, we are your trusted moving experts proudly serving homes and businesses with reliable, stress-free relocation solutions. From packing and lifting to transport and unpacking, we move you forward with peace of mind.
              </p>

              {/* Primary Call to Actions */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => navigateTo({ name: 'calculator' })}
                  className="flex items-center gap-2 px-6 py-3.5 text-base font-bold text-slate-950 bg-amber-500 rounded-lg hover:bg-amber-400 active:bg-amber-600 transition-all shadow-md hover:shadow-lg cursor-pointer whitespace-nowrap"
                >
                  <span>Calculate Your Move Cost</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => navigateTo({ name: 'services' })}
                  className="px-6 py-3.5 text-base font-semibold text-slate-800 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer whitespace-nowrap"
                >
                  Explore All Services
                </button>
              </div>

              {/* Adjacency Proof: Bullet trust items */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-200/80 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Guaranteed arrival windows</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Double quilted blanket wrap</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Zero surprise stair fees</span>
                </div>
              </div>
            </div>

            {/* Right Column: High visual illustration */}
            <div className="lg:col-span-5">
              <TruckIllustration />
            </div>
          </div>

          {/* QUICK ESTIMATE FAST WIDGET BAR */}
          <div className="mt-10 p-5 sm:p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  Quick Move Price Check
                </span>
              </div>
              <span className="text-xs text-slate-500 hidden sm:inline">Takes ~30 seconds · No obligation</span>
            </div>

            <form onSubmit={handleQuickEstimateSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 items-end">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Service Type</label>
                <select
                  value={quickService}
                  onChange={(e) => setQuickService(e.target.value as ServiceId)}
                  className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  <option value="residential-moves">Residential Move (Home/Apt)</option>
                  <option value="local-moving">Local Moving</option>
                  <option value="commercial-moving">Commercial Office Move</option>
                  <option value="interstate-moving">Interstate / Long-Distance</option>
                  <option value="storage-solutions">Storage + Move Package</option>
                  <option value="labor-only">Labor-Only (Helpers)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Move Size</label>
                <select
                  value={quickSize}
                  onChange={(e) => setQuickSize(e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  <option value="studio">Studio Apartment</option>
                  <option value="1bed">1 Bedroom Home / Apt</option>
                  <option value="2bed">2 Bedroom Home / Apt</option>
                  <option value="3bed">3 Bedroom Family House</option>
                  <option value="4plus">4+ Bedroom Estate</option>
                  <option value="small-office">Office (Up to 15 desks)</option>
                  <option value="large-office">Corporate Office (15+ desks)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Pickup Postal / City</label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    placeholder="e.g. M5V 2T6 or Downtown"
                    value={quickOrigin}
                    onChange={(e) => setQuickOrigin(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Destination Postal / City</label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    placeholder="e.g. M4E 1E2 or Suburb"
                    value={quickDestination}
                    onChange={(e) => setQuickDestination(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full py-2.5 px-4 font-bold text-sm text-slate-950 bg-amber-500 hover:bg-amber-400 active:bg-amber-600 rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-sm cursor-pointer whitespace-nowrap"
                >
                  <span>See Price Breakdown</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHAT WE DO (THE 6 CORE SERVICES) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-6 border-b border-slate-200">
          <div>
            <span className="text-xs uppercase tracking-wider text-amber-600 font-bold">What We Do</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mt-1 font-display">
              Comprehensive Residential & Commercial Moving Solutions
            </h2>
            <p className="text-slate-600 text-base mt-1 max-w-2xl">
              Whether you’re relocating a small apartment, a large family home, or an entire office, we tailor our services to meet your unique needs.
            </p>
          </div>
          <button
            onClick={() => navigateTo({ name: 'services' })}
            className="flex items-center gap-1.5 text-sm font-bold text-slate-900 hover:text-amber-600 transition-colors whitespace-nowrap cursor-pointer shrink-0"
          >
            <span>View All Service Specifications</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service, index) => (
            <div
              key={service.id}
              className="group bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between hover:border-slate-300 hover:shadow-md transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                    <ServiceIcon name={service.iconName} className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-medium text-slate-400">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors font-display">
                  {service.title}
                </h3>
                <p className="text-xs font-semibold text-amber-600 mt-0.5">
                  {service.tagline}
                </p>
                <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                  {service.shortDescription}
                </p>

                {/* What's included preview */}
                <div className="mt-4 pt-4 border-t border-slate-100 space-y-1.5">
                  {service.whatsIncluded.slice(0, 3).map((inc, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-slate-400 block uppercase tracking-wider">Pricing</span>
                  <span className="text-sm font-bold text-slate-900">{service.startingPrice}</span>
                </div>
                <button
                  onClick={() => navigateTo({ name: 'service-detail', serviceId: service.id })}
                  className="flex items-center gap-1 text-xs font-bold text-slate-900 group-hover:text-amber-600 transition-colors cursor-pointer"
                >
                  <span>Learn More</span>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-amber-600" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: THE PROCESS — HOW WE MOVE YOU FORWARD */}
      <section className="bg-slate-900 text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-wider text-amber-400 font-bold">Simple, Smooth, Secure</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-1 font-display">
              Four Steps to a Stress-Free Move
            </h2>
            <p className="text-slate-400 text-base mt-2">
              We eliminated the guesswork. Here is exactly what happens when you book with Man With A Van Moving Company.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {[
              {
                step: '01',
                title: 'Transparent Binding Quote',
                desc: 'Use our online calculator or call our friendly dispatchers. You get a clear, itemized rate with zero surprise surcharges.'
              },
              {
                step: '02',
                title: 'Protective Wrap & Pad',
                desc: 'Our uniform crew arrives on time, lays down floor runners, and blankets all wooden, glass, and upholstered furniture.'
              },
              {
                step: '03',
                title: 'Direct GPS Safe Transit',
                desc: 'Your belongings travel on our clean, air-ride suspension trucks driven by seasoned, licensed transport specialists.'
              },
              {
                step: '04',
                title: 'Setup & Room Staging',
                desc: 'We place each labeled box into its proper room, reassemble bed frames and tables, and take away all packing wrap waste.'
              }
            ].map((st) => (
              <div key={st.step} className="bg-slate-800/60 rounded-xl p-6 border border-slate-700/60 relative">
                <div className="text-3xl font-black text-amber-400/30 font-mono mb-3">
                  {st.step}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 font-display">
                  {st.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => navigateTo({ name: 'calculator' })}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold text-slate-950 bg-amber-500 rounded-lg hover:bg-amber-400 transition-all shadow-md cursor-pointer"
            >
              <span>Get Your Personalized Move Plan</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 4: MEET THE FLEET TEASER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs uppercase tracking-wider text-amber-600 font-bold">Equipped For Any Move</span>
            <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight mt-1 font-display">
              Right-Sized Vans & Trucks for Every Relocation
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              From compact high-roof Sprinters for narrow downtown alleys to 26ft master haulers with hydraulic liftgates.
            </p>
          </div>
          <button
            onClick={() => navigateTo({ name: 'about' })}
            className="text-sm font-bold text-slate-900 hover:text-amber-600 transition-colors flex items-center gap-1 cursor-pointer shrink-0"
          >
            <span>Learn About Our Fleet Standards</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FLEET_VEHICLES.map((vehicle) => (
            <div key={vehicle.id} className="bg-white border border-slate-200 rounded-xl p-5 hover:border-slate-300 transition-all flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-amber-600 uppercase tracking-wider">{vehicle.category}</span>
                <h3 className="text-base font-bold text-slate-950 mt-1 font-display">{vehicle.name}</h3>
                <div className="mt-3 py-2 px-3 bg-slate-50 rounded-lg border border-slate-100 text-xs text-slate-700 space-y-1">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Volume:</span>
                    <span className="font-semibold tabular-nums">{vehicle.capacityCubicFeet} cu ft</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Capacity:</span>
                    <span className="font-semibold">{vehicle.roomCapacity}</span>
                  </div>
                </div>
                <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                  {vehicle.idealFor}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100">
                <button
                  onClick={() => navigateTo({ name: 'calculator' })}
                  className="w-full py-1.5 px-3 text-xs font-semibold text-slate-900 hover:bg-slate-100 rounded text-center transition-colors cursor-pointer"
                >
                  Estimate with this vehicle
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: REAL CUSTOMER STORIES (PROOF OF WORK) */}
      <section className="bg-slate-100/70 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs uppercase tracking-wider text-amber-600 font-bold">Verified Testimonials</span>
              <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight mt-1 font-display">
                Real Moving Stories From Real Customers
              </h2>
              <p className="text-slate-600 text-sm mt-1">
                See how our team takes the stress out of residential, office, and long-distance moving.
              </p>
            </div>
            <button
              onClick={() => navigateTo({ name: 'reviews' })}
              className="text-sm font-bold text-slate-900 hover:text-amber-600 transition-colors flex items-center gap-1 cursor-pointer shrink-0"
            >
              <span>Read All 2,800+ Reviews</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS_DATA.slice(0, 3).map((review) => (
              <div key={review.id} className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between shadow-sm">
                <div>
                  <div className="flex items-center gap-1 text-amber-500 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="text-xs font-semibold text-slate-500 ml-1.5">5.0</span>
                  </div>

                  <h4 className="text-base font-bold text-slate-900 mb-2 font-display">
                    "{review.title}"
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed italic">
                    "{review.comment}"
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-900">{review.author}</span>
                    <span className="text-slate-500">{review.date}</span>
                  </div>
                  <div className="text-[11px] text-amber-700 font-medium mt-1">
                    {review.moveDetails}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: FAQ ACCORDION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-xs uppercase tracking-wider text-amber-600 font-bold">Got Questions?</span>
          <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight mt-1 font-display">
            Frequently Asked Moving Questions
          </h2>
        </div>

        <div className="space-y-3">
          {homeFaqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div key={idx} className="bg-white border border-slate-200 rounded-xl overflow-hidden transition-all">
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-5 text-left font-bold text-slate-900 hover:text-amber-600 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-base font-display">{faq.q}</span>
                  <span className={`text-slate-400 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 7: FINAL CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-950 rounded-2xl p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">Your Next Chapter Starts Here</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-display">
              Ready to move forward with complete peace of mind?
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Lock in your preferred moving date before our trucks book up. Get an immediate itemized cost estimate online or speak directly with our friendly dispatch team.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <button
              onClick={() => navigateTo({ name: 'calculator' })}
              className="w-full sm:w-auto px-6 py-3.5 text-sm font-bold text-slate-950 bg-amber-500 hover:bg-amber-400 active:bg-amber-600 rounded-lg transition-colors text-center cursor-pointer shadow-md"
            >
              Get Instant Estimate
            </button>
            <button
              onClick={() => navigateTo({ name: 'contact' })}
              className="w-full sm:w-auto px-6 py-3.5 text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors text-center cursor-pointer border border-slate-700"
            >
              Contact Dispatch
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
