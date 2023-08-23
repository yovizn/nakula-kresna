import Magenetic from "@components/Magnetic";
import WordAnimation from "@components/WordsAnimation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SocialMedia } from "@constants";
import { iconAnimation } from "@components/utils/animationEverything";

export default function Sosmed() {
  return (
    <div className="container mx-auto my-8 z-10">
        <h1 className="font-medium text-center font-satoshi text-xl md:text-3xl my-8 uppercase">
          <WordAnimation words="Kunjungi juga akun Sosial Media kami." />
        </h1>
        <div className="flex items-center justify-between lg:justify-evenly mb-10">
          {SocialMedia.map((i, idx) => {
            return (
              <Link href={i.href} key={idx}>
                <motion.div
                  custom={idx}
                  variants={iconAnimation}
                  initial="initial"
                  whileInView="animate"
                  className="relative h-10 w-10 md:w-12 md:h-12"
                  viewport={{ once: true }}
                >
                  <Magenetic>
                    <Image
                      src={i.icon}
                      alt="icon"
                      fill
                      className="object-cover"
                    />
                  </Magenetic>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
  )
}