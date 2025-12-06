import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
}: ButtonProps) {
  const baseStyles = 'font-black rounded-md whitespace-nowrap transition-colors';
  
  const variants = {
    primary: 'text-[#4A77FF] bg-white hover:bg-gray-50',
    secondary: 'text-white bg-transparent border border-white',
    outline: 'text-white bg-transparent border border-white hover:bg-white/10',
  };
  
  const sizes = {
    sm: 'text-[10px] sm:text-xs py-1 px-2 sm:px-3',
    md: 'text-xs sm:text-sm md:text-base py-1 sm:py-1.5 md:py-[6px] px-2 sm:px-3 md:px-4 lg:px-6 xl:px-[24px]',
    lg: 'text-base sm:text-lg py-2 sm:py-3 px-4 sm:px-6',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
}

