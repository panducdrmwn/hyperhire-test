'use client'

import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'],weight: ["300", "400", "500", "600", "700", "900"], });

const Navbar = () => {
  const [visible, setVisible] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const IsVisible = () => {
    if (window.scrollY >= 90) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }
  
  window.addEventListener('scroll',IsVisible)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  return (
    <nav className={`fixed w-full flex z-20 items-center justify-between px-4 sm:px-6 md:px-12 lg:px-24 xl:px-60 2xl:px-80 py-4 ${visible? 'bg-[rgba(105,203,216,0.9)]' :  'bg-transparent'}`}>
      <div className="flex items-center">
        <Image src="/logo.png" alt="logo" width={114} height={21} className="w-24 sm:w-[114px] h-auto" />
      </div>

      <div className="flex items-center gap-4 sm:gap-6 md:gap-10">
        <div className="relative" ref={dropdownRef}>
            <span 
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 font-black text-white text-sm sm:text-base cursor-pointer"
                aria-expanded={isOpen}
                aria-haspopup="true">
                채용
            <svg
                className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
            </span>

            {isOpen && (
            <div className={`absolute  ${inter.className} right-0 mt-2 w-[240px] bg-white rounded-lg shadow-lg py-1 z-50`}>
                <a
                href="#"
                className="block px-3 sm:px-4 py-2 text-xs sm:text-sm font-bold hover:bg-gray-100 transition-colors"
                onClick={() => setIsOpen(false)}
                >
                채용
                </a>
                <a
                href="#"
                className="block px-3 sm:px-4 py-2 text-xs sm:text-sm hover:bg-gray-100 transition-colors"
                onClick={() => setIsOpen(false)}
                >
                해외 개발자 원격 채용
                </a>
                <a
                href="#"
                className="block px-3 sm:px-4 py-2 text-xs sm:text-sm hover:bg-gray-100 transition-colors"
                onClick={() => setIsOpen(false)}
                >
                외국인 원격 채용 (비개발 직군)
                </a>
                <a
                href="#"
                className="block px-3 sm:px-4 py-2 text-xs sm:text-sm hover:bg-gray-100 transition-colors"
                onClick={() => setIsOpen(false)}
                >
                한국어 가능 외국인 채용
                </a>
            </div>
            )}
        </div>
        <span className='font-black text-white text-xs sm:text-sm md:text-base hidden sm:inline'>해외 개발자 활용 서비스</span>
      </div>

      <button className='text-[#4A77FF] text-xs sm:text-sm md:text-base font-black bg-white rounded-md py-1.5 sm:py-[6px] px-3 sm:px-4 md:px-[24px] whitespace-nowrap'>문의하기</button>
    </nav>
  )
}

export default Navbar