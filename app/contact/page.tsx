"use client";

import { useState } from "react";
import { Mail, MessageSquare, Send } from "lucide-react";
import { Navbar } from "@/components/marketing/Navbar";
import { Footer } from "@/components/marketing/Footer";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would POST to an API route (e.g., Resend or Formspree)
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <section className="bg-gradient-to-b from-slate-50 to-white pt-16 pb-12">
          <div className="mx-auto max-w-3xl px-6">
            <h1 className="text-4xl font-bold text-slate-900 mb-3">Contact CounselStack</h1>
            <p className="text-lg text-slate-600">
              Questions, corrections, or partnership inquiries — we read every message.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="mx-auto max-w-3xl px-6">
            <div className="grid md:grid-cols-5 gap-12">
              {/* Contact Info */}
              <div className="md:col-span-2 space-y-6">
                <div>
                  <h2 className="font-semibold text-slate-900 mb-4">Get in Touch</h2>
                  <div className="space-y-4">
                    {[
                      { icon: Mail, label: "Editorial", email: "editorial@counselstack.io" },
                      { icon: MessageSquare, label: "Corrections", email: "corrections@counselstack.io" },
                    ].map((item) => (
                      <div key={item.label} className="flex items-start gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                          <item.icon className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-slate-900">{item.label}</p>
                          <a href={`mailto:${item.email}`} className="text-sm text-brand-600 hover:text-brand-700">
                            {item.email}
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl bg-slate-50 border border-slate-200 p-5">
                  <h3 className="font-semibold text-slate-900 mb-2 text-sm">Response Times</h3>
                  <p className="text-sm text-slate-600">
                    We respond to most messages within 2–3 business days. Pricing corrections and factual errors are prioritized and addressed within 24 hours.
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="md:col-span-3">
                {submitted ? (
                  <div className="rounded-2xl bg-green-50 border border-green-200 p-8 text-center">
                    <div className="text-4xl mb-4">✅</div>
                    <h2 className="text-xl font-bold text-green-900 mb-2">Message sent!</h2>
                    <p className="text-green-700">We&apos;ll get back to you within 2–3 business days.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                        <input
                          type="text"
                          id="name"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-900 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                        <input
                          type="email"
                          id="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-900 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
                          placeholder="you@yourfirm.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">Subject</label>
                      <select
                        id="subject"
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-900 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
                        required
                      >
                        <option value="">Select a topic</option>
                        <option value="general">General question</option>
                        <option value="correction">Pricing or factual correction</option>
                        <option value="review">Request a review</option>
                        <option value="partnership">Partnership inquiry</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                      <textarea
                        id="message"
                        rows={5}
                        required
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-900 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500 resize-none"
                        placeholder="Tell us what's on your mind..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-700 transition-colors"
                    >
                      <Send className="h-4 w-4" /> Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
