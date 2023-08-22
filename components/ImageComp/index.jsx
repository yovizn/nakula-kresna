"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";

export default function ImageComp({ src, className }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden bg-secondary ${className}`}
    >
      <Image
        src={src}
        alt="Image"
        fill
        style={{
          opacity: inView ? 1 : 0,
          transition: "opacity 0.2s cubic-bezier(0.3, 0.2, 0.2, 0.8)",
        }}
        className="object-cover"
      />
    </div>
  );
}
