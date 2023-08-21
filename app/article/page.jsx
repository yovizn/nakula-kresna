"use client";

import Agenda from "@components/Article/Agenda";
import Fasilitas from "@components/Article/Fasilitas";
import Hero from "@components/Article/Hero/index";
import Preloader from "@components/Preloader";
import { AnimatePresence } from "framer-motion";
import { useLayoutEffect, useState } from "react";

export default function Article() {
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
    <main className="flex flex-col min-h-[200vh] bg-secondary">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Hero />

      <Fasilitas />
    </main>
  );
}
