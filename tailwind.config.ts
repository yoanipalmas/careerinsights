import type { Config } from 'tailwindcss'

const config: Config = {
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ['Ubuntu', 'sans-serif'],
        chloe: ['Chloe', 'sans-serif'],
      },
      colors: {
        career: 'var(--color-career)',
        'logo-uno': 'var(--color-logo-uno)',
        'logo-dos': 'var(--color-logo-dos)',
        'logo-tres': 'var(--color-logo-tres)',
        'logo-cuatro': 'var(--color-logo-cuatro)',
        'border-navbar': 'var(--color-border-navbar)',
      },
    },
  },
  plugins: [],
}

export default config
