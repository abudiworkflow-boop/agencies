"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, MessageCircle, Loader2, ChevronDown } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/966507120867?text=Hey%20I%20saw%20the%20AI%20Lead%20System%20and%20I%20want%20to%20get%20started";

const countryCodes = [
  { code: "+966", label: "+966" },
  { code: "+971", label: "+971" },
  { code: "+20", label: "+20" },
  { code: "+1", label: "+1" },
  { code: "+44", label: "+44" },
  { code: "+91", label: "+91" },
  { code: "+962", label: "+962" },
  { code: "+974", label: "+974" },
  { code: "+90", label: "+90" },
];

export default function CTA() {
  const [showForm, setShowForm] = useState(false);
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
    <section id="cta" className="py-20 sm:py-24 px-6">
      <div className="max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl border border-[#1A1A1A] bg-[#0A0A0A] p-8 sm:p-10 overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-[#22C55E]/[0.04] rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-4"
                >
                  <div className="w-16 h-16 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/20 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 size={32} className="text-[#22C55E]" />
                  </div>
                  <h3 className="text-[24px] font-bold text-white mb-2">
                    You&apos;re in.
                  </h3>
                  <p className="text-[14px] text-[#A3A3A3] mb-6">
                    We&apos;ll reach out within the hour.
                  </p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#22C55E] hover:bg-[#16A34A] text-white text-[14px] font-semibold px-6 py-3 rounded-xl transition-colors"
                  >
                    <MessageCircle size={18} />
                    Message us on WhatsApp
                  </a>
                </motion.div>
              ) : (
                <motion.div key="main" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <div className="text-center mb-8">
                    <h2 className="text-[28px] sm:text-[36px] font-bold tracking-[-0.03em] leading-tight text-white mb-3">
                      Let&apos;s build yours.
                    </h2>
                    <p className="text-[14px] text-[#525252] leading-relaxed">
                      Most people just message us. Takes 30 seconds.
                    </p>
                  </div>

                  {/* Primary: WhatsApp */}
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full bg-[#22C55E] hover:bg-[#16A34A] text-white text-[16px] font-semibold px-6 py-4 rounded-xl transition-colors mb-4"
                  >
                    <MessageCircle size={20} />
                    Message Us on WhatsApp
                  </a>

                  {/* Toggle form */}
                  <button
                    onClick={() => setShowForm(!showForm)}
                    className="flex items-center justify-center gap-2 w-full text-[13px] text-[#525252] hover:text-[#A3A3A3] transition-colors py-2"
                  >
                    Or fill out the form
                    <ChevronDown size={14} className={`transition-transform ${showForm ? "rotate-180" : ""}`} />
                  </button>

                  {/* Expandable form */}
                  <AnimatePresence>
                    {showForm && (
                      <motion.form
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                        onSubmit={handleSubmit}
                      >
                        <div className="pt-4 space-y-3">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <input
                              type="text"
                              name="name"
                              required
                              placeholder="Your name"
                              value={form.name}
                              onChange={handleChange}
                              className={inputClass}
                            />
                            <input
                              type="text"
                              name="business"
                              required
                              placeholder="Business name"
                              value={form.business}
                              onChange={handleChange}
                              className={inputClass}
                            />
                          </div>

                          <div className="flex gap-2">
                            <select
                              name="countryCode"
                              value={form.countryCode}
                              onChange={handleChange}
                              className="bg-[#111] border border-[#1A1A1A] rounded-xl px-3 py-3.5 text-[14px] text-white outline-none appearance-none cursor-pointer w-[90px]"
                            >
                              {countryCodes.map((c) => (
                                <option key={c.code} value={c.code}>{c.label}</option>
                              ))}
                            </select>
                            <input
                              type="tel"
                              name="phone"
                              required
                              placeholder="Phone number"
                              value={form.phone}
                              onChange={handleChange}
                              className={`${inputClass} flex-1`}
                            />
                          </div>

                          <input
                            type="email"
                            name="email"
                            required
                            placeholder="Email address"
                            value={form.email}
                            onChange={handleChange}
                            className={inputClass}
                          />

                          <button
                            type="submit"
                            disabled={submitting}
                            className="w-full flex items-center justify-center gap-2 bg-white hover:bg-neutral-200 disabled:opacity-50 text-black text-[14px] font-semibold px-6 py-3.5 rounded-xl transition-colors"
                          >
                            {submitting ? (
                              <Loader2 size={16} className="animate-spin" />
                            ) : (
                              <>
                                Submit <ArrowRight size={14} />
                              </>
                            )}
                          </button>
                        </div>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
