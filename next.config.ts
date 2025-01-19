import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: "/life-in-flashcards",
        destination:
          "https://life-in-flashcards.kunaljain.space/life-in-flashcards",
      },
      {
        source: "/life-in-flashcards/",
        destination:
          "https://life-in-flashcards.kunaljain.space/life-in-flashcards/",
      },
      {
        source: "/life-in-flashcards/:path*/",
        destination:
          "https://life-in-flashcards.kunaljain.space/life-in-flashcards/:path*",
      },
      {
        source: "/life-in-flashcards/:path*",
        destination:
          "https://life-in-flashcards.kunaljain.space/life-in-flashcards/:path*",
      },
    ];
  },
};

export default nextConfig;
