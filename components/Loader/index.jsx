"use client";

import { useEffect } from "react";
import gsap from "gsap";
import Link from "next/link";
import { IntroImages } from "@constants";

const IntroAnimasi = () => {
  useEffect(() => {
    let tl = gsap.timeline();
    tl.from("h2 div", {
      yPercent: 100,
      ease: "power4.inOut",
      stagger: {
        amount: 0.5,
      },
    });

    tl.to("h2", {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      ease: "power4.inOut",
      stagger: {
        amount: 0.5,
      },
    });

    const overlay = document.querySelector(".overlay");
    overlay.addEventListener("click", function () {
      tl.to("h2 div", {
        yPercent: -100,
        ease: "power4.inOut",
        stagger: {
          amount: 0.5,
        },
      });

      tl.to("h2", {
        clipPath: "polygon(0 85%, 100% 85%, 100% 100%, 0 100%)",
        ease: "power4.inOut",
        stagger: {
          amount: 0.5,
        },
      });

      tl.to(".overlay", {
        duration: 1,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        ease: "power4.inOut",
      });

      tl.to(".img", {
        duration: 1,
        clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        ease: "power4.inOut",
        stagger: {
          amount: 0.5,
        },
      });

      tl.to(".loader", {
        duration: 1,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        ease: "power4.inOut",
        delay: 1,
      });
    });
  }, []);

  return (
    <div className="h-screen w-[100vw] overflow-hidden">
      <div className="loader">
        {IntroImages.map((l, idx) => {
          return (
            <div key={idx} className="img">
              <img src={l.src} alt="images" />
            </div>
          );
        })}
      </div>
      <div className="overlay">
        <div className="col">
          <h2>
            <div>Website Informatif</div>
          </h2>
          <h2>
            <div>Website Kreatif</div>
          </h2>
          <h2>
            <div>Nakula Kresna</div>
          </h2>
        </div>
        <div className="col">
          <h2>
            <div>
              <span>Klik</span>&nbsp;dimana saja!
            </div>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default IntroAnimasi;
