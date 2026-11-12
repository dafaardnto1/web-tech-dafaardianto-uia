import type { Metadata } from 'next';
import './globals.css';
import { inter } from '@/app/ui/fonts';

export const metadata: Metadata = {
  title: 'Web Teknologi - UIA',
  description: 'Pembelajaran Web Teknologi',
  icons: {
    icon: '/logo/logouiafav.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/40 to-indigo-50/40 text-gray-900 relative selection:bg-blue-500/20`}
      >
        {/* iOS-style ambient glow backdrop */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-blue-400/20 blur-3xl" />
          <div className="absolute top-1/3 -left-40 h-[600px] w-[600px] rounded-full bg-indigo-300/20 blur-3xl" />
          <div className="absolute -bottom-40 right-1/4 h-[500px] w-[500px] rounded-full bg-sky-300/20 blur-3xl" />
        </div>
        {children}
      </body>
    </html>
  );
}
