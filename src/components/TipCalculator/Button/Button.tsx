import { ButtonHTMLAttributes } from 'react';
import { clsx } from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant: 'primary' | 'secondary';
  isButtonSelected?: boolean;
}

function Button({
  label,
  variant,
  isButtonSelected = false,
  onClick,
  ...rest
}: Readonly<ButtonProps>) {
  const baseClasses = `flex justify-center items-center w-full h-12 rounded-[5px] hover:bg-light-strong-cyan`;
  const variantClasses = {
    primary: clsx(
      'text-primary hover:text-very-dark-cyan',
      'disabled:text-white disabled:bg-very-dark-cyan',
      isButtonSelected
        ? 'text-very-dark-cyan bg-strong-cyan'
        : 'text-white bg-very-dark-cyan'
    ),
    secondary: clsx(
      'text-secondary text-very-dark-cyan bg-strong-cyan',
      'disabled:text-opacity-35 disabled:bg-very-dark-grayish-cyan'
    ),
  };
  const buttonClasses = clsx(baseClasses, variantClasses[variant]);

  return (
    <button className={buttonClasses} onClick={onClick} {...rest}>
      {label}
    </button>
  );
}

export default Button;
