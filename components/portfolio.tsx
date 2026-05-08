"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { useState } from "react"
import { projects } from "@/lib/projects"
import { usePathname } from "next/navigation"
import { useTranslations } from "@/lib/locale-context"
import { supportedLocales, defaultLocale, type Locale } from "@/lib/i18n"
import { PortfolioModal } from "@/components/portfolio-modal"

function getLocaleFromPathname(pathname: string) {
  const match = pathname.match(new RegExp(`^/(${supportedLocales.join("|")})(/|$)`))
  return (match?.[1] as Locale) || defaultLocale
}

function getPathWithoutLocale(pathname: string) {
  const match = pathname.match(new RegExp(`^/(${supportedLocales.join("|")})(.*)$`))
  return match ? match[2] || "/" : pathname || "/"
}

export function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)
  const t = useTranslations()
  const pathname = usePathname() || "/"
  const locale = getLocaleFromPathname(pathname)
  const prefix = locale === defaultLocale ? "" : `/${locale}`

  const handleProjectClick = (project: typeof projects[0]) => {
    if (project.portfolioUrl) {
      // Open Google Drive links directly in new tab (iframe blocking)
      if (project.portfolioUrl.includes('drive.google.com')) {
        window.open(project.portfolioUrl, '_blank')
      } else {
        setSelectedProject(project)
      }
    }
  }

  return (
    <section id="work" className="py-24 lg:py-32 bg-card/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-[var(--font-syne)] text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            {t.portfolio.title} <span className="text-primary">{t.portfolio.highlight}</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.portfolio.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div
                onClick={() => handleProjectClick(project)}
                className={`relative aspect-[4/3] rounded-3xl border border-border bg-card overflow-hidden transition-all duration-500 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 ${
                  project.portfolioUrl ? "cursor-pointer" : ""
                }`}
              >
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                  />
                )}
                <div
                  className={`absolute inset-0 ${project.pattern} ${project.gradient} opacity-50 transition-opacity duration-500 group-hover:opacity-70`}
                />

                <div className="absolute inset-0 grid-bg opacity-30" />

                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  <div>
                    <span className="inline-block rounded-full bg-background/80 backdrop-blur-sm px-4 py-2 text-sm font-medium text-foreground border border-border">
                      {project.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-[var(--font-syne)] text-2xl md:text-3xl font-bold text-foreground">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-muted-foreground max-w-sm">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="absolute inset-0 bg-background/80 backdrop-blur-sm opacity-0 transition-all duration-300 group-hover:opacity-100 flex items-center justify-center">
                  <button className="flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transform translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 hover:scale-105">
                    {t.portfolio.viewProject}
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a
            href={`${prefix}/projects`}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-8 py-4 text-base font-medium text-foreground transition-all duration-200 hover:bg-secondary hover:border-primary/50"
          >
            {t.portfolio.viewAll}
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>

      {selectedProject && (
        <PortfolioModal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          title={selectedProject.author || selectedProject.title}
          portfolioUrl={selectedProject.portfolioUrl || ""}
          image={selectedProject.image || "/placeholder-user.jpg"}
        />
      )}
    </section>
  )
}
