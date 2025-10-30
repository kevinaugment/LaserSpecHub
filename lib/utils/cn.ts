/**
 * Utility function for conditionally joining classNames together
 * Useful for combining Tailwind CSS classes with conditions
 */

import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}



