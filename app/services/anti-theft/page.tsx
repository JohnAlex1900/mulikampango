import type { Metadata } from "next";
import { Lock, MapPinned, ScanText, Smartphone } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { ServiceDetailPage } from "@/components/sections/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Lost Phone & Anti-Theft | Mulikamtoto",
  description:
    "Lost phone recovery and anti-theft setup with lawful tracking, remote lock/wipe readiness, and IMEI guidance.",
  keywords: [
    "lost phone",
    "anti-theft",
    "remote wipe",
    "phone tracking",
    "IMEI guidance",
  ],
  openGraph: {
    title: "Lost Phone & Anti-Theft | Mulikamtoto",
    description:
      "Practical anti-theft setup and device recovery support for lawful use.",
    type: "article",
  },
};

const pageData = {
  eyebrow: "Lost Phone & Anti-Theft",
  title:
    "Anti-theft setup that helps you recover devices quickly and responsibly.",
  description:
    "Setup and guidance to prevent loss and recover devices quickly.",
  primaryCta: { href: "/contact", label: "Start setup" },
  secondaryCta: { href: "/faq", label: "Common questions" },
  heroMetricLabel: "Recovery readiness",
  heroMetricValue:
    "Tracking, lock/wipe, and reporting steps ready before loss happens.",
  highlightPoints: [
    "Remote lock/wipe",
    "Consent-aware tracking",
    "IMEI reporting",
  ],
  cards: [
    {
      icon: MapPinned,
      title: "Tracking setup",
      description:
        "Set up lawful location-aware recovery and safe-zone features.",
      accent: "from-indigo-300 to-violet-500",
    },
    {
      icon: Lock,
      title: "Remote lock/wipe",
      description: "Prepare a fast response when a device is lost or exposed.",
      accent: "from-emerald-300 to-teal-500",
    },
    {
      icon: ScanText,
      title: "IMEI guidance",
      description: "Keep the right records and reporting checklist ready.",
      accent: "from-cyan-300 to-blue-500",
    },
    {
      icon: Smartphone,
      title: "Device hardening",
      description: "Reduce theft risk with stronger settings and backups.",
      accent: "from-rose-300 to-red-500",
    },
  ],
  benefits: [
    "Phone tracking setup with consent-aware workflows.",
    "Remote lock and wipe configuration.",
    "IMEI guidance and reporting best practices.",
    "Anti-theft configuration and device hardening.",
  ],
  comparisonRows: [
    {
      label: "Loss response",
      before: "No plan when a phone goes missing.",
      after: "Clear lock/wipe and recovery steps.",
    },
    {
      label: "Evidence",
      before: "IMEI and records are hard to find.",
      after: "Checklist prepared before the incident.",
    },
    {
      label: "Security",
      before: "Device settings are easy to exploit.",
      after: "Hardened settings and backups reduce risk.",
    },
  ],
  faqs: [
    {
      question: "Can you recover a stolen phone instantly?",
      answer:
        "We prepare the steps that improve recovery and response. Actual recovery depends on the situation, device access, and local authorities.",
    },
    {
      question: "Is the tracking lawful?",
      answer:
        "We only support lawful, authorized, and consent-based use, including company-owned or family-managed devices where appropriate.",
    },
    {
      question: "What should I do first if a phone is missing?",
      answer:
        "Contact us for a response checklist, then follow your lock/wipe, reporting, and account protection steps.",
    },
  ],
  testimonial: {
    quote:
      "We had a clear plan before anything went missing, and that saved time when it mattered.",
    author: "Client",
    role: "Anti-theft setup",
  },
  caseStudy: {
    title: "Prepared for a lost-device incident",
    summary:
      "We helped a small business and a family set up recovery workflows before any phone was lost, reducing confusion during an incident.",
    results: [
      "Recovery steps were documented in advance.",
      "Remote wipe and lock readiness were enabled.",
      "Owners knew exactly what to report and when.",
    ],
  },
  relatedLinks: [
    { href: "/services/mobile-cybersecurity", label: "Mobile cybersecurity" },
    { href: "/contact", label: "Start an anti-theft setup" },
    { href: "/resources", label: "Recovery resources" },
  ],
  backHref: "/services",
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Lost Phone & Anti-Theft",
  serviceType: "Lost device recovery and anti-theft setup",
  provider: { "@type": "Organization", name: "Mulikamtoto" },
  areaServed: "KE",
  description:
    "Lost phone recovery and anti-theft setup with lawful tracking, remote lock/wipe readiness, and IMEI guidance.",
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

export default function AntiTheft() {
  return (
    <>
      <JsonLd data={[schema, faqSchema]} />
      <ServiceDetailPage {...pageData} />
    </>
  );
}
