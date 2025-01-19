import React from "react";
import SocialMediaItem from "./components/social-media-item";
import { FOOTER_LINKS } from "./constant";

function SocialMedia() {
  return (
    <div className="flex gap-4 justify-center">
      {FOOTER_LINKS.map(({ title, link, icon }) => (
        <SocialMediaItem key={title} title={title} link={link} icon={icon} />
      ))}
    </div>
  );
}

export default SocialMedia;
