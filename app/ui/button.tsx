import React from 'react';

export function Button({
  children,
  className = '',
  'aria-disabled': ariaDisabled,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const isPending = ariaDisabled === true || ariaDisabled === 'true';

  return (
    <button
      {...rest}
      aria-disabled={ariaDisabled}
      className={`relative flex h-11 items-center justify-center rounded-xl bg-blue-600/90 px-5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 backdrop-blur-md transition-all duration-200 hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:scale-95 aria-disabled:cursor-not-allowed aria-disabled:opacity-70 ${className}`}
    >
      {isPending ? (
        <>
          {/* Spinner */}
          <svg
            className="mr-2 h-4 w-4 animate-spin text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
          <span>Memproses...</span>
        </>
      ) : (
        children
      )}
    </button>
  );
}
