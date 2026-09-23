import React, { useState, useEffect } from 'react';
import { useRouter } from '../context/RouterContext';
import { useBooking } from '../context/BookingContext';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { 
  Search, CheckCircle2, Clock, Truck, ShieldCheck, 
  MapPin, Calendar, FileText, Phone, Printer 
} from 'lucide-react';

export const BookingLookupPage: React.FC<{ queryId?: string }> = ({ queryId }) => {
  const { navigateTo } = useRouter();
  const { getBookingById, bookings } = useBooking();

  const [searchCode, setSearchCode] = useState(queryId || '');
  const [activeBooking, setActiveBooking] = useState(() => queryId ? getBookingById(queryId) : undefined);
  const [hasSearched, setHasSearched] = useState(!!queryId);

  useEffect(() => {
    if (queryId) {
      setSearchCode(queryId);
      setActiveBooking(getBookingById(queryId));
      setHasSearched(true);
    }
  }, [queryId]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchCode.trim()) return;
    const found = getBookingById(searchCode);
    setActiveBooking(found);
    setHasSearched(true);
  };

  const selectPreloadedBooking = (id: string) => {
    setSearchCode(id);
    setActiveBooking(getBookingById(id));
    setHasSearched(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-12 pb-20">
      <Breadcrumbs items={[{ label: 'Track Move & Estimate', current: true }]} />

      <div className="max-w-3xl space-y-3">
        <span className="text-xs uppercase tracking-wider text-amber-600 font-bold">Move Dispatch Telematics</span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-950 tracking-tight font-display">
          Track Your Move & Booking Status
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          Enter your 5-digit booking reference number (e.g. <strong>VAN-92418</strong>) to view active status, scheduled arrival window, assigned truck, and locked rate details.
        </p>
      </div>

      {/* SEARCH BOX */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm max-w-2xl">
        <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              placeholder="e.g. VAN-92418 or VAN-81734"
              value={searchCode}
              onChange={(e) => setSearchCode(e.target.value)}
              className="w-full pl-10 pr-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl text-slate-900 font-mono focus:outline-none focus:ring-2 focus:ring-amber-500 uppercase font-bold"
            />
          </div>
          <button
            type="submit"
            className="py-3 px-6 font-bold text-sm text-slate-950 bg-amber-500 hover:bg-amber-400 rounded-xl transition-colors cursor-pointer whitespace-nowrap shadow-sm"
          >
            Lookup Move
          </button>
        </form>

        {/* Quick select demo bookings */}
        <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2 text-xs">
          <span className="text-slate-400">Available Bookings:</span>
          {bookings.map((b) => (
            <button
              key={b.id}
              onClick={() => selectPreloadedBooking(b.id)}
              className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 rounded-md font-mono text-slate-700 font-semibold cursor-pointer"
            >
              #{b.id}
            </button>
          ))}
        </div>
      </div>

      {/* RESULTS DISPLAY */}
      {hasSearched && (
        <div>
          {activeBooking ? (
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-8">
              {/* Header with status badge */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-6">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs uppercase tracking-wider text-slate-400 font-mono">Reference</span>
                    <span className="text-2xl font-black font-mono text-slate-950 tracking-wider">
                      #{activeBooking.id}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 font-display mt-0.5">
                    {activeBooking.customerName}
                  </h3>
                </div>

                <div className="flex items-center gap-3">
                  <div className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider ${
                    activeBooking.status === 'Confirmed'
                      ? 'bg-emerald-100 text-emerald-800'
                      : activeBooking.status === 'Dispatched'
                      ? 'bg-sky-100 text-sky-800'
                      : 'bg-amber-100 text-amber-800'
                  }`}>
                    Status: {activeBooking.status}
                  </div>

                  <button
                    onClick={() => window.print()}
                    className="p-2 border border-slate-200 rounded-lg hover:bg-slate-50 text-slate-700"
                    title="Print Move Details"
                  >
                    <Printer className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Grid of Move Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
                  <span className="text-slate-400 flex items-center gap-1 font-semibold">
                    <Calendar className="w-3.5 h-3.5 text-amber-600" />
                    <span>Scheduled Move Date</span>
                  </span>
                  <div className="text-sm font-bold text-slate-900 pt-1">
                    {activeBooking.moveDate}
                  </div>
                  <span className="text-slate-500 text-[11px]">Morning Window: 8:00 AM – 9:30 AM</span>
                </div>

                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
                  <span className="text-slate-400 flex items-center gap-1 font-semibold">
                    <Truck className="w-3.5 h-3.5 text-amber-600" />
                    <span>Service Package</span>
                  </span>
                  <div className="text-sm font-bold text-slate-900 capitalize pt-1">
                    {activeBooking.serviceId.replace('-', ' ')}
                  </div>
                  <span className="text-slate-500 text-[11px]">{activeBooking.homeSize}</span>
                </div>

                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
                  <span className="text-slate-400 flex items-center gap-1 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                    <span>Locked Price Range</span>
                  </span>
                  <div className="text-sm font-bold text-slate-900 tabular-nums pt-1">
                    {activeBooking.estimatedCost}
                  </div>
                  <span className="text-slate-500 text-[11px]">Binding rate · Zero hidden fees</span>
                </div>

                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
                  <span className="text-slate-400 flex items-center gap-1 font-semibold">
                    <Phone className="w-3.5 h-3.5 text-amber-600" />
                    <span>Client Contact</span>
                  </span>
                  <div className="text-sm font-bold text-slate-900 pt-1">
                    {activeBooking.phone}
                  </div>
                  <span className="text-slate-500 text-[11px] truncate block">{activeBooking.email}</span>
                </div>
              </div>

              {/* Addresses */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-slate-900">
                    <MapPin className="w-4 h-4 text-amber-500" />
                    <span>Pickup Location:</span>
                  </div>
                  <p className="text-slate-700 pl-5 text-sm">{activeBooking.pickupAddress}</p>
                </div>

                <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-slate-900">
                    <MapPin className="w-4 h-4 text-emerald-500" />
                    <span>Destination Location:</span>
                  </div>
                  <p className="text-slate-700 pl-5 text-sm">{activeBooking.dropoffAddress}</p>
                </div>
              </div>

              {/* Special Instructions */}
              {activeBooking.specialNotes && (
                <div className="p-4 bg-amber-50/70 rounded-xl border border-amber-200 text-xs">
                  <span className="font-bold text-amber-900 block mb-1">Dispatcher Special Instructions:</span>
                  <p className="text-amber-800 leading-relaxed">{activeBooking.specialNotes}</p>
                </div>
              )}

              {/* Support Hotline banner */}
              <div className="p-4 bg-slate-900 text-white rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
                  <span>Need to adjust your move date or add extra packing materials?</span>
                </div>
                <a
                  href="tel:18005556683"
                  className="px-4 py-2 bg-amber-500 text-slate-950 font-bold rounded-lg hover:bg-amber-400 transition-colors whitespace-nowrap"
                >
                  Call Dispatch: 1-800-555-MOVE
                </a>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center space-y-3">
              <div className="text-slate-400 text-3xl font-mono">#???</div>
              <h3 className="text-lg font-bold text-slate-950 font-display">
                No Record Found for "#{searchCode}"
              </h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Please double-check the booking reference code. Sample valid codes: <strong>VAN-92418</strong> or <strong>VAN-81734</strong>, or calculate a new estimate.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => navigateTo({ name: 'calculator' })}
                  className="px-4 py-2 text-xs font-bold text-slate-950 bg-amber-500 hover:bg-amber-400 rounded-lg cursor-pointer"
                >
                  Create New Estimate
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
