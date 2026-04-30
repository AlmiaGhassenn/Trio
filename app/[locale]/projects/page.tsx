import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { projects } from "@/lib/projects"
import { getDictionary } from "@/lib/i18n"

interface ProjectsPageProps {
  params: Promise<{
    locale: string
  }>
}

export async function generateMetadata({ params }: ProjectsPageProps): Promise<Metadata> {
  const { locale } = await params
  const t = getDictionary(locale)
  return {
    title: `${t.projectsPage.title} | TRIO Agency`,
    description: t.projectsPage.subtitle,
  }
}

export default function LocaleProjectsPage({ params }: ProjectsPageProps) {
  const t = getDictionary(params.locale)
  const basePath = params.locale === "en" ? "/" : `/${params.locale}`

  return (
    <main className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-medium text-primary">{t.projectsPage.label}</p>
            <h1 className="mt-3 text-4xl font-[var(--font-syne)] font-bold tracking-tight text-foreground sm:text-5xl">
              {t.projectsPage.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
              {t.projectsPage.subtitle}
            </p>
          </div>
          <Link
            href={basePath}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-all duration-200 hover:border-primary/50 hover:bg-secondary"
          >
            {t.projectsPage.back}
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-3xl border border-border bg-card p-8 shadow-sm shadow-primary/5"
            >
              <div className="flex flex-col gap-3">
                <span className="inline-flex rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                  {project.category}
                </span>
                <div className="flex items-center justify-between gap-4">
                  <h2 className="text-2xl font-[var(--font-syne)] font-bold text-foreground">
                    {project.title}
                  </h2>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                    {project.year}
                  </span>
                </div>
                <p className="text-base leading-7 text-muted-foreground">{project.description}</p>

                <div className="grid gap-2 sm:grid-cols-2">
                  <div className="rounded-2xl border border-border bg-background/70 p-4">
                    <p className="text-sm font-medium text-foreground">{t.projectsPage.services}</p>
                    <p className="mt-2 text-sm text-muted-foreground">{project.services.join(", ")}</p>
                  </div>
                  <div className="rounded-2xl border border-border bg-background/70 p-4">
                    <p className="text-sm font-medium text-foreground">{t.projectsPage.highlights}</p>
                    <ul className="mt-2 space-y-2 text-sm text-muted-foreground list-disc list-inside">
                      {project.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
