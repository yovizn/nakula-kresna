"use client";

import { useState } from "react";
import { NavLinks } from "@constants";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "./Link/index";
import { menuSlide } from "../anim";
import Curve from "./Curve/index";

const Nav = () => {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="sidebar"
    >
      <div className="sidebar-body">
        <div
          onMouseLeave={() => {
            setSelectedIndicator(pathname);
          }}
          className="flex flex-col text-5xl gap-3 mt-20"
        >
          <div className="sidebar-header">
            <p className="text-xl font-medium">Navigation</p>
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
        <div className="sidebar-footer">
          <a href="/" className="text-light text-lg font-base">
            Lorem Ipsum
          </a>
          <a href="/" className="text-light text-lg font-base">
            Lorem Ipsum
          </a>
          <a href="/" className="text-light text-lg font-base">
            Lorem Ipsum
          </a>
          <a href="/" className="text-light text-lg font-base">
            Lorem Ipsum
          </a>
        </div>
        <Curve />
      </div>
    </motion.div>
  );
};

export default Nav;
