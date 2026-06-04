"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection({ onBookClick }: { onBookClick: () => void }) {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-background to-accent">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Ready to Get Your Appliances Fixed?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 text-pretty">
            Book a service now and get your home appliances repaired by expert technicians in Dubai. Same-day service available across all Dubai areas!
          </p>
          <Button
            onClick={onBookClick}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-10 py-6 rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all"
          >
            Book Service Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
