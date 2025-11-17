import { SectionTitle } from '@/components/SectionTitle'
import { about } from '@/lib/data'
import Link from 'next/link'
import Image from 'next/image'

export default function AboutPage() {
  const paras = (about.group || '')
    .split(/\n\s*\n/)
    .map(s => s.trim())
    .filter(Boolean)

  return (
    <div className="space-y-8">
      <SectionTitle title="About" subtitle="" />

      {/* Image/Figure Section - responsive and centered */}
      {about.image && (
        <div className="w-full max-w-4xl mx-auto">
          <figure className="overflow-hidden rounded-xl2 border border-bordercolor/60 bg-surface shadow-md">
            <Image
              src={about.image}
              alt={about.imageAlt || "About Cognition X Lab"}
              width={1200}
              height={600}
              className="w-full h-auto object-contain"
              priority
            />
            {about.imageCaption && (
              <figcaption className="p-4 text-sm text-neutralMid text-center border-t border-bordercolor/40">
                {about.imageCaption}
              </figcaption>
            )}
          </figure>
        </div>
      )}

      {/* Content Section - responsive width with proper centering */}
      <div className="space-y-4 max-w-4xl mx-auto w-full px-4 md:px-0">
        {paras.map((p, i) => (
          <p key={i} className="text-lg text-neutralMid text-justify leading-relaxed">{p}</p>
        ))}
      </div>

      {about.secondaryImage && (
        <div className="w-full max-w-4xl mx-auto">
          <figure className="overflow-hidden rounded-xl2 border border-bordercolor/60 bg-surface shadow-md">
            <Image
              src={about.secondaryImage}
              alt={about.secondaryImageAlt || 'About Cognition X Lab'}
              width={1200}
              height={600}
              className="w-full h-auto object-contain"
            />
            {about.secondaryImageCaption && (
              <figcaption className="p-4 text-sm text-neutralMid text-center border-t border-bordercolor/40">
                {about.secondaryImageCaption}
              </figcaption>
            )}
          </figure>
        </div>
      )}

      <div className="max-w-4xl mx-auto w-full px-4 md:px-0">
        <div className="rounded-xl2 border bg-panel p-5 md:p-6">
          <div className="font-semibold mb-2">About NUS</div>
          <p className="text-sm text-neutralMid text-justify leading-relaxed">
            {about.nusNote}{' '}
            {about.nusLinkHref && (
              <Link
                href={about.nusLinkHref}
                target="_blank"
                rel="noreferrer"
                className="text-primary underline underline-offset-2 font-medium"
              >
                {about.nusLinkLabel || 'Learn more at NUS'}
              </Link>
            )}
          </p>
        </div>
      </div>

      <div className="pt-2 max-w-4xl mx-auto w-full px-4 md:px-0">
        <Link href="/research" className="inline-flex items-center justify-center rounded-xl2 border px-4 py-2 hover:bg-panel transition-colors" aria-label="Learn more about our research">
          Learn more about our research
        </Link>
      </div>
    </div>
  )
}
