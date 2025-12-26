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
import { CheckCircle } from "lucide-react";
import BookCallBtn from "../book-call-btn";
import { generateServiceMetadata } from "@/lib/metadata";
import Link from "next/link";

export const metadata: Metadata = generateServiceMetadata(
  "emergency-dentistry",
  "/Images/services/emergency-dentistry.webp"
);

export default function EmergencyDentistryPage() {
  const features = [
    {
      icon: "/Images/icons/medicine.png",
      title: "Severe Toothache & Gum Infections",
      description:
        "",
      points: [
        "Same-day assessment to determine the cause of pain",
        "Gentle treatments to relieve pressure and discomfort",
        "Root canal therapy when necessary to save the tooth",
        "Infection control to support faster, healthier healing",
      ],
    },
    {
      icon: "/Images/icons/Smart Treatment Decisions Under Pressure.png",
      title: "Damaged Fillings, Crowns, or Dentures",
      description:
        "",
      points: [
        "Quick solutions to restore chewing and speaking comfort",
        "Temporary fixes available if a permanent option requires time",
        "Custom restorations crafted for a natural look and feel",
        "Bite adjustments to prevent future irritation",
      ],
    },
    {
      icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
      title: "Broken, Chipped, or Knocked-Out Teeth",
      description: "",
      points: [
        "Immediate attention to maintain tooth structure and appearance",
        "Repair options including crowns, bonding, or veneers",
        "Re-implantation attempts for lost teeth when possible",
        "Ongoing care aimed at restoring stability and strength",
      ],
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="details-page-container">
        <div className="details-page">
          <div className="details-page-header-section">
            <Fade direction="up" duration={1000}>
              <h1>Emergency Dentist in Levittown, PA</h1>
            </Fade>
            <Fade direction="down" duration={1000}>
              <h2 className="text-center">
                Fast Relief When It Matters Most | White Hill Dental
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
                    src="/Images/services/emergency-dentistry.webp"
                    alt="Main Banner"
                  />
                </div>
              </div>
            </div>

            {/* Text Section with Fade-in after delay */}
            <div className="desc-text-section">
              <div className="desc-text-subtitle">Emergency Dentistry</div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                What You Need to Know About Emergency Dentistry
              </h2>
              <p>
                Emergency dentistry is essential for treating oral health problems that require prompt attention-whether it’s intense tooth pain, damaged teeth, sudden swelling, or complications with existing dental work. At White Hill Dental, we provide emergency dental care in Levittown designed to alleviate discomfort quickly and prevent further harm to your teeth and gums.
              </p>
              <p>
                We regularly support patients who need{" "}
                <strong>
                  {" "}
                  urgent dental care in Bucks County
                </strong>
                ,{" "} offering same-day availability whenever possible. Our location is centrally placed to serve individuals searching for
                <strong>
                  {" "}
                  an emergency dentist in Levittown (19054, 19055, 19056, 19057),
                </strong>
                , along with nearby neighborhoods including
                <strong>
                  Fairless Hills (19030), Fallsington (19054), Bristol (19007),
                </strong>{" "}and <strong>Tullytown (19007)</strong>{" "}
                When discomfort interferes with your day, knowing you have a trusted dental team close by makes all the difference. With timely evaluation and skilled treatment, we help restore comfort and protect your long-term oral health.
              </p>
            </div>
          </div>

          <div className="wcu-section">
            <div className="wcu-text-section">
              <div className="wcu-title">
                <h2>
                  Your Best Choice for Emergency Dentistry in Levittown
                </h2>
              </div>
              <div className="wcu-points-section">
                <ul className="wcu-points">
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Rapid Relief with Same-Day Visits
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Advanced Solutions for Urgent Dental Problems
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Caring Experts Focused on Your Comfort
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Affordable Care with Insurance & Payment Flexibility
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Easy-to-Reach Practice in the Heart of Levittown
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
              Explore Our Emergency Dentistry Solutions
            </h2>
            <p className="features-description text-center">
              Dental issues that require urgent attention can disrupt your day and your wellbeing. At White Hill Dental, our priority is to quickly eliminate discomfort while preserving your natural teeth whenever possible. Whether your emergency is due to infection, trauma, or a restoration that suddenly fails, our team is prepared with the right care at the right time.
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
            <h2 className="faq-heading">Emergency Dentistry FAQs</h2>
            <div className="faq-acc-container">
              <Accordion type="single" collapsible className="w-full space-y-6">
                <AccordionItem value="q1" className="faq-acc">
                  <AccordionTrigger className="faq-qn rounded-md">
                    <h3 className="text-lg">
                      {" "}
                      How do I know if I’m experiencing a true dental emergency?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans ">
                    If your symptoms include strong pain, swelling, bleeding, or damage that affects your ability to eat or speak, you should seek urgent dental care.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q2" className="faq-acc">
                  <AccordionTrigger className="faq-qn rounded-md">
                    <h3 className="text-lg">
                      {" "}
                      Can I get a same-day appointment for emergency treatment?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    Yes - White Hill Dental offers same-day availability whenever possible to help you get relief quickly and prevent the concern from getting worse.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q3" className="faq-acc">
                  <AccordionTrigger className="faq-qn rounded-md">
                    <h3 className="text-lg">
                      What should I do if I have a knocked-out tooth?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p className="mb-2">
                      Handle the tooth gently by the crown, keep it moist (in milk if available), and reach us right away. Fast action greatly increases the chance of saving the tooth.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q4" className="faq-acc">
                  <AccordionTrigger className="faq-qn rounded-md">
                    <h3 className="text-lg"> Are emergency dental visits more expensive?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    Costs vary based on the treatment needed, but many insurance plans cover emergency care. We also provide flexible payment options to help make care accessible.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q5" className="faq-acc">
                  <AccordionTrigger className="faq-qn rounded-md">
                    <h3 className="text-lg">
                      Do you accept walk-ins for emergency dental care?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    We do our best to accommodate walk-in emergency patients, especially when pain, infection, or trauma is involved.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          {/* Call to Action Section */}
        </div>
        <div className="features-section">
          <h2 className="features-heading">
            Where Can You Get Emergency Dentistry in Levittown?
          </h2>
          <p className="features-description">
            If you’re urgently searching online for the best emergency dentist near me, White Hill Dental is your top-rated choice for fast, compassionate care in Levittown. Our expert team is ready to relieve pain, protect your smile, and provide same-day treatment whenever possible. Call now and get the emergency dental care you need - right when you need it.
          </p>
          <BookCallBtn />
        </div>
      </div>
    </div>
  );
}
