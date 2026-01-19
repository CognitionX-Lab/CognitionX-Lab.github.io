// components/OpeningCard.tsx
'use client'

import { useState } from 'react'
import { requirements, howToApply } from '@/lib/data'

type Props = {
  openingId: string
  title: string
  summary: string
  posted: string
  deadline: string
  externalUrl?: string
  active?: boolean
}

export default function OpeningCard({
  openingId,
  title,
  summary,
  posted,
  deadline,
  externalUrl,
  active = true,
}: Props) {
  const [open, setOpen] = useState(false)
  const displayDeadline = deadline === '#' ? 'Rolling Basis' : deadline

  const roleRequirements =
    openingId.includes('postdoc')
      ? requirements.postdoc
      : openingId.includes('phd')
      ? requirements.phd
      : openingId.includes('master')
      ? requirements.master
      : requirements.undergraduate

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
          <div className="font-medium flex items-center gap-3">
            <span>{title}</span>
            {!active && (
              <span className="text-xs px-2 py-0.5 rounded-md bg-red-100 text-red-700">Closed</span>
            )}
          </div>
          <div className="text-xs text-neutralMid mt-1">
            <span className="font-medium text-neutralHigh">Posted:</span> {posted} |{' '}
            <span className="font-medium text-neutralHigh">Preferred Deadline:</span>{' '}
            {displayDeadline}
          </div>
        </div>

        <span className="text-sm text-primary font-medium">
          {open ? 'Hide Details' : 'See Details'}
        </span>
      </button>

      <div className="px-5 pb-3 text-sm text-neutralMid">{summary}</div>

      {open && (
        <div id={`opening-${openingId}`} className="border-t px-5 py-4 grid gap-6 md:grid-cols-2">
          <section className="rounded-xl2 border bg-panel p-4">
            <div className="text-sm font-semibold mb-2">Specific Requirements</div>
            <ul className="list-disc ml-5 space-y-2 text-sm text-neutralMid">
              {roleRequirements.map((r, i) => (
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

            {externalUrl ? (
              <a
                className="mt-3 inline-block text-primary underline text-sm"
                href={externalUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                View original posting
              </a>
            ) : (
              <a
                className="mt-3 inline-block text-primary underline text-sm"
                href={`mailto:${howToApply.email}`}
              >
                Express your interest
              </a>
            )}
          </section>
        </div>
      )}
    </div>
  )
}
