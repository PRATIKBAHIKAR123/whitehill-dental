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
        <h1>Dental Care Designed for You and Your Family in Fallsington, PA</h1>
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
              Caring for Families Across Fallsington, PA | White Hill Dental | Local Dentistry You Can Trust
            </h2>
            <p>
              A healthy smile should always feel within reach - especially right here in Fallsington, PA (19054). White Hill Dental proudly supports patients of all ages with care that feels comfortable, convenient, and personalized at every step. Whether you’re maintaining strong oral health, enhancing your smile’s appearance, or addressing a sudden dental concern, our team ensures each visit is smooth, stress-free, and focused on what matters most: your confidence and long-term well-being.
            </p>
          </div>
        </div>

        {/* Comprehensive Dental Care Section */}
        <div className="flex flex-col gap-4 p-6 md:p-0">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
            High-Quality Dental Care Tailored to Your Needs in Fallsington, PA
          </h2>
          <p>
            White Hill Dental is committed to providing personalized treatments in Fallsington that protect your oral health, support comfortable function, and help your smile look its best. With advanced technology and a compassionate team, every visit is designed to be efficient, stress-free, and focused on what matters most - your long-term dental wellness.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-sm md:text-lg">
            <li>
              <h3 className="text-lg font-semibold">Complete Smile Checkups & Cleanings</h3>
              <p>
                Keep your oral health on track with routine visits designed to prevent problems early and maintain a fresh, healthy smile.{" "}
              </p>
            </li>
            <li>
              <h3 className="text-lg font-semibold">Restoration & Bite Repair</h3>
              <p>
                From matching tooth-colored fillings to custom-crafted crowns, we rebuild strength and comfort with durable results.
              </p>
            </li>
            <li>
              <h3 className="text-lg font-semibold">Confident Smiles Through Cosmetic Care</h3>
              <p>
                Whitening, veneers, and other seamless enhancements that boost your esthetics while preserving your natural teeth.
              </p>
            </li>
            <li>
              <h3 className="text-lg font-semibold">Solutions for Missing Teeth</h3>
              <p>
                Implant restorations, bridges, and prosthetic options that restore chewing power and complete your smile beautifully.
              </p>
            </li>
            <li>
              <h3 className="text-lg font-semibold">Stress-Free Care for Urgent Dental Needs</h3>
              <p>
                Same-day relief for injuries, pain, or sudden issues - because dental concerns shouldn’t disrupt your day.
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
              Patients across Fallsington (19054), along with neighboring communities including Levittown (19054, 19055, 19056, 19057), Fairless Hills (19030), Bristol (19007), and Tullytown (19007), choose White Hill Dental because we make quality care simple, stress-free, and centered around what matters most to you:
            </div>
            <div className="wcu-points-section">
              <ul className="wcu-points">
                <li>
                  <CheckCircle />
                  Convenient access to a trusted dental team just minutes from home and work
                </li>
                <li>
                  <CheckCircle />
                  A welcoming environment where questions are encouraged and explanations are clear
                </li>
                <li>
                  <CheckCircle />
                  Treatment plans tailored to your comfort level, timeline, and long-term goals
                </li>
                <li>
                  <CheckCircle />
                  A broad range of services available in one office, reducing the need for outside referrals
                </li>
                <li>
                  <CheckCircle />
                  A caring team committed to building lasting relationships and supporting healthy smiles over time
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
            Your Smile Deserves the Best in Fallsington, PA
          </h2>
          <p className="features-description">
            A healthier smile starts with the right dental team by your side. At White Hill Dental, we’re here to make every visit feel comfortable, friendly, and tailored to what you need most. From routine hygiene to urgent care, our compassionate professionals are ready to support your smile at every stage of life - right here in Fallsington.
          </p>

          <BookCallBtn />
        </div>
      </div>
      <LocationTabs />
    </div>
  );
}
