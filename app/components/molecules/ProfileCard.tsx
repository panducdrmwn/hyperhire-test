import Image from 'next/image';
import Badge from '../atoms/Badge';
import Text from '../atoms/Text';

interface ProfileCardProps {
  image: string;
  name: string;
  role: string;
  skills: string[];
  badges: string[];
  badgeImage?: string;
  className?: string;
}

export default function ProfileCard({
  image,
  name,
  role,
  skills,
  badges,
  badgeImage,
  className = '',
}: ProfileCardProps) {
  return (
    <div className={` h-full flex flex-col justify-center items-center bg-white rounded-xl sm:rounded-2xl px-8 sm:px-6 md:px-8 py-8 sm:py-6 ${className}`}>
      <div className="flex justify-center mb-3 sm:mb-4 relative">
        <div className="relative inline-block">
          <Image
            src={image}
            width={120}
            height={120}
            alt="profile"
            className="rounded-full w-20 h-20 sm:w-24 sm:h-24 md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px]"
          />
          {badgeImage && (
            <div className="absolute bottom-0 right-1 sm:bottom-1 sm:right-2">
              <Image
                src={badgeImage}
                width={25}
                height={18}
                alt="badge"
                className="object-contain w-4 h-3 sm:w-5 sm:h-[18px]"
              />
            </div>
          )}
        </div>
      </div>
      <Text variant="h3" weight="black" color="black" className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] mb-1 ">
        {name}
      </Text>
      <Text variant="body" weight="black" color="primary" className="text-[14px] sm:text-[15px] md:text-[16px] mb-2 sm:mb-3 ">
        {role}
      </Text>
      <div className="flex flex-col gap-1.5 sm:gap-2 px-2">
        {skills.map((skill, index) => (
          <Badge key={index} className="whitespace-nowrap overflow-hidden text-ellipsis">
            {skill}
          </Badge>
        ))}
      </div>
      <div className="flex flex-row mt-3 sm:mt-4 w-full ">
        {badges.map((badge, index) => (
          <Badge key={index} className="flex-1 text-center whitespace-nowrap ">
            {badge}
          </Badge>
        ))}
      </div>
    </div>
  );
}

