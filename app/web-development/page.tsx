import type { Metadata } from "next";
import { Camera, Code2, ServerCog, ShieldCheck } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { ServiceDetailPage } from "@/components/sections/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Web Development & Managed IT | Mulikamtoto",
  description:
    "Secure web development, managed hosting, backups, CCTV integration, and managed IT support for small businesses.",
  keywords: [
    "web development",
    "managed IT",
    "secure hosting",
    "cloud backup",
    "CCTV integration",
  ],
  openGraph: {
    title: "Web Development & Managed IT | Mulikamtoto",
    description:
      "Modern websites and managed IT support with security baked in.",
    type: "article",
  },
};

const pageData = {
  eyebrow: "Web Development & Managed IT",
  title: "Modern websites and managed IT support with security baked in.",
  description:
    "Professional web development, secure hosting, and managed IT services tailored for organizations caring about child safety and privacy.",
  primaryCta: { href: "/contact", label: "Request project" },
  secondaryCta: { href: "/resources", label: "See resources" },
  heroMetricLabel: "Delivery scope",
  heroMetricValue: "Design, build, hosting, and support under one roof.",
  highlightPoints: ["Secure hosting", "Cloud backups", "Compliance docs"],
  cards: [
    {
      icon: Code2,
      title: "Secure web apps",
      description:
        "Clean builds, responsive UI, and business-ready functionality.",
      accent: "from-indigo-300 to-violet-500",
    },
    {
      icon: ServerCog,
      title: "Hosting and backups",
      description: "Managed hosting, backups, and recovery planning.",
      accent: "from-emerald-300 to-teal-500",
    },
    {
      icon: Camera,
      title: "CCTV and smart systems",
      description: "Consultation for connected security and smart-home setups.",
      accent: "from-cyan-300 to-blue-500",
    },
    {
      icon: ShieldCheck,
      title: "Security hardening",
      description:
        "Safer defaults and support for privacy-sensitive deployments.",
      accent: "from-rose-300 to-red-500",
    },
  ],
  benefits: [
    "Secure website and web app development.",
    "Cloud backup and recovery planning.",
    "Managed hosting and security hardening.",
    "Managed IT support and compliance documentation.",
  ],
  comparisonRows: [
    {
      label: "Website quality",
      before: "Basic pages with little polish.",
      after: "A fast, modern, responsive product.",
    },
    {
      label: "Hosting",
      before: "Hosting and backups are unclear.",
      after: "Managed hosting with recovery planning.",
    },
    {
      label: "Support",
      before: "No long-term technical guidance.",
      after: "Managed IT support and documentation.",
    },
  ],
  faqs: [
    {
      question: "Do you build custom websites or apps?",
      answer:
        "Yes. We create secure websites and web apps with a focus on clarity, performance, and maintainability.",
    },
    {
      question: "Can you support existing projects?",
      answer:
        "Yes. We can help harden, improve, and maintain existing websites and IT environments.",
    },
    {
      question: "Do you handle backups and recovery?",
      answer:
        "Yes. We include cloud backup and recovery planning so your site and systems have a clear recovery path.",
    },
  ],
  testimonial: {
    quote:
      "They made our site feel like a serious platform instead of a placeholder.",
    author: "Business owner",
    role: "Web development project",
  },
  caseStudy: {
    title: "Small-business web refresh",
    summary:
      "A client needed a trustworthy site that could support growth. We redesigned the experience, clarified the offer, and added a support-ready structure.",
    results: [
      "The site felt more premium and easier to navigate.",
      "Core services were easier to understand.",
      "The client had a support plan and backup strategy.",
    ],
  },
  relatedLinks: [
    { href: "/services", label: "All services" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Request a web project" },
  ],
  backHref: "/services",
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Web Development & Managed IT",
  serviceType: "Secure web development and managed IT",
  provider: { "@type": "Organization", name: "Mulikamtoto" },
  areaServed: "KE",
  description:
    "Secure web development, managed hosting, backups, CCTV integration, and managed IT support for small businesses.",
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

export default function WebDevelopment() {
  return (
    <>
      <JsonLd data={[schema, faqSchema]} />
      <ServiceDetailPage {...pageData} />
    </>
  );
}
