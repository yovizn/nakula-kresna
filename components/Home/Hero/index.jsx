"use client";

import { Balancer } from "react-wrap-balancer";
import Image from "next/image";
import Foto from "@public/images/image5.jpg";

export default function Index() {
  return (
    <div className="min-h-screen overflow-hidden flex flex-col items-center justify-center">
      <div className="mt-10 mb-4 lg:mt-[20vh] lg:mb-[5rem] md:mt-24 md:mb-10 text-center">
        <h1 className="text-2xl text-primary font-medium lg:text-[8.3rem] uppercase lg:leading-[120px]">
          Informasi, Kreasi & Sejarah
        </h1>
        <p className="text-accent lg:text-xl tracking-widest">
          <Balancer>
            Memberikan Informasi, Kreasi dan sejarah untuk masyarakat
          </Balancer>
        </p>
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
      </div>
    </div>
  );
}
