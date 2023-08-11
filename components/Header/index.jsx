"use client";

import { useRef, useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Nav from "./nav/index";
import { NavLinks } from "@constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const path = usePathname();

  let menuRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setIsActive(false);
        console.log(menuRef.current);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <nav className="block">
      <Link
        href="/"
        className="hidden md:block absolute w-fit h-fit top-10 left-10 z-50"
      >
        <h1 className="text-6xl xl:text-7xl text-primary [text-shadow:_0_2px_0_rgb(0_0_0_/_40%)] font-clashDisplay font-semibold uppercase mb-1">
          Nakula Kresna
          {NavLinks.map((link) => (
            <span
              key={link.id}
              className={`${
                link.href === path ? "absolute bottom-0 right-0 w-fit" : ""
              }hidden text-xl text-whiteness`}
            >
              {`Your are on "${link.title}"`}
            </span>
          ))}
        </h1>
      </Link>
      <div ref={menuRef}>
        <div
          onClick={() => {
            setIsActive(!isActive);
          }}
          className="hamburger-menu"
        >
          <div className={`burger ${isActive ? "burgerActive" : ""}`}></div>
        </div>

        {/* SideNav w/ Animation */}
        <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
