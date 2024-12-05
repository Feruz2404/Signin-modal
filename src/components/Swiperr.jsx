import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

export default function Swiperrr() {
  return (
    <div className="container mb-8 py-8 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 rounded-3xl shadow-lg">
      <h2 className="text-4xl font-bold text-center text-white mb-6">
        Explore Stunning Deals
      </h2>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper w-[90%] h-[500px] rounded-3xl overflow-hidden max-lg:h-[400px] max-md:h-[350px] max-sm:h-[300px] mx-auto"
        loop={true}
      >
        <SwiperSlide>
          <img
            src="https://images.uzum.uz/ct2q6ab4nkdilc6cug9g/main_page_banner.jpg"
            alt="Banner 1"
            className="object-cover h-full w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.uzum.uz/ct2attbvgbkpg1nobsmg/main_page_banner.jpg"
            alt="Banner 2"
            className="object-cover h-full w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.uzum.uz/ct2ue9c5j42b32f3m4c0/main_page_banner.jpg"
            alt="Banner 3"
            className="object-cover h-full w-full"
          />
        </SwiperSlide>
      </Swiper>
      <div className="text-center mt-4">
        <p className="text-white text-lg">
          Scroll through the best offers of the season!
        </p>
      </div>
    </div>
  );
}
