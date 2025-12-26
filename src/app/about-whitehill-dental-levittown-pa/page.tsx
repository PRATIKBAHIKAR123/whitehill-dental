"use client";

import React, { useState } from "react";
import { Fade, Slide, Zoom, Bounce } from "react-awesome-reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import Link from "next/link";
import BookingModal from "../booking/bookingScreen";
import { contactDetails } from "@/lib/hooks/addressDetails";

const services = [
  {
    icon: "/Images/icons/tooth-implant.png",
    price: "1199",
    title: "Dental Implant",
  },
  {
    icon: "/Images/icons/teeth-whitening.png",
    price: "299",
    title: "Teeth Whitening",
  },
  {
    icon: "/Images/icons/braces (1).png",
    price: "250",
    title: "Braces",
  },
];

const features = [
  {
    icon: "/Images/icons/emergency denstiry.png",
    title: "Experienced & Friendly Team",
    desc: "Our dentists bring years of clinical expertise and treat every patient like family.",
  },
  {
    icon: "/Images/icons/orthodontics.png",
    title: "Emergency Dental Care",
    desc: "We provide advanced care for dental emergencies to ensure you're never left in pain",
  },
  {
    icon: "/Images/icons/dental-floss.png",
    title: "Full Range of Treatments",
    desc: "From cosmetic enhancements to restorative work and pediatric care — everything under one roof.",
  },
];

const team = [
  {
    img: "/Images/Team/Hala Elsamna.webp",
    name: "Dr. Steven Reff, DDS",
    role: "Doctor of Dental Surgery",
    time: "11 am - 03 pm",
    rating: 5.0,
    slug: "providers/manreet-kaur-levittown-pa-dentist",
  },
  {
    img: "/Images/Team/Dalia Khan.webp",
    name: "Dr. Kinjal Mehta, DDS",
    role: "Doctor of Dental Surgery",
    time: "11 am - 03 pm",
    rating: 5.0,
    slug: "providers/kinjal-mehta-levittown-pa-dentist",
  },

  {
    img: "/Images/Team/Steven Reff.webp",
    name: "Dr. Manreet Kaur, DDS",
    role: "Doctor of Dental Surgery",
    time: "11 am - 03 pm",
    rating: 5.0,
    slug: "providers/steven-reff-levittown-pa-dentist",
  },
];

const testimonials = [
  {
    img: "/Images/dental1.jpg",
    name: "Albert Rusho",
    service: "Root Canals",
    text: "The dental care I received was exceptional. The team maintained my healthy teeth with professional expertise, ensuring my comfort throughout the entire procedure. I couldn't be more satisfied with the results.",
  },
];

export default function AboutUsClient() {
  const { ref, inView } = useInView();
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="w-full min-h-screen bg-background text-foreground font-sans overflow-x-hidden relative">
      <div className="details-page-header-section">
        <h1>About WhiteHill Dental</h1>
        <h2 className="text-center">
          Keeping Levittown Smiling - One Family at a Time 
        </h2>
      </div>

      <section className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 py-8 sm:py-12 lg:py-16 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="flex-1 space-y-4 sm:space-y-6 lg:pr-8 order-2 lg:order-1 w-full">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-primary leading-tight">
            White Hill Dental - Built for Family Smiles
          </h2>
          <p>
            Every smile deserves a team that understands more than just teeth - a team that understands people. {" "}
            <b>White Hill Dental</b> was created to bring that level of care to families across Levittown and the surrounding Bucks County community.
          </p>
          <p>
            Conveniently located at{" "}<strong>1146 Bristol Oxford Valley Rd, Levittown, PA 19057</strong>, our office welcomes patients from:
            <br/>
            <ul className="list-disc ml-4">
              <li>Levittown<strong>(19054, 19055, 19056, 19057)</strong></li>
              <li>Fairless Hills <strong>(19030)</strong></li>
              <li>Fallsington <strong>(19054)</strong></li>
              <li>Bristol & Tullytown <strong>(19007)</strong></li>
            </ul>
          </p>
          <p>
            Here, dentistry goes beyond the chair. Kids can enjoy our
            {" "}<strong>in-office movie theater</strong>,
            helping them feel excited for appointments. Adults benefit from our experience in cosmetic dentistry - including Invisalign®, whitening, implants, and smile enhancements - for results that look beautiful and natural. And when urgent dental needs arise, our team provides support quickly with
            <strong>same-day emergency visits</strong>
          </p>
          <p>
            We use{" "}
            <strong>advanced digital technology</strong>
            not as a selling point, but because your smile deserves accuracy and efficiency at every step. Our approach blends clinical excellence with the kind of personal attention that helps patients feel understood, respected, and confident in their care decisions.
          </p>
          <p>
            Financial transparency matters to us, too. With
            {" "}<strong>Medicaid acceptance</strong>, most major insurance plans, and flexible payment options for those without coverage, families can focus on their health - not their bills. At White Hill Dental,
            {" "}<strong>quality care isn’t a luxury - it’s the standard you can count on</strong>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4 sm:mt-6 items-center sm:items-center">
            <Button
              onClick={() => setIsBookingOpen(true)}
              className="py-6 px-12 bg-primary text-md text-white hover:bg-secondary/80 w-full"
            >
              Book Appointment
            </Button>
          </div>
        </div>
        <div className="flex-1 flex justify-center lg:justify-end order-1 lg:order-2 w-full">
          <div>
            <img
              src="/Images/banners/about-us-1.webp"
              alt="Dentists with patient"
              className="rounded-xl shadow-lg w-full max-w-sm sm:max-w-md lg:max-w-lg object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <div>
        <section className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 py-8 sm:py-12 lg:py-16 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
          <div className="flex-1 flex justify-center lg:justify-start mb-6 lg:mb-0 order-2 lg:order-1 w-full">
            <img
              src="/Images/banners/about-us.webp"
              alt="Dental procedure"
              className="rounded-xl shadow-lg w-full max-w-sm sm:max-w-md lg:max-w-lg object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex-1 lg:pl-12 order-1 lg:order-2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 sm:mb-6 text-primary mt-2">
              Discover the Experience at White Hill Dental in Levittown, PA
            </h2>
            <p>
              <strong>White Hill Dental</strong> delivers an elevated dental experience built around trust, comfort, and real results. Families across <strong>Levittown and Bucks County</strong> rely on us because:
            </p>
            <p className="mb-4 sm:mb-6">
              <ul className="list-disc ml-4">
                <li>
                  <span className="font-bold">
                    A True Family Practice
                  </span>{" "}
                  - Kids, teens, adults, and seniors all receive age-specific care tailored to their needs
                </li>
                <li>
                  <span className="font-bold">Experienced Cosmetic Dentistry </span>{" "}
                  - From Invisalign® to whitening, we help you achieve a confident, natural-looking smile
                </li>
                <li>
                  <span className="font-bold">
                    Same-Day Help When It Matters Most
                  </span>{" "}
                  - Fast relief for dental emergencies with immediate attention and treatment options
                </li>
                <li>
                  <span className="font-bold">Technology That Improves Every Visit</span> - Digital imaging, efficient treatments, and modern tools create a smooth, precise experience
                  
                </li>
                <li>
                  <span className="font-bold">Affordable Care Without the Stress</span> - We accept <strong>Medicaid</strong>, most insurances, and provide flexible financial options for every budget
                  
                </li>
              </ul>
            </p>
            {/* <div className="space-y-4 sm:space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center md:items-start gap-3 sm:gap-4">
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-8 h-8 sm:w-12 sm:h-12 mt-1 flex-shrink-0"
                    loading="lazy"
                  />
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-primary mb-1">{feature.title}</h3>
                    <p>
                      {feature.title === "Emergency Dental Care" ? (
                        <>
                          We provide advanced care for dental emergencies
                          to ensure you're never left in pain
                        </>
                      ) : (
                        feature.desc
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div> */}
          </div>
        </section>
      </div>

      {/* Team Section */}
      <div>
        <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-center mb-6 sm:mb-10 text-primary">
            Say Hello to Our White Hill Dental Providers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-2 sm:gap-6 lg:gap-4">
            {team.map((member, index) => (
              <Link
                href={`/${member.slug}`}
                key={index}
                className="bg-card rounded-lg p-4 sm:p-6 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-shadow"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full object-cover mb-3 sm:mb-4 border-4 border-primary"
                  loading="lazy"
                />
                <h3 className="text-sm sm:text-base lg:text-lg font-bold text-primary mb-1">
                  {member.name}
                </h3>
                {/* <div className="flex gap-1 font-bold items-center text-xs sm:text-sm">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 text-yellow-500 fill-current"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.204 3.707a1 1 0 00.95.69h3.905c.969 0 1.371 1.24.588 1.81l-3.158 2.294a1 1 0 00-.364 1.118l1.204 3.707c.3.921-.755 1.688-1.538 1.118l-3.158-2.294a1 1 0 00-1.176 0l-3.158 2.294c-.783.57-1.838-.197-1.538-1.118l1.204-3.707a1 1 0 00-.364-1.118L2.322 9.134c-.783-.57-.38-1.81.588-1.81h3.905a1 1 0 00.95-.69l1.204-3.707z" />
                    </svg>
                  ))} {' '}5.0 Rating
                </div> */}
              </Link>
            ))}
          </div>
        </section>
      </div>

      {/* Call to Action Section */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <a
            href={`tel:${contactDetails.phone}`}
            className="w-full flex flex-col border border-primary text-primary rounded-lg px-4 py-3 hover:opacity-50 text-xs text-center sm:text-sm font-medium transition"
          >
            <span className="text-sm sm:text-base">Call Us Today</span>
            {contactDetails.phone}
          </a>
          <button
            onClick={() => setIsBookingOpen(true)}
            className="w-full flex flex-col bg-primary text-white rounded-lg px-4 py-3 hover:bg-secondary text-xs sm:text-sm font-medium transition"
          >
            Book Online
            <span className="text-sm sm:text-base">
              Schedule Your Appointment Now
            </span>
          </button>
        </div>
      </section>

      <BookingModal open={isBookingOpen} setOpen={setIsBookingOpen} />
    </div>
  );
}
