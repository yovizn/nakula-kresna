"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function HeroArticle() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <div className="">
      <div
        className="relative w-full max-h-[40rem] h-screen brightness-75 z-10"
        ref={ref}
      >
        <motion.div
          style={{ y }}
          className="absolute top-0 left-0 right-0 bottom-0"
        >
          <video
            className="w-full h-full object-cover"
            loop
            autoPlay
            playsInline
            muted
          >
            <source src="/videos/PawaiObor_Trim.mp4" type="video/mp4" />
          </video>
        </motion.div>
      </div>
      <div className="max-w-[70%] mx-auto my-8 z-50">
        <div className="mb-10">
          <motion.h1
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-primary font-medium text-2xl md:text-6xl my-8"
          >
            Lorem ipsum dolor sit amet consectetur.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-accent font-satoshi"
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Praesentium quis necessitatibus natus libero placeat vero, corporis
            ipsum voluptatibus repudiandae iusto?
          </motion.p>
        </div>
      </div>
    </div>
  );
}

{
}
