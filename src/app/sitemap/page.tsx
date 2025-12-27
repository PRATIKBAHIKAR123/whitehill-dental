import Link from "next/link";

export default function SitemapPage() {
  // Define all the pages organized by categories
  const pages = {
    "Main Pages": [
      { name: "Home", link: "/" },
      { name: "About Us", link: "/about-whitehill-dental-levittown-pa" },
      { name: "Contact Us", link: "/contact-whitehill-dental-levittown-pa" },
      { name: "Blog", link: "/dental-blog" },
      { name: "Reviews", link: "/patient-reviews-levittown-pa" },
      { name: "Providers", link: "/providers" },
      { name: "Services", link: "/services" },
      { name: "Offers", link: "/offers" },
      //   { name: "Booking", link: "/booking" },
    ],
    Services: [
      {
        name: "Emergency Dentistry",
        link: "/services/emergency-dentistry-levittown-pa",
      },
      { name: "Root Canal", link: "/services/root-canal-treatment-levittown-pa" },
      { name: "Oral Surgery", link: "/services/oral-surgery-levittown-pa" },
      {
        name: "Cosmetic Dentistry",
        link: "/services/cosmetic-dentistry-levittown-pa",
      },
      { name: "Dental Fillings", link: "/services/dental-fillings-levittown-pa" },
      { name: "Dental Implants", link: "/services/dental-implants-levittown-pa" },
      { name: "Orthodontics", link: "/services/orthodontics-levittown-pa" },
      {
        name: "Crowns and Bridges",
        link: "/services/crowns-and-bridges-levittown-pa",
      },
      {
        name: "Dental Emergencies",
        link: "/services/dental-emergencies-levittown-pa",
      },
      {
        name: "Tooth Extraction",
        link: "/services/tooth-extraction-levittown-pa",
      },
      {
        name: "Wisdom Teeth",
        link: "/services/wisdom-teeth-removal-levittown-pa",
      },
      {
        name: "Invisalign",
        link: "/services/invisalign-clear-aligners-levittown-pa",
      },
      {
        name: "Kids & Children Dentistry",
        link: "/services/kids-and-children-dentistry-levittown-pa",
      },
      {
        name: "Permanent Teeth Replacement",
        link: "/services/permanent-teeth-replacement-levittown-pa",
      },
      {
        name: "Sports Dentistry",
        link: "/services/sports-dentistry-levittown-pa",
      },
      {
        name: "Whitening & Veneers",
        link: "/services/teeth-whitening-and-veneers-levittown-pa",
      },
      {
        name: "Same Day Dentistry",
        link: "/services/same-day-dentistry-levittown-pa",
      },
      { name: "Perio Protect", link: "/services/perio-protect-levittown-pa" },
      {
        name: "Painless Treatment",
        link: "/services/painless-dental-treatment-levittown-pa",
      },
      { name: "Halitosis", link: "/services/halitosis-treatment-levittown-pa" },
      { name: "Dentures", link: "/services/dentures-levittown-pa" },
      { name: "Endodontics", link: "/services/endodontics-levittown-pa" },
    ],
    "Service Areas": [
      {
        name: "Bayonne, NJ",
        link: "/service-areas/levittown-pa-dentist-near-you",
      },
      {
        name: "Greenville, NJ",
        link: "/service-areas/fairless-hills-pa-dentist-near-you",
      },
    ],
    "Legal & Information": [
      { name: "Terms and Conditions", link: "/terms-and-conditions" },
      { name: "Privacy Policy", link: "/privacy-policy" },
      { name: "Accessibility", link: "/accessibility" },
    ],
  };

  return (
    <div className="min-h-screen ">
      {/* Header Section */}
      <div className="details-page-header-section">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-3 py-4 sm:py-3">
          <div className="text-center">
            <h1>Sitemap</h1>
            <p>
              Navigate through all the pages and services available on our
              website
            </p>
          </div>
        </div>
      </div>

      {/* Sitemap Content */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-6 sm:py-8">
        <div className="space-y-6 sm:space-y-8">
          {Object.entries(pages).map(([category, pageList]) => (
            <div
              key={category}
              className="bg-white rounded-lg shadow-sm p-4 sm:p-6"
            >
              <h2 className=" text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6 text-primary mt-2">
                {category}
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-2 sm:gap-3">
                {pageList.map((page) => (
                  <Link
                    key={page.link}
                    href={page.link}
                    className="block p-2 sm:p-3 bg-primary hover:bg-secondary hover:text-white rounded-lg transition-all duration-200 transform hover:scale-105 border border-gray-200 hover:border-primary"
                  >
                    <span className="text-xs sm:text-sm text-white font-medium leading-tight">
                      {page.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
