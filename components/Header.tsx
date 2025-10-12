'use client'
import Link from 'next/link'
import { useState } from 'react'
import { clsx } from 'clsx'
import { ThemeToggle } from '@/components/ThemeToggle'

const nav = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/team', label: 'Team' },
  { href: '/research', label: 'Research' },
  { href: '/publications', label: 'Publications' },
  { href: '/contact', label: 'Contact' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-transparent border-b border-bordercolor/40">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 md:px-6">
        <Link
          href="/"
          className="font-semibold text-lg hover:text-primary transition-colors"
        >
          CognitionX Project
        </Link>

        <nav className="hidden md:flex gap-6 text-sm">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="hover:text-primary transition-colors"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            className="md:hidden rounded-lg px-2 py-1 hover:bg-black/5 dark:hover:bg-white/10"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <span aria-hidden>☰</span>
          </button>
        </div>
      </div>

      <div
        className={clsx(
          'md:hidden border-t border-bordercolor/30 bg-surface/70 backdrop-blur-md',
          open ? 'block' : 'hidden'
        )}
      >
        <div className="flex flex-col gap-3 p-4">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="hover:text-primary transition-colors"
            >
              {n.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}
