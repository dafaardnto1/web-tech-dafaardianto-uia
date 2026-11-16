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
            className={`flex h-[48px] grow items-center justify-center gap-2 rounded-xl p-3 text-sm font-medium backdrop-blur-md transition-all duration-200 md:flex-none md:justify-start md:p-2 md:px-3 active:scale-95 ${
              isActive
                ? 'bg-blue-500/15 text-blue-600 border border-blue-400/30 shadow-sm font-semibold'
                : 'bg-white/60 text-gray-700 border border-white/60 hover:bg-white/90 hover:text-blue-600 hover:border-white/80 shadow-sm'
            }`}
          >
            <LinkIcon className="w-6 shrink-0" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
