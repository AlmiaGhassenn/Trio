"use client"

import { createContext, useContext, type ReactNode } from "react"
import { getDictionary, type Locale, defaultLocale } from "./i18n"

interface LocaleContextValue {
  translations: ReturnType<typeof getDictionary>
  locale: Locale
}

const LocaleContext = createContext<LocaleContextValue>({
  translations: getDictionary(defaultLocale),
  locale: defaultLocale
})

export function LocaleProvider({ locale, children }: { locale: Locale; children: ReactNode }) {
  return (
    <LocaleContext.Provider value={{ translations: getDictionary(locale), locale }}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useTranslations() {
  const { translations } = useContext(LocaleContext)
  return translations
}

export function useLocale() {
  const { locale } = useContext(LocaleContext)
  return locale
}
