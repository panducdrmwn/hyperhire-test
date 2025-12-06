'use client';

import React from 'react';

interface HamburgerMenuProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

export default function HamburgerMenu({ isOpen, onClick, className = '' }: HamburgerMenuProps) {
  return (
    <button
      onClick={onClick}
      className={`sm:hidden flex flex-col justify-center items-center w-6 h-6 cursor-pointer ${className}`}
      aria-label="Toggle menu"
      aria-expanded={isOpen}
    >
      <span className="bg-white block h-0.5 w-6 rounded-sm"></span>
      <span className="bg-white block h-0.5 w-6 rounded-sm my-1"></span>
      <span className="bg-white block h-0.5 w-6 rounded-sm"></span>
    </button>
  );
}

