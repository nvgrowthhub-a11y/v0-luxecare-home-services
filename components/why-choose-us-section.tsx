"use client"

import { motion } from "framer-motion"
import { Zap, Wrench, IndianRupee, MapPin } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Same Day Service",
    description: "Get your appliances fixed within hours of booking. We prioritize urgent repairs.",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: Wrench,
    title: "Expert Technicians",
    description: "Our team consists of certified professionals with years of hands-on experience.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: IndianRupee,
    title: "Affordable Pricing",
    description: "Transparent pricing with no hidden charges. Get the best value for your money.",
    color: "bg-green-50 text-green-600",
  },
  {
    icon: MapPin,
    title: "Doorstep Support",
    description: "We come to you! No need to transport heavy appliances. Service at your convenience.",
    color: "bg-primary/10 text-primary",
  },
]

export function WhyChooseUsSection() {
  return (
    <section id="why-us" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            The NearMe Service Advantage
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Experience the difference with our premium home appliance repair services.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card h-full rounded-2xl p-6 md:p-8 text-center hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/30">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center mx-auto mb-6`}
                >
                  <feature.icon className="w-8 h-8" />
                </motion.div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-pretty">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
