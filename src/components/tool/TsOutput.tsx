'use client'

import { useState } from 'react'

import { useLanguage } from '@/contexts/LanguageContext'
import { getTranslations } from '@/lib/i18n'

import { LoadingSpinner } from '../ui/LoadingSpinner'

type TsOutputProps = {
  readonly content: string
  readonly onCopy: () => void
  readonly onDownload: () => void
  readonly hasContent: boolean
  readonly isConverting: boolean
}

export function TsOutput({ content, onCopy, onDownload, hasContent, isConverting }: TsOutputProps) {
  const { language } = useLanguage()
  const t = getTranslations(language)
  const [fontSize, setFontSize] = useState<'sm' | 'base' | 'lg'>('sm')
  const [wordWrap, setWordWrap] = useState<boolean>(false)

  const fontSizeClasses = {
    sm: 'text-xs',
    base: 'text-sm',
    lg: 'text-base',
  }

  return (
    <div className="flex h-full flex-col rounded-lg border border-slate-300 bg-white shadow-sm dark:border-slate-600 dark:bg-slate-800">
      <div className="flex items-center justify-between border-b border-slate-200 px-4 py-2.5 dark:border-slate-700">
        <div className="flex items-center gap-2">
          <span className="text-base" aria-hidden="true">
            ⚙️
          </span>
          <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300">
            {t.panels.tsOutput}
          </h3>
          {hasContent && !isConverting && (
            <span
              className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700 dark:bg-green-500/20 dark:text-green-400"
              role="status"
              aria-live="polite"
            >
              {t.panels.generated}
            </span>
          )}
          {isConverting && (
            <span
              className="flex items-center gap-1.5 rounded-full bg-indigo-100 px-2 py-0.5 text-xs font-medium text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-400"
              role="status"
              aria-live="polite"
            >
              <LoadingSpinner size="sm" />
              Generating...
            </span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <div
            className="flex items-center gap-1 rounded border border-slate-300 bg-slate-50 dark:border-slate-600 dark:bg-slate-900"
            role="group"
            aria-label="Font size controls"
          >
            <button
              onClick={() => setFontSize('sm')}
              className={`px-2 py-1 text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                fontSize === 'sm'
                  ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300'
                  : 'text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-700'
              }`}
              aria-label="Small font size"
              aria-pressed={fontSize === 'sm'}
            >
              S
            </button>
            <button
              onClick={() => setFontSize('base')}
              className={`px-2 py-1 text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                fontSize === 'base'
                  ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300'
                  : 'text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-700'
              }`}
              aria-label="Medium font size"
              aria-pressed={fontSize === 'base'}
            >
              M
            </button>
            <button
              onClick={() => setFontSize('lg')}
              className={`px-2 py-1 text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                fontSize === 'lg'
                  ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300'
                  : 'text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-700'
              }`}
              aria-label="Large font size"
              aria-pressed={fontSize === 'lg'}
            >
              L
            </button>
          </div>
          <button
            onClick={() => setWordWrap(!wordWrap)}
            className={`rounded px-2.5 py-1 text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
              wordWrap
                ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300'
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-slate-200'
            }`}
            aria-label="Toggle word wrap"
            aria-pressed={wordWrap}
          >
            Wrap
          </button>
          <button
            onClick={onCopy}
            disabled={!hasContent || isConverting}
            className="rounded px-2.5 py-1 text-xs text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:cursor-not-allowed disabled:opacity-50 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-slate-200"
            aria-label={t.aria.copyOutput}
            aria-disabled={!hasContent || isConverting}
          >
            {t.buttons.copy}
          </button>
          <button
            onClick={onDownload}
            disabled={!hasContent || isConverting}
            className="rounded px-2.5 py-1 text-xs text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:cursor-not-allowed disabled:opacity-50 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-slate-200"
            aria-label={t.aria.downloadFile}
            aria-disabled={!hasContent || isConverting}
          >
            {t.buttons.download}
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-auto bg-slate-50 p-4 dark:bg-slate-900">
        {isConverting ? (
          <div className="flex h-full items-center justify-center">
            <div className="flex flex-col items-center gap-3">
              <LoadingSpinner size="md" />
              <p className="text-sm text-slate-600 dark:text-slate-400">Generating types...</p>
            </div>
          </div>
        ) : (
          <pre
            className={`h-full font-mono leading-relaxed text-slate-800 dark:text-slate-300 ${fontSizeClasses[fontSize]} ${
              wordWrap ? 'whitespace-pre-wrap break-words' : 'whitespace-pre'
            }`}
          >
            <code className={wordWrap ? 'block' : 'inline-block'}>
              {content || (
                <span className="text-slate-400 dark:text-slate-500">
                  {t.panels.placeholderOutput}
                </span>
              )}
            </code>
          </pre>
        )}
      </div>
    </div>
  )
}
