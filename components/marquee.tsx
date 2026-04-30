"use client"

import { motion } from "framer-motion"
import { useTranslations } from "@/lib/locale-context"

export function Marquee() {
  const t = useTranslations()

  return (
    <section className="relative py-6 bg-card border-y border-border overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex animate-marquee"
      >
        {[...Array(4)].map((_, setIndex) => (
          <div key={setIndex} className="flex shrink-0">
            {t.marquee.map((service, index) => (
              <div
                key={`${setIndex}-${index}`}
                className="flex items-center gap-4 px-8"
              >
                <span className="font-[var(--font-syne)] text-lg md:text-xl font-medium text-foreground whitespace-nowrap">
                  {service}
                </span>
                <span className="h-2 w-2 rounded-full bg-primary" />
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </section>
  )
}
