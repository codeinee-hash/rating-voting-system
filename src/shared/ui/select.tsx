import { cn } from '@/shared/lib/css';
import { AnimatePresence, motion } from 'framer-motion';
import { Check, ChevronDown } from 'lucide-react';
import { useEffect, useRef, useState, type FC } from 'react';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  value?: string;
  onValueChange?: (value: string) => void;
  options: SelectOption[];
  placeholder?: string;
  label?: string;
  className?: string;
  error?: string;
  disabled?: boolean;
}

export const Select: FC<SelectProps> = ({
  value,
  onValueChange,
  options,
  placeholder = 'Select option',
  label,
  className,
  error,
  disabled = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((option) => option.value === value);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (optionValue: string) => {
    onValueChange?.(optionValue);
    setIsOpen(false);
  };

  return (
    <div className={cn('space-y-1.5! relative', className)} ref={containerRef}>
      {label && (
        <label className="text-sm font-medium leading-none text-gray-300 block">
          {label}
        </label>
      )}

      <button
        type="button"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        className={cn(
          'flex h-10 w-full items-center justify-between rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm px-3! py-2! text-sm text-white ring-offset-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-400 disabled:cursor-not-allowed disabled:opacity-50 transition-all shadow-lg',
          error && 'border-red-500 focus:ring-red-500/30 focus:border-red-500',
          isOpen && 'border-indigo-400 ring-2 ring-indigo-500/30'
        )}
        disabled={disabled}
      >
        <span
          className={cn('block truncate', !selectedOption && 'text-gray-500')}
        >
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown
          className={cn(
            'h-4 w-4 shrink-0 opacity-50 transition-transform duration-200',
            isOpen && 'rotate-180'
          )}
        />
      </button>

      {error && (
        <p className="text-sm text-red-500 font-medium mt-1.5!">{error}</p>
      )}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -5, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -5, scale: 0.95 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="absolute z-50 w-full min-w-[8rem] overflow-hidden rounded-md border border-white/10 bg-black/80 backdrop-blur-xl shadow-2xl text-white mt-1!"
          >
            <div className="p-1! max-h-[300px] overflow-y-auto">
              {options.map((option) => (
                <div
                  key={option.value}
                  className={cn(
                    'relative flex w-full cursor-pointer select-none items-center rounded-sm py-1.5! px-2! text-sm outline-none transition-colors hover:bg-white/10 hover:text-indigo-300 data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
                    value === option.value &&
                      'bg-indigo-500/20! text-indigo-300 font-medium'
                  )}
                  onClick={() => handleSelect(option.value)}
                >
                  <span className="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
                    {value === option.value && (
                      <Check className="h-4 w-4 text-indigo-400" />
                    )}
                  </span>
                  <span className="truncate">{option.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
