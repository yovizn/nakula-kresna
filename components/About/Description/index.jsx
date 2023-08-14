"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

export default function Description() {
  const phrases = [
    "Nakula Kresna Based on Street Name",
    "evrything about developer",
    "Serving entertainment content",
    "Work Hard, Pray Hard",
    "Love doing funny thing",
    "Hope you like it?!",
  ];

  return (
    <div className="mt-[120vw] ml-[10vw] text-whiteness lg:mt-[30vw] font-clashDisplay relative text-[4vw] z-[1]">
      {phrases.map((phrases, index) => {
        return <AnimatedText key={index}>{phrases}</AnimatedText>;
      })}
    </div>
  );
}

function AnimatedText({ children }) {
  const text = useRef(null);
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(text.current, {
      scrollTrigger: {
        trigger: text.current,
        start: "0px bottom",
        end: "bottom+=400px bottom",
        scrub: true,
      },
      left: "-200px",
      opacity: 0,
    });
  }, []);

  return <p className="relative m-0" ref={text}>{children}</p>;
}
