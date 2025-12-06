import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function Badge({
  children,
  variant = 'default',
  size = 'md',
  className = '',
}: BadgeProps) {
  const baseStyles = 'font-[900] rounded-lg border border-[#C1C5CF] text-center';
  
  const variants = {
    default: 'text-[#5E626F]',
    primary: 'text-[#4A77FF] border-[#4A77FF]',
    secondary: 'text-white border-white',
  };
  
  const sizes = {
    sm: 'text-[11px] sm:text-[12px] py-[3px] px-[6px] sm:px-[8px]',
    md: 'text-[12px] sm:text-[14px] md:text-[16px] py-[3px] sm:py-[4px] px-[2px] sm:px-[10px]',
    lg: 'text-[14px] sm:text-[16px] md:text-[18px] py-2 px-4',
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}>
      {children}
    </span>
  );
}

