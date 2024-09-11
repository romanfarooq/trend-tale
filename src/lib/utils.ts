import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getInitials(givenName: string, familyName: string) {
  const firstInitial = givenName.charAt(0).toUpperCase();
  const lastInitial = familyName.charAt(0).toUpperCase();
  return `${firstInitial}${lastInitial}`;
}
