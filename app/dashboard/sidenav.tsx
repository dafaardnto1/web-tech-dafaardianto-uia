import Link from 'next/link';
import NavLinks from '@/app/dashboard/nav-links';
import { PowerIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { signOut } from '@/auth';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        className="mb-3 flex h-20 items-center justify-start rounded-2xl md:rounded-3xl bg-gradient-to-r from-blue-600/90 to-blue-500/85 backdrop-blur-xl border border-white/30 shadow-lg shadow-blue-500/20 p-4 md:h-40 md:items-end transition-all duration-200 hover:shadow-blue-500/30"
        href="/"
      >
        <div className="w-32 text-white md:w-40">
          <Image
            src="/logo/uialogo.png"
            width={300}
            height={91}
            className="block h-10 w-auto object-contain md:h-16"
            alt="Banner UIA"
            priority
          />
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-2xl bg-white/35 backdrop-blur-md border border-white/40 md:block"></div>
        <form
          action={async () => {
            'use server';
            await signOut();
          }}
        >
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-xl bg-white/60 backdrop-blur-md border border-white/60 p-3 text-sm font-medium text-gray-700 hover:bg-red-50/80 hover:text-red-600 hover:border-red-200/60 shadow-sm md:flex-none md:justify-start md:p-2 md:px-3 active:scale-95 transition-all duration-200">
            <PowerIcon className="w-6 shrink-0" />
            <div className="hidden md:block">Keluar</div>
          </button>
        </form>
      </div>
    </div>
  );
}
