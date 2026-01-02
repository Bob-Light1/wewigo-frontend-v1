import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// Permet de combiner intelligemment plusieurs className Tailwind
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
