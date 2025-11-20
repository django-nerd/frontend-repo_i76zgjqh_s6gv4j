import Hero from './components/Hero'
import Services from './components/Services'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white font-[Inter] text-slate-900">
      {/* Simple top bar */}
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="#" className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-md bg-slate-900" />
              <span className="text-sm font-semibold tracking-tight">Blue Skylab</span>
            </a>
            <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
              <a href="#services" className="hover:text-slate-900">Services</a>
              <a href="#contact" className="rounded-md border border-slate-200 px-3 py-1.5 hover:bg-slate-50">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <Services />
        <div id="contact">
          <CTA />
        </div>
      </main>

      <footer className="border-t border-slate-200 bg-white py-10 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Blue Skylab
      </footer>
    </div>
  )
}

export default App
