import type { Metadata } from "next";
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
import { generateServiceMetadata } from "@/lib/metadata";
import Link from "next/link";

export const metadata: Metadata = generateServiceMetadata(
  "cosmetic-dentistry",
  "/Images/services/cosmetic-dentistry.webp"
);

export default function CosmeticDentistryPage() {
  const features = [
    {
      icon: "/Images/icons/medicine.png",
      title: "Smile Makeovers",
      description:
        "",
      points: [
        "Customized plans combining multiple treatments for stunning results",
        "Designed to correct alignment, color, and overall aesthetics",
        "Preview your new smile before treatment begins",
        "Tailored to your unique goals and facial profile",
      ],
    },
    {
      icon: "/Images/icons/dental-drill.png",
      title: "Metal-Free Dental Crowns",
      description:
        "",
      points: [
        "Strengthens damaged teeth with lifelike materials",
        "No metal lines - just a seamless, natural appearance",
        "Great for both function and cosmetic enhancement",
        "Durable and long-lasting protection",
      ],
    },
    {
      icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
      title: "Clear Aligner Therapy",
      description:
        "",
      points: [
        "Straightens teeth discreetly without metal braces",
        "Removable trays allow easy brushing, flossing, and eating",
        "Smooth, comfortable fit with minimal irritation",
        "Aesthetic solution for correcting crowding and gaps",
      ],
    },
  ];
  return (
    <div className="flex min-h-screen bg-gray-50">
      <main className="details-page-container">
        <div className="details-page">
          <div className="details-page-header-section">
            <h1>Cosmetic Dentistry in Levittown, PA</h1>
            <h2 className="text-center">
              Advanced Smile Enhancements Tailored to You | White Hill Dental
            </h2>
          </div>
          <div className="details-page-desc-section">
            {/* Image Section */}
            <div className="image_section">
              <div className="image_section-cover">
                <div className="main-image">
                  <img
                    src="/Images/services/cosmetic-dentistry.webp"
                    alt="Cosmetic Dentistry at White Hill Dental in Levittown PA"
                  />
                </div>
              </div>
            </div>

            {/* Text Section with Fade-in after delay */}
            <div className="desc-text-section">
              <div className="desc-text-subtitle">Cosmetic Dentistry</div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                What You Need to Know About Cosmetic Dentistry
              </h2>
              <p>Cosmetic dentistry is all about enhancing the appearance of your smile while maintaining a healthy, natural look. Whether you’re concerned about discoloration, uneven edges, gaps, or worn teeth, today’s cosmetic treatments can create noticeable improvements without changing who you are. At White Hill Dental, our approach blends beauty and function, giving you a smile that complements your facial features and feels comfortable every day.
              </p>
              <p>
                We proudly support patients who are searching for cosmetic dentistry near me in{" "}
                <Link
                  href="/service-areas/levittown-pa-dentist-near-you"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Levittown (19054, 19055, 19056, 19057)
                </Link>
                {" "}and surrounding communities such as{" "}
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
                . From quick enhancements to complete smile makeovers, <Link href={'/providers'} className="font-bold text-primary">our team</Link> focuses on personalized care that helps you look - and feel - your very best.
              </p>
            </div>
          </div>
          <div className="wcu-section">
            <div className="wcu-text-section">
              <div className="wcu-title">
                <h2>
                  Your Best Choice for Cosmetic Dentistry in Levittown
                </h2>
              </div>
              <div className="wcu-points-section">
                <ul className="wcu-points">
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Personalized Smile Design for Natural-Looking Results
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Advanced Techniques for Longer-Lasting Enhancements
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      A Comfortable, Stress-Free Treatment Experience
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Flexible Payment Options for Every Budget
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Convenient Location Serving Levittown Families
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
              Explore Our Cosmetic Dentistry Solutions
            </h2>
            <p className="features-description">
              Whether you want to make subtle enhancements or completely transform your smile, White Hill Dental offers advanced cosmetic treatments tailored to your goals. Our personalized approach ensures results that look beautiful, natural, and uniquely you.
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
            <h2 className="faq-heading">Cosmetic Dentistry FAQs</h2>
            <div className="faq-acc-container">
              <Accordion type="single" className="w-full space-y-5">
                <AccordionItem value="q1" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      How long do cosmetic dental results last?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Veneers and crowns can last many years with proper care, and aligner results can be maintained with retainers.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q2" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">Is cosmetic dentistry painful?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Most procedures are quick and minimally invasive, with little to no discomfort.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q3" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">Are cosmetic treatments only for appearance?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      No - they can also support better function, alignment, and bite balance.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q4" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Can I combine different procedures?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Yes, combining treatments is common and can help create a more dramatic overall enhancement.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q5" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Does insurance cover cosmetic procedures?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Most cosmetic care is elective, but financing options help make treatment more affordable.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          <div className="features-section">
            <h2 className="features-heading">Where Can You Get Cosmetic Dentistry in Levittown?</h2>
            <p className="features-description">
              White Hill Dental is a top-rated provider of cosmetic dentistry in Levittown. If you’re looking for a trusted cosmetic dentist near me to renew your smile, our team is here to help you achieve results that look beautiful and feel natural. Schedule a consultation today and rediscover your confidence!
            </p>
          </div>
          <BookCallBtn />
        </div>
      </main>
    </div>
  );
}
