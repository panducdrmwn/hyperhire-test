import Image from 'next/image';

interface IconProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function Icon({
  src,
  alt,
  width,
  height,
  className = '',
  size = 'md',
}: IconProps) {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5 sm:w-6 sm:h-6',
    lg: 'w-8 h-8 sm:w-10 sm:h-10',
  };

  const defaultSize = size === 'sm' ? 16 : size === 'md' ? 20 : 32;

  return (
    <Image
      src={src}
      alt={alt}
      width={width || defaultSize}
      height={height || defaultSize}
      className={`${sizes[size]} ${className}`}
    />
  );
}

