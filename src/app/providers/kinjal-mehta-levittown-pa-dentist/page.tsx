import type { Metadata } from "next";
import { generateProviderMetadata } from "@/lib/metadata";
import ClientPage from "./dalia-khan-client";

export const metadata: Metadata = generateProviderMetadata(
  "kinjal-mehta-levittown-pa-dentist",
  "/Images/Team/Kinjal Mehta.png"
);

export default function Page() {
  return <ClientPage />;
}
