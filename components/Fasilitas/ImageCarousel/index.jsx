"use client";

import Image from "next/image";
import {
  FasilitasKeagamaan,
  FasilitasKeamanan,
  FasilitasSeniOlahraga,
} from "@constants";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ImageCarousel() {
  return (
    <div className="mx-4">
      <div className="mb-10">
        <h1 className="text-4xl">Fasilitas Kami</h1>
      </div>

      <div className="mb-4">
        <h1 className="text-xl font-medium tracking-widest uppercase">
          Keagamaan
        </h1>
      </div>
      <Swiper
        grabCursor={true}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation]}
        spaceBetween={30}
        centeredSlides={true}
        slidesPerView={1}
        className="mb-10"
      >
        {FasilitasKeagamaan.map((fasilitas, idx) => (
          <SwiperSlide key={idx}>
            <div className="flex flex-col max-lg:gap-y-10 lg:flex-row-reverse lg:gap-x-10">
              <div className="flex flex-col space-y-4">
                <h1 className="text-2xl">{fasilitas.title}</h1>
                <p className="text-lg">{fasilitas.description}</p>
              </div>
              <div className="relative w-full max-w-[1080px] h-[560px]">
                <Image
                  src={`/images/Fasilitas/${fasilitas.src}`}
                  fill
                  alt="Image"
                  className="object-cover rounded-xl"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mb-4">
        <h1 className="text-xl font-medium tracking-widest uppercase">
          Keamanan
        </h1>
      </div>
      <Swiper
        grabCursor={true}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation]}
        spaceBetween={30}
        centeredSlides={true}
        slidesPerView={1}
        className="mb-10"
      >
        {FasilitasKeamanan.map((fasilitas, idx) => (
          <SwiperSlide key={idx}>
            <div className="flex flex-col max-lg:gap-y-10 lg:flex-row-reverse lg:gap-x-10">
              <div className="flex flex-col space-y-4">
                <h1 className="text-2xl">{fasilitas.title}</h1>
                <p className="text-lg">{fasilitas.description}</p>
              </div>
              <div className="relative w-full max-w-[1080px] h-[560px]">
                <Image
                  src={`/images/Fasilitas/${fasilitas.src}`}
                  fill
                  alt="Image"
                  className="object-cover rounded-xl"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mb-4">
        <h1 className="text-xl font-medium tracking-widest uppercase">
          Keamanan
        </h1>
      </div>
      <Swiper
        grabCursor={true}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation]}
        spaceBetween={30}
        centeredSlides={true}
        slidesPerView={1}
        className="mb-10"
      >
        {FasilitasSeniOlahraga.map((fasilitas, idx) => (
          <SwiperSlide key={idx}>
            <div className="flex flex-col max-lg:gap-y-10 lg:flex-row-reverse lg:gap-x-10">
              <div className="flex flex-col space-y-4">
                <h1 className="text-2xl">{fasilitas.title}</h1>
                <p className="text-lg">{fasilitas.description}</p>
              </div>
              <div className="relative w-full max-w-[1080px] h-[560px]">
                <Image
                  src={`/images/Fasilitas/${fasilitas.src}`}
                  fill
                  alt="Image"
                  className="object-cover rounded-xl"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
