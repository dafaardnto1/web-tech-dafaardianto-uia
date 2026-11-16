import SideNav from '@/app/dashboard/sidenav';
import Footer from '@/app/ui/footer';
import PageTransition from '@/app/ui/page-transition';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col md:h-screen md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex flex-col flex-grow md:overflow-y-auto">
        <div className="flex-grow p-6 md:p-12">
          <PageTransition>{children}</PageTransition>
        </div>
        <Footer />
      </div>
    </div>
  );
}
