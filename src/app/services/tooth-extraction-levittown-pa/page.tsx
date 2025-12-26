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

export default function ToothExtractionPage() {
  const features = [
    {
      icon: "/Images/icons/medicine.png",
      title: "Emergency Tooth Removal to Stop Severe Pain",
      description:
        "",
      points: [
        "Immediate care when swelling or infection cannot wait",
        "Focused treatments to prevent issues from spreading",
        "Quick relief to restore comfort and function",
        "Guidance to protect healing after treatment",
      ],
    },
    {
      icon: "/Images/icons/dental-drill.png",
      title: "Extraction for Orthodontic & Space Management Needs",
      description:
        "",
      points: [
        "Helps create proper spacing for straighter alignment",
        "Supports healthy jaw development in growing smiles",
        "Ideal for overcrowded teeth impacting bite balance",
        "Complements braces or aligner treatment plans",
      ],
    },
    {
      icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
      title: "Removal of Teeth Damaged Beyond Repair",
      description:
        "",
      points: [
        "Extracts teeth severely impacted by trauma or decay",
        "Preserves surrounding bone and gum health",
        "Allows planning for future restoration options",
        "Designed to maintain long-term oral wellness",
      ],
    },
  ];
  return (
    <div className="flex min-h-screen bg-gray-50">
      <main className="details-page-container">
        <div className="details-page">
          <div className="details-page-header-section">
            <Fade direction="up" duration={1000}>
              <h1>Tooth Extraction in Levittown, PA</h1>
            </Fade>
            <Fade direction="down" duration={1000}>
              <h2 className="text-center">
                Comfortable Tooth Removal When It’s the Healthiest Choice | White Hill Dental
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
                    src="/Images/services/tooth-extraction (1).webp"
                    alt="Main Banner"
                  />
                </div>
              </div>
            </div>

            {/* Text Section with Fade-in after delay */}
            <div className="desc-text-section">
              <div className="desc-text-subtitle">Tooth Extractions</div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                What You Need to Know About Tooth Extractions
              </h2>
              <p>
                At White Hill Dental, we always work hard to save natural teeth - but sometimes removing a tooth is the safest way to protect your overall oral health. Teeth that are badly infected, severely broken, or causing overcrowding may need to be extracted to relieve pain and prevent future complications.
              </p>
              <p>
                If you’re searching for tooth extraction near me or wisdom tooth removal near me in Levittown (19054, 19055, 19056, 19057), our team offers skilled and compassionate care for nearby patients from Fairless Hills (19030), Fallsington (19054), Bristol (19007), and Tullytown (19007). We focus on a smooth, comfortable experience so you can return to normal life confidently.
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
                  Your Best Choice for Tooth Extractions in Levittown
                </h2>
              </div>
              <div className="wcu-points-section">
                <ul className="wcu-points">
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Expert Evaluation to Determine the Best Solution
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Modern Comfort Options for a Relaxed Experience
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Same-Day Scheduling for Urgent Tooth Pain
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Affordable Care with Insurance Guidance{" "}
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Easy Access for Families Throughout Bucks County
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
            <h2 className="features-heading">Explore Our Tooth Extraction Solutions</h2>
            <p className="features-description">
              Every tooth is unique - and so is every removal. Our gentle approach is designed to protect surrounding teeth and support your long-term oral health. We take time to explain every step, helping you feel calm, informed, and confident throughout treatment.
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
            <h2 className="faq-heading">Tooth Extraction FAQs</h2>
            <div className="faq-acc-container">
              <Accordion type="single" className="w-full space-y-5">
                <AccordionItem value="q1" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">Will my extraction hurt?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      No - anesthesia keeps you comfortable, and most patients feel only mild soreness afterward.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q2" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      How do I know if a tooth needs to be removed?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Severe pain, deep infection, or lack of space for erupting teeth are common reasons for extraction.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q3" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      How long is recovery?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Simple extractions typically heal in a few days. Surgical cases may take slightly longer.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q4" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      What can I eat after an extraction?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Soft foods such as yogurt, smoothies, and mashed potatoes are recommended for the first few days.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q5" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Can I replace the tooth later?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Yes - we offer implants, bridges, and dentures to restore your smile and chewing strength.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          <div className="features-section">
            <h2 className="features-heading">
              Where Can You Get Tooth Extractions in Levittown?
            </h2>
            <p className="features-description">
              White Hill Dental is a trusted and top-rated provider for gentle tooth extractions near me in Levittown. Whether you are dealing with infection, a severely damaged tooth, or overcrowding, our experienced team delivers comfortable care and helps you move forward with confidence.
            </p>
          </div>
          <BookCallBtn />
        </div>
      </main>
    </div>
  );
}
