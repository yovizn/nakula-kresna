import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ImageComp from "@components/ImageComp";
import WordAnim from "@components/WordAnim2";
import WordAnimation from "@components/WordsAnimation";
import VideoPlayer from "@components/VideoPlayer";

export default function ScrollSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-100vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );

    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section className="scroll-section-outer overflow-hidden">
      <div ref={triggerRef}>
        <div
          ref={sectionRef}
          className="scroll-section-inner h-screen w-[200vw] flex flex-row relative"
        >
          <div
            id="keamanan"
            className="scroll-section h-screen w-screen flex justify-center items-center bg-text text-background"
          >
            <div className="flex flex-1 flex-col justify-center items-center px-4 lg:px-16">
              <div className="md:self-end">
                <h4 className="text-xl font-semibold">
                  <WordAnimation words="Gerbang dan Pos" />
                </h4>
                <p className="font-medium">
                  <WordAnimation words="Kami memiliki gerbang dan pos, yang bertujuan untuk keamanan" />
                </p>
              </div>

              <div className="flex justify-between items-center w-full">
                <ImageComp
                  src="/images/Fasilitas/Keamanan/Pos.jpeg"
                  className="w-[10rem] h-[15rem] lg:w-[30rem] lg:h-[30rem] rounded-md"
                />
                <ImageComp
                  src="/images/Fasilitas/Keamanan/Gerbang01.jpeg"
                  className="w-[13rem] h-[10rem] lg:w-[30rem] lg:h-[20rem] rounded-md"
                />
              </div>
            </div>
          </div>
          <div
            id="lingkungan"
            className="scroll-section h-screen w-screen flex justify-center items-center bg-text text-background"
          >
            <div className="flex flex-1 md:flex-row-reverse max-md:flex-col justify-center items-center gap-x-4">
              <div className="max-w-md max-md:mx-4">
                <h4 className="text-2xl md:text-7xl font-bold uppercase">
                  Kegiatan Lingkungan
                </h4>
                <p className="font-medium">
                  Fogging untuk menjaga kesehatan lingkungan, dari nyamuk. Dan
                  kami juga melakukan kegiatan gotong royong untuk menjaga
                  kebersihan lingkungan.
                </p>
              </div>
              <div>
                <VideoPlayer
                  src="/images/Fasilitas/Lingkungan/Fogging.mp4"
                  className="w-[95vw] md:w-[20rem] lg:w-[40rem]"
                  size="20"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
