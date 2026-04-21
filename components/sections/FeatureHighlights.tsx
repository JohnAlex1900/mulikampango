'use client'

import { MapPin, Zap, Lock, Users } from 'lucide-react'

const features = [
  {
    icon: MapPin,
    title: 'GPS Location Tracking',
    description: 'Real-time GPS location with geofencing alerts. Know when your child arrives at school, work, or leaves designated safe zones.',
    details: ['Accurate to 5 meters', 'Geofence alerts', 'Location history'],
  },
  {
    icon: Zap,
    title: 'Instant Alert System',
    description: 'Get push notifications instantly for dangerous behavior, inappropriate content, and emergency situations.',
    details: ['Real-time alerts', 'Custom triggers', 'Emergency contacts'],
  },
  {
    icon: Lock,
    title: 'Privacy & Security',
    description: 'Military-grade encryption protects all data. Your family\'s privacy is our top priority.',
    details: ['AES-256 encryption', 'GDPR compliant', 'Zero tracking'],
  },
  {
    icon: Users,
    title: 'Multi-Device Support',
    description: 'Monitor all family devices from one dashboard. Perfect for families with multiple children.',
    details: ['iOS & Android', 'Windows & Mac', 'Web dashboard'],
  },
]

export function FeatureHighlights() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Powerful Features Built for Family Safety
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every feature is designed with your family's safety and privacy in mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="p-8 rounded-2xl bg-gradient-to-br from-white to-blue-50 border border-border hover:shadow-lg transition-all hover:border-primary/30"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {feature.details.map((detail, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
                        >
                          {detail}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
