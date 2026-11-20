import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Check, TrendingUp } from 'lucide-react'
import { Arcs, DotField } from './Patterns'

const bars = [38, 56, 47, 68, 61, 84, 73]
const labels = ['J', 'F', 'M', 'A', 'M', 'J', 'J']

export function HeroVisual() {
  const reduce = useReducedMotion()

  return (
    <div data-hero-visual className="relative mx-auto w-full max-w-[33rem]">
      <Arcs className="pointer-events-none absolute -top-10 -right-8 size-[88%] text-clay-500/30" />
      <DotField className="pointer-events-none absolute bottom-16 -left-5 size-[42%] opacity-70" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-4 bottom-6 size-40 rounded-full bg-clay-500/15 blur-2xl"
      />

      <div className="relative z-10">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-sand-50/95 px-3 py-1.5 font-mono text-[0.6rem] tracking-wider text-ink/70 uppercase shadow-sm backdrop-blur"
        >
          <span className="relative flex size-1.5">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-clay-500/70" />
            <span className="relative inline-flex size-1.5 rounded-full bg-clay-500" />
          </span>
          KoboToolbox · terrain
        </motion.div>

        {/* tableau de bord principal */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 28, rotate: -3 }}
          animate={{ opacity: 1, y: 0, rotate: -1.4 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full rounded-2xl border border-ink/10 bg-sand-50 p-4 shadow-[0_36px_80px_-32px_rgba(12,42,69,0.5)] sm:p-5"
        >
          <div className="flex items-center justify-between gap-2 border-b border-ink/8 pb-3">
            <div className="flex items-center gap-2">
              <span className="flex gap-1">
                <span className="size-1.5 rounded-full bg-clay-500" />
                <span className="size-1.5 rounded-full bg-navy-800/25" />
                <span className="size-1.5 rounded-full bg-navy-800/25" />
              </span>
              <span className="font-mono text-[0.54rem] tracking-[0.14em] text-ink/70 uppercase sm:text-[0.58rem]">
                Suivi de projet · 2025
              </span>
            </div>
            <span className="rounded-full bg-clay-500/12 px-2 py-0.5 font-mono text-[0.5rem] tracking-wider text-clay-700 uppercase sm:text-[0.54rem]">
              En cours
            </span>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <div>
              <p className="font-mono text-[0.54rem] tracking-[0.12em] text-ink/70 uppercase">
                Bénéficiaires
              </p>
              <p className="mt-1 font-display text-[1.55rem] leading-none font-semibold text-navy-900 sm:text-[1.9rem]">
                12 480
              </p>
              <p className="mt-1.5 flex items-center gap-1 text-[0.64rem] font-medium text-clay-600">
                <TrendingUp className="size-3" /> +18,4% vs 2024
              </p>
            </div>
            <div className="border-l border-ink/8 pl-3">
              <p className="font-mono text-[0.54rem] tracking-[0.12em] text-ink/70 uppercase">
                Réalisation
              </p>
              <p className="mt-1 font-display text-[1.55rem] leading-none font-semibold text-navy-900 sm:text-[1.9rem]">
                87<span className="text-base text-clay-500">%</span>
              </p>
              <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-navy-900/10">
                <motion.div
                  className="h-full rounded-full bg-clay-500"
                  initial={reduce ? false : { width: 0 }}
                  animate={{ width: '87%' }}
                  transition={{ duration: 1.1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>
              <p className="mt-1.5 text-[0.64rem] text-ink/70">Cible : 92%</p>
            </div>
          </div>

          {/* graphique */}
          <div className="mt-4 rounded-xl bg-navy-900 px-3 pt-3 pb-2 sm:px-4">
            <div className="flex items-center justify-between">
              <p className="font-mono text-[0.52rem] tracking-[0.12em] text-sand-100/65 uppercase">
                Indicateurs mensuels
              </p>
              <div className="flex items-center gap-2.5 font-mono text-[0.48rem] text-sand-100/65">
                <span className="flex items-center gap-1">
                  <span className="size-1.5 rounded-full bg-clay-500" /> Réalisé
                </span>
                <span className="flex items-center gap-1">
                  <span className="size-1.5 rounded-full bg-sand-100/25" /> Prévu
                </span>
              </div>
            </div>
            <div className="relative mt-3 flex h-20 items-end gap-1.5 sm:h-28 sm:gap-2">
              {bars.map((value, i) => (
                <div key={labels[i] + i} className="relative flex h-full flex-1 items-end justify-center pb-4">
                  <motion.div
                    className="absolute bottom-4 w-full rounded-t-[3px] bg-sand-100/15"
                    initial={reduce ? false : { height: 0 }}
                    animate={{ height: `${Math.min(94, value + 14)}%` }}
                    transition={{ duration: 0.7, delay: 0.45 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  />
                  <motion.div
                    className={`relative z-10 w-full rounded-t-[3px] ${i === 5 ? 'bg-clay-500' : 'bg-sand-100/85'}`}
                    initial={reduce ? false : { height: 0 }}
                    animate={{ height: `${value}%` }}
                    transition={{ duration: 0.7, delay: 0.5 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  />
                  <span className="absolute bottom-0 font-mono text-[0.46rem] text-sand-100/65">
                    {labels[i]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* cartes secondaires, en flux sous le tableau de bord */}
        <div className="relative z-20 mt-2 flex items-end justify-between gap-3 px-2 sm:mt-1 sm:px-4">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="hidden items-center gap-2.5 rounded-xl border border-ink/10 bg-sand-50 px-3 py-2 shadow-[0_18px_40px_-22px_rgba(12,42,69,0.5)] sm:flex"
          >
            <span className="grid size-6 place-items-center rounded-full bg-clay-500/12">
              <Check className="size-3.5 text-clay-600" strokeWidth={2.4} />
            </span>
            <span className="text-[0.62rem] leading-tight font-medium text-ink/75">
              Rapport d’impact
              <span className="block font-mono text-[0.5rem] text-ink/70">PDF · prêt à partager</span>
            </span>
            <ArrowUpRight className="size-3.5 text-ink/70" />
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, x: 20, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="float-slower ml-auto flex items-center gap-3 rounded-2xl border border-sand-100/10 bg-navy-900 p-3 shadow-[0_24px_50px_-20px_rgba(12,42,69,0.7)] sm:gap-4 sm:p-4"
          >
            <div className="relative grid size-12 place-items-center sm:size-16">
              <svg viewBox="0 0 64 64" className="absolute inset-0 size-full -rotate-90">
                <circle cx="32" cy="32" r="26" fill="none" stroke="rgba(245,236,219,0.14)" strokeWidth="5" />
                <motion.circle
                  cx="32"
                  cy="32"
                  r="26"
                  fill="none"
                  stroke="#D9601F"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeDasharray={2 * Math.PI * 26}
                  initial={reduce ? false : { strokeDashoffset: 2 * Math.PI * 26 }}
                  animate={{ strokeDashoffset: 2 * Math.PI * 26 * 0.2 }}
                  transition={{ duration: 1.2, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                />
              </svg>
              <span className="font-display text-xs font-semibold text-sand-50 sm:text-sm">80%</span>
            </div>
            <div>
              <p className="font-mono text-[0.48rem] tracking-[0.12em] text-sand-100/65 uppercase sm:text-[0.5rem]">
                Indicateurs suivis
              </p>
              <p className="mt-1 font-display text-base leading-none font-semibold text-sand-50 sm:text-lg">
                32 <span className="text-sand-100/65">/ 40</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
