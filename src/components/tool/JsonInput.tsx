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
  readonly isValid: boolean
}

export function JsonInput({
  value,
  onChange,
  onFormat,
  onClear,
  onPaste,
  error,
  isValid,
}: JsonInputProps) {
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
          {!isValid && value.trim() && (
            <span className="rounded-full bg-red-100 px-2 py-0.5 text-xs font-medium text-red-700 dark:bg-red-500/20 dark:text-red-400">
              Invalid
            </span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={onFormat}
            disabled={!isValid || !value.trim()}
            className="rounded px-2.5 py-1 text-xs text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 disabled:cursor-not-allowed disabled:opacity-50 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-slate-200"
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
        {error && value.trim() ? (
          <div className="mb-2 rounded-lg border border-red-300 bg-red-50 p-3 text-sm text-red-700 dark:border-red-700 dark:bg-red-900/20 dark:text-red-400">
            <div className="font-semibold">Error:</div>
            <div className="mt-1">{error}</div>
          </div>
        ) : null}
        <textarea
          value={value}
          onChange={e => onChange(e.target.value)}
          className={`h-full w-full resize-none overflow-auto bg-transparent font-mono text-sm leading-relaxed outline-none transition-colors ${
            !isValid && value.trim()
              ? 'text-red-600 dark:text-red-400'
              : 'text-slate-800 dark:text-slate-300'
          }`}
          placeholder={t.panels.placeholder}
          spellCheck={false}
          aria-invalid={!isValid}
          aria-describedby={error ? 'json-error' : undefined}
        />
        {error && value.trim() && (
          <div id="json-error" className="sr-only" role="alert">
            {error}
          </div>
        )}
      </div>
    </div>
  )
}
