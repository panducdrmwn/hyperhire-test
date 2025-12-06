import React from 'react';

interface TextProps {
  children: React.ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'body' | 'caption' | 'label';
  weight?: 'normal' | 'bold' | 'black';
  color?: 'black' | 'white' | 'primary' | 'secondary' | 'gray';
  className?: string;
}

export default function Text({
  children,
  variant = 'body',
  weight = 'normal',
  color = 'white',
  className = '',
}: TextProps) {
  const variants = {
    h1: 'text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-black leading-tight',
    h2: 'text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-black',
    h3: 'text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-black',
    body: 'text-[14px] sm:text-[16px] md:text-[18px]',
    caption: 'text-[12px] sm:text-[14px]',
    label: 'text-[11px] sm:text-[12px] font-black',
  };
  
  const weights = {
    normal: 'font-normal',
    bold: 'font-bold',
    black: 'font-black',
  };
  
  const colors = {
    black : 'text-black',
    white: 'text-white',
    primary: 'text-[#4A77FF]',
    secondary: 'text-[#5E626F]',
    gray: 'text-[#343741]',
  };

  const Tag = variant.startsWith('h') ? variant as 'h1' | 'h2' | 'h3' : 'p';

  return (
    <Tag className={`${variants[variant]} ${weights[weight]} ${colors[color]} ${className}`}>
      {children}
    </Tag>
  );
}

