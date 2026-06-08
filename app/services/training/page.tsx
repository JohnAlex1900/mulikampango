import type { Metadata } from "next";
import {
  BookOpenText,
  MessageSquareWarning,
  ShieldAlert,
  Smartphone,
} from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { ServiceDetailPage } from "@/components/sections/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Digital Training & Awareness | Mulikamtoto",
  description:
    "Practical digital safety training for Android security, fake apps, WhatsApp compromise signs, and family safety awareness.",
  keywords: [
    "digital safety training",
    "android security",
    "fake app detection",
    "WhatsApp compromise",
    "online safety awareness",
  ],
  openGraph: {
    title: "Digital Training & Awareness | Mulikamtoto",
    description:
      "Workshops and guides to help families and businesses stay safe online.",
    type: "article",
  },
};

const pageData = {
  eyebrow: "Digital Training & Awareness",
  title: "Practical digital safety training for families and businesses.",
  description:
    "Workshops and guides to empower families and businesses to stay safe online.",
  primaryCta: { href: "/contact", label: "Book training" },
  secondaryCta: { href: "/blog", label: "Read articles" },
  heroMetricLabel: "Training format",
  heroMetricValue: "Workshops, checklists, and guided setup sessions.",
  highlightPoints: [
    "Android security",
    "Family safety awareness",
    "Recovery habits",
  ],
  cards: [
    {
      icon: Smartphone,
      title: "Android security",
      description: "Permissions, updates, app hygiene, and safer defaults.",
      accent: "from-indigo-300 to-violet-500",
    },
    {
      icon: ShieldAlert,
      title: "Fake app detection",
      description: "How to spot suspicious installs and risky behavior.",
      accent: "from-cyan-300 to-blue-500",
    },
    {
      icon: MessageSquareWarning,
      title: "WhatsApp compromise signs",
      description: "Warning signs and recovery steps for families and teams.",
      accent: "from-rose-300 to-red-500",
    },
    {
      icon: BookOpenText,
      title: "Guided learning",
      description: "Structured sessions that move from awareness to action.",
      accent: "from-emerald-300 to-teal-500",
    },
  ],
  benefits: [
    "How to secure Android phones and app permissions.",
    "How to detect fake and malicious apps.",
    "Signs a WhatsApp account was compromised.",
    "Secure backup and recovery practices.",
  ],
  comparisonRows: [
    {
      label: "Before training",
      before: "People guess which settings matter.",
      after: "Clear, guided steps they can follow.",
    },
    {
      label: "Awareness",
      before: "Generic security advice.",
      after: "Practical device-specific habits.",
    },
    {
      label: "Recovery",
      before: "No structured response plan.",
      after: "A simple recovery and backup routine.",
    },
  ],
  faqs: [
    {
      question: "Do you offer group training?",
      answer:
        "Yes. We can run family, school, or workplace training sessions depending on the audience and the safety goals.",
    },
    {
      question: "Is this only for parents?",
      answer:
        "No. We support parents, guardians, schools, and businesses that need practical device safety training.",
    },
    {
      question: "Will I leave with a checklist?",
      answer:
        "Yes. Our sessions are designed to end with actionable steps and a simple plan for what to do next.",
    },
  ],
  testimonial: {
    quote:
      "The training turned security from a vague idea into a practical routine our team could follow.",
    author: "Workshop attendee",
    role: "Digital safety training",
  },
  caseStudy: {
    title: "Family safety workshop",
    summary:
      "We ran a guided session for parents who wanted a clearer approach to phone safety, app habits, and account recovery.",
    results: [
      "Parents left with a written action plan.",
      "Children’s devices were set up with safer defaults.",
      "Backup and recovery routines were defined.",
    ],
  },
  relatedLinks: [
    { href: "/child-safety-online", label: "Child Safety Online" },
    { href: "/resources", label: "Safety resources" },
    { href: "/contact", label: "Book a workshop" },
  ],
  backHref: "/services",
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Digital Training & Awareness",
  serviceType: "Digital safety workshops and training",
  provider: { "@type": "Organization", name: "Mulikamtoto" },
  areaServed: "KE",
  description:
    "Practical digital safety training for Android security, fake apps, WhatsApp compromise signs, and family safety awareness.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: pageData.faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function Training() {
  return (
    <>
      <JsonLd data={[schema, faqSchema]} />
      <ServiceDetailPage {...pageData} />
    </>
  );
}
