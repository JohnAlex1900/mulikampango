import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingCallButton } from "@/components/layout/FloatingCallButton";
import { CheckCircle, Heart, Shield, Users } from "lucide-react";

export const metadata = {
  title: "About Us - Mulikampango",
  description:
    "Learn about Mulikampango's mission to protect families and keep children safe in the digital age.",
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
              About Mulikampango
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Dedicated to protecting families and keeping children safe in an
              increasingly digital world.
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
                  At Mulikampango, we believe every child deserves a safe
                  digital environment. Our mission is to empower parents with
                  the tools and knowledge they need to protect their children
                  online and offline, while respecting privacy and fostering
                  healthy family relationships.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We're not just building software—we're building trust. Trust
                  between parents and children, and trust in a safer digital
                  future for families everywhere.
                </p>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 flex items-center justify-center">
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
                  Built by Parents, For Parents
                </h2>
                <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                  We understand the challenges of raising children in the
                  digital age. Our team has walked the same path, facing the
                  same concerns you do every day.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  That's why we've dedicated ourselves to creating a solution
                  that actually works—one that protects without invading,
                  monitors without controlling, and builds trust within
                  families.
                </p>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-foreground font-semibold">
                      100,000+ families trust us
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
                      Award-winning platform
                    </span>
                  </div>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-96">
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
                    "We never compromise on security. Bank-level encryption protects all family data.",
                },
                {
                  icon: Heart,
                  title: "Family-Focused",
                  description:
                    "Every feature is designed with families in mind, balancing safety with healthy relationships.",
                },
                {
                  icon: Users,
                  title: "Community",
                  description:
                    "We listen to our community and continuously improve based on parent feedback.",
                },
                {
                  icon: CheckCircle,
                  title: "Transparency",
                  description:
                    "We believe in complete transparency about how our product works and how data is used.",
                },
              ].map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={index}
                    className="p-6 rounded-xl bg-white border border-border hover:shadow-md transition-all text-center"
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
                { number: "100K+", label: "Families Protected" },
                { number: "10M+", label: "Devices Monitored" },
                { number: "50+", label: "Countries" },
                { number: "24/7", label: "Support Available" },
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
                Why Parents Trust Mulikampango
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Protecting your family is our primary mission. Here's what sets
                us apart.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: Shield,
                  title: "Military-Grade Security",
                  description:
                    "Your family data is encrypted with the same technology used by financial institutions. We never sell or share your information with third parties.",
                },
                {
                  icon: CheckCircle,
                  title: "Proven Track Record",
                  description:
                    "Trusted by over 100,000 families across Africa and beyond. Our platform has protected millions of devices from harmful content and threats.",
                },
                {
                  icon: Heart,
                  title: "Respectful Monitoring",
                  description:
                    "We believe in balancing safety with trust. Our tools help you protect without invading privacy, fostering healthy family relationships.",
                },
                {
                  icon: Users,
                  title: "24/7 Expert Support",
                  description:
                    "Our dedicated support team is always available to help. Call us anytime—we understand that family safety is urgent and important.",
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="p-6 rounded-xl bg-white border border-border hover:shadow-md hover:border-primary/30 transition-all"
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
            <div className="mt-12 p-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl border border-primary/20">
              <p className="text-center text-foreground text-lg leading-relaxed">
                <span className="font-bold">
                  Your family's safety is not a feature—it's our purpose.
                </span>{" "}
                Every decision we make, from our product design to our customer
                support, is driven by our commitment to protecting families.
                Join thousands of parents who have already made the smart choice
                for their children's digital safety.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-secondary">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Join Our Community?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Start protecting your family with Mulikampango today.
            </p>
            <a
              href="https://net.mulikampango.com"
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
