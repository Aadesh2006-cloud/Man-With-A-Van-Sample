export interface VehicleSpec {
  id: string;
  name: string;
  category: string;
  capacityCubicFeet: number;
  payloadCapacityLbs: number;
  idealFor: string;
  roomCapacity: string;
  dimensions: string;
  features: string[];
}

export const FLEET_VEHICLES: VehicleSpec[] = [
  {
    id: 'sprinter-van',
    name: 'High-Roof Mercedes Sprinter Van',
    category: 'City Rapid Mover',
    capacityCubicFeet: 530,
    payloadCapacityLbs: 3800,
    idealFor: 'Studio apartments, dorms, single-room items, urgent local pickups',
    roomCapacity: 'Studio or 1 Small Bedroom',
    dimensions: '14ft cargo length · 6.5ft interior standing height',
    features: [
      'Low clearance for underground garage access',
      'Dual sliding side doors and 270-degree rear barn doors',
      'Integrated E-track cargo tie-downs and interior LED floodlights',
      'Zero commercial parking permit restrictions on narrow city streets'
    ]
  },
  {
    id: 'box-truck-16',
    name: '16ft City Commercial Box Truck',
    category: 'Urban Residential',
    capacityCubicFeet: 900,
    payloadCapacityLbs: 5500,
    idealFor: '1 to 2 bedroom apartments, small condos, partial townhouse moves',
    roomCapacity: '1–2 Full Bedrooms + Living Area',
    dimensions: '16ft cargo deck · 7.5ft width · 7ft interior height',
    features: [
      'Pull-out lightweight aluminum loading ramp',
      'Soft-ride air suspension to protect glass and electronics',
      'Rear roll-up door with lockable tamper-proof seal',
      'Full suite of 45 quilted moving blankets and hardwood runners onboard'
    ]
  },
  {
    id: 'box-truck-20',
    name: '20ft Medium Cargo Hauler',
    category: 'Full House & Office',
    capacityCubicFeet: 1250,
    payloadCapacityLbs: 7200,
    idealFor: '2 to 3 bedroom homes, multi-level condos, medium retail offices',
    roomCapacity: '2–3 Bedrooms + Dining & Patio',
    dimensions: '20ft cargo deck · 8ft width · 7.8ft interior height',
    features: [
      'Heavy-duty hydraulic Maxon tuck-under liftgate (2,500 lb capacity)',
      'Dual-tier side tie-off slats throughout interior cargo walls',
      'Full wardrobe box hanging racks and dedicated appliance zone',
      'Automatic lane-assist and blind-spot logistics safety suite'
    ]
  },
  {
    id: 'box-truck-26',
    name: '26ft Heavy Master Cruiser',
    category: 'Interstate & Large Estate',
    capacityCubicFeet: 1750,
    payloadCapacityLbs: 10000,
    idealFor: '3 to 5 bedroom suburban homes, corporate office suites, interstate routes',
    roomCapacity: '3–5 Large Bedrooms + Basement & Garage',
    dimensions: '26ft cargo deck · 8.5ft width · 8.5ft interior height',
    features: [
      'Commercial Class 6 diesel engine with long-range fuel tanks',
      'Full hydraulic liftgate and dual side-entry access doors',
      'Real-time GPS telemetry and temperature-monitoring cargo sensors',
      'Over 90 premium quilted pads, piano skid boards, and floor protection kits'
    ]
  }
];

export const MOVING_EQUIPMENT = [
  {
    name: 'Quilted Heavy Furniture Pads',
    description: 'Thick, cotton-poly blend blankets that insulate woodwork, polished marble, and lacquered surfaces from friction and impacts.'
  },
  {
    name: 'Neoprene Floor Runners',
    description: 'Non-slip protective runners laid from entry door to every room to prevent dirt, snow, mud, and wheel ruts on hardwood and rugs.'
  },
  {
    name: 'Forearm Forklifts & Shoulder Dolly Straps',
    description: 'Ergonomic leverage harnesses enabling movers to safely navigate heavy appliances and armoires without scraping stairways or walls.'
  },
  {
    name: 'Piano Skids & 4-Wheel Pneumatic Dollies',
    description: 'Specialized hardwood skids with felt linings and non-marking rubber wheels for smooth rolling over delicate tiles and thresholds.'
  },
  {
    name: 'Industrial Stretch Film & Bubble Wrap',
    description: 'Puncture-resistant stretch wrap that seals drawers shut and holds protective blankets securely in place with zero sticky residue.'
  },
  {
    name: 'Full Tool Disassembly Kits',
    description: 'Cordless impact drivers, metric/SAE hex keys, and socket sets for disassembling cribs, bed frames, sectionals, and conference tables.'
  }
];
