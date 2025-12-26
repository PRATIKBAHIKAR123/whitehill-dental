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
      title: "Common Oral Surgery Services We Provide",
      description:
        "We offer a wide range of oral surgery treatments designed to restore comfort and improve dental health.",
      points: [
        "Tooth Extractions (simple & surgical)",
        "Wisdom Teeth Removal",
        "Bone Grafting for Dental Implants",
        "Treatment of Oral Infections & Abscesses",
      ],
    },
    {
      icon: "/Images/icons/dental-drill.png",
      title: "Comfort & Sedation Options",
      description:
        "Your comfort is always our priority. We provide safe sedation and pain-management options to help you feel relaxed and worry-free.",
      points: [
        "Local anesthesia for targeted numbness",
        "Nitrous oxide (laughing gas) for relaxation",
        "Supportive, calm surgical environment",
        "Post-treatment care and recovery guidance",
      ],
    },
    {
      icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
      title: "Oral Surgery Care Focused on Your Needs",
      description:
        "We go beyond just performing procedures - our approach is built around comfort, safety, and long-term results. Patients choose us for:",
      points: [
        "Detailed consultations before every procedure",
        "Clear explanations and personalized treatment plans",
        "Gentle techniques that reduce discomfort and speed recovery",
        "Ongoing follow-up care to ensure proper healing",
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
                    alt="Main Banner"
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
                We proudly care for patients looking for an{" "}
                <strong>oral surgeon near me </strong> in <strong> Levittown (19054, 19055, 19056, 19057)</strong>{" "}
                as well as those traveling from <strong>Fairless Hills (19030), Fallsington (19054), Bristol (19007)</strong> and <strong>Tullytown (19007)</strong>.
                With personalized care and advanced technology, we make oral surgery a smooth and stress-free experience while prioritizing your long-term oral health.
              </p>
            </div>
          </div>
          <div className="wcu-section">
            <div className="wcu-text-section">
              <div className="wcu-title">
                Why Choose Urban Dental & Braces for Oral Surgery?
              </div>
              <div className="wcu-points-section">
                <ul className="wcu-points">
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Experienced Dental Surgeons You Can Trust
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Modern Technology for Precision & Safety
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Comfortable, Patient-Focused Environment
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Same-Day Appointments When Urgent Care is Needed
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Conveniently Located in Bayonne, NJ
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
            <h2 className="features-heading">Our Oral Surgery Services</h2>
            <p className="features-description">
              Oral surgery doesn’t need to feel overwhelming. At Urban Dental &
              Braces, our goal is to provide smooth, predictable care from start
              to finish. We combine gentle techniques with advanced tools to
              protect your health, relieve discomfort, and support long-term
              dental wellness.
            </p>
            <p className="features-description">
              Here’s what you can expect when you choose us for your surgical
              needs:
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
                    <h3 className="text-lg">When is oral surgery needed?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Oral surgery may be required for impacted teeth, severe
                      decay, infection, or to prepare for implants.{" "}
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q2" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">Will oral surgery hurt?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      No. With local anesthesia and sedation options, most
                      patients experience little to no discomfort during
                      treatment.{" "}
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q3" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      What can I expect after surgery?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Mild swelling or soreness is normal, but recovery usually
                      happens within a few days. We’ll provide aftercare
                      instructions to make healing smooth.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q4" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">How do I prepare for surgery?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Follow our guidance carefully. If sedation is planned,
                      avoid eating beforehand and arrange transportation home
                      after your visit.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q5" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Is oral surgery covered by insurance?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Many procedures are covered by dental insurance. Our team
                      will help confirm your benefits and review payment
                      options.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          <div className="features-section">
            <h2 className="features-heading">
              Need Oral Surgery in Bayonne, NJ?
            </h2>
            <p className="features-description">
              From tooth extractions to wisdom teeth removal, Urban Dental &
              Braces provides skilled, compassionate oral surgery right here in
              Bayonne. Protect your smile and your overall health with expert
              care close to home.
            </p>
          </div>
          <BookCallBtn />
        </div>
      </main>
    </div>
  );
}
