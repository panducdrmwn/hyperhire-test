import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";

interface ServiceSlideProps {
  slides?: Array<{
    id: number;
    image: string;
    title?: string;
  }>;
}

export default function ServiceSlide({
  slides = [
    { id: 1, image: "/Frame 5065.png", title: "해외 마케팅" },
    { id: 2, image: "/Frame 5031.png", title: "퍼블리셔" },
    { id: 3, image: "/Frame 5032.png", title: "캐드원(제도사)" },
    { id: 4, image: "/Frame 5033.png", title: "해외 세일즈" },
    { id: 5, image: "/Frame 5034.png", title: "해외 CS" },
  ],
}: ServiceSlideProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Swiper
        slidesPerView={1}
        spaceBetween={100}
        centeredSlides={false}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 25,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 100,
          },
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="flex flex-row items-center gap-6 p-4 bg-[rgba(255,255,255,0.2)] w-[332px] h-[88px] rounded-2xl">
              <Image
                src={slide.image}
                width={56}
                height={56}
                alt="logo"
                className="shrink-0"
              />
              <span className="text-white font-[900] text-[24px] ">
                {slide.title}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
}
