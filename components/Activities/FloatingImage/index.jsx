"use client";

import Image from "next/image";
import {
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
} from "@components/Activities/FloatingImage/data";

import { useRef } from "react";
import { gsap } from "gsap";

export default function FloatingImage() {
  const plane1 = useRef(null);
  const plane2 = useRef(null);
  const plane3 = useRef(null);
  let requestAnimationFrameId = null;
  let xForce = 0;
  let yForce = 0;
  const easing = 0.08;
  const speed = 0.01;

  const manageMouseMove = (e) => {
    const { movementX, movementY } = e;
    xForce += movementX * speed;
    yForce += movementY * speed;

    if (!requestAnimationFrameId) {
      requestAnimationFrameId = requestAnimationFrame(animate);
    }
  };

  const lerp = (start, end, amount) => start * (1 - amount) + end * amount;

  const animate = () => {
    xForce = lerp(xForce, 0, easing);
    yForce = lerp(yForce, 0, easing);
    gsap.set(plane1.current, {
      x: `+=${xForce}`,
      y: `+=${yForce}`,
    });
    gsap.set(plane2.current, {
      x: `+=${xForce * 0.5}`,
      y: `+=${yForce * 0.5}`,
    });
    gsap.set(plane3.current, {
      x: `+=${xForce * 0.25}`,
      y: `+=${yForce * 0.25}`,
    });
    if (Math.abs(xForce) < 0.01) xForce = 0;
    if (Math.abs(yForce) < 0.01) yForce = 0;

    if (xForce > 0 || yForce > 0) {
      requestAnimationFrame(animate);
    } else {
      cancelAnimationFrame(requestAnimationFrameId);
      requestAnimationFrameId = null;
    }
  };

  return (
    <>
      <section className="h-[40rem] w-full mb-10 bg-gradient-to-t from-10% from-dark to-secondary">
        <div
          className="w-full h-screen overflow-hidden relative flex items-center justify-center"
          onMouseMove={(e) => {
            manageMouseMove(e);
          }}
        >
          <div ref={plane1} className="w-full h-full absolute">
            <Image
              priority={true}
              src={Image3}
              alt="Perekonomian"
              width={300}
              style={{ height: "auto", width: "300" }}
              className="absolute brightness-[0.7] left-[40%] top-[4%]"
            />
            <Image
              priority={true}
              src={Image1}
              alt="Keagamaan"
              width={300}
              style={{ height: "auto", width: "300" }}
              className="absolute brightness-[0.6] left-[78%] top-[70%]"
            />
          </div>
          <div ref={plane2} className="w-full h-full absolute">
            <Image
              priority={true}
              src={Image6}
              alt="Lingkungan Hidup"
              width={250}
              style={{ height: "auto", width: "250" }}
              className="absolute brightness-[0.6] left-[2%] top-[15%]"
            />
            <Image
              priority={true}
              src={Image5}
              alt="Keamanan"
              width={300}
              style={{ height: "auto", width: "300" }}
              className="absolute brightness-[0.6] left-[40%] top-[80%]"
            />
          </div>
          <div ref={plane3} className="w-full h-full absolute">
            <Image
              priority={true}
              src={Image4}
              alt="Seni"
              width={300}
              style={{ height: "auto", width: "300" }}
              className="absolute brightness-[0.6] left-[80%] top-[18%]"
            />
            <Image
              priority={true}
              src={Image2}
              alt="Olah Raga"
              width={250}
              style={{ height: "auto", width: "250" }}
              className="absolute brightness-[0.7] left-[2%] top-[65%]"
            />
          </div>

          {/* Description */}
          <div className="w-full h-full flex flex-col items-center justify-center select-none">
            <div className="w-full bg-gradient-to-r from-transparent from-10% via-secondary to-60% to-secondary/30 py-4">
              <h1 className="text-5xl sm:text-7xl text-center text-primary font-medium">
                Activities
              </h1>
              <p className="text-gray-400 text-center mt-2">
                Gallery of our activities
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
