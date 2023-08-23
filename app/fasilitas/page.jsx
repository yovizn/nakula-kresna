"use client";

import ImageCarousel from "@components/Fasilitas/ImageCarousel";
import Sosmed from "@components/Fasilitas/Sosmed";
import Preloader from "@components/Preloader";
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
    <div>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>

      <ImageCarousel />

      <Sosmed />
    </div>
  );
}
