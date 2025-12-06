import Image from 'next/image';

interface LogoProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  responsive?: boolean;
}

export default function Logo({
  src,
  alt,
  width = 114,
  height = 21,
  className = '',
  responsive = true,
}: LogoProps) {
  const responsiveClasses = responsive 
    ? 'w-20 sm:w-24 md:w-[100px] lg:w-[114px] h-auto'
    : '';

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`${responsiveClasses} ${className}`}
    />
  );
}

