"use client";

import { motion } from "framer-motion";
import { Send, Bot, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Send,
    number: "01",
    title: "Lead Messages You",
    desc: "A potential customer reaches out via WhatsApp, Instagram DM, email, or your website form. Any channel, any time.",
    detail: "Works 24/7 — even weekends, holidays, and 3 AM.",
    color: "#22C55E",
    visual: (
      <div className="space-y-2">
        {[
          { ch: "WhatsApp", msg: "Hi, I need help with...", time: "Just now", color: "#22C55E" },
          { ch: "Instagram", msg: "Saw your ad, interested in...", time: "2m ago", color: "#E1306C" },
          { ch: "Website", msg: "Contact form submitted", time: "5m ago", color: "#2563EB" },
        ].map((n) => (
          <div key={n.ch} className="flex items-center gap-3 bg-[#111] border border-[#1A1A1A] rounded-lg px-3 py-2">
            <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: n.color }} />
            <div className="flex-1 min-w-0">
              <span className="text-[11px] text-[#737373]">{n.ch}</span>
              <p className="text-[12px] text-[#A3A3A3] truncate">{n.msg}</p>
            </div>
            <span className="text-[10px] text-[#404040] flex-shrink-0">{n.time}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    icon: Bot,
    number: "02",
    title: "AI Takes Over Instantly",
    desc: "Your AI agent responds in under 3 seconds with a personalized, context-aware message. It asks the right questions, qualifies the lead, and scores them automatically.",
    detail: "No scripts. No templates. Real AI conversation.",
    color: "#2563EB",
    visual: (
      <div className="space-y-2">
        <div className="bg-[#111] border border-[#1A1A1A] rounded-lg p-3">
          <div className="text-[11px] text-[#525252] mb-1">Customer</div>
          <div className="text-[12px] text-[#A3A3A3]">&ldquo;How much for social media management?&rdquo;</div>
        </div>
        <div className="bg-[#2563EB]/10 border border-[#2563EB]/20 rounded-lg p-3">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[11px] text-[#2563EB]">AI Agent</span>
            <span className="text-[9px] bg-[#22C55E]/10 text-[#22C55E] px-1.5 py-0.5 rounded font-medium">2.1s</span>
          </div>
          <div className="text-[12px] text-[#93B4F5]">&ldquo;Great question! It depends on your goals. Are you focused on growing followers, generating leads, or both? And what&apos;s your monthly budget range?&rdquo;</div>
        </div>
      </div>
    ),
  },
  {
    icon: TrendingUp,
    number: "03",
    title: "You Get a Ready Client",
    desc: "Qualified leads are logged to your CRM with full conversation history, contact info, budget, and urgency level. Hot leads get flagged immediately.",
    detail: "You only talk to people ready to buy.",
    color: "#EAB308",
    visual: (
      <div className="bg-[#111] border border-[#1A1A1A] rounded-lg overflow-hidden">
        <div className="grid grid-cols-4 gap-0 bg-[#050505] px-3 py-2 text-[9px] text-[#525252] uppercase tracking-wider font-medium border-b border-[#1A1A1A]">
          <span>Lead</span>
          <span>Budget</span>
          <span>Score</span>
          <span>Status</span>
        </div>
        {[
          { name: "Nadia K.", budget: "$3K/mo", score: 94, status: "Hot" },
          { name: "Ahmed R.", budget: "$1.5K/mo", score: 82, status: "Warm" },
        ].map((l) => (
          <div key={l.name} className="grid grid-cols-4 gap-0 px-3 py-2 text-[11px] border-b border-[#1A1A1A] last:border-0">
            <span className="text-[#D4D4D4] font-medium">{l.name}</span>
            <span className="text-[#737373]">{l.budget}</span>
            <span className={`font-bold ${l.score >= 90 ? "text-[#22C55E]" : "text-[#EAB308]"}`}>{l.score}</span>
            <span className={`text-[10px] font-semibold ${l.status === "Hot" ? "text-[#EF4444]" : "text-[#EAB308]"}`}>{l.status}</span>
          </div>
        ))}
      </div>
    ),
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="max-w-6xl mx-auto relative z-10">
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

        <div className="space-y-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-[#1A1A1A] bg-[#0A0A0A] p-6 md:p-8 hover:border-[#262626] transition-all group"
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Left: step info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center border transition-all group-hover:scale-105"
                        style={{
                          backgroundColor: `${step.color}10`,
                          borderColor: `${step.color}20`,
                        }}
                      >
                        <Icon size={22} style={{ color: step.color }} />
                      </div>
                      <span className="text-[36px] font-bold text-[#1A1A1A] group-hover:text-[#262626] transition-colors font-mono">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="text-[22px] md:text-[26px] font-bold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-[14px] text-[#737373] leading-relaxed mb-3 max-w-lg">
                      {step.desc}
                    </p>
                    <p className="text-[13px] font-semibold" style={{ color: step.color }}>
                      {step.detail}
                    </p>
                  </div>

                  {/* Right: visual */}
                  <div className="lg:w-[340px] flex-shrink-0">
                    {step.visual}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div {...fadeUp} transition={{ delay: 0.4 }} className="text-center mt-10">
          <a
            href="#demo"
            className="inline-flex items-center gap-2 text-[14px] font-medium text-[#2563EB] hover:text-[#93B4F5] transition-colors"
          >
            See the full demo below ↓
          </a>
        </motion.div>
      </div>
    </section>
  );
}
