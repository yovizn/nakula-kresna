import ImageComp from "@components/ImageComp";
import WordAnimation from "@components/WordsAnimation";
import { scaleUpAnimation } from "@components/utils/animationEverything";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { OlahRaga } from "@constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import WordAnim from "@components/WordAnim2";

export default function HeroAktifitas() {
  let ref = useRef(null);
  let { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  let y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div className="flex flex-col min-h-[200vh]">
      <div className="relative w-full max-h-[40rem] h-screen" ref={ref}>
        <motion.div
          className="absolute top-0 left-0 right-0 bottom-0"
          style={{ y }}
        >
          <motion.video
            className="w-full h-full object-cover"
            variants={scaleUpAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            loop
            autoPlay
            muted
            playsInline
          >
            <source src="/videos/PawaiObor_Trim.mp4" type="video/mp4" />
          </motion.video>
          <div className="absolute top-0 left-0 right-0 -bottom-1 bg-gradient-to-b from-transparent to-background" />
        </motion.div>
      </div>

      <div className="container grid lg:grid-cols-[2fr_1fr] px-4 z-10">
        <h1 className="text-2xl lg:text-5xl mb-4">Aktifitas & Kreatifitas</h1>
        <p className="text-base font-satoshi lg:self-end text-justify">
          Ini adalah aktifitas atau kegiatan yang terjadi di wilayah Bekasi
          Timur Permai, dalam agenda Tahunan dan kalender Event berjalan, Telah
          di dokumentasikan secara administratif sesuai bidang atau struktural
          dalam pengurusan wilayah RT masing-masing.
        </p>
      </div>

      <div className="md:container mx-auto my-8 z-10 mb-12 mt-[10rem] pt-[5rem] border-t">
        <div className="flex max-lg:flex-col justify-evenly bg-secondary py-10 md:rounded-xl overflow-hidden px-4">
          <Swiper
            pagination={{ clickable: true }}
            navigation={true}
            modules={[Pagination, Navigation]}
            centeredSlides={true}
            slidesPerView={1}
          >
            {OlahRaga.map((l, idx) => {
              return (
                <SwiperSlide key={idx}>
                  <div className="flex">
                    <ImageComp
                      src={`/images/OlahRaga/${l.src}`}
                      className="h-[90vh] lg:h-[50rem] w-screen lg:w-[35rem] rounded-xl overflow-hidden"
                    />

                    <div className="mx-auto max-md:px-4 text-2xl lg:text-8xl lg:max-w-[30rem] lg:self-center text-primary">
                      <WordAnim words={l.title} />
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="">
            
          </div>

           */
}
