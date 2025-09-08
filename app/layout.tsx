import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Adrilink Limited - Your Global Logistics Partner',
  description: 'Comprehensive logistics solutions including international freight forwarding, customs clearance, and transportation services across East Africa and beyond.',
  keywords: 'logistics, freight forwarding, customs clearance, air freight, sea freight, warehousing, East Africa logistics, Kenya logistics',
  authors: [{ name: 'Adrilink Limited' }],
  creator: 'Adrilink Limited',
  metadataBase: new URL('https://www.adrilink.com'),
  icons: {
    icon: [
      {
        url: '/adrilink-logo.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/adrilink-logo.png',
        sizes: '16x16',
        type: 'image/png',
      }
    ],
    apple: [
      {
        url: '/adrilink-logo.png',
        sizes: '180x180',
        type: 'image/png',
      }
    ],
    shortcut: ['/adrilink-logo.png'],
  },
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    title: 'Adrilink Limited - Your Global Logistics Partner',
    description: 'Leading logistics provider in East Africa offering comprehensive freight forwarding and customs clearance services.',
    siteName: 'Adrilink Limited',
    images: [
      {
        url: '/adrilink-logo.png',
        width: 800,
        height: 600,
        alt: 'Adrilink Limited Logo',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adrilink Limited - Your Global Logistics Partner',
    description: 'Leading logistics provider in East Africa offering comprehensive freight forwarding and customs clearance services.',
    images: ['/adrilink-logo.png'],
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}> 
  {/* Modern Navbar */}
  <Header />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
