"use client";

import { motion } from "framer-motion";
import { Send, Bot, TrendingUp, ArrowDown } from "lucide-react";

const steps = [
  {
    icon: Send,
    number: "01",
    title: "Lead Messages You",
    desc: "A potential customer reaches out via WhatsApp, Instagram DM, email, or your website form. Any channel, any time.",
    detail: "Works 24/7 — even weekends, holidays, and 3 AM.",
    color: "#22C55E",
  },
  {
    icon: Bot,
    number: "02",
    title: "AI Takes Over Instantly",
    desc: "Your AI agent responds in under 3 seconds with a personalized, context-aware message. It asks the right questions, qualifies the lead, and scores them automatically.",
    detail: "No scripts. No templates. Real AI conversation.",
    color: "#2563EB",
  },
  {
    icon: TrendingUp,
    number: "03",
    title: "You Get a Ready Client",
    desc: "Qualified leads are logged to your CRM with full conversation history, contact info, budget, and urgency level. Hot leads get flagged immediately.",
    detail: "You only talk to people ready to buy.",
    color: "#EAB308",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div {...fadeUp} className="mb-14">
          <p className="text-[12px] font-medium text-[#2563EB] uppercase tracking-wider mb-3">
            How it works
          </p>
          <h2 className="text-[32px] sm:text-[44px] font-bold tracking-[-0.03em] leading-tight text-white">
            Three steps.
            <br />
            <span className="text-[#525252]">Zero effort.</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={step.number}>
                <motion.div
                  {...fadeUp}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-2xl border border-[#1A1A1A] bg-[#0A0A0A] p-6 md:p-8 hover:border-[#262626] transition-colors group"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    {/* Step number + icon */}
                    <div className="flex items-center gap-4 md:flex-col md:items-center md:min-w-[80px]">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center border transition-colors"
                        style={{
                          backgroundColor: `${step.color}10`,
                          borderColor: `${step.color}20`,
                        }}
                      >
                        <Icon size={24} style={{ color: step.color }} />
                      </div>
                      <span className="text-[32px] font-bold text-[#1A1A1A] group-hover:text-[#262626] transition-colors font-mono">
                        {step.number}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-[20px] md:text-[24px] font-bold text-white mb-3">
                        {step.title}
                      </h3>
                      <p className="text-[14px] text-[#737373] leading-relaxed mb-3 max-w-2xl">
                        {step.desc}
                      </p>
                      <p className="text-[13px] font-medium" style={{ color: step.color }}>
                        {step.detail}
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Arrow connector */}
                {i < steps.length - 1 && (
                  <div className="flex justify-center py-2">
                    <ArrowDown size={20} className="text-[#1A1A1A]" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div {...fadeUp} transition={{ delay: 0.4 }} className="text-center mt-10">
          <a
            href="#demo"
            className="inline-flex items-center gap-2 text-[14px] font-medium text-[#2563EB] hover:text-[#93B4F5] transition-colors"
          >
            See it in action below <ArrowDown size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
