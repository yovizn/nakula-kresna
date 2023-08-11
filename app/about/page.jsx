"use client";

import { useEffect, useState } from "react";
import styles from "@app/about/style.module.scss";
import Intro from "@components/About/Intro/index";
import Description from "@components/About/Description/index";
import Projects from "@components/About/Projects/index";
import { AnimatePresence } from "framer-motion";
import Preloader from "@components/Preloader";
import History from "@components/About/History";

export default function About() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
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
    <main className={styles.main}>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Intro />
      <Description />
      <History />
      <Projects />
      <div className="sm:hidden h-[6vh]"></div>
    </main>
  );
}
