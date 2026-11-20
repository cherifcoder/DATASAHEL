import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, ArrowUpRight, Clock, Facebook, Linkedin } from 'lucide-react'
import { Seo } from '../components/Seo'
import { PostCover } from '../components/PostCover'
import { Button } from '../components/Button'
import { SectionLabel } from '../components/Patterns'
import { CtaBand } from '../components/CtaBand'
import { posts, type Block } from '../data/posts'
import { site } from '../data/site'
import { NotFound } from './NotFound'

function renderBlock(block: Block, index: number) {
  switch (block.type) {
    case 'h2':
      return <h2 key={index}>{block.text}</h2>
    case 'quote':
      return <blockquote key={index}>{block.text}</blockquote>
    case 'ul':
      return (
        <ul key={index}>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )
    default:
      return <p key={index}>{block.text}</p>
  }
}

export function Article() {
  const { slug } = useParams()
  const post = posts.find((p) => p.slug === slug)

  if (!post) return <NotFound />

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 2)
  const shareUrl =
    typeof window !== 'undefined' ? `${window.location.origin}/blog/${post.slug}` : ''
  const relatedIndex = posts.findIndex((p) => p.slug === post.slug)
  const next = posts[(relatedIndex + 1) % posts.length]

  return (
    <>
      <Seo title={post.title} description={post.excerpt} />

      <article>
        <header className="relative overflow-hidden border-b border-ink/8 bg-sand-100/45">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 dot-grid opacity-30 [mask-image:linear-gradient(to_bottom,black,transparent)]"
          />
          <div className="shell relative max-w-4xl py-12 sm:py-16">
            <Link
              to="/blog"
              className="group inline-flex items-center gap-2 font-mono text-[0.68rem] tracking-wide text-ink/70 transition hover:text-clay-600"
            >
              <ArrowLeft className="size-3.5 transition group-hover:-translate-x-1" />
              Retour au journal
            </Link>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-clay-500/10 px-3 py-1 font-mono text-[0.62rem] tracking-[0.1em] text-clay-700 uppercase">
                {post.category}
              </span>
              <span className="font-mono text-[0.68rem] text-ink/70">{post.date}</span>
              <span className="size-1 rounded-full bg-ink/20" />
              <span className="flex items-center gap-1.5 font-mono text-[0.68rem] text-ink/70">
                <Clock className="size-3" /> {post.readingTime} de lecture
              </span>
            </div>

            <h1 className="display-lg mt-5 max-w-3xl text-[clamp(2rem,4.6vw,3.4rem)]">{post.title}</h1>
            <p className="mt-6 max-w-2xl text-[1.02rem] leading-relaxed text-ink/70">{post.excerpt}</p>

            <div className="mt-8 flex items-center gap-3 border-t border-ink/10 pt-6">
              <span className="grid size-9 place-items-center rounded-full bg-navy-900 font-display text-[0.7rem] font-semibold text-sand-50">
                DS
              </span>
              <div className="text-[0.78rem]">
                <p className="font-medium text-ink">L’équipe {site.name}</p>
                <p className="font-mono text-[0.62rem] text-ink/70">Bamako, Mali</p>
              </div>
            </div>
          </div>
        </header>

        <div className="shell py-10 sm:py-14">
          <div className="mx-auto max-w-4xl">
            <div className="overflow-hidden rounded-2xl">
              <PostCover variant={post.cover} className="aspect-[16/9]" />
            </div>

            <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,1fr)_17rem] lg:gap-14">
              <div className="prose-ds max-w-2xl">{post.body.map(renderBlock)}</div>

              <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
                <div className="rounded-2xl border border-ink/10 bg-sand-100/60 p-5">
                  <p className="kicker text-ink/70">Partager</p>
                  <div className="mt-4 flex gap-2">
                    <a
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="Partager sur LinkedIn"
                      className="grid size-9 place-items-center rounded-full border border-ink/12 text-ink/70 transition hover:border-clay-500 hover:bg-clay-500 hover:text-sand-50"
                    >
                      <Linkedin className="size-4" />
                    </a>
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="Partager sur Facebook"
                      className="grid size-9 place-items-center rounded-full border border-ink/12 text-ink/70 transition hover:border-clay-500 hover:bg-clay-500 hover:text-sand-50"
                    >
                      <Facebook className="size-4" />
                    </a>
                  </div>
                </div>

                <div className="rounded-2xl bg-navy-900 p-5 text-sand-50">
                  <p className="kicker text-clay-300">Besoin d’aide ?</p>
                  <p className="mt-3 font-display text-lg leading-snug font-semibold">
                    Transformons vos données en décisions.
                  </p>
                  <p className="mt-2 text-[0.8rem] leading-relaxed text-sand-100/65">
                    Collecte, analyse, tableau de bord ou formation : parlons de votre projet.
                  </p>
                  <Button to="/contact" variant="primary" size="sm" className="mt-4 w-full">
                    Nous contacter
                  </Button>
                </div>

                <div className="rounded-2xl border border-ink/10 p-5">
                  <p className="kicker text-ink/70">À lire aussi</p>
                  <ul className="mt-4 space-y-4">
                    {related.map((item) => (
                      <li key={item.slug}>
                        <Link
                          to={`/blog/${item.slug}`}
                          className="group block text-[0.86rem] leading-snug font-medium text-ink/75 transition hover:text-clay-600"
                        >
                          {item.title}
                          <span className="mt-1 flex items-center gap-1 font-mono text-[0.6rem] text-ink/70">
                            {item.category}
                            <ArrowUpRight className="size-3 opacity-0 transition group-hover:opacity-100" />
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
            </div>

            <div className="mt-16 border-t border-ink/10 pt-8">
              <SectionLabel>Article suivant</SectionLabel>
              <Link
                to={`/blog/${next.slug}`}
                className="group mt-5 flex flex-col justify-between gap-4 sm:flex-row sm:items-center"
              >
                <h2 className="max-w-2xl font-display text-2xl leading-snug font-semibold text-ink transition group-hover:text-clay-600 sm:text-3xl">
                  {next.title}
                </h2>
                <span className="grid size-11 shrink-0 place-items-center rounded-full border border-ink/15 text-ink/70 transition group-hover:border-clay-500 group-hover:bg-clay-500 group-hover:text-sand-50">
                  <ArrowRight className="size-5" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </article>

      <CtaBand
        title="Envie d’aller plus loin sur ces sujets ?"
        description="Nos formations et accompagnements sont construits à partir de cas concrets, comme ceux de nos articles."
        primaryLabel="Découvrir nos services"
        primaryTo="/#expertises"
      />
    </>
  )
}
