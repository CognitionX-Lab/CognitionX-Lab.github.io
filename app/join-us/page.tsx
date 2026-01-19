import { useState } from 'react'
import { openings, requirements, howToApply } from '@/lib/data'
import { SectionTitle } from '@/components/SectionTitle'

export default function JoinUsPage() {
  const active = openings.filter((o) => o.active)
  const inactive = openings.filter((o) => !o.active)

  return (
    <div className="space-y-12">
      {/* ...existing sections ... */}

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
              externalUrl={o.externalUrl}
              active={o.active}
            />
          ))
        ) : (
          <NoOpeningCard />
        )}
      </section>

      {inactive.length > 0 && (
        <section className="space-y-6">
          <SectionTitle title="Past Openings" subtitle="Archived / closed postings" />
          <div className="grid gap-4">
            {inactive.map((o) => (
              <OpeningCard
                key={o.id}
                openingId={o.id}
                title={o.title}
                summary={o.description}
                posted={o.posted}
                deadline={o.deadline}
                externalUrl={o.externalUrl}
                active={o.active}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}

function OpeningCard({
  openingId,
  title,
  summary,
  posted,
  deadline,
  externalUrl,
  active = true,
}: {
  openingId: string
  title: string
  summary: string
  posted: string
  deadline: string
  externalUrl?: string
  active?: boolean
}) {
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

function NoOpeningCard() {
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
export default function JoinUsPage() {
  const active = openings.filter(o => o.active)

  return (
    <div className="space-y-12">
      <section className="space-y-4">
        <SectionTitle title="Why Join Us?" subtitle="" />
        <div className="text-neutralMid text-sm leading-relaxed space-y-3">
          <p>
            Welcome to the <strong>Cognition X Lab</strong> at the National University of Singapore (NUS)!
            Our cross-disciplinary research lab focuses on data- and digitalisation-driven project cognition
            and system resilience for infrastructure and buildings in the built environment.
          </p>
          <p>
            By joining our lab, you will gain hands-on experience in data science, AI, digital technologies,
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
  <div className="text-sm text-neutralMid leading-relaxed space-y-3">
    <p>
      <strong>Application timeline and requirements:</strong> NUS welcomes outstanding students with excellent
      academic achievements from all over the world. Make sure you meet requirements as listed at{' '}
      <a
        href="https://cde.nus.edu.sg/graduate/graduate-programmes-by-research/how-to-apply/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary underline"
      >
        Graduate Programmes by Research - How to Apply - College of Design and Engineering
      </a>.
    </p>

    <p>
      <strong>Scholarships:</strong> We offer various scholarships (as listed below), but they can be very
      competitive. Study the requirements and restrictions carefully. You are more competitive if you graduated
      from a top university with good academic records (First-class honours, high GPA, excellent English test
      results, publications). Less well-represented nationalities could apply for non-restricted scholarships such
      as the NUS ASEAN Research Scholarship, Commonwealth Scholarship, NUS SINGA Scholarship, etc.
    </p>

    <p>
      <strong>More information:</strong> Visit the{' '}
      <a
        href="https://nusgs.nus.edu.sg"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary underline"
      >
        NUS Graduate School (NUSGS)
      </a>{' '}
      and{' '}
      <a
        href="https://cde.nus.edu.sg/graduate/scholarship-opportunities/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary underline"
      >
        Scholarship Opportunities - College of Design and Engineering
      </a>.
    </p>

    <ul className="list-disc ml-6 space-y-1">
      <li>
        <a
          href="https://nusgs.nus.edu.sg/scholarships/presidents-graduate-fellowship/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline"
        >
          President’s Graduate Fellowship
        </a>
      </li>
      <li>
        <a
          href="https://nusgs.nus.edu.sg/scholarships/nus-research-scholarship/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline"
        >
          NUS Research Scholarship 
        </a>
      </li> 
      <li>
        <a
          href="https://nusgs.nus.edu.sg/scholarships/nus-asean-research-scholarship"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline"
        >
          NUS ASEAN Research Scholarship
        </a>
      </li>
      <li>
        <a
          href="https://nusgs.nus.edu.sg/scholarships/commonwealth-scholarship/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline"
        >
          Commonwealth Scholarship
        </a>
      </li>
      <li>
        <a
          href="https://nusgs.nus.edu.sg/scholarships/ai-singapore-scholarship"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline"
        >
          AI Singapore Scholarship
        </a>
      </li>
      <li>
        <a
          href="https://nusgs.nus.edu.sg/scholarships/data-science-scholarship"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline"
        >
          NUS Data Science Scholarship
        </a>
      </li>
      <li>
        <a
          href="https://nusgs.nus.edu.sg/scholarships/nus-industry-relevant-phd-scholarship-nus-irp"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline"
        >
          NUS Industry-Relevant PhD Scholarship (NUS-IRP)
        </a>
      </li>
      <li>
        <a
          href="https://nusgs.nus.edu.sg/scholarships/nus-singa-scholarship"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline"
        >
          NUS SINGA Scholarship
        </a>
      </li>
    </ul>

    <p>
      <strong>Do your homework:</strong> Read the lab manual first on the Lab “Resources” page (
        <a
        href="/resources"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary underline"
      >
        Link
      </a>). Understand the lab, review our research scope, and ensure your interests align with our focus.
      Tailor your application carefully.
    </p>

    <p>
      <strong>Before you apply:</strong> Reach out to <strong>Dr. Jinying Xu</strong> before submitting your
      application. Explain how your expertise and skills contribute to lab research, which funding you would pursue
      (if applying for a scholarship, specify which one you are eligible for and interested in). Include your CV,
      transcripts, an initial research proposal (as outlined in the lab manual), and optionally your publication
      links or GitHub pages.
    </p>

    <p>
      <strong>Other helpful information:</strong>  <a
        href="https://nusgs.nus.edu.sg/cost-of-living/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary underline"
      >Cost of Living : NUS Graduate School (NUSGS)
      </a>
    </p>
  </div>
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
