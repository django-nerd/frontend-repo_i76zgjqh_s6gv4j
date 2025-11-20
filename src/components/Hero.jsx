export default function Hero() {
  return (
    <section className="relative bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 md:grid-cols-2 md:py-28">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Studio</p>
          <h1 className="mt-3 text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
            Blue Skylab — clean, modern product websites.
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600">
            We design and build fast, accessible marketing sites with crisp typography and thoughtful motion. No 3D, no clutter — just clear storytelling.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-white shadow-sm transition-colors hover:bg-black">Start a project</a>
            <a href="#services" className="inline-flex items-center justify-center rounded-md border border-slate-200 px-5 py-2.5 text-slate-900 hover:bg-slate-50">See services</a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] w-full rounded-xl border border-slate-200 bg-slate-50" />
          <p className="mt-3 text-xs text-slate-500">Hero illustration placeholder — replace with your product visual.</p>
        </div>
      </div>
    </section>
  )
}
