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
  "dentures-bayonne-nj",
  "/Images/services/dentures.webp"
);

export default function DenturesPage() {
  const features = [
    {
      icon: "/Images/icons/medicine.png",
      title: "Full Dentures",
      description:
        "For individuals missing all teeth in the upper or lower arch, full dentures restore your smile and provide everyday functionality.",
      points: [
        "Natural-looking design",
        "Improved chewing and speaking",
        "Enhanced facial support",
        "Secure, comfortable fit",
      ],
    },
    {
      icon: "/Images/icons/dental-drill.png",
      title: "Partial Dentures",
      description:
        "Ideal when some healthy teeth remain, partial dentures fill gaps while preserving your natural tooth structure.",
      points: [
        "Prevents teeth from shifting",
        "Removable and easy to clean",
        "Matches existing teeth in shape and shade",
        "Cost-effective and durable",
      ],
    },
    {
      icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
      title: "Implant-Supported Dentures",
      description:
        "For maximum stability, dentures can be anchored to dental implants placed in the jaw.",
      points: [
        "No slipping or irritation",
        "Strong bite force for better eating",
        "Helps maintain jawbone health",
        "Long-term natural comfort",
      ],
    },
  ];
  return (
    <div className="flex min-h-screen bg-gray-50">
      <main className="details-page-container">
        <div className="details-page">
          <div className="details-page-header-section">
            <Fade direction="up" duration={1000}>
              <h1>Dentures in Bayonne, NJ</h1>
            </Fade>
            <Fade direction="down" duration={1000}>
              <h2 className="text-center">
                Modern Dentures for Better Function in Bayonne | Urban Dental &
                Braces
              </h2>
            </Fade>
          </div>
          <div className="details-page-desc-section">
            {/* Image Section */}
            <div className="image_section">
              <div className="image_section-cover">
                <div className="main-image">
                  <img src="/Images/services/denture.avif" alt="dentures" />
                </div>
              </div>
            </div>

            {/* Text Section with Fade-in after delay */}
            <div className="desc-text-section">
              <div className="desc-text-subtitle">Dentures</div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                About Dentures
              </h2>
              <p>
                Missing teeth can affect more than your appearance - they can
                impact chewing, speaking, and confidence. At{" "}
                <Link href="/" className="text-primary hover:underline">
                  Urban Dental & Braces in Bayonne
                </Link>
                , we provide custom dentures designed to restore the look and
                function of your smile. Whether you are missing one tooth or
                several, our dentures are crafted to fit comfortably and provide
                a natural appearance.
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
                  Greenville (07305)
                </Link>
                , NJ and surrounding communities who are searching for "dentures
                near me" and reliable tooth replacement options.
              </p>
            </div>
          </div>
          <div className="wcu-section">
            <div className="wcu-text-section">
              <div className="wcu-title">
                <h2>
                  Top Reasons to Choose Urban Dental & Braces for Dentures
                </h2>
              </div>
              <div className="wcu-points-section">
                <ul className="wcu-points">
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Personalized Fit for Maximum Comfort
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Natural-Looking Design for a Confident Smile
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Skilled Team Experienced in Tooth Replacement Solutions{" "}
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Affordable Pricing and Financing Options
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Convenient Bayonne, NJ Location
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
            <h2 className="features-heading">Our Custom Denture Services</h2>
            <p className="features-description">
              Many patients are surprised by how comfortable and realistic
              today's dentures can be. The right solution depends on your oral
              health needs, lifestyle, and goals-and we're here to guide you
              every step of the way.
            </p>
            <p className="features-description">
              Here's how we help you{" "}
              <Link
                href="/services/crowns-and-bridges-levittown-pa"
                className="text-primary hover:underline"
              >
                replace missing teeth
              </Link>{" "}
              with confidence:
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
            <h2 className="faq-heading">Dentures FAQs</h2>
            <div className="faq-acc-container">
              <Accordion type="single" collapsible className="w-full space-y-6">
                <AccordionItem value="q1" className="faq-acc">
                  <AccordionTrigger className="faq-qn rounded-md">
                    <h3 className="text-lg">How long do dentures last?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans ">
                    With proper care, dentures typically last 5–10 years before
                    needing replacement or adjustment.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q2" className="faq-acc">
                  <AccordionTrigger className="faq-qn rounded-md">
                    <h3 className="text-lg">
                      Are dentures comfortable to wear?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p className="mt-2">
                      Today's dentures are designed for a precise fit. Some
                      adjustment is normal, but comfort improves quickly with
                      daily use.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q3" className="faq-acc">
                  <AccordionTrigger className="faq-qn rounded-md">
                    <h3 className="text-lg">
                      What is the difference between full and partial dentures?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Full dentures replace all teeth in an arch, while partial
                      dentures fill only the missing spaces and rely on
                      remaining teeth for support.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q4" className="faq-acc">
                  <AccordionTrigger className="faq-qn rounded-md">
                    <h3 className="text-lg">
                      How do implant-supported dentures work?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p className="mt-2">
                      Dental implants secure the denture in place, providing a
                      stable, more natural feel and preventing jawbone
                      deterioration.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q5" className="faq-acc">
                  <AccordionTrigger className="faq-qn rounded-md">
                    <h3 className="text-lg">
                      Are dentures covered by insurance?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p className="mt-2">
                      Most dental insurance plans include coverage for dentures.
                      We are happy to verify your benefits and discuss financing
                      options to fit your budget.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          <div className="features-section">
            <h2 className="features-heading">
              Considering Dentures in Bayonne?
            </h2>
            <p className="features-description">
              <Link
                href="/contact-whitehill-dental-levittown-pa"
                className="text-primary hover:underline"
              >
                Urban Dental & Braces
              </Link>{" "}
              provides comfortable, natural-looking dentures tailored to your
              needs. Whether you require full, partial, or implant-supported
              options, you'll receive personalized care and results that restore
              both function and confidence. Proudly serving Bayonne, Greenville,
              and surrounding communities - we're here to help you smile again!
            </p>
          </div>
          <BookCallBtn />
        </div>
      </main>
    </div>
  );
}
