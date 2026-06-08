"use client";

import Link from "next/link";
import { ArrowRight, Mail, Phone, ShieldCheck } from "lucide-react";

export function CTABanner() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-[#101042] p-8 text-white shadow-2xl shadow-indigo-950/25 sm:p-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-indigo-100/80">
              <ShieldCheck className="h-4 w-4 text-cyan-200" />
              Free initial consultation for lawful use
            </div>
            <h2 className="mt-4 max-w-3xl text-4xl font-black leading-tight sm:text-5xl">
              Start with the right setup, not a generic sales pitch.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-indigo-100/75">
              Tell us whether you need child safety, device management, mobile
              cybersecurity, or web development support and we’ll guide you to
              the next step.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:min-w-72">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#ff6767] px-6 py-4 font-black text-white shadow-xl shadow-[#ff6767]/20 transition hover:bg-[#ff7b7b]"
            >
              Request consultation
              <ArrowRight className="h-5 w-5" />
            </Link>
            <a
              href="tel:+254704000004"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-4 font-black text-[#101042] transition hover:bg-cyan-50"
            >
              <Phone className="h-5 w-5" />
              Call now
            </a>
            <a
              href="mailto:info@mulikampango.co.ke"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 px-6 py-4 font-black text-white transition hover:bg-white/10"
            >
              <Mail className="h-5 w-5" />
              Email us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
