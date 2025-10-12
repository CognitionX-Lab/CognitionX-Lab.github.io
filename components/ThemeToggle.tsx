'use client'
import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

function applyTheme(t: Theme) {
  const el = document.documentElement
  if (t === 'dark') el.setAttribute('data-theme', 'dark')
  else el.removeAttribute('data-theme')
  localStorage.setItem('theme', t)
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('dark') 

  useEffect(() => {
    const saved = (localStorage.getItem('theme') as Theme) || 'dark'
    setTheme(saved)
    applyTheme(saved)
  }, [])

  function toggle() {
    const next = theme === 'light' ? 'dark' : 'light'
    setTheme(next)
    applyTheme(next)
  }

  const nextTheme = theme === 'light' ? 'dark' : 'light'
  const title = theme === 'light' ? 'Switch to dark' : 'Switch to light'

  return (
    <button
      type="button"
      aria-label={title}
      onClick={toggle}
      title={title}
      className="rounded-full border border-bordercolor/60 bg-bg/30 backdrop-blur px-2.5 py-1.5 text-[hsl(var(--text))] shadow hover:bg-bg/40"
    >
      {nextTheme === 'dark' ? (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79Z" fill="currentColor" />
        </svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="12" cy="12" r="4.5" fill="currentColor" />
          <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
            <path d="M12 2v3"/><path d="M12 19v3"/>
            <path d="M2 12h3"/><path d="M19 12h3"/>
            <path d="M4.93 4.93l2.12 2.12"/><path d="M16.95 16.95l2.12 2.12"/>
            <path d="M4.93 19.07l2.12-2.12"/><path d="M16.95 7.05l2.12-2.12"/>
          </g>
        </svg>
      )}
    </button>
  )
}
