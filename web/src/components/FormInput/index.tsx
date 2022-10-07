import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const FormInput = (props: InputProps) => {
  return (
    <input
      className="bg-zinc-900 rounded-lg px-4 py-3 w-full text-sm placeholder:text-zinc-600"
      {...props}
    />
  )
};
