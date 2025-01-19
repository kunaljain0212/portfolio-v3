"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="flex flex-col sm:flex-row justify-between items-center py-6 px-4 max-w-5xl mx-auto w-full">
      <h1 className="text-xl font-medium mb-4 sm:mb-0">Kunal Jain</h1>
      {pathname === "/" && (
        <Link
          href="https://life-in-flashcards.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm bg-green-500 text-black px-4 py-2 rounded-full hover:bg-green-400 transition-colors"
        >
          Got less time? Check this out!
        </Link>
      )}
    </header>
  );
}
