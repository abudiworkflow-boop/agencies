"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  Zap,
  Target,
  BarChart3,
  Clock,
  Sparkles,
  Headphones,
  Check,
  X,
} from "lucide-react";

const features = [
  { icon: MessageSquare, text: "Multi-channel lead capture (WhatsApp, Instagram, Email, Website)" },
  { icon: Zap, text: "AI-powered instant responses (< 3 seconds)" },
  { icon: Target, text: "Automatic lead qualification & scoring" },
  { icon: BarChart3, text: "CRM integration with full conversation logging" },
  { icon: Clock, text: "Smart follow-up sequences (Day 1, 3, 7)" },
  { icon: Sparkles, text: "AI-generated ad copy for Meta & Google" },
  { icon: Headphones, text: "30 days of free support after launch" },
];

const comparison = [
  { item: "Response time", us: "< 3 seconds", them: "2-4 hours" },
  { item: "Available", us: "24/7/365", them: "Business hours only" },
  { item: "Languages", us: "90+ languages", them: "1-2 languages" },
  { item: "Cost/month", us: "$0 (one-time)", them: "$2,000-4,000" },
  { item: "Sick days", us: "Never", them: "Yes" },
  { item: "Consistency", us: "100%", them: "Varies" },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="text-[12px] font-medium text-[#2563EB] uppercase tracking-wider mb-3">
            Pricing
          </p>
          <h2 className="text-[32px] sm:text-[44px] font-bold tracking-[-0.03em] leading-tight text-white">
            One system.
            <br />
            <span className="text-[#525252]">One price.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-6 items-start">
          {/* Pricing card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-[#2563EB]/20 via-[#2563EB]/5 to-transparent blur-sm pointer-events-none" />

              <div className="relative rounded-2xl border border-[#2563EB]/20 bg-[#0A0A0A] p-8 md:p-10 overflow-hidden">
                {/* Top glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[150px] bg-[#2563EB]/[0.06] rounded-full blur-[80px] pointer-events-none" />

                <div className="relative z-10">
                  {/* Urgency badge */}
                  <div className="flex justify-center mb-6">
                    <div className="inline-flex items-center gap-2 bg-[#EAB308]/10 border border-[#EAB308]/20 rounded-full px-4 py-1.5">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EAB308] opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#EAB308]" />
                      </span>
                      <span className="text-[12px] font-medium text-[#EAB308]">
                        Only 5 spots left this month
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <div className="text-center mb-8">
                    <p className="text-[13px] font-medium text-[#2563EB] uppercase tracking-wider mb-3">
                      Full AI Lead System
                    </p>
                    <div className="flex items-baseline justify-center gap-1 mb-2">
                      <span className="text-[64px] md:text-[72px] font-bold tracking-tight text-white leading-none">
                        $700
                      </span>
                    </div>
                    <p className="text-[14px] text-[#737373]">one-time setup</p>
                    <p className="text-[16px] font-semibold text-[#A3A3A3] mt-2">
                      Live in 7 days. Yours forever.
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-[#1A1A1A] mb-8" />

                  {/* Feature list */}
                  <div className="space-y-4 mb-8">
                    {features.map((f) => (
                      <div key={f.text} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#22C55E]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check size={12} className="text-[#22C55E]" />
                        </div>
                        <span className="text-[13px] text-[#A3A3A3] leading-relaxed">{f.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <a
                    href="#cta"
                    className="block w-full text-center bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-[15px] font-semibold px-6 py-4 rounded-xl transition-colors"
                  >
                    Get Started — $700
                  </a>

                  {/* Guarantee */}
                  <p className="text-center text-[11px] text-[#525252] mt-4">
                    30-day satisfaction guarantee. We&apos;ll rebuild it for free if it doesn&apos;t deliver.
                  </p>
                </div>
              </div>

              {/* Bottom note */}
              <p className="text-center text-[12px] text-[#525252] mt-4">
                No hidden costs. Full ownership. No monthly fees.
              </p>
            </div>
          </motion.div>

          {/* Comparison table */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="rounded-2xl border border-[#1A1A1A] bg-[#0A0A0A] overflow-hidden">
              <div className="px-6 py-5 border-b border-[#1A1A1A]">
                <h3 className="text-[16px] font-semibold text-white mb-1">
                  AI System vs Hiring a Sales Rep
                </h3>
                <p className="text-[12px] text-[#525252]">Why businesses are switching</p>
              </div>

              {/* Table header */}
              <div className="grid grid-cols-3 gap-4 px-6 py-3 bg-[#050505] border-b border-[#1A1A1A]">
                <span className="text-[10px] text-[#525252] uppercase tracking-wider font-medium" />
                <span className="text-[10px] text-[#2563EB] uppercase tracking-wider font-medium text-center">
                  AbudiAuto
                </span>
                <span className="text-[10px] text-[#525252] uppercase tracking-wider font-medium text-center">
                  Sales Rep
                </span>
              </div>

              {comparison.map((row) => (
                <div
                  key={row.item}
                  className="grid grid-cols-3 gap-4 px-6 py-3.5 border-b border-[#1A1A1A] last:border-0"
                >
                  <span className="text-[12px] text-[#737373]">{row.item}</span>
                  <div className="flex items-center justify-center gap-1.5">
                    <Check size={12} className="text-[#22C55E]" />
                    <span className="text-[12px] text-[#22C55E] font-medium">{row.us}</span>
                  </div>
                  <div className="flex items-center justify-center gap-1.5">
                    <X size={12} className="text-[#EF4444]/50" />
                    <span className="text-[12px] text-[#525252]">{row.them}</span>
                  </div>
                </div>
              ))}

              {/* Bottom summary */}
              <div className="px-6 py-5 bg-[#050505]">
                <div className="grid grid-cols-3 gap-4">
                  <span className="text-[12px] font-semibold text-white">Total Year 1</span>
                  <span className="text-[16px] font-bold text-[#22C55E] text-center">$700</span>
                  <span className="text-[16px] font-bold text-[#EF4444]/60 text-center">$36,000+</span>
                </div>
                <p className="text-[11px] text-[#22C55E] mt-2 text-center">
                  Save $35,300+ in year one alone
                </p>
              </div>
            </div>

            {/* ROI callout */}
            <div className="mt-4 rounded-2xl border border-[#22C55E]/10 bg-[#22C55E]/5 p-5 text-center">
              <p className="text-[14px] text-[#22C55E] font-semibold mb-1">
                Average ROI: 12x in 90 days
              </p>
              <p className="text-[12px] text-[#525252]">
                Most clients recoup their investment within the first 2-3 closed leads.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
