import { SectionTitle } from '@/components/SectionTitle'
import { about } from '@/lib/data'
import Link from 'next/link'

export default function AboutPage() {
  const paras = Array.isArray(about.paragraphs) && about.paragraphs.length
    ? about.paragraphs
    : (about.group || '').split(/\n\s*\n/).map(s => s.trim()).filter(Boolean)

  return (
    <div className="space-y-8">
      <SectionTitle title="About" subtitle="" />

      <div className="space-y-4 max-w-3xl">
        {paras.map((p, i) => (
          <p key={i} className="text-lg text-neutralMid text-justify">{p}</p>
        ))}
      </div>

      <div className="rounded-xl2 border bg-panel p-5 max-w-3xl">
        <div className="font-semibold mb-1">About NUS</div>
        <p className="text-sm text-neutralMid text-justify">{about.nusNote}</p>
      </div>

      <div className="pt-2">
        <Link href="/research" className="inline-flex items-center justify-center rounded-xl2 border px-4 py-2 hover:bg-panel" aria-label="Learn more about our research">
          Learn more about our research
        </Link>
      </div>
    </div>
  )
}
