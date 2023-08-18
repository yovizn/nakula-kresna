"use client";

import Fiture from "@components/Home/Fitur";
import Hero from "@components/Home/Hero/index";
import Prolog from "@components/Article/Prolog";
import Preloader from "@components/Preloader";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useLayoutEffect, useState } from "react";

export default function Home() {
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
    <div className="min-h-screen">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Hero />

      <Fiture />

      {/* Butto */}
      <Link
        href="/article"
        className="container mx-auto mt-10 flex justify-end"
      >
        <div className="flex items-center justify-end">
          <h1 className="text-xl mr-1">Selanjutnya</h1>
          <div className="h-[2px] w-[80px] bg-white rounded-full" />
        </div>
      </Link>
    </div>
  );
}
