import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { site } from '../data/site'

type SeoProps = {
  title: string
  description?: string
}

export function Seo({ title, description }: SeoProps) {
  useEffect(() => {
    document.title = `${title} — ${site.name}`
    if (description) {
      const tag = document.querySelector('meta[name="description"]')
      if (tag) tag.setAttribute('content', description)
    }
  }, [title, description])

  return null
}

export function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      const el = document.getElementById(id)
      if (el) {
        window.setTimeout(() => {
          const top = el.getBoundingClientRect().top + window.scrollY - 96
          window.scrollTo({ top, behavior: 'smooth' })
        }, 80)
        return
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname, hash])

  return null
}
