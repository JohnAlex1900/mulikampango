"use client";

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
      "Call our support team for a family protection setup, business device management, cybersecurity consultation, anti-theft configuration, or digital safety training.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="bg-[#f7f8ff] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-primary">
            FAQ
          </p>
          <h2 className="mt-4 text-4xl font-black text-[#101042] sm:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            Clear answers about lawful use, family safety, business setup, and mobile cybersecurity support.
          </p>
        </div>

        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/70 md:p-8">
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

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <a
            href="tel:+254704000004"
            className="inline-block rounded-lg bg-[#101042] px-6 py-3 font-black text-white shadow-lg shadow-indigo-950/15 transition hover:bg-primary"
          >
            Call Us Now
          </a>
        </div>
      </div>
    </section>
  );
}
