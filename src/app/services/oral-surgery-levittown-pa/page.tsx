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

export default function OralSurgeryPage() {
  const features = [
    {
      icon: "/Images/icons/medicine.png",
      title: "Tooth Extractions",
      description:
        "",
      points: [
        "Removes severely damaged or decayed teeth",
        "Prevents the spread of infection to nearby teeth",
        "Prepares the mouth for future restoration when needed",
        "Promotes healthy healing and comfort",
      ],
    },
    {
      icon: "/Images/icons/dental-drill.png",
      title: "Wisdom Teeth Removal",
      description:
        "",
      points: [
        "Treats impacted or partially erupted wisdom teeth",
        "Reduces swelling, pain, and jaw pressure",
        "Helps prevent crowding and misalignment",
        "Supports long-term oral health and comfort",
      ],
    },
    {
      icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
      title: "Infection & Abscess Treatment",
      description:
        "",
      points: [
        "Clears infected tissues to stop pain quickly",
        "Protects nearby teeth and bone from further damage",
        "Prevents serious complications from spreading infection",
        "Ideal for cases requiring urgent surgical attention",
      ],
    },
  ];
  return (
    <div className="flex min-h-screen bg-gray-50">
      <main className="details-page-container">
        <div className="details-page">
          <div className="details-page-header-section">
            <Fade direction="up" duration={1000}>
              <h1>Oral Surgery in Levittown, PA</h1>
            </Fade>
            <Fade direction="down" duration={1000}>
              <h2 className="text-center">
                Comfortable, Skilled Surgical Care for Your Smile | White Hill Dental
              </h2>
            </Fade>
          </div>
          <div className="details-page-desc-section">
            {/* Image Section */}
            <div className="image_section">
              <div className="image_section-cover">
                <div className="main-image">
                  <img
                    src="/Images/services/oral-surgery.webp"
                    alt="Oral Surgery at White Hill Dental in Levittown PA"
                  />
                </div>
              </div>
            </div>

            {/* Text Section with Fade-in after delay */}
            <div className="desc-text-section">
              <div className="desc-text-subtitle">Oral Surgery</div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                What You Need to Know About Oral Surgery
              </h2>
              <p>Oral surgery helps treat dental issues that can’t be resolved with routine care - including painful infections, damaged teeth, and concerns affecting your jaw or gums. At White Hill Dental, we focus on providing comfortable and efficient surgical treatment to restore your health and protect your smile. Whether it’s removing a problematic tooth or addressing infection below the gumline, our team ensures you feel supported every step of the way.
              </p>
              <p>
                We proudly care for patients looking for an oral surgeon near me in{" "}
                <Link
                  href="/service-areas/levittown-pa-dentist-near-you"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Levittown (19054, 19055, 19056, 19057)
                </Link>
                {" "}as well as those traveling from{" "}
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
                . With personalized care and advanced technology, we make oral surgery a smooth and stress-free experience while prioritizing your long-term oral health.
              </p>
            </div>
          </div>
          <div className="wcu-section">
            <div className="wcu-text-section">
              <div className="wcu-title">
                Your Best Choice for Oral Surgery in Levittown
              </div>
              <div className="wcu-points-section">
                <ul className="wcu-points">
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Skilled Dentists Experienced in Surgical Care
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Gentle Treatment Focused on Comfort & Recovery
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Same-Day Appointments for Urgent Needs
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Affordable Options with Insurance Assistance
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Convenient Levittown Location for Local Families
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
            <h2 className="features-heading">Explore Our Oral Surgery Solutions</h2>
            <p className="features-description">
              Certain dental concerns require specialized surgical procedures to restore health, function, and comfort. Our goal is to ensure the process is handled efficiently and comfortably so you can move forward with confidence.
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
            <h2 className="faq-heading">Oral Surgery FAQs</h2>
            <div className="faq-acc-container">
              <Accordion type="single" className="w-full space-y-5">
                <AccordionItem value="q1" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">Is oral surgery painful?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      You will be fully numbed during the procedure, and most discomfort afterward is manageable with recommended care.{" "}
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q2" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">Why might I need a tooth extraction?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      If a tooth is too damaged for repair - or infection has spread too deeply - removing it may be the best option.{" "}
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q3" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      When should wisdom teeth be removed?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      If they cause swelling, jaw pain, or crowding, or if X-rays show they may become impacted.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q4" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">How long does recovery take?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Most patients return to normal activities within a day or two, depending on the procedure.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q5" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Do you provide oral surgery for emergencies?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Yes - we strive to see urgent cases promptly to relieve discomfort and protect your health.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          <div className="features-section">
            <h2 className="features-heading">
              Where Can You Get Oral Surgery in Levittown?
            </h2>
            <p className="features-description">
              White Hill Dental is a top-rated practice for safe and comfortable oral surgery in Levittown. If you need care from the best oral surgeon near me, our experienced team is here to relieve pain, remove infection, and protect your oral health. Call today to schedule a visit and feel confident in your smile again!
            </p>
          </div>
          <BookCallBtn />
        </div>
      </main>
    </div>
  );
}
