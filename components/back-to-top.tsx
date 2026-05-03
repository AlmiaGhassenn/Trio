"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUp } from "lucide-react"

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  const toggleVisibility = () => {
    if (typeof window !== "undefined") {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      
      setScrollProgress(scrolled)
      setIsVisible(scrollTop > 300)
    }
  }

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility)
    return () => {
      window.removeEventListener("scroll", toggleVisibility)
    }
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-8 right-8 z-40"
        >
          <button
            onClick={scrollToTop}
            className="relative w-12 h-12 flex items-center justify-center"
            aria-label="Back to top"
          >
            {/* Progress ring background */}
            <svg className="absolute inset-0 -rotate-90" viewBox="0 0 48 48">
              <circle
                cx="24"
                cy="24"
                r="20"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                className="text-muted-foreground/20"
              />
              <motion.circle
                cx="24"
                cy="24"
                r="20"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeDasharray={`${2 * Math.PI * 20}`}
                strokeDashoffset={`${2 * Math.PI * 20 * (1 - scrollProgress / 100)}`}
                className="text-foreground transition-all"
                style={{ pathLength: scrollProgress / 100 }}
              />
            </svg>

            {/* Button content */}
            <motion.div
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="relative flex items-center justify-center w-10 h-10 rounded-full bg-emerald-500 text-white hover:shadow-lg transition-shadow"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.div>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
