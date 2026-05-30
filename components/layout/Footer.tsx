"use client";

import Link from "next/link";
import { Download, LayoutDashboard, Mail, Phone, ShieldCheck } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#05051f] px-4 py-14 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-[conic-gradient(from_140deg,#22d3ee,#6366f1,#ff6767,#22d3ee)] p-1">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-[#05051f]">
                  <ShieldCheck className="h-5 w-5 text-cyan-200" />
                </div>
              </div>
              <span className="text-xl font-black">Mulikamtoto</span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-indigo-100/70">
              A modern child monitoring, parental control, mobile security, and
              device management platform for lawful, authorized protection.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://net.mulikampango.co.ke"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#ff6767] px-4 py-3 text-sm font-black text-white"
              >
                <Download className="h-4 w-4" />
                Download
              </a>
              <a
                href="https://mimi.mulikampango.co.ke"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 px-4 py-3 text-sm font-black text-white"
              >
                <LayoutDashboard className="h-4 w-4" />
                Dashboard
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-black">Platform</h3>
            <div className="mt-4 flex flex-col gap-3 text-sm text-indigo-100/70">
              <Link href="/features" className="hover:text-white">Features</Link>
              <Link href="/tools" className="hover:text-white">Tools</Link>
              <a href="/#how-it-works" className="hover:text-white">How it works</a>
              <a href="/#faq" className="hover:text-white">FAQ</a>
            </div>
          </div>

          <div>
            <h3 className="font-black">Company</h3>
            <div className="mt-4 flex flex-col gap-3 text-sm text-indigo-100/70">
              <Link href="/about" className="hover:text-white">About</Link>
              <Link href="/contact" className="hover:text-white">Contact</Link>
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
            </div>
          </div>

          <div>
            <h3 className="font-black">Contact</h3>
            <div className="mt-4 flex flex-col gap-3 text-sm text-indigo-100/75">
              <a href="tel:+254704000004" className="flex items-center gap-2 hover:text-white">
                <Phone className="h-4 w-4" />
                +254 704 000 004
              </a>
              <a href="tel:+254704000002" className="flex items-center gap-2 hover:text-white">
                <Phone className="h-4 w-4" />
                +254 704 000 002
              </a>
              <a href="mailto:info@mulikampango.co.ke" className="flex items-center gap-2 hover:text-white">
                <Mail className="h-4 w-4" />
                info@mulikampango.co.ke
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-lg border border-white/10 bg-white/[0.06] p-5 text-sm leading-7 text-indigo-100/75">
          All services and software provided by Mulikamtoto are intended
          strictly for lawful, authorized, and consent-based use only. Users are
          solely responsible for complying with local privacy, employment, child
          protection, and cybercrime laws.
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-indigo-100/60 md:flex-row md:items-center md:justify-between">
          <p>&copy; {currentYear} Mulikamtoto. All rights reserved.</p>
          <p>Secure, manage and protect devices responsibly.</p>
        </div>
      </div>
    </footer>
  );
}
