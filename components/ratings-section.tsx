"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

export function RatingsSection() {
  return (
    <section className="py-16 md:py-24 bg-primary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <div className="flex items-baseline justify-center gap-2 mb-4">
            <span className="text-5xl md:text-6xl font-bold text-primary-foreground">4.8</span>
            <span className="text-2xl text-primary-foreground/80">/5</span>
          </div>
          <p className="text-xl text-primary-foreground/90 mb-2">Average Rating</p>
          <p className="text-primary-foreground/70">Based on 5000+ customer reviews</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 max-w-3xl mx-auto">
            {[
              { value: "5000+", label: "Happy Customers" },
              { value: "10+", label: "Years Experience" },
              { value: "50+", label: "Expert Technicians" },
              { value: "99%", label: "Satisfaction Rate" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-3xl md:text-4xl font-bold text-primary-foreground">{stat.value}</p>
                <p className="text-sm text-primary-foreground/70 mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
