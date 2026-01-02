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

export default function SameDayPage() {
  const features = [
    {
      icon: "/Images/icons/medicine.png",
      title: "Urgent Dental Treatment",
      description:
        "",
      points: [
        "Same-day care for pain, broken teeth, or sudden sensitivity",
        "Stabilization to protect your teeth and bite",
        "Natural-looking solutions that support long-term health",
        "Follow-up care available if additional treatment is needed",
      ],
    },
    {
      icon: "/Images/icons/dental-drill.png",
      title: "Same-Day Crowns",
      description:
        "",
      points: [
        "Digital scanning ensures a seamless fit and natural appearance",
        "Crafted and placed in just one appointment",
        "Strong, durable materials for everyday chewing",
        "No temporary crown or second visit required",
      ],
    },
    {
      icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
      title: "Immediate Fillings & Tooth Repairs",
      description:
        "",
      points: [
        "Quick treatment for chips, decay, or small fractures",
        "Tooth-colored materials blend beautifully with your enamel",
        "Preserves maximum healthy tooth structure",
        "Fast results so you can smile again right away",
      ],
    },
  ];
  return (
    <div className="flex min-h-screen bg-gray-50">
      <main className="details-page-container">
        <div className="details-page">
          <div className="details-page-header-section">
            <Fade direction="up" duration={1000}>
              <h1>Same-Day Dentistry in Levittown, PA</h1>
            </Fade>
            <Fade direction="down" duration={1000}>
              <h2 className="text-center">
                Fast, Convenient Care for Busy Smiles | White Hill Dental
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
                    src="/Images/services/same-day-dentistry.webp"
                    alt="Main Banner"
                  />
                </div>
              </div>
            </div>

            {/* Text Section with Fade-in after delay */}
            <div className="desc-text-section">
              <div className="desc-text-subtitle">Same-Day Dentistry</div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                What You Need to Know About Same-Day Dentistry
              </h2>
              <p>
                Healthy smiles shouldn’t have to wait. Same-day dentistry allows us to repair damaged teeth, treat urgent concerns, and complete high-quality restorations in a single appointment - no temporary restorations or multiple visits required. Using advanced digital technology, White Hill Dental makes it easy to get strong, natural-looking results that support your schedule and your smile.
              </p>
              <p>
                We proudly serve patients looking for same-day dentist near me in{" "}
                <Link
                  href="/service-areas/levittown-pa-dentist-near-you"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Levittown (19054, 19055, 19056, 19057)
                </Link>
                , along with neighboring communities including{" "}
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
                . Whether you're fixing a broken tooth or managing a sudden dental issue, we're here to make the process smooth and stress-free.
              </p>
            </div>
          </div>
          <div className="wcu-section">
            <div className="wcu-text-section">
              <div className="wcu-title">
                <h2>
                  Your Best Choice for Same-Day Dentistry in Levittown
                </h2>
              </div>
              <div className="wcu-points-section">
                <ul className="wcu-points">
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Advanced Digital Imaging for Precision Results{" "}
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Repairs and Restorations Completed in One Visit{" "}
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Gentle Care Designed Around Your Comfort{" "}
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Flexible Payment Plans to Fit Your Budget{" "}
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Close-To-Home Convenience for Local Families
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
              Explore Our Same-Day Dentistry Solutions
            </h2>
            <p className="features-description">
              Dental issues don’t improve with time - so fast treatment is key to keeping your smile healthy and strong. Our same-day services help you get back to what matters most, with confidence and comfort.
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
            <h2 className="faq-heading">Same-Day Dentistry FAQs</h2>
            <div className="faq-acc-container">
              <Accordion type="single" collapsible className="w-full space-y-6">
                <AccordionItem value="q1" className="faq-acc">
                  <AccordionTrigger className="faq-qn rounded-md">
                    <h3 className="text-lg">
                      Are same-day dental restorations durable?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans ">
                    Yes - the materials used provide long-lasting strength similar to traditional lab-made restorations.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q2" className="faq-acc">
                  <AccordionTrigger className="faq-qn rounded-md">
                    <h3 className="text-lg">
                      How long does a same-day treatment take?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p className="mt-2">
                      Most appointments take just a few hours depending on the procedure.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q3" className="faq-acc">
                  <AccordionTrigger className="faq-qn rounded-md">
                    <h3 className="text-lg">
                      Do I need a referral for same-day dentistry?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      No - simply schedule a visit, and we’ll evaluate your needs.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q5" className="faq-acc">
                  <AccordionTrigger className="faq-qn rounded-md">
                    <h3 className="text-lg">
                      Can same-day care help with sudden dental pain?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p className="mt-2">
                      Absolutely - we offer prompt solutions to help relieve discomfort and prevent further issues.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q6" className="faq-acc">
                  <AccordionTrigger className="faq-qn rounded-md">
                    <h3 className="text-lg">
                      Is same-day dentistry suitable for kids?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p className="mt-2">
                      Yes - younger patients often benefit from quick, efficient treatment.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          <div className="features-section">
            <h2 className="features-heading">
              Where Can You Get Same-Day Dentistry in Levittown?
            </h2>
            <p className="features-description">
              If you need fast tooth repair or urgent care and are searching for the best same-day dentist near me in Levittown, White Hill Dental is here to help. Walk in with a concern - walk out with a confident smile. Schedule your same-day appointment today!
            </p>
          </div>
          <BookCallBtn />
        </div>
      </main>
    </div>
  );
}
