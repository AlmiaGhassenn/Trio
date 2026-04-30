"use client"

import { useState, useEffect, useMemo } from "react"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { useTranslations } from "@/lib/locale-context"
import { supportedLocales, defaultLocale, type Locale } from "@/lib/i18n"

function getLocaleFromPathname(pathname: string) {
  if (!pathname || typeof pathname !== 'string') return defaultLocale
  const match = pathname.match(new RegExp(`^/(${supportedLocales.join("|")})(/|$)`))
  return (match?.[1] as Locale) || defaultLocale
}

function getPathWithoutLocale(pathname: string) {
  if (!pathname || typeof pathname !== 'string') return "/"
  const match = pathname.match(new RegExp(`^/(${supportedLocales.join("|")})(.*)$`))
  return match ? match[2] || "/" : pathname || "/"
}

function buildPath(pathname: string, locale: Locale) {
  if (!pathname || typeof pathname !== 'string') pathname = "/"
  const pathnameWithoutLocale = getPathWithoutLocale(pathname)
  if (locale === defaultLocale) {
    return pathnameWithoutLocale === "/" ? "/" : pathnameWithoutLocale
  }
  return pathnameWithoutLocale === "/"
    ? `/${locale}`
    : `/${locale}${pathnameWithoutLocale}`
}

export function Navigation() {
  const t = useTranslations()
  const pathname = usePathname() || "/"
  const locale = useMemo(() => getLocaleFromPathname(pathname), [pathname])
  const prefix = locale === defaultLocale ? "" : `/${locale}`
  const navLinks = [
    { name: t.nav.about, href: `${prefix}#about` },
    { name: t.nav.services, href: `${prefix}#services` },
    { name: t.nav.work, href: `${prefix}#work` },
    { name: t.nav.projects, href: `${prefix}/projects` },
    { name: t.nav.process, href: `${prefix}#process` },
    { name: t.nav.contact, href: `${prefix}#contact` },
  ]
  const languageLinks = supportedLocales.map((localeCode) => ({
    code: localeCode,
    href: buildPath(pathname, localeCode),
    active: localeCode === locale,
  }))

  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/80 backdrop-blur-lg border-b border-border"
            : "bg-transparent"
        }`}
        suppressHydrationWarning
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between gap-4">
            <a href="#" className="flex items-center gap-2">
              <span className="font-[var(--font-syne)] text-2xl font-bold tracking-tight text-foreground">
                TRIO
              </span>
              <span className="h-2 w-2 rounded-full bg-primary" />
            </a>

            <div className="hidden md:flex items-center gap-10">
              <div className="flex items-center gap-8">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
              <div className="flex items-center gap-2 rounded-full border border-border bg-card px-3 py-2">
                {languageLinks.map((link) => (
                  <a
                    key={link.code}
                    href={link.href}
                    className={`text-sm px-3 py-2 rounded-full transition-colors duration-200 ${
                      link.active
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.code.toUpperCase()}
                  </a>
                ))}
              </div>
            </div>

            <div className="hidden md:block">
              <a
                href={`${prefix}#contact`}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
              >
                {t.nav.talk}
              </a>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-foreground"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-medium text-foreground"
                >
                  {link.name}
                </motion.a>
              ))}
              <div className="flex items-center gap-2">
                {languageLinks.map((link) => (
                  <a
                    key={link.code}
                    href={link.href}
                    className={`text-sm px-3 py-2 rounded-full transition-colors duration-200 ${
                      link.active
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.code.toUpperCase()}
                  </a>
                ))}
              </div>
              <motion.a
                href={`${prefix}#contact`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-lg font-medium text-primary-foreground mt-4"
              >
                {t.nav.talk}
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
