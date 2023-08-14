"use client";

import styles from "@components/About/History/styel.module.scss";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

export default function History() {
  const phrase =
    "Sungguh perjalanan panjang bagi kami untuk mengaplikasikan dan mewujudkan keinginan kami untuk wujudkan Website Nakula Kresna, kami sangat berterima kasih untuk bapak 'Darman' yang sudah mensupport kami dan masyarakat yang tergabung dari RT 10 sampai dengan RT 13, yang sudah mengirimkan wakilnya untuk berkontribusi dalam project ini. Kami sebagai Team Developer Website Nakula Kresna, kedepannya akan memperluas fungsi dan kinerja dari Website ini dengan tujuan untuk memuaskan kebutuhan masyarakat akan Informasi dan Pelayan publik";

  const refs = useRef([]);
  const container = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimtion();
  }, []);

  const createAnimtion = () => {
    gsap.to(refs.current, {
      opacity: 1,
      ease: "none",
      stagger: 0.25,
      scrollTrigger: {
        trigger: container.current,
        start: "top",
        end: `+=${window.innerHeight / 1.9}`,
        scrub: true,
      },
    });
  };

  const splitWords = () => {
    let body = [];
    phrase.split(" ").forEach((word, index) => {
      const letters = splitLatters(word);
      body.push(<p key={`word_${index}`}>{letters}</p>);
    });
    return body;
  };

  const splitLatters = (word) => {
    let letters = [];
    word.split("").forEach((letter, index) => {
      letters.push(
        <span
          ref={(el) => {
            refs.current.push(el);
          }}
          key={`letter_${index}`}
        >
          {letter}
        </span>
      );
    });
    return letters;
  };
  return (
    <div ref={container} className={styles.main}>
      <div className={styles.body}>{splitWords()}</div>
    </div>
  );
}
