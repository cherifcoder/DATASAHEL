import { Link } from 'react-router-dom'
import { ArrowUpRight, Clock } from 'lucide-react'
import type { Post } from '../data/posts'
import { PostCover } from './PostCover'
import { cn } from '../lib/utils'

export function PostCard({ post, large = false }: { post: Post; large?: boolean }) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className={cn(
        'group flex flex-col',
        large && 'sm:grid sm:grid-cols-2 sm:items-center sm:gap-8',
      )}
    >
      <div className="overflow-hidden rounded-2xl">
        <div className="transition-transform duration-700 ease-out-expo group-hover:scale-[1.035]">
          <PostCover variant={post.cover} className={large ? 'aspect-[16/10] sm:aspect-[5/4]' : 'aspect-[16/10]'} />
        </div>
      </div>

      <div className={cn('flex flex-1 flex-col', large ? 'mt-6 sm:mt-0' : 'mt-5')}>
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-clay-500/10 px-2.5 py-1 font-mono text-[0.6rem] tracking-[0.1em] text-clay-700 uppercase">
            {post.category}
          </span>
          <span className="font-mono text-[0.66rem] text-ink/70">{post.date}</span>
          <span className="flex items-center gap-1 font-mono text-[0.66rem] text-ink/70">
            <Clock className="size-3" /> {post.readingTime}
          </span>
        </div>

        <h3
          className={cn(
            'mt-3 font-display leading-snug font-semibold text-ink transition-colors duration-300 group-hover:text-clay-600',
            large ? 'text-2xl sm:text-[1.85rem]' : 'text-[1.24rem]',
          )}
        >
          {post.title}
        </h3>
        <p
          className={cn(
            'mt-2.5 leading-relaxed text-ink/70',
            large ? 'text-[0.98rem]' : 'text-[0.88rem]',
          )}
        >
          {post.excerpt}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-[0.8rem] font-medium text-navy-800 transition-colors group-hover:text-clay-600">
          Lire l’article
          <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  )
}
