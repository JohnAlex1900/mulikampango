"use client";

import { CheckCircle2, FileCheck2, Scale, ShieldCheck } from "lucide-react";

const safeUse = [
  "Use only on devices you own, manage, or have proper consent to configure.",
  "Tell users when family or company device safety settings are active.",
  "Follow local privacy, employment, child protection, and cybercrime laws.",
];

const avoid = [
  "Covert tracking or unauthorized monitoring.",
  "Phone intrusion, fake hacker branding, or illegal access.",
  "Marketing that targets relationship surveillance or privacy invasion.",
];

export function SafetyMessaging() {
  return (
    <section className="bg-[#05051f] px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-cyan-300/15">
              <Scale className="h-7 w-7 text-cyan-200" />
            </div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-cyan-200">
              Legal-safe positioning
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
              Sophisticated does not need to be risky.
            </h2>
            <p className="mt-5 text-lg leading-8 text-indigo-100/75">
              Mulikamtoto is presented as a responsible child monitoring and
              mobile security platform. The message is premium, clear, and
              protective without promising hidden access or unlawful use.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-emerald-300/20 bg-emerald-300/10 p-6">
              <div className="mb-5 flex items-center gap-3">
                <ShieldCheck className="h-6 w-6 text-emerald-200" />
                <h3 className="text-xl font-black">We support</h3>
              </div>
              <ul className="space-y-4">
                {safeUse.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-emerald-50/85">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-200" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg border border-[#ff6767]/30 bg-[#ff6767]/10 p-6">
              <div className="mb-5 flex items-center gap-3">
                <FileCheck2 className="h-6 w-6 text-[#ffb4b4]" />
                <h3 className="text-xl font-black">We avoid</h3>
              </div>
              <ul className="space-y-4">
                {avoid.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-rose-50/85">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#ffb4b4]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-lg border border-white/10 bg-white/[0.06] p-6 text-sm leading-7 text-indigo-100/80">
          All services and software provided by Mulikamtoto are intended
          strictly for lawful, authorized, and consent-based use only. Users are
          solely responsible for complying with applicable laws.
        </div>
      </div>
    </section>
  );
}
