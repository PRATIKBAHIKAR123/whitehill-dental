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

export default function DentalEmergencyPage() {
  const features = [
    {
      icon: "/Images/icons/medicine.png",
      title: "Loose or Dislodged Teeth",
      description:
        "",
      points: [
        "Stabilization to protect the remaining tooth structure",
        "Quick evaluation to determine the cause of mobility",
        "Treatment designed to save the natural tooth whenever possible",
        "Monitoring to ensure strong healing and lasting stability",
      ],
    },
    {
      icon: "/Images/icons/dental-drill.png",
      title: "Bleeding or Injuries to the Gums or Lips",
      description:
        "",
      points: [
        "Gentle care for cuts, tears, or trauma",
        "Cleaning and protective measures to prevent infection",
        "Assessment for deeper tissue or tooth involvement",
        "Healing guidance and recommended follow-up",
      ],
    },
    {
      icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
      title: "Objects Stuck Between Teeth",
      description:
        "",
      points: [
        "Safe removal without harming enamel or gums",
        "Immediate relief from pressure and discomfort",
        "Careful exam to check for gum irritation or injury",
        "Preventive advice to avoid future issues",
      ],
    },
  ];
  return (
    <div className="flex min-h-screen bg-gray-50">
      <main className="details-page-container">
        <div className="details-page">
          <div className="details-page-header-section">
            <Fade direction="up" duration={1000}>
              <h1>Dental Emergencies in Levittown, PA</h1>
            </Fade>
            <Fade direction="down" duration={1000}>
              <h2 className="text-center">
                Here for You When Dental Problems Can’t Wait | White Hill Dental
              </h2>
            </Fade>
          </div>
          <div className="details-page-desc-section">
            {/* Image Section */}
            <div className="image_section">
              <div className="image_section-cover">
                <div className="main-image">
                  <img
                    src="/Images/services/dental-emergencies.webp"
                    alt="Main Banner"
                  />
                </div>
              </div>
            </div>

            {/* Text Section with Fade-in after delay */}
            <div className="desc-text-section">
              <div className="desc-text-subtitle">Dental Emergencies</div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                What You Need to Know About Dental Emergencies
              </h2>
              <p>
                Some dental problems simply can’t wait for a routine appointment. A sharp pain that comes out of nowhere, a tooth injury during daily activities, or sudden swelling can all indicate deeper issues that must be treated quickly. Delaying care may lead to worsening infection or long-term damage - so it’s important to get help right away.
              </p>
              <p>
                White Hill Dental is a trusted source for urgent dental care for families in{" "}
                <Link
                  href="/service-areas/levittown-pa-dentist-near-you"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Levittown (19054, 19055, 19056, 19057)
                </Link>
                {" "}and nearby communities including{" "}
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
                . Whether you're dealing with discomfort or visible damage, <Link href={'/providers'} className="text-blue-600 font-semibold hover:underline">our experienced team</Link> will assess the situation promptly and provide relief as quickly as possible. We're here to protect your smile and give you peace of mind when unexpected problems arise.
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
                  Your Best Choice for Dental Emergencies in Levittown
                </h2>
              </div>
              <div className="wcu-points-section">
                <ul className="wcu-points">
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Compassionate Care with Same-Day Availability
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Advanced Technology for Fast Diagnosis
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Skilled Team Trained in Urgent Dental Treatment
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Affordable Options with Insurance & Payment Plans
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Convenient Bucks County Location for Quick Access
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
            <h2 className="features-heading">Explore Our Dental Emergency Solutions</h2>
            <p className="features-description">
              Dental emergencies can affect more than your smile - they can impact your ability to eat, speak, or focus on your day. Our team is here to provide quick relief and protect your long-term oral health.
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
            <h2 className="faq-heading">Emergency Dentistry FAQs</h2>
            <div className="faq-acc-container">
              <Accordion type="single" className="w-full space-y-5">
                <AccordionItem value="q1" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      When should I call a dentist right away?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      If you have strong pain, swelling, bleeding, trauma to a tooth, or a loose/knocked-out tooth, you should contact us immediately.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q2" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Can a knocked-out tooth be saved?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Often, yes - especially if you get to our office quickly. Keep the tooth moist (preferably in milk) and avoid touching the root.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q3" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      How should I handle a cracked or chipped tooth before my visit?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Avoid chewing on that side, rinse gently with water, and schedule an urgent visit so we can repair the tooth if needed.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q4" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">Do you treat children for dental emergencies?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Yes, we regularly treat kids for dental injuries and urgent pain - with care focused on keeping them calm and comfortable.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q5" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Can I reduce my risk of dental emergencies?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Sports mouthguards, regular checkups, and early treatment of dental issues can significantly lower your risk.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          <div className="features-section">
            <h2 className="features-heading">
              Where Can You Get Dental Emergency Care in Levittown?
            </h2>
            <p className="features-description">
              If you’re searching for the best emergency dentist near me, White Hill Dental is a top-rated choice for fast and compassionate urgent dental care in Levittown. Call us right away for same-day help - our team is here to relieve your pain, protect your smile, and give you peace of mind when dental emergencies arise.
            </p>
          </div>
          <BookCallBtn />
        </div>
      </main>
    </div>
  );
}
