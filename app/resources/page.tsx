import Link from "next/link";
import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Resources | Mulikamtoto",
  description:
    "Browse guides, checklists, and tools for child safety online, cybersecurity, and secure web development.",
};

export default function ResourcesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Resources",
    description: "Guides, checklists, and tools for safer device practices.",
  };

  return (
    <>
      <JsonLd data={schema} />
      <main className="bg-[#f7f8ff] px-4 py-16 text-[#101042] sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-primary">
            Resources
          </p>
          <h1 className="mt-4 text-4xl font-black sm:text-5xl">
            Guides, checklists, and tools.
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            Guides, checklists, and tools to help families and businesses
            implement safer device practices.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <Link
              href="/child-safety-online"
              className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/70 transition hover:-translate-y-1 hover:shadow-2xl"
            >
              <h3 className="font-black group-hover:text-primary">
                Child Safety Online — Complete Guide
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Long-form pillar content covering parental controls, privacy,
                and digital wellbeing.
              </p>
            </Link>

            <Link
              href="/web-development"
              className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/70 transition hover:-translate-y-1 hover:shadow-2xl"
            >
              <h3 className="font-black group-hover:text-primary">
                Web Development & Security Guides
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Best practices for building secure web apps, backups, and
                managed hosting.
              </p>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
