import { forwardRef, type InputHTMLAttributes } from 'react';
import { cn } from '@/shared/lib/css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, ...props }, ref) => {
    return (
      <div className="w-full space-y-1.5">
        {label && (
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-300">
            {label}
          </label>
        )}

        <input
          className={cn(
            'flex h-10 w-full rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm px-3! py-2! text-sm text-white ring-offset-black file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/30 focus-visible:border-indigo-400 disabled:cursor-not-allowed disabled:opacity-50 transition-all shadow-lg',
            error &&
              'border-red-500 focus-visible:ring-red-500/30 focus-visible:border-red-500',
            className
          )}
          ref={ref}
          {...props}
        />

        {error && <p className="text-sm text-red-500 font-medium">{error}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';
