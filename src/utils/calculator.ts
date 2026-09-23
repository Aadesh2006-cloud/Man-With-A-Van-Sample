import { MoveEstimateInput, MoveEstimateResult } from '../types/moving';

export function calculateMoveEstimate(input: MoveEstimateInput): MoveEstimateResult {
  // Base hourly rates & crew configurations
  let hourlyRate = 129;
  let estimatedBaseHours = 4.0;
  let recommendedCrew = '2 Professional Movers + 16ft City Van';
  let recommendedVehicle = '16ft Commercial Van';

  if (input.serviceType === 'labor-only') {
    hourlyRate = 89;
    recommendedVehicle = 'Customer-provided vehicle (Movers & equipment only)';
  } else if (input.serviceType === 'commercial-moving') {
    hourlyRate = 189;
  } else if (input.serviceType === 'interstate-moving') {
    hourlyRate = 149;
  }

  // Size factors
  switch (input.homeSize) {
    case 'studio':
      estimatedBaseHours = 3.0;
      recommendedCrew = input.serviceType === 'labor-only' 
        ? '2 Experienced Movers' 
        : '2 Professional Movers + 16ft Van';
      recommendedVehicle = '16ft Mercedes Sprinter / Box Van';
      break;
    case '1bed':
      estimatedBaseHours = 4.0;
      recommendedCrew = input.serviceType === 'labor-only' 
        ? '2 Experienced Movers' 
        : '2 Professional Movers + 16ft Box Truck';
      recommendedVehicle = '16ft Commercial Box Truck';
      break;
    case '2bed':
      estimatedBaseHours = 5.5;
      recommendedCrew = input.serviceType === 'labor-only' 
        ? '3 Experienced Movers' 
        : '3 Professional Movers + 20ft Cargo Hauler';
      recommendedVehicle = '20ft Medium Cargo Hauler';
      if (input.serviceType !== 'labor-only') hourlyRate = 159;
      break;
    case '3bed':
      estimatedBaseHours = 7.0;
      recommendedCrew = input.serviceType === 'labor-only' 
        ? '4 Experienced Movers' 
        : '4 Professional Movers + 26ft Master Truck';
      recommendedVehicle = '26ft Heavy Master Truck';
      if (input.serviceType !== 'labor-only') hourlyRate = 199;
      break;
    case '4plus':
      estimatedBaseHours = 9.0;
      recommendedCrew = input.serviceType === 'labor-only' 
        ? '4–5 Experienced Movers' 
        : '4–5 Professional Movers + 26ft Fleet';
      recommendedVehicle = '26ft Master Truck + Auxiliary Van';
      if (input.serviceType !== 'labor-only') hourlyRate = 239;
      break;
    case 'small-office':
      estimatedBaseHours = 5.0;
      recommendedCrew = '3 Commercial Specialists + 20ft Truck';
      recommendedVehicle = '20ft Commercial Freight Truck';
      hourlyRate = 179;
      break;
    case 'large-office':
      estimatedBaseHours = 9.5;
      recommendedCrew = '5 Commercial Specialists + Dual 26ft Fleet';
      recommendedVehicle = '2x 26ft Heavy Commercial Trucks';
      hourlyRate = 289;
      break;
    default:
      estimatedBaseHours = 4.0;
  }

  // Floor and elevator complexity
  let stairsExtraHours = 0;
  if (!input.originHasElevator && input.originFloor > 1) {
    stairsExtraHours += (input.originFloor - 1) * 0.4;
  }
  if (!input.destinationHasElevator && input.destinationFloor > 1) {
    stairsExtraHours += (input.destinationFloor - 1) * 0.4;
  }

  const totalEstimatedHours = Math.round((estimatedBaseHours + stairsExtraHours) * 10) / 10;
  const baseLaborAndTruck = Math.round(totalEstimatedHours * hourlyRate);

  // Mileage and travel
  let travelFee = 0;
  if (input.serviceType === 'interstate-moving') {
    // Interstate long-distance fuel and line haul calculation
    travelFee = Math.round(input.distanceMiles * 2.2 + 250);
  } else if (input.distanceMiles > 15) {
    travelFee = Math.round((input.distanceMiles - 15) * 2.5);
  }

  // Packing service fee
  let packingFee = 0;
  if (input.packingService === 'partial') {
    packingFee = 160;
  } else if (input.packingService === 'full') {
    packingFee = input.homeSize === '3bed' || input.homeSize === '4plus' ? 480 : 320;
  }

  // Storage fee
  const storageFee = input.storageWeeksNeeded > 0 ? input.storageWeeksNeeded * 45 : 0;

  // Heavy items fee
  const heavyItemsFee = input.heavyItemsCount * 65;

  // Stairs fee (transparently itemized)
  const stairsFee = Math.round(stairsExtraHours * hourlyRate);

  const subtotal = baseLaborAndTruck + travelFee + packingFee + storageFee + heavyItemsFee;

  // Range span for honest budgeting
  const lowEstimate = Math.max(180, Math.round(subtotal * 0.95 / 10) * 10);
  const highEstimate = Math.round(subtotal * 1.12 / 10) * 10;

  return {
    lowEstimate,
    highEstimate,
    estimatedHours: totalEstimatedHours,
    recommendedCrew,
    recommendedVehicle,
    breakdown: {
      baseLaborAndTruck: baseLaborAndTruck - stairsFee,
      travelFee,
      stairsFee,
      packingFee,
      storageFee,
      heavyItemsFee
    }
  };
}
