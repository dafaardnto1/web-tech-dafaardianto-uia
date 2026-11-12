'use client';

import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
import Link from 'next/link';
import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from '@/app/ui/button';
import { useActionState } from 'react';
import { authenticate } from '@/app/lib/actions';
import Footer from '@/app/ui/footer';

export default function Page() {
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined,
  );

  return (
    <main className="flex min-h-screen flex-col justify-between p-4 sm:p-6 overflow-y-auto">
      <div className="w-full flex flex-col items-center">
        {/* iOS Glass Banner */}
        <Link
          href="/"
          title="Kembali ke Beranda"
          className="w-full flex h-20 shrink-0 items-center justify-start rounded-2xl md:rounded-3xl bg-gradient-to-r from-blue-600/90 via-blue-500/85 to-sky-500/80 backdrop-blur-xl border border-white/30 shadow-xl shadow-blue-500/15 p-4 md:h-52 md:items-end transition-all duration-200 hover:shadow-blue-500/25 active:scale-[0.99] cursor-pointer"
        >
          <Image
            src="/logo/uialogo.png"
            width={500}
            height={152}
            className="block h-12 w-auto object-contain md:h-32"
            alt="Banner UIA"
            priority
          />
        </Link>

        {/* iOS Glass Login Card */}
        <div className="my-6 md:my-10 w-full max-w-md rounded-3xl bg-white/75 backdrop-blur-2xl border border-white/60 shadow-2xl shadow-slate-200/50 p-6 sm:p-10 transition-all duration-300">
          <form action={formAction} className="space-y-4">
            <div className="flex-1">
              <h1 className={`${lusitana.className} mb-4 text-2xl font-bold text-gray-900`}>
                Silakan Masuk dengan akun Anda.
              </h1>
              <div className="w-full space-y-4">
                <div>
                  <label
                    className="mb-2 block text-xs font-semibold text-gray-700 uppercase tracking-wider"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <div className="relative">
                    <input
                      className="peer block w-full rounded-xl border border-gray-200/80 py-[10px] pl-10 text-sm outline-none text-gray-900 placeholder:text-gray-400 bg-white/70 backdrop-blur-md focus:bg-white focus:border-blue-500/80 focus:ring-4 focus:ring-blue-500/15 shadow-sm transition-all"
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Ketikkan alamat email"
                      required
                    />
                    <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-400 peer-focus:text-blue-600 transition-colors" />
                  </div>
                </div>
                <div>
                  <label
                    className="mb-2 block text-xs font-semibold text-gray-700 uppercase tracking-wider"
                    htmlFor="password"
                  >
                    Kata Sandi
                  </label>
                  <div className="relative">
                    <input
                      className="peer block w-full rounded-xl border border-gray-200/80 py-[10px] pl-10 text-sm outline-none text-gray-900 placeholder:text-gray-400 bg-white/70 backdrop-blur-md focus:bg-white focus:border-blue-500/80 focus:ring-4 focus:ring-blue-500/15 shadow-sm transition-all"
                      id="password"
                      type="password"
                      name="password"
                      placeholder="Ketikkan Kata Sandi"
                      required
                      minLength={6}
                    />
                    <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-400 peer-focus:text-blue-600 transition-colors" />
                  </div>
                </div>
              </div>
              <Button className="mt-6 w-full" aria-disabled={isPending}>
                Masuk <ArrowRightIcon className="ml-auto h-5 w-5 text-white/90" />
              </Button>
              <div className="flex h-8 items-end space-x-1" aria-live="polite" aria-atomic="true">
                {errorMessage && (
                  <>
                    <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                    <p className="text-sm font-medium text-red-500">{errorMessage}</p>
                  </>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </main>
  );
}
