'use client'

import { ShieldAlert, Eye, Bell, TrendingUp } from 'lucide-react'

const benefits = [
  {
    icon: ShieldAlert,
    title: 'Real-Time Alerts',
    description: 'Instant notifications for suspicious activity, inappropriate content, and safety concerns.',
  },
  {
    icon: Eye,
    title: 'Location Tracking',
    description: 'Know where your children are at all times with GPS tracking and geofencing.',
  },
  {
    icon: Bell,
    title: 'Screen Time Control',
    description: 'Set healthy boundaries and monitor app usage across all devices.',
  },
  {
    icon: TrendingUp,
    title: 'Behavioral Insights',
    description: 'Detailed reports and analytics to understand your child\'s digital habits.',
  },
]

export function BenefitsGrid() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Parents Trust Mulikampango
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive protection with features designed by parents and security experts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-white to-blue-50 border border-border hover:border-primary/30 transition-all hover:shadow-md"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
