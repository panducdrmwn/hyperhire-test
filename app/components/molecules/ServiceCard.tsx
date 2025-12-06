import Image from 'next/image';
import Icon from '../atoms/Icon';

interface ServiceCardProps {
  image: string;
  title: string;
  className?: string;
}

export default function ServiceCard({ image, title, className = '' }: ServiceCardProps) {
  return (
    <div className={`flex flex-row items-center gap-3 sm:gap-4 md:gap-6 p-3 sm:p-4 bg-[rgba(255,255,255,0.2)] sm:w-[332px] md:w-[332px] lg:w-[290px] xl:w-[20vw] 2xl:w-[calc(22vw-95px)] h-[72px] sm:h-[80px] md:h-[88px] rounded-xl ${className}`}>
      <Icon src={image} alt={title} size="lg" className="shrink-0" />
      <span className="text-white font-[900] text-[16px] sm:text-[20px] md:text-[22px] lg:text-[24px] truncate">
        {title}
      </span>
    </div>
  );
}

