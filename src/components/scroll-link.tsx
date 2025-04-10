import { Button } from './button';
import { ReactNode, MouseEvent } from 'react';

interface ScrollLinkProps {
  to: string;
  className: string;
  offset?: number;
  children: ReactNode;
}

export const ScrollLink = ({
  to,
  className,
  offset = 0,
  children,
}: ScrollLinkProps) => {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // prevent default link behavior

    const element = document.getElementById(to.replace('#', ''));
    if (element) {
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + offset;

      window.scrollTo({
        top: y,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Button href={to} onClick={handleClick} className={className}>
      {children}
    </Button>
  );
};
