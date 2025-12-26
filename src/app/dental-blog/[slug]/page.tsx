import type { Metadata } from "next";
import { generateBlogPostMetadata } from "@/lib/metadata";
import { blogPostsData } from "../blogData";
import BlogPostClient from "./BlogPostClient";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPostsData.find((b) => b.slug === slug);
  const imageUrl = post?.image || "";

  return generateBlogPostMetadata(slug, imageUrl);
}

export default async function DentalBlogDetailsPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  return <BlogPostClient slug={slug} />;
}
