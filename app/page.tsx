"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { WhyChooseUsSection } from "@/components/why-choose-us-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { RatingsSection } from "@/components/ratings-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { BookingForm } from "@/components/booking-form"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { MobileBookButton } from "@/components/mobile-book-button"

export default function HomePage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [selectedService, setSelectedService] = useState("")

  const handleBookClick = () => {
    setSelectedService("")
    setIsBookingOpen(true)
  }

  const handleBookService = (service: string) => {
    setSelectedService(service)
    setIsBookingOpen(true)
  }

  const handleViewServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <main className="min-h-screen">
      <Header onBookClick={handleBookClick} />
      
      <HeroSection 
        onBookClick={handleBookClick} 
        onViewServices={handleViewServices} 
      />
      
      <ServicesSection onBookService={handleBookService} />
      
      <AboutSection />
      
      <WhyChooseUsSection />
      
      <TestimonialsSection />
      
      <RatingsSection />
      
      <CTASection onBookClick={handleBookClick} />
      
      <Footer />

      {/* Floating elements */}
      <WhatsAppButton />
      <MobileBookButton onBookClick={handleBookClick} />

      {/* Booking Form Modal */}
      <BookingForm
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preSelectedService={selectedService}
      />
    </main>
  )
}
