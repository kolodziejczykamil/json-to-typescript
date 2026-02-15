'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { getTranslations } from '@/lib/i18n'

export function SeoContent() {
  const { language } = useLanguage()
  const t = getTranslations(language)

  return (
    <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-slate-100">{t.seo.title}</h2>

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
  )
}
