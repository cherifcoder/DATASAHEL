import { ArrowRight } from 'lucide-react'
import { Button } from './Button'
import { Arcs } from './Patterns'
import { site } from '../data/site'

export function CtaBand({
  title,
  description,
  primaryLabel = 'Demander un devis',
  primaryTo = '/contact',
}: {
  title: string
  description: string
  primaryLabel?: string
  primaryTo?: string
}) {
  return (
    <section className="shell py-16 sm:py-24">
      <div className="relative overflow-hidden rounded-[2rem] bg-navy-900 px-6 py-12 text-sand-50 sm:px-12 sm:py-16 lg:px-16">
        <div aria-hidden="true" className="absolute inset-0 dot-grid-light opacity-50" />
        <Arcs className="absolute -top-28 -right-24 size-[30rem] text-clay-400/25" />
        <div
          aria-hidden="true"
          className="absolute -bottom-24 -left-16 size-52 rounded-full bg-clay-500/20 blur-3xl"
        />

        <div className="relative grid gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
          <div>
            <p className="kicker flex items-center gap-3 text-clay-300">
              <span className="size-1.5 rounded-full bg-clay-400" />
              Passons à l’action
            </p>
            <h2 className="display-lg mt-5 max-w-2xl text-sand-50">{title}</h2>
            <p className="mt-5 max-w-xl text-[1rem] leading-relaxed text-sand-100/65">
              {description}
            </p>
          </div>

          <div className="flex flex-col gap-3 lg:items-end">
            <Button to={primaryTo} size="lg" variant="primary">
              {primaryLabel}
            </Button>
            <a
              href={`mailto:${site.email}`}
              className="group inline-flex items-center gap-2 text-[0.86rem] text-sand-100/65 transition hover:text-sand-50 lg:pr-2"
            >
              Ou écrivez-nous à {site.email}
              <ArrowRight className="size-4 transition group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
