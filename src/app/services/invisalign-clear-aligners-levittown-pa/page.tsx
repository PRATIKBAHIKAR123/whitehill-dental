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

export default function InvisilinePage() {
  const features = [
    {
      icon: "/Images/icons/medicine.png",
      title: "Subtle Smile Straightening",
      description:
        "",
      points: [
        "Aligners that stay nearly invisible - even up close",
        "Progressively guides teeth into ideal positions",
        "Designed to enhance both appearance and comfort",
        "Boosts confidence throughout treatment - not just after",
      ],
    },
    {
      icon: "/Images/icons/dental-drill.png",
      title: "Gentle, Flexible Wear",
      description:
        "",
      points: [
        "Smooth trays with no metal irritation",
        "Removable design for special events and photos",
        "Easy to clean and maintain - no complicated routines",
        "Minimal impact on speech after an initial adjustment period",
      ],
    },
    {
      icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
      title: "Fully Personalized Treatment",
      description:
        "",
      points: [
        "Aligners engineered from detailed digital scans",
        " Tailored to treat your unique alignment needs",
        "Progress checks ensure movement stays on track",
        "Predictable outcomes with expert guidance",
      ],
    },
  ];
  return (
    <div className="flex min-h-screen bg-gray-50">
      <main className="details-page-container">
        <div className="details-page">
          <div className="details-page-header-section">
            <Fade direction="up" duration={1000}>
              <h1>Invisalign in Levittown, PA </h1>
            </Fade>
            <Fade direction="down" duration={1000}>
              <h2 className="text-center">
                Clear, Comfortable Teeth Straightening | White Hill Dental
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
                    src="/Images/services/invisalign.webp"
                    alt="Invisalign treatment at White Hill Dental in Levittown PA"
                  />
                </div>
              </div>
            </div>

            {/* Text Section with Fade-in after delay */}
            <div className="desc-text-section">
              <div className="desc-text-subtitle">Invisalign</div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                What You Need to Know About Invisalign
              </h2>
              <p>
                Invisalign <Link href={'/teeth-whitening-offer-levittown-pa'} className="text-blue-600 font-semibold hover:underline">offers</Link> a modern and nearly invisible way to straighten teeth without the look of metal braces. Using a custom series of smooth, clear aligners, teeth are guided into alignment gradually - making everyday life easier while improving your smile’s appearance and function. Whether you want to fix crowding, gaps, or bite concerns, Invisalign blends seamlessly into your routine so you can keep smiling confidently throughout treatment.
              </p>
              <p>
                We welcome patients searching for Invisalign near me in{" "}
                <Link
                  href="/service-areas/levittown-pa-dentist-near-you"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Levittown (19054, 19055, 19056, 19057)
                </Link>
                {" "}as well as{" "}
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
                . With personalized care and digital precision, we make straightening your teeth a comfortable, exciting transformation.
              </p>
            </div>
          </div>
          <div className="wcu-section">
            <div className="wcu-text-section">
              <div className="wcu-title">
                <h2>
                  Your Best Choice for Invisalign in Levittown
                </h2>
              </div>
              <div className="wcu-points-section">
                <ul className="wcu-points">
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Personalized Aligner Plans Designed for Your Smile
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Digital Scanning for Precision & Comfort
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Designed for Both Teens & Adults
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Flexible Payment Options That Fit Your Budget
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
            <h2 className="features-heading">Explore Our Invisalign Solutions</h2>
            <p className="features-description">
              Clear aligners are a great choice for busy, active lifestyles - offering freedom, confidence, and cleaner daily care compared to braces. They’re designed to blend into your day without interrupting the foods you love or activities you enjoy.
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
            <h2 className="faq-heading">Invisalign FAQs</h2>
            <div className="faq-acc-container">
              <Accordion type="single" className="w-full space-y-5">
                <AccordionItem value="q1" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      How long does Invisalign treatment take?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Most cases take 6–18 months depending on your alignment goals.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q2" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">How often do I need to wear the aligners?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Aligners should be worn 20–22 hours a day for the best results.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q3" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">Is Invisalign comfortable?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Yes - the trays are smooth and free of wires or sharp brackets.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q4" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Can I remove the aligners to eat?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Absolutely - enjoy your meals without dietary restrictions.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q5" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Will I need a retainer afterward?
                    </h3>{" "}
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Yes - retainers help maintain your newly aligned smile long-term.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          <div className="features-section">
            <h2 className="features-heading">
              Where Can You Get Invisalign in Levittown?
            </h2>
            <p className="features-description">
              White Hill Dental is a top-rated Invisalign provider in Levittown. If you’re looking for the best Invisalign near me to straighten your smile without braces, <Link href={'/providers'} className="text-blue-600 font-semibold hover:underline">our skilled team</Link> is ready to help you enjoy a confident, beautifully aligned result. Schedule your consultation today and start your journey toward a straighter smile!
            </p>
          </div>
          <BookCallBtn />
        </div>
      </main>
    </div>
  );
}
