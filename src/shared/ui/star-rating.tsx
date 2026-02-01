import { cn } from '@/shared/lib/css';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useState, type FC } from 'react';

interface StarRatingProps {
  max?: number;
  value?: number;
  onChange?: (value: number) => void;
  readOnly?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const StarRating: FC<StarRatingProps> = ({
  max = 5,
  value = 0,
  onChange,
  readOnly = false,
  size = 'md',
  className,
}) => {
  const [hoverValue, setHoverValue] = useState<number | null>(null);

  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
  };

  const handleMouseEnter = (index: number) => {
    if (!readOnly) {
      setHoverValue(index);
    }
  };

  const handleMouseLeave = () => {
    if (!readOnly) {
      setHoverValue(null);
    }
  };

  const handleClick = (index: number) => {
    if (!readOnly && onChange) {
      onChange(index);
    }
  };

  return (
    <div
      className={cn('flex items-center gap-1', className)}
      onMouseLeave={handleMouseLeave}
    >
      {[...Array(max)].map((_, i) => {
        const index = i + 1;
        const isFilled =
          hoverValue !== null ? index <= hoverValue : index <= value;
        const isHovered = hoverValue !== null && index <= hoverValue;

        return (
          <motion.button
            key={index}
            type="button"
            disabled={readOnly}
            onClick={() => handleClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            whileHover={!readOnly ? { scale: 1.2 } : {}}
            whileTap={!readOnly ? { scale: 0.9 } : {}}
            className={cn(
              'focus:outline-none transition-colors duration-200',
              readOnly ? 'cursor-default' : 'cursor-pointer'
            )}
            aria-label={`${index} stars`}
          >
            <Star
              className={cn(
                sizeClasses[size],
                'transition-all duration-200',
                isFilled
                  ? 'fill-yellow-400 text-yellow-400'
                  : 'fill-transparent text-gray-300',
                isHovered && !readOnly ? 'drop-shadow-md' : ''
              )}
            />
          </motion.button>
        );
      })}
    </div>
  );
};
