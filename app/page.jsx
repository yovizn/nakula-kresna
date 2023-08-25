/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect } from "react";
import gsap from "gsap";
import Link from "next/link";
import { IntroImages } from "@constants";

const IntroAnimasi = () => {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from("h2 div", {
      yPercent: 100,
      ease: "power4.out",
      stagger: {
        amount: 0.5,
      },
    });

    tl.to("h2", {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      ease: "power4.out",
      stagger: {
        amount: 0.5,
      },
    });

    const overlay = document.querySelector(".overlay");
    overlay.addEventListener("click", function () {
      tl.to("h2 div", {
        yPercent: -100,
        ease: "power4.out",
        stagger: {
          amount: 0.5,
        },
      });

      tl.to("h2", {
        clipPath: "polygon(0 85%, 100% 85%, 100% 100%, 0 100%)",
        ease: "power4.out",
        stagger: {
          amount: 0.5,
        },
      });

      tl.to(".overlay", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        ease: "power4.out",
      });

      tl.to(".img", {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        ease: "power4.out",
        stagger: {
          amount: 1.5,
        },
      });

      tl.to(".loader", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        ease: "power4.out",
        delay: 2,
      });
    });
  }, []);

  return (
    <div className="h-screen w-[100vw] overflow-hidden">
      <div className="container">
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
          <h5 className="uppercase text-2xl mb-4">Selamat Datang</h5>
          <h1 className="text-5xl uppercase mb-4">Nakula Kresna</h1>
          <Link href="/home" className="w-fit">
            <p className="text-center uppercase border py-2 text-accent hover:text-text border-accent hover:bg-accent transition-colors duration-300 font-medium text-lg">Lanjutkan</p>
          </Link>
        </div>
      </div>
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
