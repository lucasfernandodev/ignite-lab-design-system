import {clsx} from 'clsx';
import { Slot } from '@radix-ui/react-slot';

export interface HeadingProps{
  size?: 'sm' | 'md' | 'lg',
  children: React.ReactNode,
  asChild: boolean
}

export function Heading({size = 'md', children, asChild}: HeadingProps){

  const Tag = asChild ? Slot : 'h2';

  const cSizes = {
    'text-lg': size === 'sm',
    'text-xl': size === 'md',
    'text-2xl': size === 'lg',
  }

  return (
    <Tag className={clsx('text-gray-100 font-bold font-sans', cSizes)}>
      {children}
    </Tag>
  )
}