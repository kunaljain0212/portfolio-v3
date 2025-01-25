import React from "react";

function PlainText({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <p className="z-10 whitespace-pre-wrap text-center max-md:text-3xl text-4xl font-bold tracking-tighter text-black dark:text-white">
      {children}
    </p>
  );
}

export default PlainText;
