"use client"

import { motion } from "framer-motion"
import { Code, Film, Share2, Palette, ArrowUpRight } from "lucide-react"

const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Custom websites and web applications built with cutting-edge technology. From landing pages to complex e-commerce platforms.",
    tags: ["Next.js", "React", "E-commerce", "CMS", "SEO"],
    icon: Code,
    wide: true,
  },
  {
    number: "02",
    title: "Video Editing",
    description:
      "Compelling video content that captures attention and drives engagement across all platforms.",
    tags: ["Reels", "Brand Films", "Motion Graphics", "Ad Creatives"],
    icon: Film,
    wide: false,
  },
  {
    number: "03",
    title: "Social Media",
    description:
      "Strategic management and growth across Instagram, TikTok, and LinkedIn.",
    tags: ["Strategy", "Content", "Community", "Growth"],
    icon: Share2,
    wide: false,
  },
  {
    number: "04",
    title: "Branding & Design",
    description:
      "Complete brand identities that make lasting impressions. From logos to comprehensive brand guidelines.",
    tags: ["Logo Design", "Brand Identity", "UI/UX", "Guidelines"],
    icon: Palette,
    wide: true,
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-card/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-[var(--font-syne)] text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Four Services.
            <br />
            <span className="text-primary">One Unified Vision.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to build, launch, and grow your brand — all under one roof.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`group relative rounded-3xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 ${
                  service.wide ? "lg:col-span-2" : ""
                }`}
              >
                {/* Number */}
                <span className="font-[var(--font-syne)] text-sm font-medium text-primary">
                  {service.number}
                </span>

                {/* Icon */}
                <div className="mt-4 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="w-6 h-6" />
                </div>

                {/* Title */}
                <h3 className="mt-6 font-[var(--font-syne)] text-2xl font-bold text-foreground">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-muted-foreground">{service.description}</p>

                {/* Tags */}
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

                {/* Arrow */}
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
