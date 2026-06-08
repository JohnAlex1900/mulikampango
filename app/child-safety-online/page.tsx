import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Child Safety Online — Mulikamtoto",
  description:
    "Comprehensive guide to keeping children safe online: parental controls, privacy, spotting scams, and healthy device habits.",
};

export default function ChildSafetyPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Child Safety Online",
    description:
      "Comprehensive guide to keeping children safe online: parental controls, privacy, spotting scams, and healthy device habits.",
  };

  return (
    <>
      <JsonLd data={schema} />
      <main className="bg-[#f7f8ff] text-[#101042]">
        <section className="bg-[#05051f] px-4 py-16 text-white sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-cyan-200">
              Child Safety Online
            </p>
            <h1 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
              A practical guide to protecting children online.
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-indigo-100/82">
              Expert guidance for parents, guardians, and educators to protect
              children on mobile devices and online services.
            </p>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-start">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/70">
              <h2 className="text-2xl font-black">Overview</h2>
              <p className="mt-3 text-slate-600">
                This pillar covers practical steps, tools, and policies to build
                safe digital routines for children.
              </p>

              <h2 className="mt-8 text-2xl font-black">Key Topics</h2>
              <ul className="mt-4 ml-6 list-disc text-slate-600">
                <li>Parental controls and screen time management</li>
                <li>App safety and permissions</li>
                <li>Consent-based location sharing</li>
                <li>Recognizing scams and compromised accounts</li>
                <li>Digital wellbeing and healthy device habits</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-[#101042] p-8 text-white shadow-xl shadow-slate-200/70">
              <h2 className="text-2xl font-black">Start here</h2>
              <p className="mt-3 text-indigo-100/80">
                Use the links below to move from awareness to practical setup.
              </p>
              <div className="mt-6 space-y-3">
                <a
                  href="/how-it-works"
                  className="block rounded-xl border border-white/10 bg-white/10 px-4 py-3 hover:bg-white/15"
                >
                  How it works
                </a>
                <a
                  href="/services/parental-controls"
                  className="block rounded-xl border border-white/10 bg-white/10 px-4 py-3 hover:bg-white/15"
                >
                  Parental controls
                </a>
                <a
                  href="/faq"
                  className="block rounded-xl border border-white/10 bg-white/10 px-4 py-3 hover:bg-white/15"
                >
                  FAQ
                </a>
                <a
                  href="/contact"
                  className="block rounded-xl bg-white px-4 py-3 font-black text-[#101042] hover:bg-indigo-50"
                >
                  Contact support
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 pb-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl rounded-3xl bg-white p-8 shadow-xl shadow-slate-200/70">
            <h2 className="text-2xl font-black">Resources & Guides</h2>
            <p className="mt-3 text-slate-600">
              See our step-by-step guides for Android security, WhatsApp account
              safety, and age-appropriate content filtering in the Resources
              section.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
