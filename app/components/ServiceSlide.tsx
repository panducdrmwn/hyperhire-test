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
            <div className="flex flex-row items-center gap-3 sm:gap-4 md:gap-6 p-3 sm:p-4 bg-[rgba(255,255,255,0.2)] sm:w-[332px] md:w-[332px] lg:w-[290px] xl:w-[290px] 2xl:w-[332px] h-[72px] sm:h-[80px] md:h-[88px] rounded-xl sm:rounded-2xl">
              <Image
                src={slide.image}
                width={56}
                height={56}
                alt="logo"
                className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
              />
              <span className="text-white font-[900] text-[16px] sm:text-[20px] md:text-[22px] lg:text-[24px] truncate">
                {slide.title}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
}
