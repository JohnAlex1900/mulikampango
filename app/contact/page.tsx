import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingCallButton } from "@/components/layout/FloatingCallButton";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata = {
  title: "Contact Us - Mulikampango Support",
  description:
    "Get in touch with our 24/7 support team. We're here to help with any questions about Mulikampango.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Get in Touch
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our support team is available 24/7 to answer your questions and
              help you get the most out of Mulikampango.
            </p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {/* Primary Phone */}
              <a
                href="tel:+254704000004"
                className="p-6 rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary hover:shadow-md hover:border-primary/50 transition-all transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-primary font-bold" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  Primary Contact
                </h3>
                <p className="text-primary font-semibold">+254 704 000 004</p>
                <p className="text-muted-foreground text-xs mt-1">
                  Click to call
                </p>
              </a>

              {/* Email */}
              <a
                href="mailto:info@mulikampango.com"
                className="p-6 rounded-xl bg-gradient-to-br from-white to-blue-50 border border-border hover:shadow-md hover:border-secondary/30 transition-all"
              >
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  Email
                </h3>
                <p className="text-muted-foreground text-sm">
                  info@mulikampango.com
                </p>
              </a>

              {/* Hours */}
              <div className="p-6 rounded-xl bg-gradient-to-br from-white to-blue-50 border border-border">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  Hours
                </h3>
                <p className="text-muted-foreground text-sm">
                  Available 24/7
                  <br />
                  365 days a year
                </p>
              </div>
            </div>

            {/* Alternative Phone Numbers */}
            <div className="bg-blue-50 rounded-2xl border border-blue-100 p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Alternative Contact Numbers
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a
                  href="tel:+254704000002"
                  className="flex items-center gap-3 p-4 bg-white rounded-lg hover:bg-blue-50 transition-colors border border-blue-100"
                >
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-semibold">
                    +254 704 000 002
                  </span>
                </a>
                <a
                  href="tel:+254780000004"
                  className="flex items-center gap-3 p-4 bg-white rounded-lg hover:bg-blue-50 transition-colors border border-blue-100"
                >
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-semibold">
                    +254 780 000 004
                  </span>
                </a>
                <a
                  href="tel:+254780000002"
                  className="flex items-center gap-3 p-4 bg-white rounded-lg hover:bg-blue-50 transition-colors border border-blue-100"
                >
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-semibold">
                    +254 780 000 002
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Support Team Section */}
        <section className="py-16 md:py-24 bg-blue-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-96">
                <Image
                  src="/images/contact-support.jpg"
                  alt="Professional customer support team providing 24/7 assistance"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  quality={90}
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  24/7 Expert Support at Your Service
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Our dedicated support team is here whenever you need us.
                  Whether you have questions about features, need technical
                  assistance, or just want to chat about your family's safety
                  journey, we're ready to help.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-foreground mb-1">
                        Call Us Anytime
                      </h3>
                      <p className="text-muted-foreground">
                        Available 24/7 for urgent support and inquiries
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-foreground mb-1">
                        Email Support
                      </h3>
                      <p className="text-muted-foreground">
                        Response within 24 hours to all inquiries
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-foreground mb-1">
                        Fast Response Times
                      </h3>
                      <p className="text-muted-foreground">
                        Average response time under 2 hours
                      </p>
                    </div>
                  </div>
                </div>
                <a
                  href="tel:+254704000004"
                  className="inline-block px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 font-bold transition-colors"
                >
                  Call Our Support Team Now
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground text-center mb-4">
              Send Us a Message
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              Fill out the form below and our team will get back to you within
              24 hours.
            </p>

            <form className="bg-white rounded-2xl border border-border p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  placeholder="+1 (234) 567-890"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="How can we help?"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Message
                </label>
                <textarea
                  rows={6}
                  placeholder="Tell us more about your inquiry..."
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary"
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 font-bold transition-colors shadow-md hover:shadow-lg"
              >
                Send Message
              </button>
            </form>

            <p className="text-center text-sm text-muted-foreground mt-6">
              We respect your privacy. Your information will never be shared.
            </p>
          </div>
        </section>

        {/* FAQ Quick Links */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground mb-8">
              Check out our FAQ section for quick answers to common questions.
            </p>
            <a
              href="/#faq"
              className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 font-semibold transition-colors"
            >
              View FAQs
            </a>
          </div>
        </section>

        {/* Emergency Section */}
        <section className="py-16 md:py-24 bg-red-50 border-t border-red-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-red-900 mb-4">
              Emergency Situation?
            </h2>
            <p className="text-red-800 mb-6">
              If your child is in immediate danger, please contact local
              emergency services right away.
            </p>
            <a
              href="tel:911"
              className="inline-block px-8 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 font-bold transition-colors"
            >
              Call Emergency Line
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCallButton />
    </>
  );
}
