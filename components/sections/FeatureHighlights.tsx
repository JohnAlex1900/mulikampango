"use client";

import {
  BellRing,
  CalendarClock,
  Cloud,
  Eye,
  FileSearch,
  Map,
  MessageSquareText,
  ShieldAlert,
} from "lucide-react";

const features = [
  { icon: MessageSquareText, title: "Message safety signals", detail: "Help parents notice bullying, scams, or risky conversations." },
  { icon: Map, title: "Pinpoint safe zones", detail: "Location sharing, check-ins, and family-approved places." },
  { icon: CalendarClock, title: "Plans and routines", detail: "Screen time schedules for sleep, study, and device-free moments." },
  { icon: FileSearch, title: "App and web review", detail: "Understand searches, sites, apps, and digital behavior patterns." },
  { icon: BellRing, title: "Smart alerts", detail: "Relevant notifications without overwhelming the parent." },
  { icon: ShieldAlert, title: "Anti-theft setup", detail: "Remote lock, wipe readiness, IMEI guidance, and backup support." },
  { icon: Cloud, title: "Backup recovery", detail: "Secure photos, contacts, documents, and phone recovery basics." },
  { icon: Eye, title: "Privacy audits", detail: "Review permissions, remove suspicious apps, and harden accounts." },
];

export function FeatureHighlights() {
  return (
    <section className="overflow-hidden bg-[#f7f8ff] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-primary">
              Control panel
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight text-[#101042] sm:text-5xl">
              Powerful technology baked into one calm dashboard.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              The experience should feel like a modern monitoring platform:
              fast to scan, easy to adjust, and focused on child safety rather
              than fear-based claims.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="flex gap-3 rounded-lg bg-white p-4 shadow-sm">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#eef2ff]">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-black text-[#101042]">{feature.title}</p>
                      <p className="mt-1 text-sm leading-5 text-slate-600">{feature.detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-cyan-300/30 to-indigo-500/20 blur-3xl" />
            <div className="relative rounded-[2rem] bg-[#05051f] p-4 shadow-2xl shadow-indigo-950/30">
              <div className="rounded-[1.5rem] bg-white p-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-primary">
                      Today
                    </p>
                    <h3 className="mt-1 text-2xl font-black text-[#101042]">
                      Safety summary
                    </h3>
                  </div>
                  <div className="rounded-lg bg-emerald-50 px-3 py-2 text-sm font-black text-emerald-700">
                    Protected
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  {[
                    ["Apps reviewed", "18"],
                    ["Safe zones", "4"],
                    ["Alerts", "2"],
                    ["Backups", "On"],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-lg bg-slate-50 p-4">
                      <p className="text-xs font-bold text-slate-500">{label}</p>
                      <p className="mt-2 text-2xl font-black text-[#101042]">{value}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 rounded-lg bg-[#101054] p-4 text-white">
                  <p className="font-black">Recommended action</p>
                  <p className="mt-2 text-sm leading-6 text-indigo-100/80">
                    Review new app permissions and adjust screen time before
                    school night mode starts at 8:30 PM.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
