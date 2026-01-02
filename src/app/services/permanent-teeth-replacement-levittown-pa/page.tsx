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

export default function Page() {
  const features = [
    {
      icon: "/Images/icons/medicine.png",
      title: "Single Tooth Implant Replacement",
      description:
        "",
      points: [
        "Replaces one missing tooth with a secure and natural fit",
        "Prevents shifting and bite changes over time",
        "Designed to match your surrounding teeth perfectly",
        "Strong support for everyday meals and conversations",
      ],
    },
    {
      icon: "/Images/icons/dental-drill.png",
      title: "Multiple Teeth Restoration",
      description:
        "",
      points: [
        "Bridges supported by implants - no clasps or removable parts",
        "Helps maintain healthy jawbone structure",
        "Designed for smooth chewing and a balanced bite",
        "Custom-made to restore a seamless smile",
      ],
    },
    {
      icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
      title: "Full Smile Reconstruction",
      description:
        "",
      points: [
        "A complete upper or lower arch replaced with implant support",
        "Say goodbye to loose or uncomfortable dentures",
        "Improves chewing power so you can enjoy a full diet again",
        "Long-lasting comfort with a stable, confident fit",
      ],
    },
  ];
  return (
    <div className="flex min-h-screen bg-gray-50">
      <main className="details-page-container">
        <div className="details-page">
          <div className="details-page-header-section">
            <Fade direction="up" duration={1000}>
              <h1>Permanent Teeth Replacement in Levittown, PA</h1>
            </Fade>
            <Fade direction="down" duration={1000}>
              <h2 className="text-center">
                Replacing Missing Teeth with Stability, Comfort & Support
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
                    src="/Images/services/permanent-teeth-replacement.webp"
                    alt="Main Banner"
                  />
                </div>
              </div>
            </div>

            {/* Text Section with Fade-in after delay */}
            <div className="desc-text-section">
              <div className="desc-text-subtitle">
                Permanent Teeth Replacement
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                What You Need to Know About Permanent Teeth Replacement
              </h2>
              <p>
                A complete smile does more than look good - it supports clear speech, confident chewing, and strong oral health. When one or more teeth are gone, everyday routines can quickly become uncomfortable or limiting. Permanent teeth replacement offers a reliable, long-term way to rebuild your smile using <Link href={'/services/dental-implants-levittown-pa'} className="text-blue-600 font-semibold hover:underline">implant-supported solutions</Link> that feel secure and look incredibly natural.
              </p>
              <p>
                At White Hill Dental, patients searching for permanent teeth replacement near me in{" "}
                <Link
                  href="/service-areas/levittown-pa-dentist-near-you"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Levittown (19054, 19055, 19056, 19057)
                </Link>
                , as well as families from{" "}
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
                , trust <Link href={'/providers'} className="text-blue-600 font-semibold hover:underline">our team</Link> for personalized care and strong results. With today's advanced techniques, we help restore oral comfort, preserve jawbone health, and bring back the confidence that comes from a full smile.
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
                  Your Best Choice for Permanent Teeth Replacement in Levittown
                </h2>
              </div>
              <div className="wcu-points-section">
                <ul className="wcu-points">
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Skilled Implant and Restorative Experts
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Customized Care Designed for Everyday Comfort
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Modern Technology for Accurate Planning & Precision
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Options Suitable for Any Level of Tooth Loss
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Affordable Solutions with Flexible Payment Plans
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
              Explore Our Permanent Tooth Replacement Options
            </h2>
            <p className="features-description">
              A complete smile makes every day easier - and we provide the solutions to help you regain confidence, function, and comfort. Our care is centered on long-term stability, restoring natural feel, and helping you enjoy life without limitations.
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
            <h2 className="faq-heading">Permanent Tooth Replacement FAQs</h2>
            <div className="faq-acc-container">
              <Accordion type="single" className="w-full space-y-5">
                <AccordionItem value="q1" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      How durable are permanent replacement options?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      With excellent care, implant-supported restorations can last decades - often for life.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q2" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">Will my new teeth feel natural?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Yes, they are designed to function like real teeth and blend perfectly with your smile.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q3" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Do implants hurt?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Most patients experience minimal discomfort thanks to advanced numbing techniques.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q4" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Are older patients good candidates?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Absolutely - healthy gums and jawbone support are what matter most.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q5" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      How do I maintain my new teeth?
                    </h3>{" "}
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Routine brushing, flossing, and checkups help keep implants strong and healthy.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          <div className="features-section">
            <h2 className="features-heading">
              Where Can You Get Permanent Teeth Replacement in Levittown?
            </h2>
            <p className="features-description">
              White Hill Dental is a top-rated choice for permanent teeth replacement near me in Levittown. Our skilled team is ready to rebuild your smile with solutions that feel secure, look beautiful, and last for years to come. Schedule your visit today and rediscover the comfort of a complete smile!
            </p>
          </div>
          <BookCallBtn />
        </div>
      </main>
    </div>
  );
}
