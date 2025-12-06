"use client";
import Navbar from "./components/navbar";
import Image from "next/image";
import SwiperCoverflow from "./components/SwiperCoverflow";
import ServiceSlide from "./components/ServiceSlide";
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

("swiper/modules");

export default function Home() {
  return (
    <div className="flex min-h-screen w-full">
      <main
        className="flex pt-20 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-60 2xl:px-80 min-h-screen w-full flex-col bg-cover bg-no-repeat"
        style={{
          backgroundImage: 'url("/Group 5201.png")',
        }}
      >
        {/* <Navbar /> */}

        <section>
          <div
            id="upper"
            className="pt-16 flex flex-col lg:flex-row gap-8 lg:gap-0"
          >
            <div id="left" className="pt-4 flex flex-col w-full lg:w-[50%] ">
              <motion.div
                id="left-tootlip"
                className="w-[120px] sm:w-[150px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <Image
                  src="/Frame 5040.png"
                  alt="logo"
                  width={150}
                  height={48}
                  className="w-full h-auto"
                />
              </motion.div>
              <motion.h1
                id="title"
                className="pt-5 text-white text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-black leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                최고의 실력을 가진 <br />
                외국인 인재를 찾고 계신가요?
              </motion.h1>
              <motion.p
                id="subtitle"
                className="pt-5 text-white text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-black"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                법률 및 인사관리 부담없이 <br />
                1주일 이내에 원격으로 채용해보세요.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="pt-6 text-white text-[16px] sm:text-[18px] font-black underline"
              >
                개발자가 필요하신가요?
              </motion.p>
              <motion.div
                id="lower-subtitle"
                className="pt-10 flex flex-col sm:flex-row gap-4 sm:gap-3 md:gap-4 lg:justify-between mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex flex-col gap-2 sm:gap-3 border-t pt-2 border-white">
                  <span className="text-white text-[16px] sm:text-[18px] font-black">
                    평균 월 <span>120</span>만원
                  </span>
                  <p className="text-white text-[14px] sm:text-[16px] font-black">
                    임금을 해당 국가를 기준
                    <br />
                    으로 계산합니다.
                  </p>
                </div>
                <div className="flex flex-col gap-2 sm:gap-3 border-t pt-2 border-white">
                  <span className="text-white text-[16px] sm:text-[18px] font-black">
                    최대 <span>3</span>회 인력교체
                  </span>
                  <p className="text-white text-[14px] sm:text-[16px] font-black">
                    막상 채용해보니 맞지 않<br />
                    아도 걱정하지 마세요.{" "}
                  </p>
                </div>
                <div className="flex flex-col gap-2 sm:gap-3 border-t pt-2 border-white">
                  <span className="text-white text-[16px] sm:text-[18px] font-black">
                    평균 <span>3</span>일, 최대 <span>10</span>일
                  </span>
                  <p className="text-white text-[14px] sm:text-[16px] font-black">
                    임금을 해당 국가를 기준
                    <br />
                    으로 계산합니다.
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
              id="right"
              className="w-full lg:w-[50%] flex items-center flex-col justify-center mt-8 lg:mt-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div
                id="right-tooltip"
                className="w-[120px] sm:w-[140px] md:w-[152px]"
              >
                <Image
                  src={"/Group 5097.png"}
                  width={152}
                  height={51}
                  alt="right tooltip"
                  className="w-full h-auto"
                />
              </div>
              <SwiperCoverflow />
            </motion.div>
          </div>

          <div id="lower" className="mt-8 md:mt-12 lg:mt-25 mb-8 md:mb-12">
            <ServiceSlide />
          </div>
        </section>

        
      </main>
    </div>
  );
}
