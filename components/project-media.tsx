"use client";

import { useState } from "react";

type Props = {
  src: string;
  alt: string;
  fallbackSrc?: string;
  className?: string;
};

export function ProjectMedia({ src, alt, fallbackSrc, className }: Props) {
  const [active, setActive] = useState(src);

  return (
    // eslint-disable-next-line @next/next/no-img-element -- intentional: public assets + client fallback swap
    <img
      src={active}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
      onError={() => {
        if (fallbackSrc && active !== fallbackSrc) setActive(fallbackSrc);
      }}
    />
  );
}
