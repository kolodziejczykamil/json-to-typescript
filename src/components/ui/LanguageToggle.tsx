'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { getTranslations } from '@/lib/i18n'

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()
  const t = getTranslations(language)

  const toggleLanguage = (): void => {
    setLanguage(language === 'en' ? 'pl' : 'en')
  }

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-1.5 rounded-md px-2 py-1.5 text-sm text-slate-300 transition-colors hover:bg-slate-700"
      aria-label={t.aria.switchLanguage}
    >
      <span className="text-base">{language === 'en' ? '🇵🇱' : '🇬🇧'}</span>
      <span className="text-xs font-medium">{language === 'en' ? 'PL' : 'EN'}</span>
    </button>
  )
}
