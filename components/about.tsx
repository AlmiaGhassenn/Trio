"use client"

import { motion } from "framer-motion"
import { Globe, Zap } from "lucide-react"

const team = [
  { name: "Almia Ghassen", role: "Web Developer", initials: "AG", color: "bg-primary" },
  { name: "Safa", role: "Social Media Manager", initials: "S", color: "bg-blue-500" },
  { name: "Ghassen", role: "Video Editor", initials: "G", color: "bg-orange-500" },
]

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-[var(--font-syne)] text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance">
              A Small Team.
              <br />
              <span className="text-primary">A Big Impact.</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-lg">
              {"We're not a massive agency with endless layers of bureaucracy. We're three passionate specialists who work directly with you to craft brands, websites, and content that actually moves the needle."}
            </p>
            <p className="mt-4 text-lg text-muted-foreground max-w-lg">
              No middlemen. No fluff. Just great work, delivered with care.
            </p>

            {/* Team Cards */}
            <div className="mt-10 flex flex-wrap gap-4">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="group flex items-center gap-3 rounded-2xl border border-border bg-card p-4 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full ${member.color} text-white font-medium`}
                  >
                    {member.initials}
                  </div>
                  <div>
                    <div className="font-medium text-foreground">{member.name}</div>
                    <div className="text-sm text-muted-foreground">{member.role}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl border border-border bg-card p-8 lg:p-12 overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
              
              {/* Badge */}
              <div className="relative">
                <div className="inline-flex items-center gap-3 rounded-full border border-primary/30 bg-primary/10 px-6 py-3">
                  <Globe className="w-5 h-5 text-primary" />
                  <span className="font-medium text-foreground">Remote Ready</span>
                </div>
              </div>

              {/* Stats Card */}
              <div className="relative mt-8 p-6 rounded-2xl bg-background/50 border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-6 h-6 text-primary" />
                  <span className="font-[var(--font-syne)] text-xl font-semibold text-foreground">Est. 2024</span>
                </div>
                <p className="text-muted-foreground">
                  Fresh perspectives, modern tools, and a hunger to prove ourselves. 
                  {"We're new, but we deliver like veterans."}
                </p>
              </div>

              {/* Statement */}
              <div className="relative mt-8">
                <p className="font-[var(--font-syne)] text-2xl md:text-3xl font-bold text-foreground leading-tight">
                  {"\"We don't just build projects. We build "}
                  <span className="text-primary">partnerships.</span>
                  {'"'}
                </p>
              </div>

              {/* Decorative circle */}
              <div className="absolute bottom-8 right-8 w-24 h-24 rounded-full border-2 border-dashed border-primary/30 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full border-2 border-primary/50 flex items-center justify-center">
                  <span className="font-[var(--font-syne)] text-2xl font-bold text-primary">3</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
