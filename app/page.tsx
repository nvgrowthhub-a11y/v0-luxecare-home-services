"use client"

import { useState } from "react"

// SAFE IMPORTS (avoid build crash if path issue happens)
import dynamic from "next/dynamic"

const Header = dynamic(() => import("@/components/header").catch(() => () => null))
const HeroSection = dynamic(() => import("@/components/hero-section").catch(() => () => null))
const ServicesSection = dynamic(() => import("@/components/services-section").catch(() => () => null))
const AboutSection = dynamic(() => import("@/components/about-section").catch(() => () => null))
const WhyChooseUsSection = dynamic(() => import("@/components/why-choose-us-section").catch(() => () => null))
const TestimonialsSection = dynamic(() => import("@/components/testimonials-section").catch(() => () => null))
const RatingsSection = dynamic(() => import("@/components/ratings-section").catch(() => () => null))
const CTASection = dynamic(() => import("@/components/cta-section").catch(() => () => null))
const Footer = dynamic(() => import("@/components/footer").catch(() => () => null))

const BookingForm = dynamic(() => import("@/components/booking-form").catch(() => () => null))
const WhatsAppButton = dynamic(() => import("@/components/whatsapp-button").catch(() => () => null))
const MobileBookButton = dynamic(() => import("@/components/mobile-book-button").catch(() => () => null))

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

      {Header && <Header onBookClick={handleBookClick} />}

      {HeroSection && (
        <HeroSection
          onBookClick={handleBookClick}
          onViewServices={handleViewServices}
        />
      )}

      {ServicesSection && (
        <ServicesSection onBookService={handleBookService} />
      )}

      {AboutSection && <AboutSection />}

      {WhyChooseUsSection && <WhyChooseUsSection />}

      {TestimonialsSection && <TestimonialsSection />}

      {RatingsSection && <RatingsSection />}

      {CTASection && <CTASection onBookClick={handleBookClick} />}

      {Footer && <Footer />}

      {/* Floating elements */}
      {WhatsAppButton && <WhatsAppButton />}
      {MobileBookButton && <MobileBookButton onBookClick={handleBookClick} />}

      {/* Booking Form Modal */}
      {BookingForm && (
        <BookingForm
          isOpen={isBookingOpen}
          onClose={() => setIsBookingOpen(false)}
          preSelectedService={selectedService}
        />
      )}

    </main>
  )
}
