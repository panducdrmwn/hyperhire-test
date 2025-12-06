"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/effect-coverflow";

interface SwiperCoverflowProps {
  slides?: Array<{
    id: number;
    image: string;
    title?: string;
  }>;
}

export default function SwiperCoverflow({
  slides = [
    { id: 1, image: "/Ellipse 12.png" },
    { id: 2, image: "/Ellipse 12.png" },
    { id: 3, image: "/Ellipse 12.png" },
    { id: 4, image: "/Ellipse 12.png" },
    { id: 5, image: "/Ellipse 12.png" },
    { id: 6, image: "/Ellipse 12.png" },
  ],
}: SwiperCoverflowProps) {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Swiper
        loop={true}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        spaceBetween={10}
        coverflowEffect={{
          rotate: 0,
          stretch: 50,
          depth: 100,
          modifier: 2.5,
        }}
        navigation={true}
        modules={[EffectCoverflow, Navigation]}
        className="swiper-container !pt-4 w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide
            key={slide.id}
            className="!w-[302px] !h-[408px] sm:!w-[260px] sm:!h-[380px] md:!w-[292px] md:!h-[408px]"
          >
            <div className="w-[302px] h-[408px] flex flex-col justify-center items-center bg-white rounded-2xl px-8 py-6 ">
              <div className="flex justify-center mb-4 relative">
                <div className="relative inline-block">
                <Image
                  src={"/Ellipse 12.png"}
                  width={120}
                  height={120}
                  alt="profpic"
                  className="rounded-full"
                />
                  <div className="absolute bottom-1 right-2">
                    <Image
                      src={"/image 17.png"}
                      width={25}
                      height={18}
                      alt="badge"
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              <h3 className="text-[24px] font-[900] mb-1 text-center">
                Abhishek Gupta
              </h3>
              <p className="text-[16px] font-[900] text-[#4A77FF] mb-3 text-center">
                마케팅 · 2y+
              </p>
              <div className="flex flex-col gap-2 text-sm sm:text-base">
                <span className="text-[#5E626F] font-[900] text-[16px] border-1 border-[#C1C5CF] text-center py-[4px] px-[12px] rounded-lg">
                  마케팅 콘텐츠 제작
                </span>
                <p className="text-[#5E626F] font-[900] text-[16px] border-1 border-[#C1C5CF] text-center py-[4px] px-[12px] rounded-lg">
                  인스타그램 관리
                </p>
              </div>
              <div className="flex flex-row mt-4 text-xs sm:text-sm">
                <span className="px-3 text-[#5E626F] font-[900] text-[16px] py-1 border-1 border-[#C1C5CF] py-[4px] px-[12px] rounded-lg">
                  트위터 관리
                </span>
                <span className="px-3 text-[#5E626F] font-[900] text-[16px] py-1 border-1 border-[#C1C5CF] py-[4px] px-[12px] rounded-lg">
                  블로그 글 작성
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
