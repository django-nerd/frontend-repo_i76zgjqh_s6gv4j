const services = [
  {
    title: 'Design system & UI',
    desc: 'Accessible, scalable foundations with crisp type and spacing.'
  },
  {
    title: 'Site builds (React/Vite)',
    desc: 'Fast, SEO-friendly marketing sites tuned for Lighthouse.'
  },
  {
    title: 'Animations (minimal)',
    desc: 'Tasteful reveals and hovers that never get in the way.'
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-2xl font-semibold text-slate-900">Services</h2>
        <p className="mt-2 max-w-2xl text-slate-600">A compact set of offerings focused on clarity and speed.</p>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
