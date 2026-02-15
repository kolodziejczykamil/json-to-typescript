'use client'

import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800">
      <div className="mx-auto max-w-[1800px] px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="text-sm text-slate-600 dark:text-slate-400">
              © {currentYear}{' '}
              <span className="font-semibold text-slate-900 dark:text-slate-100">
                Kamil Kołodziejczyk
              </span>
              . All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/kolodziejczykamil/json-to-typescript"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
            >
              GitHub
            </Link>
            <span className="text-slate-400 dark:text-slate-600">•</span>
            <span className="text-sm text-slate-600 dark:text-slate-400">Made with ❤️</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
