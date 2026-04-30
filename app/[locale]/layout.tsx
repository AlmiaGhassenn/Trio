import { LocaleProvider } from "@/lib/locale-context"
import { DocumentLangSetter } from "@/components/document-lang-setter"
import { supportedLocales, defaultLocale, type Locale } from "@/lib/i18n"

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale: localeParam } = await params
  const locale = supportedLocales.includes(localeParam as Locale)
    ? (localeParam as Locale)
    : defaultLocale

  return (
    <LocaleProvider locale={locale}>
      <DocumentLangSetter />
      {children}
    </LocaleProvider>
  )
}
