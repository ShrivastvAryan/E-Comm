'use client';
import React from "react";
import Image from "next/image";
import NewCollection from "./newcollection";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Hero = () => {
  return (
    <>
      <div className="mt-4">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000 }}
          loop={true}
          pagination={{ clickable: true }}
          className="w-screen h-40 sm:h-56 md:h-64 lg:h-80 xl:h-[30rem]"
        >
          <SwiperSlide>
            <div className="relative w-full h-full">
              <Image src="/banner.png" fill className="object-center" alt="Banner 1" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full h-full">
              <Image src="/banner2.png" fill className="object-center" alt="Banner 2" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full h-full">
              <Image src="/banner3.webp" fill className="object-center" alt="Banner 3" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <NewCollection />
    </>
  );
};

export default Hero;
