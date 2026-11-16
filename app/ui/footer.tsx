export default function Footer() {
  return (
    <footer className="mt-4 w-full py-4">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 text-center sm:flex-row sm:items-start sm:text-left">
        <div>
          <p className="text-base font-bold text-slate-700">You can find me at</p>
          <div className="mt-2 flex items-center justify-center gap-4 sm:justify-start">
            <a
              href="https://github.com/dafaardnto1"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub: dafaardnto1"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 transition-colors hover:text-slate-950 focus-visible:outline-none focus-visible:underline"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current">
                <path d="M12 .8a11.2 11.2 0 0 0-3.54 21.83c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.3-1.24-1.64-1.24-1.64-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 .1.77 2.77 3.25 1.96.1-.73.4-1.22.7-1.5-2.48-.28-5.09-1.24-5.09-5.53 0-1.22.44-2.22 1.16-3-.12-.28-.5-1.42.11-2.96 0 0 .95-.3 3.08 1.15a10.7 10.7 0 0 1 5.6 0c2.13-1.45 3.08-1.15 3.08-1.15.61 1.54.23 2.68.11 2.96.72.78 1.16 1.78 1.16 3 0 4.3-2.61 5.24-5.1 5.52.4.35.75 1.03.75 2.08v3.08c0 .3.2.65.77.54A11.2 11.2 0 0 0 12 .8Z" />
              </svg>
              <span>GitHub</span>
            </a>
            <a
              href="https://www.instagram.com/dafaardnto/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram: dafaardnto"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 transition-colors hover:text-slate-950 focus-visible:outline-none focus-visible:underline"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-none stroke-current" strokeWidth="1.8">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.8" r="1" className="fill-current stroke-none" />
              </svg>
              <span>Instagram</span>
            </a>
          </div>
        </div>
        <div className="text-sm leading-5 text-slate-500 sm:text-right">
          <p className="font-semibold text-slate-800">
            Dafa Ardianto <span className="px-1 text-slate-300">·</span> NIM 3420230004
          </p>
          <p>Teknik Informatika</p>
          <p className="text-xs text-slate-400">© 2026 All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
