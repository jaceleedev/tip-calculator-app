import type { Metadata } from 'next';
import { Space_Mono } from 'next/font/google';
import './globals.css';
import Logo from '@/components/TipCalculator/Logo';

const spaceMono = Space_Mono({
  subsets: ['latin'],
  display: 'swap',
  weight: ['700'],
  style: 'normal',
  variable: '--font-space-mono',
});

export const metadata: Metadata = {
  title: 'Frontend Mentor | Tip calculator app',
  description:
    'A responsive tip calculator app built for a Frontend Mentor challenge.',
  generator: 'Next.js',
  applicationName: 'Tip calculator app',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'Frontend Mentor Challenge',
    'Tip calculator app',
    'Next.js',
    'Tailwind CSS',
    'Typescript',
    'Storybook',
    'Vitest',
  ],
  authors: [
    {
      name: 'jaceleedev',
      url: 'https://github.com/jaceleedev/tip-calculator-app.git',
    },
  ],
  creator: 'jaceleedev',
  publisher: 'jaceleedev',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://tip-calculator-app-zeta-rust.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Frontend Mentor | Tip calculator app',
    description:
      'A responsive tip calculator app built for a Frontend Mentor challenge.',
    url: 'https://tip-calculator-app-zeta-rust.vercel.app',
    siteName: 'Frontend Mentor | Tip calculator app',
    images: [
      {
        url: 'https://res.cloudinary.com/dz209s6jk/image/upload/v1625753687/Challenges/wfczmy0nrltpwqyaovg6.jpg',
        width: 1440,
        height: 1024,
        alt: 'Tip calculator app desktop preview',
      },
      {
        url: 'https://res.cloudinary.com/dz209s6jk/image/upload/v1625753687/Challenges/uny4cufbs1jc4bluhjsh.jpg',
        width: 750,
        height: 1886,
        alt: 'Tip calculator app mobile preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Frontend Mentor | Tip calculator app',
    description:
      'A responsive tip calculator app built for a Frontend Mentor challenge.',
    images: [
      'https://res.cloudinary.com/dz209s6jk/image/upload/v1625753687/Challenges/wfczmy0nrltpwqyaovg6.jpg',
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`flex flex-col items-center w-screen pt-[50px] bg-light-grayish-cyan ${spaceMono.variable} lg:pt-[163px]`}
      >
        <header className="flex justify-center mb-[40.86px] lg:mb-[87.86px]">
          <Logo />
        </header>
        {children}
      </body>
    </html>
  );
}
