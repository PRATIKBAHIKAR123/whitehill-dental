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
      title: "Full Dentures for a Complete Smile",
      description:
        "",
      points: [
        "Replace an entire upper or lower arch of teeth",
        "Help maintain proper facial shape and support lips & cheeks",
        "Designed to stay comfortable throughout the day",
        "Crafted to look realistic and enhance your smile",
      ],
    },
    {
      icon: "/Images/icons/dental-drill.png",
      title: "Partial Dentures for Targeted Replacement",
      description:
        "",
      points: [
        "Replace multiple missing teeth while preserving healthy ones",
        "Prevent shifting and bite issues over time",
        "Removable and simple to clean",
        "A discreet option that blends into your natural smile",
      ],
    },
    {
      icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
      title: "Implant-Supported Dentures for Maximum Stability",
      description:
        "",
      points: [
        "Snap securely onto implants - no rubbing or slipping",
        "Improve chewing power for more food choices",
        "Help prevent bone loss for long-term oral health",
        "A closer feel to natural teeth than traditional dentures",
      ],
    },
  ];
  return (
    <div className="flex min-h-screen bg-gray-50">
      <main className="details-page-container">
        <div className="details-page">
          <div className="details-page-header-section">
            <Fade direction="up" duration={1000}>
              <h1>Dentures in Levittown, PA</h1>
            </Fade>
            <Fade direction="down" duration={1000}>
              <h2 className="text-center">
                Custom Dentures That Look Great and Feel Even Better | White Hill Dental
              </h2>
            </Fade>
          </div>
          <div className="details-page-desc-section">
            {/* Image Section */}
            <div className="image_section">
              <div className="image_section-cover">
                <div className="main-image">
                  <img src="/Images/services/dentures.webp" alt="dentures" />
                </div>
              </div>
            </div>

            {/* Text Section with Fade-in after delay */}
            <div className="desc-text-section">
              <div className="desc-text-subtitle">Dentures</div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                What You Need to Know About Dentures
              </h2>
              <p>
                A complete smile plays a major role in how you eat, speak, and express yourself. When several or all teeth are missing, dentures offer a reliable and personalized way to bring back confidence and everyday comfort. At White Hill Dental, we design dentures that feel secure, fit properly, and look incredibly natural - so you can enjoy life without worry.
              </p>
              <p>
                Patients searching for dentures near me in{" "}
                <Link
                  href="/service-areas/levittown-pa-dentist-near-you"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Levittown (19054, 19055, 19056, 19057)
                </Link>
                , and nearby communities like{" "}
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
                , trust our friendly team for customized care and long-lasting results.
                {" "}<strong>With today’s advanced materials and technology, your dentures can blend seamlessly with your smile and support strong bite function. We’re here to help you smile confidently again - every meal, every conversation, and every day.</strong>
              </p>
            </div>
          </div>
          <div className="wcu-section">
            <div className="wcu-text-section">
              <div className="wcu-title">
                <h2>
                  Your Best Choice for Dentures in Levittown
                </h2>
              </div>
              <div className="wcu-points-section">
                <ul className="wcu-points">
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Expert Guidance to Help You Choose the Right Option
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Comfort-Focused Designs for a Secure Everyday Fit
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Modern Materials That Look Like Natural Teeth{" "}
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Solutions Personalized for Your Lifestyle & Budget
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Easy Access for Patients Across Bucks County
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
            <h2 className="features-heading">Explore Our Denture Solutions</h2>
            <p className="features-description">
              Every smile has different needs - which is why we customize every denture for stability, function, and appearance. Our goal is to ensure your replacement teeth not only look great but also help you eat, speak, and enjoy life comfortably every day.
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
                    <h3 className="text-lg">How long does it take to adjust to new dentures?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans ">
                    Most patients adapt within a few weeks as speech and chewing patterns adjust. 
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q2" className="faq-acc">
                  <AccordionTrigger className="faq-qn rounded-md">
                    <h3 className="text-lg">
                      Will dentures change how I speak?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p className="mt-2">
                      There is a brief learning period, but speech typically improves quickly with practice.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q3" className="faq-acc">
                  <AccordionTrigger className="faq-qn rounded-md">
                    <h3 className="text-lg">
                      Do dentures look natural?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Absolutely - modern dentures are designed to mimic natural tooth shape, shade, and alignment.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q4" className="faq-acc">
                  <AccordionTrigger className="faq-qn rounded-md">
                    <h3 className="text-lg">
                      How do I maintain my dentures?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p className="mt-2">
                      Clean them daily, handle carefully, and attend regular dental visits for evaluations and fit adjustments.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q5" className="faq-acc">
                  <AccordionTrigger className="faq-qn rounded-md">
                    <h3 className="text-lg">
                      Will I need to replace my dentures eventually?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p className="mt-2">
                      Yes - due to natural changes in bone and gums, most dentures need replacement every 5–10 years.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          <div className="features-section">
            <h2 className="features-heading">
              Where Can You Get Dentures in Levittown?
            </h2>
            <p className="features-description">
              White Hill Dental is a trusted provider of full dentures, partial dentures, and implant-supported dentures near me in Levittown. <Link href={'/providers'} className="text-blue-600 font-semibold hover:underline">Our dedicated team</Link> is here to restore comfort, confidence, and function with a smile that looks great and feels natural. Schedule your consultation today and rediscover the ease of a complete smile!
            </p>
          </div>
          <BookCallBtn />
        </div>
      </main>
    </div>
  );
}
