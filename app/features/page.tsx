import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingCallButton } from "@/components/layout/FloatingCallButton";
import {
  MapPin,
  Zap,
  Lock,
  Users,
  Smartphone,
  BarChart3,
  Bell,
  TrendingUp,
} from "lucide-react";

export const metadata = {
  title: "Features - Mulikampango Parental Monitoring",
  description:
    "Explore all the powerful features that make Mulikampango the most trusted parental monitoring solution.",
};

const features = [
  {
    icon: MapPin,
    title: "Real-Time GPS Tracking",
    description:
      "Know exactly where your children are at any moment with accurate GPS location tracking. Set geofencing boundaries and get instant alerts when they leave safe zones.",
    highlights: [
      "Accurate within 5 meters",
      "Geofence alerts",
      "Location history & timeline",
      "Battery optimization",
    ],
  },
  {
    icon: Zap,
    title: "Instant Alert System",
    description:
      "Receive real-time notifications for important events and dangerous behavior. Customize alerts based on your family's needs and priorities.",
    highlights: [
      "Real-time push notifications",
      "Custom alert triggers",
      "Emergency SOS alerts",
      "Multi-device support",
    ],
  },
  {
    icon: Smartphone,
    title: "App & Web Usage Monitoring",
    description:
      "Monitor all apps installed on your child's device and track their usage patterns. Block harmful apps and set healthy screen time limits.",
    highlights: [
      "App usage analytics",
      "Block inappropriate apps",
      "Screen time scheduling",
      "App categorization",
    ],
  },
  {
    icon: Bell,
    title: "Screen Time Management",
    description:
      "Set healthy device boundaries and enforce screen time limits. Schedule device-free times for meals, homework, and sleep.",
    highlights: [
      "Customizable time limits",
      "Scheduled downtime",
      "Content filtering",
      "Social media restrictions",
    ],
  },
  {
    icon: Lock,
    title: "Content Filtering",
    description:
      "Protect your children from inappropriate content across all devices. Automatically block adult websites and harmful content.",
    highlights: [
      "Website filtering",
      "Safe search enforcement",
      "YouTube restrictions",
      "App store controls",
    ],
  },
  {
    icon: BarChart3,
    title: "Detailed Activity Reports",
    description:
      "Access comprehensive reports on your child's device activity, app usage, and browsing history. Understand their digital behavior.",
    highlights: [
      "Daily activity summaries",
      "Usage trends & analytics",
      "Browsing history",
      "Export reports",
    ],
  },
  {
    icon: Users,
    title: "Multi-Device Monitoring",
    description:
      "Monitor all your family's devices from a single dashboard. Manage multiple children's profiles and customize settings for each.",
    highlights: [
      "Monitor iOS & Android",
      "Windows & Mac support",
      "Unified dashboard",
      "Multi-child profiles",
    ],
  },
  {
    icon: Smartphone,
    title: "24/7 Customer Support",
    description:
      "Our dedicated support team is always available to help. Get answers via phone, email, or live chat whenever you need assistance.",
    highlights: [
      "24/7 phone support",
      "Live chat support",
      "Video tutorials",
      "Knowledge base",
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
              Powerful Features for Family Safety
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every feature is designed with your family's safety and privacy in
              mind. Explore what makes Mulikampango the most comprehensive
              parental monitoring solution.
            </p>
          </div>
        </section>

        {/* Showcase Image Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                All-In-One Dashboard
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Manage your family's safety from one intuitive, modern dashboard
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/features-showcase.jpg"
                alt="Mulikampango dashboard features showcase"
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
                    className="p-8 rounded-2xl bg-gradient-to-br from-white to-blue-50 border border-border hover:shadow-lg transition-all"
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
              Experience All Features Risk-Free
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Start your free 14-day trial today. No credit card required.
            </p>
            <Link
              href="/download"
              className="inline-block px-8 py-3 bg-white text-primary rounded-lg hover:bg-gray-100 font-bold transition-colors"
            >
              Download App Now
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCallButton />
    </>
  );
}
