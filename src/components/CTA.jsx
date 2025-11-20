import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#f6f8ff] py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/3 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#5ed6ff]/30 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-72 w-72 translate-x-1/2 rounded-full bg-[#0e8fff]/30 blur-3xl" />
      </div>
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-[#001988]/10 bg-white/60 p-10 text-center backdrop-blur-xl shadow-[0_20px_60px_rgba(0,25,136,0.12)]"
        >
          <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-white/40 via-transparent to-transparent" />
          <h3 className="text-2xl font-bold text-[#000e52] sm:text-3xl">Let’s build your next flagship experience</h3>
          <p className="mx-auto mt-3 max-w-2xl text-[#001988]/70">
            Tell us about your product vision. We’ll translate it into a world-class interactive experience.
          </p>
          <div className="mt-6 flex items-center justify-center gap-4">
            <a href="#" className="inline-flex items-center rounded-xl bg-[#001988] px-6 py-3 text-white shadow-[0_10px_30px_rgba(0,25,136,0.3)] transition-transform hover:scale-[1.02]">Start a project</a>
            <a href="mailto:hello@blueskylab.com" className="rounded-xl border border-[#001988]/20 bg-white/70 px-6 py-3 text-[#001988] backdrop-blur-sm">hello@blueskylab.com</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
