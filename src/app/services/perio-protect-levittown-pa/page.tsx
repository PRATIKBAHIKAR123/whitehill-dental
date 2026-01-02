"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";
import Reveal, { Fade, Zoom } from "react-awesome-reveal";
import Link from "next/link";
import ServiceSidebar from "@/components/ServiceSidebar";
import BookCallBtn from "../book-call-btn";
import { CheckCircle } from "lucide-react";

export default function PerioProtectPage() {
  const features = [
    {
      icon: "/Images/icons/medicine.png",
      title: "Targets Gum Disease at the Source",
      description:
        "",
      points: [
        "Reduces harmful bacteria beneath the gums",
        "Helps stop bleeding, swelling, and tenderness",
        "Supports healing for healthier gum tissue",
        "Limits the risk of bone and tooth loss",
      ],
    },
    {
      icon: "/Images/icons/dental-drill.png",
      title: "Easy, Comfortable Daily Care",
      description:
        "",
      points: [
        "Only 10–15 minutes of use per day",
        "Soft, flexible trays made just for you",
        "No needles, surgery, or lengthy appointments",
        "Simple and stress-free to maintain long-term results",
      ],
    },
    {
      icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
      title: "Advanced Periodontal Support",
      description:
        "",
      points: [
        "Helps maintain improvements after deep cleanings",
        "Protects dental restorations like crowns or implants",
        "Reduces the need for frequent scaling appointments",
        "Encourages healthier gums long into the future",
      ],
    },
  ];
  return (
    <div className="flex min-h-screen bg-gray-50">
      <main className="details-page-container">
        <div className="details-page">
          <div className="details-page-header-section">
            <Fade direction="up" duration={1000}>
              <h1>Perio Protect in Levittown, PA</h1>
            </Fade>
            <Fade direction="down" duration={1000}>
              <h2 className="text-center">
                A Gentle, At-Home Solution for Better Gum Health | White Hill Dental
              </h2>
            </Fade>
          </div>
          <div className="details-page-desc-section">
            {/* Image Section */}
            <div className="image_section">
              <div className="image_section-cover">
                <div className="main-image">
                  <img
                    src="/Images/services/perio-protect.webp"
                    alt="Main Banner"
                  />
                </div>
              </div>
            </div>

            {/* Text Section with Fade-in after delay */}
            <div className="desc-text-section">
              <div className="desc-text-subtitle">Perio Protect</div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                What You Need to Know About Perio Protect
              </h2>
              <p>
                Gum disease often develops silently - starting with redness, bleeding, or bad breath before progressing into bone loss and loosened teeth. While professional cleanings are essential, harmful bacteria hide deep beneath the gums where daily brushing simply can’t reach.Perio Protect is an advanced, non-invasive therapy designed to treat periodontal disease comfortably at home. Using custom-fitted trays, safe medication is delivered below the gumline to stop bacterial growth, reduce inflammation, and help gums heal faster.
              </p>
              <p>
                Patients searching for Perio Protect near me in{" "}
                <Link
                  href="/service-areas/levittown-pa-dentist-near-you"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Levittown (19054, 19055, 19056, 19057)
                </Link>
                , along with those from{" "}
                <Link
                  href="/service-areas/fairless-hills-pa-dentist-near-you"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Fairless Hills (19030)
                </Link>
                ,{" "}
                <Link
                  href="/service-areas/fallsington-pa-dentist-near-you"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Fallsington (19054)
                </Link>
                ,{" "}
                <Link
                  href="/service-areas/bristol-pa-dentist-near-you"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Bristol (19007)
                </Link>
                , and{" "}
                <Link
                  href="/service-areas/tullytown-pa-dentist-near-you"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Tullytown (19007)
                </Link>
                , trust White Hill Dental for healthier gums and fresher smiles - without surgery. By combining Perio Protect with regular periodontal cleanings, you can enjoy improved oral comfort, better breath, and stronger overall health.
              </p>
            </div>
          </div>
          <div className="wcu-section">
            <div className="wcu-text-section">
              {/* <div className='wcu-subtitle'>
                      Top Reasons
                    </div> */}
              <div className="wcu-title">
                <h2>
                  Your Best Choice for Perio Protect in Levittown
                </h2>
              </div>
              <div className="wcu-points-section">
                <ul className="wcu-points">
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Custom-Fitted Trays Designed for Precise Gum Treatment{" "}
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Minimally Invasive Approach with No Need for Surgery
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Helps Protect the Natural Teeth You Want to Keep
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Personalized Plans for Each Stage of Gum Disease
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Convenient Care for Bucks County Families
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
            <h2 className="features-heading">Explore Our Perio Protect Treatment Solutions</h2>
            <p className="features-description">
             Healthy gums are the foundation of a confident smile - and Perio Protect supports that foundation every day with simple and effective home therapy. With consistent use, it helps reverse gum irritation, boosts freshness, and keeps your smile strong between dental visits.
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
            <h2 className="faq-heading">Perio Protect FAQs</h2>
            <div className="faq-acc-container">
              <Accordion type="single" collapsible className="w-full space-y-6">
                <AccordionItem value="q1" className="faq-acc">
                  <AccordionTrigger className="faq-qn rounded-md">
                    <h3 className="text-lg">How long do I need to use the trays?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans ">
                    Most patients begin with daily use, then transition to a maintenance routine based on progress.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q2" className="faq-acc">
                  <AccordionTrigger className="faq-qn rounded-md">
                    <h3 className="text-lg">
                      Does this replace periodontal cleanings?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p className="mt-2">
                      Not at all - Perio Protect works alongside dental cleanings to control periodontitis more effectively. 
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q3" className="faq-acc">
                  <AccordionTrigger className="faq-qn rounded-md">
                    <h3 className="text-lg">Can this help prevent tooth loss?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Yes - stronger gums and reduced infection help preserve bone and keep natural teeth stable.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q5" className="faq-acc">
                  <AccordionTrigger className="faq-qn rounded-md">
                    <h3 className="text-lg">
                      Is Perio Protect safe?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p className="mt-2">
                      Yes - the medication and trays are gentle, proven, and suitable for long-term use.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q6" className="faq-acc">
                  <AccordionTrigger className="faq-qn rounded-md">
                    <h3 className="text-lg">
                      Who is a candidate for this treatment?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p className="mt-2">
                      Anyone with early-stage to advanced gum disease may benefit - our dentist will recommend the right plan for your needs.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          <div className="features-section">
            {" "}
            <h2 className="features-heading">Where Can You Get Perio Protect in Levittown?</h2>
            <p className="features-description">
              White Hill Dental is a top-rated provider of Perio Protect near me in Levittown. If gum disease has been causing bleeding gums, bad breath, or discomfort, our non-surgical periodontal treatments can help restore gum health and protect your smile for the future. Call us today to schedule an evaluation - your gums will thank you!
            </p>
          </div>
          <BookCallBtn />
        </div>
      </main>
    </div>
  );
}
