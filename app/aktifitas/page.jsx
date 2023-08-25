"use client";

import FiturAktifitas from "@components/Aktifitas/Fitur";
import HeroAktifitas from "@components/Aktifitas/Hero";
import PreloaderAktifitas from "@components/Preloader/PreloaderAktifitas";
import { AnimatePresence } from "framer-motion";
import { useLayoutEffect, useState } from "react";

export default function Aktifitas() {
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
    <main className="flex flex-col min-h-[200vh]">
      <AnimatePresence mode="wait">
        {isLoading && <PreloaderAktifitas />}
      </AnimatePresence>

      <HeroAktifitas />

      <FiturAktifitas />
    </main>
  );
}
