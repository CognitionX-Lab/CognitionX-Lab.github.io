import Link from 'next/link'
import { site } from '@/lib/data'
export function Footer() {
  return (
    <footer className="border-t mt-14">
      <div className="container py-8 text-sm text-neutralMid flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
        <div className="text-sm text-neutralMid">
              © {new Date().getFullYear()} {site.title + ' NUS'}
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-bordercolor/60 px-3 py-1.5 text-sm hover:bg-panel"
              aria-label="Contact us"
            >
              Contact Us
            </Link>
      </div>
    </footer>
  )
}