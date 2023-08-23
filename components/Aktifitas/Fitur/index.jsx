import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function FiturAktifitas() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto">
        <Swiper
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Navigation]}
          spaceBetween={30}
          centeredSlides={true}
          slidesPerView={1}
          className="mb-10"
        >
          <SwiperSlide>
            <div className="flex flex-col-reverse mb-10">
              <video
                className="aspect-video object-contain"
                controls
                playsInline
              >
                <source src="/videos/Karnaval.mp4" type="video/mp4" />
              </video>
              <div className="font-satoshi mb-10">
                <h1 className="text-xl md:text-2xl">
                  Karnaval tingkat BTP RW. 012
                </h1>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col-reverse">
              <video
                className="aspect-video object-contain"
                controls
                playsInline
              >
                <source src="/videos/Senam.mp4" type="video/mp4" />
              </video>
              <div className="font-satoshi mb-10">
                <h1 className="text-xl md:text-2xl">
                  Senam tingkat BTP RW. 012
                </h1>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
