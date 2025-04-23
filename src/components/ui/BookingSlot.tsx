
import { useState } from 'react';
import { Check, X } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { toast } from 'sonner';

interface BookingSlotProps {
  time: string;
  date: Date;
  capacity: number;
  bookedCount: number;
  isBooked?: boolean;
  onSelect?: () => void;
}

const BookingSlot: React.FC<BookingSlotProps> = ({
  time,
  date,
  capacity,
  bookedCount,
  isBooked = false,
  onSelect
}) => {
  const { user } = useAuth();
  const [selected, setSelected] = useState(isBooked);
  const [hover, setHover] = useState(false);
  
  const availableSpots = capacity - bookedCount;
  const isFull = availableSpots <= 0;
  const availability = Math.round((bookedCount / capacity) * 100);
  
  const handleSelect = () => {
    if (!user) {
      toast.error("Please sign in to book a slot");
      return;
    }
    
    if (isFull && !selected) {
      toast.error("This slot is fully booked");
      return;
    }
    
    setSelected(!selected);
    if (onSelect) onSelect();
    
    if (!selected) {
      toast.success(`Slot booked for ${time} on ${date.toLocaleDateString()}`);
    } else {
      toast.info("Booking canceled");
    }
  };
  
  return (
    <div 
      className={`
        flex flex-col p-4 rounded-md transition-all duration-300 cursor-pointer
        ${selected 
          ? 'bg-gymBlue-100 border-2 border-gymBlue-500' 
          : hover 
            ? 'bg-gray-100' 
            : 'bg-white border border-gray-200'
        }
        ${isFull && !selected ? 'opacity-60' : ''}
      `}
      onClick={handleSelect}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium">{time}</span>
        {selected ? (
          <span className="flex items-center text-green-600 text-sm">
            <Check size={16} className="mr-1" />
            Booked
          </span>
        ) : isFull ? (
          <span className="flex items-center text-red-500 text-sm">
            <X size={16} className="mr-1" />
            Full
          </span>
        ) : (
          <span className="text-sm text-green-600">{availableSpots} spots left</span>
        )}
      </div>
      
      <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
        <div 
          className={`h-2 rounded-full ${
            availability > 80 
              ? 'bg-red-500' 
              : availability > 50 
                ? 'bg-yellow-500' 
                : 'bg-green-500'
          }`}
          style={{ width: `${availability}%` }}
        />
      </div>
      
      <div className="text-xs text-muted-foreground mt-1">
        {bookedCount}/{capacity} booked
      </div>
    </div>
  );
};

export default BookingSlot;
