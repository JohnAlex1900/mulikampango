"use client";

import { Phone, Download } from "lucide-react";
import { ImageSlider } from "@/components/ui/ImageSlider";

export function Hero() {
  const sliderImages = [
    {
      src: "/images/hero-1.jpg",
      alt: "Happy African family smiling together with digital security",
    },
    {
      src: "/images/hero-2.jpg",
      alt: "Parent monitoring child safety with protective technology",
    },
    {
      src: "/images/hero-3.jpg",
      alt: "Child playing safely while parent tracks location",
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0">
        <ImageSlider images={sliderImages} interval={6000} />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Content */}
          <div className="flex flex-col gap-6 py-12 lg:py-0">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-pretty drop-shadow-lg">
                Keep Your Children Safe Online & Offline
              </h1>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed drop-shadow-md">
                Real-time monitoring, location tracking, and instant alerts.
                Give your family peace of mind with Mulikampango's trusted
                parental protection.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="tel:+254704000004"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 font-semibold transition-colors shadow-md hover:shadow-lg transform hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <a
                href="https://net.mulikampango.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-secondary text-white rounded-lg hover:bg-secondary/90 font-semibold transition-colors shadow-md hover:shadow-lg transform hover:scale-105"
              >
                <Download className="w-5 h-5" />
                Download App
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-col gap-3 pt-4">
              <p className="text-sm font-semibold text-white drop-shadow-md">
                Trusted by over 100,000 families
              </p>
              <div className="flex gap-4">
                <div className="flex items-center gap-2 text-sm text-white/90">
                  <div className="w-5 h-5 bg-accent rounded-full flex items-center justify-center text-white text-xs font-bold">
                    ✓
                  </div>
                  24/7 Support
                </div>
                <div className="flex items-center gap-2 text-sm text-white/90">
                  <div className="w-5 h-5 bg-accent rounded-full flex items-center justify-center text-white text-xs font-bold">
                    ✓
                  </div>
                  Bank-Level Security
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Empty for slider visibility */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="text-center text-white/80 drop-shadow-md">
              <p className="text-2xl font-semibold mb-2">
                Peace of Mind Starts Here
              </p>
              <p className="text-lg">
                Join families protecting their children today
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
