"use client"

import { TagCloud } from "@frank-mayer/react-tag-cloud";

interface TextCloudProps {
  iconSlugs: string[];
}

const TextCloud = ({ iconSlugs }: TextCloudProps) => (
  <TagCloud
    options={(w) => ({
      radius: 250,
      maxSpeed: "normal",
      initSpeed: "normal",
      keep: true,
    })}
    onClickOptions={{ passive: true }}
  >
    {...iconSlugs}
  </TagCloud>
);


export default TextCloud;