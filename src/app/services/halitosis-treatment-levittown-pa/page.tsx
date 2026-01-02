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

export default function Page() {
  const features = [
    {
      icon: "/Images/icons/medicine.png",
      title: "Advanced Oral Cleaning & Bacteria Control",
      description:
        "",
      points: [
        "Deep cleaning services to clear odor-producing buildup",
        "Targeted techniques to refresh gums and enamel",
        "Tongue-cleaning support for added freshness",
        "Easy maintenance recommendations for daily success",
      ],
    },
    {
      icon: "/Images/icons/dental-drill.png",
      title: "Gum Health & Infection Management",
      description:
        "",
      points: [
        "Professional gum care that stops infection at its source",
        "Specialized treatment to reduce inflammation and odor",
        "Monitoring to maintain long-term periodontal stability",
        "Protects teeth from damage caused by untreated gum issues",
      ],
    },
    {
      icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
      title: "Dry Mouth & Breath-Friendly Lifestyle Care",
      description:
        "",
      points: [
        "Support for saliva function with customized solutions",
        "Guidance on medications, hydration, and nutrition",
        "Options to reduce odor from everyday triggers",
        "Long-term strategies for comfort and confidence",
      ],
    },
  ];
  return (
    <div className="flex min-h-screen bg-gray-50">
      <main className="details-page-container">
        <div className="details-page">
          <div className="details-page-header-section">
            <Fade direction="up" duration={1000}>
              <h1>Halitosis Treatment in Levittown, PA</h1>
            </Fade>
            <Fade direction="down" duration={1000}>
              <h2 className="text-center">
                Fresh Breath Starts with a Healthy Mouth | White Hill Dental
              </h2>
            </Fade>
          </div>
          <div className="details-page-desc-section">
            {/* Image Section */}
            <div className="image_section">
              <div className="image_section-cover">
                <div className="main-image">
                  <img
                    src="/Images/services/halitosis.webp"
                    alt="Main Banner"
                  />
                </div>
              </div>
            </div>

            {/* Text Section with Fade-in after delay */}
            <div className="desc-text-section">
              <div className="desc-text-subtitle">Halitosis</div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                What You Need to Know About Halitosis
              </h2>
              <p>
                Persistent bad breath isn’t just embarrassing - it’s often a sign that something deeper is going on with your oral health. Gum disease, bacteria buildup, dry mouth, or underlying infections can all contribute to chronic odor that won’t fade with mints or mouthwash. At White Hill Dental, we go beyond masking the problem. We identify the root cause and design a personalized fresh-breath plan that restores comfort, confidence, and oral wellness.
              </p>
              <p>
                We proudly care for patients searching for halitosis treatment near me in{" "}
                <Link
                  href="/service-areas/levittown-pa-dentist-near-you"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Levittown (19054, 19055, 19056, 19057)
                </Link>
                {" "}as well as surrounding communities including{" "}
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
                . Fresh breath is possible - and we're here to help you achieve it.
              </p>
            </div>
          </div>
          <div className="wcu-section">
            <div className="wcu-text-section">
              <div className="wcu-title">
                <h2>
                  Your Best Choice for Halitosis Treatment in Levittown
                </h2>
              </div>
              <div className="wcu-points-section">
                <ul className="wcu-points">
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Comprehensive Evaluation to Find the Source
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Personalized Plans for Long-Term Freshness
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Gentle, Science-Based Breath Improvement
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Tools and Tips for Healthy Habits at Home
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Convenient Bucks County Location for Seamless Care
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
            <h2 className="features-heading">
              Explore Our Halitosis Solutions
            </h2>
            <p className="features-description">
              Halitosis affects everyone differently - which is why our approach adjusts to your lifestyle, dental needs, and goals for fresher breath. By treating the true source of odor rather than just the symptoms, we help ensure results that are noticeable, lasting, and confidence-boosting.
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
            <h2 className="faq-heading">Halitosis FAQs</h2>
            <div className="faq-acc-container">
              <Accordion type="single" collapsible className="w-full space-y-6">
                <AccordionItem value="q1" className="faq-acc">
                  <AccordionTrigger className="faq-qn rounded-md">
                    <h3 className="text-lg">How do I know if I have halitosis?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans ">
                    If bad breath persists even after good brushing and hygiene, it could be chronic halitosis requiring professional care.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q2" className="faq-acc">
                  <AccordionTrigger className="faq-qn rounded-md">
                    <h3 className="text-lg">
                      Can halitosis be caused by gum disease?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p className="mt-2">
                      Yes - gum infection is a major contributor to chronic odor and should be treated promptly.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q3" className="faq-acc">
                  <AccordionTrigger className="faq-qn rounded-md">
                    <h3 className="text-lg">
                      Could my diet be affecting my breath?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Absolutely - certain foods and drinks can worsen odor. We help you identify helpful daily adjustments.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q5" className="faq-acc">
                  <AccordionTrigger className="faq-qn rounded-md">
                    <h3 className="text-lg">
                      Is halitosis treatment painful?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p className="mt-2">
                      No - treatments are gentle and focused on improving comfort and freshness.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q6" className="faq-acc">
                  <AccordionTrigger className="faq-qn rounded-md">
                    <h3 className="text-lg">
                      Do kids and teens experience halitosis too?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p className="mt-2">
                      Yes - braces, poor hygiene, and cavities can all contribute, and we offer solutions for every age.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          <div className="features-section">
            <h2 className="features-heading">
              Where Can You Find Halitosis Treatment in Levittown?
            </h2>
            <p className="features-description">
              White Hill Dental is a trusted provider of fresh-breath solutions in Levittown. If you’re searching for the best halitosis dentist near me, <Link href={'/providers'} className="text-blue-600 font-semibold hover:underline">our expert team</Link> is ready to help you breathe easy and smile with confidence again. Schedule a visit today and enjoy the comfort of long-lasting freshness!
            </p>
          </div>
          <BookCallBtn />
        </div>
      </main>
    </div>
  );
}
