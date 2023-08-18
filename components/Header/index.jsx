"use client";
import { useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Nav from "./Nav/index";
import styles from "./style.module.scss";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { NavLinks } from "@constants";

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
        className="hidden md:block absolute w-fit h-fit top-10 left-10 z-50 overflow-hidden"
      >
        <div className="uppercase text-primary text-2xl desktop:text-5xl [text-shadow:_0_2px_0_rgb(0_0_0_/_40%)] font-clashDisplay font-semibold mb-1 group">
          <h1>Nakula Kresna</h1>
          {NavLinks.map((link) => (
            <p
              key={link.id}
              className={`${
                link.href === path ? "absolute bottom-0 right-0 w-fit" : ""
              }hidden text-lg text-white translate-y-[2rem] group-hover:translate-y-0 transition-transform duration-150`}
            >
              {`Your are on "${link.title}"`}
            </p>
          ))}
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
