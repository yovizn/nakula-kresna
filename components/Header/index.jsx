"use client";
import { useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Nav from "./Nav/index";
import styles from "./style.module.scss";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Logo from "@public/images/Logo2.png";
import Image from "next/image";
import Magenetic from "@components/Magnetic";

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
        className="hidden md:flex absolute items-center top-0 left-10 z-50 group"
      >
        <Magenetic>
          <div className="relative w-[6rem] h-[6rem] ">
            <Image
              src={Logo}
              alt="Logo NK"
              fill
              sizes="100vh"
              className="object-cover"
            />
          </div>
        </Magenetic>
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
