'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { getTranslations } from '@/lib/i18n'

export function SeoContent() {
  const { language } = useLanguage()
  const t = getTranslations(language)

  const faqData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How do I convert JSON to TypeScript?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Simply paste your JSON into the input panel, configure your preferences for output format, optional fields, and readonly properties, then click generate. Our tool will automatically create TypeScript interfaces or types from your JSON structure.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does this tool support nested objects?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, our JSON to TypeScript converter fully supports nested objects, arrays, and complex data structures. It automatically generates separate interfaces for nested objects.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I generate TypeScript types instead of interfaces?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, you can choose between interface and type declarations using the output format option in the settings panel.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is this tool free to use?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, our JSON to TypeScript converter is completely free to use. No registration required, and it works entirely in your browser.',
        },
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-slate-100">
          {t.seo.title}
        </h2>

        <div className="prose prose-slate max-w-none dark:prose-invert">
          <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
            {t.seo.paragraph1}
          </p>

          <h3 className="mt-8 text-2xl font-semibold text-slate-900 dark:text-slate-100">
            {t.seo.whyTitle}
          </h3>
          <p className="mt-4 leading-relaxed text-slate-700 dark:text-slate-300">{t.seo.whyText}</p>

          <h3 className="mt-8 text-2xl font-semibold text-slate-900 dark:text-slate-100">
            {t.seo.howTitle}
          </h3>
          <p className="mt-4 leading-relaxed text-slate-700 dark:text-slate-300">{t.seo.howText}</p>

          <h3 className="mt-8 text-2xl font-semibold text-slate-900 dark:text-slate-100">
            {t.seo.featuresTitle}
          </h3>
          <ul className="mt-4 space-y-2 text-slate-700 dark:text-slate-300">
            <li className="flex items-start">
              <span className="mr-2 text-indigo-600 dark:text-indigo-400">✓</span>
              <span>{t.seo.feature1}</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-indigo-600 dark:text-indigo-400">✓</span>
              <span>{t.seo.feature2}</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-indigo-600 dark:text-indigo-400">✓</span>
              <span>{t.seo.feature3}</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-indigo-600 dark:text-indigo-400">✓</span>
              <span>{t.seo.feature4}</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-indigo-600 dark:text-indigo-400">✓</span>
              <span>{t.seo.feature5}</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-indigo-600 dark:text-indigo-400">✓</span>
              <span>{t.seo.feature6}</span>
            </li>
          </ul>

          <h3 className="mt-8 text-2xl font-semibold text-slate-900 dark:text-slate-100">
            Frequently Asked Questions
          </h3>
          <div className="mt-4 space-y-6">
            <div>
              <h4 className="mb-2 text-lg font-semibold text-slate-900 dark:text-slate-100">
                How do I convert JSON to TypeScript?
              </h4>
              <p className="leading-relaxed text-slate-700 dark:text-slate-300">
                Simply paste your JSON into the input panel, configure your preferences for output
                format, optional fields, and readonly properties, then click generate. Our tool will
                automatically create TypeScript interfaces or types from your JSON structure.
              </p>
            </div>
            <div>
              <h4 className="mb-2 text-lg font-semibold text-slate-900 dark:text-slate-100">
                Does this tool support nested objects?
              </h4>
              <p className="leading-relaxed text-slate-700 dark:text-slate-300">
                Yes, our JSON to TypeScript converter fully supports nested objects, arrays, and
                complex data structures. It automatically generates separate interfaces for nested
                objects.
              </p>
            </div>
            <div>
              <h4 className="mb-2 text-lg font-semibold text-slate-900 dark:text-slate-100">
                Can I generate TypeScript types instead of interfaces?
              </h4>
              <p className="leading-relaxed text-slate-700 dark:text-slate-300">
                Yes, you can choose between interface and type declarations using the output format
                option in the settings panel.
              </p>
            </div>
            <div>
              <h4 className="mb-2 text-lg font-semibold text-slate-900 dark:text-slate-100">
                Is this tool free to use?
              </h4>
              <p className="leading-relaxed text-slate-700 dark:text-slate-300">
                Yes, our JSON to TypeScript converter is completely free to use. No registration
                required, and it works entirely in your browser.
              </p>
            </div>
          </div>

          <h3 className="mt-8 text-2xl font-semibold text-slate-900 dark:text-slate-100">
            {t.seo.exampleTitle}
          </h3>
          <p className="mt-4 leading-relaxed text-slate-700 dark:text-slate-300">
            {t.seo.exampleIntro}
          </p>
          <pre className="mt-4 overflow-x-auto rounded-lg bg-slate-900 p-4 text-sm text-slate-100">
            <code>{`{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com",
  "profile": {
    "age": 30,
    "active": true
  }
}`}</code>
          </pre>
          <p className="mt-4 leading-relaxed text-slate-700 dark:text-slate-300">
            {t.seo.exampleOutput}
          </p>
          <pre className="mt-4 overflow-x-auto rounded-lg bg-slate-900 p-4 text-sm text-slate-100">
            <code>{`export interface Root {
  id: number
  name: string
  email: string
  profile: Profile
}

export interface Profile {
  age: number
  active: boolean
}`}</code>
          </pre>
          <p className="mt-6 leading-relaxed text-slate-700 dark:text-slate-300">
            {t.seo.exampleConclusion}
          </p>
        </div>
      </section>
    </>
  )
}
