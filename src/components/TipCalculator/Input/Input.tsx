import { clsx } from 'clsx';
import Image from 'next/image';
import { InputHTMLAttributes } from 'react';

interface IconConfig {
  src: string;
  width: number;
  height: number;
  marginLeft: number;
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  iconConfig?: IconConfig;
  isValid?: boolean;
  errorMessage?: string;
}

function Input({
  iconConfig,
  isValid,
  errorMessage,
  ...props
}: Readonly<InputProps>) {
  const inputClassName = clsx(
    'flex items-center text-primary text-very-dark-cyan text-right w-full h-12 pr-[17px] rounded-[5px] border-2 border-solid border-transparent outline-none bg-very-light-grayish-cyan',
    {
      'placeholder:text-opacity-35': iconConfig,
      'placeholder:text-medium-dark-grayish-cyan': !iconConfig,
      'focus:border-strong-cyan caret-strong-cyan': isValid,
      'focus:border-strong-orange-red caret-strong-orange-red': !isValid,
    }
  );

  return (
    <div className="relative">
      {iconConfig && <InputIcon iconConfig={iconConfig} />}
      <input type="text" className={inputClassName} {...props} />
      {!isValid && errorMessage && <ErrorMessage message={errorMessage} />}
    </div>
  );
}

function InputIcon({ iconConfig }: Readonly<{ iconConfig: IconConfig }>) {
  return (
    <div
      style={{ marginLeft: `${iconConfig.marginLeft}px` }}
      className={`absolute inset-y-0 left-0 flex items-center`}
    >
      <Image
        src={iconConfig.src}
        alt=""
        width={iconConfig.width}
        height={iconConfig.height}
        priority
      />
    </div>
  );
}

function ErrorMessage({ message }: Readonly<{ message: string }>) {
  return (
    <span className="absolute right-0 -top-[30px] text-error text-strong-orange-red">
      {message}
    </span>
  );
}

export default Input;
