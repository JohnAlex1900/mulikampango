import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import './globals.css'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mulikampango - Parental Monitoring & Child Safety | Protect Your Family',
  description: 'Keep your children safe with Mulikampango. Real-time monitoring, location tracking, app control, and 24/7 alerts. Trusted by 100,000+ families. Free trial available.',
  keywords: 'parental control, monitoring app, child safety, location tracking, family protection',
  generator: 'v0.app',
  openGraph: {
    title: 'Mulikampango - Parental Monitoring & Child Safety',
    description: 'Advanced child safety and parental monitoring. Real-time alerts, location tracking, and complete device control.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
