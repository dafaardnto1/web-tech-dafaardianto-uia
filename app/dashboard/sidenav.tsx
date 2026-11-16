import Link from 'next/link';
import NavLinks from '@/app/dashboard/nav-links';
import Image from 'next/image';
import SignOutButton from '@/app/ui/sign-out-button';

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
        <SignOutButton />
      </div>
    </div>
  );
}
