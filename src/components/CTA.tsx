"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, MessageCircle, Loader2, Shield, Clock, Gift } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/966507120867?text=Hey%20I%20saw%20the%20AI%20Lead%20System%20demo%20and%20I%20want%20to%20get%20started";

const countryCodes = [
  { code: "+966", label: "🇸🇦 +966" },
  { code: "+971", label: "🇦🇪 +971" },
  { code: "+1", label: "🇺🇸 +1" },
  { code: "+44", label: "🇬🇧 +44" },
  { code: "+91", label: "🇮🇳 +91" },
  { code: "+20", label: "🇪🇬 +20" },
  { code: "+962", label: "🇯🇴 +962" },
  { code: "+973", label: "🇧🇭 +973" },
  { code: "+974", label: "🇶🇦 +974" },
  { code: "+965", label: "🇰🇼 +965" },
  { code: "+968", label: "🇴🇲 +968" },
  { code: "+212", label: "🇲🇦 +212" },
  { code: "+90", label: "🇹🇷 +90" },
  { code: "+49", label: "🇩🇪 +49" },
  { code: "+33", label: "🇫🇷 +33" },
];

export default function CTA() {
  const [form, setForm] = useState({
    name: "",
    business: "",
    countryCode: "+966",
    phone: "",
    email: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const payload = {
      ...form,
      phone: `${form.countryCode}${form.phone}`,
    };

    console.log("Lead submitted:", payload);

    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch {
      // Silently handle
    }

    setSubmitting(false);
    setSubmitted(true);
  };

  const inputClass =
    "w-full bg-[#111] border border-[#1A1A1A] focus:border-[#2563EB]/50 focus:ring-1 focus:ring-[#2563EB]/20 rounded-xl px-4 py-3.5 text-[14px] text-white placeholder-[#404040] outline-none transition-all";

  return (
    <section id="cta" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl border border-[#1A1A1A] bg-[#0A0A0A] overflow-hidden"
        >
          {/* Background effects */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#2563EB]/[0.06] rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#22C55E]/[0.03] rounded-full blur-[100px] pointer-events-none" />

          {/* Urgency bar */}
          <div className="bg-[#2563EB]/10 border-b border-[#2563EB]/20 px-6 py-3 flex items-center justify-center gap-3">
            <Clock size={14} className="text-[#2563EB]" />
            <span className="text-[12px] font-medium text-[#93B4F5]">
              Only 5 spots left for this month — systems go live within 7 days
            </span>
          </div>

          <div className="relative z-10 p-8 md:p-16">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-20 h-20 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/20 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={40} className="text-[#22C55E]" />
                  </div>
                  <h3 className="text-[28px] md:text-[36px] font-bold text-white mb-3">
                    You&apos;re in!
                  </h3>
                  <p className="text-[16px] text-[#A3A3A3] max-w-md mx-auto mb-4 leading-relaxed">
                    We&apos;ll set up your system within 7 days.
                  </p>
                  <p className="text-[14px] text-[#22C55E] font-medium max-w-md mx-auto mb-8">
                    Expect a message from us within the hour.
                  </p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#22C55E] hover:bg-[#16A34A] text-white text-[14px] font-semibold px-6 py-3.5 rounded-xl transition-colors"
                  >
                    <MessageCircle size={18} />
                    Message us on WhatsApp
                  </a>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {/* Header */}
                  <div className="text-center mb-10">
                    <h2 className="text-[32px] md:text-[48px] font-bold tracking-[-0.03em] leading-tight text-white mb-4">
                      Ready to stop losing leads?
                    </h2>
                    <p className="text-[15px] text-[#525252] max-w-lg mx-auto leading-relaxed">
                      Fill in your details and we&apos;ll have your AI lead system live within 7 days.
                      Your first qualified lead could come in within 24 hours of launch.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-10 items-start">
                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[11px] text-[#525252] uppercase tracking-wider font-medium mb-2">
                            Your Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            required
                            placeholder="John Smith"
                            value={form.name}
                            onChange={handleChange}
                            className={inputClass}
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] text-[#525252] uppercase tracking-wider font-medium mb-2">
                            Business Name
                          </label>
                          <input
                            type="text"
                            name="business"
                            required
                            placeholder="Acme Corp"
                            value={form.business}
                            onChange={handleChange}
                            className={inputClass}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] text-[#525252] uppercase tracking-wider font-medium mb-2">
                          Phone Number
                        </label>
                        <div className="flex gap-2">
                          <select
                            name="countryCode"
                            value={form.countryCode}
                            onChange={handleChange}
                            className="bg-[#111] border border-[#1A1A1A] focus:border-[#2563EB]/50 rounded-xl px-3 py-3.5 text-[14px] text-white outline-none transition-all appearance-none cursor-pointer min-w-[110px]"
                          >
                            {countryCodes.map((c) => (
                              <option key={c.code} value={c.code}>
                                {c.label}
                              </option>
                            ))}
                          </select>
                          <input
                            type="tel"
                            name="phone"
                            required
                            placeholder="5XX XXX XXXX"
                            value={form.phone}
                            onChange={handleChange}
                            className={`${inputClass} flex-1`}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] text-[#525252] uppercase tracking-wider font-medium mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          placeholder="you@company.com"
                          value={form.email}
                          onChange={handleChange}
                          className={inputClass}
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-full flex items-center justify-center gap-2 bg-white hover:bg-neutral-200 disabled:opacity-50 text-black text-[15px] font-semibold px-6 py-4 rounded-xl transition-colors mt-2"
                      >
                        {submitting ? (
                          <Loader2 size={18} className="animate-spin" />
                        ) : (
                          <>
                            Claim Your Spot — Get Started <ArrowRight size={16} />
                          </>
                        )}
                      </button>

                      <p className="text-[11px] text-[#404040] text-center">
                        No payment required now. We&apos;ll discuss your setup on the call.
                      </p>
                    </form>

                    {/* Right side panel */}
                    <div className="flex flex-col gap-5 lg:pt-2">
                      {/* WhatsApp option */}
                      <div className="rounded-2xl border border-[#1A1A1A] bg-[#050505] p-5">
                        <p className="text-[12px] text-[#525252] uppercase tracking-wider font-medium mb-3">
                          Prefer to chat?
                        </p>
                        <a
                          href={WHATSAPP_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-3 w-full bg-[#22C55E] hover:bg-[#16A34A] text-white text-[15px] font-semibold px-6 py-4 rounded-xl transition-colors"
                        >
                          <MessageCircle size={20} />
                          Message us on WhatsApp
                        </a>
                        <p className="text-[11px] text-[#404040] mt-3 text-center">
                          We typically reply within minutes.
                        </p>
                      </div>

                      {/* Trust signals */}
                      <div className="space-y-3">
                        {[
                          { icon: Clock, text: "Setup in 7 days or less" },
                          { icon: Shield, text: "30-day satisfaction guarantee" },
                          { icon: Gift, text: "Full ownership — no monthly fees" },
                        ].map((item) => {
                          const Icon = item.icon;
                          return (
                            <div key={item.text} className="flex items-center gap-3 rounded-xl border border-[#1A1A1A] bg-[#050505] px-4 py-3">
                              <Icon size={16} className="text-[#2563EB] flex-shrink-0" />
                              <span className="text-[12px] text-[#A3A3A3] font-medium">{item.text}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
