import { motion } from 'framer-motion'
import { Cpu, Layers, Palette, Sparkles } from 'lucide-react'

const services = [
  {
    title: '3D Experience Design',
    desc: 'Interactive Spline scenes, real-time 3D, and premium visual systems.',
    icon: Layers,
  },
  {
    title: 'Interface Engineering',
    desc: 'High-performance React apps with micro-interactions and polish.',
    icon: Cpu,
  },
  {
    title: 'Brand Systems',
    desc: 'Futuristic identity, typography, and motion that signals confidence.',
    icon: Palette,
  },
  {
    title: 'Intelligent Motion',
    desc: 'Framer Motion choreography, parallax layers, and subtle depth.',
    icon: Sparkles,
  },
]

export default function Services() {
  return (
    <section id="services" className="relative z-10 bg-white py-24 text-[#000e52]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-bold sm:text-4xl">Capabilities</h2>
          <p className="mt-2 max-w-2xl text-[#001988]/70">
            Modular, scalable, and crafted with precision.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border border-[#001988]/10 bg-white p-6 shadow-[0_10px_30px_rgba(0,25,136,0.06)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#5ed6ff]/0 via-[#5ed6ff]/0 to-[#5ed6ff]/0 transition-opacity group-hover:via-[#5ed6ff]/10" />
              <div className="relative">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#0e8fff]/10 text-[#0e8fff]">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-[#001988]/70">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
