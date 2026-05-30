"use client";

import Link from "next/link";
import { Download, LayoutDashboard, Menu, ShieldCheck, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#05051f]/90 text-white shadow-2xl shadow-black/20 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-4">
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="h-10 w-10 rounded-full bg-[conic-gradient(from_140deg,#22d3ee,#6366f1,#ff6b6b,#22d3ee)] p-1 shadow-lg shadow-cyan-500/20">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-[#05051f]">
                <ShieldCheck className="h-5 w-5 text-cyan-200" />
              </div>
            </div>
            <span className="hidden sm:inline font-bold text-xl tracking-wide text-white">
              Mulikamtoto
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-7">
            <Link
              href="/"
              className="text-sm font-semibold text-white/75 hover:text-white transition"
            >
              Home
            </Link>
            <Link
              href="/features"
              className="text-sm font-semibold text-white/75 hover:text-white transition"
            >
              Features
            </Link>
            <a
              href="/#how-it-works"
              className="text-sm font-semibold text-white/75 hover:text-white transition"
            >
              How it works
            </a>
            <Link
              href="/about"
              className="text-sm font-semibold text-white/75 hover:text-white transition"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm font-semibold text-white/75 hover:text-white transition"
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://net.mulikampango.co.ke"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 rounded-lg bg-[#ff6767] px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-[#ff6767]/25 transition hover:bg-[#ff7b7b]"
            >
              <Download className="w-4 h-4" />
              Download
            </a>
            <a
              href="https://mimi.mulikampango.co.ke"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-2 rounded-lg border border-white/20 px-4 py-2.5 text-sm font-bold text-white/85 transition hover:bg-white/10 hover:text-white"
            >
              <LayoutDashboard className="w-4 h-4" />
              Dashboard
            </a>

            <button
              className="md:hidden rounded-lg border border-white/15 p-2 text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle navigation"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-5 flex flex-col gap-3">
            <Link
              href="/"
              className="text-sm font-semibold text-white/80 hover:text-white py-2"
            >
              Home
            </Link>
            <Link
              href="/features"
              className="text-sm font-semibold text-white/80 hover:text-white py-2"
            >
              Features
            </Link>
            <a
              href="/#how-it-works"
              className="text-sm font-semibold text-white/80 hover:text-white py-2"
            >
              How it works
            </a>
            <Link
              href="/about"
              className="text-sm font-semibold text-white/80 hover:text-white py-2"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm font-semibold text-white/80 hover:text-white py-2"
            >
              Contact
            </Link>
            <a
              href="https://net.mulikampango.co.ke"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg bg-[#ff6767] px-4 py-3 text-sm font-bold text-white"
            >
              <Download className="w-4 h-4" />
              Download App
            </a>
            <a
              href="https://mimi.mulikampango.co.ke"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-white/20 px-4 py-3 text-sm font-bold text-white"
            >
              <LayoutDashboard className="w-4 h-4" />
              Access Dashboard
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
