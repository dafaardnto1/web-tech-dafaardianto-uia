import Link from 'next/link';
import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Footer from '@/app/ui/footer';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-4 sm:p-6 overflow-y-auto">
      <div className="w-full">
        {/* iOS Glass Banner */}
        <div className="flex h-20 shrink-0 items-center justify-start rounded-2xl md:rounded-3xl bg-[#2449BD] backdrop-blur-xl border border-white/20 shadow-xl shadow-blue-900/25 p-4 md:h-52 md:items-end">
          <Image
            src="/logo/uialogo.png"
            width={500}
            height={152}
            className="block h-12 w-auto object-contain md:h-32"
            alt="Banner UIA"
            priority
          />
        </div>

        <div className="mt-6 flex grow flex-col gap-6 md:flex-row">
          {/* iOS Frosted Glass Card */}
          <div className="flex flex-col justify-center gap-6 rounded-3xl bg-slate-200/80 backdrop-blur-2xl border border-white/70 shadow-xl shadow-slate-400/40 px-6 py-10 md:w-2/5 md:px-16 transition-all duration-300">
            <p className={`${lusitana.className} text-xl font-medium text-slate-950 md:text-3xl md:leading-normal`}>
              <strong>Selamat Datang!</strong> <br />
              Ini adalah situs web pembelajaran{' '}
              <a href="https://nextjs.org/learn/" className="text-blue-700 hover:underline font-bold">
                Mata Kuliah Web teknologi
              </a>
              , Dosen Pengampu <b>Adhitya Ahmad Pradypta, S.Kom., M.T.I.</b>
            </p>
            <Link
              href="/login"
              className="flex items-center gap-5 self-start rounded-2xl bg-blue-600/90 hover:bg-blue-600 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-blue-500/25 active:scale-95 transition-all duration-200 backdrop-blur-md md:text-base"
            >
              <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
            </Link>
          </div>

          <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
            {/* Add Hero Images Here */}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
