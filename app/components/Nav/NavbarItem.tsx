import Link from 'next/link';
import * as React from 'react';

type NavigationItemProps = {
  text: string;
  width: string;
  href: string;
};

export const NavigationItem: React.FC<NavigationItemProps> = ({
  text,
  width,
  href,
}) => (
  <nav className={`self-stretch my-auto ${width}`}>
    <Link
      href={href}
      className="hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-white"
    >
      {text}
    </Link>
  </nav>
);
