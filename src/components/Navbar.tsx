import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Download, MapPin, Phone, X } from 'lucide-react'
import { navLinks, site } from '../data/site'
import { useInstallPrompt } from '../hooks/useInstallPrompt'
import { cn } from '../lib/utils'
import { Logo } from './Logo'
import { Button } from './Button'
import { MobileTabBar } from './MobileTabBar'
import { SocialLinks } from './SocialLinks'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const { canInstall, install } = useInstallPrompt()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname, location.hash])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const isActive = (to: string) => {
    if (to === '/') return location.pathname === '/' && location.hash !== '#expertises'
    if (to.startsWith('/#')) return location.pathname === '/' && location.hash === to.slice(1)
    return location.pathname.startsWith(to)
  }

  return (
    <>
      <aside
        aria-label="Coordonnées et contacts"
        className="relative z-50 hidden bg-navy-950 text-sand-100/70 md:block"
      >
        <div className="shell flex h-9 items-center justify-between text-[0.72rem]">
          <p className="flex items-center gap-2 font-mono tracking-wide">
            <MapPin className="size-3.5 text-clay-400" strokeWidth={1.8} />
            Kalaban Coura ACI · Bamako, Mali
          </p>
          <div className="flex items-center gap-5 font-mono">
            <a
              href={site.phoneHref}
              className="flex items-center gap-2 transition hover:text-sand-50"
            >
              <Phone className="size-3.5 text-clay-400" strokeWidth={1.8} />
              {site.phone}
            </a>
            <span aria-hidden="true" className="h-3 w-px bg-sand-100/20" />
            <a
              href={`mailto:${site.email}`}
              className="transition hover:text-sand-50"
            >
              {site.email}
            </a>
          </div>
        </div>
      </aside>

      <header
        className={cn(
          'app-header sticky top-0 z-50 transition-all duration-500',
          scrolled
            ? 'border-b border-ink/8 bg-sand-50/90 shadow-[0_10px_40px_-24px_rgba(12,42,69,0.35)] backdrop-blur-xl'
            : 'border-b border-transparent bg-sand-50/60 backdrop-blur-sm',
        )}
      >
        <div className="shell flex h-[4.6rem] items-center justify-between gap-6">
          <Link to="/" aria-label="DataSahel — retour à l'accueil" className="relative z-10">
            <Logo />
          </Link>

          <nav aria-label="Navigation principale" className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const active = isActive(link.to)
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  aria-current={active ? 'page' : undefined}
                  className={cn(
                    'group relative px-3.5 py-2 text-[0.86rem] font-medium transition-colors',
                    active ? 'text-clay-600' : 'text-ink/75 hover:text-ink',
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      'absolute inset-x-3.5 -bottom-0.5 h-px origin-left bg-clay-500 transition-transform duration-300 ease-out-expo',
                      active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100',
                    )}
                  />
                </Link>
              )
            })}
          </nav>

          <div className="flex shrink-0 items-center gap-3">
            <div className="hidden sm:block">
              <Button to="/contact" size="md">
                Demander un devis
              </Button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[70] flex flex-col bg-sand-50 lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
          >
            <div className="app-header shell flex h-[4.6rem] shrink-0 items-center justify-between border-b border-ink/10">
              <Logo />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Fermer le menu"
                className="grid size-11 place-items-center rounded-full border border-ink/15 text-ink transition hover:border-ink/40"
              >
                <X className="size-5" strokeWidth={1.7} />
              </button>
            </div>

            <nav className="shell flex flex-1 flex-col justify-center gap-1 overflow-y-auto py-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * i + 0.08, duration: 0.45 }}
                >
                  <Link
                    to={link.to}
                    className="group flex items-baseline justify-between border-b border-ink/8 py-4"
                  >
                    <span className="flex items-baseline gap-4">
                      <span className="font-mono text-[0.65rem] text-clay-500">
                        0{i + 1}
                      </span>
                      <span className="font-display text-3xl text-ink transition group-hover:text-clay-600">
                        {link.label}
                      </span>
                    </span>
                    <ArrowUpRight className="size-5 text-ink/70 transition group-hover:-translate-y-0.5 group-hover:text-clay-500" />
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.42, duration: 0.45 }}
                className="mt-8 flex flex-col gap-4"
              >
                <Button to="/contact" size="lg" className="w-full">
                  Demander un devis
                </Button>
                {canInstall && (
                  <button
                    type="button"
                    onClick={install}
                    className="flex min-h-12 items-center justify-center gap-2 rounded-full bg-navy-900 px-5 py-3 text-sm font-semibold text-sand-50 transition active:scale-[0.99]"
                  >
                    <Download className="size-4" strokeWidth={1.8} />
                    Installer l’application
                  </button>
                )}
                <div className="flex items-center justify-between gap-4 rounded-2xl border border-ink/10 bg-sand-100/60 p-4">
                  <div className="text-sm">
                    <p className="font-mono text-[0.62rem] tracking-widest text-ink/70 uppercase">
                      Écrivez-nous
                    </p>
                    <a href={`mailto:${site.email}`} className="mt-1 block font-medium text-ink">
                      {site.email}
                    </a>
                    <a href={site.phoneHref} className="text-ink/65">
                      {site.phone}
                    </a>
                  </div>
                  <SocialLinks />
                </div>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <MobileTabBar onMore={() => setOpen(true)} menuOpen={open} />
    </>
  )
}
