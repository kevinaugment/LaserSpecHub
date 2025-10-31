import * as React from 'react';
import { cn } from '@/lib/utils/cn';

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  error?: boolean;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, error, children, ...props }, ref) => {
    return (
      <select
        ref={ref}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
          backgroundPosition: 'right 0.5rem center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '1.5em 1.5em',
        }}
        className={cn(
          'w-full px-4 py-2 rounded-lg border transition-colors appearance-none bg-white',
          'focus:outline-none focus:ring-2 focus:ring-offset-0',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          {
            'border-gray-300 focus:border-primary-500 focus:ring-primary-500': !error,
            'border-red-500 focus:border-red-500 focus:ring-red-500': error,
          },
          className
        )}
        {...props}
      >
        {children}
      </select>
    );
  }
);

Select.displayName = 'Select';

// Radix UI-like components for compatibility
const SelectTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, children, ...props }, ref) => (
  <button
    ref={ref}
    className={cn(
      'flex h-10 w-full items-center justify-between rounded-md border border-gray-300 bg-white px-3 py-2 text-sm',
      'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
      'disabled:cursor-not-allowed disabled:opacity-50',
      className
    )}
    {...props}
  >
    {children}
  </button>
));
SelectTrigger.displayName = 'SelectTrigger';

const SelectValue = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement> & { placeholder?: string }
>(({ className, placeholder, children, ...props }, ref) => (
  <span ref={ref} className={cn('block truncate', className)} {...props}>
    {children || placeholder}
  </span>
));
SelectValue.displayName = 'SelectValue';

const SelectContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'relative z-50 min-w-[8rem] overflow-hidden rounded-md border border-gray-200 bg-white shadow-md',
      className
    )}
    {...props}
  >
    {children}
  </div>
));
SelectContent.displayName = 'SelectContent';

const SelectItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { value?: string }
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'relative flex cursor-pointer select-none items-center rounded-sm py-1.5 px-2 text-sm outline-none',
      'hover:bg-gray-100 focus:bg-gray-100',
      className
    )}
    {...props}
  >
    {children}
  </div>
));
SelectItem.displayName = 'SelectItem';

export { Select, SelectTrigger, SelectValue, SelectContent, SelectItem };










