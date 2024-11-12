import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'primary-soft-orange': 'var(--primary-soft-orange)',
        'primary-soft-red': 'var(--primary-soft-red)',
        'neutral-off-white': 'var(--neutral-off-white)',
        'neutral-grayish-blue': 'var(--neutral-grayish-blue)',
        'neutral-dark-grayish-blue': 'var(--neutral-dark-grayish-blue)',
        'neutral-very-dark-blue': 'var(--neutral-very-dark-blue)',
      },
      fontSize: { base: '15px' },
      gridTemplateColumns: {
        // Simple 24 column grid
        '24': 'repeat(24, minmax(0, 1fr))',
      },
      gridColumn: {
        'span-16': 'span 16 / span 16',
        'span-17': 'span 17 / span 17',
      },
    },
  },
  plugins: [],
} satisfies Config;
