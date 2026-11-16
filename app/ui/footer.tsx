export default function Footer() {
  return (
    <footer className="mt-8 w-full border-t border-slate-200 bg-white py-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-4 border-b border-slate-100 pb-6 sm:flex-row sm:justify-between">
          <p className="text-sm font-semibold text-slate-700">You can find me at</p>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/dafaardnto1"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub: dafaardnto1"
              className="flex h-10 items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 text-sm font-medium text-slate-700 transition-colors hover:border-slate-300 hover:bg-slate-50 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                <path d="M12 .8a11.2 11.2 0 0 0-3.54 21.83c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.3-1.24-1.64-1.24-1.64-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 .1.77 2.77 3.25 1.96.1-.73.4-1.22.7-1.5-2.48-.28-5.09-1.24-5.09-5.53 0-1.22.44-2.22 1.16-3-.12-.28-.5-1.42.11-2.96 0 0 .95-.3 3.08 1.15a10.7 10.7 0 0 1 5.6 0c2.13-1.45 3.08-1.15 3.08-1.15.61 1.54.23 2.68.11 2.96.72.78 1.16 1.78 1.16 3 0 4.3-2.61 5.24-5.1 5.52.4.35.75 1.03.75 2.08v3.08c0 .3.2.65.77.54A11.2 11.2 0 0 0 12 .8Z" />
              </svg>
              <span>GitHub</span>
            </a>
            <a
              href="https://www.instagram.com/dafaardnto/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram: dafaardnto"
              className="flex h-10 items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 text-sm font-medium text-slate-700 transition-colors hover:border-slate-300 hover:bg-slate-50 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="1.8">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.8" r="1" className="fill-current stroke-none" />
              </svg>
              <span>Instagram</span>
            </a>
          </div>
        </div>

        <div className="pt-5 text-center">
          <p className="text-sm font-semibold text-slate-800">
            Dafa Ardianto <span className="px-1 text-slate-300">·</span> NIM 3420230004
          </p>
          <p className="mt-1 text-sm text-slate-500">Teknik Informatika</p>
          <p className="mt-4 text-xs text-slate-400">
            © 2026 All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
