"use client";

import styles from "@components/About/Intro/style.module.scss";
import image1 from "@public/images/image1.jpg";
import image2 from "@public/images/image2.jpg";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

export default function Index() {
  const backgroundImage = useRef(null);
  const introImage = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top",
        end: "+=500px",
        scrub: true,
      },
    });

    timeline
      .from(backgroundImage.current, { clipPath: "inset(15%)" })
      .to(introImage.current, { height: "200px" }, 0);
  }, []);

  return (
    <div className={styles.intro}>
      <div ref={backgroundImage} className={styles.backgroundImage}>
        <Image src={image1} fill={true} alt="Background Image" />
      </div>

      <div className={styles.introContainer}>
        <div
          ref={introImage}
          data-scroll
          data-scroll-speed="0.3"
          className={styles.introImage}
        >
          <Image src={image2} fill={true} alt="Background Image" />
        </div>
        <h1 data-scroll data-scroll-speed="0.7" className="select-none">
          Tentang Kami
        </h1>
      </div>
    </div>
  );
}
