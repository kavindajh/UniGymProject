import { useState, useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import BookingSlot from '../components/ui/BookingSlot';
import { Calendar as CalendarComponent } from '../components/ui/calendar';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Filter, Clock, X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { toast } from 'sonner';

const Calendar = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedTimeSlots, setSelectedTimeSlots] = useState<string[]>([]);
  
  const generateWeekDates = (date: Date) => {
    const dates = [];
    const startOfWeek = new Date(date);
    startOfWeek.setDate(date.getDate() - date.getDay());
    
    for (let i = 0; i < 7; i++) {
      const day = new Date(startOfWeek);
      day.setDate(startOfWeek.getDate() + i);
      dates.push(day);
    }
    
    return dates;
  };
  
  const weekDates = generateWeekDates(currentDate);
  
  const goToPreviousWeek = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() - 7);
    setCurrentDate(newDate);
  };
  
  const goToNextWeek = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + 7);
    setCurrentDate(newDate);
  };
  
  const formatMonthYear = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(date);
  };
  
  const generateTimeSlots = (date: Date) => {
    const slots = [];
    const isWeekend = date.getDay() === 0 || date.getDay() === 6;
    
    const startHour = isWeekend ? 9 : 9;
    const endHour = isWeekend ? 17 : 17;
    
    for (let hour = startHour; hour < endHour; hour += 1) {
      const slotTime = `${hour}:00 - ${hour + 1}:00`;
      const capacity = Math.floor(Math.random() * 1) + 15;
      const bookedCount = Math.floor(Math.random() * capacity);
      
      slots.push({
        time: slotTime,
        date: new Date(date),
        available: true,
        capacity,
        bookedCount,
        isBooked: selectedTimeSlots.includes(`${date.toDateString()}-${slotTime}`)
      });
    }
    
    return slots;
  };
  
  const handleSlotSelect = (date: Date, time: string) => {
    const slotId = `${date.toDateString()}-${time}`;
    
    if (selectedTimeSlots.includes(slotId)) {
      setSelectedTimeSlots(selectedTimeSlots.filter(id => id !== slotId));
    } else {
      setSelectedTimeSlots([...selectedTimeSlots, slotId]);
    }
  };
  
  const checkAuth = () => {
    if (!user) {
      navigate('/register');
    }
  };
  
  const formatWeekday = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', { weekday: 'short' }).format(date);
  };
  
  const formatDay = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', { day: 'numeric' }).format(date);
  };
  
  const isToday = (date: Date) => {
    const today = new Date();
    return date.getDate() === today.getDate() &&
           date.getMonth() === today.getMonth() &&
           date.getFullYear() === today.getFullYear();
  };
  
  useEffect(() => {
    setCurrentDate(selectedDate);
  }, [selectedDate]);
  
  return (
    <>
      <Navbar />
      
      <main className="min-h-screen pt-28 pb-16">
        <section className="py-8 px-4">
          <div className="container mx-auto">
            <div className="mb-12 max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6 animate-fade-in">Gym Schedule</h1>
              <p className="text-muted-foreground animate-fade-in animation-delay-100">
                Book your preferred time slot to ensure a spot in the gym.
                {!user && " Sign in or register to reserve your workout time."}
              </p>
              
              {!user && (
                <button 
                  onClick={() => navigate('/register')}
                  className="mt-6 px-6 py-3 bg-gymBlue-500 text-white font-medium rounded-full hover:bg-gymBlue-600 transition-colors animate-fade-in animation-delay-200"
                >
                  Sign In to Book
                </button>
              )}
            </div>
            
            <div className="glass rounded-xl p-6 md:p-8 animate-fade-in animation-delay-300">
              <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                <div className="flex items-center mb-4 md:mb-0">
                  <CalendarIcon size={20} className="text-gymBlue-500 mr-2" />
                  <h2 className="text-xl font-semibold">{formatMonthYear(selectedDate)}</h2>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-[240px] justify-start text-left font-normal"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {format(selectedDate, "PPP")}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <CalendarComponent
                        mode="single"
                        selected={selectedDate}
                        onSelect={(date) => date && setSelectedDate(date)}
                        initialFocus
                        className={cn("p-3 pointer-events-auto")}
                      />
                    </PopoverContent>
                  </Popover>
                  
                  <button
                    onClick={goToPreviousWeek}
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={goToNextWeek}
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
              
              <div className="mb-8 flex flex-wrap gap-2">
                <div className="mr-2 flex items-center">
                  <Filter size={18} className="text-muted-foreground mr-2" />
                  <span className="text-sm font-medium">Filter:</span>
                </div>
                {['all', 'morning', 'afternoon'].map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setSelectedFilter(filter)}
                    className={`
                      px-3 py-1 text-sm rounded-full transition-colors capitalize
                      ${selectedFilter === filter 
                        ? 'bg-gymBlue-500 text-white' 
                        : 'bg-gray-100 text-muted-foreground hover:bg-gray-200'}
                    `}
                  >
                    {filter}
                  </button>
                ))}
              </div>
              
              <div className="overflow-x-auto mb-8">
                <div className="flex space-x-2 min-w-max">
                  {weekDates.map((date, index) => {
                    const isSelectedDay = selectedDate.toDateString() === date.toDateString();
                    const isTodayDate = isToday(date);
                    
                    return (
                      <button
                        key={index}
                        onClick={() => setSelectedDate(date)}
                        className={`
                          flex flex-col items-center justify-center rounded-lg p-3 transition-all
                          ${isSelectedDay 
                            ? 'bg-gymBlue-500 text-white' 
                            : 'hover:bg-gray-100'}
                          ${isTodayDate && !isSelectedDay ? 'border border-gymBlue-500' : ''}
                        `}
                      >
                        <span className="text-xs opacity-80">{formatWeekday(date)}</span>
                        <span className="text-xl font-bold">{formatDay(date)}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="border-b border-gray-200 pb-2 flex items-center">
                  <Clock size={18} className="text-gymBlue-500 mr-2" />
                  <h3 className="font-medium">
                    Available Time Slots for {new Intl.DateTimeFormat('en-US', { 
                      weekday: 'long',
                      month: 'long', 
                      day: 'numeric' 
                    }).format(selectedDate)}
                  </h3>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {generateTimeSlots(selectedDate)
                    .filter(slot => {
                      if (selectedFilter === 'all') return true;
                      const hour = parseInt(slot.time.split(':')[0]);
                      if (selectedFilter === 'morning' && hour < 12) return true;
                      if (selectedFilter === 'afternoon' && hour >= 12 && hour < 17) return true;
                     
                      return false;
                    })
                    .map((slot, index) => (
                      <div key={index} onClick={checkAuth}>
                        <BookingSlot 
                          {...slot} 
                          isBooked={selectedTimeSlots.includes(`${slot.date.toDateString()}-${slot.time}`)}
                          onSelect={() => handleSlotSelect(slot.date, slot.time)}
                        />
                      </div>
                    ))}
                </div>
                
                {user && selectedTimeSlots.length > 0 && (
                  <div className="mt-8 p-6 border border-gymBlue-200 bg-gymBlue-50 rounded-lg">
                    <h3 className="font-medium mb-4">Your Selected Bookings:</h3>
                    <ul className="space-y-2">
                      {selectedTimeSlots.map(slotId => {
                        const [dateStr, timeStr] = slotId.split('-');
                        const date = new Date(dateStr);
                        return (
                          <li key={slotId} className="flex justify-between items-center">
                            <span>
                              {new Intl.DateTimeFormat('en-US', { 
                                weekday: 'short',
                                month: 'short', 
                                day: 'numeric' 
                              }).format(date)} at {timeStr}
                            </span>
                            <button 
                              onClick={() => setSelectedTimeSlots(
                                selectedTimeSlots.filter(id => id !== slotId)
                              )}
                              className="text-red-500 hover:text-red-700"
                            >
                              <X size={16} />
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                    <Button 
                      className="mt-4 w-full"
                      onClick={() => {
                        toast.success("Bookings confirmed!");
                        setSelectedTimeSlots([]);
                      }}
                    >
                      Confirm Bookings
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
export default Calendar;
