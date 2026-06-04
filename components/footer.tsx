"use client"

import Link from "next/link"
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react"

const WHATSAPP_NUMBER = "918796493504"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">N</span>
              </div>
              <span className="font-bold text-xl">
                NearMe <span className="text-primary">Service</span>
              </span>
            </div>
            <p className="text-background/70 mb-6 text-pretty">
              Your trusted partner for all home appliance repair and maintenance services in Dubai. Fast, reliable, and professional service across all Dubai areas.
            </p>
            <div className="flex gap-4">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-[#25D366] flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-3">
              {[
                "AC Repair Dubai",
                "Fridge Repair Dubai",
                "Washing Machine Service Dubai",
                "Home Appliance Repair Dubai",
              ].map((service) => (
                <li key={service}>
                  <Link href="#services" className="text-background/70 hover:text-primary transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "#home" },
                { name: "About Us", href: "#about" },
                { name: "Services", href: "#services" },
                { name: "Reviews", href: "#reviews" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-background/70 hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-background/70">Call Us</p>
                  <a href="tel:+918796493504" className="hover:text-primary transition-colors">
                    +91 87964 93504
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-background/70">Email Us</p>
                  <a href="mailto:support@nearmeservice.com" className="hover:text-primary transition-colors">
                    support@nearmeservice.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-background/70">Location</p>
                  <p>Dubai, UAE - All Areas Covered</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 text-center text-background/50">
          <p>&copy; {currentYear} NearMe Service. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
