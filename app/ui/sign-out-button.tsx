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
        className="flex h-[46px] w-auto shrink-0 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/10 px-3 text-sm font-medium text-blue-100/80 transition-all duration-200 hover:border-red-300/20 hover:bg-red-400/10 hover:text-white disabled:cursor-wait disabled:opacity-70 md:w-full md:justify-start"
      >
        <PowerIcon className="h-5 w-5 shrink-0" />
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
