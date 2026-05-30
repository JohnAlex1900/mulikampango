import type { Metadata } from 'next'

import './globals.css'

export const metadata: Metadata = {
  title: 'Mulikamtoto - Mobile Security, Family Safety & Device Management',
  description: 'Secure, manage and protect devices legally and responsibly with Mulikamtoto family safety, parental controls, business device management, anti-theft setup, and mobile cybersecurity services.',
  keywords: 'parental control, child online safety, mobile security, business device management, anti-theft setup, cybersecurity services',
  generator: 'v0.app',
  openGraph: {
    title: 'Mulikamtoto - Mobile Security & Family Safety',
    description: 'Lawful, authorized and consent-based digital protection for families and businesses.',
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
