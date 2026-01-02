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

export default function KidsAndChildrenPage() {
  const features = [
    {
      icon: "/Images/icons/medicine.png",
      title: "Early Growth & Smile Development",
      description:
        "",
      points: [
        "First-tooth and early-childhood checkups",
        "Guidance for thumb-sucking or pacifier habits",
        "Monitoring jaw growth and tooth eruption",
        "Tips for better brushing and healthy routines",
      ],
    },
    {
      icon: "/Images/icons/dental-drill.png",
      title: "Cavity Prevention & Tooth Protection",
      description:
        "",
      points: [
        "Gentle cleanings to reduce plaque and buildup",
        "Fluoride for stronger enamel",
        "Sealants to protect hard-to-reach molars",
        "Nutrition and home-care education for parents",
      ],
    },
    {
      icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
      title: "Restorative Care Made Comfortable",
      description:
        "",
      points: [
        "Tooth-colored fillings for natural results",
        "Emergency care for dental injuries",
        "Space maintainers for early tooth loss",
        "Calming appointments for anxious kids",
      ],
    },
  ];
  return (
    <div className="flex min-h-screen bg-gray-50">
      <main className="details-page-container">
        <div className="details-page">
          <div className="details-page-header-section">
            <Fade direction="up" duration={1000}>
              <h1>Pediatric Dentistry in Levittown, PA</h1>
            </Fade>
            <Fade direction="down" duration={1000}>
              <h2 className="text-center">
                A Positive Dental Experience for Every Child | White Hill Dental
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
                    src="/Images/services/kids-dentistry.webp"
                    alt="Main Banner"
                  />
                </div>
              </div>
            </div>

            {/* Text Section with Fade-in after delay */}
            <div className="desc-text-section">
              <div className="desc-text-subtitle">Children’s Dentistry</div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                Your Best Choice for Pediatric Dentistry in Levittown
              </h2>
              <p>
                Creating a great dental foundation begins early - and the right care can shape a child’s confidence for life. At White Hill Dental, we focus on fun, gentle, and educational visits so kids feel relaxed and excited about taking care of their teeth. From their first checkup through the teenage years, we support growth, prevention, and healthy habits that lead to lifelong smiles.
              </p>
              <p>
                We proudly care for families looking for pediatric dentistry near me in{" "}
                <Link
                  href="/service-areas/levittown-pa-dentist-near-you"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Levittown (19054, 19055, 19056, 19057)
                </Link>
                , as well as surrounding communities including{" "}
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
                . Parents trust us because we treat every child with patience, kindness, and expert care tailored to their age and needs.
              </p>
            </div>
          </div>
          <div className="wcu-section">
            <div className="wcu-text-section">
              <div className="wcu-title">
                <h2>
                  Your Best Choice for Pediatric Dentistry in Levittown
                </h2>
              </div>
              <div className="wcu-points-section">
                <ul className="wcu-points">
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Kid-Friendly Team That Encourages Confidence
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Gentle Techniques for Stress-Free Visits
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Comprehensive Prevention for Growing Smiles
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Affordable Care with Insurance Flexibility
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Convenient Care for Local Bucks County Families
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
              Explore Our Pediatric Dental Solutions
            </h2>
            <p className="features-description">
              Little smiles change quickly - and we provide the right support at every age so kids stay comfortable, healthy, and happy at the dentist. Our personalized approach helps build strong habits early, ensuring confident smiles that grow brighter year after year.
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
            <h2 className="faq-heading">Pediatric Dentistry FAQs</h2>
            <div className="faq-acc-container">
              <Accordion type="single" className="w-full space-y-5">
                <AccordionItem value="q1" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      When should my child first see a dentist?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      We recommend an initial visit by age one or when the first teeth appear.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q2" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      How often should kids visit the dentist?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Regular checkups every six months help prevent cavities and track development.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q3" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      What can parents do to support dental health at home?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Brush twice daily with fluoride toothpaste, floss once daily, and limit sugary snacks/drinks.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q4" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Can you help children who feel nervous at the dentist?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Absolutely - we take time to explain procedures gently and make visits fun and comfortable.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q4" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Do you treat children with special healthcare needs?
                    </h3>{" "}
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Yes - our team provides patient, individualized care adapted to each child’s comfort.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          <div className="features-section">
            <h2 className="features-heading">
              Where Can You Get Pediatric Dentistry in Levittown? 
            </h2>
            <p className="features-description">
              White Hill Dental is a top-rated provider of children’s dentistry in Levittown. If you’re searching for the best pediatric dentist near me, our caring team is here to protect your child’s smile and make dental visits something they look forward to. Schedule your child’s visit today and let bright, healthy smiles begin!
            </p>
          </div>
          <BookCallBtn />
        </div>
      </main>
    </div>
  );
}
