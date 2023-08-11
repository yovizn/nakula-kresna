"use client";

import styles from "@components/About/Projects/style.module.scss";
import Image from "next/image";
import { useState, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function index() {
  const [selectedProject, setSelectedProject] = useState<0>(0);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const projects = [
    {
      title: "Yovi Zulkarnaen",
      src: "Yovi.png",
    },
    {
      title: "Andreansyah Y. P.",
      src: "Andre.png",
    },
    {
      title: "Helmi Rahmana",
      src: "Helmi.png",
    },
    {
      title: "Khafiz Fadil",
      src: "Khafiz.png",
    },
  ];

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      trigger: imageContainer.current,
      start: "-=90px",
      end: "+=837vw",
      pin: true,
      markers: false
    })
  }, []);
  return (
    <div className={styles.projects}>
      <div className="flex max-lg:flex-col-reverse justify-center h-[700px] gap-[5%] w-full">
        <div ref={imageContainer} className="relative h-[24rem] w-full lg:h-full lg:w-[40%]">
          <Image
            src={`/images/About/${projects[selectedProject].src}`}
            fill={true}
            className="object-cover"
            alt="Images of NK Developer"
          />
        </div>
        <div className="w-[80%] lg:w-[20%] text-[0.5vw] lg:text-[1.5vw]">
          <p>
            Embrace each day with positivity and determination. Your efforts
            today shape a brighter tomorrow. Believe in yourself, for within you
            lies the power to overcome challenges and achieve greatness. Keep
            pushing forward, for success is a journey, not a destination.
          </p>
        </div>
        <div className="w-[80%] lg:w-[20%] md:text-[0.3vw] lg:text-[1vw] lg:flex lg:items-end">
          <p>
            Nakula Kresna: Where brilliance meets web development. A virtuoso
            creator who weaves intricate codes into captivating digital
            experiences. With each line of code, Nakula Kresna paints a
            masterpiece, breathing life into websites that blend innovation and
            functionality seamlessly. A maestro of design and interactivity,
            Nakula Kresna creations stand as testaments to expertise,
            commitment, and boundless creativity. Elevating businesses and
            ideas, Nakula Kresna name echoes through the digital realm as a
            symbol of excellence in web development.
          </p>
        </div>
      </div>
      <div className={styles.projectList}>
        {projects.map((projects, index) => {
          return (
            <div
              onMouseOver={() => {
                setSelectedProject(index);
              }}
              className={styles.projectEl}
              key={index}
            >
              <p>{projects.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
