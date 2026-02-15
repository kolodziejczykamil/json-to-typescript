'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { useTheme } from '@/contexts/ThemeContext'
import { getTranslations } from '@/lib/i18n'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const { language } = useLanguage()
  const t = getTranslations(language)

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center gap-1.5 rounded-md px-2 py-1.5 text-sm text-slate-300 transition-colors hover:bg-slate-700"
      aria-label={t.aria.switchTheme}
    >
      {theme === 'dark' ? (
        <>
          <span className="text-base">☀️</span>
          <span className="text-xs font-medium">{t.theme.light}</span>
        </>
      ) : (
        <>
          <span className="text-base">🌙</span>
          <span className="text-xs font-medium">{t.theme.dark}</span>
        </>
      )}
    </button>
  )
}
