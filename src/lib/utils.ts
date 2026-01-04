import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getUserColor = (name: string) => {
  const nameToNumber = name
    .split('')
    .reduce((acc, char) => acc + char.charCodeAt(0), 0)
  const hue = Math.abs(nameToNumber) % 300
  return `hsl(${hue}, 80%, 60%)`
}
