import React from 'react';

export function Button({
  children,
  className = '',
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...rest}
      className={`flex h-11 items-center justify-center rounded-xl bg-blue-600/90 px-5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 backdrop-blur-md transition-all duration-200 hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:scale-98 aria-disabled:cursor-not-allowed aria-disabled:opacity-50 ${className}`}
    >
      {children}
    </button>
  );
}
