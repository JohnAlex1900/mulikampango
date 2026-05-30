"use client";

import { Download, LayoutDashboard, Phone } from "lucide-react";

export function CTABanner() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-[#101042] p-8 text-white shadow-2xl shadow-indigo-950/25 sm:p-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-cyan-200">
              Ready when you are
            </p>
            <h2 className="mt-4 max-w-3xl text-4xl font-black leading-tight sm:text-5xl">
              Start protecting your child's digital world with Mulikamtoto.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-indigo-100/75">
              Download the app, open the dashboard, or call support for a guided
              family protection setup.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:min-w-64">
            <a
              href="https://net.mulikampango.co.ke"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#ff6767] px-6 py-4 font-black text-white shadow-xl shadow-[#ff6767]/20 transition hover:bg-[#ff7b7b]"
            >
              <Download className="h-5 w-5" />
              Download App
            </a>
            <a
              href="https://mimi.mulikampango.co.ke"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-4 font-black text-[#101042] transition hover:bg-cyan-50"
            >
              <LayoutDashboard className="h-5 w-5" />
              Open Dashboard
            </a>
            <a
              href="tel:+254704000004"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 px-6 py-4 font-black text-white transition hover:bg-white/10"
            >
              <Phone className="h-5 w-5" />
              Call Support
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
