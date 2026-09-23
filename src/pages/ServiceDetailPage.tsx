import React from 'react';
import { useRouter } from '../context/RouterContext';
import { SERVICES_DATA } from '../data/servicesData';
import { ServiceId } from '../types/moving';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { ServiceIcon } from '../components/common/ServiceIcon';
import { 
  CheckCircle2, ArrowRight, ShieldCheck, Clock, 
  HelpCircle, Wrench, ChevronLeft 
} from 'lucide-react';

export const ServiceDetailPage: React.FC<{ serviceId: ServiceId }> = ({ serviceId }) => {
  const { navigateTo } = useRouter();

  const service = SERVICES_DATA.find((s) => s.id === serviceId) || SERVICES_DATA[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-12 pb-20">
      <Breadcrumbs 
        items={[
          { label: 'Moving Services', onClick: () => navigateTo({ name: 'services' }) },
          { label: service.title, current: true }
        ]} 
      />

      {/* Back button */}
      <div>
        <button
          onClick={() => navigateTo({ name: 'services' })}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Back to All Services</span>
        </button>
      </div>

      {/* HERO SECTION FOR SPECIFIC SERVICE */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold shadow-sm">
              <ServiceIcon name={service.iconName} className="w-7 h-7" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider text-amber-600 font-bold">
                Specialized Service Division
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight font-display">
                {service.title}
              </h1>
            </div>
          </div>

          <p className="text-lg sm:text-xl font-medium text-slate-700">
            {service.tagline}
          </p>

          <p className="text-base text-slate-600 leading-relaxed">
            {service.fullDescription}
          </p>

          {/* Key Metric highlight */}
          <div className="inline-flex items-center gap-3 py-2 px-4 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-800">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>
              Performance Guarantee: <strong className="font-bold text-slate-950">{service.keyMetric.value}</strong> ({service.keyMetric.label})
            </span>
          </div>
        </div>

        {/* Pricing Card */}
        <div className="lg:col-span-4 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-5">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Starting Rate</span>
            <div className="text-3xl font-extrabold text-slate-950 font-display mt-1 tabular-nums">
              {service.startingPrice}
            </div>
            <p className="text-xs text-slate-500 mt-1 leading-snug">
              {service.pricingModel}
            </p>
          </div>

          <div className="space-y-3 text-xs text-slate-700">
            <div>
              <span className="font-semibold text-slate-900 block mb-0.5">Recommended Crew:</span>
              <p className="text-slate-600">{service.recommendedCrew}</p>
            </div>
            <div>
              <span className="font-semibold text-slate-900 block mb-0.5">Cancellation Policy:</span>
              <p className="text-slate-600">Zero cancellation penalty up to 48 hours prior to move date.</p>
            </div>
          </div>

          <div className="pt-2 space-y-2">
            <button
              onClick={() => navigateTo({ name: 'calculator', prefillService: service.id })}
              className="w-full py-3 px-4 font-bold text-sm text-slate-950 bg-amber-500 hover:bg-amber-400 active:bg-amber-600 rounded-lg transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer"
            >
              <span>Estimate {service.title} Cost</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => navigateTo({ name: 'contact', prefillSubject: `Inquiry for ${service.title}` })}
              className="w-full py-2.5 px-4 font-semibold text-xs text-slate-700 hover:text-slate-950 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors cursor-pointer"
            >
              Speak to Service Specialist
            </button>
          </div>
        </div>
      </div>

      {/* IDEAL FOR & INCLUDED EQUIPMENT */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Ideal For */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-slate-950 mb-4 font-display">
            Ideal Move Scenarios
          </h2>
          <div className="space-y-3">
            {service.idealFor.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Equipment Provided */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8">
          <div className="flex items-center gap-2 mb-4">
            <Wrench className="w-5 h-5 text-slate-700" />
            <h2 className="text-xl font-bold text-slate-950 font-display">
              Equipment & Supplies Included
            </h2>
          </div>
          <div className="space-y-3">
            {service.equipmentProvided.map((eq, idx) => (
              <div key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                <span>{eq}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* STEP-BY-STEP PROCESS */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-10 space-y-8">
        <div>
          <span className="text-xs uppercase tracking-wider text-amber-400 font-bold">Standard Operating Procedure</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mt-1 font-display">
            The {service.title} Workflow
          </h2>
          <p className="text-sm text-slate-400 mt-1 max-w-xl">
            Every step is calibrated to protect your property and eliminate unexpected surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {service.processSteps.map((step, idx) => (
            <div key={idx} className="bg-slate-800/70 p-5 rounded-xl border border-slate-700/60">
              <span className="text-xs font-mono text-amber-400 font-bold">STAGE 0{idx + 1}</span>
              <h3 className="text-base font-bold text-white mt-1 mb-2 font-display">{step.title}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* WHAT'S INCLUDED DETAILED */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8">
        <h2 className="text-xl font-bold text-slate-950 mb-4 font-display">
          Everything Included In Your Quote
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {service.whatsIncluded.map((inc, i) => (
            <div key={i} className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-100 text-xs text-slate-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>{inc}</span>
            </div>
          ))}
        </div>
      </div>

      {/* SERVICE SPECIFIC FAQS */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
        <div className="flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-amber-500" />
          <h2 className="text-xl font-bold text-slate-950 font-display">
            Frequently Asked Questions: {service.title}
          </h2>
        </div>

        <div className="divide-y divide-slate-100 space-y-4">
          {service.faqs.map((faq, i) => (
            <div key={i} className="pt-4 first:pt-0">
              <h3 className="text-sm font-bold text-slate-900 font-display">
                {faq.question}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM CTA */}
      <div className="text-center py-8 bg-amber-50 rounded-2xl border border-amber-200 p-6">
        <h3 className="text-2xl font-bold text-slate-950 font-display">
          Ready to book your {service.title.toLowerCase()}?
        </h3>
        <p className="text-sm text-slate-600 mt-1 max-w-md mx-auto">
          Calculate your exact itemized price and secure your crew in less than 2 minutes.
        </p>
        <div className="mt-5 flex justify-center gap-3">
          <button
            onClick={() => navigateTo({ name: 'calculator', prefillService: service.id })}
            className="px-6 py-3 bg-amber-500 hover:bg-amber-400 font-bold text-sm text-slate-950 rounded-lg shadow-sm cursor-pointer"
          >
            Calculate Move Estimate
          </button>
          <button
            onClick={() => navigateTo({ name: 'contact' })}
            className="px-6 py-3 bg-white hover:bg-slate-50 font-semibold text-sm text-slate-800 border border-slate-300 rounded-lg cursor-pointer"
          >
            Ask a Question
          </button>
        </div>
      </div>
    </div>
  );
};
