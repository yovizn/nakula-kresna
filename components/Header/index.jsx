"use client";
import { useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Nav from "./Nav/index";
import styles from "./style.module.scss";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Logo from "@public/images/Logo.png";
import Image from "next/image";

export default function Index() {
  const [isActive, setIsActive] = useState(false);
  const path = usePathname();

  let menuRef = useRef();
  useLayoutEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setIsActive(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <>
      <Link
        passHref
        href="/"
        className="hidden md:block absolute w-fit h-fit -top-5 left-10 z-50 overflow-hidden"
      >
        <div className="relative w-[10rem] h-[10rem] group">
          <Image src={Logo} alt="Logo NK" fill className="object-cover" />
        </div>
      </Link>
      <div>
        <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>

        <div
          ref={menuRef}
          onClick={() => {
            setIsActive(!isActive);
          }}
          className={styles.button}
        >
          <div
            className={`${styles.burger} ${
              isActive ? styles.burgerActive : ""
            }`}
          ></div>
        </div>
      </div>
    </>
  );
}
