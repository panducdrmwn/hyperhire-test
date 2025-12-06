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
  ],
}: SwiperCoverflowProps) {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Swiper
        loop={true}
        initialSlide={2}
        cssMode={false}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        spaceBetween={-180}
        coverflowEffect={{
          rotate: 0,
          stretch: 30,
          depth: 100,
          modifier: 2.5,
        }}
        breakpoints={{
          320: {
            spaceBetween: -180,
            coverflowEffect: {
              stretch: 20,
              depth: 50,
            },
          },
          640: {
            spaceBetween: -140,
            coverflowEffect: {
              stretch: 30,
              depth: 80,
            },
          },
          768: {
            spaceBetween: -110,
            coverflowEffect: {
              stretch: 40,
              depth: 100,
            },
          },
          1024: {
            spaceBetween: -90,
            coverflowEffect: {
              stretch: 50,
              depth: 100,
            },
          },
        }}
        navigation={true}
        modules={[EffectCoverflow, Navigation]}
        className="swiper-container !pt-4 w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide
            key={slide.id}
            className="!w-[240px] !h-[340px] sm:!w-[260px] sm:!h-[360px] md:!w-[280px] md:!h-[390px] lg:!w-[292px] lg:!h-[408px]"
          >
            <div className="w-full h-full flex flex-col justify-center items-center bg-white rounded-xl sm:rounded-2xl px-4 sm:px-6 md:px-8 py-4 sm:py-6">
              <div className="flex justify-center mb-3 sm:mb-4 relative">
                <div className="relative inline-block">
                <Image
                  src={"/Ellipse 12.png"}
                  width={120}
                  height={120}
                  alt="profpic"
                  className="rounded-full w-20 h-20 sm:w-24 sm:h-24 md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px]"
                />
                  <div className="absolute bottom-0 right-1 sm:bottom-1 sm:right-2">
                    <Image
                      src={"/image 17.png"}
                      width={25}
                      height={18}
                      alt="badge"
                      className="object-contain w-4 h-3 sm:w-5 sm:h-[18px]"
                    />
                  </div>
                </div>
              </div>
              <h3 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-[900] mb-1 text-center">
                Abhishek Gupta
              </h3>
              <p className="text-[14px] sm:text-[15px] md:text-[16px] font-[900] text-[#4A77FF] mb-2 sm:mb-3 text-center">
                마케팅 · 2y+
              </p>
              <div className="flex flex-col gap-1.5 sm:gap-2 w-full px-2">
                <span className="text-[#5E626F] font-[900] text-[12px] sm:text-[14px] md:text-[16px] border-1 border-[#C1C5CF] text-center py-[3px] sm:py-[4px] px-[8px] sm:px-[12px] rounded-lg whitespace-nowrap overflow-hidden text-ellipsis">
                  마케팅 콘텐츠 제작
                </span>
                <p className="text-[#5E626F] font-[900] text-[12px] sm:text-[14px] md:text-[16px] border-1 border-[#C1C5CF] text-center py-[3px] sm:py-[4px] px-[8px] sm:px-[12px] rounded-lg whitespace-nowrap overflow-hidden text-ellipsis">
                  인스타그램 관리
                </p>
              </div>
              <div className="flex flex-row gap-1.5 sm:gap-2 mt-3 sm:mt-4 w-full px-2">
                <span className="flex-1 text-[#5E626F] font-[900] text-[11px] sm:text-[13px] md:text-[14px] lg:text-[16px] border-1 border-[#C1C5CF] py-[3px] sm:py-[4px] px-[6px] sm:px-[8px] md:px-[12px] rounded-lg text-center whitespace-nowrap overflow-hidden text-ellipsis">
                  트위터 관리
                </span>
                <span className="flex-1 text-[#5E626F] font-[900] text-[11px] sm:text-[13px] md:text-[14px] lg:text-[16px] border-1 border-[#C1C5CF] py-[3px] sm:py-[4px] px-[6px] sm:px-[8px] md:px-[12px] rounded-lg text-center whitespace-nowrap overflow-hidden text-ellipsis">
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
