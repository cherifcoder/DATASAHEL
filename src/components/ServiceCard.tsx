import {
  ArrowUpRight,
  BarChart3,
  Database,
  GraduationCap,
  Megaphone,
  Smartphone,
  Target,
  type LucideIcon,
} from 'lucide-react'
import type { Service, ServiceIcon } from '../data/services'

const icons: Record<ServiceIcon, LucideIcon> = {
  database: Database,
  smartphone: Smartphone,
  target: Target,
  chart: BarChart3,
  megaphone: Megaphone,
  graduation: GraduationCap,
}

export function ServiceCard({ service }: { service: Service }) {
  const Icon = icons[service.icon]

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-ink/10 bg-sand-100/40 p-6 transition-all duration-500 ease-out-expo hover:-translate-y-1 hover:border-clay-500/35 hover:bg-sand-50 hover:shadow-[0_34px_70px_-44px_rgba(12,42,69,0.55)] sm:p-7">
      <div
        aria-hidden="true"
        className="absolute -top-10 -right-10 size-28 rounded-full bg-clay-500/[0.06] transition-transform duration-500 group-hover:scale-[1.6]"
      />
      <div className="relative flex items-start justify-between">
        <span className="grid size-11 place-items-center rounded-xl bg-navy-900 text-sand-50 transition-colors duration-500 group-hover:bg-clay-500">
          <Icon className="size-5" strokeWidth={1.6} />
        </span>
        <span className="font-mono text-[0.68rem] tracking-[0.18em] text-ink/70 transition-colors group-hover:text-clay-500">
          {service.index}
        </span>
      </div>

      <h3 className="relative mt-6 font-display text-[1.32rem] leading-tight font-semibold text-ink">
        {service.title}
      </h3>
      <p className="relative mt-3 text-[0.9rem] leading-relaxed text-ink/70">
        {service.description}
      </p>

      <ul className="relative mt-5 space-y-2 border-t border-ink/8 pt-5">
        {service.bullets.map((bullet) => (
          <li key={bullet} className="flex gap-2.5 text-[0.8rem] leading-snug text-ink/70">
            <span aria-hidden="true" className="mt-[0.45em] size-1 shrink-0 rounded-full bg-clay-500/70" />
            {bullet}
          </li>
        ))}
      </ul>

      <div className="relative mt-auto flex justify-end pt-6">
        <span className="grid size-9 place-items-center rounded-full border border-ink/12 text-ink/70 transition-all duration-300 group-hover:border-clay-500 group-hover:bg-clay-500 group-hover:text-sand-50">
          <ArrowUpRight className="size-4" strokeWidth={1.8} />
        </span>
      </div>
    </article>
  )
}
