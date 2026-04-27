"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { projects } from "@/lib/projects"

export function Portfolio() {
  return (
    <section id="work" className="py-24 lg:py-32 bg-card/50">
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
            Selected <span className="text-primary">Work</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of projects that demonstrate our capabilities across all four services.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div
                className={`relative aspect-[4/3] rounded-3xl border border-border bg-card overflow-hidden transition-all duration-500 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10`}
              >
                {/* Background Pattern */}
                <div
                  className={`absolute inset-0 ${project.pattern} ${project.gradient} opacity-50 transition-opacity duration-500 group-hover:opacity-70`}
                />

                {/* Grid Pattern Overlay */}
                <div className="absolute inset-0 grid-bg opacity-30" />

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  {/* Category Badge */}
                  <div>
                    <span className="inline-block rounded-full bg-background/80 backdrop-blur-sm px-4 py-2 text-sm font-medium text-foreground border border-border">
                      {project.category}
                    </span>
                  </div>

                  {/* Project Info */}
                  <div>
                    <h3 className="font-[var(--font-syne)] text-2xl md:text-3xl font-bold text-foreground">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-muted-foreground max-w-sm">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-background/80 backdrop-blur-sm opacity-0 transition-all duration-300 group-hover:opacity-100 flex items-center justify-center">
                  <button className="flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transform translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 hover:scale-105">
                    View Project
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a
            href="/projects"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-8 py-4 text-base font-medium text-foreground transition-all duration-200 hover:bg-secondary hover:border-primary/50"
          >
            View All Projects
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
