"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect, useRef, useState } from "react";
import VideoPlayer from "@components/VideoPlayer";
import WordAnim from "@components/WordAnim2";

export default function FiturAktifitas() {
  return (
    <div className="min-h-screen container">
      <Swiper
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation]}
        centeredSlides={true}
        spaceBetween={30}
        slidesPerView={1}
      >
        <SwiperSlide className="pb-4">
          <VideoPlayer
            src="/videos/Senam.mp4"
            className="w-[90%] max-h-[40rem] max-w-6xl mx-auto my-8 rounded-xl overflow-hidden"
          />
          <div className="text-xl lg:text-5xl">
            <WordAnim words="Senam" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="pb-4">
          <VideoPlayer
            src="/videos/PawaiObor_Trim.mp4"
            className="w-[90%] max-h-[40rem] max-w-6xl mx-auto my-8 rounded-xl overflow-hidden"
          />
          <div className="text-xl lg:text-5xl">
            <WordAnim words="Pawai Obor" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
