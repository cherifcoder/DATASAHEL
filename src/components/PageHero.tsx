import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { Arcs } from './Patterns'

export function PageHero({
  kicker,
  title,
  description,
  children,
  breadcrumb,
}: {
  kicker: string
  title: ReactNode
  description?: string
  children?: ReactNode
  breadcrumb?: string
}) {
  return (
    <section className="relative overflow-hidden border-b border-ink/8 bg-sand-100/45">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 dot-grid opacity-40 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]"
      />
      <Arcs className="pointer-events-none absolute -top-24 -right-24 size-[26rem] text-clay-500/20" />

      <div className="shell relative py-14 sm:py-20">
        {breadcrumb && (
          <nav aria-label="Fil d’Ariane" className="mb-7 flex items-center gap-2 font-mono text-[0.66rem] text-ink/70">
            <Link to="/" className="transition hover:text-clay-600">
              Accueil
            </Link>
            <ChevronRight className="size-3" />
            <span className="text-ink/70">{breadcrumb}</span>
          </nav>
        )}

        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-clay-500" />
          <span className="kicker text-clay-600">{kicker}</span>
        </div>

        <h1 className="display-lg mt-5 max-w-4xl text-[clamp(2.4rem,5.4vw,4.1rem)]">{title}</h1>

        {description && (
          <p className="mt-6 max-w-2xl text-[1.03rem] leading-relaxed text-ink/65">{description}</p>
        )}

        {children && <div className="mt-9">{children}</div>}
      </div>
    </section>
  )
}
