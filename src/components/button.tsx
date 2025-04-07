import { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';

type ButtonType = {
  href?: string;
} & (
  | ButtonHTMLAttributes<HTMLButtonElement>
  | AnchorHTMLAttributes<HTMLAnchorElement>
);
export function Button({ href, children, ...rest }: ButtonType) {
  if (href) {
    return (
      <a href={href} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }
  return (
    <button
      type="button"
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
