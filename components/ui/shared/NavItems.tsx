'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const navLinks = [
  { route: '/', label: 'Home' },
  { route: '/about', label: 'About' },
  { route: '/services', label: 'Services' },
  { route: '/contact', label: 'Contact' }
];

const NavItems = () => {
  const pathname = usePathname();

  return (
    <ul className="md:flex-between flex w-full flex-col items-start gap-5 md:flex-row">
      {navLinks.map((link) => (
        <li key={link.route}>
          <Link href={link.route} className={pathname === link.route ? 'text-blue-500 font-bold' : ''}>
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavItems;
