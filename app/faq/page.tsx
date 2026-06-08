import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingCallButton } from "@/components/layout/FloatingCallButton";
import { SectionBackLink } from "@/components/layout/SectionBackLink";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is Mulikamtoto legal to use?",
    answer:
      "Mulikamtoto services are intended strictly for lawful, authorized, and consent-based use only. Parents, guardians, and businesses must comply with local privacy, employment, and cybercrime laws.",
  },
  {
    question: "What can parents use it for?",
    answer:
      "Parents can set screen time boundaries, block apps or websites, configure safer search, review usage patterns, and set up location sharing for child safety.",
  },
  {
    question: "Do you support business device management?",
    answer:
      "Yes. We help set up company-owned phones, device inventory, location and usage policies, remote lock or wipe readiness, and productivity reporting where legally permitted.",
  },
  {
    question: "Can you help with hacked phones or WhatsApp issues?",
    answer:
      "We provide mobile cybersecurity support, including suspicious app review, malware cleanup guidance, privacy audits, secure backup setup, scam detection, and WhatsApp recovery guidance.",
  },
  {
    question: "Do you offer unauthorized monitoring?",
    answer:
      "No. Mulikamtoto is not positioned for covert tracking, unauthorized access, or unlawful surveillance. All services require ownership, authorization, or proper consent.",
  },
  {
    question: "What if I need help?",
    answer:
      "Call our support team for family protection setup, business device management, cybersecurity consultation, anti-theft configuration, or digital safety training.",
  },
];

export const metadata = {
  title: "FAQ - Mulikamtoto",
  description:
    "Frequently asked questions about child safety online, parental controls, lawful use, business device management, and cybersecurity support.",
};

export default function FAQPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <JsonLd data={schema} />
      <Header />
      <main>
        <section className="relative isolate overflow-hidden bg-[#f7f8ff] px-4 py-8 sm:px-6 lg:px-8">
          <div className="absolute inset-x-0 top-0 -z-10 h-40 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.12),transparent_60%)]" />
          <div className="mx-auto max-w-4xl">
            <SectionBackLink
              fallbackHref="/services"
              label="Back to services"
              className="border-slate-200 bg-white/80 text-[#101042]"
            />
          </div>
          <div className="mx-auto mt-8 max-w-4xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-primary">
              FAQ
            </p>
            <h1 className="mt-4 text-4xl font-black text-[#101042] sm:text-5xl">
              Frequently Asked Questions
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">
              Clear answers about lawful use, family safety, business setup,
              mobile cybersecurity, and what Mulikamtoto can help with.
            </p>
          </div>
        </section>

        <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/70 md:p-8">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
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

          <div className="mx-auto mt-12 max-w-4xl rounded-2xl bg-[#05051f] p-8 text-center text-white">
            <h2 className="text-2xl font-black">Still have questions?</h2>
            <p className="mt-3 text-indigo-100/75">
              Contact us for child safety setup, cybersecurity guidance, or
              business device management support.
            </p>
            <a
              href="/contact"
              className="mt-6 inline-flex items-center justify-center rounded-lg bg-emerald-600 px-6 py-3 font-black text-white transition hover:bg-emerald-500"
            >
              Contact Support
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCallButton />
    </>
  );
}
