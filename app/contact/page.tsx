'use client'

import { useMemo, useState } from 'react'
import { site, openings, requirements, howToApply, map } from '@/lib/data'
import { SectionTitle } from '@/components/SectionTitle'

function IconMail(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden {...props}>
      <path fill="currentColor" d="M4 6h16a2 2 0 0 1 2 2v.35l-10 5.56L2 8.35V8a2 2 0 0 1 2-2Zm18 5.15-9.12 5.07a2 2 0 0 1-1.76 0L2 11.15V16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4.85Z"/>
    </svg>
  )
}
function IconLocation(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden {...props}>
      <path fill="currentColor" d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z"/>
    </svg>
  )
}
function IconChevron(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden {...props}>
      <path fill="currentColor" d="M8.12 9.29 12 13.17l3.88-3.88 1.41 1.41L12 16l-5.29-5.29 1.41-1.41Z"/>
    </svg>
  )
}

export default function ContactPage() {
  const active = openings.filter(o => o.active)

  const mapSrc = useMemo(() => {
    if (map?.lat && map?.lng) {
      const label = encodeURIComponent(map.placeLabel || 'Pinned location')
      const z = map.zoom || 16
      return `https://www.google.com/maps?hl=en&ll=${map.lat},${map.lng}&q=${label}+@${map.lat},${map.lng}&z=${z}&t=m&output=embed`
    }
    const q = encodeURIComponent(site.address)
    return `https://www.google.com/maps?q=${q}&output=embed`
  }, [])

  return (
    <div className="space-y-10">
      <SectionTitle title="Contact" subtitle="" />

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border bg-surface p-5">
          <ul className="grid gap-4">
            <li className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-panel border shrink-0">
                <IconMail />
              </span>
              <a className="text-primary underline break-all leading-tight" href={`mailto:${site.contactEmail}`}>
                {site.contactEmail}
              </a>
            </li>

            <li className="flex items-start gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-panel border shrink-0 mt-0.5">
                <IconLocation />
              </span>
              <p className="leading-snug">{site.address}</p>
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border bg-surface overflow-hidden">
          <div className="aspect-video">
            <iframe
              src={mapSrc}
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              aria-label="Google Map (pinned)"
            />
          </div>
        </div>
      </div>

      <SectionTitle title="Openings" subtitle="" />

      <div className="space-y-4">
        {active.map((o) => (
          <OpeningCard key={o.id} openingId={o.id} title={o.title} level={o.level} summary={o.description} />
        ))}
      </div>
    </div>
  )
}

function OpeningCard({
  openingId,
  title,
  level,
  summary,
}: {
  openingId: string
  title: string
  level: string
  summary: string
}) {
  const [open, setOpen] = useState(false)

  return (
    <div className="rounded-2xl border bg-surface">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
        aria-expanded={open}
        aria-controls={`opening-${openingId}`}
      >
        <div>
          <div className="font-medium">{title}</div>
          <div className="text-xs text-neutralMid mt-0.5">{level}</div>
        </div>
        <span
          className={[
            'inline-flex h-8 w-8 items-center justify-center rounded-full border bg-panel transition-transform',
            open ? 'rotate-180' : 'rotate-0',
          ].join(' ')}
          aria-hidden
        >
          <IconChevron />
        </span>
      </button>

      <div className="px-5 pb-3 text-sm text-neutralMid">{summary}</div>

      {open && (
        <div id={`opening-${openingId}`} className="border-t px-5 py-4 grid gap-6 md:grid-cols-2">
          <section className="rounded-xl2 border bg-panel p-4">
            <div className="text-sm font-semibold mb-2">Requirements</div>
            <ul className="list-disc ml-5 space-y-2 text-sm text-neutralMid">
              {requirements.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
          </section>

          <section className="rounded-xl2 border bg-panel p-4">
            <div className="text-sm font-semibold mb-2">How to Apply</div>
            <ul className="list-decimal ml-5 space-y-2 text-sm">
              {howToApply.items.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
            <p className="text-xs text-neutralMid mt-3">{howToApply.note}</p>
            <a className="mt-3 inline-block text-primary underline text-sm" href={`mailto:${howToApply.email}`}>
              Apply via Email
            </a>
          </section>
        </div>
      )}
    </div>
  )
}
