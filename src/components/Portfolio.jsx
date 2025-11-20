import { motion } from 'framer-motion'

const items = Array.from({ length: 8 }).map((_, i) => ({
  id: i,
  title: `Project ${i + 1}`,
  img: `https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?q=80&w=1600&auto=format&fit=crop`,
}))

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative bg-white py-24 text-[#000e52]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-bold sm:text-4xl">Selected Work</h2>
          <p className="mt-2 max-w-2xl text-[#001988]/70">
            A snapshot of recent builds across 3D, web, and product.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <motion.a
              key={item.id}
              href="#"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.05, duration: 0.45 }}
              className="group relative overflow-hidden rounded-2xl border border-[#001988]/10 bg-[#f7faff] shadow-[0_10px_30px_rgba(0,25,136,0.06)]"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{item.title}</h3>
                  <span className="text-xs text-[#001988]/60">View →</span>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100" style={{ background: 'radial-gradient(600px circle at var(--x) var(--y), rgba(94,214,255,0.12), transparent 40%)' }} />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
