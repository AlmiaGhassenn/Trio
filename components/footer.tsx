"use client"

import { motion } from "framer-motion"
import { Instagram, Linkedin, Dribbble, Facebook } from "lucide-react"
import { useTranslations } from "@/lib/locale-context"
import { usePathname } from "next/navigation"
import { supportedLocales, defaultLocale, type Locale } from "@/lib/i18n"

const socialLinks = [
  { name: "Instagram", href: "#", icon: Instagram },
  { name: "Facebook", href: "#", icon: Facebook },
]

function getLocaleFromPathname(pathname: string) {
  const match = pathname.match(new RegExp(`^/(${supportedLocales.join("|")})(/|$)`))
  return (match?.[1] as Locale) || defaultLocale
}

function getPathWithoutLocale(pathname: string) {
  const match = pathname.match(new RegExp(`^/(${supportedLocales.join("|")})(.*)$`))
  return match ? match[2] || "/" : pathname || "/"
}

export function Footer() {
  const t = useTranslations()
  const pathname = usePathname() || "/"
  const locale = getLocaleFromPathname(pathname)
  const prefix = locale === defaultLocale ? "" : `/${locale}`

  const navLinks = [
    { name: t.nav.about, href: `${prefix}#about` },
    { name: t.nav.services, href: `${prefix}#services` },
    { name: t.nav.work, href: `${prefix}#work` },
    { name: t.nav.process, href: `${prefix}#process` },
    { name: t.nav.contact, href: `${prefix}#contact` },
  ]

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          <div className="flex flex-col items-center lg:items-start gap-2">
            <a href="#" className="flex items-center gap-2">
              <img src="/logo.png" alt="TRIO" className="h-20 w-auto" />
            </a>
            <p className="text-sm text-muted-foreground">{t.footer.tagline}</p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-card text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all"
                  aria-label={link.name}
                >
                  <Icon className="w-4 h-4" />
                </a>
              )
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 pt-8 border-t border-border text-center"
        >
          <p className="text-sm text-muted-foreground">
            <span suppressHydrationWarning={true}>2026</span> {t.footer.copyright}
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
