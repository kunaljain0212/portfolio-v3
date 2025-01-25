import React from "react";
import { Button } from "../ui/button";
import HighLightText from "./highlight-text";

function LinkText({
  title,
  link,
  customClass,
}: {
  title: string;
  link: string;
  customClass?: string;
}) {
  return (
    <Button
      variant="link"
      asChild
      className="max-md:text-3xl text-4xl font-bold p-0 m-0"
    >
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={customClass}
      >
        <HighLightText>{title}</HighLightText>
      </a>
    </Button>
  );
}

export default LinkText;
