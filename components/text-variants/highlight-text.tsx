import React from "react";

function HighLightText({ children }: { children: React.ReactNode }) {
  return <span className="underline decoration-accent w-full">{children}</span>;
}

export default HighLightText;
