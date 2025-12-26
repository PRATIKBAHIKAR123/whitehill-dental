import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/offers",
        destination: "/teeth-whitening-offer-levittown-pa",
        permanent: true,
      },
      {
        source: "/blog",
        destination: "/dental-blog",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
