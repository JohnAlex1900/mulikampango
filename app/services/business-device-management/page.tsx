import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  LockKeyhole,
  RotateCcw,
  TabletSmartphone,
} from "lucide-react";
import { SectionBackLink } from "@/components/layout/SectionBackLink";

import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { ServiceDetailPage } from "@/components/sections/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Employee Device Management | Mulikamtoto",
  description:
    "Authorized device management for company-owned phones, policy enforcement, remote wipe readiness, and productivity reporting.",
  keywords: [
    "employee device management",
    "company phone setup",
    "remote wipe",
    "device inventory",
    "business mobile security",
  ],
  openGraph: {
    title: "Employee Device Management | Mulikamtoto",
    description:
      "Secure and manage company devices with lawful notice, consent, and clear device policies.",
    type: "article",
  },
};

const pageData = {
  eyebrow: "Employee Device Management",
  title: "Device management for company phones, policies, and lawful control.",
  description:
    "Secure and manage company devices with clear policies and authorized controls.",
  primaryCta: { href: "/contact", label: "Request setup" },
  secondaryCta: { href: "/faq", label: "View FAQ" },
  heroMetricLabel: "Business device setup",
  heroMetricValue: "Policy, inventory, and recovery readiness in one place.",
  highlightPoints: [
    "Company phone policies",
    "Remote wipe readiness",
    "Inventory reporting",
  ],
  cards: [
    {
      icon: TabletSmartphone,
      title: "Company phone setup",
      description:
        "Enforce clear policies for business-owned devices from day one.",
      accent: "from-indigo-300 to-violet-500",
    },
    {
      icon: RotateCcw,
      title: "Remote wipe readiness",
      description:
        "Prepare for lost or compromised phones with safe recovery steps.",
      accent: "from-emerald-300 to-teal-500",
    },
    {
      icon: LockKeyhole,
      title: "Authorized tracking",
      description:
        "Use lawful notice and consent-based workflows for company devices.",
      accent: "from-cyan-300 to-blue-500",
    },
    {
      icon: BriefcaseBusiness,
      title: "Device inventory",
      description:
        "Track issued devices, ownership, and lifecycle events clearly.",
      accent: "from-rose-300 to-red-500",
    },
  ],
  benefits: [
    "Company phone setup and policy enforcement.",
    "GPS tracking for company-owned devices with lawful notice.",
    "Remote lock and wipe for lost or compromised devices.",
    "Device inventory and lifecycle management.",
  ],
  comparisonRows: [
    {
      label: "Ownership",
      before: "Devices used without a clear policy.",
      after: "Company-owned devices with documented rules.",
    },
    {
      label: "Recovery",
      before: "No plan for lost or compromised phones.",
      after: "Remote lock/wipe readiness and incident response.",
    },
    {
      label: "Reporting",
      before: "Fragmented device records.",
      after: "Simple inventory and usage reporting.",
    },
  ],
  faqs: [
    {
      question: "Can this be used on personal devices?",
      answer:
        "This service is designed for company-owned devices and lawful workplace controls. We can advise where personal-device policies differ.",
    },
    {
      question: "Do employees need notice?",
      answer:
        "Yes. We structure the setup around lawful notice, company policy, and consent where required by local law.",
    },
    {
      question: "Can you help with lost phones?",
      answer:
        "Yes. We prepare remote lock and wipe workflows so teams can act quickly if a device is lost or compromised.",
    },
  ],
  testimonial: {
    quote:
      "We finally had a device policy that matched how our team actually works.",
    author: "Operations lead",
    role: "Business device rollout",
  },
  caseStudy: {
    title: "Small team phone rollout",
    summary:
      "A growing business needed clear management for newly issued phones. We created a policy-based setup that reduced confusion and improved accountability.",
    results: [
      "Inventory and ownership became easy to track.",
      "Lost device response time improved.",
      "Employees had a clearer understanding of device rules.",
    ],
  },
  relatedLinks: [
    { href: "/services", label: "All services" },
    { href: "/web-development", label: "Web development & IT" },
    { href: "/contact", label: "Request a business setup" },
  ],
  backHref: "/services",
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Employee Device Management",
  serviceType: "Authorized company phone management",
  provider: { "@type": "Organization", name: "Mulikamtoto" },
  areaServed: "KE",
  description:
    "Authorized device management for company-owned phones, policy enforcement, remote wipe readiness, and productivity reporting.",
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

export default function BusinessDeviceManagement() {
  return (
    <>
      <JsonLd data={[schema, faqSchema]} />
      <ServiceDetailPage {...pageData} />
    </>
  );
}
