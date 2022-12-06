import * as React from 'react';
import { ImSpinner2 } from 'react-icons/im';

import clsxm from '@/lib/clsxm';

enum ButtonVariant {
  'primary',
  'secondary',
  'outline',
  'ghost',
}

type ButtonProps = {
  isLoading?: boolean;

  variant?: keyof typeof ButtonVariant;
} & React.ComponentPropsWithRef<'button'>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      disabled: buttonDisabled,
      isLoading,
      variant = 'primary',

      ...rest
    },
    ref
  ) => {
    const disabled = isLoading || buttonDisabled;

    return (
      <button
        ref={ref}
        type='button'
        disabled={disabled}
        className={clsxm(
          'inline-flex items-center rounded-full px-4 py-2 font-body font-medium',
          'focus:outline-none focus-visible:ring focus-visible:ring-primary-500',
          'shadow-sm',
          'transition-colors duration-75',
          //#region  //*=========== Variants ===========
          [
            variant === 'primary' && [
              'bg-c-blue-dark text-white',
              'border border-c-blue-dark',
              'from-c-blue-light to-c-blue-dark hover:bg-gradient-to-br hover:text-white',
              'active:bg-c-purple-dark',
              'disabled:bg-c-blue-light disabled:hover:bg-c-blue-light',
            ],
            variant === 'secondary' && [
              'text-white',
              'border border-c-purple-light',
              'bg-gradient-to-br from-c-purple-light to-c-purple-dark ',
              'hover:from-c-purple-dark hover:to-c-purple-dark',
              'active:bg-c-purple-dark disabled:bg-primary-100',
            ],
            variant === 'outline' && [
              'text-white',
              'border border-c-purple-light',
              'from-c-purple-light to-c-purple-dark hover:bg-gradient-to-br hover:text-white',
              'active:bg-c-purple-dark ',
            ],
            variant === 'ghost' && [
              'text-c-purple-light',
              'shadow-none',
              'hover:bg-c-purple-dark hover:text-white active:bg-primary-100',
            ],
          ],
          //#endregion  //*======== Variants ===========
          'disabled:cursor-not-allowed',
          isLoading &&
            'relative text-transparent transition-none hover:text-transparent disabled:cursor-wait',
          className
        )}
        {...rest}
      >
        {isLoading && (
          <div
            className={clsxm(
              'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
              {
                'text-white': ['primary'].includes(variant),
                'text-black': ['secondary'].includes(variant),
                'text-primary-500': ['outline', 'ghost'].includes(variant),
              }
            )}
          >
            <ImSpinner2 className='animate-spin' />
          </div>
        )}
        {children}
      </button>
    );
  }
);

export default Button;
