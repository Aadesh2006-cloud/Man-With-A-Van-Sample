import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { 
  Phone, Mail, MapPin, Clock, ShieldCheck, 
  Send, CheckCircle2, MessageSquare, AlertCircle 
} from 'lucide-react';

export const ContactPage: React.FC<{ prefillSubject?: string }> = ({ prefillSubject }) => {
  const { navigateTo } = useRouter();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState(prefillSubject || 'General Moving Inquiry');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !message) return;
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-12 pb-20">
      <Breadcrumbs items={[{ label: 'Contact & Dispatch', current: true }]} />

      <div className="max-w-3xl space-y-3">
        <span className="text-xs uppercase tracking-wider text-amber-600 font-bold">24/7 Dispatch Readiness</span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-950 tracking-tight font-display">
          Speak With Our Moving Team
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          Need a custom moving quote, have a question regarding Certificates of Insurance, or want to coordinate a complex commercial move? Our dispatch team is ready to help.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* LEFT COLUMN: CONTACT DETAILS & OPERATING HOURS */}
        <div className="lg:col-span-5 space-y-6">
          {/* Dispatch Cards */}
          <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-7 border border-slate-800 space-y-6 shadow-lg">
            <h3 className="text-lg font-bold font-display text-white border-b border-slate-800 pb-3">
              Direct Dispatch Channels
            </h3>

            <div className="space-y-4 text-xs">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-slate-400 block">Toll-Free Reservations:</span>
                  <a href="tel:18005556683" className="text-sm font-bold text-white hover:text-amber-400 transition-colors">
                    1-800-555-MOVE (6683)
                  </a>
                  <p className="text-[11px] text-slate-400 mt-0.5">Instant quotes, scheduling & date changes</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-800 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-slate-400 block">Weekend Moving Day Hotline:</span>
                  <a href="tel:18005556684" className="text-sm font-bold text-white hover:text-amber-400 transition-colors">
                    1-800-555-6684
                  </a>
                  <p className="text-[11px] text-slate-400 mt-0.5">For active moves in progress</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-800 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-slate-400 block">Email Inquiries & COI Requests:</span>
                  <a href="mailto:dispatch@manwithavanmovers.com" className="text-sm font-bold text-white hover:text-amber-400 transition-colors">
                    dispatch@manwithavanmovers.com
                  </a>
                  <p className="text-[11px] text-slate-400 mt-0.5">Average response time: &lt;45 minutes</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-800 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-slate-400 block">Operations Terminal & Vault Warehouse:</span>
                  <span className="text-white font-medium">450 Transport Parkway, Logistics Terminal B</span>
                  <p className="text-[11px] text-slate-400 mt-0.5">Client storage visits by appointment</p>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800 text-xs text-slate-400 space-y-1.5">
              <div className="flex items-center gap-2 text-white font-semibold">
                <Clock className="w-4 h-4 text-amber-400" />
                <span>Dispatch & Truck Hours:</span>
              </div>
              <div className="flex justify-between pl-6 text-[11px]">
                <span>Monday – Friday:</span>
                <span className="text-white font-mono">6:30 AM – 9:00 PM EST</span>
              </div>
              <div className="flex justify-between pl-6 text-[11px]">
                <span>Saturday – Sunday:</span>
                <span className="text-white font-mono">7:00 AM – 8:00 PM EST</span>
              </div>
            </div>
          </div>

          {/* Quick link to track move */}
          <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-slate-900 block">Already have a booking?</span>
              <span className="text-xs text-slate-500">Track reference status and assigned truck</span>
            </div>
            <button
              onClick={() => navigateTo({ name: 'booking-lookup' })}
              className="px-3.5 py-2 text-xs font-bold text-slate-950 bg-amber-500 hover:bg-amber-400 rounded-lg transition-colors cursor-pointer"
            >
              Track Move
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: CONTACT & DISPATCH FORM */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-950 font-display">
                Dispatch Request Received
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{fullName}</strong>. Your inquiry has been routed to our senior moving coordinator. We will reply via email or phone at <strong>{phone || email}</strong> shortly.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-xs font-semibold text-slate-800 rounded-lg cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="border-b border-slate-100 pb-3">
                <h3 className="text-xl font-bold text-slate-950 font-display">
                  Send A Message To Dispatch
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Fill in your details and we will get back to you with custom information.
                </p>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. David Morrison"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="david@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="(555) 987-6543"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Topic / Subject</label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-slate-900 bg-white"
                  >
                    <option value="General Moving Inquiry">General Moving Inquiry</option>
                    <option value="Residential Moving Quote">Residential Moving Quote</option>
                    <option value="Commercial / Office Relocation">Commercial / Office Relocation</option>
                    <option value="Interstate / Long-Distance">Interstate / Long-Distance</option>
                    <option value="Storage Vaults Inquiry">Storage Vaults Inquiry</option>
                    <option value="Certificate of Insurance Request">Certificate of Insurance (COI) Request</option>
                    <option value="Labor Only Assistance">Labor Only Assistance</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Move Details or Question *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Provide details such as move dates, approximate locations, specific furniture, or questions..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-amber-500 hover:bg-amber-400 active:bg-amber-600 font-bold text-sm text-slate-950 rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-2 shadow"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Inquiry to Dispatch</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
