import Text from '../atoms/Text';

interface FeatureCardProps {
  title: string;
  description: string;
  className?: string;
}

export default function FeatureCard({ title, description, className = '' }: FeatureCardProps) {
  return (
    <div className={`flex flex-col gap-2 sm:gap-3 border-t pt-2 border-white ${className}`}>
      <Text variant="body" weight="black" color="white" className="text-[14px] sm:text-[16px] md:text-[18px]">
        {title}
      </Text>
      <Text variant="caption" weight="black" color="white" className="text-[12px] sm:text-[14px] md:text-[16px]">
        {description}
      </Text>
    </div>
  );
}

