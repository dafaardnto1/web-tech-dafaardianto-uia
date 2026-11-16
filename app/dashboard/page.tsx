import {
  ArrowUpRightIcon,
  BookOpenIcon,
  Squares2X2Icon,
} from '@heroicons/react/24/outline';

const sections = [
  { number: '01', title: 'Ringkasan', description: 'Gambaran umum ruang kerja pembelajaran.' },
  { number: '02', title: 'Customers', description: 'Area halaman pelanggan.' },
  { number: '03', title: 'Invoices', description: 'Area halaman tagihan.' },
];

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-700">UIA · WEB TECHNOLOGY</p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Dashboard</h1>
          <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
            Selamat datang di ruang kerja pembelajaran. Pilih bagian dari navigasi untuk mulai menjelajah.
          </p>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-emerald-100 bg-white/80 px-3.5 py-2 text-xs font-semibold text-slate-600 shadow-sm">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          Portal pembelajaran
        </div>
      </div>

      <section className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-950 p-6 text-white shadow-xl shadow-blue-950/15 sm:p-9">
        <div className="absolute -right-20 -top-28 h-72 w-72 rounded-full bg-sky-300/20 blur-3xl" />
        <div className="absolute -bottom-28 left-1/3 h-56 w-56 rounded-full bg-indigo-400/20 blur-3xl" />
        <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[11px] font-semibold tracking-wide text-blue-50">
              <BookOpenIcon className="h-4 w-4" />
              RUANG BELAJAR DIGITAL
            </span>
            <h2 className="mt-5 max-w-2xl text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
              Belajar teknologi, satu langkah pada satu waktu.
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-blue-100/80">
              Gunakan navigasi workspace untuk membuka halaman yang tersedia di portal.
            </p>
          </div>
          <div className="hidden h-24 w-24 items-center justify-center rounded-[28px] border border-white/15 bg-white/10 backdrop-blur md:flex">
            <Squares2X2Icon className="h-11 w-11 text-blue-100" />
          </div>
        </div>
      </section>

      <section className="mt-8">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="text-sm font-bold text-slate-900">Ruang kerja</h2>
            <p className="mt-1 text-xs text-slate-500">Bagian yang tersedia di portal saat ini.</p>
          </div>
          <span className="text-xs font-medium text-slate-400">03 BAGIAN</span>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {sections.map((section) => (
            <article
              key={section.number}
              className="group rounded-2xl border border-white/90 bg-white/75 p-5 shadow-sm shadow-slate-200/50 backdrop-blur transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-100 hover:shadow-lg hover:shadow-blue-900/5"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-lg bg-slate-100 px-2.5 py-1 text-[10px] font-bold tracking-wider text-slate-500">
                  {section.number}
                </span>
                <ArrowUpRightIcon className="h-4 w-4 text-slate-300 transition-colors group-hover:text-blue-600" />
              </div>
              <h3 className="mt-5 font-semibold text-slate-900">{section.title}</h3>
              <p className="mt-1.5 text-sm leading-5 text-slate-500">{section.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
