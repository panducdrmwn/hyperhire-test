"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import { useState, useEffect } from "react";
import ProfileCard from "../molecules/ProfileCard";

import "swiper/css";
import "swiper/css/effect-coverflow";

interface SwiperCoverflowProps {
  slides?: Array<{
    id: number;
    image: string;
    name: string;
    role: string;
    skills: string[];
    badges: string[];
  }>;
}

export default function SwiperCoverflow({
  slides = [
    {
      id: 1,
      image: "/Ellipse 12.png",
      name: "Abhishek Gupta",
      role: "마케팅 · 2y+",
      skills: ["마케팅 콘텐츠 제작", "인스타그램 관리"],
      badges: ["트위터 관리", "블로그 글 작성"],
    },
    {
      id: 2,
      image: "/Ellipse 12.png",
      name: "Abhishek Gupta",
      role: "마케팅 · 2y+",
      skills: ["마케팅 콘텐츠 제작", "인스타그램 관리"],
      badges: ["트위터 관리", "블로그 글 작성"],
    },
    {
      id: 3,
      image: "/Ellipse 12.png",
      name: "Abhishek Gupta",
      role: "마케팅 · 2y+",
      skills: ["마케팅 콘텐츠 제작", "인스타그램 관리"],
      badges: ["트위터 관리", "블로그 글 작성"],
    },
  ],
}: SwiperCoverflowProps) {
  const [swiper, setSwiper] = useState<any>(null);

  useEffect(() => {
    if (swiper) {
      const timer = setTimeout(() => {
        swiper.slideTo(1);
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [swiper]);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <Swiper
        onSwiper={(s) => {
          setSwiper(s);
        }}
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
            <ProfileCard
              image={slide.image}
              name={slide.name}
              role={slide.role}
              skills={slide.skills}
              badges={slide.badges}
              badgeImage="/image 17.png"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

