"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { Balancer } from "react-wrap-balancer";
import Image from "next/image";
import Foto from "@public/images/image5.jpg";

export default function index() {
  const useHero = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={useHero}
      className="max-md:h-fit h-screen w-full"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.01,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <div className="flex flex-col h-full max-lg:flex-col items-center justify-center gap-2 lg:pt-10">
        <div className="absolute z-10 w-[30%] left-[10%] bottom-[20%] max-md:bottom-[10%] max-md:w-[80%] ">
          <h1 className="text-primary text-3xl md:text-5xl lg block:text-7xl font-black font-clashDisplay [text-shadow:_0_0.099rem_0_rgb(0_0_0_/_40%)]">
            <Balancer>Education, Information & History</Balancer>
          </h1>
          <p className="text-whiteness text-xl md:text-2xl font-satoshi [text-shadow:_0_0.099rem_0_rgb(0_0_0_/_40%)]">
            <Balancer>
              Memberi pengetahuan, sejarah dan informasi untuk masyarakat&nbsp;
              <span className="text-light uppercase font-semibold block [text-shadow:_0_0.099rem_0_rgb(0_0_0_/_40%)]">
                Nakula Kresna
              </span>
            </Balancer>
          </p>
        </div>
        <div className="relative w-full h-[100vh] md:h-[79%] brightness-50">
          <Image
            src={Foto}
            alt="Foto"
            quality={100}
            fill={true}
            className="object-cover object-center max-md:object-top"
            priority
          />
        </div>
      </div>
    </motion.div>
  );
}
