'use client'

import Link from 'next/link'

import { useLanguage } from '@/contexts/LanguageContext'
import { getTranslations } from '@/lib/i18n'

import { LanguageToggle } from '../ui/LanguageToggle'
import { ThemeToggle } from '../ui/ThemeToggle'

export function Navbar() {
  const { language } = useLanguage()
  const t = getTranslations(language)

  return (
    <header>
      <nav
        className="fixed top-0 z-40 w-full border-b border-slate-800 bg-slate-900 dark:border-slate-700 dark:bg-slate-900"
        aria-label={t.aria.mainNavigation}
      >
        <div className="mx-auto max-w-full px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded"
              aria-label={t.aria.home}
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-white">
                <span className="text-lg font-bold" aria-hidden="true">
                  &lt;/&gt;
                </span>
              </div>
              <div>
                <div className="text-base font-semibold text-white">JSON → TypeScript</div>
                <div className="text-xs text-slate-400">Type Generator</div>
              </div>
            </Link>
            <div className="flex items-center gap-2">
              <div
                className="flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800 p-1"
                role="group"
                aria-label={t.aria.settings}
              >
                <LanguageToggle />
                <ThemeToggle />
              </div>
              <div className="mx-2 h-6 w-px bg-slate-700" aria-hidden="true" />
              <Link
                href="https://github.com/kolodziejczykamil/json-to-typescript"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg px-3 py-1.5 text-sm text-slate-400 transition-colors hover:bg-slate-800 hover:text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                aria-label={t.aria.viewGithub}
              >
                {t.nav.github}
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
