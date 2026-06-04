"use client"

import { useState, type FormEvent } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, CheckCircle, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface BookingFormProps {
  isOpen: boolean
  onClose: () => void
  preSelectedService?: string
}

const WHATSAPP_NUMBER = "918796493504"

export function BookingForm({ isOpen, onClose, preSelectedService = "" }: BookingFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    service: preSelectedService,
    issue: "",
    date: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Format the WhatsApp message
    const message = `🛠️ *New Service Booking - NearMe Service*

*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Address:* ${formData.address}
*Service:* ${formData.service}
*Issue:* ${formData.issue}
*Preferred Date:* ${formData.date}

_Sent from NearMe Service Website_`

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`

    // Simulate processing time
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)

      // Open WhatsApp
      window.open(whatsappUrl, "_blank")

      // Reset after showing success
      setTimeout(() => {
        setIsSuccess(false)
        setFormData({
          name: "",
          phone: "",
          address: "",
          service: "",
          issue: "",
          date: "",
        })
        onClose()
      }, 2000)
    }, 1000)
  }

  // Update preSelectedService when it changes
  if (preSelectedService && preSelectedService !== formData.service) {
    setFormData((prev) => ({ ...prev, service: preSelectedService }))
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-foreground/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-lg bg-card rounded-2xl shadow-2xl z-50 overflow-hidden max-h-[90vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="sticky top-0 bg-card border-b border-border p-6 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-foreground">Book Service</h2>
                <p className="text-muted-foreground text-sm">Fill the form below to book your service</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-muted rounded-full transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>

            {/* Form */}
            <div className="p-6">
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Booking Submitted!</h3>
                  <p className="text-muted-foreground">Redirecting to WhatsApp...</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-foreground mb-2">
                      Address *
                    </label>
                    <input
                      type="text"
                      id="address"
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      placeholder="Enter your Dubai area/location"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                      Service Type *
                    </label>
                    <select
                      id="service"
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    >
                      <option value="">Select a service</option>
                      <option value="AC Repair">AC Repair & Service</option>
                      <option value="Fridge Repair">Fridge Repair & Maintenance</option>
                      <option value="Washing Machine">Washing Machine Service</option>
                      <option value="Other">Other Home Appliance</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="issue" className="block text-sm font-medium text-foreground mb-2">
                      Issue Description *
                    </label>
                    <textarea
                      id="issue"
                      required
                      rows={3}
                      value={formData.issue}
                      onChange={(e) => setFormData({ ...formData, issue: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                      placeholder="Describe the issue with your appliance"
                    />
                  </div>

                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-foreground mb-2">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      id="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 rounded-xl text-lg font-semibold mt-6"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin mr-2" />
                        Submitting...
                      </>
                    ) : (
                      "Submit Booking"
                    )}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
