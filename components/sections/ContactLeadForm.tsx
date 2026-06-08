"use client";

import type { FormEvent } from "react";
import { useState } from "react";

const serviceOptions = [
  "Child safety setup",
  "Business device management",
  "Mobile cybersecurity",
  "Lost phone / anti-theft",
  "Digital training",
  "Web development & IT",
];

export function ContactLeadForm() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      service: String(formData.get("service") ?? ""),
      message: String(formData.get("message") ?? ""),
      consent: formData.get("consent") === "on",
    };

    const response = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = (await response.json()) as { ok: boolean; error?: string };

    if (!response.ok || !data.ok) {
      setStatus("error");
      setMessage(data.error ?? "We could not send your inquiry right now.");
      return;
    }

    setStatus("success");
    setMessage("Your inquiry is in. We will review it and respond shortly.");
    event.currentTarget.reset();
  }

  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="absolute -inset-6 rounded-[2rem] bg-cyan-400/20 blur-3xl" />
      <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 p-4 shadow-2xl shadow-black/30 backdrop-blur-xl">
        <div className="rounded-[1.5rem] bg-white p-5 text-[#101042] shadow-xl">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#eef2ff]">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-6 w-6 text-primary"
              >
                <path
                  fill="currentColor"
                  d="M12 2a7 7 0 0 0-7 7v3a3 3 0 0 0-2 2.83V18a2 2 0 0 0 2 2h2v-7H5V9a7 7 0 1 1 14 0v4h-2v7h2a2 2 0 0 0 2-2v-3.17A3 3 0 0 0 19 12v-3a7 7 0 0 0-7-7Zm-1 10a1 1 0 1 1 2 0v6a1 1 0 1 1-2 0v-6Z"
                />
              </svg>
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-primary">
                Lead capture
              </p>
              <h2 className="text-xl font-black">Tell us what you need</h2>
            </div>
          </div>

          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                name="name"
                required
                placeholder="Full name"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-primary"
              />
              <input
                name="email"
                type="email"
                required
                placeholder="Email address"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-primary"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                name="phone"
                placeholder="Phone number"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-primary"
              />
              <select
                name="service"
                defaultValue=""
                className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-primary"
              >
                <option value="" disabled>
                  Select a service
                </option>
                {serviceOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </div>
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Briefly describe your goal or problem..."
              className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-primary"
            />
            <label className="flex items-start gap-3 rounded-xl bg-slate-50 px-4 py-3 text-sm text-slate-600">
              <input
                name="consent"
                type="checkbox"
                className="mt-1 h-4 w-4 rounded border-slate-300"
              />
              I agree that Mulikamtoto can contact me about this inquiry and
              that the service is for lawful, authorized, consent-based use
              only.
            </label>

            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#101042] px-4 py-4 font-black text-white transition hover:bg-primary disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "sending" ? "Sending..." : "Send inquiry"}
            </button>

            {status !== "idle" && (
              <div
                className={`rounded-xl px-4 py-3 text-sm ${status === "success" ? "bg-emerald-50 text-emerald-800" : "bg-rose-50 text-rose-800"}`}
              >
                {message}
              </div>
            )}
          </form>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <a
              href="https://wa.me/254704000004"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-3 font-semibold text-[#101042] transition hover:border-primary hover:text-primary"
            >
              WhatsApp support
            </a>
            <a
              href="mailto:info@mulikampango.co.ke"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-3 font-semibold text-[#101042] transition hover:border-primary hover:text-primary"
            >
              Email support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
