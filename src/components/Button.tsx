import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'
import { cn } from '../lib/utils'

type Variant = 'primary' | 'navy' | 'outline' | 'light' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

const base =
  'group inline-flex items-center justify-center gap-2.5 rounded-full font-medium transition-all duration-300 ease-out-expo disabled:pointer-events-none disabled:opacity-60'

const variants: Record<Variant, string> = {
  primary:
    'bg-clay-600 text-sand-50 shadow-[0_10px_30px_-12px_rgba(185,77,21,0.7)] hover:bg-navy-900 hover:shadow-[0_14px_34px_-14px_rgba(12,42,69,0.65)]',
  navy: 'bg-navy-900 text-sand-50 hover:bg-clay-500',
  outline:
    'border border-ink/20 text-ink hover:border-clay-500 hover:bg-clay-500/5 hover:text-clay-600',
  light: 'bg-sand-50 text-navy-900 hover:bg-white hover:text-clay-600',
  ghost: 'text-ink hover:text-clay-600',
}

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-[0.8rem]',
  md: 'px-5 py-2.5 text-[0.875rem]',
  lg: 'px-6.5 py-3.5 text-[0.95rem] sm:px-7.5',
}

type ButtonProps = {
  children: ReactNode
  variant?: Variant
  size?: Size
  className?: string
  to?: string
  href?: string
  arrow?: boolean
  type?: 'button' | 'submit'
  disabled?: boolean
  onClick?: () => void
  ariaLabel?: string
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  to,
  href,
  arrow = true,
  type = 'button',
  disabled,
  onClick,
  ariaLabel,
}: ButtonProps) {
  const content = (
    <>
      <span>{children}</span>
      {arrow && (
        <ArrowUpRight
          aria-hidden="true"
          className="size-4 transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </>
  )

  const classes = cn(base, variants[variant], sizes[size], className)

  if (to) {
    return (
      <Link to={to} className={classes} aria-label={ariaLabel} onClick={onClick}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noreferrer noopener' : undefined}
      >
        {content}
      </a>
    )
  }

  return (
    <button type={type} className={classes} disabled={disabled} onClick={onClick} aria-label={ariaLabel}>
      {content}
    </button>
  )
}
