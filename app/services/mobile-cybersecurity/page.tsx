import type { Metadata } from "next";
import { CloudCheck, ShieldCheck, Trash2, TriangleAlert } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { ServiceDetailPage } from "@/components/sections/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Mobile Cybersecurity | Mulikamtoto",
  description:
    "Practical mobile cybersecurity support for hacked phones, malware removal, scam detection, and secure backups.",
  keywords: [
    "mobile cybersecurity",
    "hacked phone cleanup",
    "malware removal",
    "scam detection",
    "secure backup",
  ],
  openGraph: {
    title: "Mobile Cybersecurity | Mulikamtoto",
    description:
      "Recover and harden phones after compromise with lawful, practical support.",
    type: "article",
  },
};

const pageData = {
  eyebrow: "Mobile Cybersecurity",
  title: "Recover, harden, and protect phones after a security incident.",
  description: "Practical help to recover and secure devices after compromise.",
  primaryCta: { href: "/contact", label: "Get audit" },
  secondaryCta: { href: "/resources", label: "Guides" },
  heroMetricLabel: "Incident response",
  heroMetricValue: "Cleanup, hardening, and recovery planning in one flow.",
  highlightPoints: [
    "Malware cleanup",
    "WhatsApp recovery guidance",
    "Backup readiness",
  ],
  cards: [
    {
      icon: Trash2,
      title: "Cleanup and hardening",
      description:
        "Remove risky apps, suspicious permissions, and weak settings.",
      accent: "from-indigo-300 to-violet-500",
    },
    {
      icon: TriangleAlert,
      title: "Scam detection",
      description:
        "Spot phishing links, fake app stores, and compromise indicators.",
      accent: "from-rose-300 to-red-500",
    },
    {
      icon: CloudCheck,
      title: "Secure backup",
      description:
        "Create recovery-ready backups for photos, contacts, and data.",
      accent: "from-emerald-300 to-teal-500",
    },
    {
      icon: ShieldCheck,
      title: "Account protection",
      description: "Harden passwords, recovery options, and sign-in methods.",
      accent: "from-cyan-300 to-blue-500",
    },
  ],
  benefits: [
    "Hacked phone cleanup and malware removal.",
    "WhatsApp recovery guidance and account hardening.",
    "Scam detection and incident response.",
    "Privacy audits and secure backup setup.",
  ],
  comparisonRows: [
    {
      label: "Device state",
      before: "Unclear if the phone is still safe.",
      after: "Reviewed, cleaned, and hardened.",
    },
    {
      label: "Data recovery",
      before: "No clear recovery plan.",
      after: "Backups and restore steps ready.",
    },
    {
      label: "Scam risk",
      before: "Easy to miss fake prompts and links.",
      after: "Checks for suspicious activity and risky apps.",
    },
  ],
  faqs: [
    {
      question: "Can you fix a hacked phone remotely?",
      answer:
        "We can guide the recovery and hardening process remotely, depending on the device, account, and what access is still available.",
    },
    {
      question: "Do you remove malware?",
      answer:
        "We provide practical cleanup and hardening support, including app review, permission review, and safer setup steps.",
    },
    {
      question: "Can you help with WhatsApp recovery?",
      answer:
        "Yes. We provide recovery guidance and account hardening steps so users can regain control and reduce future risk.",
    },
  ],
  testimonial: {
    quote:
      "The recovery plan was straightforward and the phone felt safe again.",
    author: "Support client",
    role: "Incident recovery",
  },
  caseStudy: {
    title: "Post-scam recovery",
    summary:
      "A user clicked a suspicious link and needed help understanding what to do next. We cleaned the device, reviewed recovery options, and set stronger defaults.",
    results: [
      "Suspicious apps and permissions were removed.",
      "Account recovery settings were improved.",
      "Secure backups were configured for future incidents.",
    ],
  },
  relatedLinks: [
    { href: "/services/anti-theft", label: "Anti-theft setup" },
    { href: "/faq", label: "Security FAQs" },
    { href: "/contact", label: "Start recovery support" },
  ],
  backHref: "/services",
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Mobile Cybersecurity",
  serviceType: "Mobile device cleanup and hardening",
  provider: { "@type": "Organization", name: "Mulikamtoto" },
  areaServed: "KE",
  description:
    "Practical mobile cybersecurity support for hacked phones, malware removal, scam detection, and secure backups.",
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

export default function MobileCybersecurity() {
  return (
    <>
      <JsonLd data={[schema, faqSchema]} />
      <ServiceDetailPage {...pageData} />
    </>
  );
}
