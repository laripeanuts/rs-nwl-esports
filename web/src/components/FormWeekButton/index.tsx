import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const FormWeekButton = (props: ButtonProps) => {
  return (
    <button
      className="bg-zinc-900 hover:bg-violet-500 rounded w-8 h-8"
      {...props}
    />
  )
};
