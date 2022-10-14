import {clsx} from 'clsx';
import { Slot } from '@radix-ui/react-slot';
import { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  children: React.ReactNode,
  asChild?: boolean,
}

export function Button({children, asChild, className, ...args}: ButtonProps){

  const Tag = asChild ? Slot : 'button';

  return (
    <Tag  className={clsx('focus:ring-2 ring-white hover:bg-cyan-300 transition-colors w-full py-3 px-2 bg-cyan-500 rounded text-black font-semibold text-sm', className)}
    {...args}
    >
      {children}
    </Tag>
  )
}