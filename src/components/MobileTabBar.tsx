import { BarChart3, Home, Info, Mail, Newspaper } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { cn } from '../lib/utils'

type Tab = {
  label: string
  to: string
  icon: LucideIcon
  isActive: (pathname: string, hash: string) => boolean
}

const tabs: Tab[] = [
  {
    label: 'Accueil',
    to: '/',
    icon: Home,
    isActive: (pathname, hash) => pathname === '/' && hash !== '#expertises',
  },
  {
    label: 'À propos',
    to: '/a-propos',
    icon: Info,
    isActive: (pathname) => pathname.startsWith('/a-propos'),
  },
  {
    label: 'Expertises',
    to: '/#expertises',
    icon: BarChart3,
    isActive: (pathname, hash) => pathname === '/' && hash === '#expertises',
  },
  {
    label: 'Blog',
    to: '/blog',
    icon: Newspaper,
    isActive: (pathname) => pathname.startsWith('/blog'),
  },
  {
    label: 'Contact',
    to: '/contact',
    icon: Mail,
    isActive: (pathname) => pathname.startsWith('/contact'),
  },
]

export function MobileTabBar() {
  const { pathname, hash } = useLocation()

  return (
    <nav
      aria-label="Navigation rapide"
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-sand-100/10 bg-navy-950/95 pb-[env(safe-area-inset-bottom,0px)] shadow-[0_-12px_40px_-24px_rgba(8,29,49,0.9)] backdrop-blur-xl lg:hidden"
    >
      <ul className="mx-auto grid max-w-md grid-cols-5">
        {tabs.map((tab) => {
          const active = tab.isActive(pathname, hash)
          const Icon = tab.icon

          return (
            <li key={tab.label}>
              <Link
                to={tab.to}
                aria-current={active ? 'page' : undefined}
                className={cn(
                  'relative flex min-h-[3.75rem] flex-col items-center justify-center gap-1 px-1 pt-2 pb-1 text-[0.62rem] font-medium transition-colors',
                  active ? 'text-sand-50' : 'text-sand-100/60 active:text-sand-100',
                )}
              >
                {active && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-4 top-0 h-0.5 rounded-full bg-clay-500"
                  />
                )}
                <Icon className="size-[1.15rem]" strokeWidth={active ? 2.1 : 1.7} />
                <span>{tab.label}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
