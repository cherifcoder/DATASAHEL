import { Link } from 'react-router-dom'
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'
import { navLinks, site } from '../data/site'
import { services } from '../data/services'
import { Logo } from './Logo'
import { SocialLinks } from './SocialLinks'
import { Arcs } from './Patterns'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-navy-950 text-sand-100">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-clay-500/60 to-transparent" />
      <div className="pointer-events-none absolute inset-0 dot-grid-light opacity-40" aria-hidden="true" />
      <Arcs className="pointer-events-none absolute -top-40 -right-40 size-[34rem] text-sand-100/[0.06]" />

      <div className="shell relative grid gap-12 py-16 sm:py-20 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <Link to="/" aria-label="DataSahel — accueil">
            <Logo tone="light" />
          </Link>
          <p className="mt-6 max-w-sm text-[0.95rem] leading-relaxed text-sand-100/65">
            {site.baseline} Collecte, analyse, visualisation et valorisation des données pour les
            organisations, institutions et jeunes professionnels en Afrique.
          </p>
          <SocialLinks tone="light" className="mt-7" />
        </div>

        <div className="lg:col-span-2">
          <p className="kicker text-sand-100/65">Explorer</p>
          <ul className="mt-5 space-y-3 text-[0.92rem]">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="group inline-flex items-center gap-1.5 text-sand-100/70 transition hover:text-sand-50"
                >
                  {link.label}
                  <ArrowUpRight className="size-3.5 opacity-0 transition group-hover:opacity-100" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <p className="kicker text-sand-100/65">Expertises</p>
          <ul className="mt-5 space-y-3 text-[0.92rem]">
            {services.slice(0, 5).map((service) => (
              <li key={service.id}>
                <Link
                  to="/#expertises"
                  className="text-sand-100/70 transition hover:text-sand-50"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <p className="kicker text-sand-100/65">Nous joindre</p>
          <ul className="mt-5 space-y-4 text-[0.92rem]">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-clay-400" strokeWidth={1.7} />
              <span className="text-sand-100/70">
                {site.address.street}
                <br />
                {site.address.city}, {site.address.country}
              </span>
            </li>
            <li>
              <a
                href={site.phoneHref}
                className="flex items-center gap-3 text-sand-100/70 transition hover:text-sand-50"
              >
                <Phone className="size-4 shrink-0 text-clay-400" strokeWidth={1.7} />
                {site.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="flex items-start gap-3 text-sand-100/70 transition hover:text-sand-50"
              >
                <Mail className="mt-0.5 size-4 shrink-0 text-clay-400" strokeWidth={1.7} />
                <span>
                  {site.email}
                  <br />
                  {site.emailAlt}
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative select-none overflow-hidden" aria-hidden="true">
        <p className="shell -mb-[0.32em] font-display text-[19vw] leading-[0.75] font-semibold tracking-[-0.05em] text-sand-50/[0.045]">
          DataSahel
        </p>
      </div>

      <div className="relative border-t border-sand-100/10">
        <div className="shell flex flex-col gap-4 py-6 text-[0.78rem] text-sand-100/65 md:flex-row md:items-center md:justify-between">
          <p>© {year} {site.name}. Tous droits réservés.</p>
          <p className="font-mono text-[0.68rem] tracking-[0.18em] uppercase">
            {site.tagline} — Bamako, Mali
          </p>
          <div className="flex gap-6">
            <Link to="/contact" className="transition hover:text-sand-50">
              Centre d’aide
            </Link>
            <Link to="/contact" className="transition hover:text-sand-50">
              Mentions légales
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
