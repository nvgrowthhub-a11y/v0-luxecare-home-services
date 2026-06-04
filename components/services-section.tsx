"use client"

import { motion } from "framer-motion"
import { Snowflake, Refrigerator, WashingMachine, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Snowflake,
    title: "AC Repair & Service",
    description: "Expert AC repair, gas refilling, cleaning & installation services for all brands and models.",
    color: "bg-blue-50 text-blue-600",
    value: "AC Repair",
  },
  {
    icon: Refrigerator,
    title: "Fridge Repair & Maintenance",
    description: "Professional refrigerator repair for single door, double door, and side-by-side fridges.",
    color: "bg-cyan-50 text-cyan-600",
    value: "Fridge Repair",
  },
  {
    icon: WashingMachine,
    title: "Washing Machine Service",
    description: "Complete washing machine repair for front load, top load, and semi-automatic models.",
    color: "bg-indigo-50 text-indigo-600",
    value: "Washing Machine",
  },
  {
    icon: Wrench,
    title: "Home Appliance Full Repair",
    description: "Comprehensive repair services for all your home appliances including geyser, microwave & more.",
    color: "bg-primary/10 text-primary",
    value: "Other",
  },
]

export function ServicesSection({ onBookService }: { onBookService: (service: string) => void }) {
  return (
    <section id="services" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Professional Home Appliance Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            We provide expert repair and maintenance services for all major home appliances with guaranteed satisfaction.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group"
            >
              <div className="bg-card h-full rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/30">
                <div className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6 text-pretty">{service.description}</p>
                <Button
                  onClick={() => onBookService(service.value)}
                  variant="ghost"
                  className="text-primary hover:text-primary hover:bg-primary/10 p-0 h-auto font-semibold"
                >
                  Book Now →
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
