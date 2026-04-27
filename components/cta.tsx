"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Calendar } from "lucide-react"
import { BookingModal } from "./booking-modal"

export function CTA() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background Glow */}
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
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary mb-8">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            {"We're Currently Accepting New Projects"}
          </div>

          {/* Headline */}
          <h2 className="font-[var(--font-syne)] text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance">
            Ready to <span className="text-primary">Grow?</span>
          </h2>

          {/* Subtext */}
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            {"Let's build something great together. Whether you need a new website, a brand refresh, or a social media strategy — we're here to help."}
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="mailto:hello@trio.agency"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-medium text-primary-foreground transition-shadow hover:shadow-lg hover:shadow-primary/25"
            >
              Start a Project
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-8 py-4 text-base font-medium text-foreground transition-all hover:bg-secondary hover:border-primary/50"
            >
              <Calendar className="w-4 h-4" />
              Book a Free Call
            </motion.button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 flex flex-col items-center gap-4">
            <p className="text-sm text-muted-foreground">
              Typical response time: under 24 hours
            </p>
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
              <span className="text-sm text-muted-foreground">
                Join 40+ happy clients
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}

