import Link from "next/link";
import { motion } from "framer-motion";
import { slide, scale } from "@components/Header/anim";

const LinkNav = ({ data, isActive, setSelectedIndicator }) => {
  const { title, href, index, icon } = data;

  return (
    <motion.div
      className="relative flex items-center"
      onMouseEnter={() => {
        setSelectedIndicator(href);
      }}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div
        variants={scale}
        animate={isActive ? "open" : "closed"}
        className="w-[10xp] h-[10px] bg-[#ffffff] rounded-[50%] absolute left-[-30px]"
      ></motion.div>
      <a href={href}>{title}</a>
    </motion.div>
  );
};

export default LinkNav;
