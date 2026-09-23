import React, { createContext, useContext, useState, useEffect } from 'react';
import { BookingLead, ChecklistItem } from '../types/moving';
import { INITIAL_CHECKLIST } from '../data/checklistData';

interface BookingContextType {
  bookings: BookingLead[];
  createBooking: (lead: Omit<BookingLead, 'id' | 'createdAt' | 'status'>) => BookingLead;
  getBookingById: (id: string) => BookingLead | undefined;
  checklist: ChecklistItem[];
  toggleChecklistItem: (id: string) => void;
  resetChecklist: () => void;
  completedChecklistCount: number;
}

const SAMPLE_BOOKINGS: BookingLead[] = [
  {
    id: 'VAN-92418',
    createdAt: '2026-09-21T14:30:00Z',
    customerName: 'Claire Vance',
    email: 'claire.vance@example.com',
    phone: '(555) 392-8192',
    pickupAddress: '420 King Street West, Apt 812',
    dropoffAddress: '88 High Park Boulevard',
    moveDate: '2026-10-04',
    serviceId: 'residential-moves',
    homeSize: '2-Bedroom Apartment',
    estimatedCost: '$680 – $790',
    status: 'Confirmed',
    specialNotes: 'Freight elevator booked for 10am to 1pm. 1 upright piano and 1 glass dining table.'
  },
  {
    id: 'VAN-81734',
    createdAt: '2026-09-22T09:15:00Z',
    customerName: 'Nathan Sterling',
    email: 'nathan@techpeaklabs.io',
    phone: '(555) 728-4011',
    pickupAddress: '150 University Ave, Suite 400',
    dropoffAddress: '300 Queen St W, Floor 3',
    moveDate: '2026-10-12',
    serviceId: 'commercial-moving',
    homeSize: 'Office (24 Workstations)',
    estimatedCost: '$2,150 – $2,480',
    status: 'Dispatched',
    specialNotes: 'Weekend move required. Commercial masonite floor protection for building lobby.'
  }
];

const BookingContext = createContext<BookingContextType | null>(null);

export const BookingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [bookings, setBookings] = useState<BookingLead[]>(() => {
    try {
      const stored = localStorage.getItem('mv_bookings');
      if (stored) {
        return JSON.parse(stored);
      }
    } catch {
      // Fallback
    }
    return SAMPLE_BOOKINGS;
  });

  const [checklist, setChecklist] = useState<ChecklistItem[]>(() => {
    try {
      const stored = localStorage.getItem('mv_checklist');
      if (stored) {
        return JSON.parse(stored);
      }
    } catch {
      // Fallback
    }
    return INITIAL_CHECKLIST;
  });

  useEffect(() => {
    try {
      localStorage.setItem('mv_bookings', JSON.stringify(bookings));
    } catch {
      // Ignore storage errors
    }
  }, [bookings]);

  useEffect(() => {
    try {
      localStorage.setItem('mv_checklist', JSON.stringify(checklist));
    } catch {
      // Ignore storage errors
    }
  }, [checklist]);

  const createBooking = (data: Omit<BookingLead, 'id' | 'createdAt' | 'status'>): BookingLead => {
    const randomDigits = Math.floor(10000 + Math.random() * 90000);
    const newBooking: BookingLead = {
      ...data,
      id: `VAN-${randomDigits}`,
      createdAt: new Date().toISOString(),
      status: 'Pending Review'
    };

    setBookings(prev => [newBooking, ...prev]);
    return newBooking;
  };

  const getBookingById = (id: string): BookingLead | undefined => {
    const clean = id.trim().toUpperCase().replace('#', '');
    return bookings.find(b => b.id.toUpperCase() === clean);
  };

  const toggleChecklistItem = (id: string) => {
    setChecklist(prev => 
      prev.map(item => item.id === id ? { ...item, completed: !item.completed } : item)
    );
  };

  const resetChecklist = () => {
    setChecklist(INITIAL_CHECKLIST);
  };

  const completedChecklistCount = checklist.filter(c => c.completed).length;

  return (
    <BookingContext.Provider value={{
      bookings,
      createBooking,
      getBookingById,
      checklist,
      toggleChecklistItem,
      resetChecklist,
      completedChecklistCount
    }}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};
