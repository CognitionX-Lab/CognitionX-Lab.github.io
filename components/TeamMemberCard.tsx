import type { Person } from '@/lib/data'
import Link from 'next/link'

export function TeamMemberCard({ person }: { person: Person }) {
  return (
    <Link href={`/team/${person.slug}`} className="block group">
      <div className="flex flex-col items-center text-center gap-3">
        <img
          src={person.avatar}
          alt={person.name}
          className="rounded-full border object-cover h-24 w-24 group-hover:scale-105 transition-transform duration-200"
        />
        <div>
          <div className="font-semibold text-lg">{person.name}</div>
          <div className="text-sm text-neutralMid">{person.role}</div>
        </div>
      </div>
    </Link>
  )
}

