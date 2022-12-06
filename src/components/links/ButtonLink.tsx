import * as React from 'react';

import clsxm from '@/lib/clsxm';

import UnstyledLink, {
  UnstyledLinkProps,
} from '@/components/links/UnstyledLink';

enum ButtonVariant {
  'primary',
  'secondary',
  'outline',
  'ghost',
}

type ButtonLinkProps = {
  variant?: keyof typeof ButtonVariant;
} & UnstyledLinkProps;

const ButtonLink = React.forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  ({ children, className, variant = 'primary', ...rest }, ref) => {
    return (
      <UnstyledLink
        ref={ref}
        {...rest}
        className={clsxm(
          'inline-flex items-center rounded-full px-4 py-2 font-body font-medium',
          'focus:outline-none focus-visible:ring focus-visible:ring-c-purple-dark',
          'shadow-sm',
          'transition-colors duration-75',
          //#region  //*=========== Variants ===========
          [
            variant === 'primary' && [
              'bg-c-blue-dark text-white',
              'border border-c-blue-dark',
              'from-c-blue-light to-c-blue-dark hover:bg-gradient-to-br hover:text-white',
              'active:bg-c-purple-dark',
              'disabled:bg-primary-400 disabled:hover:bg-primary-400',
            ],
            variant === 'secondary' && [
              'text-white',
              'border border-c-purple-light',
              'bg-gradient-to-br from-c-purple-light to-c-purple-dark ',
              'hover:from-c-purple-dark hover:to-c-purple-dark',
              'active:bg-c-purple-dark disabled:bg-c-purple-light',
            ],
            variant === 'outline' && [
              'text-white',
              'border border-c-purple-light',
              'from-c-purple-light to-c-purple-dark hover:bg-gradient-to-br hover:text-white',
              'active:bg-c-purple-dark disabled:bg-c-purple-light',
            ],
            variant === 'ghost' && [
              'text-c-purple-light',
              'shadow-none',
              'hover:bg-c-purple-dark hover:text-white active:bg-primary-100 disabled:bg-primary-100',
            ],
          ],
          //#endregion  //*======== Variants ===========
          'disabled:cursor-not-allowed',
          className
        )}
      >
        {children}
      </UnstyledLink>
    );
  }
);

export default ButtonLink;
