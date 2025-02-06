import { twMerge } from 'tailwind-merge';
import { clsx } from 'clsx';

const cn = (...input) => (twMerge(clsx(input)));

export default cn;