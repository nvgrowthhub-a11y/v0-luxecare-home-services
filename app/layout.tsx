import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'NearMe Service | Premium Home Appliance Repair',
  description: 'Fast, Trusted & Professional Home Appliance Care. Expert AC, Fridge, Washing Machine repair services at your doorstep by certified technicians.',
  keywords: ['home appliance repair', 'AC repair', 'fridge repair', 'washing machine service', 'doorstep service'],
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
