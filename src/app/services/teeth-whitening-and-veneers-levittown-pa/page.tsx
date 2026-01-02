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

export default function WhiteningVeneersPage() {
  const features = [
    {
      icon: "/Images/icons/medicine.png",
      title: "Professional Teeth Whitening",
      description:
        "",
      points: [
        "Brightens tooth enamel quickly and safely",
        "Targets tough stains from coffee, wine, tobacco & aging",
        "Stronger, longer-lasting results than store products",
        "Ideal before special occasions or cosmetic upgrades",
      ],
    },
    {
      icon: "/Images/icons/dental-drill.png",
      title: "Custom Porcelain Veneers",
      description:
        "",
      points: [
        "Fixes cracks, discoloration, uneven edges & small gaps",
        "Ultra-thin, durable porcelain designed to look like real enamel",
        "Tailored shape and shade for natural-looking beauty",
        "A reliable choice for a flawless, Hollywood-worthy smile",
      ],
    },
    {
      icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
      title: "Combined Smile Enhancement Options",
      description:
        "",
      points: [
        "Whitening + veneers for a consistently bright, uniform look",
        "Designed around your unique cosmetic goals",
        "Digital previews available for treatment confidence",
        "Results that strengthen your smile and boost self-esteem",
      ],
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <main className="details-page-container">
        <div className="details-page">
          <div className="details-page-header-section">
            <Fade direction="up" duration={1000}>
              <h1>Teeth Whitening & Veneers in Levittown, PA</h1>
            </Fade>
            <Fade direction="down" duration={1000}>
              <h2 className="text-center">
                Transform Your Smile with Advanced Cosmetic Enhancements | White Hill Dental
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
                    src="/Images/services/whitening-veneers.webp"
                    alt="Main Banner"
                  />
                </div>
              </div>
            </div>

            {/* Text Section with Fade-in after delay */}
            <div className="desc-text-section">
              <div className="desc-text-subtitle">Whitening & Veneers</div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                What You Need to Know About Whitening & Veneers
              </h2>
              <p>
                A bright, balanced smile can make every first impression feel incredible. Teeth whitening lifts deep stains for a fresher, more radiant look, while veneers correct chips, uneven edges, gaps, and stubborn discoloration that whitening alone can’t fix. At White Hill Dental, our cosmetic solutions are designed to deliver noticeable improvements while keeping your smile natural and uniquely yours.
              </p>
              <p>
                We proudly serve patients searching for veneers near me or teeth whitening near me across{" "}
                <Link
                  href="/service-areas/levittown-pa-dentist-near-you"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Levittown (19054, 19055, 19056, 19057)
                </Link>
                ,{" "}
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
                . Whether you want a subtle refresh or a full transformation, we make achieving your dream smile simple and rewarding.
              </p>
            </div>
          </div>
          <div className="wcu-section">
            <div className="wcu-text-section">
              {/* <div className='wcu-subtitle'>
                      Top Reasons
                    </div> */}
              <div className="wcu-title">
                <h2>Your Best Choice for Whitening & Veneers in Levittown</h2>
              </div>
              <div className="wcu-points-section">
                <ul className="wcu-points">
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Personalized Plans for Every Cosmetic Goal
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      High-quality, natural-looking materials
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Comfortable, efficient appointments
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Budget-friendly payment options{" "}
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Convenient location for Bucks County families
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
              Explore Our Whitening & Veneer Solutions
            </h2>
            <p className="features-description">
              A great smile isn’t just about appearance - it’s about feeling proud every time you laugh, speak, or pose for a photo. At White Hill Dental, we design cosmetic enhancements that look natural, feel comfortable, and complement your facial features.
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
            <h2 className="faq-heading">Whitening & Veneers FAQs</h2>
            <div className="faq-acc-container">
              <Accordion type="single" collapsible className="w-full space-y-6">
                <AccordionItem value="q1" className="faq-acc">
                  <AccordionTrigger className="faq-qn rounded-md">
                    <h3 className="text-lg">
                      How long do whitening results last?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans ">
                    With good habits and occasional touch-ups, brightness can last months to years.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q2" className="faq-acc">
                  <AccordionTrigger className="faq-qn rounded-md">
                    <h3 className="text-lg">Are veneers permanent?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p className="mt-2">
                      Veneers are a long-term cosmetic investment designed to last many years with care.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q3" className="faq-acc">
                  <AccordionTrigger className="faq-qn rounded-md">
                    <h3 className="text-lg">
                      Which treatment is best for deep stains?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Whitening works for most stains, but veneers may be better for internal discoloration.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q5" className="faq-acc">
                  <AccordionTrigger className="faq-qn rounded-md">
                    <h3 className="text-lg">Will others notice I have veneers?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p className="mt-2">
                      Your veneers are custom-crafted to look natural - people will simply notice a stunning smile.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q6" className="faq-acc">
                  <AccordionTrigger className="faq-qn rounded-md">
                    <h3 className="text-lg">
                      Can I whiten my teeth after getting veneers?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p className="mt-2">
                      Veneers do not change shade, so it’s best to whiten first, then match the veneer color.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          <div className="features-section">
            <h2 className="features-heading">
              Where Can You Get Teeth Whitening & Veneers in Levittown?
            </h2>
            <p className="features-description">
              White Hill Dental is a top-rated practice for cosmetic smile improvements in Levittown. If you’re searching for the best teeth whitening near me or veneers dentist near me, <Link href={'/providers'} className="text-blue-600 font-semibold hover:underline">our experienced team</Link> is ready to help you achieve a beautiful, confident smile you’ll love showing off. Book your consultation today and take the first step toward a brighter you!
            </p>
          </div>
          <BookCallBtn />
        </div>
      </main>
    </div>
  );
}
