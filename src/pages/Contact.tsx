import { ChevronDown, Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { Seo } from '../components/Seo'
import { PageHero } from '../components/PageHero'
import { ContactForm } from '../components/ContactForm'
import { SocialLinks } from '../components/SocialLinks'
import { SectionLabel } from '../components/Patterns'
import { site } from '../data/site'

const faqs = [
  {
    q: 'Quels types de structures accompagnez-vous ?',
    a: 'Nous travaillons avec des ONG, des projets de développement, des universités et centres de recherche, des institutions publiques, des PME et des collectivités. Les jeunes professionnels peuvent également rejoindre nos formations et ateliers.',
  },
  {
    q: 'Proposez-vous des formations à distance ?',
    a: 'Oui. Nos ateliers sont proposés en présentiel à Bamako, en ligne ou en format hybride. Les contenus sont adaptés à votre niveau et peuvent être construits sur vos propres données.',
  },
  {
    q: 'Comment se déroule une première collaboration ?',
    a: 'Nous commençons par un échange de cadrage gratuit pour comprendre votre besoin et vos contraintes. Nous vous proposons ensuite une note d’approche avec les livrables, le calendrier et le budget, avant de démarrer.',
  },
  {
    q: 'Travaillez-vous en dehors du Mali ?',
    a: 'Nous intervenons principalement au Mali et dans la sous-région. Pour les missions à distance (analyse, tableaux de bord, appui méthodologique), nous travaillons avec des équipes partout en Afrique francophone.',
  },
]

const mapsHref =
  'https://www.google.com/maps/search/?api=1&query=Kalaban+Coura+ACI+Bamako+Mali'

export function Contact() {
  return (
    <>
      <Seo
        title="Contact"
        description="Contactez DataSahel à Bamako, Mali : devis, formations, collecte de données, analyse statistique et suivi-évaluation. Réponse sous 24 heures."
      />

      <PageHero
        breadcrumb="Contact"
        kicker="Aides & support"
        title={
          <>
            Parlons de vos <span className="text-clay-600 italic">données</span>.
          </>
        }
        description="Une question, un projet, une formation à organiser ? Nous facilitons à nos partenaires la compréhension des effets de leurs actions et la valorisation des apprentissages issus de leurs projets."
      />

      <section className="shell py-16 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14">
          <div>
            <SectionLabel index="01">Nous joindre</SectionLabel>
            <h2 className="display-md mt-5">Une équipe joignable, à Bamako comme à distance.</h2>

            <div className="mt-8 space-y-3">
              <a
                href={`mailto:${site.email}`}
                className="group flex items-start gap-4 rounded-2xl border border-ink/10 bg-sand-50 p-5 transition hover:border-clay-500/40 hover:bg-sand-100/50"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-clay-500/10 text-clay-600">
                  <Mail className="size-4.5" strokeWidth={1.7} />
                </span>
                <span>
                  <span className="block font-mono text-[0.6rem] tracking-[0.14em] text-ink/70 uppercase">
                    Écrivez-nous
                  </span>
                  <span className="mt-1 block text-[0.92rem] font-medium text-ink group-hover:text-clay-600">
                    {site.email}
                  </span>
                  <span className="block text-[0.85rem] text-ink/70">{site.emailAlt}</span>
                </span>
              </a>

              <a
                href={site.phoneHref}
                className="group flex items-start gap-4 rounded-2xl border border-ink/10 bg-sand-50 p-5 transition hover:border-clay-500/40 hover:bg-sand-100/50"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-clay-500/10 text-clay-600">
                  <Phone className="size-4.5" strokeWidth={1.7} />
                </span>
                <span>
                  <span className="block font-mono text-[0.6rem] tracking-[0.14em] text-ink/70 uppercase">
                    Appelez-nous
                  </span>
                  <span className="mt-1 block text-[0.92rem] font-medium text-ink group-hover:text-clay-600">
                    {site.phone}
                  </span>
                  <span className="flex items-center gap-1.5 text-[0.8rem] text-ink/70">
                    <Clock className="size-3" /> Lun – Sam · 8h – 18h GMT
                  </span>
                </span>
              </a>

              <a
                href={mapsHref}
                target="_blank"
                rel="noreferrer noopener"
                className="group flex items-start gap-4 rounded-2xl border border-ink/10 bg-sand-50 p-5 transition hover:border-clay-500/40 hover:bg-sand-100/50"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-clay-500/10 text-clay-600">
                  <MapPin className="size-4.5" strokeWidth={1.7} />
                </span>
                <span>
                  <span className="block font-mono text-[0.6rem] tracking-[0.14em] text-ink/70 uppercase">
                    Rendez-nous visite
                  </span>
                  <span className="mt-1 block text-[0.92rem] font-medium text-ink group-hover:text-clay-600">
                    {site.address.street}
                  </span>
                  <span className="block text-[0.85rem] text-ink/70">
                    {site.address.city}, {site.address.country}
                  </span>
                </span>
              </a>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-navy-900 p-5 text-sand-50">
              <div>
                <p className="flex items-center gap-2 font-medium">
                  <MessageCircle className="size-4 text-clay-400" /> Discuter avec nous
                </p>
                <p className="mt-1 font-mono text-[0.62rem] tracking-wide text-sand-100/65 uppercase">
                  Disponibilités 24/7
                </p>
              </div>
              <SocialLinks tone="light" />
            </div>

            {/* carte stylisée */}
            <div className="relative mt-6 overflow-hidden rounded-2xl border border-ink/10 bg-navy-900">
              <svg viewBox="0 0 400 180" className="h-44 w-full" aria-hidden="true">
                <rect width="400" height="180" fill="#0C2A45" />
                {[...Array(9)].map((_, i) => (
                  <line
                    key={`v${i}`}
                    x1={i * 50}
                    y1="0"
                    x2={i * 50 - 20}
                    y2="180"
                    stroke="#F5ECDB"
                    strokeOpacity="0.07"
                  />
                ))}
                {[...Array(5)].map((_, i) => (
                  <line
                    key={`h${i}`}
                    x1="0"
                    y1={i * 44}
                    x2="400"
                    y2={i * 44}
                    stroke="#F5ECDB"
                    strokeOpacity="0.07"
                  />
                ))}
                <path
                  d="M-10 128C60 118 120 150 190 138s130-42 220-18"
                  stroke="#2A6B99"
                  strokeWidth="10"
                  strokeOpacity="0.4"
                  fill="none"
                />
                <path
                  d="M-10 128C60 118 120 150 190 138s130-42 220-18"
                  stroke="#4A90BF"
                  strokeWidth="1.5"
                  strokeOpacity="0.6"
                  fill="none"
                />
                <circle cx="205" cy="92" r="22" fill="#D9601F" fillOpacity="0.16" />
                <circle cx="205" cy="92" r="10" fill="#D9601F" fillOpacity="0.28" />
                <circle cx="205" cy="92" r="4.5" fill="#D9601F" />
                <text
                  x="224"
                  y="88"
                  fill="#FBF7EF"
                  fontFamily="IBM Plex Mono, monospace"
                  fontSize="9"
                  letterSpacing="1.4"
                >
                  DATASAHEL
                </text>
                <text
                  x="224"
                  y="102"
                  fill="#FBF7EF"
                  fillOpacity="0.45"
                  fontFamily="IBM Plex Mono, monospace"
                  fontSize="7.5"
                  letterSpacing="1.2"
                >
                  KALABAN COURA ACI
                </text>
              </svg>
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 border-t border-sand-100/10 bg-navy-950/60 px-4 py-2.5 backdrop-blur">
                <span className="font-mono text-[0.58rem] tracking-wide text-sand-100/65">
                  12.6392° N · 8.0029° W
                </span>
                <a
                  href={mapsHref}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="font-mono text-[0.58rem] tracking-wide text-clay-300 transition hover:text-sand-50"
                >
                  Ouvrir dans Maps ↗
                </a>
              </div>
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-ink/8 bg-sand-100/40 py-16 sm:py-24">
        <div className="shell grid gap-10 lg:grid-cols-[0.4fr_0.6fr] lg:gap-16">
          <div>
            <SectionLabel index="02">Questions fréquentes</SectionLabel>
            <h2 className="display-md mt-5">Tout ce qu’il faut savoir avant de démarrer.</h2>
            <p className="mt-4 text-[0.92rem] leading-relaxed text-ink/70">
              Une autre question ? Écrivez-nous à{' '}
              <a
                href={`mailto:${site.email}`}
                className="text-clay-600 underline decoration-clay-500/40 underline-offset-4"
              >
                {site.email}
              </a>
              , nous répondons sous 24 heures.
            </p>
          </div>

          <div className="divide-y divide-ink/10 border-y border-ink/10">
            {faqs.map((faq) => (
              <details key={faq.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[0.95rem] font-medium text-ink transition hover:text-clay-600 [&::-webkit-details-marker]:hidden">
                  {faq.q}
                  <span className="grid size-7 shrink-0 place-items-center rounded-full border border-ink/15 transition group-open:rotate-180 group-open:border-clay-500/40 group-open:text-clay-600">
                    <ChevronDown className="size-3.5" />
                  </span>
                </summary>
                <p className="mt-3 max-w-xl pr-8 text-[0.88rem] leading-relaxed text-ink/70">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
