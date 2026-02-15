'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { getTranslations } from '@/lib/i18n'

type OptionsBarProps = {
  readonly rootTypeName: string
  readonly onRootTypeNameChange: (value: string) => void
  readonly outputFormat: boolean
  readonly onOutputFormatChange: (value: boolean) => void
  readonly readonlyFields: boolean
  readonly onReadonlyFieldsChange: (value: boolean) => void
  readonly optionalFields: boolean
  readonly onOptionalFieldsChange: (value: boolean) => void
  readonly onGenerate: () => void
}

export function OptionsBar({
  rootTypeName,
  onRootTypeNameChange,
  outputFormat,
  onOutputFormatChange,
  readonlyFields,
  onReadonlyFieldsChange,
  optionalFields,
  onOptionalFieldsChange,
  onGenerate,
}: OptionsBarProps) {
  const { language } = useLanguage()
  const t = getTranslations(language)

  return (
    <div className="mb-4 rounded-lg border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-800">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-6">
        <div className="flex-1 min-w-[200px]">
          <label className="mb-1.5 block text-xs font-medium text-slate-600 dark:text-slate-400">
            {t.options.rootTypeName}
          </label>
          <input
            type="text"
            value={rootTypeName}
            onChange={e => onRootTypeNameChange(e.target.value)}
            className="w-full rounded-md border border-slate-300 bg-slate-50 px-3 py-2 text-sm text-slate-900 placeholder-slate-500 transition-colors focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 dark:border-slate-600 dark:bg-slate-900 dark:text-white dark:focus:border-indigo-500"
            placeholder="RootObject"
          />
        </div>

        <div className="flex flex-wrap items-center gap-4 lg:gap-6">
          <label className="group relative flex cursor-pointer items-center gap-2.5 rounded-md px-2 py-1.5 transition-colors hover:bg-slate-50 dark:hover:bg-slate-700/50">
            <div className="relative flex h-5 w-5 items-center justify-center">
              <input
                type="checkbox"
                checked={outputFormat}
                onChange={e => onOutputFormatChange(e.target.checked)}
                className="peer h-5 w-5 cursor-pointer appearance-none rounded border-2 border-slate-300 bg-white transition-all checked:border-indigo-600 checked:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-0 dark:border-slate-600 dark:bg-slate-800 dark:checked:border-indigo-500 dark:checked:bg-indigo-500"
              />
              <svg
                className="pointer-events-none absolute h-3 w-3 text-white opacity-0 transition-opacity peer-checked:opacity-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="3"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                {t.options.outputFormat}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                {t.options.interface}
              </span>
            </div>
          </label>

          <label className="group relative flex cursor-pointer items-center gap-2.5 rounded-md px-2 py-1.5 transition-colors hover:bg-slate-50 dark:hover:bg-slate-700/50">
            <div className="relative flex h-5 w-5 items-center justify-center">
              <input
                type="checkbox"
                checked={readonlyFields}
                onChange={e => onReadonlyFieldsChange(e.target.checked)}
                className="peer h-5 w-5 cursor-pointer appearance-none rounded border-2 border-slate-300 bg-white transition-all checked:border-indigo-600 checked:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-0 dark:border-slate-600 dark:bg-slate-800 dark:checked:border-indigo-500 dark:checked:bg-indigo-500"
              />
              <svg
                className="pointer-events-none absolute h-3 w-3 text-white opacity-0 transition-opacity peer-checked:opacity-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="3"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
              {t.options.readonlyFields}
            </span>
          </label>

          <label className="group relative flex cursor-pointer items-center gap-2.5 rounded-md px-2 py-1.5 transition-colors hover:bg-slate-50 dark:hover:bg-slate-700/50">
            <div className="relative flex h-5 w-5 items-center justify-center">
              <input
                type="checkbox"
                checked={optionalFields}
                onChange={e => onOptionalFieldsChange(e.target.checked)}
                className="peer h-5 w-5 cursor-pointer appearance-none rounded border-2 border-slate-300 bg-white transition-all checked:border-indigo-600 checked:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-0 dark:border-slate-600 dark:bg-slate-800 dark:checked:border-indigo-500 dark:checked:bg-indigo-500"
              />
              <svg
                className="pointer-events-none absolute h-3 w-3 text-white opacity-0 transition-opacity peer-checked:opacity-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="3"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
              {t.options.optionalFields}
            </span>
          </label>
        </div>

        <button
          onClick={onGenerate}
          className="flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-6 py-2.5 font-semibold text-white transition-all hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:scale-95 dark:focus:ring-offset-slate-800"
          aria-label={t.aria.generateTypes}
        >
          <span className="text-lg" aria-hidden="true">
            ✨
          </span>
          <span>{t.buttons.generate}</span>
        </button>
      </div>
    </div>
  )
}
