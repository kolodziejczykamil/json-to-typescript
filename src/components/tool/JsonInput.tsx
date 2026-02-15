'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { getTranslations } from '@/lib/i18n'

type JsonInputProps = {
  readonly value: string
  readonly onChange: (value: string) => void
  readonly onFormat: () => void
  readonly onClear: () => void
  readonly onPaste: () => void
  readonly error?: string
}

export function JsonInput({ value, onChange, onFormat, onClear, onPaste, error }: JsonInputProps) {
  const { language } = useLanguage()
  const t = getTranslations(language)

  return (
    <div className="flex h-full flex-col rounded-lg border border-slate-300 bg-white shadow-sm dark:border-slate-600 dark:bg-slate-800">
      <div className="flex items-center justify-between border-b border-slate-200 px-4 py-2.5 dark:border-slate-700">
        <div className="flex items-center gap-2">
          <span className="text-base">⚙️</span>
          <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300">
            {t.panels.jsonInput}
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={onFormat}
            className="rounded px-2.5 py-1 text-xs text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-slate-200"
            aria-label={t.aria.formatJson}
          >
            {t.buttons.format}
          </button>
          <button
            onClick={onPaste}
            className="rounded px-2.5 py-1 text-xs text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-slate-200"
            aria-label={t.aria.pasteFromClipboard}
          >
            {t.buttons.paste}
          </button>
          <button
            onClick={onClear}
            className="rounded px-2.5 py-1 text-xs text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-slate-200"
            aria-label={t.aria.clearInput}
          >
            {t.buttons.clear}
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-hidden bg-slate-50 p-4 dark:bg-slate-900">
        {error ? (
          <div className="text-sm text-red-500 dark:text-red-400">{error}</div>
        ) : (
          <textarea
            value={value}
            onChange={e => onChange(e.target.value)}
            className="h-full w-full resize-none overflow-auto bg-transparent font-mono text-sm leading-relaxed text-slate-800 outline-none dark:text-slate-300"
            placeholder={t.panels.placeholder}
            spellCheck={false}
          />
        )}
      </div>
    </div>
  )
}
