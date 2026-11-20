import { Seo } from '../components/Seo'
import { Button } from '../components/Button'
import { Arcs } from '../components/Patterns'

export function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden py-20">
      <div aria-hidden="true" className="absolute inset-0 dot-grid opacity-30" />
      <Arcs className="pointer-events-none absolute -top-20 -right-20 size-[28rem] text-clay-500/20" />
      <div className="shell relative max-w-2xl">
        <p className="font-display text-[7rem] leading-none font-semibold text-clay-500/25 sm:text-[10rem]">
          404
        </p>
        <h1 className="display-lg mt-2">Cette page s’est perdue dans les données.</h1>
        <p className="mt-5 max-w-lg leading-relaxed text-ink/70">
          Le lien est peut-être obsolète, ou la page a été déplacée. Reprenons depuis un point
          connu.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button to="/" size="lg">
            Retour à l’accueil
          </Button>
          <Button to="/contact" variant="outline" size="lg">
            Nous contacter
          </Button>
        </div>
      </div>
      <Seo title="Page introuvable" />
    </section>
  )
}
