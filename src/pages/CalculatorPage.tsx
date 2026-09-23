import React, { useState, useMemo } from 'react';
import { useRouter } from '../context/RouterContext';
import { useBooking } from '../context/BookingContext';
import { ServiceId, MoveEstimateInput } from '../types/moving';
import { calculateMoveEstimate } from '../utils/calculator';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { 
  Calculator, CheckCircle2, ShieldCheck, Truck, ArrowRight, 
  Clock, DollarSign, Calendar, MapPin, Sparkles, AlertCircle 
} from 'lucide-react';

export const CalculatorPage: React.FC<{ prefillService?: ServiceId }> = ({ prefillService }) => {
  const { navigateTo } = useRouter();
  const { createBooking } = useBooking();

  const [serviceType, setServiceType] = useState<ServiceId>(prefillService || 'residential-moves');
  const [homeSize, setHomeSize] = useState('2bed');
  const [distanceMiles, setDistanceMiles] = useState(12);
  const [originFloor, setOriginFloor] = useState(1);
  const [originHasElevator, setOriginHasElevator] = useState(false);
  const [destinationFloor, setDestinationFloor] = useState(1);
  const [destinationHasElevator, setDestinationHasElevator] = useState(false);
  const [packingService, setPackingService] = useState<'none' | 'partial' | 'full'>('none');
  const [storageWeeksNeeded, setStorageWeeksNeeded] = useState(0);
  const [heavyItemsCount, setHeavyItemsCount] = useState(0);
  const [moveDate, setMoveDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 14);
    return d.toISOString().split('T')[0];
  });

  // Booking Modal State
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [pickupAddress, setPickupAddress] = useState('');
  const [dropoffAddress, setDropoffAddress] = useState('');
  const [specialNotes, setSpecialNotes] = useState('');
  const [bookingSuccessId, setBookingSuccessId] = useState<string | null>(null);

  const estimateInput: MoveEstimateInput = useMemo(() => ({
    serviceType,
    homeSize,
    distanceMiles,
    originFloor,
    originHasElevator,
    destinationFloor,
    destinationHasElevator,
    packingService,
    storageWeeksNeeded,
    heavyItemsCount,
    moveDate
  }), [
    serviceType, homeSize, distanceMiles, originFloor, originHasElevator,
    destinationFloor, destinationHasElevator, packingService,
    storageWeeksNeeded, heavyItemsCount, moveDate
  ]);

  const result = useMemo(() => calculateMoveEstimate(estimateInput), [estimateInput]);

  const handleConfirmBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !customerEmail || !customerPhone) {
      alert('Please fill in your name, email, and phone number.');
      return;
    }

    const newBooking = createBooking({
      customerName,
      email: customerEmail,
      phone: customerPhone,
      pickupAddress: pickupAddress || 'To be specified',
      dropoffAddress: dropoffAddress || 'To be specified',
      moveDate,
      serviceId: serviceType,
      homeSize,
      estimatedCost: `$${result.lowEstimate} – $${result.highEstimate}`,
      specialNotes
    });

    setBookingSuccessId(newBooking.id);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-10 pb-20">
      <Breadcrumbs items={[{ label: 'Instant Cost Estimator', current: true }]} />

      <div className="max-w-3xl space-y-3">
        <span className="text-xs uppercase tracking-wider text-amber-600 font-bold">100% Transparent Pricing</span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-950 tracking-tight font-display">
          Instant Move Cost Calculator
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          Configure your move parameters below to view an immediate, realistic estimate tailored to your inventory volume, property floors, and required crew size. Zero spam, zero sales harassment.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* LEFT COLUMN: INTERACTIVE FORM CONTROLS */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-8">
          {/* Step 1: Service Type */}
          <div>
            <label className="block text-xs uppercase tracking-wider font-bold text-slate-900 mb-3">
              1. Select Moving Service
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {[
                { id: 'residential-moves', label: 'Residential Move' },
                { id: 'local-moving', label: 'Local City Move' },
                { id: 'commercial-moving', label: 'Commercial Office' },
                { id: 'interstate-moving', label: 'Interstate Long-Haul' },
                { id: 'storage-solutions', label: 'Storage + Move' },
                { id: 'labor-only', label: 'Labor Only (Movers)' },
              ].map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setServiceType(s.id as ServiceId)}
                  className={`p-3 text-xs font-semibold rounded-xl border text-left transition-all cursor-pointer ${
                    serviceType === s.id
                      ? 'border-amber-500 bg-amber-50/70 text-slate-950 font-bold ring-1 ring-amber-500'
                      : 'border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Property / Inventory Size */}
          <div>
            <label className="block text-xs uppercase tracking-wider font-bold text-slate-900 mb-3">
              2. Home / Office Inventory Volume
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: 'studio', label: 'Studio Apt', sub: '1-2 Rooms' },
                { id: '1bed', label: '1 Bedroom', sub: '2-3 Rooms' },
                { id: '2bed', label: '2 Bedroom', sub: '3-4 Rooms' },
                { id: '3bed', label: '3 Bedroom', sub: '5-6 Rooms' },
                { id: '4plus', label: '4+ Bed Estate', sub: '7+ Rooms' },
                { id: 'small-office', label: 'Small Office', sub: '<15 Desks' },
                { id: 'large-office', label: 'Corp Office', sub: '15+ Desks' },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setHomeSize(item.id)}
                  className={`p-3 text-left rounded-xl border transition-all cursor-pointer ${
                    homeSize === item.id
                      ? 'border-amber-500 bg-amber-50/70 text-slate-950 ring-1 ring-amber-500'
                      : 'border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <div className="text-xs font-bold">{item.label}</div>
                  <div className="text-[11px] text-slate-500">{item.sub}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Logistics, Floors & Distance */}
          <div>
            <label className="block text-xs uppercase tracking-wider font-bold text-slate-900 mb-3">
              3. Logistics, Stairs & Access
            </label>
            <div className="space-y-4">
              {/* Distance Slider */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <div className="flex justify-between items-center text-xs mb-2">
                  <span className="font-semibold text-slate-700">Estimated Travel Distance:</span>
                  <span className="font-bold text-amber-600 text-sm tabular-nums">
                    {distanceMiles} miles
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="250"
                  step="1"
                  value={distanceMiles}
                  onChange={(e) => setDistanceMiles(parseInt(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>Local (&lt;15 miles)</span>
                  <span>Regional (50 miles)</span>
                  <span>Long-Haul (250+ miles)</span>
                </div>
              </div>

              {/* Origin Floor */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                  <div className="text-xs font-bold text-slate-900">Pickup Floor & Access</div>
                  <div className="flex items-center gap-3">
                    <label className="text-xs text-slate-600">Floor level:</label>
                    <select
                      value={originFloor}
                      onChange={(e) => setOriginFloor(parseInt(e.target.value))}
                      className="px-2 py-1 text-xs bg-white border border-slate-300 rounded font-semibold"
                    >
                      <option value="1">1st Floor (Ground)</option>
                      <option value="2">2nd Floor</option>
                      <option value="3">3rd Floor</option>
                      <option value="4">4th Floor</option>
                      <option value="5">5th Floor or higher</option>
                    </select>
                  </div>
                  {originFloor > 1 && (
                    <label className="flex items-center gap-2 text-xs text-slate-700 cursor-pointer pt-1">
                      <input
                        type="checkbox"
                        checked={originHasElevator}
                        onChange={(e) => setOriginHasElevator(e.target.checked)}
                        className="rounded accent-amber-500 w-4 h-4"
                      />
                      <span>Freight or passenger elevator available</span>
                    </label>
                  )}
                </div>

                {/* Destination Floor */}
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                  <div className="text-xs font-bold text-slate-900">Dropoff Floor & Access</div>
                  <div className="flex items-center gap-3">
                    <label className="text-xs text-slate-600">Floor level:</label>
                    <select
                      value={destinationFloor}
                      onChange={(e) => setDestinationFloor(parseInt(e.target.value))}
                      className="px-2 py-1 text-xs bg-white border border-slate-300 rounded font-semibold"
                    >
                      <option value="1">1st Floor (Ground)</option>
                      <option value="2">2nd Floor</option>
                      <option value="3">3rd Floor</option>
                      <option value="4">4th Floor</option>
                      <option value="5">5th Floor or higher</option>
                    </select>
                  </div>
                  {destinationFloor > 1 && (
                    <label className="flex items-center gap-2 text-xs text-slate-700 cursor-pointer pt-1">
                      <input
                        type="checkbox"
                        checked={destinationHasElevator}
                        onChange={(e) => setDestinationHasElevator(e.target.checked)}
                        className="rounded accent-amber-500 w-4 h-4"
                      />
                      <span>Freight or passenger elevator available</span>
                    </label>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Step 4: Add-Ons & Packing */}
          <div>
            <label className="block text-xs uppercase tracking-wider font-bold text-slate-900 mb-3">
              4. Packing & Specialty Add-Ons
            </label>
            <div className="space-y-3">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-xs font-bold text-slate-900 block mb-2">Packing Services:</span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    { id: 'none', label: 'Self-Packed', desc: 'You pack boxes yourself' },
                    { id: 'partial', label: 'Fragile-Only', desc: 'Fine china, art, mirrors' },
                    { id: 'full', label: 'Full-Service', desc: 'We pack every room & closet' },
                  ].map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setPackingService(p.id as any)}
                      className={`p-2.5 rounded-lg border text-left cursor-pointer transition-colors ${
                        packingService === p.id
                          ? 'border-amber-500 bg-white ring-1 ring-amber-500 text-slate-950 font-bold'
                          : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <div className="text-xs font-semibold">{p.label}</div>
                      <div className="text-[11px] text-slate-500">{p.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {/* Heavy Specialty items */}
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="font-bold text-slate-900 block">Heavy Specialty Items</span>
                    <span className="text-slate-500 text-[11px]">Pianos, gun safes, Peloton bikes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setHeavyItemsCount(Math.max(0, heavyItemsCount - 1))}
                      className="w-7 h-7 rounded bg-white border border-slate-300 font-bold text-slate-700 hover:bg-slate-100"
                    >
                      -
                    </button>
                    <span className="font-bold tabular-nums w-4 text-center">{heavyItemsCount}</span>
                    <button
                      type="button"
                      onClick={() => setHeavyItemsCount(heavyItemsCount + 1)}
                      className="w-7 h-7 rounded bg-white border border-slate-300 font-bold text-slate-700 hover:bg-slate-100"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Storage Weeks */}
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="font-bold text-slate-900 block">Vault Storage Weeks</span>
                    <span className="text-slate-500 text-[11px]">Secure climate controlled ($45/wk)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setStorageWeeksNeeded(Math.max(0, storageWeeksNeeded - 1))}
                      className="w-7 h-7 rounded bg-white border border-slate-300 font-bold text-slate-700 hover:bg-slate-100"
                    >
                      -
                    </button>
                    <span className="font-bold tabular-nums w-4 text-center">{storageWeeksNeeded}</span>
                    <button
                      type="button"
                      onClick={() => setStorageWeeksNeeded(storageWeeksNeeded + 1)}
                      className="w-7 h-7 rounded bg-white border border-slate-300 font-bold text-slate-700 hover:bg-slate-100"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Move Date */}
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="text-xs font-bold text-slate-900">Target Move Date:</span>
                <input
                  type="date"
                  value={moveDate}
                  onChange={(e) => setMoveDate(e.target.value)}
                  className="px-3 py-1.5 text-xs bg-white border border-slate-300 rounded font-semibold text-slate-900 focus:outline-none focus:ring-1 focus:ring-amber-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: REAL-TIME ESTIMATE SUMMARY BREAKDOWN */}
        <div className="lg:col-span-5 sticky top-24 space-y-6">
          <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-7 shadow-xl border border-slate-800 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs uppercase tracking-wider text-amber-400 font-bold">Estimated Cost Range</span>
                <div className="text-3xl sm:text-4xl font-black font-display tracking-tight text-white mt-1 tabular-nums">
                  ${result.lowEstimate} – ${result.highEstimate}
                </div>
              </div>
              <div className="text-right">
                <span className="text-xs text-slate-400 block">Est. Duration</span>
                <span className="text-base font-bold text-amber-400 tabular-nums">~{result.estimatedHours} hrs</span>
              </div>
            </div>

            {/* Crew & Truck Allocation */}
            <div className="space-y-3 bg-slate-800/80 p-4 rounded-xl border border-slate-700/60 text-xs">
              <div className="flex items-center gap-2 text-slate-300 font-semibold">
                <Truck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Assigned Fleet Configuration:</span>
              </div>
              <div className="font-bold text-white pl-6">
                {result.recommendedCrew}
              </div>
              <div className="text-slate-400 pl-6 text-[11px]">
                Vehicle: {result.recommendedVehicle}
              </div>
            </div>

            {/* Transparent Cost Itemization */}
            <div className="space-y-2 text-xs border-b border-slate-800 pb-4">
              <span className="font-semibold text-slate-300 uppercase tracking-wider text-[11px] block mb-2">
                Itemized Breakdown:
              </span>
              <div className="flex justify-between text-slate-300">
                <span>Base Labor & Van (Est. {result.estimatedHours}h)</span>
                <span className="font-mono tabular-nums text-white">${result.breakdown.baseLaborAndTruck}</span>
              </div>
              {result.breakdown.stairsFee > 0 && (
                <div className="flex justify-between text-slate-300">
                  <span>Stairs / Complex Access Adjustment</span>
                  <span className="font-mono tabular-nums text-white">+${result.breakdown.stairsFee}</span>
                </div>
              )}
              {result.breakdown.travelFee > 0 && (
                <div className="flex justify-between text-slate-300">
                  <span>Mileage & Fuel ({distanceMiles} miles)</span>
                  <span className="font-mono tabular-nums text-white">+${result.breakdown.travelFee}</span>
                </div>
              )}
              {result.breakdown.packingFee > 0 && (
                <div className="flex justify-between text-slate-300">
                  <span>Packing Service & Materials</span>
                  <span className="font-mono tabular-nums text-white">+${result.breakdown.packingFee}</span>
                </div>
              )}
              {result.breakdown.storageFee > 0 && (
                <div className="flex justify-between text-slate-300">
                  <span>Vault Storage ({storageWeeksNeeded} weeks)</span>
                  <span className="font-mono tabular-nums text-white">+${result.breakdown.storageFee}</span>
                </div>
              )}
              {result.breakdown.heavyItemsFee > 0 && (
                <div className="flex justify-between text-slate-300">
                  <span>Specialty Heavy Equipment Rigging</span>
                  <span className="font-mono tabular-nums text-white">+${result.breakdown.heavyItemsFee}</span>
                </div>
              )}
            </div>

            {/* Standard Inclusions reminder */}
            <div className="space-y-1.5 text-[11px] text-slate-400">
              <div className="flex items-center gap-1.5 text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span>Up to 60 padded quilted moving blankets included free</span>
              </div>
              <div className="flex items-center gap-1.5 text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span>Neoprene floor runners & wardrobe boxes on moving day</span>
              </div>
              <div className="flex items-center gap-1.5 text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span>Standard basic cargo valuation protection included</span>
              </div>
            </div>

            {/* Primary Action Button */}
            <button
              onClick={() => setShowBookingModal(true)}
              className="w-full py-4 px-4 font-bold text-sm text-slate-950 bg-amber-500 hover:bg-amber-400 active:bg-amber-600 rounded-xl transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Lock In This Estimate & Book Date</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 flex items-start gap-2.5">
            <ShieldCheck className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <p>
              <strong>Zero-Obligation Guarantee:</strong> You can reschedule or cancel anytime up to 48 hours prior to your move with zero cancellation fees.
            </p>
          </div>
        </div>
      </div>

      {/* BOOKING CONFIRMATION MODAL */}
      {showBookingModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            {bookingSuccessId ? (
              <div className="text-center space-y-4 py-4">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-950 font-display">
                  Estimate & Move Reserved!
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Thank you, <strong>{customerName}</strong>. Your moving reservation has been submitted to dispatch.
                </p>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-1">
                  <div className="text-slate-500">Your Booking Reference Number:</div>
                  <div className="text-xl font-mono font-bold text-slate-950 tracking-wider">
                    #{bookingSuccessId}
                  </div>
                  <div className="text-amber-700 font-medium pt-1">
                    Locked Estimate: ${result.lowEstimate} – ${result.highEstimate}
                  </div>
                  <div className="text-slate-500">Target Date: {moveDate}</div>
                </div>

                <div className="space-y-2 pt-2">
                  <button
                    onClick={() => {
                      setShowBookingModal(false);
                      navigateTo({ name: 'booking-lookup', queryId: bookingSuccessId });
                    }}
                    className="w-full py-3 bg-amber-500 hover:bg-amber-400 font-bold text-sm text-slate-950 rounded-lg shadow-sm cursor-pointer"
                  >
                    View & Track Your Move Status
                  </button>
                  <button
                    onClick={() => {
                      setShowBookingModal(false);
                      setBookingSuccessId(null);
                    }}
                    className="w-full py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleConfirmBooking} className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div>
                    <h3 className="text-xl font-bold text-slate-950 font-display">
                      Lock In Your Estimate
                    </h3>
                    <p className="text-xs text-slate-500">
                      Target Move Date: <strong>{moveDate}</strong> · Estimate: <strong>${result.lowEstimate} – ${result.highEstimate}</strong>
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowBookingModal(false)}
                    className="text-slate-400 hover:text-slate-600 text-sm font-bold"
                  >
                    ✕
                  </button>
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="sarah@example.com"
                        value={customerEmail}
                        onChange={(e) => setCustomerEmail(e.target.value)}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="(555) 123-4567"
                        value={customerPhone}
                        onChange={(e) => setCustomerPhone(e.target.value)}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Origin / Pickup Address</label>
                    <input
                      type="text"
                      placeholder="123 King Street, Unit 4B"
                      value={pickupAddress}
                      onChange={(e) => setPickupAddress(e.target.value)}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Destination / Dropoff Address</label>
                    <input
                      type="text"
                      placeholder="456 Oak Avenue, House"
                      value={dropoffAddress}
                      onChange={(e) => setDropoffAddress(e.target.value)}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Special Instructions or Fragile Items</label>
                    <textarea
                      rows={2}
                      placeholder="e.g. Elevator booked 1pm-4pm, marble coffee table, grandfather clock..."
                      value={specialNotes}
                      onChange={(e) => setSpecialNotes(e.target.value)}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 bg-amber-500 hover:bg-amber-400 font-bold text-sm text-slate-950 rounded-lg shadow cursor-pointer"
                  >
                    Confirm & Reserve Move Date
                  </button>
                  <p className="text-[11px] text-slate-400 text-center mt-2">
                    No credit card charged now. Dispatch contacts you within 2 business hours to verify access.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
