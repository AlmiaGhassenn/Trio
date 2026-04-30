"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  // Prevent hydration mismatch by only rendering on client
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    // Only show custom cursor on desktop
    const isMobile = window.matchMedia("(max-width: 768px)").matches
    if (isMobile) return

    setIsVisible(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target
      if (!(target instanceof Element)) return

      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovering(true)
      }
    }

    const handleMouseOut = () => {
      setIsHovering(false)
    }

    window.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseover", handleMouseOver)
    document.addEventListener("mouseout", handleMouseOut)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseover", handleMouseOver)
      document.removeEventListener("mouseout", handleMouseOut)
    }
  }, [isClient])

  if (!isClient) {
    return null
  }

  if (!isVisible) return null

  return (
    <motion.div
      className="pointer-events-none fixed z-[9999] mix-blend-difference"
      animate={{
        x: mousePosition.x - (isHovering ? 20 : 6),
        y: mousePosition.y - (isHovering ? 20 : 6),
        width: isHovering ? 40 : 12,
        height: isHovering ? 40 : 12,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
        mass: 0.5,
      }}
      style={{
        backgroundColor: isHovering
          ? "rgba(74, 222, 128, 0.5)"
          : "rgb(74, 222, 128)",
        borderRadius: "50%",
      }}
    />
  )
}
