import React from 'react';

export const TruckIllustration: React.FC<{ className?: string }> = ({ className = 'w-full h-auto' }) => {
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 p-6 sm:p-8 text-white shadow-xl ${className}`}>
      {/* Background architectural grid pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M 32 0 L 0 0 0 32" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center">
        {/* Crisp vector moving truck and logistics graphic */}
        <svg viewBox="0 0 800 360" className="w-full max-w-2xl h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Ground shadow & street plane */}
          <ellipse cx="400" cy="325" rx="340" ry="18" fill="#020617" opacity="0.6" />
          <path d="M 40 325 L 760 325" stroke="#334155" strokeWidth="3" strokeDasharray="8 8" />

          {/* TRUCK CABIN */}
          <path d="M 520 130 L 610 130 C 635 130 655 145 665 170 L 685 220 C 690 230 695 245 695 260 L 695 295 C 695 300 690 305 685 305 L 520 305 Z" fill="#F8FAFC" />
          {/* Cab windshield */}
          <path d="M 535 145 L 605 145 C 620 145 632 155 640 172 L 655 210 L 535 210 Z" fill="#0F172A" />
          {/* Front Bumper & Grill */}
          <rect x="670" y="270" width="35" height="35" rx="6" fill="#334155" />
          <rect x="675" y="276" width="25" height="4" rx="2" fill="#64748B" />
          <rect x="675" y="284" width="25" height="4" rx="2" fill="#64748B" />
          <rect x="675" y="292" width="25" height="4" rx="2" fill="#64748B" />
          {/* Headlight */}
          <rect x="682" y="238" width="16" height="18" rx="4" fill="#F59E0B" />
          {/* Side mirror */}
          <rect x="525" y="165" width="10" height="28" rx="3" fill="#1E293B" />
          <rect x="515" y="176" width="12" height="5" fill="#334155" />

          {/* TRUCK CARGO BOX */}
          <rect x="160" y="70" width="365" height="235" rx="8" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="2" />
          
          {/* Cargo Box Roof aerodynamic wind deflector */}
          <path d="M 525 110 L 600 130 L 525 130 Z" fill="#CBD5E1" />

          {/* Van branding stripe & typography */}
          <rect x="160" y="150" width="365" height="46" fill="#0F172A" />
          <rect x="160" y="196" width="365" height="8" fill="#F59E0B" />

          {/* Logo text on truck */}
          <text x="342" y="180" textAnchor="middle" fill="#FFFFFF" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="19" letterSpacing="0.05em">
            MAN WITH A VAN
          </text>
          <text x="342" y="235" textAnchor="middle" fill="#475569" fontFamily="system-ui, sans-serif" fontWeight="600" fontSize="11" letterSpacing="0.1em">
            HOMES · OFFICES · INTERSTATE · STORAGE
          </text>

          {/* Cargo box structural vertical seams */}
          <line x1="250" y1="72" x2="250" y2="150" stroke="#F1F5F9" strokeWidth="2" />
          <line x1="250" y1="204" x2="250" y2="303" stroke="#F1F5F9" strokeWidth="2" />
          <line x1="430" y1="72" x2="430" y2="150" stroke="#F1F5F9" strokeWidth="2" />
          <line x1="430" y1="204" x2="430" y2="303" stroke="#F1F5F9" strokeWidth="2" />

          {/* Rear loading ramp (extended to ground) */}
          <polygon points="160,295 70,320 65,325 160,305" fill="#94A3B8" />
          <line x1="160" y1="298" x2="68" y2="322" stroke="#475569" strokeWidth="1.5" strokeDasharray="6 3" />

          {/* WHEELS */}
          {/* Front Wheel */}
          <circle cx="620" cy="305" r="32" fill="#0F172A" />
          <circle cx="620" cy="305" r="20" fill="#475569" />
          <circle cx="620" cy="305" r="10" fill="#94A3B8" />

          {/* Rear Tandem Wheels */}
          <circle cx="280" cy="305" r="32" fill="#0F172A" />
          <circle cx="280" cy="305" r="20" fill="#475569" />
          <circle cx="280" cy="305" r="10" fill="#94A3B8" />

          <circle cx="215" cy="305" r="32" fill="#0F172A" />
          <circle cx="215" cy="305" r="20" fill="#475569" />
          <circle cx="215" cy="305" r="10" fill="#94A3B8" />

          {/* MOVER 1 (Professional with Dolly and Box) */}
          <g transform="translate(60, 210)">
            {/* Hand truck dolly */}
            <line x1="45" y1="20" x2="25" y2="110" stroke="#DC2626" strokeWidth="4" />
            <circle cx="23" cy="112" r="8" fill="#1E293B" stroke="#64748B" strokeWidth="2" />
            <rect x="18" y="105" width="26" height="5" rx="2" fill="#DC2626" />

            {/* Boxes on Dolly */}
            <rect x="26" y="55" width="34" height="28" rx="2" fill="#D97706" stroke="#B45309" strokeWidth="1.5" />
            <line x1="26" y1="69" x2="60" y2="69" stroke="#B45309" strokeWidth="1" strokeDasharray="3 2" />
            <rect x="28" y="24" width="30" height="28" rx="2" fill="#F59E0B" stroke="#D97706" strokeWidth="1.5" />
            <line x1="28" y1="38" x2="58" y2="38" stroke="#D97706" strokeWidth="1" strokeDasharray="3 2" />

            {/* Mover Figure */}
            {/* Head & Cap */}
            <circle cx="68" cy="12" r="9" fill="#FBCFE8" />
            <path d="M 60 10 Q 70 2 78 10 L 84 10 L 84 13 L 60 13 Z" fill="#0F172A" />
            {/* Uniform Polo */}
            <path d="M 58 22 L 78 22 L 74 65 L 56 65 Z" fill="#1E3A8A" />
            <rect x="62" y="22" width="4" height="15" fill="#F59E0B" />
            {/* Arms reaching dolly */}
            <path d="M 62 30 L 45 45" stroke="#1E3A8A" strokeWidth="5" strokeLinecap="round" />
            {/* Work Trousers */}
            <path d="M 56 65 L 54 110 L 64 110 L 67 75 L 70 110 L 78 110 L 74 65 Z" fill="#1E293B" />
            {/* Work boots */}
            <rect x="49" y="108" width="15" height="7" rx="3" fill="#78350F" />
            <rect x="70" y="108" width="15" height="7" rx="3" fill="#78350F" />
          </g>

          {/* MOVER 2 (Carefully Carrying a Protected Armchair) */}
          <g transform="translate(680, 215)">
            {/* Mover Figure */}
            <circle cx="25" cy="10" r="9" fill="#FBCFE8" />
            <path d="M 18 8 Q 28 0 35 8 L 41 8 L 41 11 L 18 11 Z" fill="#0F172A" />
            <path d="M 16 20 L 36 20 L 33 65 L 14 65 Z" fill="#1E3A8A" />
            <rect x="22" y="20" width="4" height="15" fill="#F59E0B" />
            <path d="M 14 65 L 12 108 L 22 108 L 26 75 L 29 108 L 38 108 L 33 65 Z" fill="#1E293B" />
            <rect x="8" y="106" width="15" height="7" rx="3" fill="#78350F" />
            <rect x="28" y="106" width="15" height="7" rx="3" fill="#78350F" />

            {/* Quilted wrapped box/wardrobe held */}
            <rect x="-24" y="24" width="38" height="52" rx="4" fill="#0369A1" stroke="#0284C7" strokeWidth="2" />
            <path d="M -24 35 L 14 35" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="4 2" />
            <path d="M -24 55 L 14 55" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="4 2" />
            {/* Arms holding box */}
            <path d="M 22 28 L -5 45" stroke="#1E3A8A" strokeWidth="5" strokeLinecap="round" />
          </g>
        </svg>

        {/* Live operational badge under graphic */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>GPS Monitored Fleet Active</span>
          </div>
          <span className="text-slate-600">·</span>
          <span>Hydraulic Liftgates & Soft-Ride Air Suspension</span>
          <span className="text-slate-600">·</span>
          <span>Double Quilted Padded Protection</span>
        </div>
      </div>
    </div>
  );
};
