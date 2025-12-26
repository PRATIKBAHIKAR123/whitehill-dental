import type { Metadata } from "next";
import { generateProviderMetadata } from "@/lib/metadata";
import ClientPage from "./hala-elsamna-client";

export const metadata: Metadata = generateProviderMetadata(
  "manreet-kaur-levittown-pa-dentist",
  "/Images/Team/Dr. Manreet Kaur.png"
);

export default function Page() {
  return <ClientPage />;
}
