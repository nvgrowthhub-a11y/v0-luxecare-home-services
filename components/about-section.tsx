"use client"

import { motion } from "framer-motion"
import { Award, Users, Clock, Shield } from "lucide-react"

const features = [
  {
    icon: Award,
    title: "10+ Years Experience",
    description: "Over a decade of trusted service",
  },
  {
    icon: Users,
    title: "Certified Experts",
    description: "Trained & verified technicians",
  },
  {
    icon: Clock,
    title: "Fast Doorstep Service",
    description: "Same day service available",
  },
  {
    icon: Shield,
    title: "Service Warranty",
    description: "30-day service guarantee",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Who We Are
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              We are a professional home appliance service company providing fast, reliable and affordable repair solutions at your doorstep. With over 10 years of experience, our certified technicians deliver quality service you can trust.
            </p>
            <p className="text-muted-foreground mb-8 text-pretty">
              Our mission is to make home appliance repairs hassle-free. We understand the inconvenience of a broken appliance, which is why we offer same-day service and transparent pricing with no hidden charges.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl p-8">
                <div className="w-full h-full bg-card rounded-2xl shadow-xl flex items-center justify-center border border-border">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                      <Shield className="w-12 h-12 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">100% Satisfaction</h3>
                    <p className="text-muted-foreground">Guaranteed quality service or your money back</p>
                  </div>
                </div>
              </div>

              {/* Stats badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-6 bg-card shadow-xl rounded-2xl p-5 border border-border"
              >
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">5000+</p>
                  <p className="text-sm text-muted-foreground">Happy Customers</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
