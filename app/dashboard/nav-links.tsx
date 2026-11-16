'use client';

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Invoices',
    href: '/dashboard/invoices',
    icon: DocumentDuplicateIcon,
  },
  { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.name}
            href={link.href}
            aria-current={isActive ? 'page' : undefined}
            className={`flex h-[46px] grow items-center justify-center gap-2 rounded-xl border px-3 text-sm font-medium transition-all duration-200 md:flex-none md:justify-start md:px-3 ${
              isActive
                ? 'border-white/20 bg-white/15 text-white shadow-inner shadow-white/5 font-semibold'
                : 'border-transparent text-blue-100/70 hover:border-white/10 hover:bg-white/10 hover:text-white'
            }`}
          >
            <LinkIcon className="h-5 w-5 shrink-0" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
