import SideNav from '@/app/dashboard/sidenav';
import Footer from '@/app/ui/footer';
import PageTransition from '@/app/ui/page-transition';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-[1600px] flex-col gap-2 p-2 sm:gap-4 sm:p-4 md:h-screen md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-[272px]">
        <SideNav />
      </div>
      <div className="flex min-w-0 flex-1 flex-col overflow-hidden rounded-[28px] border border-white/80 bg-white/35 shadow-sm shadow-slate-300/20 backdrop-blur-xl">
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-10">
          <PageTransition>{children}</PageTransition>
        </div>
        <div className="px-4 sm:px-6 lg:px-10">
          <Footer />
        </div>
      </div>
    </div>
  );
}
