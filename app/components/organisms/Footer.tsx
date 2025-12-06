import React from 'react';
import Logo from '../atoms/Logo';
import Text from '../atoms/Text';
import Icon from '../atoms/Icon';

interface FooterMenuProps {
  menus?: Array<{
    id: number;
    image: string;
    title?: string;
  }>;
}

export default function Footer({
  menus = [
    { id: 1, image: "/Frame 5042.png", title: "해외 개발자 원격 채용" },
    { id: 2, image: "/Frame 5043.png", title: "외국인 원격 채용 (비개발)" },
    { id: 3, image: "/Frame 5044.png", title: "한국어 가능 외국인 채용" },
    { id: 4, image: "/Frame 5045.png", title: "해외 개발자 활용 서비스" },
  ],
}: FooterMenuProps) {
  return (
    <footer className="bg-[rgba(251,251,251,1)] flex flex-col px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-[300px] py-12 sm:py-16 md:py-20">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16 w-full">
        <div className="flex flex-col gap-3 sm:gap-4 w-full lg:w-auto">
          <Logo src="/Frame 2012.png" alt="footer-logo" width={187} height={34} className="w-[150px] sm:w-[170px] md:w-[187px]" />
          <Text variant="body" weight="black" color="gray" className="text-[12px] sm:text-[13px] md:text-[14px]">
            우리는 국가의 장벽을 넘어 최고의 인재를 <br className="hidden sm:block" /> 매칭해드립니다.
          </Text>
          <Text variant="caption" weight="black" color="secondary" className="text-[11px] sm:text-[12px] md:text-[13px]">
            010-0000-0000
          </Text>
          <Text variant="caption" weight="black" color="secondary" className="text-[11px] sm:text-[12px] md:text-[13px]">
            aaaaa@naver.com
          </Text>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 w-full lg:w-auto">
          {menus.map((menu) => (
            <div key={menu.id} className="flex flex-col gap-3 sm:gap-4 bg-white p-3 sm:p-4 rounded-lg sm:rounded-xl w-full">
              <Icon src={menu.image} alt="footer-menu" size="lg" />
              <Text variant="body" weight="black" color="gray" className="text-[12px] sm:text-[13px] md:text-[14px]">
                {menu.title}
              </Text>
              <span className="flex flex-row items-center gap-1 font-black text-[#5E626F] text-[11px] sm:text-[12px] md:text-[14px]">
                바로가기
                <Icon src="/Arrow - Right Square.png" alt="arrow-icon" size="sm" className="w-4 h-4 sm:w-5 sm:h-5" />
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 grid-rows-3 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 w-full pt-8 sm:pt-10 md:pt-14">
        <div className="flex flex-col gap-2">
          <Text variant="label" color="gray">상호명</Text>
          <Text variant="caption" weight="black" color="secondary" className="text-[10px] sm:text-[11px] md:text-[13px]">
            하이퍼하이어
          </Text>
          <Text variant="caption" weight="black" color="secondary" className="text-[10px] sm:text-[11px] md:text-[13px]">
            Hyperhire India Private Limited
          </Text>
        </div>
        <div className="flex flex-col gap-2">
          <Text variant="label" color="gray">대표 CEO</Text>
          <Text variant="caption" weight="black" color="secondary" className="text-[10px] sm:text-[11px] md:text-[13px]">
            김주현
          </Text>
          <Text variant="caption" weight="black" color="secondary" className="text-[10px] sm:text-[11px] md:text-[13px]">
            Juhyun Kim
          </Text>
        </div>
        <div className="flex flex-col gap-2 row-start-2 md:row-auto">
          <Text variant="label" color="gray">사업자등록번호 CIN</Text>
          <Text variant="caption" weight="black" color="secondary" className="text-[10px] sm:text-[11px] md:text-[13px] break-words">
            427-86-01187
          </Text>
          <Text variant="caption" weight="black" color="secondary" className="text-[10px] sm:text-[11px] md:text-[13px] break-words">
            U74110DL2016PTC290812
          </Text>
        </div>
        <div className="flex flex-col gap-2 row-start-3 col-span-2 md:row-auto">
          <Text variant="label" color="gray">주소 ADDRESS</Text>
          <Text variant="caption" weight="black" color="secondary" className="text-[10px] sm:text-[11px] md:text-[13px]">
            서울특별시 강남대로 479, 지하 1층 238호
          </Text>
          <Text variant="caption" weight="black" color="secondary" className="text-[10px] sm:text-[11px] md:text-[13px]">
            D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi, <br className="hidden sm:block" />
            110053 India
          </Text>
        </div>
      </div>
      <Text variant="caption" weight="black" color="secondary" className="text-[11px] sm:text-[12px] md:text-[13px] pt-6 sm:pt-8 lg:text-left">
        ⓒ 2023 Hyperhire
      </Text>
    </footer>
  );
}

