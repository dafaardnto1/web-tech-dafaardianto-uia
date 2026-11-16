import Link from 'next/link';
import NavLinks from '@/app/dashboard/nav-links';
import Image from 'next/image';
import SignOutButton from '@/app/ui/sign-out-button';

export default function SideNav() {
  return (
    <aside className="relative flex min-h-[112px] h-full flex-col overflow-hidden rounded-[28px] border border-white/15 bg-gradient-to-br from-slate-950 via-blue-950 to-blue-900 p-3 shadow-xl shadow-blue-950/15 sm:p-4">
      <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-400/20 blur-3xl" />
      <div className="relative flex h-full flex-col">
      <Link
        className="mb-4 flex h-[68px] shrink-0 items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-4 transition-colors hover:bg-white/15 md:h-[86px]"
        href="/"
      >
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white p-1.5">
          <Image
            src="/logo/logouiafav.png"
            width={40}
            height={40}
            className="h-full w-full object-contain"
            alt=""
            priority
          />
        </div>
        <span className="min-w-0">
          <span className="block text-sm font-bold tracking-wide text-white">UIA</span>
          <span className="mt-0.5 block truncate text-[10px] font-medium tracking-[0.12em] text-blue-100/70">WEB TECHNOLOGY</span>
        </span>
      </Link>
      <div className="flex flex-1 flex-row items-center justify-between gap-2 md:flex-col md:items-stretch md:justify-start">
        <div className="flex min-w-0 flex-1 items-center gap-2 md:flex-col md:items-stretch">
          <p className="hidden px-3 pb-2 pt-3 text-[10px] font-bold uppercase tracking-[0.18em] text-blue-100/50 md:block">
            Workspace
          </p>
          <nav aria-label="Navigasi dashboard" className="flex flex-1 flex-row gap-2 md:flex-col">
            <NavLinks />
          </nav>
        </div>
        <div className="hidden flex-1 md:block" />
        <SignOutButton />
      </div>
      </div>
    </aside>
  );
}
