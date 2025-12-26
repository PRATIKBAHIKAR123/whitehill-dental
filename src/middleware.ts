import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Redirect other pages to new SEO-optimized routes
  const pageRedirects: { [key: string]: string } = {
    "/offers": "/teeth-whitening-offer-levittown-pa",
    "/providers/simranjeet-dhaliwal":
      "/providers/simranjeet-dhaliwal-harrisburg-pa-dentist",
    "/reviews": "/patient-reviews-levittown-pa",
    "/blog": "/dental-blog",
    "/contact-us": "/contact-whitehill-dental-levittown-pa",
  };

  // Check if current path needs to be redirected for other pages
  for (const [oldPath, newPath] of Object.entries(pageRedirects)) {
    if (pathname === oldPath) {
      return NextResponse.redirect(new URL(newPath, request.url), 301);
    }
  }

  return NextResponse.next();
}
