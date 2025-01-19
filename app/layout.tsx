import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio | Kunal Jain",
  description:
    "Welcome to my corner of the internet, get to know about me, my experiences and other stuff. Also feel free to reach out to me.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png",
    other: {
      url: "/apple-touch-icon.png",
    },
  },
  applicationName: "Portfolio | Kunal Jain",
  openGraph: {
    title: "Portfolio | Kunal Jain",
    description:
      "Welcome to my corner of the internet, get to know about me, my experiences and other stuff. Also feel free to reach out to me.",
    siteName: "Portfolio | Kunal Jain",
    url: "https://kunaljain.space/life-in-flashcards",
    type: "website",
    images: [
      {
        url: "/static/name.png",
        alt: "Portfolio | Kunal Jain",
      },
    ],
  },
  twitter: {
    title: "Portfolio | Kunal Jain",
    description:
      "Welcome to my corner of the internet, get to know about me, my experiences and other stuff. Also feel free to reach out to me.",
    creator: "@_kunaaaaalll",
    images: ["/static/name.png"],
  },
  alternates: {
    canonical: "https://kunaljain.space/life-in-flashcards",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${jetbrainsMono.className} bg-black text-white min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
