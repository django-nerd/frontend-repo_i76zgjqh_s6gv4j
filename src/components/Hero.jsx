import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const glow = 'shadow-[0_0_80px_20px_rgba(94,214,255,0.25)]'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-br from-[#000e52] via-[#001988] to-[#000a3a] text-white">
      {/* radial glow backdrop */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-[60rem] w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(14,143,255,0.25),transparent_60%)] blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#000b34] to-transparent" />
      </div>

      {/* Wireframe grid */}
      <div className="pointer-events-none absolute inset-0 opacity-35" aria-hidden>
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(94,214,255,0.12)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* 3D scene */}
      <div className="relative mx-auto flex h-[60vh] w-full max-w-7xl items-center justify-center px-6 pt-28 md:h-[70vh]">
        <div className={`absolute inset-0 ${glow}`} aria-hidden />
        <Spline scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Headline content */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-center px-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-[#5ed6ff] shadow-[0_0_24px_4px_rgba(94,214,255,0.8)]" />
            <span className="text-sm text-white/80">Premium Tech-Creative Agency</span>
          </div>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
            <span className="block leading-tight">Blue Skylab</span>
            <span className="bg-gradient-to-r from-[#5ed6ff] via-[#0e8fff] to-white bg-clip-text text-transparent">
              Intelligent. Modern. Confident.
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base text-white/70 sm:text-lg">
            We craft cinematic digital experiences with high-fidelity 3D, precision UI, and performance engineering.
          </p>

          <div className="pointer-events-auto mt-8 flex items-center justify-center gap-4">
            <a href="#services" className="group relative inline-flex items-center gap-2 rounded-xl bg-[#0e8fff] px-6 py-3 text-white transition-transform hover:scale-[1.02] active:scale-[0.99]">
              <span className="relative z-10">Explore Services</span>
              <span className="absolute inset-0 rounded-xl bg-[linear-gradient(120deg,rgba(94,214,255,0.4),transparent_40%)] opacity-0 transition-opacity group-hover:opacity-100" />
            </a>
            <a href="#portfolio" className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-white/90 backdrop-blur-md hover:bg-white/10">
              View Work
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
