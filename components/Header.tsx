'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { clsx } from 'clsx'
import { ThemeToggle } from '@/components/ThemeToggle'

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-transparent border-b border-bordercolor/40">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 md:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-lg hover:text-primary transition-colors"
        >
          <Image
            src="/logo.png"
            alt="CognitionX Logo"
            width={32}
            height={32}
            className="rounded-md object-contain"
            priority
          />
          <span>CognitionX Project</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <div className="flex items-center gap-4">
            <Link href="/about" className="hover:text-primary transition-colors">About</Link>
            <Link href="/team" className="hover:text-primary transition-colors">Team</Link>
          </div>

          <div className="w-px h-4 bg-bordercolor/40" /> 

          <div className="flex items-center gap-4">
            <Link href="/research" className="hover:text-primary transition-colors">Research</Link>
            <Link href="/publications" className="hover:text-primary transition-colors">Publications</Link>
          </div>

          <div className="w-px h-4 bg-bordercolor/40" /> 

          <div className="flex items-center gap-4">
            <Link href="/resources" className="hover:text-primary transition-colors">Resources</Link>
          <div className="w-px h-4 bg-bordercolor/40" /> 
            <Link href="/join-us" className="hover:text-primary transition-colors">Join Us!</Link>
            <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
          </div>
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
        <div className="flex flex-col gap-4 p-4 text-sm">
          <p className="text-xs uppercase tracking-wide text-neutralMid">About</p>
          <Link href="/about" onClick={() => setOpen(false)} className="hover:text-primary transition-colors">About</Link>
          <Link href="/team" onClick={() => setOpen(false)} className="hover:text-primary transition-colors">Team</Link>

          <div className="border-t border-bordercolor/30 my-2" />

          <p className="text-xs uppercase tracking-wide text-neutralMid">Research</p>
          <Link href="/research" onClick={() => setOpen(false)} className="hover:text-primary transition-colors">Research</Link>
          <Link href="/publications" onClick={() => setOpen(false)} className="hover:text-primary transition-colors">Publications</Link>

          <div className="border-t border-bordercolor/30 my-2" />

          <p className="text-xs uppercase tracking-wide text-neutralMid">Engage</p>
          <Link href="/resources" onClick={() => setOpen(false)} className="hover:text-primary transition-colors">Resources</Link>
          <Link href="/positions" onClick={() => setOpen(false)} className="hover:text-primary transition-colors">Join Us!</Link>
          <Link href="/contact" onClick={() => setOpen(false)} className="hover:text-primary transition-colors">Contact</Link>
        </div>
      </div>
    </header>
  )
}
