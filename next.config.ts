import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.coruss.com.br",
        pathname: "/logos_coruss/**",
      },
      {
        protocol: "https",
        hostname: "coruss.com.br",
        pathname: "/logos_coruss/**",
      },
      {
        protocol: "https",
        hostname: "www.coruss.com.br",
        pathname: "/logo_parceiros/**",
      },
      {
        protocol: "https",
        hostname: "coruss.com.br",
        pathname: "/logo_parceiros/**",
      },
      {
        protocol: "https",
        hostname: "img.icons8.com",
        pathname: "/fluency/**",
      },
      {
        protocol: "https",
        hostname: "img.icons8.com",
        pathname: "/ios-filled/**",
      },
      { protocol: "https", hostname: "img.icons8.com", pathname: "/windows/**" },
      { protocol: "https", hostname: "img.icons8.com", pathname: "/ios-glyphs/**" },
      { protocol: "https", hostname: "img.icons8.com", pathname: "/external-regular-kawalan-studio/**" },
      { protocol: "https", hostname: "img.icons8.com", pathname: "/glyph-neue/**" },
    ],
  },
};

export default nextConfig;
