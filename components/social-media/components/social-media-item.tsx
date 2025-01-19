import { Button } from "@/components/ui/button";
import React from "react";

function SocialMedia({
  link,
  title,
  icon,
}: {
  link: string;
  title: string;
  icon: React.ReactNode;
}) {
  return (
    <Button variant="outline" size="icon" className="rounded-full" asChild>
      <a href={link} target="_blank" rel="noopener noreferrer">
        {icon}
        <span className="sr-only">{title}</span>
      </a>
    </Button>
  );
}

export default SocialMedia;
