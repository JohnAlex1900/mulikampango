import type { Metadata } from "next";
import { Clock3, MapPinned, ShieldCheck, UsersRound } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { ServiceDetailPage } from "@/components/sections/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Parental Control Solutions | Mulikamtoto",
  description:
    "Consent-first parental control setup for screen time, app blocking, safe zones, and anti-cyberbullying support.",
  keywords: [
    "child safety online",
    "parental controls",
    "screen time management",
    "safe zones",
    "anti-cyberbullying",
  ],
  openGraph: {
    title: "Parental Control Solutions | Mulikamtoto",
    description:
      "Lawful, consent-based family safety setup with clear parental controls and child protection guidance.",
    type: "article",
  },
};

const pageData = {
  eyebrow: "Parental Control Solutions",
  title: "Family safety controls that are clear, lawful, and easy to manage.",
  description:
    "Comprehensive, consent-first parental controls designed to help families create healthy device habits and keep children safe online.",
  primaryCta: { href: "/contact", label: "Get Security Audit" },
  secondaryCta: { href: "/how-it-works", label: "See the setup flow" },
  heroMetricLabel: "Family safety setup",
  heroMetricValue: "Screen time, app rules, and safe zones in one dashboard.",
  highlightPoints: [
    "Screen time schedules",
    "Consent-based location sharing",
    "Safer browsing and app rules",
  ],
  cards: [
    {
      icon: Clock3,
      title: "Screen time management",
      description:
        "Create healthy routines for study, sleep, meals, and family time.",
      accent: "from-cyan-300 to-blue-500",
    },
    {
      icon: ShieldCheck,
      title: "App blocking and whitelisting",
      description:
        "Allow the right tools while limiting risky apps and distractions.",
      accent: "from-indigo-300 to-violet-500",
    },
    {
      icon: MapPinned,
      title: "Safe zones with consent",
      description:
        "Use location sharing and geofencing for school, home, and travel.",
      accent: "from-emerald-300 to-teal-500",
    },
    {
      icon: UsersRound,
      title: "Anti-cyberbullying support",
      description:
        "Set reporting steps, alerts, and safer communication patterns.",
      accent: "from-rose-300 to-red-500",
    },
  ],
  benefits: [
    "Screen time management and schedules for healthy routines.",
    "App blocking, whitelisting, and age-appropriate content control.",
    "Consent-based location sharing and safe zone alerts.",
    "Anti-cyberbullying setup, reporting guidance, and support flows.",
  ],
  comparisonRows: [
    {
      label: "Screen habits",
      before: "Unstructured, inconsistent device use.",
      after:
        "Predictable schedules that support sleep, school, and family time.",
    },
    {
      label: "App control",
      before: "Children access any app or website.",
      after: "Approved apps and safer browsing rules.",
    },
    {
      label: "Location sharing",
      before: "No clear way to check safe arrival.",
      after: "Consent-based check-ins and safe zones.",
    },
  ],
  faqs: [
    {
      question: "Can parents turn these controls on and off themselves?",
      answer:
        "Yes. We set up controls so parents can adjust schedules, app permissions, and safe zones without needing technical support every time.",
    },
    {
      question: "Does this include hidden monitoring?",
      answer:
        "No. The service is designed for lawful, authorized, and consent-based family safety, not covert monitoring.",
    },
    {
      question: "Can this help if my child is being bullied online?",
      answer:
        "Yes. We help configure alerts, reporting paths, and app settings that support safer communication and faster intervention.",
    },
  ],
  testimonial: {
    quote:
      "We finally had a calm, clear setup for our children’s devices instead of guessing what to block.",
    author: "Parent client",
    role: "Family safety setup",
  },
  caseStudy: {
    title: "School-night screen time reset",
    summary:
      "A family needed a way to keep devices helpful without late-night distractions. We created a consent-first setup that balanced school, rest, and safe communication.",
    results: [
      "Screen time reduced after bedtime with clear exceptions for calls.",
      "App blocking removed late-night distractions.",
      "Safe zones confirmed school arrival and home return.",
    ],
  },
  relatedLinks: [
    { href: "/child-safety-online", label: "Child Safety Online guide" },
    { href: "/faq", label: "Family safety FAQs" },
    { href: "/contact", label: "Request setup support" },
  ],
  backHref: "/services",
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Parental Control Solutions",
  serviceType: "Child safety online and parental control setup",
  provider: { "@type": "Organization", name: "Mulikamtoto" },
  areaServed: "KE",
  description:
    "Consent-first parental control setup for screen time, app blocking, safe zones, and anti-cyberbullying support.",
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

export default function ParentalControls() {
  return (
    <>
      <JsonLd data={[schema, faqSchema]} />
      <ServiceDetailPage {...pageData} />
    </>
  );
}
