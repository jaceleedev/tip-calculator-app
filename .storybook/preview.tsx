import React from 'react';
import type { Preview } from '@storybook/react';
import { Space_Mono } from 'next/font/google';
import '../src/app/globals.css';

const spaceMono = Space_Mono({
  subsets: ['latin'],
  display: 'swap',
  weight: ['700'],
  style: 'normal',
  variable: '--font-space-mono',
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className={`${spaceMono.variable}`}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
