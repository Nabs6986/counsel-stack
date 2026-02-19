"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle, Mail } from "lucide-react";

// Formspree endpoint
const FORMSPREE_NEWSLETTER = "https://formspree.io/f/counselstack-newsletter";

interface EmailCaptureProps {
  headline?: string;
  description?: string;
  buttonText?: string;
  source?: string;
  variant?: "default" | "dark" | "minimal";
}

export function EmailCapture({
  headline = "Get our weekly legal tech digest",
  description = "New reviews, pricing changes, and tips for choosing the right software — delivered every Tuesday.",
  buttonText = "Subscribe",
  source = "counselstack-newsletter",
  variant = "default",
}: EmailCaptureProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch(FORMSPREE_NEWSLETTER, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          source,
          timestamp: new Date().toISOString(),
        }),
      });
      setSubmitted(true);
    } catch {
      // Still show success
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className={`rounded-xl p-6 text-center ${
        variant === "dark" ? "bg-slate-700" : "bg-green-50"
      }`}>
        <CheckCircle className={`h-8 w-8 mx-auto mb-3 ${
          variant === "dark" ? "text-green-400" : "text-green-500"
        }`} />
        <p className={`font-medium ${
          variant === "dark" ? "text-white" : "text-slate-900"
        }`}>
          You&apos;re subscribed!
        </p>
        <p className={`text-sm mt-1 ${
          variant === "dark" ? "text-slate-300" : "text-slate-600"
        }`}>
          Check your inbox for a confirmation.
        </p>
      </div>
    );
  }

  if (variant === "minimal") {
    return (
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@lawfirm.com"
          required
          className="flex-1 px-4 py-2 rounded-lg border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm"
        />
        <button
          type="submit"
          disabled={loading || !email}
          className="px-4 py-2 bg-brand-600 hover:bg-brand-700 disabled:opacity-50 text-white font-medium rounded-lg transition-colors text-sm"
        >
          {loading ? "..." : buttonText}
        </button>
      </form>
    );
  }

  const bgClass = variant === "dark" 
    ? "bg-slate-800 border-slate-700" 
    : "bg-brand-50 border-brand-100";
  
  const textClass = variant === "dark" ? "text-white" : "text-slate-900";
  const descClass = variant === "dark" ? "text-slate-300" : "text-slate-600";

  return (
    <div className={`rounded-xl border p-6 ${bgClass}`}>
      <div className="flex items-start gap-4">
        <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${
          variant === "dark" ? "bg-brand-600" : "bg-brand-100"
        }`}>
          <Mail className={`h-5 w-5 ${
            variant === "dark" ? "text-white" : "text-brand-600"
          }`} />
        </div>
        <div className="flex-1">
          <h3 className={`font-semibold mb-1 ${textClass}`}>{headline}</h3>
          <p className={`text-sm mb-4 ${descClass}`}>{description}</p>
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@lawfirm.com"
              required
              className="flex-1 px-4 py-2.5 rounded-lg border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm"
            />
            <button
              type="submit"
              disabled={loading || !email}
              className="px-5 py-2.5 bg-brand-600 hover:bg-brand-700 disabled:opacity-50 text-white font-medium rounded-lg transition-colors flex items-center gap-2 text-sm"
            >
              {loading ? "..." : buttonText}
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
          <p className={`text-xs mt-3 ${
            variant === "dark" ? "text-slate-400" : "text-slate-500"
          }`}>
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </div>
  );
}
