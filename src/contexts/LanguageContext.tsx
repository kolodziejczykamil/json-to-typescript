'use client'

import { createContext, useContext, useEffect, useState } from 'react'

import type { Language } from '@/lib/i18n'

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedLang = localStorage.getItem('language') as Language | null
    if (savedLang && (savedLang === 'en' || savedLang === 'pl')) {
      setLanguageState(savedLang)
    } else {
      const browserLang = navigator.language.split('-')[0]
      setLanguageState(browserLang === 'pl' ? 'pl' : 'en')
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    if (mounted) {
      localStorage.setItem('language', lang)
    }
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
