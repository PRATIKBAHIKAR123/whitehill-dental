"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";
import Reveal, { Fade, Zoom } from "react-awesome-reveal";
import ServiceSidebar from "@/components/ServiceSidebar";
import BookCallBtn from "../book-call-btn";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

export default function CrownsPage() {
  const features = [
    {
      icon: "/Images/icons/medicine.png",
      title: "Dental Crowns for Protection & Strength",
      description:
        '',
      points: [
        "Ideal for teeth weakened by decay, cracks, or wear",
        "Restores proper bite function and natural appearance",
        "Crafted to match the shape and shade of neighboring teeth",
        "Can be used to complete dental implant restorations",
      ],
    },
    {
      icon: "/Images/icons/dental-drill.png",
      title: "Fixed Dental Bridges for Missing Teeth",
      description:
        "",
      points: [
        "Closes gaps to prevent shifting teeth and bite problems",
        "Provides a stable, attractive replacement option",
        "Secured using crowns or dental implants for long-term support",
        "Helps maintain your oral health and confidence",
      ],
    },
    {
      icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
      title: "High-Quality Materials You Can Trust",
      description:
        "",
      points: [
        "Porcelain and ceramic options for a seamless look",
        "Metal-based choices for enhanced durability",
        "Designed using precise digital impressions",
        "Made for comfort, beauty, and long-lasting results",
      ],
    },
  ];
  return (
    <div className="flex min-h-screen bg-gray-50">
      <main className="details-page-container">
        <div className="details-page">
          <div className="details-page-header-section">
            <h1>Dental Crowns & Bridges in Levittown, PA</h1>
            <h2 className="text-center">
              Rebuild Your Smile with Comfortable, Custom Restorations | White Hill Dental
            </h2>
          </div>
          <div className="details-page-desc-section">
            {/* Image Section */}
            <div className="image_section">
              <div className="image_section-cover">
                <div className="main-image">
                  <img
                    src="/Images/services/crown-bridge.webp"
                    alt="Main Banner"
                  />
                </div>
              </div>
            </div>

            {/* Text Section with Fade-in after delay */}
            <div className="desc-text-section">
              <div className="desc-text-subtitle">Dental Crowns & Bridges</div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                What You Need to Know About Dental Crowns & Bridges
              </h2>
              <p>
                At White Hill Dental, we understand that weakened, fractured, or missing teeth can affect not just your smile but your ability to bite and speak comfortably. Dental crowns and bridges are trusted restorative solutions that rebuild durability and restore natural aesthetics. Crowns cover and strengthen damaged teeth, while bridges fill missing spaces to keep your bite aligned and prevent shifting - helping you maintain everyday function with confidence.
              </p>
              <p>
                For patients searching for dental crowns near me or dental bridges near me in Levittown (19054, 19055, 19056, 19057) and surrounding communities such as Fairless Hills (19030), Fallsington (19054), Bristol (19007), and Tullytown (19007) - White Hill Dental delivers precise, custom restorations designed for long-lasting comfort and seamless results.
              </p>
            </div>
          </div>
          <div className="wcu-section">
            <div className="wcu-text-section">
              <div className="wcu-title">
                <h2>
                  Your Best Choice for Crowns & Bridges in Levittown
                </h2>
              </div>
              <div className="wcu-points-section">
                <ul className="wcu-points">
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Custom Designs That Look & Feel Natural
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Restorations Built for Everyday Strength
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Gentle Treatment From a Caring Dental Team
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Affordable Options to Fit Your Budget
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Conveniently Located for Local Families
                    </h3>
                  </li>
                </ul>
              </div>
            </div>
            <div className="wcu-img-section">
              <img
                className="bdr-doctor-img"
                src="/Images/banners/about-us-1.webp"
                alt="dental"
              />
            </div>
          </div>
          <div className="features-section">
            <h2 className="features-heading">Explore Our Crown & Bridge Solutions</h2>
            <p className="features-description">
              Each patient’s needs are unique - which is why we offer a range of restorative options focused on comfort, function, and aesthetics. Our goal is to rebuild your smile in a way that feels natural, supports everyday strength, and enhances long-term oral wellness.
            </p>

            <div className="features-grid">
              {features.map((service, idx) => (
                <div className="feature-card" key={idx}>
                  <div className="flex flex-col items-start mb-3">
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="w-12 h-12 mb-2"
                    />
                    <h3>{service.title}</h3>
                  </div>
                  <p>{service.description}</p>
                  <ul className="feature-list">
                    {service.points.map((point, i) => (
                      <li key={i} className="feature-list-item">
                        <CheckCircle /> {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="faq-section">
            <h2 className="faq-heading">Crowns & Bridges FAQs</h2>
            <div className="faq-acc-container">
              <Accordion type="single" className="w-full space-y-5">
                <AccordionItem value="q1" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      How long do crowns and bridges last?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      With excellent hygiene and routine checkups, many last 10–15 years or longer.{" "}
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q2" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Will my crown or bridge look noticeable?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Not at all - each restoration is custom-designed to blend naturally with your smile.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q3" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      How many visits will I need?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Most treatments require two appointments - one for preparation and one for placement.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q4" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Do crowns and bridges improve function?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Yes - they restore comfortable chewing, speaking, and bite alignment.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q5" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      How do I take care of my restorations?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Brush, floss daily, and maintain regular dental visits to ensure lasting success.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          <div className="features-section">
            <h2 className="features-heading">
              Where Can You Get Crowns & Bridges in Levittown?
            </h2>
            <p className="features-description">
              White Hill Dental is a top-rated choice for dental crowns and bridges near me in Levittown. If you want durable restorations that look natural, feel comfortable, and support everyday function, our expert team is ready to help. Contact us today and restore your smile with confidence!
            </p>
          </div>
          <BookCallBtn />
        </div>
      </main>
    </div>
  );
}
