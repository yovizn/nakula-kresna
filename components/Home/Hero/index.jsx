"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { Balancer } from "react-wrap-balancer";
import Image from "next/image";
import Foto from "@public/images/image5.jpg";

export default function Index() {
  const hero = useRef(null);

  return (
    <div className="min-h-screen overflow-hidden flex flex-col items-center justify-center">
      <div className="mt-10 mb-4 lg:mt-[20vh] lg:mb-[5rem] md:mt-24 md:mb-10 text-center">
        <p>Our Journey</p>
        <br />
        <h1 className="text-2xl lg:text-[8rem] max-w-xl uppercase lg:leading-[120px]">Berguna dan Mencipta</h1>
      </div>
      <div className="relative flex items-end justify-center w-full h-[100vh] pb-4">
        <Image
          src={Foto}
          alt="Foto"
          quality={100}
          fill={true}
          className="object-cover object-center max-md:object-top brightness-50"
          priority
        />
        <motion.div
          className="relative container flex max-lg:flex-col ml-4 justify-between"
          ref={hero}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.01,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <h1 className="w-1/2 text-green text-3xl md:text-5xl lg block:text-7xl font-medium font-clashDisplay uppercase [text-shadow:_0_0.099rem_0_rgb(0_0_0_/_40%)]">
            <Balancer>Education, Information & History</Balancer>
          </h1>
          <div className="max-w-md">
            <p className="text-lightGreen font-medium text-xl md:text-2xl [text-shadow:_0_0.099rem_0_rgb(0_0_0_/_40%)]">
              <Balancer>
                Memberi pengetahuan, sejarah dan informasi untuk
                masyarakat
              </Balancer>
            </p>
            <p className="text-white text-lg md:text-xl [text-shadow:_0_0.099rem_0_rgb(0_0_0_/_40%)]">
              <Balancer>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet est pariatur quod!
              </Balancer>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
