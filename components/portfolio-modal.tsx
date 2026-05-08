"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { useTranslations } from "@/lib/locale-context"

interface PortfolioModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  portfolioUrl: string
  image: string
}

export function PortfolioModal({
  isOpen,
  onClose,
  title,
  portfolioUrl,
  image,
}: PortfolioModalProps) {
  const t = useTranslations()
  const [iframeLoaded, setIframeLoaded] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setIframeLoaded(false)
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="relative w-full max-w-4xl bg-card rounded-3xl border border-border shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between gap-4 p-6 border-b border-border bg-background/50">
                <div className="flex items-center gap-4">
                  <img
                    src={image}
                    alt={title}
                    className="w-12 h-12 rounded-full object-cover border border-border"
                  />
                  <h2 className="text-xl font-[var(--font-syne)] font-bold text-foreground">
                    {title}
                  </h2>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-background rounded-full transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5 text-muted-foreground" />
                </button>
              </div>

               {/* Content - Hide iframe on mobile */}
               <div className="relative bg-background/50">
                 <div className="hidden md:block aspect-video">
                   {!iframeLoaded && (
                     <div className="absolute inset-0 flex items-center justify-center bg-background">
                       <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                     </div>
                   )}
                   <iframe
                     src={portfolioUrl}
                     title={title}
                     className="w-full h-full border-none"
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                     onLoad={() => setIframeLoaded(true)}
                   />
                 </div>
                 <div className="md:hidden flex items-center justify-center aspect-video p-8 text-center">
                   <p className="text-muted-foreground">
                     {t.portfolio.mobileViewMessage}
                   </p>
                 </div>
               </div>

               {/* Footer */}
               <div className="flex items-center justify-between gap-4 p-4 border-t border-border bg-background/50">
                 <a
                   href={portfolioUrl}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="text-sm text-primary hover:underline font-medium"
                 >
                   {t.portfolio.openInNewTab}
                 </a>
                 <button
                   onClick={onClose}
                   className="px-4 py-2 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity text-sm font-medium"
                 >
                   {t.portfolio.close}
                 </button>
               </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
