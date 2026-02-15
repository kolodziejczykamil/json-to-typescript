'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { getTranslations } from '@/lib/i18n'

type TsOutputProps = {
  readonly content: string
  readonly onCopy: () => void
  readonly onDownload: () => void
  readonly hasContent: boolean
}

export function TsOutput({ content, onCopy, onDownload, hasContent }: TsOutputProps) {
  const { language } = useLanguage()
  const t = getTranslations(language)

  return (
    <div className="flex h-full flex-col rounded-lg border border-slate-300 bg-white shadow-sm dark:border-slate-600 dark:bg-slate-800">
      <div className="flex items-center justify-between border-b border-slate-200 px-4 py-2.5 dark:border-slate-700">
        <div className="flex items-center gap-2">
          <span className="text-base">⚙️</span>
          <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300">
            {t.panels.tsOutput}
          </h3>
          {hasContent && (
            <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700 dark:bg-green-500/20 dark:text-green-400">
              {t.panels.generated}
            </span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={onCopy}
            disabled={!hasContent}
            className="rounded px-2.5 py-1 text-xs text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 disabled:cursor-not-allowed disabled:opacity-50 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-slate-200"
            aria-label={t.aria.copyOutput}
          >
            {t.buttons.copy}
          </button>
          <button
            onClick={onDownload}
            disabled={!hasContent}
            className="rounded px-2.5 py-1 text-xs text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 disabled:cursor-not-allowed disabled:opacity-50 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-slate-200"
            aria-label={t.aria.downloadFile}
          >
            {t.buttons.download}
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-auto bg-slate-50 p-4 dark:bg-slate-900">
        <pre className="h-full font-mono text-sm leading-relaxed text-slate-800 dark:text-slate-300">
          <code className="whitespace-pre">
            {content || (
              <span className="text-slate-400 dark:text-slate-500">
                {t.panels.placeholderOutput}
              </span>
            )}
          </code>
        </pre>
      </div>
    </div>
  )
}
