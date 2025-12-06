"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SwiperCoverflow from "../organisms/SwiperCoverflow";
import ServiceSlide from "../organisms/ServiceSlide";
import Text from "../atoms/Text";
import FeatureCard from "../molecules/FeatureCard";
import Icon from "../atoms/Icon";

export default function HomeTemplate() {
  return (
    <main
      className="flex pt-16 sm:pt-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-42 2xl:px-[300px] min-h-screen w-full flex-col bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: 'url("/Group 5201.png")',
      }}
    >
      <section>
        <div
          id="upper"
          className="pt-8 sm:pt-12 md:pt-16 flex flex-col lg:flex-row gap-8 lg:gap-8 xl:gap-0"
        >
          <div id="left" className="pt-2 sm:pt-4 flex flex-col w-full lg:w-[50%] lg:pr-4">
            <motion.div
              id="left-tootlip"
              className="w-[100px] sm:w-[120px] md:w-[150px] sm:block hidden"
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
            <motion.div
              id="left-tootlip"
              className="w-[100px] sm:w-[120px] md:w-[150px] sm:hidden block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <Image
                src="/Frame 5041.png"
                alt="logo"
                width={150}
                height={48}
                className="w-full h-auto"
              />
            </motion.div>
            <motion.h1
              id="title"
              className="pt-3 sm:pt-5 text-white text-[36px] sm:text-[36px] md:text-[32px] lg:text-[38px] xl:text-[44px] 2xl:text-[48px] font-black leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              최고의 실력을 가진 <br /> 외국인 인재를 찾고 계신가요?
            </motion.h1>
            <motion.p
              id="subtitle"
              className="pt-3 sm:pt-5 text-white text-[18px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] font-black"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              법률 및 인사관리 부담없이 <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>1주일 이내에 원격으로 채용해보세요.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="pt-4 hidden sm:block pt-6 text-white text-[14px] sm:text-[16px] md:text-[18px] font-black underline"
            >
              개발자가 필요하신가요?
            </motion.p>
            <motion.div
              id="lower-subtitle"
              className="pt-6 sm:pt-8 md:pt-10 sm:flex flex-col sm:flex-row gap-4 sm:gap-3 md:gap-4 lg:justify-between lg:gap-6 mt-2 sm:mt-4 hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <FeatureCard
                title="평균 월 120만원"
                description="임금을 해당 국가를 기준으로 계산합니다."
              />
              <FeatureCard
                title="최대 3회 인력교체"
                description="막상 채용해보니 맞지 않아도 걱정하지 마세요."
              />
              <FeatureCard
                title="평균 3일, 최대 10일"
                description="임금을 해당 국가를 기준으로 계산합니다."
              />
            </motion.div>
          </div>

          <motion.div
            id="right"
            className="w-full lg:w-[50%] flex items-center flex-col justify-center mt-4 sm:mt-6 lg:mt-0 lg:pl-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div id="right-tooltip" className="mb-2 sm:mb-4">
              <Image
                src={"/Group 5097.png"}
                width={152}
                height={51}
                alt="right tooltip"
              />
            </div>
            <SwiperCoverflow />
          </motion.div>
        </div>

        <div id="lower" className="mt-6 sm:mt-8 md:mt-12 lg:mt-16 xl:mt-20 mb-6 sm:mb-8 md:mb-12">
          <ServiceSlide />
          <div className="block sm:hidden pb-6 w-[80%] grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <span className="flex flex-row items-center gap-3">
              <Icon src="/Checkbox.png" alt="check-icon" size="sm" />
              <Text variant="body" weight="black" color="white">한국어 능력</Text>
            </span>
            <span className="flex flex-row items-center gap-3">
              <Icon src="/Checkbox.png" alt="check-icon" size="sm" />
              <Text variant="body" weight="black" color="white">업무 수행 능력</Text>
            </span>
            <span className="flex flex-row items-center gap-3">
              <Icon src="/Checkbox.png" alt="check-icon" size="sm" />
              <Text variant="body" weight="black" color="white">겸업 여부</Text>
            </span>
            <span className="flex flex-row items-center gap-3">
              <Icon src="/Checkbox.png" alt="check-icon" size="sm" />
              <Text variant="body" weight="black" color="white">평판 조회</Text>
            </span>
          </div>
          <p className="block sm:hidden pb-4 text-[#FBFF23] font-black text-[16px] underline">
            개발자가 필요하신가요?
          </p>
        </div>
      </section>
    </main>
  );
}

