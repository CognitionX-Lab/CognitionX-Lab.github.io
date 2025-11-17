import type { Project } from '@/lib/data'
import { clsx } from 'clsx'
import Link from 'next/link'

export function ProjectCard({ project, clickable }: { project: Project; clickable?: boolean }) {
  const Card = (
    <div
      className={clsx(
        'rounded-xl2 border bg-surface overflow-hidden hover:shadow-sm transition',
        clickable && 'cursor-pointer'
      )}
    >
      {project.coverImage ? (
        <img src={project.coverImage} alt={project.title} className="w-full aspect-video object-cover" />
      ) : (
        <div className="w-full aspect-video bg-gradient-to-br from-panel to-panel/70 flex items-center justify-center text-sm text-neutralMid">
          Image coming soon
        </div>
      )}
      <div className="p-4 space-y-2">
        <div className="font-semibold">{project.title}</div>
        <p className="text-sm text-neutralMid line-clamp-2">{project.summary}</p>
        <div className="flex flex-wrap gap-2 pt-1">
          {project.tags.map(t => (
            <span key={t} className="text-xs bg-panel px-2 py-1 rounded-full">{t}</span>
          ))}
        </div>
      </div>
    </div>
  )

  return clickable ? (
    <Link href={`/project/${project.slug}`} className="block">{Card}</Link>
  ) : Card
}
