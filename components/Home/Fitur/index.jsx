import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import { FitureContent } from "@constants";
import { Balancer } from "react-wrap-balancer";
import {
  PhotoIcon,
  HomeModernIcon,
  NewspaperIcon,
} from "@heroicons/react/24/outline";
import { useRef } from "react";
import { useInView, motion, animate } from "framer-motion";

export default function Fiture() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const card = useRef(null);
  const cardInView = useInView(card);

  const fadeInCard = {
    initial: {
      opacity: 0,
      x: 100,
    },
    animate: (idx) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.1 * idx,
      },
    }),
  };

  const FitureCard = [
    {
      title: "Informasi",
      description:
        "Informasi yang kami berikan kepada anda adalah informasi yang terpercaya",
      icon: <NewspaperIcon className="w-6 h-6" />,
    },
    {
      title: "Dokumentasi Foto & Video",
      description: "Dokumentasi foto dan video yang kami berikan kepada anda",
      icon: <PhotoIcon className="w-6 h-6" />,
    },
    {
      title: "Fasilitas",
      description: "Fasilitas yang ada di linkungan Kami",
      icon: <HomeModernIcon className="w-6 h-6" />,
    },
  ];

  return (
    <div
      ref={ref}
      className="bg-gradient-to-b from-background to-secondary from-10% px-4 lg:px-10 py-20 overflow-hidden"
    >
      <div
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
        }}
        className="mb-4"
      >
        <h1 className="text-2xl lg:text-4xl font-medium text-accent lg:max-w-[30rem]">
          <Balancer>Mengetahui lebih banyak tentang Nakula Kresna?</Balancer>
        </h1>
      </div>

      <div
        ref={card}
        className="grid md:grid-cols-[2fr_2fr_2fr] gap-10 md:gap-10 text-background mb-14"
      >
        {FitureCard.map((l, idx) => {
          return (
            <motion.div
              custom={idx}
              variants={fadeInCard}
              initial="initial"
              whileInView="animate"
              key={idx}
              className="flex flex-col gap-2 border p-4 rounded-md odd:bg-primary odd:text-background even:bg-secondary even:text-primary"
            >
              <h1 className="text-xl text-start">
                {l.icon} {l.title}
              </h1>
              <p>{l.description}</p>
            </motion.div>
          );
        })}
      </div>

      <div className="mb-4 text-center md:text-end">
        <h1 className="text-2xl md:text-3xl uppercase">Ingin tahu apa saja?</h1>
      </div>

      <div className="w-full">
        <div className="flex justify-center text-text font-satoshi">
          <Accordion
            type="single"
            collapsible
            className="w-full flex flex-col gap-2 border rounded-xl"
          >
            {FitureContent.map((l, idx) => {
              return (
                <motion.div
                  key={idx}
                  custom={idx}
                  variants={fadeInCard}
                  initial="initial"
                  whileInView="animate"
                >
                  <AccordionItem
                    key={l.value}
                    value={l.value}
                    className="border-b py-1 px-2"
                  >
                    <AccordionTrigger className="text-xl text-start hover:text-accent">
                      {l.title}
                    </AccordionTrigger>
                    <AccordionContent className="text-lg">
                      {l.description}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              );
            })}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
