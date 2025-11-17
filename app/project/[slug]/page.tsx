import { notFound } from 'next/navigation'
import { projects } from '@/lib/data'
import { SectionTitle } from '@/components/SectionTitle'
import Link from 'next/link'

export async function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }))
}

function IconScholar(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" {...props}>
      <path
        fill="currentColor"
        d="M12 3 2 8l10 5 10-5-10-5Zm7 7.236V14c0 2.5-3.134 4.5-7 4.5S5 16.5 5 14v-3.764l7 3.5 7-3.5Z"
      />
    </svg>
  )
}

function IconGithub(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" {...props}>
      <path
        fill="currentColor"
        d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.1 3.29 9.42 7.86 10.95.58.11.79-.25.79-.56 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.39-3.88-1.39-.53-1.35-1.29-1.71-1.29-1.71-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.74 1.27 3.41.97.1-.75.41-1.27.75-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.3 1.19-3.11-.12-.3-.52-1.52.11-3.17 0 0 .97-.31 3.18 1.18a10.97 10.97 0 0 1 2.9-.39c.99 0 1.98.13 2.9.39 2.21-1.49 3.18-1.18 3.18-1.18.63 1.65.23 2.87.11 3.17.74.81 1.19 1.85 1.19 3.11 0 4.43-2.68 5.41-5.24 5.7.42.36.8 1.09.8 2.21 0 1.6-.02 2.89-.02 3.28 0 .31.21.68.8.56A10.53 10.53 0 0 0 23.5 12C23.5 5.74 18.27.5 12 .5Z"
      />
    </svg>
  )
}

function IconGlobe(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" {...props}>
      <path
        fill="currentColor"
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm6.93 6h-2.95a15.7 15.7 0 0 0-1.15-3.22A8.02 8.02 0 0 1 18.93 8ZM12 4c.83 1.07 1.5 2.49 1.93 4H10.07C10.5 6.49 11.17 5.07 12 4ZM4.26 14A7.96 7.96 0 0 1 4 12c0-.68.08-1.35.23-2h3.14c-.1.65-.15 1.32-.15 2s.05 1.35.15 2H4.26Zm1.07 2h2.95c.27 1.12.64 2.18 1.15 3.22A8.02 8.02 0 0 1 5.33 16Zm2.95-8H5.33A8.02 8.02 0 0 1 8.39 4.78 15.7 15.7 0 0 0 8.28 8ZM12 20c-.83-1.07-1.5-2.49-1.93-4h3.86C13.5 17.51 12.83 18.93 12 20Zm1.93-6h-3.86c-.1-.65-.15-1.32-.15-2s.05-1.35.15-2h3.86c.1.65.15 1.32.15 2s-.05 1.35-.15 2Zm1.79 5.22c.51-1.04.88-2.1 1.15-3.22h2.95a8.02 8.02 0 0 1-4.1 3.22ZM16.63 14c.1-.65.15-1.32.15-2s-.05-1.35-.15-2h3.14c.15.65.23 1.32.23 2s-.08 1.35-.23 2h-3.14Z"
      />
    </svg>
  )
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const proj = projects.find(p => p.slug === params.slug)
  if (!proj) return notFound()

  return (
    <div className="space-y-10">
      <SectionTitle title={proj.title} subtitle={proj.summary} />

      {(proj.repoUrl || proj.demoUrl || proj.paperUrl) && (
        <div className="flex justify-center gap-5 text-neutral-600">
          {proj.paperUrl && (
            <a
              href={proj.paperUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
              title="Research Paper"
            >
              <IconScholar />
            </a>
          )}
          {proj.repoUrl && (
            <a
              href={proj.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
              title="GitHub Repository"
            >
              <IconGithub />
            </a>
          )}
          {proj.demoUrl && (
            <a
              href={proj.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
              title="Live Demo"
            >
              <IconGlobe />
            </a>
          )}
        </div>
      )}

      {proj.coverImage && (
        <div className="overflow-hidden rounded-2xl shadow-md border border-bordercolor/60">
          <img
            src={proj.coverImage}
            alt={proj.title}
            className="w-full aspect-video object-cover hover:scale-[1.02] transition-transform duration-500"
          />
        </div>
      )}

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-6">
        <div className="md:col-span-4 rounded-xl2 border bg-panel p-6 shadow-sm">
          <h3 className="text-xl font-semibold mb-3 text-primary">Abstract</h3>
          <p className="text-neutralMid leading-relaxed text-justify">
            {proj.abstract}
          </p>
        </div>

        <div className="md:col-span-1 rounded-xl2 border bg-surface p-6 shadow-sm">
          <h3 className="text-xl font-semibold mb-3 text-primary">Team</h3>
          <ul className="list-disc pl-5 space-y-1 text-neutralMid">
            {proj.members.map(m => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </div>

        {proj.grant && (
          <div className="md:col-span-5 rounded-xl2 border bg-panel/70 p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-3 text-primary">Grant & Funding</h3>
            <p className="text-neutralMid leading-relaxed">{proj.grant}</p>
          </div>
        )}
      </div>

      <div className="pt-4 text-center">
        <Link
          href="/research"
          className="inline-flex items-center justify-center rounded-xl2 border px-5 py-2.5 hover:bg-panel transition"
        >
          ← Back to All Projects
        </Link>
      </div>
    </div>
  )
}
