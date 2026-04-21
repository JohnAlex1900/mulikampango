"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is Mulikampango legal to use?",
    answer:
      "Yes, Mulikampango is fully legal when used by parents/guardians to monitor their own minor children. Parental monitoring apps are designed for family safety and are protected by family law in most jurisdictions.",
  },
  {
    question: "How long does installation take?",
    answer:
      "Installation typically takes less than 5 minutes. Download the app from your store, create an account, and follow the simple setup wizard. No technical knowledge required.",
  },
  {
    question: "Is my child's privacy protected?",
    answer:
      "Absolutely. All data is encrypted with AES-256 military-grade encryption. We comply with GDPR, CCPA, and all privacy regulations. We never sell data to third parties.",
  },
  {
    question: "What devices does it support?",
    answer:
      "Mulikampango works on iOS, Android, Windows, and macOS. Monitor all your family's devices from a single dashboard accessible on any browser.",
  },
  {
    question: "Can my child detect the app?",
    answer:
      "The app can be installed in stealth mode on supported devices, making it invisible from the home screen while still monitoring in the background.",
  },
  {
    question: "What if I need help?",
    answer:
      "Our support team is available 24/7 via phone, email, and live chat. We also have a comprehensive knowledge base with video tutorials and guides.",
  },
];

export function FAQ() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Got questions? We've got answers. Check out the most common
            questions from our community.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-border p-6 md:p-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
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
            className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 font-semibold transition-colors shadow-md hover:shadow-lg"
          >
            Call Us Now
          </a>
        </div>
      </div>
    </section>
  );
}
