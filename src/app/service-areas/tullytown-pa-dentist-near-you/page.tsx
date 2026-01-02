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
        <h1>Dental Care Designed for You and Your Family in Tullytown, PA</h1>
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
                  src="/Images/areas/Comprehensive Dental Care in Bayonne.webp"
                  alt="Main Banner"
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* Text Section with Fade-in after delay */}
          <div className="desc-text-section">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
              Supporting Stronger Teeth & Gums in Tullytown, PA | White Hill Dental | Modern Care for Every Family
            </h2>
            <p>
             Strong oral health supports confidence, comfort, and better everyday living - and that’s what we’re committed to providing for Tullytown, PA (19007) families. At White Hill Dental, every visit is designed around advanced care, friendly communication, and treatment options that fit your unique needs. Whether it’s preventing future concerns, restoring natural strength, or enhancing a smile’s appearance, we make quality dental care convenient and reassuring for patients of all ages right here near home.
            </p>
          </div>
        </div>

        {/* Comprehensive Dental Care Section */}
        <div className="flex flex-col gap-4 p-6 md:p-0">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
            High-Quality Dental Care Tailored to Your Needs in Tullytown, PA
          </h2>
          <p>
            Every smile needs something different - and we make sure Tullytown patients receive care designed specifically for their comfort, goals, and long-term oral health. Our wide range of services helps your family stay healthy and confident with solutions that fit every stage of life.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-sm md:text-lg">
            <li>
              <h3 className="text-lg font-semibold">Preventive Checkups with Personalized Guidance</h3>
              <p>
                Routine cleanings, oral health education, and helpful tips to protect your smile between visits.{" "}
              </p>
            </li>
            <li>
              <h3 className="text-lg font-semibold">Refreshing Cosmetic Touch-Ups</h3>
              <p>
                Whitening, veneers, and smile enhancements that brighten your appearance with subtle or dramatic improvements.
              </p>
            </li>
            <li>
              <h3 className="text-lg font-semibold">Emergency Dental Support When It Matters</h3>
              <p>
                Prompt attention for unexpected tooth pain, accidents, or urgent issues - so relief isn’t delayed.
              </p>
            </li>
            <li>
              <h3 className="text-lg font-semibold">Tooth Strengthening & Stability Treatments</h3>
              <p>
                Support for damaged or weakened teeth with conservative restorative solutions that protect your natural smile.
              </p>
            </li>
            <li>
              <h3 className="text-lg font-semibold">Caring Pediatric Visits</h3>
              <p>
                Gentle dental care that keeps kids relaxed, informed, and excited about maintaining healthy habits.
              </p>
            </li>
          </ul>
        </div>

        {/* Why Choose Us Section */}
        <div className="wcu-section">
          <div className="wcu-text-section">
            <div className="wcu-title">
              <h2>Making Exceptional Dental Care Easily Accessible in Tullytown, PA</h2>
            </div>
            <div className="wcu-desc">
               Serving{" "}
              <Link
                href="/service-areas/tullytown-pa-dentist-near-you"
                className="font-semibold hover:underline"
              >
                Tullytown (19007)
              </Link>
              {" "}- along with neighboring{" "}
              <Link
                href="/service-areas/levittown-pa-dentist-near-you"
                className="font-semibold hover:underline"
              >
                Levittown (19054, 19055, 19056, 19057)
              </Link>
              ,{" "}
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
              , and{" "}
              <Link
                href="/service-areas/bristol-pa-dentist-near-you"
                className="font-semibold hover:underline"
              >
                Bristol (19007)
              </Link>
              {" "}- White Hill Dental offers high-quality care that feels close, convenient, and centered on your needs:
            </div>
            <div className="wcu-points-section">
              <ul className="wcu-points">
                <li>
                  <CheckCircle />
                  Friendly guidance to help you choose treatments that best support your goals
                </li>
                <li>
                  <CheckCircle />
                  Flexible scheduling options designed for busy families and working professionals
                </li>
                <li>
                  <CheckCircle />
                  A clean, modern environment equipped for comfort at every appointment
                </li>
                <li>
                  <CheckCircle />
                  Transparent communication that ensures you always feel informed and confident
                </li>
                <li>
                  <CheckCircle />
                  A trusted team committed to building lifelong patient relationships
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
            Your Family’s Dental Comfort in Tullytown Is Our Top Priority
          </h2>
          <p className="features-description">
            When your dental care feels personal, every visit becomes easier. At White Hill Dental, we’re proud to be a team you can rely on - for preventive checkups, confident cosmetic upgrades, and urgent treatment when life doesn’t go as planned. We’re here to support you with comfort, clarity, and care… always close by.
          </p>

          <BookCallBtn />
        </div>
      </div>
      <LocationTabs />
    </div>
  );
}
