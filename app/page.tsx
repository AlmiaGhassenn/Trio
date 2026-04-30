import { HomeContent } from "@/components/home"
import { DocumentLangSetter } from "@/components/document-lang-setter"
import { LocaleProvider } from "@/lib/locale-context"
import { defaultLocale } from "@/lib/i18n"

export default function Home() {
  return (
    <LocaleProvider locale={defaultLocale}>
      <DocumentLangSetter />
      <HomeContent />
    </LocaleProvider>
  )
}
