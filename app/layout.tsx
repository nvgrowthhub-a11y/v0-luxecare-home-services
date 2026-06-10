import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'AC Repair Dubai | 24/7 Emergency AC Repair & Maintenance Services',

  description:
    'Professional AC Repair Dubai services. 24/7 emergency AC repair, AC maintenance, AC installation and AC gas refilling across Dubai. Same-day service by certified technicians.',

  keywords: [
    'AC Repair Dubai',
    'Emergency AC Repair Dubai',
    'AC Maintenance Dubai',
    'AC Installation Dubai',
    'AC Gas Refill Dubai',
    'Split AC Repair Dubai',
    'Central AC Repair Dubai',
    '24/7 AC Repair Dubai',
    'AC Technician Dubai',
    'Best AC Repair Dubai'
  ],

  openGraph: {
    title: 'AC Repair Dubai | Professional AC Repair Services',
    description:
      'Fast and affordable AC repair, maintenance and installation services across Dubai. Available 24/7.',
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
