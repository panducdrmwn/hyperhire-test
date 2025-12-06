'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], weight: ["300", "400", "500", "600", "700", "900"] });

interface DropdownMenuProps {
  trigger: React.ReactNode;
  items: Array<{
    id: string | number;
    label: string;
    href?: string;
    onClick?: () => void;
  }>;
  className?: string;
}

export default function DropdownMenu({ trigger, items, className = '' }: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <div onClick={() => setIsOpen(!isOpen)}>
        {trigger}
      </div>

      {isOpen && (
        <div className={`absolute ${inter.className} right-[-80] sm:right-0 mt-[-25] sm:mt-2 w-[200px] sm:w-[240px] bg-white rounded-lg shadow-lg py-1 z-50`}>
          {items.map((item) => (
            <a
              key={item.id}
              href={item.href || '#'}
              className="block px-3 sm:px-4 py-2 text-xs sm:text-sm hover:bg-gray-100 transition-colors"
              onClick={() => {
                item.onClick?.();
                setIsOpen(false);
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

