import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";
import LoaderProvider from "@/components/ui/loader";
import FloatingTextForm from "@/components/ui/floatingButton";
import GoogleTagManager from "@/components/GoogleTagManager";
import DynamicMetadata from "../../DynamicMetadata";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // choose what you need
  variable: "--font-poppins", // optional: define CSS variable
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Dentist in Levittown, PA | White Hill Dental | Trusted Dental Care in Levittown",
  description:
    "White Hill Dental in Levittown, PA offers comprehensive preventive, cosmetic, and emergency dental services. Patients from Levittown (19054, 19055, 19056, 19057), Fairless Hills (19030), Fallsington (19054), Bristol (19007), and Tullytown (19007) rely on our experienced team. Quality dental care near you made comfortable and convenient.",
  keywords:
    "dentist harrisburg pa, cosmetic dentist harrisburg, family dentist harrisburg, dental implants harrisburg, root canal harrisburg, emergency dentist harrisburg",
  authors: [{ name: "White Hill Dental Levittown" }],
  creator: "White Hill Dental Levittown",
  publisher: "White Hill Dental Levittown",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.urbandentalnj.com",
    siteName: "White Hill Dental Levittown",
    title:
      "White Hill Dental Levittown | Dentist in Levittown, PA | Cosmetic & Family Dentist",
    description:
      "Top-rated cosmetic & family dentist in Harrisburg, PA. Serving patients from Colonial Park, Linglestown, Paxtang, and nearby. Call 717-745-2700 or visit us at 2017 Eg Drive, Suite 200, Harrisburg, PA 17110.",
    images: [
      {
        url: "/Images/Maple-logo.jpeg",
        width: 1200,
        height: 630,
        alt: "White Hill Dental Levittown",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "White Hill Dental Levittown | Dentist in Harrisburg, PA | Cosmetic & Family Dentist",
    description:
      "Top-rated cosmetic & family dentist in Harrisburg, PA. Serving patients from Colonial Park, Linglestown, Paxtang, and nearby. Call 717-745-2700 or visit us at 2017 Eg Drive, Suite 200, Harrisburg, PA 17110.",
    images: ["/Images/Maple-logo.jpeg"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <link rel="canonical" href="https://www.urbandentalnj.com" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/Images/Maple-logo.jpeg" />
        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Dentist",
  "name": "White Hill Dental",
  "url": "https://www.whitehilldentalpa.com",
  "logo": "https://www.whitehilldentalpa.com/path-to-your-logo.png",
  "image": "https://www.whitehilldentalpa.com/path-to-your-main-image.png",
  "priceRange": "$55 - $2999",
  "telephone": "+1-215-607-7200",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1146 Bristol Oxford Valley Rd",
    "addressLocality": "Levittown",
    "addressRegion": "PA",
    "postalCode": "19057",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 40.16566,
    "longitude": -74.87534
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "476"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Monday",
      "opens": "08:00",
      "closes": "17:30"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Tuesday",
      "opens": "08:00",
      "closes": "17:30"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Wednesday",
      "opens": "08:00",
      "closes": "17:30"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Thursday",
      "opens": "08:00",
      "closes": "17:30"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Friday",
      "opens": "08:00",
      "closes": "17:30"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "08:30",
      "closes": "15:00"
    }
  ],
  "areaServed": [
    {
      "@type": "City",
      "name": "Levittown",
      "sameAs": "https://en.wikipedia.org/wiki/Levittown,_Pennsylvania",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "PA",
        "postalCode": ["19054", "19055", "19056", "19057"]
      }
    },
    {
      "@type": "City",
      "name": "Fairless Hills",
      "sameAs": "https://en.wikipedia.org/wiki/Fairless_Hills,_Pennsylvania",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "PA",
        "postalCode": "19030"
      }
    },
    {
      "@type": "City",
      "name": "Fallsington",
      "sameAs": "https://en.wikipedia.org/wiki/Fallsington,_Pennsylvania",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "PA",
        "postalCode": "19054"
      }
    },
    {
      "@type": "City",
      "name": "Bristol",
      "sameAs": "https://en.wikipedia.org/wiki/Bristol,_Pennsylvania",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "PA",
        "postalCode": "19007"
      }
    },
    {
      "@type": "City",
      "name": "Tullytown",
      "sameAs": "https://en.wikipedia.org/wiki/Tullytown,_Pennsylvania",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "PA",
        "postalCode": "19007"
      }
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Services and Pricing",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "New Adult Patient Examination and X-rays - Special Promo" }, "priceSpecification": { "@type": "PriceSpecification", "price": "79", "priceCurrency": "USD" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "New Child Patient Examination (under 5 years) - Special Promo" }, "priceSpecification": { "@type": "PriceSpecification", "price": "79", "priceCurrency": "USD" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "New Child Patient Examination (above 5 years) - Special Promo" }, "priceSpecification": { "@type": "PriceSpecification", "price": "79", "priceCurrency": "USD" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Teeth Whitening Special Promo" }, "priceSpecification": { "@type": "PriceSpecification", "price": "299", "priceCurrency": "USD" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Periodic Examination and X-rays for Adults and Kids (above 5 years)" }, "priceSpecification": { "@type": "PriceSpecification", "price": "100", "priceCurrency": "USD" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Periodic Examination and Cleaning for Kids Under 5" }, "priceSpecification": { "@type": "PriceSpecification", "price": "95", "priceCurrency": "USD" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Emergency Visit and Limited Examination" }, "priceSpecification": { "@type": "PriceSpecification", "price": "55", "priceCurrency": "USD" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Scaling and Root Planning (Deep Cleaning)" }, "priceSpecification": { "@type": "PriceSpecification", "price": "140", "priceCurrency": "USD" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Root Canal Treatment (Anterior)" }, "priceSpecification": { "@type": "PriceSpecification", "price": "700", "priceCurrency": "USD" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Root Canal Treatment (Pre-Molar)" }, "priceSpecification": { "@type": "PriceSpecification", "price": "750", "priceCurrency": "USD" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Root Canal Treatment (Molar)" }, "priceSpecification": { "@type": "PriceSpecification", "price": "850", "priceCurrency": "USD" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Crowns (PFM)" }, "priceSpecification": { "@type": "PriceSpecification", "price": "800", "priceCurrency": "USD" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Crowns (Zirconia)" }, "priceSpecification": { "@type": "PriceSpecification", "price": "900", "priceCurrency": "USD" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Partial Dentures" }, "priceSpecification": { "@type": "PriceSpecification", "price": "1120", "priceCurrency": "USD" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Full Dentures" }, "priceSpecification": { "@type": "PriceSpecification", "price": "1000", "priceCurrency": "USD" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Immediate Dentures" }, "priceSpecification": { "@type": "PriceSpecification", "price": "1000", "priceCurrency": "USD" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Anterior Extraction" }, "priceSpecification": { "@type": "PriceSpecification", "price": "150", "priceCurrency": "USD" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Posterior Extraction" }, "priceSpecification": { "@type": "PriceSpecification", "price": "220", "priceCurrency": "USD" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Surgical Extraction" }, "priceSpecification": { "@type": "PriceSpecification", "price": "250", "priceCurrency": "USD" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Wisdom Teeth Extraction" }, "priceSpecification": { "@type": "PriceSpecification", "price": "450", "priceCurrency": "USD" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Orthodontic Consultation" }, "priceSpecification": { "@type": "PriceSpecification", "price": "85", "priceCurrency": "USD" } }
    ]
  }
}
),
          }}
        />

        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What makes White Hill Dental a trusted family dentist in Levittown, PA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "White Hill Dental is built around family-focused care, combining gentle dentistry, advanced technology, and a welcoming environment. Our team takes time to understand each patient’s needs, making us a trusted choice for families seeking a dependable dentist in Levittown, PA."
      }
    },
    {
      "@type": "Question",
      "name": "Is White Hill Dental accepting new patients in Levittown and Bucks County?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. White Hill Dental welcomes new patients of all ages from Levittown and surrounding Bucks County communities. If you are searching for a “dentist near me,” our office provides comfortable, personalized care for children, teens, adults, and seniors."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide same-day emergency dental care in Levittown, PA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. White Hill Dental offers same-day emergency dental appointments for issues such as tooth pain, broken teeth, infections, swelling, or dental trauma. Our goal is to provide fast relief and reliable treatment when urgent dental needs arise."
      }
    },
    {
      "@type": "Question",
      "name": "What dental services are available at White Hill Dental?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We provide comprehensive dental care under one roof, including preventive cleanings and exams, cosmetic dentistry such as Invisalign®, teeth whitening, and veneers, as well as restorative treatments like crowns, implants, dentures, and emergency dental care."
      }
    },
    {
      "@type": "Question",
      "name": "Is White Hill Dental kid-friendly for children and families?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. White Hill Dental is designed with families in mind, offering a comfortable and engaging experience for children, including an in-office movie theater. We help kids feel relaxed and excited about dental visits while delivering gentle, age-appropriate care."
      }
    },
    {
      "@type": "Question",
      "name": "Which areas does White Hill Dental serve near Levittown, PA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "White Hill Dental proudly serves patients from Levittown (19054, 19055, 19056, 19057), Fairless Hills (19030), Fallsington (19054), Bristol (19007), and Tullytown (19007). Our convenient location makes us a top choice for nearby communities."
      }
    },
    {
      "@type": "Question",
      "name": "Do you accept dental insurance, Medicaid, and flexible payment options?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. White Hill Dental accepts Medicaid and most major dental insurance plans. We also offer flexible payment options for patients without coverage, ensuring affordable, transparent dental care for families throughout Levittown and Bucks County."
      }
    },
    {
      "@type": "Question",
      "name": "How can I schedule an appointment with White Hill Dental?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Scheduling an appointment is easy. You can call our Levittown dental office or book online at your convenience. Our friendly team will help you find an appointment time that fits your schedule and dental needs."
      }
    }
  ]
}
),
          }}
        />
        
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.className} antialiased pt-18 md:pt-20`}
      >
        <GoogleTagManager />
        <DynamicMetadata />
        <Header />
        <LoaderProvider>{children}</LoaderProvider>
        <Footer />
        <FloatingTextForm />
      </body>
    </html>
  );
}
