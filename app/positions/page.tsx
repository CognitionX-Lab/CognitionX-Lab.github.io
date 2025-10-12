'use client'

import { useState } from 'react'
import { openings, requirements, howToApply } from '@/lib/data'
import { SectionTitle } from '@/components/SectionTitle'

export default function OpeningsPage() {
  const active = openings.filter(o => o.active)

  return (
    <div className="space-y-12">
      <section className="space-y-4">
        <SectionTitle title="Why Join Us?" subtitle="" />
        <div className="text-neutralMid text-sm leading-relaxed space-y-3">
          <p>
            Welcome to the <strong>CognitionX Project</strong> at the National University of Singapore (NUS)!
            Our cross-disciplinary research lab focuses on data- and digitalisation-driven project cognition
            and system resilience for infrastructure and buildings in the built environment.
          </p>
          <p>
            By joining our lab, you will gain hands-on experience in data science, digital technologies,
            systems engineering, and sustainability for the built environment. You will learn coding, data
            analysis, scientific writing, and presenting your work, while collaborating with a supportive team.
          </p>
          <p>
            Our mission is to design, build, and evaluate data-centric cognitive systems (“project brain”) that
            perceive, learn, and actuate in complex environments to improve efficiency, safety, sustainability, and resilience.
            We value innovation, collaboration, excellence, and critical thinking.
          </p>
          <p>
            NUS provides a vibrant, interdisciplinary, and innovation-driven environment. Singapore is cosmopolitan,
            English-speaking, safe, and highly efficient — a perfect place to live and work.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <SectionTitle title="General Application Guidelines" subtitle="" />
        <ul className="list-disc ml-6 space-y-2 text-sm text-neutralMid">
          <li>
            Review our research scope and ensure your interests align with ongoing projects.
          </li>
          <li>
            Tailor your application — generic submissions will not be entertained.
          </li>
          <li>
            Include your CV, a short motivation statement, and optionally GitHub or publication links.
          </li>
          <li>
            Demonstrate computational and programming skills.
          </li>
          <li>
            For PhD or RA roles, review our publications and explain how your expertise contributes to lab research.
          </li>
        </ul>
      </section>

      <section className="space-y-6">
        <SectionTitle title="Current Openings" subtitle="" />
        {active.length > 0 ? (
          active.map((o) => (
            <OpeningCard
              key={o.id}
              openingId={o.id}
              title={o.title}
              summary={o.description}
              posted={o.posted}
              deadline={o.deadline}
            />
          ))
        ) : (
          <NoOpeningCard />
        )}
      </section>
    </div>
  )
}

function OpeningCard({
  openingId,
  title,
  summary,
  posted,
  deadline,
}: {
  openingId: string
  title: string
  summary: string
  posted: string
  deadline: string
}) {
  const [open, setOpen] = useState(false)
  const displayDeadline =
    deadline === '#' ? 'Rolling Basis' : deadline

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
          <div className="font-medium">{title}</div>
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
            <a
              className="mt-3 inline-block text-primary underline text-sm"
              href={`mailto:${howToApply.email}`}
            >
              Apply via Email
            </a>
          </section>
        </div>
      )}
    </div>
  )
}

function NoOpeningCard() {
  return (
    <div className="rounded-2xl border bg-surface px-5 py-6 text-center space-y-2">
      <div className="text-lg font-semibold text-neutralHigh">
        No active openings right now
      </div>
      <p className="text-sm text-neutralMid">
        We always welcome new ideas and motivated individuals!  
        If you have something exciting to propose, feel free to reach out to us at{' '}
        <a href={`mailto:${howToApply.email}`} className="text-primary underline">
          {howToApply.email}
        </a>.
      </p>
    </div>
  )
}
