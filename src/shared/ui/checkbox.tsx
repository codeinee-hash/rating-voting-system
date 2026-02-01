import { forwardRef, type InputHTMLAttributes } from 'react';
import { cn } from '@/shared/lib/css';
import { Check } from 'lucide-react';

interface CheckboxProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'type'
> {
  label?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, ...props }, ref) => {
    return (
      <label className="flex items-center gap-1.5! cursor-pointer group select-none">
        <div className="relative">
          <input
            type="checkbox"
            className="peer sr-only"
            ref={ref}
            {...props}
          />
          <div
            className={cn(
              'flex items-center justify-center h-4 w-4 rounded border border-white/20 bg-white/5 shadow-sm ring-offset-black transition-all peer-checked:bg-indigo-500 peer-checked:border-indigo-500 peer-focus-visible:ring-2 peer-focus-visible:ring-indigo-500/30 group-hover:border-indigo-400',
              className
            )}
          />
          <Check
            className="absolute left-0.5 top-0.5 inset-0 m-auto h-3 w-3 text-white transition-all duration-200 scale-0 opacity-0 peer-checked:scale-100 peer-checked:opacity-100 pointer-events-none"
            strokeWidth={3}
          />
        </div>
        {label && (
          <span className="text-sm font-medium leading-none text-gray-300 group-hover:text-indigo-300 transition-colors">
            {label}
          </span>
        )}
      </label>
    );
  }
);

Checkbox.displayName = 'Checkbox';
