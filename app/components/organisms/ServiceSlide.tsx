import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import ServiceCard from "../molecules/ServiceCard";

import "swiper/css";
import "swiper/css/pagination";

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
      className="hidden sm:block"
    >
      <Swiper
        slidesPerView={1}
        spaceBetween={50}
        centeredSlides={false}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          480: {
            slidesPerView: 1.5,
            spaceBetween: 15,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2.5,
            spaceBetween: 25,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 60,
          },
          1536: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <ServiceCard image={slide.image} title={slide.title || ""} />
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
}

