import type { Metadata } from "next";
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
import { generateServiceMetadata } from "@/lib/metadata";

export const metadata: Metadata = generateServiceMetadata(
  "dental-implants",
  "/Images/services/dental-implants.webp"
);

export default function DentalImplantsPage() {
  const features = [
    {
      icon: "/Images/icons/medicine.png",
      title: "Single Tooth Implant",
      description:
        "",
      points: [
        "Ideal for replacing one missing tooth",
        "Prevents bite issues and bone loss",
        "Designed to blend perfectly with surrounding teeth",
        "Strong and stable for everyday chewing",
      ],
    },
    {
      icon: "/Images/icons/dental-drill.png",
      title: "Full-Arch Implant Solutions",
      description:
        "",
      points: [
        "Restores an entire upper or lower arch confidently",
        "Eliminates slipping or discomfort from removable dentures",
        "Provides stability for eating your favorite foods again",
        "Designed to last and support overall oral health",
      ],
    },
    {
      icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
      title: "Implant Bridges",
      description:
        "",
      points: [
        "Replaces multiple missing teeth in a row",
        "No reliance on natural teeth for support",
        "Preserves bone and maintains facial structure",
        "Customized for a natural look and feel",
      ],
    },
  ];
  return (
    <div className="flex min-h-screen bg-gray-50">
      <main className="details-page-container">
        <div className="details-page">
          <div className="details-page-header-section">
            <Fade direction="up" duration={1000}>
              <h1>Dental Implants in Levittown, PA</h1>
            </Fade>
            <Fade direction="down" duration={1000}>
              <h2 className="text-center">
                Strong, Natural-Looking Tooth Replacement Options | White Hill Dental
              </h2>
            </Fade>
          </div>
          <div className="details-page-desc-section">
            {/* Image Section */}
            <div className="image_section">
              <div className="image_section-cover">
                <div className="main-image">
                  <img
                    src="/Images/services/dental-implants.webp"
                    alt="Main Banner"
                  />
                </div>
              </div>
            </div>

            {/* Text Section with Fade-in after delay */}
            <div className="desc-text-section">
              <div className="desc-text-subtitle">Dental Implants</div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                What You Need to Know About Dental Implants
              </h2>
              <p>Dental implants are a modern, long-term solution for replacing missing teeth. They are securely placed into the jawbone to mimic the natural tooth root - giving you the ability to chew, smile, and speak comfortably again. Implants help preserve bone structure, prevent shifting teeth, and restore your smile with results that feel completely natural.</p>
              <p>
                If you’re searching for dental implants near me or a trusted implant dentist in{" "}
                <strong>Levittown (19054, 19055, 19056, 19057)</strong>
                ,{" "}White Hill Dental proudly serves patients throughout
                {" "}<strong>Fairless Hills (19030), Fallsington (19054), Bristol (19007)</strong>{" "}and{" "}
                <strong>Tullytown (19007)</strong>.
                Combining advanced technology and personalized care, we help rebuild smiles with lasting confidence and function.
              </p>
            </div>
          </div>
          <div className="wcu-section">
            <div className="wcu-text-section">
              <div className="wcu-title">
                <h2>
                  Your Best Choice for Dental Implants in Levittown
                </h2>
              </div>
              <div className="wcu-points-section">
                <ul className="wcu-points">
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Experienced Implant Providers Focused on Precision
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Long-Lasting Materials for Natural Results
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Comfortable Care with Modern Surgical Techniques{" "}
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Options That Work with Your Budget & Insurance
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
            <h2 className="features-heading">Explore Our Dental Implant Solutions</h2>
            <p className="features-description">
              Every smile is different - and missing teeth affect each patient in their own way. At White Hill Dental, we provide implant options designed to restore confidence, comfort, and health.
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
            <h2 className="faq-heading">Dental Implants FAQs</h2>
            <div className="faq-acc-container">
              <Accordion type="single" collapsible className="w-full space-y-6">
                <AccordionItem value="q1" className="faq-acc">
                  <AccordionTrigger className="faq-qn rounded-md">
                    <h3 className="text-lg">
                      How long do dental implants last?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans ">
                    With proper care, implants can last decades - often a lifetime.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q2" className="faq-acc">
                  <AccordionTrigger className="faq-qn rounded-md">
                    <h3 className="text-lg">Am I a candidate for dental implants?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p className="mt-2">
                      Most adults with missing teeth may qualify, as long as gums and jawbone are healthy enough for support.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q3" className="faq-acc">
                  <AccordionTrigger className="faq-qn rounded-md">
                    <h3 className="text-lg">Is the implant procedure painful?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      With advanced numbing and comfort options, most patients experience very little discomfort.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q5" className="faq-acc">
                  <AccordionTrigger className="faq-qn rounded-md">
                    <h3 className="text-lg">
                      Do implants look like natural teeth?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p className="mt-2">
                      Yes - implants are designed to match the shape, shade, and function of real teeth.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q6" className="faq-acc">
                  <AccordionTrigger className="faq-qn rounded-md">
                    <h3 className="text-lg">
                      How do I take care of my dental implants?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p className="mt-2">
                      Good brushing, flossing, and regular dental visits keep them healthy - just like natural teeth.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          <div className="features-section">
            <h2 className="features-heading">
              Where Can You Get Dental Implants in Levittown?
            </h2>
            <p className="features-description">
              White Hill Dental is a top-rated choice for dental implants in Levittown. If you’re looking for the best implant dentist near me to restore missing teeth with long-lasting results, our experienced team is here to help. Schedule your consultation today and bring back a confident, complete smile!
            </p>
          </div>
          <BookCallBtn />
        </div>
      </main>
    </div>
  );
}
