"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "TRIO transformed our online presence completely. The website they built not only looks stunning but actually converts visitors into customers.",
    name: "Sarah Mitchell",
    title: "CEO",
    company: "Luxe Properties",
    initials: "SM",
    color: "bg-emerald-500",
  },
  {
    quote:
      "Working with TRIO felt like having an in-house team. They understood our vision from day one and delivered beyond expectations.",
    name: "Marcus Chen",
    title: "Founder",
    company: "Vibe Studios",
    initials: "MC",
    color: "bg-orange-500",
  },
  {
    quote:
      "Our social media engagement increased by 340% in just three months. TRIO knows how to create content that resonates.",
    name: "Emily Rodriguez",
    title: "Marketing Director",
    company: "GrowthHive",
    initials: "ER",
    color: "bg-blue-500",
  },
]

export function Testimonials() {
  return (
    <section className="py-24 lg:py-32">
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
            What Our <span className="text-primary">Clients</span> Say
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            {"Don't just take our word for it. Here's what the people we've worked with have to say."}
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative rounded-3xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="mt-6 text-foreground italic leading-relaxed">
                {`"${testimonial.quote}"`}
              </p>

              {/* Author */}
              <div className="mt-8 flex items-center gap-4">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full ${testimonial.color} text-white font-medium`}
                >
                  {testimonial.initials}
                </div>
                <div>
                  <div className="font-medium text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.title}, {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
