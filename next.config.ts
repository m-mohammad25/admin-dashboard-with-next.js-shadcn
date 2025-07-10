import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  redirects: async () => [
    // I have added this temporarly to redirect to the teachers page
    { source: "/", destination: "/dashboard", permanent: false },
  ],
};

export default nextConfig;
