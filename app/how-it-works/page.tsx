import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingCallButton } from "@/components/layout/FloatingCallButton";
import { SectionBackLink } from "@/components/layout/SectionBackLink";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  Download,
  LayoutDashboard,
  Settings2,
  ShieldCheck,
} from "lucide-react";

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
      "Use the same app download flow, follow the guided setup, and connect the device to your parent or admin account.",
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
      "Open the dashboard to see summaries, adjust rules, and keep your family safety or business policy current.",
  },
];

export const metadata = {
  title: "How It Works - Mulikamtoto",
  description:
    "Learn how Mulikamtoto works for child safety online, lawful parental controls, mobile cybersecurity, and business device management.",
};

export default function HowItWorksPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How Mulikamtoto works",
    description:
      "A simple setup flow for family safety and lawful device management.",
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.title,
      text: step.description,
    })),
  };

  return (
    <>
      <JsonLd data={schema} />
      <Header />
      <main>
        <section className="relative isolate overflow-hidden bg-[#05051f] px-4 py-8 text-white sm:px-6 lg:px-8">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(41,125,255,0.35),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(255,103,103,0.18),transparent_24%),linear-gradient(180deg,#05051f_0%,#0b0b42_52%,#101054_100%)]" />
          <div className="mx-auto max-w-5xl">
            <SectionBackLink
              fallbackHref="/services"
              label="Back to services"
            />
            <p className="mt-8 text-sm font-black uppercase tracking-[0.28em] text-cyan-200">
              How it works
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight sm:text-5xl">
              A simple setup flow for family safety and lawful device
              management.
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-indigo-100/80">
              Mulikamtoto is designed to feel clear, practical, and
              consent-first. The goal is to help parents, guardians, and
              businesses understand the tools they are using and how to use them
              responsibly.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-6 py-4 font-black text-white transition hover:bg-emerald-500"
              >
                Get Security Audit
              </a>
              <a
                href="/services/parental-controls"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/10 px-6 py-4 font-black text-white transition hover:bg-white/15"
              >
                Family Protection Setup
              </a>
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 xl:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <article
                  key={step.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/70"
                >
                  <div className="mb-8 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#eef2ff]">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-5xl font-black text-slate-100">
                      {index + 1}
                    </span>
                  </div>
                  <h2 className="text-xl font-black text-[#101042]">
                    {step.title}
                  </h2>
                  <p className="mt-3 leading-7 text-slate-600">
                    {step.description}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="bg-[#f7f8ff] px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-start">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-primary">
                What you can configure
              </p>
              <h2 className="mt-4 text-4xl font-black leading-tight text-[#101042]">
                Child safety, privacy, and business controls in one place.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Parents can set screen time, app blocking, safe zones, and
                content rules. Businesses can configure device inventory, remote
                lock or wipe readiness, and reporting for company-owned phones.
              </p>
              <div className="mt-8 space-y-4 text-slate-700">
                <p>• Consent-based location sharing and geofencing</p>
                <p>• Anti-cyberbullying and digital wellbeing setup</p>
                <p>• Privacy audits and secure backup configuration</p>
                <p>• Mobile cybersecurity support for compromised devices</p>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl shadow-slate-200/70">
              <h3 className="text-2xl font-black text-[#101042]">
                Who this page is for
              </h3>
              <div className="mt-6 space-y-5 text-slate-600 leading-7">
                <p>
                  Parents and guardians who want structured child safety tools
                  without covert monitoring.
                </p>
                <p>
                  Employers who need clear device policies for company phones,
                  with lawful notice and accountability.
                </p>
                <p>
                  Anyone who needs device hardening, scam recovery, anti-theft
                  setup, or practical digital training.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCallButton />
    </>
  );
}
