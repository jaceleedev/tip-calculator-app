import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'very-light-grayish-cyan': '#F3F9FA',
        'light-grayish-cyan': '#C5E4E7',
        'light-strong-cyan': '#9FE8DF',
        'strong-cyan': '#26C2AE',
        'grayish-cyan': '#7F9D9F',
        'medium-dark-grayish-cyan': '#547878',
        'dark-grayish-cyan': '#5E7A7D',
        'strong-orange-red': '#E17052',
        'very-dark-grayish-cyan': '#0D686D',
        'very-dark-cyan': '#00474B',
      },
      fontFamily: {
        spaceMono: ['var(--font-space-mono)'],
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const typographyUtilities = {
        '.text-primary': {
          fontFamily: 'var(--font-space-mono)',
          fontSize: '24px',
          fontStyle: 'normal',
          fontWeight: '700',
          lineHeight: '1.5',
        },
        '.text-secondary': {
          fontFamily: 'var(--font-space-mono)',
          fontSize: '20px',
          fontStyle: 'normal',
          fontWeight: '700',
          lineHeight: '1.5',
        },
        '.text-title': {
          fontFamily: 'var(--font-space-mono)',
          fontSize: '16px',
          fontStyle: 'normal',
          fontWeight: '700',
          lineHeight: '1.5',
        },
        '.text-error': {
          fontFamily: 'var(--font-space-mono)',
          fontSize: '16px',
          fontStyle: 'normal',
          fontWeight: '700',
          lineHeight: '1.5',
        },
        '.text-caption': {
          fontFamily: 'var(--font-space-mono)',
          fontSize: '13px',
          fontStyle: 'normal',
          fontWeight: '700',
          lineHeight: '19px',
        },
        '.text-display': {
          fontFamily: 'var(--font-space-mono)',
          fontSize: '32px',
          fontStyle: 'normal',
          fontWeight: '700',
          lineHeight: '47px',
          letterSpacing: '-0.667px',
        },
      };

      addUtilities(typographyUtilities);
    }),
  ],
};
export default config;
