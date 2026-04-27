"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"

function Counter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const [hasMounted, setHasMounted] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    setHasMounted(true)
  }, [])

  useEffect(() => {
    if (isInView && hasMounted) {
      let start = 0
      const duration = 2000
      const increment = end / (duration / 16)
      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)
      return () => clearInterval(timer)
    }
  }, [isInView, end, hasMounted])

  if (!hasMounted) {
    return (
      <span ref={ref}>
        0{suffix}
      </span>
    )
  }

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 grid-bg opacity-50" />
      
      {/* Gradient Blob */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-2 text-sm text-muted-foreground mb-8"
          >
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            3 Specialists. 4 Services. Real Results.
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-[var(--font-syne)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground text-balance"
          >
            We Build Brands
            <br />
            <span className="text-primary">That Actually Work</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty"
          >
            A small but mighty team of three, delivering web development, video editing, 
            social media management, and branding design that drives real results.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-medium text-primary-foreground transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
            >
              Start a Project
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-8 py-4 text-base font-medium text-foreground transition-all duration-200 hover:bg-card hover:border-primary/50"
            >
              See Our Work
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-20 grid grid-cols-3 gap-8 max-w-xl mx-auto"
          >
            <div className="text-center">
              <div className="font-[var(--font-syne)] text-3xl md:text-4xl font-bold text-foreground">
                <Counter end={40} suffix="+" />
              </div>
              <div className="mt-1 text-sm text-muted-foreground">Projects</div>
            </div>
            <div className="text-center">
              <div className="font-[var(--font-syne)] text-3xl md:text-4xl font-bold text-foreground">
                <Counter end={98} suffix="%" />
              </div>
              <div className="mt-1 text-sm text-muted-foreground">Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="font-[var(--font-syne)] text-3xl md:text-4xl font-bold text-foreground">
                <Counter end={3} />
              </div>
              <div className="mt-1 text-sm text-muted-foreground">Countries</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-8 rounded-full border-2 border-muted-foreground/50 flex items-start justify-center p-1"
          >
            <div className="w-1 h-2 rounded-full bg-primary" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
