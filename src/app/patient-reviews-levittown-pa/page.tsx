"use client";

import Image from "next/image";
import clsx from "clsx";

const reviews = [
  {
    name: "Brianna S.",
    date: "Jul 10, 2025",
    rating: 5,
    text: "Dr. Steven Reff is phenomenal! He took extra time to show me my X-rays and explained what was happening with a tooth that had been bothering me for months. I left feeling confident and pain-free. The entire team is so friendly - I’m really glad I switched to a dentist in Levittown that truly cares.",
    image: "/Images/836.jpg",
  },
  {
    name: "Nara S.",
    date: "Apr 30, 2025",
    rating: 5,
    text: "I really appreciate how organized and clean the office is. The hygienist was super gentle during my cleaning, and everything felt very high-tech. It’s refreshing to find dental care that is both efficient and kind.",
    image: "/Images/837.jpg",
  },
  {
    name: "Reuben D.",
    date: "Mar 04, 2025",
    rating: 4,
    text: "I cracked a tooth while eating and panicked, but White Hill Dental got me in right away. Dr. Manreet Kaur was so calm and reassuring - she fixed my tooth in the same visit, and you can’t even tell anything happened. This will definitely be our go-to office for emergencies.",
    image: "/Images/836.jpg",
  },
  {
    name: "Ophelia R.",
    date: "Feb 14, 2025",
    rating: 5,
    text: "White Hill Dental is amazing! They helped me set up a payment plan that worked for my budget, and they never made me feel embarrassed about needing dental work. Everyone there makes you feel like you matter.",
    image: "/Images/837.jpg",
  },
  {
    name: "Zack V.",
    date: "Jan 19, 2025",
    rating: 5,
    text: "My daughter usually gets very anxious at the dentist, but Dr. Kinjal Mehta was incredible with her. She talked her through everything in a fun, encouraging way. They even showed her a movie while we waited! We finally found a family dentist in Levittown that my kids enjoy visiting.",
    image: "/Images/836.jpg",
  },
  {
    name: "Shiloh B.",
    date: "Dec 22, 2024",
    rating: 5,
    text: "I’ve recommended White Hill Dental to my coworkers because every visit is just so smooth. No long wait times, great communication, and they always check to make sure I’m comfortable. Exactly what a dental office should be.",
    image: "/Images/837.jpg",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center mb-2">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={clsx(
            "w-5 h-5",
            i < rating ? "text-yellow-400" : "text-gray-300"
          )}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
        </svg>
      ))}
    </div>
  );
}

export default function PatientReviewsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white pb-12">
      {/* Header Section */}
      <div className="details-page-header-section">
        <h1>Hear from Our Happy Smiles in Levittown, PA </h1>
        <h2>Loved by Patients in Levittown & Bucks County</h2>
      </div>
      <div className="max-w-7xl mt-10 mx-auto px-2 sm:px-4 md:px-8">
        <h2 className="text-center text-lg sm:text-xl font-semibold mb-8">
          Patient Reviews
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {reviews.map((review, idx) => (
            <div
              key={review.name + review.date}
              className="relative bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col items-center w-full transition-transform hover:-translate-y-2 hover:shadow-2xl border border-teal-100 h-72 sm:h-80 md:h-80 lg:h-80 xl:h-80 mx-auto"
              style={{ minWidth: 0 }}
            >
              <div className="flex-1 flex flex-col justify-between items-center p-4 sm:p-6 w-full">
                <div className="mb-3 flex justify-center w-full">
                  <StarRating rating={review.rating} />
                </div>
                <p className="text-sm sm:text-base  mb-1 leading-relaxed flex-1 flex ">
                  "{review.text}"
                </p>
                <div className="mt-auto text-xs sm:text-sm text-gray-500 text-center w-full">
                  <span className="font-semibold">{review.name}</span> |{" "}
                  {review.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
