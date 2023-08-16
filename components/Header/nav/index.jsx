import React, { useState } from "react";
import { NavLinks } from "@constants";
import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { menuSlide } from "../anim";
import Link from "./Link/index";
import Curve from "./Curve/index";

export default function Index() {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.menu}
    >
      <div className={styles.body}>
        <div
          onMouseLeave={() => {
            setSelectedIndicator(pathname);
          }}
          className={styles.nav}
        >
          <div className={styles.header}>
            <p className="text-lg font-poppins">Navigation</p>
          </div>
          {NavLinks.map((data, index) => {
            return (
              <Link
                key={index}
                data={{ ...data, index }}
                isActive={selectedIndicator == data.href}
                setSelectedIndicator={setSelectedIndicator}
              ></Link>
            );
          })}
        </div>
        <div className={styles.footer}>
          <a href="/" className="hover:text-green">
            Awwwards
          </a>
          <a href="/" className="hover:text-green">
            Instagram
          </a>
          <a href="/" className="hover:text-green">
            Dribble
          </a>
          <a href="/" className="hover:text-green">
            LinkedIn
          </a>
        </div>
        <Curve />
      </div>
    </motion.div>
  );
}
