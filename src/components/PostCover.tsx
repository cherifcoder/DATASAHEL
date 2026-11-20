import { cn } from '../lib/utils'
import type { Post } from '../data/posts'

export function PostCover({
  variant,
  className,
}: {
  variant: Post['cover']
  className?: string
}) {
  return (
    <div
      className={cn(
        'grain relative w-full overflow-hidden rounded-2xl',
        className,
      )}
      aria-hidden="true"
    >
      {variant === 'grid' && (
        <div className="absolute inset-0 bg-navy-900">
          <div className="absolute inset-0 dot-grid-light opacity-60" />
          <div className="absolute -top-16 -right-14 size-56 rounded-full bg-clay-500" />
          <div className="absolute -top-6 -right-4 size-24 rounded-full border border-sand-100/25" />
          <svg viewBox="0 0 320 200" className="absolute inset-0 h-full w-full">
            <path
              d="M-10 160 60 140 110 150 160 112 205 124 252 84 330 96"
              fill="none"
              stroke="#F5ECDB"
              strokeWidth="2"
              strokeLinecap="round"
            />
            {[
              [60, 140],
              [110, 150],
              [160, 112],
              [205, 124],
              [252, 84],
            ].map(([x, y]) => (
              <circle key={`${x}-${y}`} cx={x} cy={y} r="4" fill="#FBF7EF" stroke="#0C2A45" strokeWidth="2" />
            ))}
          </svg>
          <div className="absolute bottom-5 left-5 flex items-end gap-2">
            {[18, 30, 24, 42, 36].map((h, i) => (
              <span
                key={i}
                className={cn('w-2.5 rounded-sm', i === 3 ? 'bg-clay-400' : 'bg-sand-100/35')}
                style={{ height: h }}
              />
            ))}
          </div>
          <span className="absolute bottom-6 left-1/3 font-mono text-[0.55rem] tracking-[0.22em] text-sand-100/65 uppercase">
            data / terrain
          </span>
        </div>
      )}

      {variant === 'arcs' && (
        <div className="absolute inset-0 bg-clay-500">
          <div className="absolute inset-0 bogolan opacity-45" />
          <svg viewBox="0 0 320 200" className="absolute inset-0 h-full w-full">
            {[40, 64, 88, 112, 136, 160].map((r, i) => (
              <circle
                key={r}
                cx="252"
                cy="180"
                r={r}
                fill="none"
                stroke="#FBF7EF"
                strokeWidth={i === 2 ? 2 : 1}
                opacity={0.75 - i * 0.08}
              />
            ))}
            <circle cx="62" cy="56" r="26" fill="#FBF7EF" fillOpacity="0.16" />
            <circle cx="62" cy="56" r="26" fill="none" stroke="#FBF7EF" strokeWidth="1" />
          </svg>
          <span className="absolute bottom-6 left-6 font-mono text-[0.55rem] tracking-[0.22em] text-sand-50/60 uppercase">
            comprendre / décider
          </span>
        </div>
      )}

      {variant === 'bars' && (
        <div className="absolute inset-0 bg-sand-200">
          <div className="absolute inset-0 bogolan opacity-30" />
          <div className="absolute top-8 right-8 size-20 rounded-full bg-clay-500/90" />
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-center gap-4 px-8">
            {[34, 58, 46, 78, 62, 96, 72].map((h, i) => (
              <span
                key={i}
                className={cn('w-6 rounded-t-sm', i === 5 ? 'bg-clay-500' : 'bg-navy-900/80')}
                style={{ height: h }}
              />
            ))}
          </div>
          <div className="absolute top-8 left-8 font-mono text-[0.55rem] tracking-[0.22em] text-navy-900/45 uppercase">
            collecte · analyse
          </div>
        </div>
      )}

      {variant === 'rings' && (
        <div className="absolute inset-0 bg-navy-800">
          <div className="absolute inset-0 dot-grid-light opacity-40" />
          <svg viewBox="0 0 320 200" className="absolute inset-0 h-full w-full">
            {[28, 52, 76, 100].map((r, i) => (
              <circle
                key={r}
                cx="170"
                cy="100"
                r={r}
                fill={i === 1 ? 'none' : 'none'}
                stroke={i === 3 ? '#D9601F' : '#F5ECDB'}
                strokeOpacity={i === 3 ? 0.9 : 0.22}
                strokeWidth={i === 3 ? 2 : 1}
              />
            ))}
            <circle cx="170" cy="100" r="20" fill="#D9601F" />
            <path d="M170 100 242 128" stroke="#F5ECDB" strokeWidth="1.4" strokeDasharray="3 4" />
            <circle cx="242" cy="128" r="3.5" fill="#F5ECDB" />
          </svg>
          <span className="absolute bottom-6 left-6 font-mono text-[0.55rem] tracking-[0.22em] text-sand-100/65 uppercase">
            mesurer / apprendre
          </span>
        </div>
      )}
    </div>
  )
}
