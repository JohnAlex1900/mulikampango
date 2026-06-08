"use client";

import {
  Activity,
  BellRing,
  Download,
  LayoutDashboard,
  MapPin,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

const insightCards = [
  {
    icon: MapPin,
    title: "Know they arrived safely",
    copy: "Consent-based location sharing, safe zones, and check-ins for school, home, and travel.",
  },
  {
    icon: BellRing,
    title: "Get alerts that matter",
    copy: "Spot risky app patterns, unusual device activity, and anti-theft events without constant checking.",
  },
  {
    icon: Activity,
    title: "Guide healthier screen time",
    copy: "Set routines for study, sleep, worship, meals, and focused family time.",
  },
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#05051f] text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(41,125,255,0.35),transparent_32%),radial-gradient(circle_at_80%_10%,rgba(255,103,103,0.18),transparent_28%),linear-gradient(180deg,#05051f_0%,#0b0b42_58%,#101054_100%)]" />
      <div className="absolute bottom-0 left-0 right-0 -z-10 h-72 bg-[linear-gradient(135deg,rgba(77,58,255,0.45),rgba(34,211,238,0.2),rgba(255,103,103,0.2))] opacity-80 [clip-path:polygon(0_55%,12%_70%,30%_42%,48%_68%,67%_32%,82%_48%,100%_26%,100%_100%,0_100%)]" />

      <div className="mx-auto grid min-h-[calc(100vh-72px)] max-w-7xl grid-cols-1 items-center gap-12 px-4 pb-20 pt-16 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8 lg:pt-20">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-white/10 px-4 py-2 text-sm font-bold text-cyan-100 backdrop-blur">
            <ShieldCheck className="h-4 w-4" />
            Modern child monitoring for responsible parents
          </div>

          <h1 className="max-w-3xl text-5xl font-black leading-[1.02] tracking-normal text-white sm:text-6xl lg:text-7xl">
            The child safety app for families who stay one step ahead.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-indigo-100/85">
            Mulikamtoto gives parents a clear control panel for screen time, app
            boundaries, consent-based location sharing, anti-theft setup, and
            digital safety alerts. Built for lawful, authorized family
            protection.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-6 py-4 text-base font-black text-white shadow-2xl transition hover:bg-emerald-500"
            >
              Get Security Audit
            </a>
            <a
              href="/services/parental-controls"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/10 px-6 py-4 text-base font-black text-white transition hover:bg-white/15"
            >
              Family Protection Setup
            </a>
            <a
              href="/services/business-device-management"
              className="hidden sm:inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 py-4 text-base font-black text-white transition hover:bg-white/12"
            >
              Business Device Management
            </a>
          </div>

          <div className="mt-10 grid max-w-2xl grid-cols-3 gap-4 text-center">
            {[
              ["5", "Core safety tools"],
              ["24/7", "Support mindset"],
              ["10+", "Years experience"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-lg border border-white/10 bg-white/10 p-4 backdrop-blur"
              >
                <p className="text-2xl font-black text-white">{value}</p>
                <p className="mt-1 text-xs font-semibold text-indigo-100/70">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="absolute -inset-6 rounded-[2rem] bg-cyan-400/20 blur-3xl" />
          <div className="relative rounded-[2rem] border border-white/15 bg-white/10 p-4 shadow-2xl shadow-black/40 backdrop-blur-xl">
            <div className="rounded-[1.5rem] bg-[#101042] p-4">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-200">
                    Live family dashboard
                  </p>
                  <p className="mt-1 text-xl font-black">
                    Child Safety Overview
                  </p>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-300/15">
                  <Smartphone className="h-5 w-5 text-cyan-200" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-lg bg-[#1b1b6a] p-4">
                  <p className="text-xs font-semibold text-indigo-100/60">
                    Screen time
                  </p>
                  <p className="mt-2 text-3xl font-black">2h 15m</p>
                  <div className="mt-4 h-2 rounded-full bg-white/10">
                    <div className="h-2 w-2/3 rounded-full bg-cyan-300" />
                  </div>
                </div>
                <div className="rounded-lg bg-[#1b1b6a] p-4">
                  <p className="text-xs font-semibold text-indigo-100/60">
                    Safe zone
                  </p>
                  <p className="mt-2 text-3xl font-black">Home</p>
                  <p className="mt-4 text-xs font-bold text-emerald-300">
                    Checked in
                  </p>
                </div>
              </div>

              <div className="mt-3 space-y-3">
                {insightCards.map((card) => {
                  const Icon = card.icon;
                  return (
                    <div
                      key={card.title}
                      className="flex gap-3 rounded-lg bg-white p-4 text-[#101042]"
                    >
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#eff6ff]">
                        <Icon className="h-5 w-5 text-[#2563eb]" />
                      </div>
                      <div>
                        <p className="font-black">{card.title}</p>
                        <p className="mt-1 text-sm leading-5 text-slate-600">
                          {card.copy}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
