import { ServiceDetail } from '../types/moving';

export const SERVICES_DATA: ServiceDetail[] = [
  {
    id: 'local-moving',
    title: 'Local Moving',
    tagline: 'Safe and efficient moving within your city.',
    shortDescription: 'Reliable intra-city relocation with guaranteed arrival windows, seasoned local movers, and zero hidden traffic or fuel surcharges.',
    fullDescription: 'Whether you are moving three blocks down the avenue or across town to a new neighborhood, our local moving team treats every item with obsessive care. We arrive equipped with padded vans, custom floor runners, wardrobe boxes, and professional dollies to ensure your belongings transition smoothly into your new space on schedule.',
    iconName: 'MapPin',
    startingPrice: '$119 / hr',
    pricingModel: 'Hourly rate with 2-hour minimum, including 2 movers and fully outfitted van',
    idealFor: [
      'Same-city apartment or house transitions',
      'Quick single-day relocations',
      'Short notice or emergency weekend moves',
      'Move-in / move-out coordination with building managers'
    ],
    whatsIncluded: [
      'Dedicated moving van equipped with ramp and liftgate',
      'Professional two-man or three-man mover crew',
      'Up to 60 heavy-duty quilted furniture blankets',
      'Shrink wrap and heavy packing tape for all upholstered furniture',
      'Disassembly and reassembly of standard bed frames and dining tables',
      'Neoprene floor and banister protection runners',
      'Standard basic valuation coverage ($0.60/lb per item)'
    ],
    equipmentProvided: [
      'Sprinter or 16ft–24ft custom-shelved commercial box truck',
      '4-wheel flatbed dollies and 2-wheel appliance hand trucks',
      'Mattress and sofa heavy protective covers',
      'Tool kit for furniture hardware and bracket disassembly',
      'Wardrobe boxes with hanging bars (free use on moving day)'
    ],
    processSteps: [
      {
        title: 'Arrival & Pre-Move Walkthrough',
        description: 'Our lead foreman reviews the layout, inspects fragile items, and installs floor runners and door jamb protectors.'
      },
      {
        title: 'Protective Pad & Shrink Wrapping',
        description: 'Every wooden surface, mirror, and upholstered piece is completely padded and wrapped before crossing the threshold.'
      },
      {
        title: 'Systematic Truck Loading',
        description: 'Heaviest furniture is tiered at the bulkhead, strapped securely with ratchet webbing to eliminate in-transit shifting.'
      },
      {
        title: 'Direct City Transit',
        description: 'Direct navigation using commercial GPS avoiding low bridges, residential weight limits, and peak gridlock.'
      },
      {
        title: 'Room-by-Room Unload & Staging',
        description: 'Boxes placed in corresponding rooms, furniture reassembled and positioned exactly where you instruct.'
      }
    ],
    faqs: [
      {
        question: 'Do you charge extra for stairs or walking distance in local moves?',
        answer: 'We provide fully transparent flat hourly rates with no surprise staircase or distance surcharges. Everything is covered under our clear hourly billing.'
      },
      {
        question: 'How early should I reserve my local move date?',
        answer: 'We recommend booking 2 to 3 weeks in advance, especially for month-end and weekend slots. However, we also hold flexible capacity for same-week emergency moves.'
      },
      {
        question: 'Can you provide Certificate of Insurance (COI) for my condo building?',
        answer: 'Yes! We issue custom COIs meeting your property management specifications within 24 hours at zero additional cost.'
      }
    ],
    recommendedCrew: '2 Movers + 16ft Van (Studios/1-Bed) or 3 Movers + 20ft Truck (2-3 Bed)',
    heroHeadline: 'Effortless City Moves With Reliable, Punctual Professionals',
    keyMetric: { value: '99.4%', label: 'On-Time Arrival Rate' }
  },
  {
    id: 'residential-moves',
    title: 'Residential Moves',
    tagline: 'Hassle-free moves for houses, apartments, and condos.',
    shortDescription: 'Comprehensive family home and apartment relocation handled with empathy, precision packing, and white-glove setup.',
    fullDescription: 'Moving your home is more than transporting furniture — it is moving your life and memories. At Man With A Van Moving Company, our residential moving service handles everything from narrow apartment spiral stairs to spacious multi-story estates. We coordinate freight elevator reservations, protect delicate hardwood, and place every bed, rug, and box in its designated room.',
    iconName: 'Home',
    startingPrice: '$139 / hr',
    pricingModel: 'All-inclusive hourly or guaranteed flat-binding estimate for multi-bedroom homes',
    idealFor: [
      'High-rise condominium and apartment moves with strict freight elevator slots',
      'Suburban family homes and townhouses (1 to 5+ bedrooms)',
      'Senior living relocations and assisted transitions',
      'Downsizing or upsizing households'
    ],
    whatsIncluded: [
      'Comprehensive move planning consultation with dedicated move coordinator',
      'Custom mattress bags and sofa protection sleeves',
      'Wardrobe boxes for hanging closet clothes',
      'Full furniture disassembly (beds, cribs, dining tables, sectional sofas)',
      'Reassembly and placement in your new rooms',
      'Zero stairs fee or heavy furniture penalty',
      'Full clean-up of all packing wraps, tape, and protective materials'
    ],
    equipmentProvided: [
      'Up to 26ft high-capacity moving truck with hydraulic ramp',
      'Specialized appliance moving straps & piano dollies',
      'Hardwood floor protection neoprene runners',
      'Heavy-duty quilted furniture pads & corner guards',
      'Cordless drills and precision furniture assembly kit'
    ],
    processSteps: [
      {
        title: 'Virtual or On-Site Inventory Assessment',
        description: 'We accurately catalog your furniture, boxes, and specialty items to assign the exact truck size and mover count.'
      },
      {
        title: 'Property Protection Setup',
        description: 'Movers apply banister covers, front door blankets, and floor runners before a single box is lifted.'
      },
      {
        title: 'Furniture Prep & Disassembly',
        description: 'Bed frames taken down, hardware stored in labeled bags, and mirrors/art carefully wrapped.'
      },
      {
        title: 'Balanced Stacking & Securing',
        description: 'Tiers built with equal weight distribution and double ratchet straps to safeguard against road vibrations.'
      },
      {
        title: 'Precision Unload & Reassembly',
        description: 'Beds re-assembled, dressers positioned, and every box placed in its designated bedroom, kitchen, or living room.'
      }
    ],
    faqs: [
      {
        question: 'Do you move heavy appliances like washers and double-door refrigerators?',
        answer: 'Yes, our teams are equipped with appliance dollies and hump straps to safely disconnect (unhooked previously) and maneuver major appliances.'
      },
      {
        question: 'Can you pack our entire house or just delicate items?',
        answer: 'We offer flexible options: Full-Packing (we pack every drawer and cupboard), Fragile-Only (fine china, glassware, art), or packing supplies drop-off.'
      },
      {
        question: 'What happens if our closing is delayed on move-in day?',
        answer: 'We offer flexible overnight truck holding and short-term vaulted storage so your items stay protected while keys are sorted out.'
      }
    ],
    recommendedCrew: '3 Movers + 20ft Truck (2-Bed) or 4 Movers + 26ft Truck (3-4 Bed House)',
    heroHeadline: 'From Keys Handover to Bedroom Setup — Your Home Relocation Perfected',
    keyMetric: { value: '15,000+', label: 'Homes Moved Safely' }
  },
  {
    id: 'commercial-moving',
    title: 'Commercial Moving',
    tagline: 'Office and business relocation with minimal downtime.',
    shortDescription: 'Systematic commercial relocation for corporate offices, retail spaces, medical clinics, and creative studios.',
    fullDescription: 'Downtime costs money. That is why our Commercial Moving division operates with logistical precision. We plan evening and weekend moves so your staff clocks out on Friday at the old office and walks into fully functional workstations on Monday morning. From IT servers and executive desks to filing archives and retail inventory, we keep your business moving forward.',
    iconName: 'Building2',
    startingPrice: 'Custom Binding Quote',
    pricingModel: 'Fixed commercial project contract based on workstation count and scope',
    idealFor: [
      'Corporate headquarters & small-to-medium offices (5 to 150+ desks)',
      'Retail storefronts, boutiques, and stockrooms',
      'Medical, dental, and law offices requiring strict confidentiality',
      'Coworking and creative studio transitions'
    ],
    whatsIncluded: [
      'Dedicated Commercial Project Manager & phased logistics plan',
      'Anti-static bubble wrap and specialized monitor protective sleeves',
      'Color-coded labeling system for every workstation and department',
      'Disassembly and reassembly of modular cubicles and conference tables',
      'After-hours and weekend moving schedules (no overtime penalty)',
      'Building protection compliance for commercial towers and loading docks',
      'Disposal and donation coordination for surplus office furniture'
    ],
    equipmentProvided: [
      'Commercial rolling library carts & computer rolling crates',
      'Heavy-duty panel carts for cubicle partitions and conference glass',
      'Hydraulic pallet jacks and liftgate commercial trucks',
      'Anti-static sleeves and electronic monitor protective tote bins',
      'Industrial floor masonite sheets for elevator lobbies and corridors'
    ],
    processSteps: [
      {
        title: 'Pre-Move Planning & Site Survey',
        description: 'Our project lead reviews architectural floor plans, loading dock access, and timeline dependencies.'
      },
      {
        title: 'Workstation Bag & Tag System',
        description: 'Each employee receives numbered crates; monitors, peripherals, and files are keyed to the new floor plan.'
      },
      {
        title: 'After-Hours or Weekend Relocation',
        description: 'Loading docks and freight elevators operated during quiet hours to avoid interrupting building tenants.'
      },
      {
        title: 'IT & Modular Furniture Staging',
        description: 'Desks assembled, monitors placed, and crates delivered directly to corresponding desk footprints.'
      },
      {
        title: 'Post-Move Day 1 Support',
        description: 'On-site mover technicians assist during the first morning back to adjust desk heights and collect crates.'
      }
    ],
    faqs: [
      {
        question: 'Can you move our server racks and IT hardware?',
        answer: 'Yes. We transport dismounted servers and delicate networking gear in dedicated climate-controlled trucks using anti-static padding.'
      },
      {
        question: 'Do you provide certificate of insurance with $5M liability?',
        answer: 'Yes, our commercial insurance policy meets and exceeds standard commercial landlord and class-A property manager requirements.'
      },
      {
        question: 'Can we rent plastic reusable moving crates instead of cardboard boxes?',
        answer: 'We deliver commercial plastic crates 1 week prior to the move and pick them up after unpacking, cutting box waste to zero.'
      }
    ],
    recommendedCrew: 'Commercial Project Team (4 to 12 Specialists + Dual 26ft Fleet)',
    heroHeadline: 'Zero Business Interruption — Flawless Corporate Relocations',
    keyMetric: { value: '0 hrs', label: 'Unplanned Work Downtime' }
  },
  {
    id: 'interstate-moving',
    title: 'Interstate Moving',
    tagline: 'Long-distance moves across provinces with full support.',
    shortDescription: 'Dedicated direct-route long-distance moving. Your belongings travel on their own dedicated truck with guaranteed delivery dates.',
    fullDescription: 'Unlike mega-van lines that co-mingle five households in one tractor-trailer with 2-week delivery windows, Man With A Van Moving Company provides dedicated interstate moving. Your shipment gets its own truck and driver, sealed at your origin, and delivered directly to your destination on the exact calendar day promised. Full GPS tracking keeps you informed every mile of the journey.',
    iconName: 'Compass',
    startingPrice: 'Guaranteed Flat Rate',
    pricingModel: 'Transparent flat binding rate based on distance, inventory volume, and fuel',
    idealFor: [
      'Provincial and interstate job relocations',
      'Cross-country family moves',
      'College transfers and graduate relocations',
      'Retirement moves to new provinces or states'
    ],
    whatsIncluded: [
      'Dedicated truck exclusively for your household (never shared with strangers)',
      'Guaranteed direct delivery dates — no 14-day vague holding windows',
      'Complete furniture wrapping, mattress bagging, and protective crating',
      'Full inventory itemization with individual barcode tagging',
      'Continuous GPS truck tracking updates sent directly to your phone',
      'Comprehensive fuel, tolls, highway permits, and driver per-diem included',
      'Unloading, unwrapping, and furniture reassembly at destination'
    ],
    equipmentProvided: [
      'Highway-rated long-haul commercial vans with air-ride suspension',
      'Dual driver teams for accelerated non-stop long distance routing',
      'Heavy-duty industrial tie-off rails and interior cargo decking',
      'Full crate and padded blanket inventories for long transit stability',
      'GPS telemetry tracking and real-time route optimization'
    ],
    processSteps: [
      {
        title: 'Binding Flat-Rate Quote',
        description: 'Complete video or in-home survey produces a binding guaranteed price with zero surprise weight charges.'
      },
      {
        title: 'Master Inventory Cataloging',
        description: 'Every box and furniture piece is labeled and signed off on the bill of lading before departure.'
      },
      {
        title: 'Direct Long-Haul Transit',
        description: 'Our dedicated driver departs directly for your destination city without zig-zagging to other customers.'
      },
      {
        title: 'Real-Time Driver Check-ins',
        description: 'Daily morning status updates with estimated ETA and route progress sent via SMS and email.'
      },
      {
        title: 'Guaranteed Arrival & Setup',
        description: 'We arrive on the agreed morning, unload every item, check off the inventory sheet, and assemble furniture.'
      }
    ],
    faqs: [
      {
        question: 'Will our furniture be combined with someone else’s move?',
        answer: 'Never. We assign dedicated vans and trucks specifically to your move. Your items never touch another household’s property.'
      },
      {
        question: 'How do you calculate long-distance pricing?',
        answer: 'We provide binding flat rates based on confirmed cubic footage and mileage. The price agreed upon is the exact price on the invoice.'
      },
      {
        question: 'What if our new home is not ready when the truck arrives?',
        answer: 'We can transfer your shipment directly into our secure climate-controlled storage vaults and deliver whenever you are ready.'
      }
    ],
    recommendedCrew: 'Dedicated Interstate Route Crew (2 Pro Movers/Drivers + Direct Long-Haul Van)',
    heroHeadline: 'Direct Interstate Moving With Guaranteed Delivery Dates & Dedicated Vans',
    keyMetric: { value: '100%', label: 'Dedicated Truck Guarantee' }
  },
  {
    id: 'storage-solutions',
    title: 'Storage Solutions',
    tagline: 'Secure short-term and long-term storage options.',
    shortDescription: 'Clean, climate-controlled, vaulted storage facilities with 24/7 video surveillance, dust seals, and direct door-to-vault transfer.',
    fullDescription: 'Between leases? Renovating your home? Staging your property for sale? Our private storage facilities offer modern, climate-controlled vault storage for personal belongings and commercial assets. Our movers pick up your items, professionally wrap and inventory them, load them directly into sealed private wooden vaults, and deliver them when you are ready.',
    iconName: 'Archive',
    startingPrice: '$89 / month',
    pricingModel: 'Monthly flexible leasing with prorated move-in and zero long-term lease lock-in',
    idealFor: [
      'Gap periods between lease end and new home possession',
      'Home staging, decluttering, or major remodeling projects',
      'Seasonal equipment, patio furniture, and holiday displays',
      'Commercial excess inventory, trade-show booths, and file archives'
    ],
    whatsIncluded: [
      'Climate-controlled environment maintained at 68°F – 72°F and 45% humidity',
      '24/7 digital CCTV surveillance and computerized access control',
      'Sealed wooden vault containers that protect against dust and light',
      'Furniture remains wrapped in protective blankets throughout storage',
      'Itemized digital inventory list with photo documentation',
      'Flexible month-to-month contracts with no cancellation penalties',
      'Seamless pickup from your doorstep and delivery to your new address'
    ],
    equipmentProvided: [
      'Industrial storage vaults (7ft x 5ft x 8ft solid wood breathable containers)',
      'High-grade commercial HVAC climate control with dual backup generators',
      'Individual fire suppression and certified pest-deterrent systems',
      'Hydraulic forklift fleet for zero-contact vault handling',
      'Heavy-duty breathable furniture storage wrap'
    ],
    processSteps: [
      {
        title: 'Doorstep Pickup & Wrap',
        description: 'Our movers arrive at your home, wrap furniture in thick moving blankets, and pack your inventory.'
      },
      {
        title: 'Direct Vault Packing',
        description: 'Goods are packed into private wooden vaults at our facility, eliminating redundant handling and scuffs.'
      },
      {
        title: 'Sealing & Security Tagging',
        description: 'Each vault is sealed with tamper-evident security tags and cataloged in our digital warehouse system.'
      },
      {
        title: 'Safe Climate Preservation',
        description: 'Belongings rest in our clean, humidity-controlled, alarmed warehouse until you request them.'
      },
      {
        title: 'White-Glove Redelivery',
        description: 'When your new home is ready, we dispatch the vaults and our crew unloads and reassembles everything.'
      }
    ],
    faqs: [
      {
        question: 'Can I access my storage unit if I need an item early?',
        answer: 'Yes! Simply give us 24 to 48 hours notice and our warehouse team will stage your vault in our private viewing bay.'
      },
      {
        question: 'Is your storage facility temperature and humidity regulated?',
        answer: 'Yes, 365 days a year. Our HVAC system prevents warping of wooden musical instruments, electronics corrosion, and mildew.'
      },
      {
        question: 'Do I have to hire a separate moving truck to bring items to storage?',
        answer: 'No! Our full-service package includes pickup from your home, transfer into storage, and final redelivery when you move.'
      }
    ],
    recommendedCrew: 'Door-to-Storage Crew (2 Movers + Vault Logistics)',
    heroHeadline: 'Climate-Controlled Vaulted Storage With Direct Doorstep Pickup',
    keyMetric: { value: '24/7', label: 'CCTV Video Monitoring' }
  },
  {
    id: 'labor-only',
    title: 'Labor Only Services',
    tagline: 'Need extra hands? We help with loading, unloading, and furniture rearrangement.',
    shortDescription: 'Muscles and expertise on demand. Hire our trained, background-checked movers to handle the heavy lifting while you keep control of your vehicle.',
    fullDescription: 'Already rented a U-Haul, Penske, or PODS container? Or perhaps you just bought a heavy marble dining table or want to rearrange bedroom furniture across two floors? Our Labor Only service sends seasoned, fit, and courteous movers equipped with dollies, tools, and lifting straps. We do the back-breaking work safely, quickly, and without scuffing your baseboards.',
    iconName: 'Users',
    startingPrice: '$89 / hr',
    pricingModel: 'Simple hourly rate (2-hour minimum) per mover, zero travel or truck fee inside city limits',
    idealFor: [
      'Loading or unloading rental trucks (U-Haul, Budget, Penske)',
      'Loading or unloading mobile storage containers (PODS, Pack-Rat, U-Box)',
      'In-home furniture rearrangement and staging for open houses',
      'Heavy item lifting (pianos, safes, gym equipment, oak armoires)'
    ],
    whatsIncluded: [
      'Experienced, background-checked, insured moving specialists',
      'Professional lifting straps (Forearm Forklifts and hump straps)',
      'Tool kit for furniture disassembly and hardware organization',
      'Safe packing and tight stacking inside your rental truck or container',
      'Floor protection runners and door jamb guards',
      'Zero stairs fee or heavy object surcharge'
    ],
    equipmentProvided: [
      'Commercial 4-wheel dollies and upright heavy hand trucks',
      'Heavy appliance lifting harnesses & neoprene floor pads',
      'DeWalt power drill sets for rapid bed and desk assembly',
      'Plastic stretch film and tape guns for reinforcing your boxes'
    ],
    processSteps: [
      {
        title: 'Punctual On-Site Arrival',
        description: 'Our movers arrive on time in uniform with dollies, toolkits, and straps ready to work immediately.'
      },
      {
        title: 'Loading Strategy & Weight Distribution',
        description: 'If loading a rental truck, we engineer tight tiers to maximize cubic space and balance road weight.'
      },
      {
        title: 'Careful Heavy Lifting',
        description: 'We maneuver bulky couches and dressers around tight corners and banisters without drywall scrapes.'
      },
      {
        title: 'Disassembly / Assembly Help',
        description: 'Our team rapidly disassembles or reassembles beds, tables, and workout gear as requested.'
      },
      {
        title: 'Final Sweeps & Inspection',
        description: 'We make sure items are positioned exactly where you want before signing off the completed hours.'
      }
    ],
    faqs: [
      {
        question: 'Do your labor-only movers bring tools and dollies?',
        answer: 'Yes! Every mover brings professional dollies, lifting straps, and basic hand tools at no additional charge.'
      },
      {
        question: 'Can you help pack our PODS or moving container tight?',
        answer: 'Yes, our movers are master packers trained in tight brick-stacking so your belongings do not shift or slide during transport.'
      },
      {
        question: 'Is there a minimum hour requirement for labor-only?',
        answer: 'There is a standard 2-hour minimum, billed in clear 15-minute increments thereafter with no hidden charges.'
      }
    ],
    recommendedCrew: '2 Movers (Apartments/Containers) or 3–4 Movers (Large Houses/Trucks)',
    heroHeadline: 'Experienced Heavy Lifters On Demand — No Truck Required',
    keyMetric: { value: '4.98', label: 'Average Customer Rating' }
  }
];
