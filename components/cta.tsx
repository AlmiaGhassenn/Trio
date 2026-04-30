"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Calendar } from "lucide-react"
import { BookingModal } from "./booking-modal"
import { useTranslations } from "@/lib/locale-context"

export function CTA() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const t = useTranslations()

  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-2xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary mb-8">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            {t.cta.badge}
          </div>

          <h2 className="font-[var(--font-syne)] text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance">
            {t.cta.titleLine1} <span className="text-primary">{t.cta.titleHighlight}</span>
          </h2>

          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.cta.subtext}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="mailto:hello@trio.agency"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-medium text-primary-foreground transition-shadow hover:shadow-lg hover:shadow-primary/25"
            >
              {t.cta.startProject}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-8 py-4 text-base font-medium text-foreground transition-all hover:bg-secondary hover:border-primary/50"
            >
              <Calendar className="w-4 h-4" />
              {t.cta.bookCall}
            </motion.button>
          </div>

          <div className="mt-16 flex flex-col items-center gap-4">
            <p className="text-sm text-muted-foreground">{t.cta.responseTime}</p>
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-emerald-500 border-2 border-background flex items-center justify-center text-xs text-white font-medium">
                  SM
                </div>
                <div className="w-8 h-8 rounded-full bg-orange-500 border-2 border-background flex items-center justify-center text-xs text-white font-medium">
                  MC
                </div>
                <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-background flex items-center justify-center text-xs text-white font-medium">
                  ER
                </div>
              </div>
              <span className="text-sm text-muted-foreground">{t.cta.joinClients}</span>
            </div>
          </div>
        </motion.div>
      </div>

      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}

