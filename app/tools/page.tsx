import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { FloatingCallButton } from '@/components/layout/FloatingCallButton'
import { Download, BarChart3, Lock, Smartphone } from 'lucide-react'

export const metadata = {
  title: 'Tools & Dashboard - Mulikampango',
  description: 'Access your Mulikampango dashboard and download the mobile app to start monitoring and protecting your family.',
}

export default function ToolsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Tools & Resources
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Access your dashboard and download the Mulikampango app to start protecting your family today.
            </p>
          </div>
        </section>

        {/* Showcase Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Powerful Tools Built for Modern Families
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Get everything you need to protect your family in one comprehensive platform
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/features-showcase.jpg"
                alt="Mulikampango dashboard and monitoring tools showcase"
                width={1200}
                height={600}
                className="w-full h-auto object-cover"
                priority
                quality={90}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
          </div>
        </section>

        {/* Main Tools Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
              Access Your Tools
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Dashboard */}
              <a
                href="https://mimi.mulikampango.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-8 rounded-2xl bg-gradient-to-br from-white to-blue-50 border-2 border-border hover:border-primary/50 hover:shadow-lg transition-all"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <BarChart3 className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-3">
                  Parent Dashboard
                </h2>
                <p className="text-muted-foreground mb-6">
                  Access your personal dashboard to monitor all your children's devices in real-time. View activity reports, set boundaries, and manage alerts from anywhere.
                </p>
                <div className="space-y-2 mb-6">
                  <p className="text-sm font-semibold text-foreground flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Real-time activity monitoring
                  </p>
                  <p className="text-sm font-semibold text-foreground flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Location tracking & geofencing
                  </p>
                  <p className="text-sm font-semibold text-foreground flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    App & screen time management
                  </p>
                  <p className="text-sm font-semibold text-foreground flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    24/7 alerts & notifications
                  </p>
                </div>
                <div className="inline-block px-6 py-3 bg-primary text-white rounded-lg font-semibold group-hover:bg-primary/90 transition-colors">
                  Access Dashboard →
                </div>
              </a>

              {/* Mobile App */}
              <Link
                href="/download"
                className="group p-8 rounded-2xl bg-gradient-to-br from-white to-blue-50 border-2 border-border hover:border-secondary/50 hover:shadow-lg transition-all"
              >
                <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                  <Download className="w-8 h-8 text-secondary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-3">
                  Mobile App
                </h2>
                <p className="text-muted-foreground mb-6">
                  Download the Mulikampango app on your child's device to enable full monitoring capabilities. Fast setup, powerful protection, easy to use.
                </p>
                <div className="space-y-2 mb-6">
                  <p className="text-sm font-semibold text-foreground flex items-center gap-2">
                    <span className="w-2 h-2 bg-secondary rounded-full"></span>
                    Available on iOS & Android
                  </p>
                  <p className="text-sm font-semibold text-foreground flex items-center gap-2">
                    <span className="w-2 h-2 bg-secondary rounded-full"></span>
                    Quick 5-minute setup
                  </p>
                  <p className="text-sm font-semibold text-foreground flex items-center gap-2">
                    <span className="w-2 h-2 bg-secondary rounded-full"></span>
                    Lightweight & battery efficient
                  </p>
                  <p className="text-sm font-semibold text-foreground flex items-center gap-2">
                    <span className="w-2 h-2 bg-secondary rounded-full"></span>
                    Stealth mode available
                  </p>
                </div>
                <div className="inline-block px-6 py-3 bg-secondary text-white rounded-lg font-semibold group-hover:bg-secondary/90 transition-colors">
                  Download Now →
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Getting Started Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
              Getting Started Guide
            </h2>

            <div className="space-y-6">
              {[
                {
                  number: 1,
                  title: 'Create Your Parent Account',
                  description: 'Sign up for your free parent account at the dashboard. Takes less than 2 minutes.',
                },
                {
                  number: 2,
                  title: 'Download the Mobile App',
                  description: 'Download the Mulikampango app from the App Store or Google Play on your child\'s device.',
                },
                {
                  number: 3,
                  title: 'Complete Installation',
                  description: 'Follow the setup wizard to complete installation and link the device to your parent account.',
                },
                {
                  number: 4,
                  title: 'Configure Settings',
                  description: 'Set up monitoring preferences, geofences, alerts, and content filters through your dashboard.',
                },
                {
                  number: 5,
                  title: 'Start Monitoring',
                  description: 'Your child\'s device is now monitored. View activity, location, and receive instant alerts.',
                },
              ].map((step, index) => (
                <div key={index} className="flex gap-6 p-6 bg-white rounded-xl border border-border">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary text-white font-bold">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* System Requirements */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
              System Requirements
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* iOS Requirements */}
              <div className="p-8 rounded-2xl bg-gradient-to-br from-white to-blue-50 border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <Smartphone className="w-6 h-6 text-primary" />
                  iOS Requirements
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <span className="text-primary font-bold mt-1">•</span>
                    iOS 12.0 or later
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <span className="text-primary font-bold mt-1">•</span>
                    Compatible with iPhone and iPad
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <span className="text-primary font-bold mt-1">•</span>
                    50MB free storage space
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <span className="text-primary font-bold mt-1">•</span>
                    Active internet connection
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <span className="text-primary font-bold mt-1">•</span>
                    Location services enabled
                  </li>
                </ul>
              </div>

              {/* Android Requirements */}
              <div className="p-8 rounded-2xl bg-gradient-to-br from-white to-blue-50 border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <Smartphone className="w-6 h-6 text-secondary" />
                  Android Requirements
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <span className="text-secondary font-bold mt-1">•</span>
                    Android 6.0 or later
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <span className="text-secondary font-bold mt-1">•</span>
                    1GB RAM minimum (2GB recommended)
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <span className="text-secondary font-bold mt-1">•</span>
                    75MB free storage space
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <span className="text-secondary font-bold mt-1">•</span>
                    Active internet connection
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <span className="text-secondary font-bold mt-1">•</span>
                    Location services enabled
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-secondary">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Access your dashboard or download the app now. Your family's safety is just minutes away.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/download"
                className="px-8 py-3 bg-white text-primary rounded-lg hover:bg-gray-100 font-bold transition-colors"
              >
                Download App
              </Link>
              <a
                href="https://mimi.mulikampango.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 font-bold transition-colors"
              >
                Access Dashboard
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCallButton />
    </>
  )
}
