// components/NoOpeningCard.tsx
'use client'

import { howToApply } from '@/lib/data'

export default function NoOpeningCard() {
  return (
    <div className="rounded-2xl border bg-surface px-5 py-6 text-center space-y-2">
      <div className="text-lg font-semibold text-neutralHigh">No active openings right now</div>
      <p className="text-sm text-neutralMid">
        We always welcome new ideas and motivated individuals!
        If you have something exciting to propose, feel free to reach out to us at{' '}
        <a href={`mailto:${howToApply.email}`} className="text-primary underline">
          {howToApply.email}
        </a>
        .
      </p>
    </div>
  )
}
