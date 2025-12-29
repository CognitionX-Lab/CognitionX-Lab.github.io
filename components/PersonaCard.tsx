import type { Person } from '@/lib/data'
import { clsx } from 'clsx'
import Link from 'next/link'
import { IconMail, IconScholar, IconGitHub, IconLinkedIn, IconWebsite } from '@/components/Icons'

function IconBtn({
  href,
  label,
  children,
}: { href?: string; label: string; children: React.ReactNode }) {
  if (!href) return null
  const isMail = href.includes('@') && !href.startsWith('http') && !href.startsWith('mailto:')
  const finalHref = isMail ? `mailto:${href}` : href
  const external = finalHref.startsWith('http')
  return (
    <a
      href={finalHref}
      aria-label={label}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
      className="inline-flex items-center justify-center rounded-full border border-bordercolor/60 bg-panel p-1.5 transition-transform duration-200 hover:scale-110 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    >
      {children}
    </a>
  )
}

export function PersonaCard({ person, highlight, full, clickable }: { person: Person; highlight?: boolean; full?: boolean; clickable?: boolean }) {
  const content = (
    <div className={clsx('rounded-xl2 border bg-surface p-4', highlight && 'ring-2 ring-primary', clickable && 'cursor-pointer hover:shadow-sm transition')}>
      <div className={clsx('flex', full ? 'gap-6' : 'flex-col items-center text-center gap-3')}>
        <img
          src={person.avatar}
          alt={person.name}
          className={clsx('rounded-full border object-cover', full ? 'h-28 w-28' : 'h-24 w-24')}
        />
        <div className={clsx(full ? 'flex-1' : '')}>
          <div className="font-semibold text-lg">{person.name}</div>
          <div className="text-sm text-neutralMid">{person.role}</div>

          {full ? (
            <p className="mt-2 text-sm text-neutralMid">{person.bio}</p>
          ) : (
            <p className="mt-1 text-sm text-neutralMid line-clamp-2">{person.bio}</p>
          )}

          <div className={clsx('mt-3 flex items-center gap-2', full ? '' : 'justify-center')}>
            <IconBtn href={person.links.website} label={`${person.name} — Website`}><IconWebsite /></IconBtn>
            <IconBtn href={person.links.email} label={`${person.name} — Email`}><IconMail /></IconBtn>
            <IconBtn href={person.links.scholar} label={`${person.name} — Google Scholar`}><IconScholar /></IconBtn>
            <IconBtn href={person.links.github} label={`${person.name} — GitHub`}><IconGitHub /></IconBtn>
            <IconBtn href={person.links.linkedin} label={`${person.name} — LinkedIn`}><IconLinkedIn /></IconBtn>
          </div>

          {full && (
            <div className="mt-3 flex flex-wrap gap-2">
              {person.interests.map((tag) => (
                <span key={tag} className="text-xs bg-panel px-2 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )

  if (clickable) {
    // We cast to any here ONLY if your Person type in lib/data.ts isn't updated yet.
    // Ideally, once Step 1 is done, person.slug will work perfectly.
    return <Link href={`/team/${(person as any).slug}`} className="block">{content}</Link>
  }

  return content
}
