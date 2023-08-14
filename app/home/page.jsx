"use client"

import Hero from "@components/Home/Hero/index";
import Preloader from "@components/Preloader";
import { AnimatePresence } from "framer-motion";
import { useLayoutEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  
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
    <main className="min-h-screen">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Hero />
    </main>
  );
}
