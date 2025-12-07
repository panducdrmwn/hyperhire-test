'use client'

import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'],weight: ["300", "400", "500", "600", "700", "900"], });

const Navbar = () => {
  const [visible, setVisible] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const hamburgerRef = useRef<HTMLButtonElement>(null)

  const IsVisible = () => {
    if (window.scrollY >= 90) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }
  
  useEffect(()=>{
    window.addEventListener('scroll',IsVisible)
  })

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node
      const isClickOnDropdown = dropdownRef.current?.contains(target)
      const isClickOnMobileMenu = mobileMenuRef.current?.contains(target)
      const isClickOnHamburger = hamburgerRef.current?.contains(target)
      
      if (!isClickOnDropdown && !isClickOnMobileMenu && !isClickOnHamburger) {
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
    <nav className={`fixed w-full flex z-20 items-center justify-between px-3 sm:px-4 md:px-6 lg:px-12 xl:px-16 2xl:px-[300px] py-3 sm:py-4 ${visible? 'bg-[rgba(105,203,216,0.9)]' :  'bg-transparent'}`}>
      <div className="flex items-center">
        <Image src="/logo.png" alt="logo" width={114} height={21} className="w-20 sm:w-24 md:w-[100px] lg:w-[114px] h-auto" />
      </div>

      

      <div className=" flex items-center gap-2 sm:gap-4 md:gap-6 lg:gap-10">
        <div className="relative" ref={dropdownRef}>
            <span 
                onClick={() => setIsOpen(!isOpen)}
                className=" hidden sm:flex flex items-center gap-1 sm:gap-2 px-1.5 sm:px-2 md:px-4 py-1.5 sm:py-2 font-black text-white text-xs sm:text-sm md:text-base cursor-pointer"
                aria-expanded={isOpen}
                aria-haspopup="true">
                채용
            <svg
                className={`w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
            </span>

            {isOpen && (
            <div className={`absolute ${inter.className} right-[-80] sm:right-0 mt-[-25] sm:mt-2 w-[200px] sm:w-[240px] bg-white rounded-lg shadow-lg py-1 z-50`}>
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
        <span className='font-black text-white text-xs sm:text-sm md:text-base hidden md:inline'>해외 개발자 활용 서비스</span>
      </div>

      <div className="flex items-center gap-2">
        {/* Hamburger Menu - Mobile Only */}
        <button
          ref={hamburgerRef}
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden flex flex-col justify-center items-center w-6 h-6 cursor-pointer"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span className="bg-white block h-0.5 w-6 rounded-sm"></span>
          <span className="bg-white block h-0.5 w-6 rounded-sm my-1"></span>
          <span className="bg-white block h-0.5 w-6 rounded-sm"></span>
        </button>
        <button className='hidden sm:inline text-[#4A77FF] text-[10px] sm:text-xs md:text-sm lg:text-base font-black bg-white rounded-md py-1 sm:py-1.5 md:py-[6px] px-2 sm:px-3 md:px-4 lg:px-6 xl:px-[24px] whitespace-nowrap'>문의하기</button>
      </div>
      
            
    </nav>
  )
}

export default Navbar