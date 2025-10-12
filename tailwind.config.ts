import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'hsl(var(--bg))',
        text: 'hsl(var(--text))',
        primary: 'hsl(var(--primary))',
        accent: 'hsl(var(--accent))',
        bordercolor: 'hsl(var(--border))',
        neutralDark: 'hsl(var(--neutral-dark))',
        neutralMid: 'hsl(var(--neutral-mid))',
        neutralLight: 'hsl(var(--neutral-light))',
        surface: 'hsl(var(--surface))', 
        panel: 'hsl(var(--panel))',       
      },
      maxWidth: { content: '1200px' },
      borderRadius: { xl2: '1rem' },
    },
  },
  plugins: [],
}
export default config
