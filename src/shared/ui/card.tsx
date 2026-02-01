import { cn } from '@/shared/lib/css';
import { forwardRef, type HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl text-white shadow-xl',
          hover &&
            'transition-all hover:shadow-2xl hover:border-indigo-400/30 hover:bg-white/10 transform duration-200',
          className
        )}
        {...props}
      />
    );
  }
);

Card.displayName = 'Card';
