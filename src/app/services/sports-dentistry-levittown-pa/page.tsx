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

export default function SportsDentistryPage() {
  const features = [
    {
      icon: "/Images/icons/medicine.png",
      title: "Custom Athletic Mouthguards",
      description:
        "",
      points: [
        "Made from impressions for a secure, comfortable fit",
        "Helps cushion teeth, lips, and jaw from impact",
        "More durable and protective than store-bought guards",
        "Suitable for contact and non-contact sports alike",
      ],
    },
    {
      icon: "/Images/icons/Smart Treatment Decisions Under Pressure.png",
      title: "Dental Injury Management for Athlete",
      description:
        "",
      points: [
        "Evaluation and stabilization after chips, fractures, or trauma",
        "Treatment options to repair or replace damaged teeth",
        "Guidance on handling knocked-out or displaced teeth",
        "Follow-up care to monitor healing and restore full function",
      ],
    },
    {
      icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
      title: "Ongoing Protection for Active Smiles",
      description:
        "",
      points: [
        "Regular exams to check for wear, clenching, or grinding",
        "Mouthguard replacement plans for growing children",
        "Education for families on when and how to use guards",
        "Supportive care to keep athletes in the game with healthy smiles",
      ],
    },
  ];
  return (
    <div className="flex min-h-screen bg-gray-50">
      <main className="details-page-container">
        <div className="details-page">
          <div className="details-page-header-section">
            <Fade direction="up" duration={1000}>
              <h1>Sports Dentistry in Levittown, PA</h1>
            </Fade>
            <Fade direction="down" duration={1000}>
              <h2 className="text-center">
                Professional Protection for Active Smiles | White Hill Dental
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
                    src="/Images/services/sports-dentistry.webp"
                    alt="Main Banner"
                  />
                </div>
              </div>
            </div>

            {/* Text Section with Fade-in after delay */}
            <div className="desc-text-section">
              <div className="desc-text-subtitle">Sports Dentistry</div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                What You Need to Know About Sports Dentistry
              </h2>
              <p>
                Contact and high-energy sports can put teeth, gums, and jaws at risk - even with helmets and pads. Sports dentistry focuses on preventing injuries with properly fitted mouthguards and providing prompt care when accidents happen. From chipped teeth to dental trauma, having a trusted dentist ready to help can make all the difference for athletes and their families.
              </p>
              <p>
                We regularly see patients searching for sports dentist near me and custom sports mouthguards near me in Levittown (19054, 19055, 19056, 19057), as well as nearby communities including Fairless Hills (19030), Fallsington (19054), Bristol (19007), and Tullytown (19007). Whether you’re a student athlete or a weekend player, White Hill Dental is here to help protect your smile season after season.
              </p>
            </div>
          </div>
          <div className="wcu-section">
            <div className="wcu-text-section">
              <div className="wcu-title">
                <h2>
                  Your Best Choice for Sports Dentistry in Levittown
                </h2>
              </div>
              <div className="wcu-points-section">
                <ul className="wcu-points">
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Custom-Fit Mouthguards for Kids, Teens & Adults
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Experience with Sports-Related Dental Injuries
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Gentle, Supportive Care for Young Athletes{" "}
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Options That Work with Your Budget & Insurance{" "}
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
            <h2 className="features-heading">Explore Our Sports Dentistry Solutions</h2>
            <p className="features-description">
              Athletes at every level deserve protection that keeps up with their performance. Our sports dentistry services are designed to reduce injury risk, manage emergencies, and support long-term oral health for active patients.
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
            <h2 className="faq-heading">Sports Dentistry FAQs</h2>
            <div className="faq-acc-container">
              <Accordion type="single" collapsible className="w-full space-y-6">
                <AccordionItem value="q1" className="faq-acc">
                  <AccordionTrigger className="faq-qn rounded-md">
                    <h3 className="text-lg">
                      Do all athletes need a mouthguard?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans ">
                    Yes - any sport with contact, fast movement, or equipment can lead to dental injuries, and a mouthguard provides important protection.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q2" className="faq-acc">
                  <AccordionTrigger className="faq-qn rounded-md">
                    <h3 className="text-lg">
                      How often should my child’s mouthguard be replaced?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p className="mt-2">
                      For growing kids and teens, a new guard is usually recommended each year or whenever fit or comfort changes. 
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q3" className="faq-acc">
                  <AccordionTrigger className="faq-qn rounded-md">
                    <h3 className="text-lg">
                      Can a custom mouthguard help if I grind my teeth during sports?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Yes - custom guards can help absorb clenching forces and reduce wear on the teeth.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q5" className="faq-acc">
                  <AccordionTrigger className="faq-qn rounded-md">
                    <h3 className="text-lg">
                      What should I do if a tooth gets knocked out while playing?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p className="mt-2">
                      Place the tooth in milk or saliva, avoid touching the root, and contact us immediately for the best chance of saving it.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q6" className="faq-acc">
                  <AccordionTrigger className="faq-qn rounded-md">
                    <h3 className="text-lg">
                      Are custom mouthguards worth it compared to store-bought versions?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p className="mt-2">
                      Custom mouthguards generally offer better fit, protection, and comfort, making them more effective for regular sports use.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          <div className="features-section">
            <h2 className="features-heading">
              Where Can You Get Sports Dentistry in Levittown?
            </h2>
            <p className="features-description">
              White Hill Dental is a top-rated choice for sports dentistry and custom mouthguards near me in Levittown. From preventing injuries to treating unexpected dental trauma, our team is here to keep athletes’ smiles safe, strong, and game-ready. Schedule an appointment today to protect your smile on and off the field.
            </p>
          </div>
          <BookCallBtn />
        </div>
      </main>
    </div>
  );
}
