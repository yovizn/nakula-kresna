"use client";

import { useTransform, useScroll, useInView, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";
import useDimension from "@components/Home/Parallax/useDimension";
import Lenis from "@studio-freight/lenis";
import style from "@components/Home/Parallax/page.module.scss";
import { opacity } from "./animation";

const images = [
  "1.png",
  "2.png",
  "3.png",
  "4.png",
  "5.png",
  "6.png",
  "7.png",
  "8.png",
  "9.png",
  "10.png",
  "11.png",
  "12.png",
];

const Parallax = () => {
  const container = useRef(null);
  const text = useRef(null);
  const isInView = useInView(text);
  const { height } = useDimension();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2.1]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.4]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 2.5]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3.2]);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });
  return (
    <section className={style.utama}>
      <div ref={container} className={style.gallery}>
        <Column images={[images[0], images[1], images[2]]} y={y} />
        <Column images={[images[3], images[4], images[5]]} y={y2} />
        <Column images={[images[6], images[7], images[8]]} y={y3} />
        <Column images={[images[9], images[10], images[11]]} y={y4} />
        <motion.div
          className={style.text}
          ref={text}
          variants={opacity}
          animate={isInView ? "open" : "closed"}
        >
          <div className="relative">
            <div className="flex items-center justify-center">
              <h1 className="text-4xl text-bright font-clashDisplay font-semibold text-center">
                <span className="block">Education</span>
                <span className="block">Information</span>
                <span className="block">History</span>
              </h1>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Column = ({ images, y = 0 }) => {
  return (
    <motion.div style={{ y }} className={style.column}>
      {images.map((src, index) => {
        return (
          <div key={index} className={style.imageContainer}>
            <Image
              src={`/assets/images/Parallax/${src}`}
              fill
              priority={true}
              sizes="100vh"
              alt="images"
            />
          </div>
        );
      })}
    </motion.div>
  );
};
export default Parallax;
