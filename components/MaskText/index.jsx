"use client";

import { useInView, motion } from "framer-motion";
import { useRef } from "react";

export default function MaskedText({ words }) {
  const animate = {
    initial: { y: "100%" },
    open: (idx) => ({y: "0%", transition: {duration: 0.75, delay: idx * 0.1, ease: [0.33, 1, 0.68, 1]}})
  }
  const body = useRef(null);
  const isInView = useInView(body, { once: true, margin: "-10%" });

  return (
    <div ref={body} className="flex flex-col text-[3rem]">
      {words.map((word, idx) => {
        return (
          <div key={idx} className="overflow-hidden">
            <motion.p
              className="font-bold"
              variants={animate}
              initial="initial"
              animate={isInView ? "open" : ""}
            >{word}</motion.p>
          </div>
        );
      })}
    </div>
  );
}
