"use client";

import { Balancer } from "react-wrap-balancer";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WordAnimation from "@components/WordsAnimation";
import { ChevronRightIcon, ChevronLeftIcon } from "@radix-ui/react-icons";

export default function Hero() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;
  const [current, setCurrent] = useState(0);
  const [isFocus, setIsFocus] = useState(false);

  const foto = [
    {
      src: "/images/Selamat Datang.JPG",
    },
    {
      src: "/images/Jalan Utama.JPG",
    },
    {
      src: "/images/Pembangunan.JPG",
    },
  ];

  const onPrevClick = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  const onNextClick = () => {
    if (current < foto.length - 1) {
      setCurrent(current + 1);
    }
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    requestAnimationFrame(animation);

    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        scrub: 0.25,
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
        className="w-full mt-[10rem] text-center lg:flex max-lg:flex-col items-center lg:justify-between px-4 mb-5"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 3.15, duration: 1 }}
      >
        <h1 className="text-2xl text-start text-primary font-medium lg:text-7xl uppercase max-lg:mb-2 lg:leading-[120px] lg:max-w-[40rem]">
          Informasi, Kreasi & Sejarah
        </h1>
        <p className="text-accent tracking-widest lg:self-end lg:max-w-[40rem] text-start font-inter lg:pb-6">
          <Balancer>
            Kami ingin memberikan informasi yang terpercaya dan kreasi yang
            menarik untuk di sajikan kepada masyarakat, Nakula Kresna. Ada pula
            sejarah yang menarik yang kami rasa perlu di sajikan untuk
            masyarakat.
          </Balancer>
        </p>
      </motion.div>

      {/* Infinite Text */}
      <div className="mb-[10rem] md:mb-10 h-[5vh] lg:h-[20vh] overflow-hidden relative w-full">
        <div className="absolute top-0 lg:top-[40%]">
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

      {/* Image Carousel */}
      <div className="flex flex-col items-center justify-between md:p-24 lg:min-h-screen">
        <MotionConfig transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}>
          <div className="relative w-full md:max-w-[1536px] flex items-center">
            <AnimatePresence>
              {isFocus && (
                // Button
                <motion.div
                  className="absolute left-2 right-2 flex justify-between z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onHoverStart={() => setIsFocus(true)}
                  onHoverEnd={() => setIsFocus(false)}
                >
                  <button className="text-text">
                    <ChevronLeftIcon
                      className="h-10 w-10"
                      onClick={onPrevClick}
                    />
                  </button>
                  <button className="text-text">
                    <ChevronRightIcon
                      className="h-10 w-10"
                      onClick={onNextClick}
                    />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.div
              className="flex gap-4 flex-nowrap"
              animate={{ x: `calc(-${current * 100}% - ${current}rem)` }}
              onHoverStart={() => setIsFocus(true)}
              onHoverEnd={() => setIsFocus(false)}
            >
              {foto.map((l, idx) => {
                return (
                  // eslint-disable-next-line @next/next/no-img-element
                  <motion.img
                    key={idx}
                    src={l.src}
                    alt="Foto"
                    animate={{ opacity: current === idx ? 1 : 0.1 }}
                    className="object-cover aspect-[16/9]"
                  />
                );
              })}
            </motion.div>
            <div className="absolute bottom-2 md:bottom-10 left-1/2 transform -translate-x-1/2 z-10">
              <div className="flex gap-3 py-1 px-1 md:px-2 md:py-2 bg-accent rounded-full opacity-80 group">
                {foto.map((_, idx) => {
                  return (
                    <button key={idx} onClick={() => setCurrent(idx)}>
                      <div
                        className={`w-2 h-2 rounded-full opacity-50 duration-300 ease-in-out group-hover:opacity-100 ${
                          idx === current ? "bg-text" : "bg-secondary"
                        }`}
                      ></div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </MotionConfig>
      </div>
      <div className="mx-4 py-4 lg:mx-6 lg:pb-8 lg:text-3xl">
        <WordAnimation words="Berdirinya Perumahan Bekasi Timur Permai pada Tahun 1991 akhir. Wilayah ini terdiri dari 22 RT, Bekasi Timur Sendiri masuk dalam wilayah Desa Setiamekar tepatnya di RW 012. Nama - nama jalan lingkungan di wilayah ini juga sudah tercantum dalam peta Jabodetabek dan Infrastruktur." />
      </div>
    </div>
  );
}
