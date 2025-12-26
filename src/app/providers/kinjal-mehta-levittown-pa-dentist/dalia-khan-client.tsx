"use client";
import React from "react";
import Image from "next/image";
import clsx from "clsx";
import BookCallBtn from "@/app/services/book-call-btn";

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

export default function ClientPage() {
  const doctor = {
    name: "Dr. Kinjal Mehta, DDS",
    title: "Family Dentist",
    image: "/Images/Team/Kinjal Mehta.png",
    description: `Dr. Mehta is passionate about Dentistry, and loves her patients. She firmly believes that Dentistry is not just a profession but an act of service to community. She completed her Bachelors in Dental Surgery, from India in the year 2011. She worked as an Associate Dentist for two years in a private dental practice where she enjoyed treating a diverse group of patients and provided quality dental care to her patients. Inspired to learn more about how other conditions affected her patients’ oral health and their specific treatment needs, she completed her Master's in Public Health from Long Island University in the year 2016. Upon completion of her MPH, she pursued further studies in Dentistry, and obtained her DMD degree with Honors, from Boston University Henry M. Goldman School of Dental Medicine in 2020.`,
    description2:"In her leisure time, Dr. Mehta loves to paint and spend time with family and friends."
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="details-page-header-section">
        <h1>Meet {doctor.name}</h1>
        <h2>Introducing Dr. Kinjal Mehta, DDS | Helping Levittown Smiles Grow Strong & Confident</h2>
      </div>
      {/* Main Content Section */}
      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          {/* Doctor Image */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-start">
            <div className="relative w-64 h-80 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={doctor.image}
                alt={doctor.name}
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
          {/* Doctor Info */}
          <div className="flex-1 w-full">
            <h2 className="text-3xl font-semibold mb-2">{doctor.name}</h2>
            {/* <div className="text-lg text-gray-700 mb-2">{doctor.title}</div> */}
            {/* <StarRating rating={5} /> */}
            {/* <hr className="mb-6" /> */}
            <p className="leading-relaxed whitespace-pre-line text-justify">
              {doctor.description}
            </p>
            <p className="leading-relaxed whitespace-pre-line text-justify mb-2">
              {doctor.description2}
            </p>
          </div>
        </div>
        <BookCallBtn />
      </div>
    </div>
  );
}
