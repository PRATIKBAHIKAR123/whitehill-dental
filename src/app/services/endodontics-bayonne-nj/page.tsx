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

export default function Page() {
  const features = [
    {
      icon: "/Images/icons/medicine.png",
      title: "Root Canal Therapy",
      description:
        "Root canal treatment removes infected or damaged pulp from inside your tooth, eliminating pain and preventing the need for extraction. Modern techniques make this procedure comfortable and highly successful with proper aftercare.",
      points: [
        "Digital imaging and microscopic precision for accurate treatment",
        "Advanced rotary instruments for gentle, efficient cleaning",
        "Effective local anesthesia and sedation options available",
        "Same-day or multi-visit treatment plans based on your needs",
      ],
    },
    {
      icon: "/Images/icons/dental-drill.png",
      title: "Endodontic Retreatment",
      description:
        "Sometimes a previously treated root canal may develop new problems or fail to heal properly. Retreatment can often save the tooth and resolve persistent issues without requiring extraction.",
      points: [
        "Comprehensive evaluation of previous endodontic work",
        "Removal of old filling materials and thorough re-cleaning",
        "Treatment of missed canals or new infections",
        "Advanced sealing techniques for long-term success",
      ],
    },
    {
      icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
      title: "Apicoectomy & Surgical Endodontics",
      description:
        "When nonsurgical retreatment isn't sufficient, surgical procedures like apicoectomy can address persistent infections at the root tip. These minor surgical interventions can save teeth that might otherwise need extraction.",
      points: [
        "Minimally invasive surgical techniques with faster healing",
        "Precise removal of infected tissue and root tip resection",
        "Biocompatible materials for optimal tissue regeneration",
        "Post-surgical care and monitoring for successful outcomes",
      ],
    },
  ];
  return (
    <div className="flex min-h-screen bg-gray-50">
      <main className="details-page-container">
        <div className="details-page">
          <div className="details-page-header-section">
            <Fade direction="up" duration={1000}>
              <h1>Endodontics in Bayonne, NJ</h1>
            </Fade>
            <Fade direction="down" duration={1000}>
              <h2 className="text-center">
                Advanced Endodontic Care in Bayonne | Urban Dental & Braces
              </h2>
            </Fade>
          </div>
          <div className="details-page-desc-section">
            {/* Image Section */}
            <div className="image_section">
              <div className="image_section-cover">
                <div className="main-image">
                  <img
                    src="/Images/services/patient-dentist-endodontics.webp"
                    alt="Main Banner"
                  />
                </div>
              </div>
            </div>

            {/* Text Section with Fade-in after delay */}
            <div className="desc-text-section">
              <div className="desc-text-subtitle">Endodontics </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                About Endodontics
              </h2>
              <p>
                <Link
                  href="/services/root-canal-treatment-levittown-pa"
                  className="text-primary hover:underline"
                >
                  Endodontics
                </Link>{" "}
                focuses on treating the inner structures of your teeth -
                specifically the pulp, nerves, and root canals that can become
                infected or severely damaged due to decay, trauma, or repeated
                dental procedures. At{" "}
                <Link href="/" className="text-primary hover:underline">
                  Urban Dental & Braces in Bayonne
                </Link>
                , we specialize in advanced endodontic treatments that can save
                your natural teeth and eliminate pain effectively. Our
                state-of-the-art technology and gentle techniques make
                procedures like root canal therapy comfortable and successful,
                helping you maintain your smile for years to come.
              </p>
              <p>
                We proudly serve patients from{" "}
                <Link
                  href="/service-areas/bayonne-nj-dentist-near-you"
                  className="text-primary hover:underline"
                >
                  Bayonne (07002)
                </Link>
                ,{" "}
                <Link
                  href="/service-areas/greenville-nj-dentist-near-you"
                  className="text-primary hover:underline"
                >
                  Greenville, NJ (07305)
                </Link>
                , and nearby communities. If you're searching for "root canal
                near me" or experiencing severe tooth pain, our experienced
                endodontic specialists are here to provide the expert care you
                need.
              </p>
            </div>
          </div>
          <div className="wcu-section">
            <div className="wcu-text-section">
              <div className="wcu-title">
                <h2>
                  Top Reasons to Choose Urban Dental & Braces for Endodontic
                  Care
                </h2>
              </div>
              <div className="wcu-points-section">
                <ul className="wcu-points">
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Advanced Microscopic Technology
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Pain-Free Treatment Methods
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Specialized Endodontic Expertise
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Same-Day Emergency Services
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Convenient Bayonne Location
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
            <h2 className="features-heading">Our Endodontic Services</h2>
            <p className="features-description">
              At Urban Dental & Braces, we understand that endodontic problems
              can cause significant discomfort and anxiety. That's why{" "}
              <Link href="/providers" className="text-primary hover:underline">
                our team
              </Link>{" "}
              uses the latest technology and proven techniques to provide
              precise, comfortable treatments that save your natural teeth.
              Whether you need routine root canal therapy or complex
              retreatment, we're equipped to handle all aspects of endodontic
              care with expertise and compassion.
            </p>
            <p className="features-description">
              Here's how we restore your oral health:
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
            <h2 className="faq-heading">Endodontics FAQs</h2>
            <div className="faq-acc-container">
              <Accordion type="single" className="w-full space-y-5">
                <AccordionItem value="q1" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Is root canal treatment painful?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      With modern anesthesia and advanced techniques, root canal
                      therapy is typically no more uncomfortable than having a
                      large filling. Most patients experience significant pain
                      relief immediately after treatment.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q2" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      How long does a root canal procedure take?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Most root canals can be completed in one to two
                      appointments, each lasting 60-90 minutes. Complex cases or
                      retreatments may require additional visits for optimal
                      results.{" "}
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q3" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      What happens if I don't get a root canal?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Without treatment, infected pulp can lead to severe pain,
                      abscess formation, bone loss, and eventually tooth loss.
                      The infection can also spread to surrounding tissues and
                      become life-threatening.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q4" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      How successful are root canal treatments?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Root canal therapy has a success rate of over 90% when
                      performed properly. With good oral hygiene and regular
                      dental care, treated teeth can last a lifetime.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q5" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Does insurance cover endodontic treatment?
                    </h3>{" "}
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Most dental insurance plans cover a significant portion of
                      endodontic procedures, including root canals. We accept
                      most insurance plans, including Medicaid, and offer
                      flexible payment options for your convenience.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          <div className="features-section">
            <h2 className="features-heading">
              Need Endodontic Care in Bayonne?
            </h2>
            <p className="features-description">
              At{" "}
              <Link
                href="/contact-whitehill-dental-levittown-pa"
                className="text-primary hover:underline"
              >
                Urban Dental & Braces
              </Link>
              , we're committed to saving your natural teeth through expert
              endodontic care. Whether you're experiencing severe tooth pain or
              need specialized root canal treatment, our skilled team provides
              advanced, comfortable care to restore your oral health.
            </p>
          </div>
          <BookCallBtn />
        </div>
      </main>
    </div>
  );
}
