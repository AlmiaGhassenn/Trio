"use client"

import { motion } from "framer-motion"
import { Code, Film, Share2, Palette, ArrowUpRight } from "lucide-react"
import { useTranslations } from "@/lib/locale-context"

const icons = [Code, Film, Share2, Palette]

export function Services() {
  const t = useTranslations()

  return (
    <section id="services" className="py-24 lg:py-32 bg-card/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-[var(--font-syne)] text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            {t.services.headerLine1}
            <br />
            <span className="text-primary">{t.services.headerHighlight}</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.services.subtext}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.services.items.map((service, index) => {
            const Icon = icons[index]
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`group relative rounded-3xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 ${
                  index === 0 || index === 3 ? "lg:col-span-2" : ""
                }`}
              >
                <span className="font-[var(--font-syne)] text-sm font-medium text-primary">
                  {service.number}
                </span>

                <div className="mt-4 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="mt-6 font-[var(--font-syne)] text-2xl font-bold text-foreground">
                  {service.title}
                </h3>

                <p className="mt-3 text-muted-foreground">{service.description}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="absolute top-8 right-8 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground">
                    <ArrowUpRight className="w-5 h-5 transition-transform group-hover:rotate-45" />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
