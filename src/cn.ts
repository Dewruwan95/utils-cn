import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { CnParams } from "./types";

/**
 * A utility function to conditionally join and merge Tailwind CSS classes.
 *
 * @param inputs - Class names that may include conditional values.
 * @returns A merged string of class names with Tailwind conflict resolution.
 */
export default function cn(...inputs: CnParams): string {
  return twMerge(clsx(inputs));
}
