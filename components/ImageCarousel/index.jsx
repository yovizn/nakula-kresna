"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { useState } from "react";

export default function ImageSlider({ foto }) {
  const [current, setCurrent] = useState(0);
  const [isFocus, setIsFocus] = useState(false);

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

  return (
    <div className="flex flex-col items-center justify-between md:p-24 min-h-screen">
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
                  alt={l.alt}
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
  );
}
