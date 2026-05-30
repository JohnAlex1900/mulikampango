import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingCallButton } from "@/components/layout/FloatingCallButton";
import {
  MapPin,
  Lock,
  Users,
  Smartphone,
  BarChart3,
  Bell,
  BriefcaseBusiness,
  Cloud,
  GraduationCap,
  ShieldAlert,
} from "lucide-react";

export const metadata = {
  title: "Services - Mulikamtoto Mobile Security",
  description:
    "Explore Mulikamtoto parental controls, business device management, anti-theft setup, mobile cybersecurity, and digital awareness training.",
};

const features = [
  {
    icon: MapPin,
    title: "Parental Control Solutions",
    description:
      "Help children build safer digital habits with transparent family safety settings and age-appropriate controls.",
    highlights: [
      "Screen time management",
      "App and website blocking",
      "Child online safety setup",
      "Location sharing with consent",
    ],
  },
  {
    icon: BriefcaseBusiness,
    title: "Employee Device Management",
    description:
      "Prepare company-owned phones for responsible work use with clear policies, inventory, and recovery options.",
    highlights: [
      "Company phone setup",
      "Device inventory",
      "Remote lock and wipe readiness",
      "Productivity reports",
    ],
  },
  {
    icon: ShieldAlert,
    title: "Mobile Cybersecurity Services",
    description:
      "Recover from common device threats and reduce future risk with practical mobile security support.",
    highlights: [
      "Hacked phone cleanup",
      "WhatsApp recovery guidance",
      "Scam detection",
      "Malware removal",
    ],
  },
  {
    icon: Bell,
    title: "Anti-Cyberbullying Setup",
    description:
      "Configure safer communication habits and help parents spot signs of risky interactions.",
    highlights: [
      "Conversation guidance",
      "Risk awareness",
      "Safety alerts",
      "Support follow-up",
    ],
  },
  {
    icon: Lock,
    title: "Privacy Audits",
    description:
      "Review app permissions, account settings, backups, and weak points that expose personal or business data.",
    highlights: [
      "Permission review",
      "Suspicious app checks",
      "Secure backup setup",
      "Account hardening",
    ],
  },
  {
    icon: BarChart3,
    title: "Dashboard Reports",
    description:
      "Use the dashboard to review device status, family safety settings, and business device activity where authorized.",
    highlights: [
      "Daily activity summaries",
      "Usage trends",
      "Device status",
      "Policy review",
    ],
  },
  {
    icon: GraduationCap,
    title: "Digital Training & Awareness",
    description:
      "Train families and teams to recognize fake apps, scams, WhatsApp compromise signs, and unsafe device habits.",
    highlights: [
      "Android security basics",
      "Fake app detection",
      "Online safety awareness",
      "Scam prevention",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud Backup & Recovery",
    description:
      "Set up safer backups and recovery plans for phones, photos, contacts, business files, and important records.",
    highlights: [
      "Backup setup",
      "Recovery planning",
      "Data protection",
      "Managed IT support",
    ],
  },
];

export default function FeaturesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Services for Safer Devices
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Family protection, business device management, anti-theft setup,
              and mobile cybersecurity services framed for lawful,
              consent-based use.
            </p>
          </div>
        </section>

        {/* Showcase Image Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                A Clear Dashboard for Authorized Devices
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Review family safety settings, device status, and business phone policies from one place.
              </p>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/images/features-showcase.jpg"
                alt="Mulikamtoto dashboard features showcase"
                width={1200}
                height={600}
                className="w-full h-auto object-cover animate-fadeIn"
                priority
                quality={90}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="p-8 rounded-lg bg-gradient-to-br from-white to-blue-50 border border-border hover:shadow-lg transition-all"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                    <ul className="space-y-2">
                      {feature.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-secondary">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get a Security Audit or Start Setup
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Choose family protection, mobile cybersecurity, or business device management.
            </p>
            <a
              href="https://net.mulikampango.co.ke"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-white text-primary rounded-lg hover:bg-gray-100 font-bold transition-colors"
            >
              Download App Now
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCallButton />
    </>
  );
}
