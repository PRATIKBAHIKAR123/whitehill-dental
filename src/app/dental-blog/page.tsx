import type { Metadata } from "next";
import { generateBlogMetadata } from "@/lib/metadata";
import DentalBlogClient from "./DentalBlogClient";

export const metadata: Metadata = generateBlogMetadata();

export default function DentalBlogPage() {
  return <DentalBlogClient />;
}
