import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { 
  Archive, ShieldCheck, ThermometerSnowflake, Video, 
  Lock, CheckCircle2, ArrowRight, HelpCircle, Box 
} from 'lucide-react';

interface StorageUnit {
  size: string;
  sqft: number;
  monthlyRate: number;
  fitsDescription: string;
  itemExamples: string[];
}

const STORAGE_UNITS: StorageUnit[] = [
  {
    size: '5x5 Vault Unit',
    sqft: 25,
    monthlyRate: 89,
    fitsDescription: 'Equivalent to a large walk-in closet. Great for boxes, small dressers, and seasonal gear.',
    itemExamples: ['Up to 15 medium moving boxes', 'Twin mattress set or desk', 'Holiday decorations, luggage, bikes']
  },
  {
    size: '5x10 Studio Unit',
    sqft: 50,
    monthlyRate: 139,
    fitsDescription: 'Holds contents of a studio or 1-bedroom apartment minus major kitchen appliances.',
    itemExamples: ['Queen mattress and bed frame', 'Loveseat or small sectional sofa', 'Coffee table, TV console, 25+ boxes']
  },
  {
    size: '10x10 Apartment Unit',
    sqft: 100,
    monthlyRate: 219,
    fitsDescription: 'Ideal for a standard 2-bedroom apartment or small home. Fits multiple furniture sets.',
    itemExamples: ['Two full bedroom sets', 'Living room couch, dining table with chairs', 'Major appliances, patio set, 40+ boxes']
  },
  {
    size: '10x15 Townhouse Unit',
    sqft: 150,
    monthlyRate: 289,
    fitsDescription: 'Spacious storage for a 3-bedroom house or large commercial office archive.',
    itemExamples: ['Three complete bedroom suites', 'Large sectional sofa and entertainment center', 'Washer, dryer, refrigerator, lawn equipment, 60+ boxes']
  },
  {
    size: '10x20 Estate Unit',
    sqft: 200,
    monthlyRate: 369,
    fitsDescription: 'Equivalent to a standard one-car garage. Fits entire multi-story homes.',
    itemExamples: ['4–5 bedroom complete household', 'Multiple living areas and formal dining suite', 'Full garage workshop tools, exercise equipment, 90+ boxes']
  }
];

export const StoragePage: React.FC = () => {
  const { navigateTo } = useRouter();
  const [selectedUnit, setSelectedUnit] = useState<StorageUnit>(STORAGE_UNITS[1]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-14 pb-20">
      <Breadcrumbs items={[{ label: 'Storage Solutions', current: true }]} />

      {/* HERO SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-5">
          <span className="text-xs uppercase tracking-wider text-amber-600 font-bold">Private Vault & Warehouse Storage</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-950 tracking-tight font-display">
            Secure Climate-Controlled Storage Solutions
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Whether you are staging your home for sale, renovating, or navigating a lease transition, our private storage vaults keep your belongings pristine. We pick up from your doorstep, pack securely into vaults, and deliver whenever your new home is ready.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs">
            <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-sm flex items-center gap-2">
              <ThermometerSnowflake className="w-5 h-5 text-sky-600 shrink-0" />
              <span>Climate Regulated (68°F – 72°F)</span>
            </div>
            <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-sm flex items-center gap-2">
              <Video className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>24/7 Digital CCTV Monitoring</span>
            </div>
            <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-sm flex items-center gap-2 col-span-2 sm:col-span-1">
              <Lock className="w-5 h-5 text-amber-600 shrink-0" />
              <span>Private Vault Tamper Seals</span>
            </div>
          </div>
        </div>

        {/* Highlight Banner Card */}
        <div className="lg:col-span-5 bg-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-5 shadow-lg">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center font-bold">
              <Archive className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs text-amber-400 font-semibold uppercase tracking-wider">The Move + Store Advantage</span>
              <h3 className="text-lg font-bold text-white font-display">Doorstep Pickup & Redelivery</h3>
            </div>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed">
            Never rent a separate truck to bring heavy boxes to a cold self-storage locker. Our movers load your belongings directly into sealed wooden vaults at your home, then deliver and unpack them when you move into your new place.
          </p>

          <div className="space-y-2 text-xs text-slate-300 pt-2 border-t border-slate-800">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Furniture stays wrapped in quilted blankets during storage</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>No long-term lease — month-to-month flexibility</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Zero double-handling saves wear and tear</span>
            </div>
          </div>

          <button
            onClick={() => navigateTo({ name: 'calculator', prefillService: 'storage-solutions' })}
            className="w-full py-3 bg-amber-500 hover:bg-amber-400 font-bold text-xs text-slate-950 rounded-lg transition-colors cursor-pointer text-center"
          >
            Calculate Move + Storage Bundle
          </button>
        </div>
      </div>

      {/* STORAGE UNIT SIZE VISUALIZER */}
      <div className="space-y-6">
        <div>
          <span className="text-xs uppercase tracking-wider text-amber-600 font-bold">Interactive Size Guide</span>
          <h2 className="text-3xl font-extrabold text-slate-950 font-display mt-1">
            Choose The Perfect Unit Size
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Select a storage vault size to see dimensions, capacity, and estimated monthly rates.
          </p>
        </div>

        {/* Unit Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
          {STORAGE_UNITS.map((unit) => (
            <button
              key={unit.size}
              onClick={() => setSelectedUnit(unit)}
              className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                selectedUnit.size === unit.size
                  ? 'border-amber-500 bg-amber-50 text-slate-950 font-bold ring-1 ring-amber-500'
                  : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
              }`}
            >
              <div className="text-xs font-bold">{unit.size}</div>
              <div className="text-sm font-extrabold text-slate-900 mt-1 tabular-nums">${unit.monthlyRate}/mo</div>
              <div className="text-[11px] text-slate-500">{unit.sqft} sq ft</div>
            </button>
          ))}
        </div>

        {/* Selected Unit Details Display */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Visualizer box schematic */}
            <div className="md:col-span-5 bg-slate-900 text-white rounded-xl p-6 flex flex-col items-center justify-center min-h-[220px] relative border border-slate-800">
              <Box className="w-14 h-14 text-amber-400 mb-2 opacity-90" />
              <div className="text-xl font-bold font-display text-white">{selectedUnit.size}</div>
              <div className="text-xs text-amber-400 font-mono mt-1">{selectedUnit.sqft} Square Feet Floor Area</div>
              <div className="text-[11px] text-slate-400 mt-2 text-center">
                Standard 8ft Ceiling Height (Breathable Climate Vault)
              </div>
            </div>

            <div className="md:col-span-7 space-y-4">
              <div className="flex items-baseline justify-between border-b border-slate-100 pb-3">
                <h3 className="text-2xl font-bold text-slate-950 font-display">
                  {selectedUnit.size}
                </h3>
                <div className="text-2xl font-black text-slate-950 tabular-nums font-display">
                  ${selectedUnit.monthlyRate} <span className="text-xs font-normal text-slate-500">/ month</span>
                </div>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed font-medium">
                {selectedUnit.fitsDescription}
              </p>

              <div>
                <span className="text-xs uppercase tracking-wider font-bold text-slate-900 block mb-2">
                  Typical Contents Accommodated:
                </span>
                <div className="space-y-1.5 text-xs text-slate-600">
                  {selectedUnit.itemExamples.map((ex, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{ex}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={() => navigateTo({ name: 'calculator', prefillService: 'storage-solutions' })}
                  className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 font-bold text-xs text-slate-950 rounded-lg shadow-sm cursor-pointer"
                >
                  Reserve This Storage Unit
                </button>
                <button
                  onClick={() => navigateTo({ name: 'contact', prefillSubject: `Storage inquiry: ${selectedUnit.size}` })}
                  className="px-5 py-2.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-800 rounded-lg cursor-pointer"
                >
                  Ask Facility Coordinator
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* STORAGE SECURITY FEATURES */}
      <div className="bg-slate-50 rounded-2xl p-6 sm:p-10 border border-slate-200 space-y-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-wider text-amber-600 font-bold">Uncompromising Security</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 font-display mt-1">
            Built For Complete Preservation & Safety
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Your goods are stored in a fully gated, alarmed, climate-controlled commercial warehouse facility.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-2">
            <Lock className="w-5 h-5 text-amber-600" />
            <h4 className="font-bold text-slate-900 text-sm">Keycard Gated Entry</h4>
            <p className="text-slate-600">Access limited strictly to verified personnel and authorized customer appointments.</p>
          </div>
          <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-2">
            <ThermometerSnowflake className="w-5 h-5 text-sky-600" />
            <h4 className="font-bold text-slate-900 text-sm">HVAC Climate Control</h4>
            <p className="text-slate-600">Dual commercial air handlers maintain steady 70°F and regulated relative humidity.</p>
          </div>
          <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-2">
            <Video className="w-5 h-5 text-emerald-600" />
            <h4 className="font-bold text-slate-900 text-sm">32 High-Def Cameras</h4>
            <p className="text-slate-600">24/7 continuous cloud recording covering every aisle, vault row, and loading dock.</p>
          </div>
          <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-2">
            <ShieldCheck className="w-5 h-5 text-purple-600" />
            <h4 className="font-bold text-slate-900 text-sm">Fire & Pest Suppression</h4>
            <p className="text-slate-600">Quarterly certified pest control inspections and automatic dry-pipe sprinkler systems.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
