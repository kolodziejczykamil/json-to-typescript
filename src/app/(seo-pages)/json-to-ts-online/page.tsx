import type { Metadata } from 'next'

import { Navbar } from '@/components/layout/Navbar'
import { SeoContent } from '@/components/layout/SeoContent'
import { ToolContainer } from '@/components/tool/ToolContainer'

export const metadata: Metadata = {
  title: 'JSON to TS Online Converter',
  description:
    'Free online JSON to TypeScript converter. Convert JSON to TS types and interfaces instantly with our web-based tool.',
  keywords: [
    'json to ts online',
    'json to typescript online',
    'online json converter',
    'json to ts tool',
    'convert json to typescript online',
  ],
  alternates: {
    canonical: '/json-to-ts-online',
  },
  openGraph: {
    title: 'JSON to TS Online Converter',
    description:
      'Free online JSON to TypeScript converter. Convert JSON to TS types and interfaces instantly with our web-based tool.',
    url: 'https://json-to-typescript.vercel.app/json-to-ts-online',
  },
}

export default function JsonToTsOnlinePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-100">
      <Navbar />
      <main className="pt-16">
        <div className="mx-auto max-w-[1800px] px-4 py-6 sm:px-6 lg:px-8">
          <div className="mb-6 text-center">
            <h1 className="mb-2 text-3xl font-bold text-indigo-600 dark:text-indigo-400 md:text-4xl">
              JSON to TS Online Converter
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-400 md:text-base">
              Free online tool to convert JSON to TypeScript
            </p>
          </div>

          <ToolContainer />
        </div>

        <SeoContent />
      </main>
    </div>
  )
}
