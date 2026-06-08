import Link from "next/link";
import { ArrowRight, Check, ChevronRight, Star } from "lucide-react";
import type { ComponentType } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export type ServiceComparisonRow = {
  label: string;
  before: string;
  after: string;
};

export type ServiceFaqItem = {
  question: string;
  answer: string;
};

export type ServiceDetailPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: { href: string; label: string };
  secondaryCta: { href: string; label: string };
  heroMetricLabel: string;
  heroMetricValue: string;
  highlightPoints: string[];
  cards: Array<{
    icon: ComponentType<{ className?: string }>;
    title: string;
    description: string;
    accent: string;
  }>;
  benefits: string[];
  comparisonRows: ServiceComparisonRow[];
  faqs: ServiceFaqItem[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
  caseStudy: {
    title: string;
    summary: string;
    results: string[];
  };
  relatedLinks: Array<{ href: string; label: string }>;
  backHref: string;
  backLabel?: string;
};

export function ServiceDetailPage({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  heroMetricLabel,
  heroMetricValue,
  highlightPoints,
  cards,
  benefits,
  comparisonRows,
  faqs,
  testimonial,
  caseStudy,
  relatedLinks,
  backHref,
  backLabel = "Back",
}: ServiceDetailPageProps) {
  return (
    <main className="bg-[#f7f8ff] text-[#101042]">
      <section className="relative isolate overflow-hidden bg-[#05051f] px-4 py-8 text-white sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(41,125,255,0.35),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(255,103,103,0.18),transparent_24%),linear-gradient(180deg,#05051f_0%,#0b0b42_52%,#101054_100%)]" />
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between gap-4">
            <Link
              href={backHref}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold text-white backdrop-blur transition hover:bg-white/15"
            >
              <ChevronRight className="h-4 w-4 rotate-180" />
              {backLabel}
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold text-white backdrop-blur transition hover:bg-white/15"
            >
              Talk to support
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-cyan-200">
                {eyebrow}
              </p>
              <h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
                {title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-indigo-100/82">
                {description}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={primaryCta.href}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-6 py-4 text-base font-black text-white shadow-2xl shadow-emerald-500/20 transition hover:bg-emerald-500"
                >
                  {primaryCta.label}
                </Link>
                <Link
                  href={secondaryCta.href}
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/10 px-6 py-4 text-base font-black text-white backdrop-blur transition hover:bg-white/15"
                >
                  {secondaryCta.label}
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {highlightPoints.map((point) => (
                  <span
                    key={point}
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-indigo-100/80 backdrop-blur"
                  >
                    <Check className="h-4 w-4 text-cyan-200" />
                    {point}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 rounded-[2rem] bg-cyan-400/20 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 p-4 shadow-2xl shadow-black/30 backdrop-blur-xl">
                <div className="rounded-[1.5rem] bg-[#101042] p-5 text-white">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-200">
                        Live service snapshot
                      </p>
                      <h2 className="mt-1 text-2xl font-black">
                        {heroMetricValue}
                      </h2>
                    </div>
                    <div className="rounded-2xl bg-cyan-300/15 px-4 py-3 text-right">
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-100/80">
                        {heroMetricLabel}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {cards.map((card) => {
                      const Icon = card.icon;
                      return (
                        <div
                          key={card.title}
                          className="rounded-2xl bg-white p-4 text-[#101042] shadow-lg shadow-black/10"
                        >
                          <div
                            className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${card.accent} text-white`}
                          >
                            <Icon className="h-5 w-5" />
                          </div>
                          <p className="mt-4 font-black">{card.title}</p>
                          <p className="mt-1 text-sm leading-6 text-slate-600">
                            {card.description}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-start">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/70">
              <p className="text-sm font-black uppercase tracking-[0.28em] text-primary">
                Why this service matters
              </p>
              <h2 className="mt-3 text-3xl font-black">
                The practical outcomes.
              </h2>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex gap-3 rounded-2xl bg-[#f7f8ff] p-4"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eef2ff]">
                      <Star className="h-5 w-5 text-primary" />
                    </div>
                    <p className="text-sm leading-7 text-slate-700">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-[#101042] p-8 text-white shadow-xl shadow-slate-200/70">
              <p className="text-sm font-black uppercase tracking-[0.28em] text-cyan-200">
                Case study
              </p>
              <h2 className="mt-3 text-3xl font-black">{caseStudy.title}</h2>
              <p className="mt-4 text-indigo-100/80 leading-7">
                {caseStudy.summary}
              </p>
              <div className="mt-6 space-y-3">
                {caseStudy.results.map((result) => (
                  <div
                    key={result}
                    className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm leading-7 text-indigo-100/85"
                  >
                    {result}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="rounded-3xl border border-slate-200 bg-[#f7f8ff] p-8 shadow-xl shadow-slate-200/70">
              <p className="text-sm font-black uppercase tracking-[0.28em] text-primary">
                Comparison
              </p>
              <h2 className="mt-3 text-3xl font-black text-[#101042]">
                Before vs after working with Mulikamtoto.
              </h2>
              <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-50 text-xs uppercase tracking-[0.18em] text-slate-500">
                    <tr>
                      <th className="px-4 py-3">Area</th>
                      <th className="px-4 py-3">Before</th>
                      <th className="px-4 py-3">After</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row) => (
                      <tr
                        key={row.label}
                        className="border-t border-slate-200 align-top"
                      >
                        <td className="px-4 py-4 font-bold text-[#101042]">
                          {row.label}
                        </td>
                        <td className="px-4 py-4 leading-6 text-slate-600">
                          {row.before}
                        </td>
                        <td className="px-4 py-4 leading-6 text-slate-700">
                          {row.after}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/70">
              <p className="text-sm font-black uppercase tracking-[0.28em] text-primary">
                Frequently asked questions
              </p>
              <h2 className="mt-3 text-3xl font-black text-[#101042]">
                Common questions answered clearly.
              </h2>
              <Accordion type="single" collapsible className="mt-6 w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={faq.question} value={`faq-${index}`}>
                    <AccordionTrigger className="py-5 text-left text-lg font-black text-[#101042] hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="pb-5 leading-7 text-slate-600">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f8ff] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
            <div className="rounded-3xl bg-[#101042] p-8 text-white shadow-2xl shadow-indigo-950/20">
              <p className="text-sm font-black uppercase tracking-[0.28em] text-cyan-200">
                Testimonial
              </p>
              <blockquote className="mt-4 text-2xl font-black leading-tight">
                “{testimonial.quote}”
              </blockquote>
              <p className="mt-6 text-indigo-100/80">
                {testimonial.author} · {testimonial.role}
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/70">
              <p className="text-sm font-black uppercase tracking-[0.28em] text-primary">
                Next step
              </p>
              <h2 className="mt-3 text-3xl font-black text-[#101042]">
                Related links
              </h2>
              <div className="mt-6 grid gap-3">
                {relatedLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="inline-flex items-center justify-between rounded-2xl border border-slate-200 bg-[#f7f8ff] px-4 py-4 font-semibold text-[#101042] transition hover:border-primary hover:bg-white hover:text-primary"
                  >
                    {link.label}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
