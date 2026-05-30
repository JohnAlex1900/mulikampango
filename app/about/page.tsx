import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingCallButton } from "@/components/layout/FloatingCallButton";
import { CheckCircle, Heart, Shield, Users } from "lucide-react";

export const metadata = {
  title: "About Us - Mulikamtoto",
  description:
    "Learn about Mulikamtoto's mission to provide lawful family safety, mobile cybersecurity, and device management services.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              About Mulikamtoto
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Repositioned for lawful family safety, mobile cybersecurity, and
              responsible device management.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Our Mission
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  At Mulikamtoto, we believe every child deserves a safer
                  digital environment and every organization deserves practical
                  device security. Our mission is to help families and
                  businesses secure, manage, and recover devices legally and
                  responsibly.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We are moving away from risky surveillance language and toward
                  legitimate digital protection: parental controls, anti-theft
                  setup, cyber awareness, recovery guidance, and company-owned
                  device management.
                </p>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-8 flex items-center justify-center">
                <Heart className="w-24 h-24 text-primary" />
              </div>
            </div>
          </div>
        </section>

        {/* Visual Image Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Built for Trust, Consent, and Protection
                </h2>
                <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                  Mulikamtoto is designed for parents who want safer digital
                  habits, schools and businesses that manage devices, and
                  people recovering from mobile security incidents.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  The strongest long-term direction is mobile cybersecurity and
                  device management: safer to advertise, clearer legally, and
                  more useful to customers than high-risk surveillance marketing.
                </p>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-foreground font-semibold">
                      Family safety tools
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-foreground font-semibold">
                      10+ years of experience
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-foreground font-semibold">
                      Cyber awareness and recovery services
                    </span>
                  </div>
                </div>
              </div>
              <div className="relative rounded-lg overflow-hidden shadow-2xl h-96">
                <Image
                  src="/images/about-values.jpg"
                  alt="African family working together with trust and security"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  quality={90}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Shield,
                  title: "Security First",
                  description:
                    "We prioritize lawful, authorized protection and practical cybersecurity hygiene.",
                },
                {
                  icon: Heart,
                  title: "Family-Focused",
                  description:
                    "Every family feature is framed around child safety, consent, and healthy digital habits.",
                },
                {
                  icon: Users,
                  title: "Community",
                  description:
                    "We support parents, schools, small businesses, and device owners with clear guidance.",
                },
                {
                  icon: CheckCircle,
                  title: "Transparency",
                  description:
                    "We avoid covert monitoring claims and clearly state lawful-use responsibilities.",
                },
              ].map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={index}
                    className="p-6 rounded-lg bg-white border border-border hover:shadow-md transition-all text-center"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              {[
                { number: "10+", label: "Years Experience" },
                { number: "5", label: "Core Service Areas" },
                { number: "100%", label: "Authorized Use Focus" },
                { number: "24/7", label: "Support Mindset" },
              ].map((stat, index) => (
                <div key={index} className="p-6">
                  <p className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    {stat.number}
                  </p>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust & Value Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Families and Businesses Trust Mulikamtoto
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Clear services, safer language, and a stronger digital security direction.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: Shield,
                  title: "Mobile Security Expertise",
                  description:
                    "Our experience is positioned as practical security knowledge for families, device owners, and businesses.",
                },
                {
                  icon: CheckCircle,
                  title: "Legitimate Service Categories",
                  description:
                    "Parental controls, mobile cybersecurity, lost phone setup, awareness training, and company-owned device management.",
                },
                {
                  icon: Heart,
                  title: "Respectful Monitoring",
                  description:
                    "We help customers protect children and devices without covert tracking, unauthorized access, or unlawful surveillance.",
                },
                {
                  icon: Users,
                  title: "24/7 Expert Support",
                  description:
                    "Call for security audits, setup help, privacy reviews, backup guidance, and technology support.",
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="p-6 rounded-lg bg-white border border-border hover:shadow-md hover:border-primary/30 transition-all"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="mt-12 p-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border border-primary/20">
              <p className="text-center text-foreground text-lg leading-relaxed">
                <span className="font-bold">
                  Secure, manage and protect devices legally and responsibly.
                </span>{" "}
                All services are intended for lawful, authorized, and
                consent-based use only. Users are responsible for complying with
                local privacy and cybercrime laws.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-secondary">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Secure Your Devices?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Start with family protection, a security audit, or business device management.
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
