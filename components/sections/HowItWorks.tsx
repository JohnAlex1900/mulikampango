"use client";

import {
  Download,
  Smartphone,
  Settings,
  BarChart3,
  Shield,
} from "lucide-react";
import Link from "next/link";

const steps = [
  {
    number: 1,
    icon: Download,
    title: "Download & Install",
    description: "Get the Mulikampango app from your app store in seconds.",
    cta: "Download App",
    ctaLink: "https://net.mulikampango.co.ke",
  },
  {
    number: 2,
    icon: Smartphone,
    title: "Set Up Devices",
    description:
      "Install monitoring on your child's device in under 5 minutes.",
    cta: null,
  },
  {
    number: 3,
    icon: Settings,
    title: "Configure Settings",
    description:
      "Customize alerts, set screen time limits, and geofencing boundaries.",
    cta: "Access Dashboard",
    ctaLink: "https://mimi.mulikampango.co.ke",
  },
  {
    number: 4,
    icon: BarChart3,
    title: "Monitor Activity",
    description:
      "View real-time activity reports and get instant alerts on your phone.",
    cta: null,
  },
  {
    number: 5,
    icon: Shield,
    title: "Stay Protected",
    description: "Enjoy peace of mind knowing your family is safe 24/7.",
    cta: null,
  },
];

export function HowItWorks() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get started in minutes and protect your family from day one.
          </p>
        </div>

        {/* Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="flex flex-col items-center">
                {/* Step Card */}
                <div className="w-full mb-4">
                  <div className="relative bg-white rounded-xl border-2 border-primary/20 hover:border-primary/50 transition-colors p-6 h-full flex flex-col items-center text-center shadow-sm hover:shadow-md">
                    {/* Step Number Badge */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                        {step.number}
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mt-2">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>

                    {/* Content */}
                    <h3 className="font-bold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground flex-grow mb-4">
                      {step.description}
                    </p>

                    {/* CTA if applicable */}
                    {step.cta && (
                      <a
                        href={step.ctaLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-primary hover:text-primary/80 transition inline-flex items-center gap-1"
                      >
                        {step.cta} →
                      </a>
                    )}
                  </div>
                </div>

                {/* Connector Line - Hidden on mobile and last item */}
                {index < steps.length - 1 && (
                  <div className="hidden md:flex w-full h-8 items-end mb-4">
                    <div className="w-full h-1 bg-gradient-to-r from-primary to-secondary/50"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to protect your family?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://net.mulikampango.co.ke"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 font-semibold transition-colors shadow-md hover:shadow-lg"
            >
              Download App Now
            </a>
            <a
              href="tel:+254704000004"
              className="px-6 py-3 bg-white border-2 border-primary text-primary rounded-lg hover:bg-primary/5 font-semibold transition-colors"
            >
              Call for Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
