export type ServiceId = 
  | 'local-moving'
  | 'residential-moves'
  | 'commercial-moving'
  | 'interstate-moving'
  | 'storage-solutions'
  | 'labor-only';

export interface ServiceDetail {
  id: ServiceId;
  title: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  startingPrice: string;
  pricingModel: string;
  idealFor: string[];
  whatsIncluded: string[];
  equipmentProvided: string[];
  processSteps: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  recommendedCrew: string;
  heroHeadline: string;
  keyMetric: { value: string; label: string };
}

export interface MoveEstimateInput {
  serviceType: ServiceId;
  homeSize: string; // 'studio' | '1bed' | '2bed' | '3bed' | '4plus' | 'small-office' | 'large-office';
  distanceMiles: number;
  originFloor: number;
  originHasElevator: boolean;
  destinationFloor: number;
  destinationHasElevator: boolean;
  packingService: 'none' | 'partial' | 'full';
  storageWeeksNeeded: number;
  heavyItemsCount: number; // pianos, safes, gym equipment
  moveDate: string;
}

export interface MoveEstimateResult {
  lowEstimate: number;
  highEstimate: number;
  estimatedHours: number;
  recommendedCrew: string;
  recommendedVehicle: string;
  breakdown: {
    baseLaborAndTruck: number;
    travelFee: number;
    stairsFee: number;
    packingFee: number;
    storageFee: number;
    heavyItemsFee: number;
  };
}

export interface ReviewItem {
  id: string;
  author: string;
  location: string;
  serviceType: string;
  rating: number;
  date: string;
  verified: boolean;
  title: string;
  comment: string;
  moveDetails: string;
}

export interface ChecklistItem {
  id: string;
  timeframe: '8-weeks' | '4-weeks' | '2-weeks' | 'moving-week' | 'moving-day' | 'post-move';
  task: string;
  category: 'logistics' | 'packing' | 'utilities' | 'paperwork' | 'essentials';
  completed: boolean;
}

export interface BookingLead {
  id: string;
  createdAt: string;
  customerName: string;
  email: string;
  phone: string;
  pickupAddress: string;
  dropoffAddress: string;
  moveDate: string;
  serviceId: ServiceId;
  homeSize: string;
  estimatedCost: string;
  status: 'Pending Review' | 'Confirmed' | 'Dispatched';
  specialNotes?: string;
}
