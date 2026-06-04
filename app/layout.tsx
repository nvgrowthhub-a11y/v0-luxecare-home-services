import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'NearMe Service Dubai | Best AC Repair, Fridge Repair & Home Appliance Service in Dubai',
  description: 'Best home appliance repair service in Dubai. AC repair Dubai, Fridge repair Dubai, Washing machine service Dubai. Fast same-day doorstep service by certified technicians. Call now!',
  keywords: ['AC repair Dubai', 'Fridge repair Dubai', 'Washing machine repair Dubai', 'Home appliance repair Dubai', 'AC service near me Dubai', 'Refrigerator repair Dubai', 'Best AC technician Dubai', 'Appliance repair service Dubai', 'Same day AC repair Dubai', 'Emergency appliance repair Dubai'],
  openGraph: {
    title: 'NearMe Service Dubai | Best Home Appliance Repair',
    description: 'Professional AC, Fridge & Washing Machine repair service in Dubai. Same-day doorstep service by certified technicians.',
    locale: 'en_AE',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#1E5BFF',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
