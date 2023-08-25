"use client";

import HeroFasilitas from "@components/Fasilitas/Hero";
import ImageSection from "@components/Fasilitas/ImageSection";
import Sosmed from "@components/Fasilitas/Sosmed";
import PreloaderFasilitas from "@components/Preloader/PreloaderFasilitas";
import ScrollSection from "@components/ScrollSection";
import { AnimatePresence } from "framer-motion";
import { useLayoutEffect, useState } from "react";

export default function Fasilitas() {
  const [isLoading, setIsLoading] = useState(true);

  useLayoutEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2500);
    })();
  }, []);

  return (
    <div className="scroll-smooth">
      <AnimatePresence mode="wait">
        {isLoading && <PreloaderFasilitas />}
      </AnimatePresence>
      
      <HeroFasilitas />
      
      <ImageSection />

      <ScrollSection />

    </div>
  );
}
