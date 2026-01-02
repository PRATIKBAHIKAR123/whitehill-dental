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
        <h1>Dental Care Designed for You and Your Family in Fairless Hills, PA</h1>
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
                  src="/Images/areas/Modern Dental Care in Greenville.webp"
                  alt="Main Banner"
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* Text Section with Fade-in after delay */}
          <div className="desc-text-section">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
              Supporting Strong Smiles Across Fairless Hills, PA | White Hill Dental | Dentistry You Can Count On
            </h2>
            <p>
              Families in Fairless Hills, PA (19030) deserve dental care that feels convenient, personalized, and built around comfort. That’s why White Hill Dental welcomes patients of all ages for preventive visits, cosmetic upgrades, and restorative care that helps maintain strong smiles for years to come. Whether it’s a routine cleaning, improving your smile’s appearance, or addressing sudden dental concerns, our friendly team ensures every visit is smooth, stress-free, and tailored to your needs right here close to home.
            </p>
          </div>
        </div>

        {/* Comprehensive Dental Care Section */}
        <div className="flex flex-col gap-4 p-6 md:p-0">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
            High-Quality Dental Care Tailored to Your Needs in Fairless Hills, PA
          </h2>
          <p>
            White Hill Dental makes it easy for Fairless Hills families to receive the complete dental care they need - all in one trusted location. Our experienced team focuses on prevention, comfort, and long-term oral health, ensuring every treatment is as effective as it is patient-friendly.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-sm md:text-lg">
            <li>
              <h3 className="text-lg font-semibold">Advanced Preventive Dentistry</h3>
              <p>
                Professional care that helps stop issues early, including gum health monitoring and risk-based preventive plans.
              </p>
            </li>
            <li>
              <h3 className="text-lg font-semibold">Tooth Preservation & Strengthening</h3>
              <p>
                Treatments like bonding, onlays, and endodontic therapy to protect natural teeth whenever possible.
              </p>
            </li>
            <li>
              <h3 className="text-lg font-semibold">Full-Mouth Rehabilitation</h3>
              <p>
                Comprehensive solutions combining restorative and alignment treatments to rebuild comfort and confidence.
              </p>
            </li>
            <li>
              <h3 className="text-lg font-semibold">Jaw & Bite Comfort Care</h3>
              <p>
                Support for TMJ discomfort, clenching habits, and bite misalignment to reduce headaches and tooth wear.{" "}
              </p>
            </li>
            <li>
              <h3 className="text-lg font-semibold">Same-Day Fixes When Life Happens</h3>
              <p>
                Fast solutions for cracked, loose, or painful teeth - helping you get back to normal quickly.
              </p>
            </li>
          </ul>
        </div>

        {/* Why Choose Us Section */}
        <div className="wcu-section">
          <div className="wcu-text-section">
            <div className="wcu-title">
              <h2>Making Exceptional Dental Care Easily Accessible in Fairless Hills, PA</h2>
            </div>
            <div className="wcu-desc">
              Families throughout{" "}
              <Link
                href="/service-areas/fairless-hills-pa-dentist-near-you"
                className="font-semibold hover:underline"
              >
                Fairless Hills (19030)
              </Link>
              ,{" "}
              <Link
                href="/service-areas/levittown-pa-dentist-near-you"
                className="font-semibold hover:underline"
              >
                Levittown (19054, 19055, 19056, 19057)
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
              {" "}rely on White Hill Dental for care that's convenient, trustworthy, and focused on long-term smiles:
            </div>
            <div className="wcu-points-section">
              <ul className="wcu-points">
                <li>
                  <CheckCircle />
                  Compassionate care for anxious patients, helping everyone feel at ease from the moment they arrive
                </li>
                <li>
                  <CheckCircle />
                  Modern diagnostic tools that allow faster appointments and more accurate results
                </li>
                <li>
                  <CheckCircle />
                  Extended support for urgent needs - because dental problems don’t follow business hours
                </li>
                <li>
                  <CheckCircle />
                  Treatment plans built around your lifestyle, health priorities, and long-term goals
                </li>
                <li>
                  <CheckCircle />
                  A committed team focused on prevention first, reducing the need for major procedures later
                </li>
              </ul>
            </div>
          </div>
          <div className="wcu-img-section">
            <img
              src="/Images/areas/Why Greenville Families Choose Urban Dental.webp"
              alt="dental"
              className="rounded-xl block"
            />
          </div>
        </div>

        {/* Schedule Appointment Section */}
        <div className="features-section">
          <h2 className="features-heading">
            Your Neighborhood Dentist Proudly Serving Fairless Hills, PA
          </h2>
          <p className="features-description">
            Smiles in Fairless Hills deserve care that’s close, convenient, and genuinely welcoming. At White Hill Dental, we are committed to making every visit simple - from fast scheduling to treatments that suit your goals and comfort level. With modern technology and a compassionate team, we’re here to support your brightest, healthiest smile right here in your own community.
          </p>

          <BookCallBtn />
        </div>
      </div>
      <LocationTabs />
    </div>
  );
}
