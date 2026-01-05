"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import BookCallBtn from "@/app/services/book-call-btn";
import { Bounce, Fade, Zoom } from "react-awesome-reveal";
import LocationTabs from "@/app/home/addresses";
import Link from "next/link";

export default function ServiceAreaPage() {
  const locations = [
    {
      id: "harrisburg",
      name: "Harrisburg, PA",
      address: "2017 Eg Drive, Suite 200, Harrisburg, PA 17110",
      phone: "717-745-2700",
      hours: [
        "Monday: 9:00 AM - 6:00 PM",
        "Tuesday: 9:00 AM - 6:00 PM",
        "Wednesday: 9:00 AM - 6:00 PM",
        "Thursday: 9:00 AM - 6:00 PM",
        "Friday: 9:00 AM - 6:00 PM",
        "Saturday: 9:00 AM - 3:30 PM",
        "Sunday: Closed",
      ],
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3041.388699662395!2d-76.84668282549382!3d40.33372256068962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c8c79a41f0e96d%3A0xc67e52466ec7a803!2s2017%20Eg%20Dr%20%23200%2C%20Harrisburg%2C%20PA%2017112%2C%20USA!5e0!3m2!1sen!2sin!4v1754646104764!5m2!1sen!2sin",
    },
  ];
  const [selected, setSelected] = useState(locations[0]);
  return (
    <div>
      {/* Header Section */}
      <div className="details-page-header-section ">
        <h1>Dental Care Designed for You and Your Family in Levittown, PA</h1>
      </div>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col gap-16">
        {/* Top Section: Image + Intro */}
        <div className="details-page-desc-section">
          {/* Image Section */}
          <div className="image_section">
            <div className="image_section-cover">
              <div className="main-image">
                <img
                  src="/Images/areas/Levittown.webp"
                  alt="Main Banner"
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* Text Section with Fade-in after delay */}
          <div className="desc-text-section">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
              Complete Dental Care in Levittown, PA | White Hill Dental | Focused on Your Well-Being
            </h2>
            <p>
              At White Hill Dental, we are proud to support the oral health of families across Levittown, PA (19054, 19055, 19056, 19057) with high-quality, patient-focused dental care. From routine cleanings to advanced treatments, our experienced team ensures every visit is comfortable, efficient, and tailored to your needs. Whether you’re seeking cosmetic improvements, urgent dental care, or preventive services for your children, we’re here to provide the trusted care your smile deserves - close to home.
            </p>
          </div>
        </div>

        {/* Comprehensive Dental Care Section */}
        <div className="flex flex-col gap-4 p-6 md:p-0">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
            High-Quality Dental Care Tailored to Your Needs in Levittown, PA
          </h2>
          <p>
            At White Hill Dental, we make it simple to access the dental treatments you and your family need - all under one roof. Whether you’re here for routine care or specialized solutions, our experienced team delivers comfortable, personalized dentistry that keeps your smile strong at every stage of life.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-sm md:text-lg">
            <li>
              <h3 className="text-lg font-semibold">Comprehensive Oral Exams & Digital Diagnostics</h3>
              <p>
                Early detection through advanced imaging and thorough evaluations to keep your smile healthy at every stage.{" "}
              </p>
            </li>
            <li>
              <h3 className="text-lg font-semibold">Gum Health & Periodontal Care</h3>
              <p>
                Targeted treatment to manage gum disease, reduce inflammation, and protect the foundation of your teeth.
              </p>
            </li>
            <li>
              <h3 className="text-lg font-semibold">Smile Alignment & Bite Balance</h3>
              <p>
                Clear aligner therapy and orthodontic evaluations designed to improve function, appearance, and comfort.
              </p>
            </li>
            <li>
              <h3 className="text-lg font-semibold">Replacements for Missing Teeth</h3>
              <p>
                Durable options like implant restorations and modern prosthetics that restore full chewing support and natural esthetics.
              </p>
            </li>
            <li>
              <h3 className="text-lg font-semibold">Comfort-Focused Procedures for Sensitive Patients</h3>
              <p>
                Techniques and tools designed to reduce discomfort and anxiety - making dental care easier for all ages.
              </p>
            </li>
          </ul>
        </div>

        {/* Why Choose Us Section */}
        <div className="wcu-section">
          <div className="wcu-text-section">
            <div className="wcu-title">
              <h2>Making Exceptional Dental Care Easily Accessible in Levittown, PA</h2>
            </div>
            <div className="wcu-desc">
              Here's why families across{" "}
              <Link
                href="/Images/areas/Levittown-1.webp"
                className="font-semibold hover:underline"
              >
                Levittown (19054, 19055, 19056, 19057)
              </Link>
              , as well as{" "}
              <Link
                href="/service-areas/fairless-hills-pa-dentist-near-you"
                className="font-semibold hover:underline"
              >
                Fairless Hills (19030)
              </Link>
              ,{" "}
              <Link
                href="/service-areas/fallsington-pa-dentist-near-you"
                className="font-semibold hover:underline"
              >
                Fallsington (19054)
              </Link>
              ,{" "}
              <Link
                href="/service-areas/bristol-pa-dentist-near-you"
                className="font-semibold hover:underline"
              >
                Bristol (19007)
              </Link>
              , and{" "}
              <Link
                href="/service-areas/tullytown-pa-dentist-near-you"
                className="font-semibold hover:underline"
              >
                Tullytown (19007)
              </Link>
              , love choosing White Hill Dental:
            </div>
            <div className="wcu-points-section">
              <ul className="wcu-points">
                <li>
                  <CheckCircle />
                  A patient-focused approach that makes appointments smooth and relaxed
                </li>
                <li>
                  <CheckCircle />
                  Comprehensive dental services available under one roof for convenience
                </li>
                <li>
                  <CheckCircle />
                  Personalized care plans that fit your goals, comfort, and timeline
                </li>
                <li>
                  <CheckCircle />
                  Transparent treatment recommendations - no surprises or pressure
                </li>
                <li>
                  <CheckCircle />
                  A trusted local team committed to long-term relationships and healthy smiles
                </li>
              </ul>
            </div>
          </div>
          <div className="wcu-img-section">
            <img
              src="/Images/areas/Why Bayonne Families Trust Urban Dental and Braces.webp"
              alt="dental"
              className="rounded-xl block"
            />
          </div>
        </div>

        {/* Schedule Appointment Section */}
        <div className="features-section">
          <h2 className="features-heading">
            Your New Favorite Dentist in Levittown Is Just a Call Away
          </h2>
          <p className="features-description">
            Finding a dental team you truly trust makes all the difference. At White Hill Dental, we’re proud to be the go-to choice for families in Levittown who want exceptional care and a friendly, supportive experience. From routine cleanings to same-day urgent visits, we’re here to keep your smile healthy and confident - every step of the way.
          </p>

          <BookCallBtn />
        </div>
      </div>
      <LocationTabs />
    </div>
  );
}
