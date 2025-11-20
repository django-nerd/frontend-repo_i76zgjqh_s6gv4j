import { useEffect, useMemo, useState } from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  const [isLoading, setIsLoading] = useState(true)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduced(mq.matches)
    update()
    mq.addEventListener?.('change', update)
    return () => mq.removeEventListener?.('change', update)
  }, [])

  // Brand-neutral, tasteful Spline placeholder scene
  const sceneUrl = useMemo(
    () => 'https://prod.spline.design/3XxWQkq3m2bU4yI2/scene.splinecode',
    []
  )

  return (
    <section className="relative bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 md:grid-cols-2 md:py-28">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Studio</p>
          <h1 className="mt-3 text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
            Blue Skylab — digital experiences with depth.
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600">
            We craft clean, modern websites with subtle 3D and interaction. Crisp type, generous whitespace, and performance-first motion.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-white shadow-sm transition-colors hover:bg-black">Start a project</a>
            <a href="#services" className="inline-flex items-center justify-center rounded-md border border-slate-200 px-5 py-2.5 text-slate-900 hover:bg-slate-50">See services</a>
          </div>
        </div>

        <div className="relative">
          <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
            {/* Subtle inner glow */}
            <div className="pointer-events-none absolute inset-0 rounded-xl bg-[radial-gradient(60%_60%_at_50%_40%,rgba(15,23,42,0.06),rgba(15,23,42,0)_70%)]" />

            {/* 3D Canvas or fallback */}
            {reduced ? (
              <StaticIllustration />
            ) : (
              <div className="absolute inset-0">
                <Spline
                  scene={sceneUrl}
                  onLoad={() => setIsLoading(false)}
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
            )}

            {/* Loading state */}
            {isLoading && !reduced && (
              <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-slate-100 to-slate-200" />
            )}
          </div>
          <p className="mt-3 text-xs text-slate-500">Interactive 3D preview — drag to orbit. Respects reduced motion.</p>
        </div>
      </div>
    </section>
  )
}

function StaticIllustration() {
  return (
    <div className="absolute inset-0 grid place-items-center">
      <div className="h-40 w-40 rotate-6 rounded-2xl border border-slate-200 bg-white shadow-sm" />
      <div className="absolute h-28 w-28 -rotate-6 rounded-full border border-slate-200 bg-slate-50 shadow-sm" />
    </div>
  )
}
