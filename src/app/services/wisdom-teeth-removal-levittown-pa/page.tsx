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
      title: "Evaluation & Preventive Wisdom Tooth Care",
      description:
        "",
      points: [
        "Digital X-rays to track tooth position and growth",
        "Early monitoring to prevent crowding or infections",
        "Expert guidance on the right time for removal",
        "Focus on stopping problems before they begin",
      ],
    },
    {
      icon: "/Images/icons/dental-drill.png",
      title: "Simple Wisdom Tooth Extractions",
      description:
        "",
      points: [
        "Ideal for wisdom teeth that have fully erupted",
        "Fast, comfortable procedure using local numbing",
        "Designed to prevent pressure and bite issues",
        "Easy recovery with detailed home-care instructions",
      ],
    },
    {
      icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
      title: "Surgical Removal for Impacted Teeth",
      description:
        "",
      points: [
        "Best for partially erupted or misaligned wisdom teeth",
        "Gentle surgical techniques to protect surrounding gums and bone",
        "Sedation or comfort aids available when needed",
        "Supportive follow-up to help manage healing smoothly",
      ],
    },
  ];
  return (
    <div className="flex min-h-screen bg-gray-50">
      <main className="details-page-container">
        <div className="details-page">
          <div className="details-page-header-section">
            <Fade direction="up" duration={1000}>
              <h1>Wisdom Teeth Removal in Levittown, PA</h1>
            </Fade>
            <Fade direction="down" duration={1000}>
              <h2 className="text-center">
                Comfortable Care for Impacted & Painful Wisdom Teeth | White Hill Dental
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
                    src="/Images/services/wisdom-teeth.webp"
                    alt="Main Banner"
                  />
                </div>
                {/* <img
              src="/Images/banners/s1.webp"
              className="overlay-image"
              alt="Overlay"
            /> */}
              </div>
            </div>

            {/* Text Section with Fade-in after delay */}
            <div className="desc-text-section">
              <div className="desc-text-subtitle">Wisdom Teeth</div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                What You Need to Know About Wisdom Teeth Removal
              </h2>
              <p>
                Wisdom teeth often don’t have enough room to grow in properly - which can lead to swelling, pressure, pain, infections, and shifting of nearby teeth. Removing them early helps protect your oral health and prevent complications in the future. At White Hill Dental, we offer attentive care and advanced techniques to make the process smooth from start to finish.
              </p>
              <p>
                We proudly support patients searching for wisdom <Link href={'/services/tooth-extraction-levittown-pa'} className="text-blue-600 font-semibold hover:underline">teeth extraction</Link> near me in{" "}
                <Link
                  href="/service-areas/levittown-pa-dentist-near-you"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Levittown (19054, 19055, 19056, 19057)
                </Link>
                , along with{" "}
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
                . Whether the goal is preventive removal or relief from current discomfort, our team ensures a safe, stress-free experience.
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
                  Your Best Choice for Wisdom Teeth Removal in Levittown
                </h2>
              </div>
              <div className="wcu-points-section">
                <ul className="wcu-points">
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Gentle Approach to Minimize Discomfort{" "}
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Modern Imaging for Accurate Treatment Planning
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Emergency Appointments for Painful Symptoms
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Options That Fit Your Budget & Insurance
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
            <h2 className="features-heading">Explore Our Wisdom Teeth Removal Solutions</h2>
            <p className="features-description">
              Whether your wisdom teeth are fully erupted, partially visible, or trapped beneath the gums - we offer personalized solutions designed to protect your comfort and long-term oral health. Our goal is to prevent bigger issues later, while helping you heal quickly and stay pain-free.
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
            <h2 className="faq-heading">Wisdom Teeth FAQs</h2>
            <div className="faq-acc-container">
              <Accordion type="single" collapsible className="w-full space-y-6">
                <AccordionItem value="q1" className="faq-acc">
                  <AccordionTrigger className="faq-qn rounded-md">
                    <h3 className="text-lg">
                      When is the best time to remove wisdom teeth?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans ">
                    Late teens to early adulthood is ideal before the roots fully develop and complications arise.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q2" className="faq-acc">
                  <AccordionTrigger className="faq-qn rounded-md">
                    <h3 className="text-lg">
                      Do all wisdom teeth need extraction?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p className="mt-2">
                      Not always - we only recommend removal when they pose health risks or cause pain.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q6" className="faq-acc">
                  <AccordionTrigger className="faq-qn rounded-md">
                    <h3 className="text-lg">
                      Will the procedure hurt?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p className="mt-2">
                      You’ll be comfortably numbed, and sedation is available. Most patients feel pressure, not pain.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q3" className="faq-acc">
                  <AccordionTrigger className="faq-qn rounded-md">
                    <h3 className="text-lg">
                      How long does recovery take?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Initial healing usually takes a few days, with full recovery over 1–2 weeks depending on the case.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q5" className="faq-acc">
                  <AccordionTrigger className="faq-qn rounded-md">
                    <h3 className="text-lg">
                      Will wisdom teeth removal affect my appearance?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p className="mt-2">
                      No - removing the teeth is internal and does not change your visible facial structure.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          <div className="features-section">
            <h2 className="features-heading">
              Where Can You Get Wisdom Teeth Removal in Levittown?
            </h2>
            <p className="features-description">
              White Hill Dental is a top-rated choice for wisdom teeth removal near me in Levittown. If you’re experiencing pain, swelling, or crowding - or simply need an evaluation - our skilled team will provide the safest care for your smile. Contact us today and take the first step toward long-lasting relief!
            </p>
          </div>
          <BookCallBtn />
        </div>
      </main>
    </div>
  );
}
