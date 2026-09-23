import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { FLEET_VEHICLES, MOVING_EQUIPMENT } from '../data/fleetData';
import { TruckIllustration } from '../components/common/TruckIllustration';
import { 
  ShieldCheck, Award, Users, HeartHandshake, Truck, 
  CheckCircle2, ArrowRight, Wrench, Sparkles 
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { navigateTo } = useRouter();
  const [selectedVehicle, setSelectedVehicle] = useState(FLEET_VEHICLES[1]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-16 pb-20">
      <Breadcrumbs items={[{ label: 'About & Fleet', current: true }]} />

      {/* HERO / STORY SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 space-y-5">
          <span className="text-xs uppercase tracking-wider text-amber-600 font-bold">Our Philosophy & Heritage</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-950 tracking-tight font-display">
            Moving Shouldn’t Be Overwhelming — It Should Be Exciting.
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            At <strong className="text-slate-900">Man With A Van Moving Company</strong>, we are your trusted moving experts, proudly serving homes and businesses with reliable, stress-free relocation solutions. With years of experience and thousands of successful moves, we’re committed to making your moving day simple, smooth, and secure.
          </p>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            That’s why our professionally trained team is dedicated to handling every step of your move with care, from packing and lifting to transportation and unpacking. Whether you’re relocating a small apartment, a large family home, or an entire office, we tailor our services to meet your unique needs. Our goal is simple: to move you forward with peace of mind.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-3 border-t border-slate-200">
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-display tabular-nums">15,000+</div>
              <div className="text-xs text-slate-500 mt-0.5">Successful Moves</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-display tabular-nums">99.4%</div>
              <div className="text-xs text-slate-500 mt-0.5">On-Time Arrival</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-display tabular-nums">100%</div>
              <div className="text-xs text-slate-500 mt-0.5">Dedicated Fleets</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <TruckIllustration />
        </div>
      </div>

      {/* CORE VALUES / STANDARDS */}
      <div className="bg-slate-100/80 rounded-2xl p-6 sm:p-10 space-y-8">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-wider text-amber-600 font-bold">The Man With A Van Standard</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-display mt-1">
            Why Our Movers Stand Out
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            We don’t use anonymous day-laborers. Every member of our moving crew undergoes exhaustive vetting and hands-on furniture preservation training.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 font-display">Trained & Background Checked</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Every mover is an insured employee who has completed our 40-hour physical lifting, wrapping, and tight-corner navigation academy.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 font-display">Licensed & Fully Insured</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Full USDOT and provincial motor carrier compliance. We supply comprehensive $5M commercial general liability Certificates of Insurance for buildings.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 font-display">Zero Surprise Surcharges</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              No stairs penalties, no fuel markups, and no blanket fees. We believe honest upfront pricing is the only way to build lifelong customer loyalty.
            </p>
          </div>
        </div>
      </div>

      {/* MEET OUR FLEET (INTERACTIVE SPEC VIEWER) */}
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs uppercase tracking-wider text-amber-600 font-bold">Commercial Fleet Specifications</span>
            <h2 className="text-3xl font-extrabold text-slate-950 font-display mt-1">
              Meet The Man With A Van Fleet
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Our modern trucks are purpose-built for residential and commercial transport with low-clearance city capability and soft-ride suspension.
            </p>
          </div>
        </div>

        {/* Vehicle Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {FLEET_VEHICLES.map((veh) => (
            <button
              key={veh.id}
              onClick={() => setSelectedVehicle(veh)}
              className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                selectedVehicle.id === veh.id
                  ? 'border-amber-500 bg-amber-50/70 text-slate-950 font-bold ring-1 ring-amber-500'
                  : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
              }`}
            >
              <span className="text-[11px] uppercase tracking-wider text-amber-600 font-semibold block">{veh.category}</span>
              <div className="text-sm font-bold text-slate-900 mt-0.5">{veh.name}</div>
              <div className="text-xs text-slate-500 mt-1 tabular-nums">{veh.capacityCubicFeet} cu ft</div>
            </button>
          ))}
        </div>

        {/* Selected Vehicle In-Depth Card */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs uppercase tracking-wider text-amber-600 font-bold">
                {selectedVehicle.category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-950 font-display">
                {selectedVehicle.name}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {selectedVehicle.idealFor}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs">
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                  <span className="text-slate-400 block">Cargo Volume:</span>
                  <span className="font-bold text-slate-900 text-sm tabular-nums">{selectedVehicle.capacityCubicFeet} cu. ft.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                  <span className="text-slate-400 block">Payload Limit:</span>
                  <span className="font-bold text-slate-900 text-sm tabular-nums">{selectedVehicle.payloadCapacityLbs} lbs</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 col-span-2 sm:col-span-1">
                  <span className="text-slate-400 block">Ideal Size:</span>
                  <span className="font-bold text-slate-900 text-sm">{selectedVehicle.roomCapacity}</span>
                </div>
              </div>

              <div className="pt-2">
                <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block mb-2">
                  Specialized Vehicle Equipment:
                </span>
                <div className="space-y-1.5 text-xs text-slate-700">
                  {selectedVehicle.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-900 text-white rounded-xl p-6 border border-slate-800 space-y-4">
              <h4 className="text-sm font-bold text-amber-400 uppercase tracking-wider">
                Fleet Maintenance & Sanitization
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Every vehicle in our fleet is swept, disinfected, and re-stocked with freshly laundered moving blankets after every single job.
              </p>
              <div className="space-y-2 text-xs text-slate-400 pt-2 border-t border-slate-800">
                <div className="flex justify-between">
                  <span>Inspection Frequency:</span>
                  <span className="text-white font-semibold">Weekly 30-Point Safety Check</span>
                </div>
                <div className="flex justify-between">
                  <span>Suspension Type:</span>
                  <span className="text-white font-semibold">Pneumatic Air-Ride (Anti-Shock)</span>
                </div>
                <div className="flex justify-between">
                  <span>GPS Tracking:</span>
                  <span className="text-white font-semibold">Live Fleet Telematics</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => navigateTo({ name: 'calculator' })}
                  className="w-full py-2.5 px-4 font-bold text-xs text-slate-950 bg-amber-500 hover:bg-amber-400 rounded-lg transition-colors cursor-pointer text-center"
                >
                  Estimate with {selectedVehicle.name}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MOVING SUPPLIES & GEAR SHOWCASE */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
        <div>
          <span className="text-xs uppercase tracking-wider text-amber-600 font-bold">Standard Moving Gear</span>
          <h2 className="text-2xl font-bold text-slate-950 font-display mt-1">
            Professional Moving Equipment On Every Truck
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            We arrive fully armed with industrial-grade supplies so your home walls, doors, and furniture remain untouched.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {MOVING_EQUIPMENT.map((eq, i) => (
            <div key={i} className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-1.5">
              <h4 className="text-xs font-bold text-slate-950 font-display flex items-center gap-1.5">
                <Wrench className="w-3.5 h-3.5 text-amber-600" />
                <span>{eq.name}</span>
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {eq.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center py-6 bg-slate-900 text-white rounded-2xl p-8">
        <h3 className="text-2xl font-bold font-display">Experience The Difference Firsthand</h3>
        <p className="text-sm text-slate-300 mt-1 max-w-md mx-auto">
          Get an immediate estimate or talk to a real moving coordinator today.
        </p>
        <div className="mt-5 flex justify-center gap-3">
          <button
            onClick={() => navigateTo({ name: 'calculator' })}
            className="px-6 py-3 font-bold text-sm text-slate-950 bg-amber-500 hover:bg-amber-400 rounded-lg cursor-pointer"
          >
            Start Free Estimate
          </button>
          <button
            onClick={() => navigateTo({ name: 'contact' })}
            className="px-6 py-3 font-semibold text-sm text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg cursor-pointer"
          >
            Contact Headquarters
          </button>
        </div>
      </div>
    </div>
  );
};
