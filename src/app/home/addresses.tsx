"use client";

import { useState } from "react";
import BookingModal from "../booking/bookingScreen";
import { contactDetails } from "@/lib/hooks/addressDetails";

const locations = [
  {
    id: "nj",
    name: "Levittown, PA",
    address: contactDetails.address,
    phone: contactDetails.phone,
    hours: [
      "Monday: 8:00 AM - 5:30 PM",
      "Tuesday: 8:00 AM - 5:30 PM",
      "Wednesday: 8:00 AM - 5:30 PM",
      "Thursday: 8:00 AM - 5:30 PM",
      "Friday: Closed",
      "Saturday: 8:30 AM - 3:00 PM",
      "Sunday: Closed",
    ],
    mapUrl:
      contactDetails.mapUrl,
  },
];

export default function LocationTabs() {
  const [selected, setSelected] = useState(locations[0]);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 space-y-12">
      <h2 className="text-center text-primary text-3xl md:text-5xl font-extrabold mb-10">Visit White Hill Dental Levittown, PA for Your Next Dental Appointment</h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4">
        {/* Info Block */}
        <div className="flex-1 text-center relative bg-primary rounded-lg p-8 text-white shadow-lg overflow-hidden space-y-4">
          <h2 className="text-2xl font-bold">{selected.name}</h2>

          <p className="whitespace-pre-line text-white text-xs md:text-base text-center">
            {contactDetails.address}
          </p>

          <h3 className="text-md font-medium mt-4">Hours of Operation:</h3>

          <ul className="text-sm text-gray-700">
            {selected.hours.map((hour, i) => {
              const isToday = new Date().getDay() === (i + 1) % 7;
              return (
                <li
                  key={i}
                  className={`text-white ${
                    isToday
                      ? "bg-white/10 border-2 rounded-md border-white"
                      : ""
                  }`}
                >
                  {hour}
                </li>
              );
            })}
          </ul>

          <div className="mt-6 flex justify-center gap-4 flex-wrap">
            <a
              onClick={() => setIsBookingOpen(true)}
              className="border border-white bg-transparent text-white px-5 py-2 rounded-md text-sm hover:bg-secondary transition cursor-pointer"
            >
              Book Online
            </a>
            <a
              href={`tel:${selected.phone}`}
              className="bg-transparent text-white border border-white px-5 py-2 rounded-md text-sm hover:opacity-50 transition"
            >
              {selected.phone}
            </a>
          </div>
        </div>

        {/* Single Map */}
        <div className="flex-1 w-full h-[400px] rounded-xl overflow-hidden shadow">
          <iframe
            src={selected.mapUrl}
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0"
          />
        </div>
      </div>
      <BookingModal open={isBookingOpen} setOpen={setIsBookingOpen} />
    </div>
  );
}
