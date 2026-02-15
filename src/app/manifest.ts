import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'JSON to TypeScript Generator',
    short_name: 'JSON2TS',
    description: 'Free online tool to convert JSON to TypeScript interfaces instantly.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0f172a',
    theme_color: '#4f46e5',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
    categories: ['developer', 'productivity', 'utilities'],
    lang: 'en',
    orientation: 'portrait-primary',
  }
}
