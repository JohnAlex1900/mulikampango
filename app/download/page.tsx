"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingCallButton } from "@/components/layout/FloatingCallButton";
import {
  Lock,
  Download,
  CheckCircle,
  AlertCircle,
  Smartphone,
  CreditCard,
} from "lucide-react";

export default function DownloadPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/verify-download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        setLoading(false);
        return;
      }

      // Redirect to the download URL on success
      window.location.href = data.url;
    } catch {
      setError("Network error. Please check your connection and try again.");
      setLoading(false);
    }
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 md:py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <Download className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Download Mulikampango App
            </h1>
            <p className="text-muted-foreground text-lg max-w-lg mx-auto">
              Complete your payment via M-Pesa, then enter the password sent to
              you to access your download.
            </p>
          </div>

          {/* Step Indicator */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                1
              </div>
              <span className="font-semibold text-foreground text-sm">Pay</span>
            </div>
            <div className="flex-1 max-w-16 h-0.5 bg-border" />
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                2
              </div>
              <span className="font-semibold text-foreground text-sm">
                Get Password
              </span>
            </div>
            <div className="flex-1 max-w-16 h-0.5 bg-border" />
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                3
              </div>
              <span className="font-semibold text-foreground text-sm">
                Download
              </span>
            </div>
          </div>

          {/* Payment Details Card */}
          <div className="rounded-2xl overflow-hidden shadow-lg border border-border mb-8">
            {/* Bank Header */}
            <div className="bg-[#003580] px-6 py-5 flex items-center gap-4">
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center flex-shrink-0">
                <CreditCard className="w-8 h-8 text-[#003580]" />
              </div>
              <div>
                <p className="text-white/80 text-xs font-medium uppercase tracking-widest">
                  Lipa na M-Pesa · Pay Bill
                </p>
                <h2 className="text-white font-bold text-xl leading-tight">
                  Rafiki Microfinance Bank
                </h2>
              </div>
            </div>

            {/* Payment Details Body */}
            <div className="bg-white px-6 py-6">
              {/* Paybill + Account row */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {/* Paybill */}
                <div className="bg-[#f0f6ff] rounded-xl p-4 border border-[#003580]/10">
                  <p className="text-xs font-semibold text-[#003580]/70 uppercase tracking-wider mb-1">
                    Business Number
                  </p>
                  <p className="text-3xl font-extrabold text-[#003580] tracking-widest">
                    400200
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    M-Pesa Paybill
                  </p>
                </div>

                {/* Account Number */}
                <div className="bg-[#f0fff8] rounded-xl p-4 border border-secondary/20">
                  <p className="text-xs font-semibold text-secondary/80 uppercase tracking-wider mb-1">
                    Account Number
                  </p>
                  <p className="text-3xl font-extrabold text-secondary tracking-widest">
                    MULI01
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Your Account No.
                  </p>
                </div>
              </div>

              {/* Divider with label */}
              <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-border" />
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-white px-3 text-xs text-muted-foreground font-medium">
                    HOW TO PAY
                  </span>
                </div>
              </div>

              {/* M-Pesa Steps */}
              <ol className="space-y-3">
                {[
                  "Open M-Pesa on your phone.",
                  "Select Lipa na M-Pesa → Pay Bill.",
                  "Enter Business No. 400200.",
                  "Enter Account No. MULI01.",
                  "Enter amount and your M-Pesa PIN.",
                  "You will receive an SMS confirming payment.",
                  "Contact us on +254 704 000 004 to receive your download password.",
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary font-bold text-xs flex items-center justify-center mt-0.5">
                      {i + 1}
                    </div>
                    <span className="text-sm text-muted-foreground leading-relaxed">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>

              {/* Contact prompt */}
              <div className="mt-6 p-4 bg-accent/10 rounded-xl border border-accent/20 flex items-start gap-3">
                <Smartphone className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-sm text-foreground leading-relaxed">
                  <span className="font-semibold">After payment</span>, call or
                  WhatsApp us on{" "}
                  <a
                    href="tel:+254704000004"
                    className="font-bold text-primary hover:underline"
                  >
                    +254 704 000 004
                  </a>{" "}
                  and we will send you the download password.
                </p>
              </div>
            </div>
          </div>

          {/* Password Form */}
          <div className="rounded-2xl bg-white border border-border shadow-lg px-6 py-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Lock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h2 className="font-bold text-foreground text-lg">
                  Enter Download Password
                </h2>
                <p className="text-muted-foreground text-sm">
                  Enter the password we sent you after verifying payment.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="download-password"
                  className="block text-sm font-semibold text-foreground mb-2"
                >
                  Password
                </label>
                <input
                  id="download-password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your download password"
                  required
                  autoComplete="off"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                />
              </div>

              {/* Error Message */}
              {error && (
                <div className="flex items-center gap-2 p-3 bg-destructive/10 text-destructive rounded-lg border border-destructive/20">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <p className="text-sm">{error}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={loading || !password}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 font-semibold transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                    Verifying…
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    Download App
                  </>
                )}
              </button>
            </form>

            {/* Trust line */}
            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <CheckCircle className="w-4 h-4 text-secondary" />
              Secure &amp; encrypted. Your data is protected.
            </div>
          </div>

          {/* Back link */}
          <div className="text-center mt-6">
            <Link
              href="/"
              className="text-sm text-muted-foreground hover:text-primary transition"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingCallButton />
    </>
  );
}
