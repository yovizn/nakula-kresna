import { wordAnimation } from "@components/utils/animationEverything";
import { motion } from "framer-motion";

export default function WordAnimation({ words }) {
  return (
    <span>
      {words.split(" ").map((word, idx) => {
        return (
          <span key={idx} className="inline-block">
            <motion.span
              variants={wordAnimation}
              custom={idx}
              whileInView="animate"
              viewport={{ once: true }}
              initial="initial"
              className="inline-block"
            >
              {word + "\u00A0"}
            </motion.span>
          </span>
        );
      })}
    </span>
  );
}
