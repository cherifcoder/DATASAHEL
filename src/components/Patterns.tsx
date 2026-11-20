import type { ReactNode } from 'react'
import { cn } from '../lib/utils'

export function Arcs({
  className,
  color = 'currentColor',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      aria-hidden="true"
      className={cn('pointer-events-none', className)}
    >
      {[60, 92, 124, 156, 188].map((r, i) => (
        <circle
          key={r}
          cx="200"
          cy="200"
          r={r}
          stroke={color}
          strokeWidth={i === 2 ? 1.4 : 1}
          strokeDasharray={i === 4 ? '3 7' : undefined}
          opacity={0.9 - i * 0.13}
        />
      ))}
    </svg>
  )
}

export function DotField({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'pointer-events-none dot-grid [mask-image:radial-gradient(circle_at_center,black,transparent_72%)]',
        className,
      )}
    />
  )
}

export function BogolanBand({ className }: { className?: string }) {
  return (
    <div className={cn('relative overflow-hidden', className)} aria-hidden="true">
      <svg
        className="h-full w-full"
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        fill="none"
      >
        <defs>
          <pattern id="bogolan" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M0 30 15 12 30 30 45 12 60 30 45 48 30 30 15 48Z" stroke="currentColor" strokeWidth="1" />
            <path d="M0 30 15 48 30 30 45 48 60 30" stroke="currentColor" strokeWidth="1" opacity=".45" />
            <circle cx="30" cy="30" r="2.4" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="1200" height="60" fill="url(#bogolan)" />
      </svg>
    </div>
  )
}

export function SectionLabel({
  index,
  children,
  tone = 'dark',
  className,
}: {
  index?: string
  children: ReactNode
  tone?: 'dark' | 'light'
  className?: string
}) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      <span
        className={cn(
          'size-1.5 rounded-full',
          tone === 'dark' ? 'bg-clay-500' : 'bg-clay-400',
        )}
      />
      {index && (
        <span
          className={cn(
            'kicker',
            tone === 'dark' ? 'text-ink/70' : 'text-sand-100/65',
          )}
        >
          {index}
        </span>
      )}
      <span
        className={cn(
          'kicker',
          tone === 'dark' ? 'text-clay-600' : 'text-clay-300',
        )}
      >
        {children}
      </span>
    </div>
  )
}

export function SectionHeading({
  index,
  kicker,
  title,
  description,
  tone = 'dark',
  align = 'left',
  className,
  titleClassName,
}: {
  index?: string
  kicker: string
  title: ReactNode
  description?: ReactNode
  tone?: 'dark' | 'light'
  align?: 'left' | 'center'
  className?: string
  titleClassName?: string
}) {
  return (
    <div
      className={cn(
        'max-w-3xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      <SectionLabel index={index} tone={tone} className={align === 'center' ? 'justify-center' : undefined}>
        {kicker}
      </SectionLabel>
      <h2
        className={cn(
          'display-lg mt-5',
          tone === 'dark' ? 'text-ink' : 'text-sand-50',
          titleClassName,
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-5 max-w-2xl text-[1.02rem] leading-relaxed',
            align === 'center' && 'mx-auto',
            tone === 'dark' ? 'text-ink/65' : 'text-sand-100/70',
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}

export function Highlight({ children }: { children: ReactNode }) {
  return (
    <span className="relative inline-block whitespace-nowrap text-clay-600 italic">
      <span className="relative z-10">{children}</span>
      <svg
        aria-hidden="true"
        viewBox="0 0 200 12"
        preserveAspectRatio="none"
        className="absolute -bottom-1 left-0 h-2.5 w-full text-clay-400/50"
      >
        <path
          d="M2 9C40 3 90 2 120 5s55 4 78 1"
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    </span>
  )
}
