import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getTimestamp = (createdAt: Date): string => {
    // Calculate the time difference in milliseconds
    const now = new Date();
    const elapsedTime = now.getTime() - createdAt.getTime();

    // Define time intervals in milliseconds
    const minute = 60 * 1000;
    const hour = 60 * minute;
    const day = 24 * hour;
    const week = 7 * day;
    const month = 30 * day;
    const year = 365 * day;

    // Calculate the time ago
    if (elapsedTime < minute) {
        return 'Just now';
    } else if (elapsedTime < hour) {
        const minutes = Math.floor(elapsedTime / minute);
        return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else if (elapsedTime < day) {
        const hours = Math.floor(elapsedTime / hour);
        return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else if (elapsedTime < week) {
        const days = Math.floor(elapsedTime / day);
        return `${days} day${days > 1 ? 's' : ''} ago`;
    } else if (elapsedTime < month) {
        const weeks = Math.floor(elapsedTime / week);
        return `${weeks} week${weeks > 1 ? 's' : ''} ago`;
    } else if (elapsedTime < year) {
        const months = Math.floor(elapsedTime / month);
        return `${months} month${months > 1 ? 's' : ''} ago`;
    } else {
        const years = Math.floor(elapsedTime / year);
        return `${years} year${years > 1 ? 's' : ''} ago`;
    }
}

export const formatAndDivideNumber = (num: number): string => {
  if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
  } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
  } else {
      return num.toString();
  }
}
