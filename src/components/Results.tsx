"use client";

import { motion } from "framer-motion";

const metrics = [
  { label: "Response Time", before: "2-4 hours", after: "< 3 seconds", impact: "99.9% faster" },
  { label: "Leads Captured", before: "~40%", after: "100%", impact: "Zero missed leads" },
  { label: "Qualification", before: "Manual review", after: "Instant AI scoring", impact: "Fully automated" },
  { label: "Operating Hours", before: "9 AM – 6 PM", after: "24/7/365", impact: "Never sleeps" },
  { label: "Cost Per Lead", before: "$34.00", after: "$12.40", impact: "-63% reduction" },
  { label: "Monthly Capacity", before: "~200 leads", after: "Unlimited", impact: "No bottleneck" },
];

const highlights = [
  { value: "4x", label: "More Conversions", desc: "vs manual handling" },
  { value: "$0", label: "Per Message", desc: "Unlimited conversations" },
  { value: "72%", label: "Qualification Rate", desc: "AI-powered scoring" },
];

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function Results() {
  return (
    <section id="results" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div {...fadeUp} className="mb-14">
          <p className="text-[12px] font-medium text-[#2563EB] uppercase tracking-wider mb-3">
            Results
          </p>
          <h2 className="text-[32px] sm:text-[44px] font-bold tracking-[-0.03em] leading-tight text-white">
            Before vs After.
          </h2>
        </motion.div>

        {/* Comparison table */}
        <div className="rounded-2xl border border-[#1A1A1A] bg-[#0A0A0A] overflow-hidden mb-6">
          {/* Header */}
          <div className="grid grid-cols-4 gap-4 px-6 py-4 border-b border-[#1A1A1A] bg-[#050505]">
            <span className="text-[10px] text-[#525252] uppercase tracking-wider font-medium">Metric</span>
            <span className="text-[10px] text-[#EF4444]/70 uppercase tracking-wider font-medium">Before</span>
            <span className="text-[10px] text-[#22C55E]/70 uppercase tracking-wider font-medium">After</span>
            <span className="text-[10px] text-[#525252] uppercase tracking-wider font-medium text-right">Impact</span>
          </div>

          {/* Rows */}
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              {...fadeUp}
              transition={{ delay: i * 0.04 }}
              className="grid grid-cols-4 gap-4 px-6 py-4 border-b border-[#1A1A1A] last:border-0 hover:bg-[#050505] transition-colors"
            >
              <span className="text-[13px] font-medium text-[#D4D4D4]">{m.label}</span>
              <span className="text-[13px] text-[#EF4444]/60 line-through decoration-[#EF4444]/30">{m.before}</span>
              <span className="text-[13px] font-semibold text-[#22C55E]">{m.after}</span>
              <span className="text-[12px] text-[#A3A3A3] text-right">{m.impact}</span>
            </motion.div>
          ))}
        </div>

        {/* Big number highlights */}
        <motion.div
          {...fadeUp}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          {highlights.map((n) => (
            <div
              key={n.label}
              className="rounded-2xl border border-[#1A1A1A] bg-[#0A0A0A] p-8 text-center hover:border-[#262626] transition-colors"
            >
              <div className="text-[48px] sm:text-[56px] font-bold tracking-tight text-[#2563EB] leading-none mb-2">
                {n.value}
              </div>
              <div className="text-[14px] font-semibold text-white mb-1">{n.label}</div>
              <div className="text-[12px] text-[#525252]">{n.desc}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
