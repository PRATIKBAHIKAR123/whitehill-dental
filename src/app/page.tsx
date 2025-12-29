import type { Metadata } from "next";
import HomePage from "./home/page";

export const metadata: Metadata = {
  title: "Dentist in Levittown, PA | White Hill Dental | Trusted Dental Care in Levittown",
  description: "White Hill Dental in Levittown, PA offers comprehensive preventive, cosmetic, and emergency dental services. Patients from Levittown (19054, 19055, 19056, 19057), Fairless Hills (19030), Fallsington (19054), Bristol (19007), and Tullytown (19007) rely on our experienced team. Quality dental care near you made comfortable and convenient.",
};

export default function Home() {
  return (
    <HomePage/>
  );
}
