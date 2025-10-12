import type { Person } from '@/lib/data'
import { clsx } from 'clsx'

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

function IconScholar(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden {...props}>
      <path fill="currentColor" d="M12 3 2 8l10 5 10-5-10-5Zm7 7.236V14c0 2.5-3.134 4.5-7 4.5S5 16.5 5 14v-3.764l7 3.5 7-3.5Z"/>
    </svg>
  )
}
function IconGitHub(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden {...props}>
      <path fill="currentColor" d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.41-4.04-1.41-.55-1.38-1.34-1.75-1.34-1.75-1.09-.75.08-.74.08-.74 1.2.09 1.83 1.24 1.83 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.77-1.6-2.66-.3-5.46-1.33-5.46-5.92 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.78.84 1.24 1.91 1.24 3.22 0 4.6-2.8 5.61-5.47 5.91.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.82.58A12 12 0 0 0 12 .5Z"/>
    </svg>
  )
}
function IconLinkedIn(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden {...props}>
      <path fill="currentColor" d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM14.5 9c-2.21 0-3.5 1.2-4 2V9H7v12h3.5v-6c0-1.6 1.05-2.5 2.45-2.5 1.34 0 2.05.9 2.05 2.5V21H19v-6.5C19 11 17.5 9 14.5 9z"/>
    </svg>
  )
}
function IconWebsite(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden {...props}>
      <path fill="currentColor" d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm6.93 9h-3.11a15.4 15.4 0 0 0-1.07-4.29A8.03 8.03 0 0 1 18.93 11ZM12 4.07c.97 1.33 1.73 3.02 2.14 4.93H9.86c.4-1.91 1.17-3.6 2.14-4.93ZM8.25 11H5.07A8.03 8.03 0 0 1 8.25 6.71 15.4 15.4 0 0 0 7.18 11Zm0 2a15.4 15.4 0 0 0 1.07 4.29A8.03 8.03 0 0 1 5.07 13h3.18Zm1.61 0h4.28c-.4 1.91-1.17 3.6-2.14 4.93A13.68 13.68 0 0 1 9.86 13Zm6.94 0h3.11a8.03 8.03 0 0 1-3.18 4.29A15.4 15.4 0 0 0 16.8 13ZM12 19.93c-.97-1.33-1.73-3.02-2.14-4.93h4.28c-.4 1.91-1.17 3.6-2.14 4.93Z"/>
    </svg>
  )
}
function IconMail(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden {...props}>
      <path fill="currentColor" d="M4 6h16a2 2 0 0 1 2 2v.35l-10 5.56L2 8.35V8a2 2 0 0 1 2-2Zm18 5.15-9.12 5.07a2 2 0 0 1-1.76 0L2 11.15V16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4.85Z"/>
    </svg>
  )
}

export function PersonaCard({ person, highlight, full }: { person: Person; highlight?: boolean; full?: boolean }) {
  return (
    <div className={clsx('rounded-xl2 border bg-surface p-4', highlight && 'ring-2 ring-primary')}>
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
}
