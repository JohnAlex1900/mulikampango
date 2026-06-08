import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  CloudCog,
  MapPinned,
  MonitorSmartphone,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";
import { SectionBackLink } from "@/components/layout/SectionBackLink";
import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Services | Mulikamtoto",
  description:
    "Explore Mulikamtoto’s lawful, consent-based services for child safety online, mobile cybersecurity, business device management, anti-theft, training, and web development.",
  keywords: [
    "child safety online",
    "mobile security services",
    "device management",
    "web development",
    "cybersecurity",
  ],
};

const serviceCards = [
  {
    href: "/services/parental-controls",
    icon: UsersRound,
    title: "Parental Control Solutions",
    description:
      "Screen time, app blocking, consent-based location sharing, and anti-cyberbullying setup.",
    accent: "from-cyan-300 to-blue-500",
  },
  {
    href: "/services/business-device-management",
    icon: BriefcaseBusiness,
    title: "Employee Device Management",
    description:
      "Company phone setup, GPS for company devices, remote wipe, inventory, and productivity reports.",
    accent: "from-indigo-300 to-violet-500",
  },
  {
    href: "/services/mobile-cybersecurity",
    icon: ShieldCheck,
    title: "Mobile Cybersecurity",
    description:
      "Hacked phone cleanup, malware removal, privacy audits, and secure backup guidance.",
    accent: "from-emerald-300 to-teal-500",
  },
  {
    href: "/services/anti-theft",
    icon: MapPinned,
    title: "Lost Phone & Anti-Theft",
    description:
      "Phone tracking setup, remote lock/wipe setup, IMEI guidance, and anti-theft configuration.",
    accent: "from-rose-300 to-red-500",
  },
  {
    href: "/services/training",
    icon: Sparkles,
    title: "Digital Training & Awareness",
    description:
      "Workshops on securing Android phones, detecting fake apps, WhatsApp security, and online safety for children.",
    accent: "from-amber-300 to-orange-500",
  },
  {
    href: "/web-development",
    icon: CloudCog,
    title: "Web Development & Managed IT",
    description:
      "Web development, cloud backup, managed IT support, and secure deployments for small businesses.",
    accent: "from-fuchsia-300 to-pink-500",
  },
];

const stats = [
  ["6", "service pillars"],
  ["100%", "lawful, consent-first positioning"],
  ["24/7", "support mindset"],
  ["1", "place for family + business security"],
];

export default function ServicesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Mulikamtoto services",
    itemListElement: serviceCards.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `https://mulikampango.co.ke${service.href}`,
      name: service.title,
    })),
  };

  return (
    <>
      <JsonLd data={schema} />
      <main className="bg-[#05051f] text-white">
        <section className="relative isolate overflow-hidden px-4 py-8 sm:px-6 lg:px-8">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(41,125,255,0.35),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(255,103,103,0.18),transparent_24%),linear-gradient(180deg,#05051f_0%,#0b0b42_52%,#101054_100%)]" />
          <div className="mx-auto max-w-7xl">
            <div className="flex items-center justify-between gap-4">
              <SectionBackLink fallbackHref="/" label="Back" />
              <Link
                href="/faq"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold text-white backdrop-blur transition hover:bg-white/15"
              >
                Need answers?
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-8 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.28em] text-cyan-200">
                  Services
                </p>
                <h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
                  Mobile security, family safety, and device management built
                  for real-world use.
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-indigo-100/82">
                  Mulikamtoto provides lawful, consent-first services focused on
                  child safety, mobile cybersecurity, device management for
                  businesses, anti-theft, and digital safety training.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-6 py-4 text-base font-black text-white shadow-2xl shadow-emerald-500/20 transition hover:bg-emerald-500"
                  >
                    Get Security Audit
                  </Link>
                  <Link
                    href="/child-safety-online"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/10 px-6 py-4 text-base font-black text-white backdrop-blur transition hover:bg-white/15"
                  >
                    Child Safety Guide
                  </Link>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-6 rounded-[2rem] bg-cyan-400/20 blur-3xl" />
                <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 p-4 shadow-2xl shadow-black/30 backdrop-blur-xl">
                  <div className="rounded-[1.5rem] bg-[#101042] p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-200">
                          Safe service stack
                        </p>
                        <h2 className="mt-1 text-2xl font-black">
                          Built for families and organizations
                        </h2>
                      </div>
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-300/15">
                        <MonitorSmartphone className="h-6 w-6 text-cyan-200" />
                      </div>
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-3">
                      {stats.map(([value, label]) => (
                        <div key={label} className="rounded-xl bg-white/10 p-4">
                          <p className="text-3xl font-black text-white">
                            {value}
                          </p>
                          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-100/70">
                            {label}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-4 text-sm leading-7 text-indigo-100/82">
                      Every service page below links to a detailed page so users
                      can learn the scope, see what is included, and contact
                      support without guesswork.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f7f8ff] px-4 py-16 text-[#101042] sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.28em] text-primary">
                  Explore
                </p>
                <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                  Detailed services with clear next steps.
                </h2>
              </div>
              <Link
                href="/how-it-works"
                className="text-sm font-bold text-primary hover:underline"
              >
                See how the setup flow works
              </Link>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {serviceCards.map((service) => {
                const Icon = service.icon;
                return (
                  <Link
                    key={service.title}
                    href={service.href}
                    className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div
                          className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${service.accent} text-white shadow-lg`}
                        >
                          <Icon className="h-6 w-6" />
                        </div>
                        <h3 className="mt-5 text-xl font-black text-[#101042] group-hover:text-primary">
                          {service.title}
                        </h3>
                      </div>
                      <ArrowRight className="mt-1 h-5 w-5 text-slate-300 transition group-hover:translate-x-1 group-hover:text-primary" />
                    </div>
                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      {service.description}
                    </p>
                  </Link>
                );
              })}
            </div>

            <div className="mt-8 rounded-3xl bg-[#101042] p-8 text-white shadow-2xl shadow-indigo-950/20">
              <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.28em] text-cyan-200">
                    Need help choosing?
                  </p>
                  <h2 className="mt-3 text-3xl font-black">
                    Start with a security audit or a family protection setup.
                  </h2>
                  <p className="mt-4 max-w-2xl text-indigo-100/80 leading-7">
                    If you are not sure which service fits your case, use the
                    contact page and we’ll route you to the right setup flow,
                    whether that is child safety, anti-theft, mobile recovery,
                    or business device management.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-4 text-sm font-black text-[#101042] transition hover:bg-indigo-50"
                  >
                    Talk to Support
                  </Link>
                  <Link
                    href="/resources"
                    className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/10 px-6 py-4 text-sm font-black text-white backdrop-blur transition hover:bg-white/15"
                  >
                    Browse Resources
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
