'use client'

import { useMemo, useState } from 'react'
import { SectionTitle } from '@/components/SectionTitle'
import { publications, piScholarUrl } from '@/lib/data'
import { PublicationItem } from '@/components/PublicationItem'
import Link from 'next/link'

const KIND_ORDER: Record<'journal' | 'conference' | 'book' | 'preprint', number> = {
  journal: 1,
  conference: 2,
  book: 3,
  preprint: 4,
}

const FILTERS = ['all', 'journal', 'conference', 'book', 'preprint'] as const
type FilterKey = typeof FILTERS[number]

export default function PublicationsPage() {
  const [filter, setFilter] = useState<FilterKey>('all')

  const filtered = useMemo(() => {
    if (filter === 'all') return publications
    return publications.filter(p => (p.kind || 'preprint') === filter)
  }, [filter])

  const byYear = useMemo(() => {
    const m = new Map<number, typeof publications>()
    for (const p of filtered) {
      const y = p.year ?? 0
      if (!m.has(y)) m.set(y, [])
      m.get(y)!.push(p)
    }
    return m
  }, [filtered])

  const years = useMemo(() => [...byYear.keys()].sort((a, b) => b - a), [byYear])

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <SectionTitle title="Publications" subtitle="* See full and updated list on PI's Google Scholar." />
        <Link
          href={piScholarUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-xl2 border px-4 py-2 hover:bg-panel text-sm"
        >
          View PI on Google Scholar
        </Link>
      </div>

      <div className="flex flex-wrap gap-2">
        {FILTERS.map((k) => (
          <button
            key={k}
            onClick={() => setFilter(k)}
            className={[
              'rounded-full border px-3 py-1 text-sm',
              filter === k ? 'bg-primary text-white border-primary' : 'hover:bg-panel',
            ].join(' ')}
            aria-pressed={filter === k}
          >
            {k === 'all' ? 'All' : `${k.charAt(0).toUpperCase()}${k.slice(1)}`}
          </button>
        ))}
      </div>

      {years.map((year) => {
        const items = (byYear.get(year) || []).slice().sort((a, b) => {
          const ka = KIND_ORDER[(a.kind || 'preprint')]
          const kb = KIND_ORDER[(b.kind || 'preprint')]
          if (ka !== kb) return ka - kb
          return (a.title || '').localeCompare(b.title || '')
        })

        return (
          <section key={year} className="space-y-4">
            <h3 className="text-xl font-semibold">{year}</h3>
            <div className="space-y-4">
              {items.map((p) => (
                <PublicationItem key={p.id} pub={p} />
              ))}
            </div>
          </section>
        )
      })}
    </div>
  )
}
