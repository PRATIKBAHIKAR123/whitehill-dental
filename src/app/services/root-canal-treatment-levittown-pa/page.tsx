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

export default function RootCanalClient() {
  const features = [
    {
      icon: "/Images/icons/medicine.png",
      title: "Root Canal Therapy for Infected Teeth",
      description:
        "",
      points: [
        "Removes infected or damaged nerve tissue from inside the tooth",
        "Cleans and seals the canals to prevent bacteria from returning",
        "Relieves pressure, throbbing, and sensitivity caused by infection",
        "Helps avoid the need for tooth extraction whenever possible",
      ],
    },
    {
      icon: "/Images/icons/dental-drill.png",
      title: "Building Strength with Post-Treatment Crowns",
      description: "",
      points: [
        "Protects root canal–treated teeth from cracking or breaking",
        "Restores normal chewing function and daily activity",
        "Custom-matched to blend naturally with nearby teeth",
        "Designed for durability and long-term stability",
      ],
    },
    {
      icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
      title: "Emergency Root Canal Care for Severe Pain",
      description:
        "",
      points: [
        "Ideal for sudden, intense toothaches or nerve pain",
        "Addresses swelling or abscesses linked to deep infection",
        "Provides fast relief so you can get back to your day",
        "Same-day or prompt visits available whenever possible",
      ],
    },
  ];
  return (
    <div className="flex min-h-screen bg-gray-50">
      <main className="details-page-container">
        <div className="details-page">
          <div className="details-page-header-section">
            <Fade direction="up" duration={1000}>
              <h1>Root Canal Treatment in Levittown, PA</h1>
            </Fade>
            <Fade direction="down" duration={1000}>
              <h2 className="text-center">
                Saving Your Natural Tooth with Gentle Care | White Hill Dental
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
                    src="/Images/services/root-canal.webp"
                    alt="Main Banner"
                  />
                </div>
              </div>
            </div>

            {/* Text Section with Fade-in after delay */}
            <div className="desc-text-section">
              <div className="desc-text-subtitle">Root Canal</div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                What You Need to Know About Root Canal Treatment
              </h2>
              <p>
                <Link href={'/services/endodontics-levittown-pa'} className="font-bold text-primary">Root canal</Link> treatment removes infection inside a tooth, stops pain, and helps you keep your natural smile instead of needing an extraction. It is a safe and highly successful procedure that prevents the infection from spreading to surrounding teeth or the jawbone. At White Hill Dental, we use gentle, modern techniques so the procedure feels comfortable and provides fast relief.
              </p>
              <p>
                If you've been searching for root canal treatment near me or a root canal dentist in{" "}
                <Link
                  href="/service-areas/levittown-pa-dentist-near-you"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Levittown (19054, 19055, 19056, 19057)
                </Link>
                , our office is conveniently located to assist nearby communities including{" "}
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
                . We're here to help you prevent the infection from getting worse - and protect your natural teeth for the long run.
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
                  Your Best Choice for Root Canal Treatment in Levittown
                </h2>
              </div>
              <div className="wcu-points-section">
                <ul className="wcu-points">
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Experienced Dentists Focused on Saving Natural Teeth{" "}
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Gentle Techniques to Minimize Discomfort
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Prompt Appointments for Severe Tooth Pain
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Root Canal Treatment Options That Work with Your Budget{" "}
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Convenient Levittown Location for Nearby Communities
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
            <h2 className="features-heading">Explore Our Root Canal Treatment Solutions</h2>
            <p className="features-description">
              Deep tooth pain or infection can affect your ability to eat, sleep, and focus. At White Hill Dental, our goal is to address the source of the problem, preserve your natural tooth whenever possible, and restore your comfort with long-term results.
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
            <h2 className="faq-heading">Root Canal Treatment FAQs</h2>
            <div className="faq-acc-container">
              <Accordion type="single" collapsible className="w-full space-y-6">
                <AccordionItem value="q1" className="faq-acc">
                  <AccordionTrigger className="faq-qn rounded-md">
                    <h3 className="text-lg">
                      Will the root canal procedure hurt?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans ">
                    With modern numbing and gentle techniques, the procedure is typically painless - most patients feel immediate relief.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q2" className="faq-acc">
                  <AccordionTrigger className="faq-qn rounded-md">
                    <h3 className="text-lg">
                      How do I know if I need a root canal?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p className="mt-2">
                      Persistent tooth pain, sensitivity to hot or cold, swelling, or pain while chewing are common signs of nerve infection.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q6" className="faq-acc">
                  <AccordionTrigger className="faq-qn rounded-md">
                    <h3 className="text-lg">Is extraction better than a root canal?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p className="mt-2">
                      Saving your natural tooth maintains proper bite, jawbone health, and natural function - extraction often leads to further treatment later.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q3" className="faq-acc">
                  <AccordionTrigger className="faq-qn rounded-md">
                    <h3 className="text-lg">How long does a root canal take?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Many treatments are completed in just one visit depending on the severity of the infection.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q5" className="faq-acc">
                  <AccordionTrigger className="faq-qn rounded-md">
                    <h3 className="text-lg">
                      Do you offer emergency root canal treatment?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p className="mt-2">
                      Yes - if you’re in severe pain, we do our best to schedule a same-day appointment.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          <div className="features-section">
            <h2 className="features-heading">
              Where Can You Get Root Canal Treatment in Levittown?
            </h2>
            <p className="features-description">
              If you’re searching for the {" "}
              <strong>
                best root canal treatment near me
              </strong>{" "}
              to finally stop tooth pain{" "} <strong> White Hill Dental </strong> is a
              {" "}<strong>top-rated dental practice</strong>{" "}
              in Levittown you can rely on. Our skilled team is ready to relieve your discomfort, save your tooth, and restore your oral health. Book your visit today and smile confidently again!
            </p>
          </div>
          <BookCallBtn />
        </div>
      </main>
    </div>
  );
}
