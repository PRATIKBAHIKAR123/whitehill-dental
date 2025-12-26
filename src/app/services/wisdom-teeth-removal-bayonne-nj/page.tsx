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
      title: "Wisdom Teeth Evaluation & Monitoring",
      description:
        "Early assessment of wisdom teeth development helps prevent future complications and allows for better treatment planning. Regular monitoring ensures we can address issues before they become painful problems.",
      points: [
        "Digital X-rays and 3D imaging for precise evaluation",
        "Assessment of eruption patterns and spacing",
        "Early detection of impaction or crowding issues",
        "Personalized treatment timeline recommendations",
      ],
    },
    {
      icon: "/Images/icons/dental-drill.png",
      title: "Simple & Surgical Extractions",
      description:
        "When wisdom teeth need to be removed, our skilled team performs both simple and complex surgical extractions with the highest level of care. We prioritize your comfort throughout the entire process.",
      points: [
        "Minimally invasive extraction techniques",
        "IV sedation and nitrous oxide options",
        "Advanced pain management protocols",
        "Same-day procedures with flexible scheduling",
      ],
    },
    {
      icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
      title: "Post-Extraction Care & Recovery",
      description:
        "Proper aftercare is essential for optimal healing and preventing complications like dry socket or infection. Our comprehensive follow-up care ensures a smooth, comfortable recovery process.",
      points: [
        "Detailed post-operative instructions and care kits",
        "24/7 emergency contact for post-surgical concerns",
        "Follow-up appointments to monitor healing",
        "Prescription medications for pain and infection prevention",
      ],
    },
  ];
  return (
    <div className="flex min-h-screen bg-gray-50">
      <main className="details-page-container">
        <div className="details-page">
          <div className="details-page-header-section">
            <Fade direction="up" duration={1000}>
              <h1>Wisdom Teeth Treatment in Bayonne, NJ</h1>
            </Fade>
            <Fade direction="down" duration={1000}>
              <h2 className="text-center">
                Expert Wisdom Teeth Care in Bayonne | Urban Dental & Braces
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
                About Wisdom Teeth
              </h2>
              <p>
                Wisdom teeth, also known as third molars, typically emerge in
                your late teens or early twenties - often causing pain,
                crowding, and complications that require professional attention.
                At{" "}
                <Link href="/" className="text-primary hover:underline">
                  Urban Dental & Braces in Bayonne
                </Link>
                , we specialize in comprehensive wisdom teeth care, from
                monitoring their development to safe, comfortable{" "}
                <Link
                  href="/services/tooth-extraction-levittown-pa"
                  className="text-primary hover:underline"
                >
                  extractions{" "}
                </Link>
                when necessary. Our experienced team uses advanced techniques
                and sedation options to ensure your procedure is as smooth and
                pain-free as possible.
              </p>
              <p>
                We proudly serve patients from{" "}
                <Link
                  href="/service-areas/bayonne-nj-dentist-near-you"
                  className="text-primary hover:underline"
                >
                  Bayonne (07002)
                </Link>
                ,{" "}
                <Link
                  href="/service-areas/greenville-nj-dentist-near-you"
                  className="text-primary hover:underline"
                >
                  Greenville, NJ (07305)
                </Link>
                , and nearby communities. If you're searching for "wisdom teeth
                removal near me" or experiencing wisdom tooth pain, our{" "}
                <Link
                  href="/providers"
                  className="text-primary hover:underline"
                >
                  skilled dental professionals
                </Link>{" "}
                are here to provide the expert care you need.
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
                  Top Reasons to Choose Urban Dental & Braces for Wisdom Teeth
                  Care
                </h2>
              </div>
              <div className="wcu-points-section">
                <ul className="wcu-points">
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Advanced Surgical Techniques{" "}
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Multiple Sedation Options Available
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Experienced Oral Surgery Team
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Comprehensive Post-Operative Care
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Convenient Bayonne Location
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
            <h2 className="features-heading">Our Wisdom Teeth Services</h2>
            <p className="features-description">
              At Urban Dental & Braces, we understand that wisdom teeth problems
              can be concerning and uncomfortable. That's why our team provides
              comprehensive evaluation and treatment options tailored to your
              specific needs. Whether you need monitoring, extraction, or
              post-surgical care, we're equipped to handle all aspects of wisdom
              teeth treatment with precision and compassion.
            </p>
            <p className="features-description">
              Here's how we help you achieve optimal oral health:
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
                      When should wisdom teeth be removed?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans ">
                    Wisdom teeth should be removed if they're impacted, causing
                    crowding, difficult to clean, or leading to decay, gum
                    disease, or pain. Most extractions are recommended between
                    ages 16-25 when roots are less developed.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q2" className="faq-acc">
                  <AccordionTrigger className="faq-qn rounded-md">
                    <h3 className="text-lg">
                      Is wisdom teeth removal painful?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p className="mt-2">
                      With modern anesthesia and sedation options, the procedure
                      itself is comfortable. Most patients experience manageable
                      discomfort for 3-5 days post-surgery, which responds well
                      to prescribed pain medications.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q6" className="faq-acc">
                  <AccordionTrigger className="faq-qn rounded-md">
                    <h3 className="text-lg">
                      How long is the recovery period?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p className="mt-2">
                      Initial healing takes 7-10 days, with complete tissue
                      healing occurring over 3-4 weeks. Most patients return to
                      normal activities within 2-3 days and can eat regular
                      foods within a week.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q3" className="faq-acc">
                  <AccordionTrigger className="faq-qn rounded-md">
                    <h3 className="text-lg">
                      What are the signs that my wisdom teeth need attention?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Pain, swelling, difficulty opening your mouth, bad breath,
                      tender or bleeding gums around the back teeth, and
                      crowding of other teeth are all signs to schedule an
                      evaluation.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q5" className="faq-acc">
                  <AccordionTrigger className="faq-qn rounded-md">
                    <h3 className="text-lg">
                      Does insurance cover wisdom teeth removal?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p className="mt-2">
                      Most dental insurance plans cover a significant portion of
                      wisdom teeth extraction, especially when medically
                      necessary. We accept most insurance plans, including
                      Medicaid, and offer flexible payment options.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          <div className="features-section">
            <h2 className="features-heading">
              Need Wisdom Teeth Care in Bayonne?
            </h2>
            <p className="features-description">
              At{" "}
              <Link
                href="/contact-whitehill-dental-levittown-pa"
                className="text-primary hover:underline"
              >
                Urban Dental & Braces
              </Link>
              , we make wisdom teeth treatment as comfortable and stress-free as
              possible. Whether you need an evaluation, extraction, or are
              experiencing wisdom tooth pain, our experienced team is here to
              provide expert care with compassion.
            </p>
          </div>
          <BookCallBtn />
        </div>
      </main>
    </div>
  );
}
