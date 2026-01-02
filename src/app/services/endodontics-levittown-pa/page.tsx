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
      title: "Endodontic Retreatment",
      description:
        "",
      points: [
        "Repairs teeth that didn’t fully heal after prior treatment",
        "Eliminates lingering infection or discomfort",
        "Reinforces your tooth with upgraded restorative materials",
        "Helps avoid unnecessary extraction",
      ],
    },
    {
      icon: "/Images/icons/dental-drill.png",
      title: "Root Canal Therapy for Infected Teeth",
      description:
        "",
      points: [
        "Removes harmful bacteria causing pain and swelling",
        "Restores stability while preventing future complications",
        "Allows you to keep your natural tooth securely in place",
        "Completed with precision for reliable results",
      ],
    },
    {
      icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
      title: "Emergency Pain Relief for Dental Infections",
      description:
        "",
      points: [
        "Rapid care for severe toothaches or abscesses",
        "Targets inflammation to protect surrounding bone",
        "Same-day or prompt visits whenever possible",
        "Personalized follow-up to ensure full healing",
      ],
    },
  ];
  return (
    <div className="flex min-h-screen bg-gray-50">
      <main className="details-page-container">
        <div className="details-page">
          <div className="details-page-header-section">
            <Fade direction="up" duration={1000}>
              <h1>Endodontics in Levittown, PA</h1>
            </Fade>
            <Fade direction="down" duration={1000}>
              <h2 className="text-center">
                Protecting Natural Teeth with Expert Internal Care | White Hill Dental
              </h2>
            </Fade>
          </div>
          <div className="details-page-desc-section">
            {/* Image Section */}
            <div className="image_section">
              <div className="image_section-cover">
                <div className="main-image">
                  <img
                    src="/Images/services/patient-dentist-endodontics.webp"
                    alt="Main Banner"
                  />
                </div>
              </div>
            </div>

            {/* Text Section with Fade-in after delay */}
            <div className="desc-text-section">
              <div className="desc-text-subtitle">Endodontics </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                What You Need to Know About Endodontics
              </h2>
              <p>
                When decay, trauma, or deep infection reaches the inner nerve of a tooth, discomfort can become intense - and fast. Endodontic care focuses on treating the inside of the tooth to stop pain at its source while preserving your natural smile. By carefully removing irritated or infected pulp and sealing the tooth, these treatments prevent the need for <Link href={'/services/tooth-extraction-levittown-pa'} className="font-bold text-primary">extraction</Link>  and restore healthy function.
              </p>
              <p>
                If you're searching for endodontic treatment near me or a <Link href={'/services/root-canal-treatment-levittown-pa'} className="font-bold text-primary">root canal</Link> specialist in{" "}
                <Link
                  href="/service-areas/levittown-pa-dentist-near-you"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Levittown (19054, 19055, 19056, 19057)
                </Link>
                , White Hill Dental proudly supports patients across{" "}
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
                {" "}with advanced techniques designed to protect long-term oral health.
              </p>
            </div>
          </div>
          <div className="wcu-section">
            <div className="wcu-text-section">
              <div className="wcu-title">
                <h2>
                  Your Best Choice for Endodontics in Levittown
                </h2>
              </div>
              <div className="wcu-points-section">
                <ul className="wcu-points">
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Focus on Saving Natural Teeth First
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Gentle Techniques for a More Comfortable Experience
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Skilled Team with Advanced Diagnostic Technology
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Timely Care When Pain Can’t Wait
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Convenient Location for Bucks County Patients
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
            <h2 className="features-heading">Explore Our Endodontic Treatment Solutions</h2>
            <p className="features-description">
              A healthy smile begins from within - and our endodontic services are designed to stop infection, relieve sensitivity, and keep natural teeth strong for years ahead. Our goal is simple: protect your smile now and help it stay healthy for the future.
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
            <h2 className="faq-heading">Endodontics FAQs</h2>
            <div className="faq-acc-container">
              <Accordion type="single" className="w-full space-y-5">
                <AccordionItem value="q1" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Will the procedure hurt?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Modern numbing and careful techniques make treatment comfortable - most patients feel instant relief.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q2" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      How do I know if I need endodontic treatment?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Common signs include lingering sensitivity, sharp pain when chewing, swelling, or darkened tooth color.{" "}
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q3" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Do endodontically treated teeth last long?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      With a final restoration like a crown and great oral care, they can last a lifetime.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q4" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Can endodontics help after an accident?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Yes - trauma can damage the nerve, and treatment can save the tooth from dying or needing removal.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q5" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      What happens after treatment?
                    </h3>{" "}
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      A protective crown is usually recommended to restore full strength and prevent cracking.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          <div className="features-section">
            <h2 className="features-heading">
              Where Can You Get Endodontic Care in Levittown?
            </h2>
            <p className="features-description">
              White Hill Dental is a top-rated choice for endodontic treatment near me in Levittown. Our experienced team is committed to stopping infection early, protecting vulnerable teeth, and helping you enjoy a strong, confident smile again. Contact us today - your natural tooth deserves the best care.
            </p>
          </div>
          <BookCallBtn />
        </div>
      </main>
    </div>
  );
}
