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

export default function PainlessTreatmentPage() {
  const features = [
    {
      icon: "/Images/icons/medicine.png",
      title: "Preventive Visits Made Truly Comfortable",
      description:
        "",
      points: [
        "Soft-touch polishing designed to avoid gum irritation",
        "Gentle cleanings that prioritize comfort for sensitive smiles",
        "Simple, relaxing appointment flow to keep visits easy",
        "Prevention-focused care that reduces future dental work",
      ],
    },
    {
      icon: "/Images/icons/dental-drill.png",
      title: "Relaxed, Pressure-Free Restorative Care",
      description:
        "",
      points: [
        "Pain-controlled treatments using quiet, low-vibration instruments",
        "Careful handling to protect your jaw and surrounding tissues",
        "Thoughtful pacing with breaks whenever needed",
        "Restorations shaped to feel “right” the moment they’re placed",
      ],
    },
    {
      icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
      title: "Stress-Reducing Support for Dental Anxiety",
      description:
        "",
      points: [
        "Extra reassurance and clear communication to build trust",
        "Calming techniques to settle nerves before treatment begins",
        "Personalized comfort options for patients with gag reflex sensitivity",
        "A compassionate dental team trained to support anxious patients",
      ],
    },
  ];
  return (
    <div className="flex min-h-screen bg-gray-50">
      <main className="details-page-container">
        <div className="details-page">
          <div className="details-page-header-section">
            <h1>Painless Dental Treatments in Levittown, PA</h1>
            <h2 className="text-center">
              Gentle, Stress-Free Dentistry for Every Patient | White Hill Dental
            </h2>
          </div>
          <div className="details-page-desc-section">
            {/* Image Section */}
            <div className="image_section">
              <div className="image_section-cover">
                <div className="main-image">
                  <img
                    src="/Images/services/painless-treatment.webp"
                    alt="Main Banner"
                  />
                </div>
              </div>
            </div>

            {/* Text Section with Fade-in after delay */}
            <div className="desc-text-section">
              <div className="desc-text-subtitle">Painless Dentistry</div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                What Does Comfortable Dentistry Mean at White Hill Dental?
              </h2>
              <p>
                A positive dental experience can transform the way you care for your smile. That’s why we take a comfort-first approach - reducing anxiety, minimizing discomfort, and ensuring you feel fully supported from start to finish. Thanks to modern techniques and a compassionate team, your visit can be calm, smooth, and pain-free, even during advanced treatments.
              </p>
              <p>
                We regularly welcome patients searching for a gentle dentist near me or painless dental care near me in Levittown (19054, 19055, 19056, 19057), as well as nearby areas including Fairless Hills (19030), Fallsington (19054), Bristol (19007), and Tullytown (19007). Whether it’s been months or years since your last visit, our goal is to help you feel safe, heard, and fully supported while we look after your smile.
              </p>
            </div>
          </div>
          <div className="wcu-section">
            <div className="wcu-text-section">
              <div className="wcu-title">
                <h2>
                  Your Best Choice for Painless Dentistry in Levittown
                </h2>
              </div>
              <div className="wcu-points-section">
                <ul className="wcu-points">
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Comfort-Based Care and Communication{" "}
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Technology That Minimizes Pain and Speeds Healing
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Flexible Options for Anxiety and Sensitivity
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Personalized Treatment for Every Comfort Level
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Accessible Location Serving Bucks County Families
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
            <h2 className="features-heading">Explore Our Painless Treatment Solutions</h2>
            <p className="features-description">
              Dental care should feel manageable, not overwhelming. Our painless treatment options are designed to make every step - from cleanings to restorative care - as easy and comfortable as possible.
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
            <h2 className="faq-heading">Painless Dentistry FAQs</h2>
            <div className="faq-acc-container">
              <Accordion type="single" collapsible className="w-full space-y-6">
                <AccordionItem value="q1" className="faq-acc">
                  <AccordionTrigger className="faq-qn rounded-md">
                    <h3 className="text-lg">
                      Can dental treatment really be pain-free?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans ">
                    With today’s numbing options and gentle techniques, most patients feel little to no pain - often just mild pressure.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q2" className="faq-acc">
                  <AccordionTrigger className="faq-qn rounded-md">
                    <h3 className="text-lg">Is painless dentistry right for anxious patients?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p className="mt-2">
                      es, it’s especially helpful. Our comfort-focused approach is designed with nervous and fearful patients in mind.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q3" className="faq-acc">
                  <AccordionTrigger className="faq-qn rounded-md">
                    <h3 className="text-lg">Will I still feel the injection for numbing?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      We use techniques that minimize the sting of numbing, and many patients are surprised by how little they feel.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q5" className="faq-acc">
                  <AccordionTrigger className="faq-qn rounded-md">
                    <h3 className="text-lg">
                      Can children benefit from painless dental care?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p className="mt-2">
                      Absolutely - positive, pain-free visits help kids build trust and good lifelong habits.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q6" className="faq-acc">
                  <AccordionTrigger className="faq-qn rounded-md">
                    <h3 className="text-lg">
                      What if I haven’t seen a dentist in years because of fear?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p className="mt-2">
                      You’re not alone. We see many patients returning after long gaps and work at your pace to rebuild confidence in dental care.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          <div className="features-section">
            <h2 className="features-heading">
              Where Can You Get Painless Dental Treatments in Levittown?
            </h2>
            <p className="features-description">
              White Hill Dental is a top-rated choice for gentle, painless dentistry near me in Levittown. From routine checkups to more advanced care, our team is committed to keeping you comfortable while protecting your oral health. Schedule an appointment today and discover how relaxing a dental visit can truly feel.
            </p>
          </div>
          <BookCallBtn />
        </div>
      </main>
    </div>
  );
}
