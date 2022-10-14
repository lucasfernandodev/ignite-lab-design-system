import {clsx} from 'clsx';
import { Slot } from '@radix-ui/react-slot';

export interface TextProps{
  size?: 'sm' | 'md' | 'lg',
  children: React.ReactNode,
  asChild?: boolean,
  className?: string;
}

export function Text({size = 'md', children, asChild, className}: TextProps){

  const Tag = asChild ? Slot : 'span';

  const cSizes = {
    'text-xs': size === 'sm',
    'text-sm': size === 'md',
    'text-md': size === 'lg',

  }

  return (
    <Tag className={clsx('text-gray-100 font-sans', cSizes, className)}>
      {children}
    </Tag>
  )
}