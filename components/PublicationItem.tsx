import type { Publication } from '@/lib/data'

function kindLabel(kind?: Publication['kind']): string {
  switch (kind) {
    case 'journal': return 'Journal paper'
    case 'conference': return 'Conference paper'
    case 'book': return 'Book chapter'
    case 'preprint': return 'Preprint'
    default: return ''
  }
}

export function PublicationItem({ pub }: { pub: Publication }) {
  const label = kindLabel(pub.kind)

  return (
    <article className="rounded-xl2 border p-4 bg-surface">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="font-medium">
            <a
              href={pub.doi || pub.url || pub.pdfUrl || '#'}
              className="underline hover:text-primary break-words"
            >
              {pub.title}
            </a>
          </div>
          <div className="text-sm text-neutralMid mt-1 truncate">
            {pub.authors.join(', ')}
          </div>
          <div className="text-sm mt-1">
            {pub.venue}
            {pub.badges?.length ? ' • ' + pub.badges.join(' • ') : ''}
          </div>
        </div>

        {label && (
          <span className="shrink-0 rounded-full border bg-panel px-3 py-1 text-xs font-medium text-neutralMid">
            {label}
          </span>
        )}
      </div>

      <div className="flex flex-wrap gap-3 mt-3 text-sm">
        {pub.pdfUrl && <a className="text-primary underline" href={pub.pdfUrl}>PDF</a>}
        {pub.doi && <a className="text-primary underline" href={pub.doi}>DOI</a>}
        {pub.codeUrl && <a className="text-primary underline" href={pub.codeUrl}>Code</a>}
        {!pub.pdfUrl && !pub.doi && pub.url && (
          <a className="text-primary underline" href={pub.url}>Link</a>
        )}
      </div>
    </article>
  )
}
