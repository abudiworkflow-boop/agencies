"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/966507120867?text=Hey%20I%20saw%20the%20AI%20Lead%20System%20and%20I%20want%20to%20get%20started";

export default function Hero() {
  return (
    <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-20 px-6 overflow-hidden">
      {/* Gradient orbs — subtle */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#2563EB]/[0.04] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-[#22C55E]/10 border border-[#22C55E]/20 rounded-full px-4 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22C55E]" />
            </span>
            <span className="text-[12px] font-medium text-[#22C55E]">
              Systems live — handling leads now
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-[36px] sm:text-[52px] md:text-[64px] font-bold tracking-[-0.04em] leading-[1.08] mb-6"
        >
          Never lose a lead again.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-[15px] sm:text-[17px] text-[#737373] max-w-lg mx-auto mb-10 leading-relaxed"
        >
          AI that responds to every inquiry in under 3 seconds — WhatsApp, Instagram, email, and web. Captures, qualifies, and books. 24/7.
        </motion.p>

        {/* CTAs — WhatsApp primary */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-center gap-3 mb-8"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#22C55E] hover:bg-[#16A34A] text-white text-[15px] font-semibold px-8 py-4 rounded-xl transition-colors"
          >
            <MessageCircle size={18} />
            Message Us on WhatsApp
          </a>
          <a
            href="#cta"
            className="inline-flex items-center justify-center gap-2 text-[14px] font-medium text-[#A3A3A3] hover:text-white border border-[#262626] hover:border-[#404040] px-7 py-3.5 rounded-xl transition-all"
          >
            Get Started <ArrowRight size={14} />
          </a>
        </motion.div>

        {/* Trust line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center text-[12px] text-[#404040] mb-12"
        >
          Trusted by businesses in Saudi Arabia, UAE, and Egypt
        </motion.p>

        {/* Subtle stats */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex justify-center gap-8 sm:gap-12"
        >
          {[
            { value: "< 3s", label: "Response" },
            { value: "4", label: "Channels" },
            { value: "24/7", label: "Uptime" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-[20px] sm:text-[22px] font-bold tracking-tight text-white">{s.value}</div>
              <div className="text-[10px] text-[#525252] uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
