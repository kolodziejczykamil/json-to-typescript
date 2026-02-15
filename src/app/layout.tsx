import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { LanguageProvider } from '@/contexts/LanguageContext'
import { ThemeProvider } from '@/contexts/ThemeContext'
import './globals.css'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL('https://json-to-typescript.vercel.app'),
  title: {
    default: 'JSON to TypeScript Generator – Convert JSON to TS Interfaces Online',
    template: '%s | JSON to TypeScript Generator',
  },
  description:
    'Free online JSON to TypeScript converter. Instantly generate TypeScript interfaces from JSON with support for nested objects and arrays. Convert JSON to TS online, generate typescript interfaces, and create type-safe definitions.',
  keywords: [
    'json to typescript',
    'json to ts',
    'json to typescript interface',
    'convert json to typescript',
    'json to ts online',
    'typescript generator',
    'json converter',
    'typescript interfaces',
    'type generator',
    'json types',
    'typescript types',
    'code generator',
    'json parser',
    'typescript converter tool',
    'json to typescript online',
    'typescript interface generator',
  ],
  authors: [{ name: 'JSON to TypeScript Generator' }],
  creator: 'JSON to TypeScript Generator',
  publisher: 'JSON to TypeScript Generator',
  category: 'Developer Tools',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/',
      'pl-PL': '/pl',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'pl_PL',
    url: 'https://json-to-typescript.vercel.app',
    siteName: 'JSON to TypeScript Generator',
    title: 'JSON to TypeScript Generator – Convert JSON to TS Interfaces Online',
    description:
      'Free online JSON to TypeScript converter. Instantly generate TypeScript interfaces from JSON with support for nested objects and arrays.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'JSON to TypeScript Generator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON to TypeScript Generator – Convert JSON to TS Interfaces Online',
    description:
      'Free online JSON to TypeScript converter. Instantly generate TypeScript interfaces from JSON.',
    images: ['/og-image.png'],
    creator: '@json2ts',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  manifest: '/manifest.json',
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': ['WebApplication', 'SoftwareApplication'],
  name: 'JSON to TypeScript Generator',
  description:
    'Free online tool to convert JSON to TypeScript interfaces instantly. Generate type-safe TypeScript definitions from any JSON object. Support for nested objects, arrays, and complex data structures.',
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'Web',
  url: 'https://json-to-typescript.vercel.app',
  author: {
    '@type': 'Organization',
    name: 'JSON to TypeScript Generator',
  },
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  featureList: [
    'Convert JSON to TypeScript interfaces',
    'Support for nested objects and arrays',
    'Generate readonly and optional fields',
    'Export as interface or type',
    'Copy to clipboard',
    'Download as TypeScript file',
    'Free and open source',
    'No registration required',
    'Works entirely in browser',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    ratingCount: '150',
  },
  keywords: 'json to typescript, json to ts, typescript generator, json converter',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
