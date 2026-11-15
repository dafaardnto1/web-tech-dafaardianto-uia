'use client';

import { useState } from 'react';
import { PowerIcon } from '@heroicons/react/24/outline';
import { signOut } from 'next-auth/react';

export default function SignOutButton() {
  const [isSigningOut, setIsSigningOut] = useState(false);
  const [hasError, setHasError] = useState(false);

  async function handleSignOut() {
    setIsSigningOut(true);
    setHasError(false);

    try {
      await signOut({ redirectTo: '/login' });
    } catch (error) {
      console.error('Failed to sign out:', error);
      setIsSigningOut(false);
      setHasError(true);
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={handleSignOut}
        disabled={isSigningOut}
        className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-xl bg-white/60 backdrop-blur-md border border-white/60 p-3 text-sm font-medium text-gray-700 hover:bg-red-50/80 hover:text-red-600 hover:border-red-200/60 shadow-sm disabled:cursor-wait disabled:opacity-70 md:flex-none md:justify-start md:p-2 md:px-3 active:scale-95 transition-all duration-200"
      >
        <PowerIcon className="w-6 shrink-0" />
        <span className="hidden md:block">Keluar</span>
      </button>
      {hasError && (
        <p className="mt-2 text-sm text-red-600" role="alert">
          Gagal keluar. Silakan coba lagi.
        </p>
      )}
    </>
  );
}
