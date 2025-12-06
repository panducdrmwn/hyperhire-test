'use client';

import React, { useState, useEffect, useRef } from 'react';
import Logo from '../atoms/Logo';
import Button from '../atoms/Button';
import Text from '../atoms/Text';
import DropdownMenu from '../molecules/DropdownMenu';
import HamburgerMenu from '../molecules/HamburgerMenu';

export default function Navbar() {
  const [visible, setVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const IsVisible = () => {
    if (window.scrollY >= 90) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', IsVisible);
    return () => window.removeEventListener('scroll', IsVisible);
  }, []);

  const dropdownItems = [
    { id: 1, label: '채용', href: '#' },
    { id: 2, label: '해외 개발자 원격 채용', href: '#' },
    { id: 3, label: '외국인 원격 채용 (비개발 직군)', href: '#' },
    { id: 4, label: '한국어 가능 외국인 채용', href: '#' },
  ];

  return (
    <nav className={`fixed w-full flex z-20 items-center justify-between px-3 sm:px-4 md:px-6 lg:px-12 xl:px-16 2xl:px-[300px] py-3 sm:py-4 ${visible ? 'bg-[rgba(105,203,216,0.9)]' : 'bg-transparent'}`}>
      <Logo src="/logo.png" alt="logo" width={114} height={21} />

      <div className="flex items-center gap-2 sm:gap-4 md:gap-6 lg:gap-10">
        <div className="hidden sm:block">
          <DropdownMenu
            trigger={
              <span className="flex items-center gap-1 sm:gap-2 px-1.5 sm:px-2 md:px-4 py-1.5 sm:py-2 font-black text-white text-xs sm:text-sm md:text-base cursor-pointer">
                채용
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            }
            items={dropdownItems}
          />
        </div>
        <Text variant="body" weight="black" color="white" className="hidden md:inline text-xs sm:text-sm md:text-base">
          해외 개발자 활용 서비스
        </Text>
      </div>

      <div className="flex items-center gap-2">
        <HamburgerMenu isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
        <Button variant="primary" size="md" className="hidden sm:inline">
          문의하기
        </Button>
      </div>
    </nav>
  );
}

