import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Portfolio from './components/Portfolio'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white font-[Inter] text-[#000e52]">
      {/* Navbar */}
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/60 p-3 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,25,136,0.12)]">
            <a href="#" className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-[#0e8fff] to-[#5ed6ff] shadow-[0_0_24px_rgba(94,214,255,0.7)]" />
              <span className="font-semibold tracking-tight text-[#001988]">Blue Skylab</span>
            </a>
            <nav className="hidden items-center gap-6 text-sm text-[#001988]/80 md:flex">
              <a href="#services" className="hover:text-[#0e8fff]">Services</a>
              <a href="#about" className="hover:text-[#0e8fff]">About</a>
              <a href="#portfolio" className="hover:text-[#0e8fff]">Work</a>
              <a href="#contact" className="rounded-lg border border-[#001988]/20 bg-white/70 px-4 py-2 text-[#001988] backdrop-blur-sm hover:text-[#0e8fff]">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      <main className="relative">
        <Hero />
        <Services />
        <About />
        <Portfolio />
        <div id="contact">
          <CTA />
        </div>
      </main>

      <footer className="border-t border-[#001988]/10 bg-white py-10 text-center text-sm text-[#001988]/60">
        © {new Date().getFullYear()} Blue Skylab. All rights reserved.
      </footer>
    </div>
  )
}

export default App
