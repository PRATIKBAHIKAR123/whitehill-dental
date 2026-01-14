"use client";

import { contactDetails } from '@/lib/hooks/addressDetails';
import Image from 'next/image'

export default function ContactInfo() {
  const hours = [
    "Monday: 8:00 AM - 5:30 PM",
    "Tuesday: 8:00 AM - 5:30 PM",
    "Wednesday: 8:00 AM - 5:30 PM",
    "Thursday: 8:00 AM - 5:30 PM",
    "Friday: Closed",
    "Saturday: 8:30 AM - 3:00 PM",
    "Sunday: Closed",
  ];

  // Helper function to parse time string (e.g., "9:00 AM") to 24-hour format
  const parseTime = (timeStr: string): number => {
    const [time, period] = timeStr.trim().split(' ');
    const [hours, minutes] = time.split(':').map(Number);
    let hour24 = hours;
    if (period === 'PM' && hours !== 12) hour24 += 12;
    if (period === 'AM' && hours === 12) hour24 = 0;
    return hour24 * 60 + minutes; // Return minutes since midnight
  };

  // Get current status based on client-side time
  const getStatus = () => {
    const now = new Date();
    const currentDay = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    const currentMinutes = now.getHours() * 60 + now.getMinutes();

    // Convert JavaScript day (0=Sunday) to our array index (0=Monday)
    // Sunday (0) -> index 6, Monday (1) -> index 0, etc.
    const dayIndex = currentDay === 0 ? 6 : currentDay - 1;
    const todayHours = hours[dayIndex];
    
    if (!todayHours || todayHours.includes('Closed')) {
      return {
        isOpen: false,
        statusText: 'Closed',
        statusColor: 'bg-red-400'
      };
    }

    // Parse opening and closing times
    const timeMatch = todayHours.match(/(\d{1,2}:\d{2}\s*(?:AM|PM))\s*-\s*(\d{1,2}:\d{2}\s*(?:AM|PM))/);
    if (!timeMatch) {
      return {
        isOpen: false,
        statusText: 'Closed',
        statusColor: 'bg-red-400'
      };
    }

    const openTime = parseTime(timeMatch[1]);
    const closeTime = parseTime(timeMatch[2]);

    const isCurrentlyOpen = currentMinutes >= openTime && currentMinutes < closeTime;
    
    if (isCurrentlyOpen) {
      const closeHour = Math.floor(closeTime / 60);
      const closeMin = closeTime % 60;
      const closePeriod = closeHour >= 12 ? 'PM' : 'AM';
      const displayHour = closeHour > 12 ? closeHour - 12 : (closeHour === 0 ? 12 : closeHour);
      const displayMin = closeMin.toString().padStart(2, '0');
      
      return {
        isOpen: true,
        statusText: `Open Now - Closes at ${displayHour}:${displayMin} ${closePeriod}`,
        statusColor: 'bg-emerald-400'
      };
    } else {
      // Determine if we're before opening today or after closing
      if (currentMinutes < openTime) {
        const openHour = Math.floor(openTime / 60);
        const openMin = openTime % 60;
        const openPeriod = openHour >= 12 ? 'PM' : 'AM';
        const displayHour = openHour > 12 ? openHour - 12 : (openHour === 0 ? 12 : openHour);
        const displayMin = openMin.toString().padStart(2, '0');
        
        return {
          isOpen: false,
          statusText: `Closed - Opens at ${displayHour}:${displayMin} ${openPeriod}`,
          statusColor: 'bg-red-400'
        };
      } else {
        // Closed for today, will open tomorrow
        const tomorrowIndex = (dayIndex + 1) % 7;
        const tomorrowHours = hours[tomorrowIndex];
        if (tomorrowHours && !tomorrowHours.includes('Closed')) {
          const timeMatch = tomorrowHours.match(/(\d{1,2}:\d{2}\s*(?:AM|PM))/);
          if (timeMatch) {
            return {
              isOpen: false,
              statusText: `Closed - Opens tomorrow at ${timeMatch[1]}`,
              statusColor: 'bg-red-400'
            };
          }
        }
        return {
          isOpen: false,
          statusText: 'Closed',
          statusColor: 'bg-red-400'
        };
      }
    }
  };

  const { isOpen, statusText, statusColor } = getStatus();

  return (
    <div className="relative bg-primary rounded-lg p-8 text-white shadow-lg overflow-hidden">
      {/* Background Image */}
      {/* <div className="absolute inset-0 opacity-10">
        <img
          src="/Images/dentist4.jpg"
          alt="Dental professional"
          className="w-full h-full object-cover"
        />
      </div> */}
      
      {/* Green square decoration */}
      <div className="absolute top-4 left-4 w-4 h-4 bg-emerald-500"></div>
      
      {/* Up arrow decoration */}
      <div className="absolute top-4 right-4 text-emerald-500">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M7 14l5-5 5 5z"/>
        </svg>
      </div>
      
      {/* Content */}
      <div className="relative z-10 space-y-6">
        <div>
          <h4 className="font-bold text-lg mb-2">Address:</h4>
          <p className="text-white/90 leading-relaxed">
            {contactDetails.address}
          </p>
        </div>
        
        <div>
          <h4 className="font-bold text-lg mb-2">Phone:</h4>
          <div className="space-y-1">
            <a href={`tel:${contactDetails.phone}`} className="text-white/90 hover:text-white transition-colors">{contactDetails.phone}</a>
            {/* <p className="text-white/90">+12345 987 456</p> */}
          </div>
        </div>
        
        {/* <div>
          <h4 className="font-bold text-lg mb-2">Email:</h4>
          <div className="space-y-1">
            <p className="text-white/90"> <a href="mailto:harrisburg@mapledentalpa.com" className="underline"> harrisburg@mapledentalpa.com</a></p>
          </div>
        </div> */}

        {/* Working Hours Section */}
        <div>
          <h4 className="font-bold text-lg mb-3">Working Hours:</h4>
          <div className="space-y-2">
            {hours.map((hour, index) => {
              const [day, time] = hour.split(': ');
              const isClosed = time === 'Closed';
              // Convert JavaScript day (0=Sunday) to our array index (0=Monday)
              // Monday (index 0) should match getDay() === 1
              // Sunday (index 6) should match getDay() === 0
              const currentDay = typeof window !== 'undefined' ? new Date().getDay() : 0;
              const dayIndex = currentDay === 0 ? 6 : currentDay - 1;
              const isToday = dayIndex === index;
              
              return (
                <div 
                  key={index} 
                  className={`flex justify-between items-center py-1 px-2 rounded transition-colors ${
                    isToday ? 'bg-white/10 border-2 rounded-md border-white' : ''
                  }`}
                >
                  <span className={`text-sm font-medium ${isToday ? 'text-white' : 'text-white/90'}`}>
                    {day}:
                  </span>
                  <span className={`text-sm ${
                    isClosed 
                      ? 'text-red-300 font-medium' 
                      : isToday 
                        ? 'text-white font-medium' 
                        : 'text-white/80'
                  }`}>
                    {time}
                  </span>
                </div>
              );
            })}
          </div>
          
          {/* Current Status */}
          <div className="mt-3 pt-3 border-t border-white/20">
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 ${statusColor} rounded-full ${isOpen ? 'animate-pulse' : ''}`}></div>
              <span className="text-sm text-white font-medium">
                {statusText}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 