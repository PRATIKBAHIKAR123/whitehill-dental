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
