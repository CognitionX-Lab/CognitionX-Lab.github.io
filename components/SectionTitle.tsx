import Link from 'next/link'

export function SectionTitle({ title, subtitle, action }: { title: string, subtitle?: string, action?: { label: string, href: string }}) {
  return (
    <div className="flex items-end justify-between gap-4 mb-6">
      <div>
        <h2 className="text-2xl md:text-3xl font-semibold">{title}</h2>
        {subtitle && <p className="text-neutralMid">{subtitle}</p>}
      </div>
      {action && <Link className="text-sm text-primary underline" href={action.href}>{action.label}</Link>}
    </div>
  )
}