'use client'

import { CheckCircle, Shield, Eye } from 'lucide-react'

export function SafetyMessaging() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-primary/5 to-secondary/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted by Parents Nationwide
          </h2>
          <p className="text-lg text-muted-foreground">
            Mulikampango is committed to your family's safety and privacy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Privacy */}
          <div className="flex flex-col items-center text-center p-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Eye className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              Privacy First
            </h3>
            <p className="text-muted-foreground">
              We never sell your data. End-to-end encryption protects all communications and information.
            </p>
          </div>

          {/* Security */}
          <div className="flex flex-col items-center text-center p-6">
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
              <Shield className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              Bank-Level Security
            </h3>
            <p className="text-muted-foreground">
              AES-256 encryption and regular security audits keep your family data safe from threats.
            </p>
          </div>

          {/* Support */}
          <div className="flex flex-col items-center text-center p-6">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              Always Here
            </h3>
            <p className="text-muted-foreground">
              Our support team is available 24/7 to answer questions and help with any concerns.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 bg-white rounded-2xl p-8 border border-border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                What Makes Us Different
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Developed by parent experts with real-world experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Transparent pricing with no hidden fees</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Trusted by over 100,000 families worldwide</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Certifications & Compliance
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">GDPR & CCPA Compliant</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">SOC 2 Type II Certified</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">ISO 27001 Security Standard</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
