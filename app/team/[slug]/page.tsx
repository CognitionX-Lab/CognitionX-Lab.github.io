
import { people } from '@/lib/data'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { IconMail, IconScholar, IconGitHub, IconLinkedIn, IconWebsite } from '@/components/Icons'

// This generates the static files at build time
export async function generateStaticParams() {
  // Add a console log here to see it during the GitHub Action build
  console.log("BUILDING TEAM SLUGS for:", people.map(p => p.slug))
  return people.map((person) => ({
    slug: person.slug,
  }))
}


export default function Page({ params }: { params: { slug: string } }) {
  const person = people.find((p) => p.slug === params.slug)

  if (!person) {
    notFound()
  }

  const institution = (person.role.includes('National University of Singapore') || person.role.includes('NUS'))
    ? 'National University of Singapore'
    : null

  return (
    <div className="pt-5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column - Profile */}
          <div className="lg:col-span-4 mb-8 lg:mb-0">
            <div className="flex flex-col items-center">
              <img
                className="rounded-full border object-cover mb-6 w-[270px] h-[270px]"
                src={person.avatar}
                alt={person.name}
              />
              <div className="text-center mb-6">
                <h2 className="text-2xl font-semibold mb-2">{person.name}</h2>
                <h3 className="text-lg text-neutralMid mb-2">{person.role}</h3>
                {institution && (
                  <h3 className="text-base text-neutralMid">{institution}</h3>
                )}
              </div>
              
              <ul className="flex items-center gap-4 mb-6">
                {person.links.email && (
                  <li><a href={`mailto:${person.links.email}`} className="text-neutralMid hover:text-primary"><IconMail width={20} height={20} /></a></li>
                )}
                {person.links.linkedin && (
                  <li><a href={person.links.linkedin} target="_blank" rel="noreferrer" className="text-neutralMid hover:text-primary"><IconLinkedIn width={20} height={20} /></a></li>
                )}
                {person.links.scholar && (
                  <li><a href={person.links.scholar} target="_blank" rel="noreferrer" className="text-neutralMid hover:text-primary"><IconScholar width={20} height={20} /></a></li>
                )}
                {person.links.github && (
                  <li><a href={person.links.github} target="_blank" rel="noreferrer" className="text-neutralMid hover:text-primary"><IconGitHub width={20} height={20} /></a></li>
                )}
                {person.links.website && (
                  <li><a href={person.links.website} target="_blank" rel="noreferrer" className="text-neutralMid hover:text-primary"><IconWebsite width={20} height={20} /></a></li>
                )}
              </ul>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-8">
            <div className="space-y-6">
              <p className="text-neutralMid leading-relaxed">{person.bio}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {person.interests.length > 0 && (
                  <div>
                    <div className="text-lg font-semibold mb-3 text-primary">Interests</div>
                    <ul className="space-y-2">
                      {person.interests.map((int, i) => <li key={i} className="text-neutralMid">{int}</li>)}
                    </ul>
                  </div>
                )}
                {person.education && person.education.length > 0 && (
                  <div>
                    <div className="text-lg font-semibold mb-3 text-primary">Education</div>
                    <ul className="space-y-3">
                      {person.education.map((edu, i) => (
                        <li key={i} className="text-neutralMid">
                          <div className="font-medium">{edu.degree}{edu.year ? `, ${edu.year}` : ''}</div>
                          <div className="text-sm">{edu.institution}</div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 text-center">
          <Link href="/team" className="inline-flex items-center border px-5 py-2.5 rounded-xl hover:bg-panel transition">
            ← Back to Team
          </Link>
        </div>
      </div>
    </div>
  )
}
