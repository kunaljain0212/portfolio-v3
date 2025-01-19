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
          "https://life-in-flashcards.kunaljain.space/life-in-flashcards",
      },
    ];
  },
};

export default nextConfig;
