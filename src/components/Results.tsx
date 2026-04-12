"use client";

import { motion } from "framer-motion";

const metrics = [
  { label: "Response Time", before: "2-4 hours", after: "< 3 seconds" },
  { label: "Leads Captured", before: "~40%", after: "100%" },
  { label: "Qualification", before: "Manual review", after: "Instant AI scoring" },
  { label: "Operating Hours", before: "9 AM – 6 PM", after: "24/7/365" },
  { label: "Cost Per Lead", before: "High", after: "63% lower" },
  { label: "Monthly Capacity", before: "~200 leads", after: "Unlimited" },
];

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function Results() {
  return (
    <section id="results" className="py-20 sm:py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div {...fadeUp} className="mb-10">
          <p className="text-[12px] font-medium text-[#2563EB] uppercase tracking-wider mb-3">
            Impact
          </p>
          <h2 className="text-[28px] sm:text-[40px] font-bold tracking-[-0.03em] leading-tight text-white">
            Before vs After.
          </h2>
        </motion.div>

        <div className="rounded-2xl border border-[#1A1A1A] bg-[#0A0A0A] overflow-hidden">
          {/* Header — desktop only */}
          <div className="hidden sm:grid grid-cols-3 gap-4 px-6 py-4 border-b border-[#1A1A1A] bg-[#050505]">
            <span className="text-[10px] text-[#525252] uppercase tracking-wider font-medium">Metric</span>
            <span className="text-[10px] text-[#EF4444]/70 uppercase tracking-wider font-medium">Before</span>
            <span className="text-[10px] text-[#22C55E]/70 uppercase tracking-wider font-medium">After</span>
          </div>

          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              {...fadeUp}
              transition={{ delay: i * 0.04 }}
              className="border-b border-[#1A1A1A] last:border-0 px-5 sm:px-6 py-4"
            >
              {/* Desktop */}
              <div className="hidden sm:grid grid-cols-3 gap-4">
                <span className="text-[13px] font-medium text-[#D4D4D4]">{m.label}</span>
                <span className="text-[13px] text-[#EF4444]/60 line-through decoration-[#EF4444]/30">{m.before}</span>
                <span className="text-[13px] font-semibold text-[#22C55E]">{m.after}</span>
              </div>
              {/* Mobile */}
              <div className="sm:hidden">
                <div className="text-[13px] font-medium text-[#D4D4D4] mb-2">{m.label}</div>
                <div className="flex items-center gap-3">
                  <span className="text-[12px] text-[#EF4444]/60 line-through decoration-[#EF4444]/30">{m.before}</span>
                  <span className="text-[12px] text-[#404040]">&rarr;</span>
                  <span className="text-[12px] font-semibold text-[#22C55E]">{m.after}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
