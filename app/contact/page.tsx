import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingCallButton } from "@/components/layout/FloatingCallButton";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { ContactLeadForm } from "@/components/sections/ContactLeadForm";

export const metadata = {
  title: "Contact Mulikamtoto",
  description:
    "Request a child safety, device management, mobile security, or web development consultation from Mulikamtoto.",
};

const serviceHighlights = [
  {
    title: "Child safety setup",
    copy: "Screen time, app blocking, safe zones, and online safety routines for families.",
  },
  {
    title: "Business device management",
    copy: "Policies, inventory, remote wipe readiness, and lawful device management for company phones.",
  },
  {
    title: "Web development & IT",
    copy: "Secure websites, hosting, backups, and managed IT support for organizations that need a premium presence.",
  },
];

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="bg-[#f7f8ff] text-[#101042]">
        <section className="relative isolate overflow-hidden bg-[#05051f] px-4 py-16 text-white sm:px-6 lg:px-8">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(41,125,255,0.35),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(255,103,103,0.18),transparent_24%),linear-gradient(180deg,#05051f_0%,#0b0b42_52%,#101054_100%)]" />
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-cyan-200">
                Contact
              </p>
              <h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
                Start with a security audit, then we’ll guide you to the right
                setup.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-indigo-100/82">
                Choose the service you need, send a detailed inquiry, and we’ll
                follow up with the next steps for lawful family safety, business
                device management, or secure web support.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="tel:+254704000004"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-6 py-4 font-black text-white transition hover:bg-emerald-500"
                >
                  <Phone className="h-5 w-5" />
                  Call now
                </a>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/10 px-6 py-4 font-black text-white transition hover:bg-white/15"
                >
                  Browse services
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {[
                  ["24/7", "Support mindset"],
                  ["6", "Service families"],
                  ["1 day", "Typical response target"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur"
                  >
                    <p className="text-2xl font-black text-white">{value}</p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-100/70">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <ContactLeadForm />
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
            {serviceHighlights.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/70"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#eef2ff] text-primary">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl font-black text-[#101042]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.copy}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="px-4 pb-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div className="rounded-3xl bg-[#101042] p-8 text-white shadow-2xl shadow-indigo-950/20">
              <p className="text-sm font-black uppercase tracking-[0.28em] text-cyan-200">
                Fast response
              </p>
              <h2 className="mt-3 text-3xl font-black">Need urgent help?</h2>
              <p className="mt-4 max-w-2xl leading-7 text-indigo-100/80">
                If you are dealing with a compromised phone, a child safety
                issue, or a lost business device, call us directly so we can
                point you to the right path immediately.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/70">
              <div className="space-y-4 text-slate-700">
                <div className="flex items-start gap-3">
                  <Phone className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <p className="font-black text-[#101042]">Call support</p>
                    <p>+254 704 000 004 or +254 704 000 002</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <p className="font-black text-[#101042]">Email</p>
                    <p>info@mulikampango.co.ke</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <p className="font-black text-[#101042]">Service area</p>
                    <p>Remote support and guided setup for lawful use</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <p className="font-black text-[#101042]">Response target</p>
                    <p>We aim to reply within one business day.</p>
                  </div>
                </div>
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
