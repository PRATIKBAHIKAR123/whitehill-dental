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
        <h1>Dental Care Designed for You and Your Family in Bristol, PA</h1>
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
              Bringing Healthier Smiles to Bristol, PA | White Hill Dental | Your Comfort Is Our Priority
            </h2>
            <p>
              Your family deserves a dental team that truly listens and delivers care with comfort in mind. That’s why White Hill Dental proudly serves patients from Bristol, PA (19007) with advanced dental treatments tailored to your lifestyle and oral health needs. From preventive checkups to restorative and cosmetic improvements, we focus on making every visit smooth, supportive, and centered around what matters most - a confident, healthy smile that lasts.
            </p>
          </div>
        </div>

        {/* Comprehensive Dental Care Section */}
        <div className="flex flex-col gap-4 p-6 md:p-0">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
            High-Quality Dental Care Tailored to Your Needs in Bristol, PA
          </h2>
          <p>
            Whether you’re keeping up with routine smile maintenance or addressing more advanced concerns, White Hill Dental offers comprehensive solutions right here near home. Our goal is to help Bristol patients enjoy healthier smiles with comfort, convenience, and individualized support.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-sm md:text-lg">
            <li>
              <h3 className="text-lg font-semibold">Strong Cavity Protection for All Ages</h3>
              <p>
                Preventive cleanings and enamel-strengthening care that help stop decay before it starts.{" "}
              </p>
            </li>
            <li>
              <h3 className="text-lg font-semibold">Tooth Repair & Reinforcement</h3>
              <p>
                Modern solutions to restore chipped or weakened teeth with strength and natural appearance.
              </p>
            </li>
            <li>
              <h3 className="text-lg font-semibold">Smile Brightening & Aesthetic Upgrades</h3>
              <p>
                Cosmetic options that refresh your look - from whitening to bonding and minor contouring.
              </p>
            </li>
            <li>
              <h3 className="text-lg font-semibold">Advanced Bone & Tissue Support</h3>
              <p>
                Specialized care to maintain healthy jawbone structure and gum stability over time.
              </p>
            </li>
            <li>
              <h3 className="text-lg font-semibold">Healthy Bite + TMJ Relief</h3>
              <p>
                Treatment plans that reduce strain, improve chewing comfort, and prevent teeth grinding damage.
              </p>
            </li>
          </ul>
        </div>

        {/* Why Choose Us Section */}
        <div className="wcu-section">
          <div className="wcu-text-section">
            <div className="wcu-title">
              <h2>Making Exceptional Dental Care Easily Accessible in Bristol, PA</h2>
            </div>
            <div className="wcu-desc">
              Bristol (19007) families - along with those from Levittown (19054, 19055, 19056, 19057), Fairless Hills (19030), Fallsington (19054), and Tullytown (19007) - choose White Hill Dental for care that’s convenient, compassionate, and focused on long-term healthy smiles:
            </div>
            <div className="wcu-points-section">
              <ul className="wcu-points">
                <li>
                  <CheckCircle />
                  We take time to understand each patient’s comfort level and dental goals
                </li>
                <li>
                  <CheckCircle />
                  Advanced diagnostics help us detect and treat concerns early
                </li>
                <li>
                  <CheckCircle />
                  Easy access to both routine and specialized services close to home
                </li>
                <li>
                  <CheckCircle />
                  We help simplify dental care with guidance, budgeting support, and clear steps
                </li>
                <li>
                  <CheckCircle />
                  A familiar team that remembers you - not just your appointment
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
            Your Go-To Dentist in Bristol - Just a Call Away
          </h2>
          <p className="features-description">
            Choosing the right dental home shouldn’t be complicated. At White Hill Dental, we make quality care convenient for Bristol families - with compassionate service, modern technology, and a team that always puts your comfort first. Whether you’re visiting for preventive care or need help fast, we’re here to support a confident, healthy smile every step of the way.
          </p>

          <BookCallBtn />
        </div>
      </div>
      <LocationTabs />
    </div>
  );
}
