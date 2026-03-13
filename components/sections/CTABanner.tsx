"use client";

import { Phone, Download } from "lucide-react";

export function CTABanner() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-secondary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          Protect Your Family Today
        </h2>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Join over 100,000 families who trust Mulikampango to keep their
          children safe. Start your free trial now.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://net.mulikampango.co.ke"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary rounded-lg hover:bg-gray-100 font-bold text-lg transition-colors shadow-lg"
          >
            <Download className="w-5 h-5" />
            Download App
          </a>
          <a
            href="tel:+254704000004"
            className="flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white rounded-lg hover:bg-accent/90 font-bold text-lg transition-colors shadow-lg"
          >
            <Phone className="w-5 h-5" />
            Call Now
          </a>
        </div>

        <p className="text-white/80 text-sm mt-6">
          No credit card required. Free for the first 14 days.
        </p>
      </div>
    </section>
  );
}
