"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Ahmed Al Maktoum",
    location: "Dubai Marina",
    rating: 5,
    review: "Excellent service! The technician arrived on time and fixed my AC within an hour. Very professional and affordable. Best AC repair service in Dubai!",
  },
  {
    name: "Sarah Johnson",
    location: "Downtown Dubai",
    rating: 5,
    review: "My washing machine was making strange noises. The NearMe Service team diagnosed and fixed the issue quickly. Great customer service in Dubai!",
  },
  {
    name: "Mohammed Al Rashid",
    location: "JBR Dubai",
    rating: 5,
    review: "Best fridge repair service in Dubai. The technician was knowledgeable and explained everything clearly. Fair pricing too!",
  },
  {
    name: "Fatima Hassan",
    location: "Palm Jumeirah",
    rating: 5,
    review: "Booked through WhatsApp and got same-day service. The technician was very courteous and skilled. Highly recommend for Dubai residents!",
  },
  {
    name: "John Smith",
    location: "Business Bay Dubai",
    rating: 5,
    review: "Outstanding experience! They repaired my microwave which other technicians said could not be fixed. True experts in Dubai!",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToPrev = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <section id="reviews" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Join thousands of satisfied customers in Dubai who trust NearMe Service for their home appliance needs.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-card rounded-3xl p-8 md:p-12 shadow-lg border border-border"
              >
                <Quote className="w-12 h-12 text-primary/20 mb-6" />
                <p className="text-lg md:text-xl text-foreground mb-8 text-pretty leading-relaxed">
                  {`"${testimonials[currentIndex].review}"`}
                </p>
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <h4 className="font-semibold text-foreground text-lg">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-muted-foreground">{testimonials[currentIndex].location}</p>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={goToPrev}
              className="p-3 rounded-full bg-muted hover:bg-muted/80 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false)
                    setCurrentIndex(index)
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-primary w-8"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={goToNext}
              className="p-3 rounded-full bg-muted hover:bg-muted/80 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
