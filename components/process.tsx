"use client"

import { motion } from "framer-motion"
import { MessageCircle, Map, Rocket, PartyPopper } from "lucide-react"
import { useTranslations } from "@/lib/locale-context"

export function Process() {
  const t = useTranslations()
  const steps = t.process.steps

  return (
    <section id="process" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-[var(--font-syne)] text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            {t.process.titleLine1} <span className="text-primary">{t.process.titleHighlight}</span> Process
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.process.subtitle}
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />
          <div className="hidden lg:block absolute top-1/2 left-0 h-0.5 bg-primary -translate-y-1/2 w-0 group-hover:w-full transition-all duration-1000" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = [MessageCircle, Map, Rocket, PartyPopper][index]
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="group relative"
                >
                  <div className="relative rounded-3xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 h-full">
                    <div className="relative z-10 mx-auto w-16 h-16 rounded-full bg-background border-2 border-border flex items-center justify-center transition-all duration-300 group-hover:border-primary group-hover:bg-primary/10">
                      <Icon className="w-7 h-7 text-muted-foreground transition-colors group-hover:text-primary" />
                    </div>

                    <div className="mt-6 text-center">
                      <span className="font-[var(--font-syne)] text-sm font-medium text-primary">
                        {t.process.steps[index].number}
                      </span>
                    </div>

                    <h3 className="mt-2 text-center font-[var(--font-syne)] text-xl font-bold text-foreground">
                      {step.title}
                    </h3>

                    <p className="mt-4 text-center text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </div>

                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-8 -translate-y-1/2 z-20">
                      <div className="w-full h-full rounded-full bg-background border border-border flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-muted-foreground"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
