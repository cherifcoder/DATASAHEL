import { Facebook, Linkedin, MessageCircle } from 'lucide-react'
import { site } from '../data/site'
import { cn } from '../lib/utils'

const links = [
  { label: 'Facebook', href: site.socials.facebook, Icon: Facebook },
  { label: 'LinkedIn', href: site.socials.linkedin, Icon: Linkedin },
  { label: 'WhatsApp', href: site.whatsapp, Icon: MessageCircle },
]

export function SocialLinks({
  className,
  tone = 'dark',
}: {
  className?: string
  tone?: 'dark' | 'light'
}) {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      {links.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={label}
          className={cn(
            'grid size-9 place-items-center rounded-full border transition-all duration-300',
            tone === 'dark'
              ? 'border-ink/12 text-ink/70 hover:border-clay-500 hover:bg-clay-500 hover:text-sand-50'
              : 'border-sand-100/15 text-sand-100/70 hover:border-clay-400 hover:bg-clay-500 hover:text-sand-50',
          )}
        >
          <Icon className="size-4" strokeWidth={1.7} />
        </a>
      ))}
    </div>
  )
}
