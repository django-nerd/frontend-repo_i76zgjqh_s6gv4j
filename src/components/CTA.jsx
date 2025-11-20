export default function CTA() {
  return (
    <section className="border-t border-slate-200 bg-slate-50/60 py-16">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h3 className="text-2xl font-semibold text-slate-900">Let’s make something clean and effective</h3>
        <p className="mx-auto mt-2 max-w-2xl text-slate-600">Share a bit about your goals and timeline. We’ll respond within one business day.</p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <a href="#" className="rounded-md bg-slate-900 px-5 py-2.5 text-white hover:bg-black">Start a project</a>
          <a href="mailto:hello@blueskylab.com" className="rounded-md border border-slate-300 bg-white px-5 py-2.5 text-slate-900 hover:bg-slate-50">hello@blueskylab.com</a>
        </div>
      </div>
    </section>
  )
}
