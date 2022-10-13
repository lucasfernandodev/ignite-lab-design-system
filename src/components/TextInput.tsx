import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import React, { InputHTMLAttributes, ReactNode } from "react";

export interface PropsTextIputRoot {
  children: React.ReactNode;
}

function TextIputRoot({ children }: PropsTextIputRoot) {
  return (
    <div className="flex h-12 items-center gap-3 focus-within:ring-2 ring-cyan-300 py-4 w-full rounded px-3 w-ful bg-gray-800  ">
      {children}
    </div>
  );
}

export interface PropsTextInputIcon {
  children: ReactNode;
  displayName?: string;
}

function TextInputIcon(props: PropsTextInputIcon) {
  return <Slot className="w-6 h-6 text-gray-400">{props.children}</Slot>;
}

TextInputIcon.displayName = "TextInput.Icon";

export interface TextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputInput(props: TextInputInputProps) {
  return (
    <input
      {...props}
      className={clsx(
        "bg-transparent flex-1 outline-none text-gray-100 text-xs placeholder:text-gray-400"
      )}
    />
  );
}

TextIputRoot.displayName = "TextIput.Root";
TextInputInput.displayName = "TextInput.Input";

export const TextInput = {
  Root: TextIputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
};
