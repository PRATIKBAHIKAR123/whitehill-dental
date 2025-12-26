import type { Metadata } from "next";
import { generateProviderMetadata } from "@/lib/metadata";
import ClientPage from "./steven-reff-client";

export const metadata: Metadata = generateProviderMetadata(
  "steven-reff-bayonne-nj-dentist",
  "/Images/Team/Steven Reff.webp"
);

export default function Page() {
  return <ClientPage />;
}
