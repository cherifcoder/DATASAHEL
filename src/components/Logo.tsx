import { cn } from '../lib/utils'

type LogoProps = {
  className?: string
  tone?: 'dark' | 'light'
  compact?: boolean
}

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      role="img"
      aria-label="DataSahel"
      className={cn('size-11 shrink-0', className)}
    >
      <rect width="48" height="48" rx="13" fill="#0C2A45" />
      {/* rising data bars */}
      <rect x="10" y="27" width="5" height="11" rx="1.6" fill="#F5ECDB" />
      <rect x="18.5" y="22" width="5" height="16" rx="1.6" fill="#DDC9A6" />
      <rect x="27" y="16" width="5" height="22" rx="1.6" fill="#D9601F" />
      {/* trajectory */}
      <path
        d="M10 17.5 19 13l7.5 3.5L36 8"
        fill="none"
        stroke="#FBF7EF"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="36" cy="8" r="3.1" fill="#D9601F" stroke="#0C2A45" strokeWidth="1.6" />
    </svg>
  )
}

export function Logo({ className, tone = 'dark', compact = false }: LogoProps) {
  return (
    <span className={cn('flex items-center gap-3', className)}>
      <LogoMark />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            'font-display text-[1.42rem] font-semibold tracking-[-0.03em]',
            tone === 'dark' ? 'text-navy-900' : 'text-sand-50',
          )}
        >
          Data<span className={tone === 'dark' ? 'text-clay-600' : 'text-clay-400'}>Sahel</span>
        </span>
        {!compact && (
          <span
            className={cn(
              'mt-1 font-mono text-[0.52rem] tracking-[0.22em] uppercase',
              tone === 'dark' ? 'text-navy-800/75' : 'text-sand-100/65',
            )}
          >
            Former · Analyser · Innover
          </span>
        )}
      </span>
    </span>
  )
}
