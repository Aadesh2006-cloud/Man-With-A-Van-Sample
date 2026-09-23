import { ChecklistItem } from '../types/moving';

export const INITIAL_CHECKLIST: ChecklistItem[] = [
  // 8 Weeks
  {
    id: 'chk-1',
    timeframe: '8-weeks',
    category: 'logistics',
    task: 'Book Man With A Van Moving Company to lock in preferred moving date and crew',
    completed: false
  },
  {
    id: 'chk-2',
    timeframe: '8-weeks',
    category: 'logistics',
    task: 'Create a dedicated digital or binder moving folder for contracts, leases, and receipts',
    completed: false
  },
  {
    id: 'chk-3',
    timeframe: '8-weeks',
    category: 'packing',
    task: 'Begin room-by-room decluttering: separate items to donate, sell, or discard',
    completed: false
  },
  {
    id: 'chk-4',
    timeframe: '8-weeks',
    category: 'paperwork',
    task: 'Notify landlord or property management of official move-out date',
    completed: false
  },

  // 4 Weeks
  {
    id: 'chk-5',
    timeframe: '4-weeks',
    category: 'logistics',
    task: 'Reserve freight elevator time slots at both origin and destination buildings',
    completed: false
  },
  {
    id: 'chk-6',
    timeframe: '4-weeks',
    category: 'packing',
    task: 'Order moving boxes, bubble wrap, packing tape, and permanent markers',
    completed: false
  },
  {
    id: 'chk-7',
    timeframe: '4-weeks',
    category: 'packing',
    task: 'Begin packing non-essential items (books, out-of-season clothes, guest room bedding)',
    completed: false
  },
  {
    id: 'chk-8',
    timeframe: '4-weeks',
    category: 'paperwork',
    task: 'Request school and medical records transfer for family members and pets',
    completed: false
  },

  // 2 Weeks
  {
    id: 'chk-9',
    timeframe: '2-weeks',
    category: 'utilities',
    task: 'Schedule utility shutoff at old address (electricity, gas, water, internet) for day after move',
    completed: false
  },
  {
    id: 'chk-10',
    timeframe: '2-weeks',
    category: 'utilities',
    task: 'Schedule utility activation at new home (power, heating/cooling, high-speed Wi-Fi)',
    completed: false
  },
  {
    id: 'chk-11',
    timeframe: '2-weeks',
    category: 'paperwork',
    task: 'Submit official postal address forwarding and update bank/credit card addresses',
    completed: false
  },
  {
    id: 'chk-12',
    timeframe: '2-weeks',
    category: 'logistics',
    task: 'Arrange pet sitting or child care on moving day to keep them relaxed and safe',
    completed: false
  },

  // Moving Week
  {
    id: 'chk-13',
    timeframe: 'moving-week',
    category: 'packing',
    task: 'Pack high-value personal items, jewelry, passports, and essential medicine into a personal bag',
    completed: false
  },
  {
    id: 'chk-14',
    timeframe: 'moving-week',
    category: 'logistics',
    task: 'Defrost and clean the refrigerator and freezer at least 24 hours prior to moving',
    completed: false
  },
  {
    id: 'chk-15',
    timeframe: 'moving-week',
    category: 'logistics',
    task: 'Confirm parking spot or street permit for the moving truck outside both properties',
    completed: false
  },
  {
    id: 'chk-16',
    timeframe: 'moving-week',
    category: 'essentials',
    task: 'Assemble a "Day One Survival Box" (toilet paper, phone chargers, kettle, mug, fresh sheets, towels)',
    completed: false
  },

  // Moving Day
  {
    id: 'chk-17',
    timeframe: 'moving-day',
    category: 'logistics',
    task: 'Conduct initial walkthrough with the Man With A Van move supervisor to point out fragile items',
    completed: false
  },
  {
    id: 'chk-18',
    timeframe: 'moving-day',
    category: 'logistics',
    task: 'Verify that floor runners and door jamb protectors are in position before heavy furniture is moved',
    completed: false
  },
  {
    id: 'chk-19',
    timeframe: 'moving-day',
    category: 'paperwork',
    task: 'Review and sign the initial bill of lading and inventory receipt with the foreman',
    completed: false
  },
  {
    id: 'chk-20',
    timeframe: 'moving-day',
    category: 'logistics',
    task: 'Do a final walkthrough of closets, attic, basement, and cabinets to make sure nothing is left behind',
    completed: false
  },

  // Post Move
  {
    id: 'chk-21',
    timeframe: 'post-move',
    category: 'essentials',
    task: 'Inspect all furniture pieces as movers assemble them and place them in their designated rooms',
    completed: false
  },
  {
    id: 'chk-22',
    timeframe: 'post-move',
    category: 'paperwork',
    task: 'Sign off the completed delivery sheet and keep a copy for home insurance records',
    completed: false
  },
  {
    id: 'chk-23',
    timeframe: 'post-move',
    category: 'essentials',
    task: 'Locate main water shut-off valve and electrical breaker box in your new home',
    completed: false
  }
];
