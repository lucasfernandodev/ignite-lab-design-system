import {clsx} from 'clsx';
import { Slot } from '@radix-ui/react-slot';

export interface ButtonProps{
  children: React.ReactNode,
  asChild: boolean
}

export function Button({children, asChild}: ButtonProps){

  const Tag = asChild ? Slot : 'button';

  const cSizes = {

  }

  return (
    <Tag className={clsx('focus:ring-2 ring-white hover:bg-cyan-300 transition-colors w-full py-4 px-3 bg-cyan-500 rounded text-black font-semibold text-sm', cSizes)}>
      {children}
    </Tag>
  )
}