"use client"

import { motion } from "framer-motion"
import { Globe, Zap } from "lucide-react"
import { useTranslations } from "@/lib/locale-context"

const team = [
  { name: "Almia Ghassen", roleKey: "Web Developer", initials: "AG", color: "bg-primary" },
  { name: "Safa Salaaoui", roleKey: "Social Media Manager and Graphic Designer", initials: "SS", color: "bg-blue-500" },
  { name: "Ghassen ben salem", roleKey: "Video Editor", initials: "G", color: "bg-orange-500" },
]

export function About() {
  const t = useTranslations()

  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-[var(--font-syne)] text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance">
              {t.about.titleLine1}
              <br />
              <span className="text-primary">{t.about.titleHighlight}</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-lg">{t.about.paragraph1}</p>
            <p className="mt-4 text-lg text-muted-foreground max-w-lg">{t.about.paragraph2}</p>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border ${member.color} text-white font-medium`}
                  >
                    {member.initials}
                  </div>
                  <div>
                    <div className="font-medium text-foreground">{member.name}</div>
                    <div className="text-sm text-muted-foreground">{member.roleKey}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl border border-border bg-card p-8 lg:p-12 overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />

              <div className="relative">
                <div className="inline-flex items-center gap-3 rounded-full border border-primary/30 bg-primary/10 px-6 py-3">
                  <Globe className="w-5 h-5 text-primary" />
                  <span className="font-medium text-foreground">{t.about.remoteReady}</span>
                </div>
              </div>

              <div className="relative mt-8 p-6 rounded-2xl bg-background/50 border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-6 h-6 text-primary" />
                  <span className="font-[var(--font-syne)] text-xl font-semibold text-foreground">{t.about.established}</span>
                </div>
                <p className="text-muted-foreground">
                  {t.about.paragraph3}
                </p>
              </div>

              <div className="relative mt-8">
                <p className="font-[var(--font-syne)] text-2xl md:text-3xl font-bold text-foreground leading-tight">
                  {t.about.statement}
                </p>
              </div>

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
