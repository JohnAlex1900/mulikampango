"use client";

import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-foreground font-bold text-lg">M</span>
              </div>
              <span className="font-bold text-lg">Mulikampango</span>
            </div>
            <p className="text-sm text-gray-300">
              Protecting families through smart monitoring and real-time safety
              alerts.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded flex items-center justify-center transition"
              >
                f
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded flex items-center justify-center transition"
              >
                𝕏
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded flex items-center justify-center transition"
              >
                IG
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-lg">Product</h3>
            <div className="flex flex-col gap-2">
              <a
                href="/features"
                className="text-sm text-gray-300 hover:text-white transition"
              >
                Features
              </a>
              <a
                href="https://net.mulikampango.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-300 hover:text-white transition"
              >
                Download App
              </a>
              <a
                href="https://mimi.mulikampango.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-300 hover:text-white transition"
              >
                Access Dashboard
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-lg">Company</h3>
            <div className="flex flex-col gap-2">
              <a
                href="/about"
                className="text-sm text-gray-300 hover:text-white transition"
              >
                About Us
              </a>
              <a
                href="#"
                className="text-sm text-gray-300 hover:text-white transition"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm text-gray-300 hover:text-white transition"
              >
                Terms of Service
              </a>
              <a
                href="/contact"
                className="text-sm text-gray-300 hover:text-white transition"
              >
                Contact Support
              </a>
            </div>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-lg">Contact Us</h3>
            <a
              href="tel:+254704000004"
              className="flex items-center gap-2 text-sm text-white font-semibold hover:text-secondary transition"
            >
              <Phone className="w-4 h-4 flex-shrink-0" />
              +254 704 000 004
            </a>
            <div className="flex flex-col gap-1">
              <p className="text-xs text-gray-400">Other numbers:</p>
              <a
                href="tel:+254704000002"
                className="flex items-center gap-2 text-xs text-gray-300 hover:text-white transition"
              >
                <Phone className="w-3 h-3 flex-shrink-0" />
                +254 704 000 002
              </a>
              <a
                href="tel:+254780000004"
                className="flex items-center gap-2 text-xs text-gray-300 hover:text-white transition"
              >
                <Phone className="w-3 h-3 flex-shrink-0" />
                +254 780 000 004
              </a>
              <a
                href="tel:+254780000002"
                className="flex items-center gap-2 text-xs text-gray-300 hover:text-white transition"
              >
                <Phone className="w-3 h-3 flex-shrink-0" />
                +254 780 000 002
              </a>
            </div>
            <a
              href="mailto:info@mulikampango.com"
              className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition mt-2"
            >
              <Mail className="w-4 h-4 flex-shrink-0" />
              info@mulikampango.com
            </a>
          </div>
        </div>

        <div className="mt-10 mb-12 rounded-xl border border-white/10 bg-white/5 px-6 py-5">
          <h3 className="text-sm font-semibold text-white">
            Kids Shield Disclaimer
          </h3>
          <div className="mt-3 space-y-3 text-sm text-gray-300 leading-relaxed">
            <p>
              Kids Shield service software is designed for monitoring your
              children on a smartphone you own or have proper consent to
              monitor. You must notify users of the mobile phone that they are
              being monitored by Kids Shield service. Failure to do so may
              result in the breaking of federal and state laws. If you install
              Kids Shield service software onto a phone device that you do not
              own or have proper consent to monitor, we will fully cooperate
              with law officials to the fullest extent possible.
            </p>
            <p>
              All trademarks on this site are property of their respective
              owners. Mentioned trademarks are used solely for the purpose of
              describing smartphone and carrier compatibility for our mobile
              phone monitoring software.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-300">
              &copy; {currentYear} Mulikampango. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-sm text-gray-300 hover:text-white transition"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-sm text-gray-300 hover:text-white transition"
              >
                Terms
              </a>
              <a
                href="#"
                className="text-sm text-gray-300 hover:text-white transition"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
