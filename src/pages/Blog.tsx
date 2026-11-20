import { useMemo, useState } from 'react'
import { Seo } from '../components/Seo'
import { PageHero } from '../components/PageHero'
import { PostCard } from '../components/PostCard'
import { PostCover } from '../components/PostCover'
import { CtaBand } from '../components/CtaBand'
import { SectionLabel } from '../components/Patterns'
import { posts } from '../data/posts'
import { cn } from '../lib/utils'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Clock } from 'lucide-react'

export function Blog() {
  const categories = useMemo(() => ['Tous', ...new Set(posts.map((p) => p.category))], [])
  const [active, setActive] = useState('Tous')

  const filtered = active === 'Tous' ? posts : posts.filter((p) => p.category === active)
  const [lead, ...rest] = filtered

  return (
    <>
      <Seo
        title="Blog"
        description="Articles et méthodes DataSahel sur la collecte de données, l’analyse statistique, la visualisation et le suivi-évaluation de projets."
      />

      <PageHero
        breadcrumb="Blog"
        kicker="Le journal DataSahel"
        title={
          <>
            Comprendre la donnée, <span className="text-clay-600 italic">méthode</span> après
            méthode.
          </>
        }
        description="Des articles courts et concrets pour mieux collecter, analyser, visualiser et valoriser vos données — écrits par ceux qui les manipulent au quotidien."
      >
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              aria-pressed={active === category}
              className={cn(
                'rounded-full border px-4 py-2 font-mono text-[0.68rem] tracking-wide uppercase transition-all duration-300',
                active === category
                  ? 'border-navy-900 bg-navy-900 text-sand-50'
                  : 'border-ink/15 text-ink/70 hover:border-clay-500/50 hover:text-clay-600',
              )}
            >
              {category}
            </button>
          ))}
        </div>
      </PageHero>

      <section className="shell py-16 sm:py-20">
        {filtered.length === 0 ? (
          <p className="text-ink/70">Aucun article dans cette catégorie pour le moment.</p>
        ) : (
          <>
            {lead && (
              <Link
                to={`/blog/${lead.slug}`}
                className="group grid gap-7 border-b border-ink/10 pb-12 sm:pb-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-12"
              >
                <div className="overflow-hidden rounded-2xl">
                  <div className="transition-transform duration-700 ease-out-expo group-hover:scale-[1.03]">
                    <PostCover variant={lead.cover} className="aspect-[16/10] lg:aspect-[4/3]" />
                  </div>
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-clay-500/10 px-3 py-1 font-mono text-[0.62rem] tracking-[0.1em] text-clay-700 uppercase">
                      À la une
                    </span>
                    <span className="font-mono text-[0.68rem] text-ink/70">{lead.category}</span>
                    <span className="size-1 rounded-full bg-ink/20" />
                    <span className="flex items-center gap-1.5 font-mono text-[0.68rem] text-ink/70">
                      <Clock className="size-3" /> {lead.readingTime}
                    </span>
                  </div>
                  <h2 className="mt-4 font-display text-[clamp(1.7rem,3vw,2.5rem)] leading-[1.12] font-semibold text-ink transition-colors group-hover:text-clay-600">
                    {lead.title}
                  </h2>
                  <p className="mt-4 max-w-xl leading-relaxed text-ink/70">{lead.excerpt}</p>
                  <div className="mt-6 flex items-center gap-4">
                    <span className="inline-flex items-center gap-2 text-[0.85rem] font-medium text-navy-800 transition group-hover:text-clay-600">
                      Lire l’article
                      <ArrowUpRight className="size-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                    <span className="font-mono text-[0.66rem] text-ink/70">{lead.date}</span>
                  </div>
                </div>
              </Link>
            )}

            {rest.length > 0 && (
              <div className="mt-12">
                <SectionLabel index="02">Tous les articles</SectionLabel>
                <div className="mt-8 grid gap-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
                  {rest.map((post) => (
                    <PostCard key={post.slug} post={post} />
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </section>

      <CtaBand
        title="Une question de méthode ? Écrivons-la ensemble."
        description="Vous souhaitez un article sur un sujet précis, ou un accompagnement sur vos données ? Notre équipe vous répond."
        primaryLabel="Nous contacter"
      />
    </>
  )
}
