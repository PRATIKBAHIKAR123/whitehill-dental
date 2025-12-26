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

export default function OrthodonticsPage() {
  const features = [
    {
      icon: "/Images/icons/medicine.png",
      title: " Invisalign® Clear Aligners",
      description: "",
      points: [
        "Nearly invisible - perfect for busy adults and teens",
        "Removable trays make eating and brushing easier",
        "Smooth plastic design for irritation-free wear",
        "Digital scans help map out progress step by step",
      ],
    },
    {
      icon: "/Images/icons/dental-drill.png",
      title: "Traditional Braces",
      description:
        "",
      points: [
        "Effective for more complex bite or alignment cases",
        "Designed to deliver precise, reliable results",
        "Suitable for growing smiles and adult correction",
        "Improved designs for better comfort and appearance",
      ],
    },
    {
      icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
      title: "Growth-Guided Orthodontics for Kids",
      description:
        "",
      points: [
        "Helps guide jaw development and prevent severe misalignment",
        "Early evaluation reduces the need for major treatments later",
        "Ideal for children with crowding or bite concerns",
        "Supports oral health during important development years",
      ],
    },
  ];
  return (
    <div className="flex min-h-screen bg-gray-50">
      <main className="details-page-container">
        <div className="details-page">
          <div className="details-page-header-section">
            <Fade direction="up" duration={1000}>
              <h1>Orthodontics in Levittown, PA</h1>
            </Fade>
            <Fade direction="down" duration={1000}>
              <h2 className="text-center">
                Straighter Smiles for Every Age | White Hill Dental
              </h2>
            </Fade>
            {/* <div className='flex items-center justify-center gap-2'> <Link href={'/'} className='font-medium'>Home </Link><span><ChevronRight/></span> <span className='text-white/80'>Emergency Dentistry</span></div> */}
          </div>
          <div className="details-page-desc-section">
            {/* Image Section */}
            <div className="image_section">
              <div className="image_section-cover">
                <div className="main-image">
                  <img
                    src="/Images/services/orthodontics.webp"
                    alt="Main Banner"
                  />
                </div>
              </div>
            </div>

            {/* Text Section with Fade-in after delay */}
            <div className="desc-text-section">
              <div className="desc-text-subtitle">Orthodontic</div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                What You Need to Know About Orthodontics
              </h2>
              <p>
               Orthodontic treatment helps align your teeth and bite for better appearance, function, and long-term oral health. Whether your concern is crowding, spacing, or bite issues, our orthodontic solutions can help improve confidence and support healthier teeth and gums. At White Hill Dental, we create personalized plans for children, teens, and adults who want a straighter, more balanced smile.</p>
              <p>
                We welcome patients searching for orthodontics near me or Invisalign® near me in{" "}
                <strong>Levittown (19054, 19055, 19056, 19057)</strong>, along with
                {" "}<strong>Fairless Hills (19030), Fallsington (19054), Bristol (19007)</strong>{" "}
                and <strong>Tullytown (19007)</strong>. 
                Our team makes achieving a straighter smile simple, comfortable, and tailored to your lifestyle
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
                  Your Best Choice for Orthodontics in Levittown
                </h2>
              </div>
              <div className="wcu-points-section">
                <ul className="wcu-points">
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Customized Treatments for Kids, Teens & Adults
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Clear Aligner & Braces Options for Every Smile
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Guided Support Throughout Your Smile Journey
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Affordable Plans That Work with Your Budget
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Convenient Bucks County Location for Local Families
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
            <h2 className="features-heading">Explore Our Orthodontic Solutions</h2>
            <p className="features-description">
              Everyone deserves a smile that feels confident and functions comfortably. We offer multiple orthodontic options designed to correct alignment with precision and comfort.
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
            <h2 className="faq-heading">Orthodontics FAQs</h2>
            <div className="faq-acc-container">
              <Accordion type="single" className="w-full space-y-5">
                <AccordionItem value="q1" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      When should my child have their first orthodontic check?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Age 7 is ideal for early assessment, but treatment may begin later depending on growth.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q2" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      How long does treatment take?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Most orthodontic plans range from 12–24 months based on correction needs.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q3" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Do braces or aligners hurt?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Some pressure is normal at first or after adjustments - but discomfort is mild and temporary.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q4" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">Will aligners work for every case?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Invisalign® is great for mild to moderate conditions, while braces may be better for complex alignment.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q5" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Is orthodontic care covered by insurance?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Many plans include partial coverage. We also offer flexible financing options.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          <div className="features-section">
            <h2 className="features-heading">
              Where Can You Get Orthodontic Treatment in Levittown?
            </h2>
            <p className="features-description">
              If you’re searching for the best orthodontist near me or Invisalign in Levittown, White Hill Dental is your trusted partner for a straighter, healthier smile. Schedule a consultation today and begin your journey to confident alignment!
            </p>
          </div>
          <BookCallBtn />
        </div>
      </main>
    </div>
  );
}
