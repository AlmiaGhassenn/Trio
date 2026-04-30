"use client"

import { useEffect } from "react"
import { useLocale } from "@/lib/locale-context"

export function DocumentLangSetter() {
  const locale = useLocale()

  useEffect(() => {
    const expectedLang = locale === 'fr' ? 'fr' : 'en'
    document.documentElement.lang = expectedLang
  }, [locale])

  return null
}