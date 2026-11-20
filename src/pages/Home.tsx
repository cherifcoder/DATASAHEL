import { ArrowRight, ArrowUpRight, Check, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { Button } from '../components/Button'
import { HeroVisual } from '../components/HeroVisual'
import { Marquee } from '../components/Marquee'
import { SectionHeading, SectionLabel, Highlight, Arcs } from '../components/Patterns'
import { Reveal } from '../components/Reveal'
import { ServiceCard } from '../components/ServiceCard'
import { PostCard } from '../components/PostCard'
import { Counter } from '../components/Counter'
import { CtaBand } from '../components/CtaBand'
import { services, objectives, values, processSteps, audiences } from '../data/services'
import { posts } from '../data/posts'
import { stats, tools } from '../data/site'

export function Home() {
  const featured = posts.slice(0, 3)

  return (
    <>
      <Seo
        title="Collecte, analyse et valorisation des données"
        description="DataSahel accompagne les organisations, institutions et jeunes professionnels d’Afrique dans la collecte, l’analyse, la visualisation des données et le suivi-évaluation. Formations pratiques à Bamako, Mali."
      />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 dot-grid opacity-[0.35] [mask-image:radial-gradient(ellipse_at_70%_30%,black,transparent_70%)]" />
        <div className="shell relative grid items-center gap-12 py-12 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:py-20 xl:gap-16">
          <div>
            <Reveal>
              <p className="flex flex-wrap items-center gap-3">
                <span className="h-px w-8 bg-clay-500" />
                <span className="kicker text-clay-600">Data & suivi-évaluation</span>
                <span className="hidden font-mono text-[0.66rem] tracking-wide text-ink/70 sm:inline">
                  Bamako, Mali
                </span>
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="display-xl mt-6">
                Des données brutes aux <Highlight>décisions</Highlight> qui comptent.
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-7 max-w-xl text-[1.02rem] leading-relaxed text-ink/65 sm:text-[1.08rem]">
                Nous accompagnons les organisations, institutions et jeunes professionnels en
                Afrique dans la <strong className="font-semibold text-ink">collecte</strong>,
                l’<strong className="font-semibold text-ink">analyse</strong>, la{' '}
                <strong className="font-semibold text-ink">visualisation</strong> et la{' '}
                <strong className="font-semibold text-ink">valorisation</strong> de leurs données —
                avec un volet suivi-évaluation rigoureux.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Button to="/#expertises" size="lg">
                  Découvrir nos expertises
                </Button>
                <Button to="/contact" variant="outline" size="lg">
                  Parler de votre projet
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.32}>
              <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-ink/10 pt-6 font-mono text-[0.68rem] tracking-wide text-ink/70">
                <span className="flex items-center gap-1.5 text-clay-600">
                  <Sparkles className="size-3.5" /> Former · Analyser · Innover
                </span>
                <span className="hidden size-1 rounded-full bg-ink/20 sm:block" />
                <span>ONG · Universités · Institutions · PME</span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.18} y={30} className="relative">
            <HeroVisual />
          </Reveal>
        </div>
      </section>

      <Marquee items={tools} />

      {/* MISSION */}
      <section className="relative overflow-hidden">
        <div className="shell grid gap-10 py-20 sm:py-28 lg:grid-cols-[0.38fr_0.62fr] lg:gap-16">
          <div>
            <div className="lg:sticky lg:top-28">
              <SectionLabel index="01">Notre mission</SectionLabel>
              <div className="relative mt-8 hidden lg:block">
                <Arcs className="size-56 text-clay-500/25" />
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-mono text-[0.6rem] tracking-[0.2em] text-clay-600/70 uppercase">
                  Sahel
                </span>
              </div>
              <Button to="/a-propos" variant="outline" size="md" className="mt-8">
                En savoir plus sur nous
              </Button>
            </div>
          </div>

          <div>
            <Reveal>
              <h2 className="font-display text-[clamp(1.65rem,3.1vw,2.55rem)] leading-[1.28] font-normal tracking-[-0.02em] text-ink">
                Renforcer les capacités des organisations et des jeunes professionnels en{' '}
                <span className="text-clay-600 italic">Afrique</span> à travers des services de
                gestion de données, des formations pratiques, des outils de visualisation
                impactants et un système de <span className="text-clay-600 italic">suivi-évaluation</span>{' '}
                rigoureux.
              </h2>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-7 max-w-2xl leading-relaxed text-ink/70">
                Améliorer les performances des interventions, mesurer l’efficacité des actions et
                éclairer les prises de décision : c’est la finalité de chaque mission que nous
                menons, de la première collecte de terrain jusqu’au rapport d’impact.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-6 border-t border-ink/10 pt-8 sm:grid-cols-3">
              {[
                { title: 'Former', text: 'Des ateliers pratiques qui laissent vos équipes autonomes.' },
                { title: 'Analyser', text: 'Des méthodes rigoureuses, des résultats vérifiables.' },
                { title: 'Innover', text: 'Des formats visuels qui rendent la donnée désirable.' },
              ].map((pillar, i) => (
                <Reveal key={pillar.title} delay={0.08 * i}>
                  <p className="font-mono text-[0.6rem] tracking-[0.18em] text-clay-700 uppercase">
                    0{i + 1}
                  </p>
                  <h3 className="mt-2 font-display text-lg font-semibold">{pillar.title}</h3>
                  <p className="mt-1.5 text-[0.84rem] leading-relaxed text-ink/70">{pillar.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EXPERTISES */}
      <section id="expertises" className="scroll-mt-24 border-y border-ink/8 bg-sand-100/50 py-20 sm:py-28">
        <div className="shell">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              index="02"
              kicker="Nos domaines d’expertise"
              title={
                <>
                  De la donnée brute au <span className="text-clay-600 italic">récit</span> qui
                  convainc.
                </>
              }
              description="Des approches méthodologiques rigoureuses et des outils adaptés pour suivre vos indicateurs clés, évaluer vos résultats et analyser votre impact."
            />
            <Link
              to="/contact"
              className="group inline-flex shrink-0 items-center gap-2 border-b border-ink/20 pb-1 text-[0.85rem] font-medium text-ink/70 transition hover:border-clay-500 hover:text-clay-600"
            >
              Un besoin spécifique ?
              <ArrowRight className="size-4 transition group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.id} delay={0.05 * (i % 3)}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* OBJECTIFS */}
      <section className="shell py-20 sm:py-28">
        <SectionHeading
          index="03"
          kicker="Objectifs stratégiques & opérationnels"
          title="Trois axes, une même exigence de rigueur."
          description="Nous intervenons à chaque étape du cycle de vie de vos données, avec des livrables concrets et utilisables par vos équipes."
        />

        <div className="mt-12 border-t border-ink/10">
          {objectives.map((objective, i) => (
            <Reveal key={objective.index} delay={0.05 * i}>
              <div className="group grid gap-5 border-b border-ink/10 py-8 transition-colors duration-300 hover:bg-sand-100/50 sm:py-10 lg:grid-cols-[5rem_0.95fr_1.05fr] lg:gap-10 lg:px-4">
                <span className="font-display text-3xl font-semibold text-clay-500/50 transition-colors group-hover:text-clay-500 lg:text-4xl">
                  {objective.index}
                </span>
                <h3 className="font-display text-xl leading-snug font-semibold text-ink sm:text-2xl">
                  {objective.title}
                </h3>
                <ul className="space-y-2.5">
                  {objective.points.map((point) => (
                    <li key={point} className="flex gap-3 text-[0.9rem] leading-relaxed text-ink/70">
                      <Check className="mt-0.5 size-4 shrink-0 text-clay-500" strokeWidth={2} />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* VALEURS + CHIFFRES */}
      <section className="relative overflow-hidden bg-navy-900 py-20 text-sand-50 sm:py-28">
        <div aria-hidden="true" className="absolute inset-0 dot-grid-light opacity-30" />
        <Arcs className="pointer-events-none absolute -top-32 -right-32 size-[36rem] text-clay-400/20" />
        <div className="shell relative">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <SectionHeading
                index="04"
                kicker="Notre valeur ajoutée"
                tone="light"
                title={
                  <>
                    Une expertise locale, des livrables qui{' '}
                    <span className="text-clay-400 italic">parlent</span>.
                  </>
                }
                description="Nous connaissons les réalités du terrain sahélien et les contraintes des projets de développement. C’est ce qui rend nos accompagnements pragmatiques."
              />
              <Button to="/a-propos" variant="light" size="md" className="mt-8">
                Découvrir notre approche
              </Button>
            </div>

            <div className="grid gap-px overflow-hidden rounded-2xl border border-sand-100/12 bg-sand-100/12 sm:grid-cols-2">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="group bg-navy-900 p-6 transition-colors duration-300 hover:bg-navy-800 sm:p-7"
                >
                  <span className="flex size-8 items-center justify-center rounded-full border border-clay-400/40 font-mono text-[0.6rem] text-clay-300">
                    ✓
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-sand-50">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-[0.85rem] leading-relaxed text-sand-100/65">{value.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-sand-100/12 bg-sand-100/12 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-navy-900 px-6 py-7">
                <p className="font-display text-4xl font-semibold text-sand-50 sm:text-5xl">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-[0.86rem] font-medium text-sand-100/80">{stat.label}</p>
                <p className="mt-1 font-mono text-[0.62rem] text-sand-100/65">{stat.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MÉTHODE */}
      <section className="shell py-20 sm:py-28">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <SectionHeading
            index="05"
            kicker="Notre méthode"
            title="Cinq étapes, zéro angle mort."
            description="Un cadre de travail lisible, du cadrage initial à la restitution, pour des données fiables et des décisions assumées."
          />
          <p className="hidden max-w-[15rem] border-l border-ink/15 pl-5 font-mono text-[0.7rem] leading-relaxed text-ink/70 lg:block">
            Chaque étape se conclut par un livrable validé avec vos équipes.
          </p>
        </div>

        <div className="relative mt-14">
          <div
            aria-hidden="true"
            className="absolute top-6 right-0 left-0 hidden border-t border-dashed border-ink/20 lg:block"
          />
          <div className="grid gap-9 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
            {processSteps.map((step, i) => (
              <Reveal key={step.step} delay={0.06 * i}>
                <div className="relative">
                  <span className="relative z-10 grid size-12 place-items-center rounded-full border border-clay-500/30 bg-sand-50 font-mono text-[0.72rem] text-clay-600 shadow-sm">
                    {step.step}
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-ink">{step.title}</h3>
                  <p className="mt-2 text-[0.84rem] leading-relaxed text-ink/70">{step.text}</p>
                  <p className="mt-3 font-mono text-[0.6rem] tracking-wide text-clay-600/80 uppercase">
                    {step.tag}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PUBLICS */}
      <section className="shell pb-20 sm:pb-28">
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-2xl bg-navy-900 p-8 text-sand-50 sm:p-10">
            <div aria-hidden="true" className="absolute inset-0 dot-grid-light opacity-30" />
            <div className="relative">
              <SectionLabel tone="light" index="06">Publics cibles</SectionLabel>
              <h2 className="display-md mt-5 text-sand-50">
                À qui s’adressent <br className="hidden sm:block" /> nos services ?
              </h2>
              <ul className="mt-8 space-y-3">
                {audiences.map((audience) => (
                  <li
                    key={audience}
                    className="flex items-center justify-between gap-4 border-b border-sand-100/10 pb-3 text-[0.93rem] text-sand-100/75"
                  >
                    {audience}
                    <ArrowUpRight className="size-4 shrink-0 text-clay-400" />
                  </li>
                ))}
              </ul>
              <p className="mt-7 text-[0.85rem] leading-relaxed text-sand-100/65">
                Vous êtes une structure de taille modeste ? Nos tarifs sont pensés pour vous, sans
                compromis sur la qualité.
              </p>
            </div>
          </div>

          <div className="relative flex flex-col justify-between overflow-hidden rounded-2xl bg-clay-600 p-8 text-sand-50 sm:p-10">
            <div aria-hidden="true" className="absolute inset-0 bogolan opacity-40" />
            <Arcs className="pointer-events-none absolute -right-24 -bottom-24 size-[24rem] text-sand-50/25" />
            <div className="relative">
              <span className="kicker text-sand-50/70">Notre credo</span>
              <p className="mt-5 font-display text-[clamp(1.4rem,2.4vw,1.9rem)] leading-snug font-medium">
                « Former, analyser, innover : nous ne livrons pas seulement des rapports, nous
                laissons des compétences. »
              </p>
            </div>
            <div className="relative mt-10">
              <Button to="/contact" variant="light" size="md">
                Demander un devis
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section className="border-t border-ink/8 bg-sand-100/40 py-20 sm:py-28">
        <div className="shell">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              index="07"
              kicker="Le journal"
              title="Idées, méthodes et actualités data."
            />
            <Link
              to="/blog"
              className="group inline-flex shrink-0 items-center gap-2 border-b border-ink/20 pb-1 text-[0.85rem] font-medium text-ink/70 transition hover:border-clay-500 hover:text-clay-600"
            >
              Tous les articles
              <ArrowRight className="size-4 transition group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-6">
            {featured.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Prêt à faire parler vos données ?"
        description="Un projet, une enquête, un tableau de bord à construire ou une équipe à former : parlons-en. Nous vous répondons sous 24 heures."
      />
    </>
  )
}
