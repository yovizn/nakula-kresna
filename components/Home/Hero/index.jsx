"use client";

import Foto from "@public/images/image5.jpg";
import ImageComp from "@components/ImageComp";
import { Balancer } from "react-wrap-balancer";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Hero() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    requestAnimationFrame(animation);

    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        scrub: 0.25,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-=300px",
    });
  }, []);

  const animation = () => {
    if (xPercent <= -100) {
      xPercent = 0;
    }
    if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    xPercent += 0.04 * direction;
    requestAnimationFrame(animation);
  };

  return (
    <div className="min-h-screen overflow-hidden flex flex-col items-center justify-center">
      <motion.div
        className="w-full mt-20 md:mt-[10rem] text-center lg:flex max-lg:flex-col items-center lg:justify-between px-4 mb-5"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 3.1, duration: 1 }}
      >
        <h1 className="text-2xl text-start text-primary font-medium lg:text-7xl uppercase max-lg:mb-2 lg:leading-[120px] lg:max-w-[40rem]">
          Informasi, Kreasi & Sejarah
        </h1>
        <p className="text-accent tracking-widest lg:self-end lg:max-w-[40rem] text-start font-inter lg:pb-6">
          <Balancer>
            Berdirinya Perumahan Bekasi Timur Permai pada Tahun 1991 akhir.
            Wilayah ini terdiri dari 22 RT, Bekasi Timur Sendiri masuk dalam
            wilayah Desa Setiamekar tepatnya di RW 012. Nama - nama jalan
            lingkungan di wilayah ini juga sudah tercantum dalam peta
            Jabodetabek dan Infrastruktur.
          </Balancer>
        </p>
      </motion.div>
      <div className="mb-10 h-[20vh] overflow-hidden relative w-full">
        <div className="absolute top-[40%]">
          <div ref={slider} className="relative whitespace-nowrap flex">
            <p ref={firstText} className="text-2xl uppercase lg:text-[150px]">
              <span className="font-medium text-primary">Nakula Kresna</span> -
              Informasi - Kreasi - Sejarah -&nbsp;
            </p>
            <p
              ref={secondText}
              className="text-2xl uppercase lg:text-[150px] absolute left-[100%]"
            >
              <span className="font-medium text-primary">Nakula Kresna</span> -
              Informasi - Kreasi - Sejarah -&nbsp;
            </p>
          </div>
        </div>
      </div>
      <ImageComp src={Foto} className="w-screen h-screen" />
    </div>
  );
}
