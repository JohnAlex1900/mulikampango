"use client";

import {
  AppWindow,
  BellRing,
  Clock3,
  LockKeyhole,
  MapPinned,
  MessageCircleWarning,
} from "lucide-react";

const benefits = [
  {
    icon: AppWindow,
    title: "See app activity clearly",
    description:
      "Understand which apps are being used, how often, and where boundaries may be needed.",
    color: "from-cyan-400 to-blue-600",
  },
  {
    icon: Clock3,
    title: "Shape screen habits",
    description:
      "Create routines for school nights, study time, bedtime, meals, and device-free family moments.",
    color: "from-violet-400 to-indigo-700",
  },
  {
    icon: MapPinned,
    title: "Know they are safe",
    description:
      "Use consent-based location sharing and safe zones for school, home, travel, and emergencies.",
    color: "from-emerald-300 to-cyan-600",
  },
  {
    icon: BellRing,
    title: "Get smart alerts",
    description:
      "Receive focused notifications for risky patterns, device issues, and anti-theft events.",
    color: "from-[#ff6767] to-orange-500",
  },
  {
    icon: MessageCircleWarning,
    title: "Reduce online risk",
    description:
      "Support cyberbullying awareness, scam detection, fake app checks, and safer messaging habits.",
    color: "from-fuchsia-400 to-purple-700",
  },
  {
    icon: LockKeyhole,
    title: "Protect privacy",
    description:
      "Audit permissions, secure backups, remove suspicious apps, and harden child devices.",
    color: "from-sky-300 to-indigo-600",
  },
];

export function BenefitsGrid() {
  return (
    <section className="bg-[#101054] px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-cyan-200">
            Meet Mulikamtoto
          </p>
          <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
            The monitoring toolkit parents actually understand.
          </h2>
          <p className="mt-4 text-lg leading-8 text-indigo-100/75">
            A sophisticated control panel for child safety, without risky
            hidden-surveillance positioning. Clear settings, useful insights,
            and support for lawful family protection.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="group overflow-hidden rounded-lg border border-white/10 bg-white/[0.07] p-6 shadow-xl shadow-black/10 transition hover:-translate-y-1 hover:bg-white/[0.1]"
              >
                <div className={`mb-8 h-28 rounded-lg bg-gradient-to-br ${benefit.color} p-5`}>
                  <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-white/20 backdrop-blur">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-black">{benefit.title}</h3>
                <p className="mt-3 leading-7 text-indigo-100/75">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
