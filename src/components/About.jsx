import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative bg-[#f6f8ff] py-24 text-[#000e52]">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-[#5ed6ff]/20 blur-3xl" />
        <div className="absolute -right-20 bottom-10 h-64 w-64 rounded-full bg-[#0e8fff]/20 blur-3xl" />
      </div>
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold sm:text-4xl">Beyond Aesthetics</h2>
            <p className="mt-4 text-[#001988]/70">
              We architect experiences that merge cinematic visuals with robust engineering. Our approach pairs strategic thinking with elegant execution — every pixel, every frame, every millisecond tuned for clarity and impact.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
              {[
                ['10+', 'Years'],
                ['120+', 'Projects'],
                ['98%', 'Satisfaction'],
              ].map(([k, v]) => (
                <div key={k} className="rounded-xl bg-white p-6 shadow">
                  <div className="text-2xl font-bold text-[#001988]">{k}</div>
                  <div className="text-sm text-[#001988]/60">{v}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl border border-[#001988]/10 bg-white/70 p-8 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,25,136,0.12)]">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-[#5ed6ff]/50 via-transparent to-transparent opacity-40 blur-2xl" />
              <div className="relative">
                <div className="grid grid-cols-3 gap-4">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="aspect-square rounded-xl bg-gradient-to-br from-white to-[#f2f6ff] shadow-inner" />
                  ))}
                </div>
                <p className="mt-4 text-sm text-[#001988]/60">
                  Modular UI panels. Engineered for clarity and speed.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
