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

export default function DentalFillingPage() {
  const features = [
    {
      icon: "/Images/icons/medicine.png",
      title: "Tooth-Colored Composite Fillings",
      description:
        "",
      points: [
        "Blends perfectly with natural enamel",
        "Durable and long-lasting for everyday chewing",
        "Mercury-free and safe for all ages",
        "Improves appearance while protecting function",
      ],
    },
    {
      icon: "/Images/icons/dental-drill.png",
      title: "Repair of Minor Chips & Fractures",
      description:
        "",
      points: [
        "Restores shape and smoothness after small damage",
        "Fast treatment with instant cosmetic improvement",
        "Helps protect the tooth from further wear",
        "Great for front teeth or visible areas",
      ],
    },
    {
      icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
      title: "Replacement of Old or Metal Fillings",
      description:
        "",
      points: [
        "Upgrades outdated or failing restorations",
        "Eliminates dark metal spots for a cleaner smile",
        "Better sealing to defend against future decay",
        "Enhances comfort and bite alignment",
      ],
    },
  ];
  return (
    <div className="flex min-h-screen bg-gray-50">
      <main className="details-page-container">
        <div className="details-page">
          <div className="details-page-header-section">
            <Fade direction="up" duration={1000}>
              <h1>Dental Fillings in Levittown, PA</h1>
            </Fade>
            <Fade direction="down" duration={1000}>
              <h2 className="text-center">
                Restore and Protect Your Teeth with Gentle, Modern Care | White Hill Dental  
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
                    src="/Images/services/dental-fillings.webp"
                    alt="Dental Fillings at White Hill Dental in Levittown PA"
                  />
                </div>
              </div>
            </div>

            {/* Text Section with Fade-in after delay */}
            <div className="desc-text-section">
              <div className="desc-text-subtitle">Dental Fillings</div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                What You Need to Know About Dental Fillings
              </h2>
              <p>
                Dental fillings are used to treat cavities and stop tooth decay before it spreads. By removing the damaged portion of the tooth and restoring it with durable, tooth-colored material, fillings help protect your oral health while maintaining a natural appearance. At White Hill Dental, we use advanced composites that blend seamlessly with the enamel - so no one can tell you’ve had dental work done.
              </p>
              <p>
                We care for patients searching for dental fillings near me throughout{" "}
                <Link
                  href="/service-areas/levittown-pa-dentist-near-you"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Levittown (19054, 19055, 19056, 19057)
                </Link>
                ,{" "}as well as{" "}
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
                {" "}and{" "}
                <Link
                  href="/service-areas/tullytown-pa-dentist-near-you"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Tullytown (19007)
                </Link>
                . Whether you are experiencing sensitivity or you've been told you have a cavity, <Link href={'/providers'} className="font-bold text-primary">our team</Link> ensures a smooth, comfortable visit from start to finish.
                
              </p>
            </div>
          </div>
          <div className="wcu-section">
            <div className="wcu-text-section">
              <div className="wcu-title">
                <h2>
                  Your Best Choice for Dental Fillings in Levittown
                </h2>
              </div>
              <div className="wcu-points-section">
                <ul className="wcu-points">
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Advanced Composite Materials for Natural Results
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Gentle Approach for a Stress-Free Experience
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Early Detection Technology to Stop Decay Quickly
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Flexible Payment Options for Affordable Care
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Convenient Location for Bucks County Families
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
            <h2 className="features-heading">Explore Our Dental Filling Solutions</h2>
            <p className="features-description">
              Cavities can progress quickly - which is why timely treatment is essential. Our filling services are designed to restore strength and prevent future issues, all while preserving as much natural tooth structure as possible.
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
            <h2 className="faq-heading">Dental Fillings FAQs</h2>
            <div className="faq-acc-container">
              <Accordion type="single" className="w-full space-y-5">
                <AccordionItem value="q1" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      How do I know if I need a filling?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Signs may include sensitivity, food getting stuck, discoloration, or pain when chewing - but sometimes decay is only visible on X-rays.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q5" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">Are dental fillings painful?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Most treatments are quick and very comfortable with local numbing - many patients feel nothing at all.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q2" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      How long do fillings last?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Composite fillings are highly durable and can last many years with good oral hygiene.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q3" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Will a filling look natural?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Yes - our fillings match your tooth shade for a seamless result.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q4" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Can kids get dental fillings too?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Absolutely - early intervention helps prevent bigger problems later.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          <div className="features-section">
            <h2 className="features-heading">
              Where Can You Get Dental Fillings in Levittown?
            </h2>
            <p className="features-description">
              White Hill Dental is a top-rated practice offering gentle, effective cavity treatment in Levittown. If you’re looking for the best dentist near me for dental fillings, we’re here to protect your smile and help keep your teeth healthy for the future. Call today to schedule your visit!
            </p>
          </div>
          <BookCallBtn />
        </div>
      </main>
    </div>
  );
}
