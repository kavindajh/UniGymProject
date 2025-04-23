
import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Calendar, Clock } from 'lucide-react';

interface CalendarSlotProps {
  time: string;
  date: Date;
  available: boolean;
  capacity: number;
  bookedCount: number;
}

const CalendarSlot: React.FC<CalendarSlotProps> = ({
  time,
  date,
  available,
  capacity,
  bookedCount,
}) => {
  const { user } = useAuth();
  const [isBooking, setIsBooking] = useState(false);
  const [isBooked, setIsBooked] = useState(false);
  
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  }).format(date);
  
  const handleBooking = () => {
    if (!user) {
      // Redirect to login or show login prompt
      alert('Please log in to book a slot');
      return;
    }
    
    setIsBooking(true);
    
    // Simulate booking process
    setTimeout(() => {
      setIsBooking(false);
      setIsBooked(true);
    }, 1000);
  };
  
  const spotsLeft = capacity - bookedCount;
  const isFull = spotsLeft === 0;
  const isAlmostFull = spotsLeft <= 3;
  
  return (
    <div 
      className={`
        glass rounded-xl p-4 transition duration-300
        ${!available || isFull ? 'opacity-60 cursor-not-allowed' : 'card-hover cursor-pointer'}
        ${isBooked ? 'ring-2 ring-gymBlue-500 shadow-md' : ''}
      `}
    >
      <div className="flex justify-between items-start mb-3">
        <div>
          <div className="flex items-center text-sm text-muted-foreground mb-1">
            <Calendar size={14} className="mr-1" />
            <span>{formattedDate}</span>
          </div>
          <div className="flex items-center text-sm font-medium">
            <Clock size={14} className="mr-1 text-gymBlue-500" />
            <span>{time}</span>
          </div>
        </div>
        
        <div className={`
          text-xs font-medium px-2 py-1 rounded-full
          ${isFull ? 'bg-gray-200 text-gray-600' : 
            isAlmostFull ? 'bg-amber-100 text-amber-700' : 
            'bg-green-100 text-green-700'}
        `}>
          {isFull ? 'Full' : `${spotsLeft} spots left`}
        </div>
      </div>
      
      <div className="w-full bg-gray-200 rounded-full h-1.5 mb-3">
        <div 
          className={`h-1.5 rounded-full ${isFull ? 'bg-gray-500' : 'bg-gymBlue-500'}`}
          style={{ width: `${(bookedCount / capacity) * 100}%` }}
        ></div>
      </div>
      
      <button
        disabled={!available || isFull || isBooked || isBooking}
        onClick={handleBooking}
        className={`
          w-full py-2 rounded-lg text-sm font-medium transition duration-300
          ${isBooked ? 'bg-green-500 text-white' : 
            !available || isFull ? 'bg-gray-200 text-gray-400' : 
            'bg-gymBlue-500 text-white hover:bg-gymBlue-600 active:scale-95'}
        `}
      >
        {isBooking ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Booking...
          </span>
        ) : isBooked ? (
          'Booked'
        ) : !available || isFull ? (
          'Unavailable'
        ) : (
          'Book Slot'
        )}
      </button>
    </div>
  );
};

export default CalendarSlot;
