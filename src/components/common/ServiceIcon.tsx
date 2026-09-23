import React from 'react';
import { MapPin, Home, Building2, Compass, Archive, Users, Truck, Package, Shield, Award, Clock } from 'lucide-react';

interface ServiceIconProps {
  name: string;
  className?: string;
}

export const ServiceIcon: React.FC<ServiceIconProps> = ({ name, className = 'w-6 h-6' }) => {
  switch (name) {
    case 'MapPin':
      return <MapPin className={className} />;
    case 'Home':
      return <Home className={className} />;
    case 'Building2':
      return <Building2 className={className} />;
    case 'Compass':
      return <Compass className={className} />;
    case 'Archive':
      return <Archive className={className} />;
    case 'Users':
      return <Users className={className} />;
    case 'Truck':
      return <Truck className={className} />;
    case 'Package':
      return <Package className={className} />;
    case 'Shield':
      return <Shield className={className} />;
    case 'Award':
      return <Award className={className} />;
    case 'Clock':
      return <Clock className={className} />;
    default:
      return <Truck className={className} />;
  }
};
