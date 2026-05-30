"use client";

import { Download, LayoutDashboard, Settings2, ShieldCheck } from "lucide-react";

const steps = [
  {
    icon: ShieldCheck,
    title: "Create your family setup",
    description:
      "Confirm that the device is owned, managed, or authorized, then choose the child safety profile you need.",
  },
  {
    icon: Download,
    title: "Download and connect",
    description:
      "Use the same app download link, follow the guided setup, and connect the device to your parent account.",
  },
  {
    icon: Settings2,
    title: "Set the boundaries",
    description:
      "Configure screen time, app controls, web safety, location sharing, alerts, backup, and anti-theft settings.",
  },
  {
    icon: LayoutDashboard,
    title: "Review the dashboard",
    description:
      "Open the dashboard to see clear summaries, adjust rules, and keep your family safety plan current.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-primary">
              3 minute mental model
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight text-[#101042] sm:text-5xl">
              Get started without feeling like you need to be a technician.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Mulikamtoto should feel like a polished product, not a confusing
              utility. The setup flow explains what to connect, what each
              permission does, and how to keep every use lawful and consent-based.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 px-6 py-4 font-black text-[#101042] transition hover:bg-slate-50"
              >
                <LayoutDashboard className="h-5 w-5" />
                Dashboard
              </a>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className="rounded-lg border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/70"
                >
                  <div className="mb-8 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#eef2ff]">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-5xl font-black text-slate-100">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-black text-[#101042]">{step.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
