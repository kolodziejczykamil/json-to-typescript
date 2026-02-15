import type { Metadata } from 'next'

import { Navbar } from '@/components/layout/Navbar'
import { SeoContent } from '@/components/layout/SeoContent'
import { ToolContainer } from '@/components/tool/ToolContainer'

export const metadata: Metadata = {
  title: 'JSON to TypeScript Interface Converter',
  description:
    'Convert JSON to TypeScript interfaces online. Generate type-safe TypeScript interface definitions from any JSON object instantly.',
  keywords: [
    'json to typescript interface',
    'json to ts interface',
    'typescript interface generator',
    'json interface converter',
    'typescript interface from json',
  ],
  alternates: {
    canonical: '/json-to-typescript-interface',
  },
  openGraph: {
    title: 'JSON to TypeScript Interface Converter',
    description:
      'Convert JSON to TypeScript interfaces online. Generate type-safe TypeScript interface definitions from any JSON object instantly.',
    url: 'https://json-to-typescript.vercel.app/json-to-typescript-interface',
  },
}

export default function JsonToTypeScriptInterfacePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-100">
      <Navbar />
      <main className="pt-16">
        <div className="mx-auto max-w-[1800px] px-4 py-6 sm:px-6 lg:px-8">
          <div className="mb-6 text-center">
            <h1 className="mb-2 text-3xl font-bold text-indigo-600 dark:text-indigo-400 md:text-4xl">
              JSON to TypeScript Interface Converter
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-400 md:text-base">
              Generate TypeScript interfaces from JSON instantly
            </p>
          </div>

          <ToolContainer />
        </div>

        <SeoContent />
      </main>
    </div>
  )
}
