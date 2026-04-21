"use client";

import Link from "next/link";
import { Phone, Download, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <span className="hidden sm:inline font-bold text-lg text-foreground">
              Mulikampango
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm font-medium text-foreground hover:text-primary transition"
            >
              Home
            </Link>
            <Link
              href="/features"
              className="text-sm font-medium text-foreground hover:text-primary transition"
            >
              Features
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-foreground hover:text-primary transition"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-foreground hover:text-primary transition"
            >
              Contact
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Phone Icon with Tooltip */}
            <a
              href="tel:+254704000004"
              className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-accent hover:bg-accent/80 transition"
              title="Call us"
            >
              <Phone className="w-5 h-5 text-white" />
            </a>

            {/* Download Button */}
            <a
              href="https://net.mulikampango.co.ke"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 px-4 py-2 bg-secondary text-white rounded-lg hover:bg-secondary/90 transition font-medium text-sm"
            >
              <Download className="w-4 h-4" />
              Download
            </a>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-3">
            <Link
              href="/"
              className="text-sm font-medium text-foreground hover:text-primary py-2"
            >
              Home
            </Link>
            <Link
              href="/features"
              className="text-sm font-medium text-foreground hover:text-primary py-2"
            >
              Features
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-foreground hover:text-primary py-2"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-foreground hover:text-primary py-2"
            >
              Contact
            </Link>
            <a
              href="tel:+1234567890"
              className="flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/80 transition font-medium text-sm"
            >
              <Phone className="w-4 h-4" />
              Call Us
            </a>
            <a
              href="https://net.mulikampango.co.ke"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-secondary text-white rounded-lg hover:bg-secondary/90 transition font-medium text-sm"
            >
              <Download className="w-4 h-4" />
              Download App
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
