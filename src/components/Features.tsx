"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  Brain,
  Target,
  BarChart3,
  Clock,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Multi-Channel Capture",
    desc: "WhatsApp, Instagram DMs, Gmail, and website forms — all funneled into one AI agent.",
    span: "md:col-span-2",
    visual: (
      <div className="mt-4 grid grid-cols-2 gap-2">
        {[
          { name: "WhatsApp", color: "#22C55E" },
          { name: "Instagram", color: "#E1306C" },
          { name: "Gmail", color: "#EA4335" },
          { name: "Website", color: "#2563EB" },
        ].map((ch) => (
          <div key={ch.name} className="rounded-lg bg-[#111] border border-[#1A1A1A] p-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] text-[#737373]">{ch.name}</span>
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: ch.color }}
              />
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 size={12} className="text-[#22C55E]" />
              <span className="text-[11px] text-[#22C55E] font-medium">Connected</span>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    icon: Brain,
    title: "AI Response Engine",
    desc: "Responds in under 3 seconds with full context awareness across the conversation.",
    span: "",
    visual: (
      <div className="mt-4 space-y-2">
        <div className="rounded-lg bg-[#111] border border-[#1A1A1A] p-3">
          <div className="text-[11px] text-[#525252] mb-1">Customer</div>
          <div className="text-[12px] text-[#A3A3A3]">&ldquo;I need help with social media...&rdquo;</div>
        </div>
        <div className="rounded-lg bg-[#2563EB]/10 border border-[#2563EB]/20 p-3">
          <div className="text-[11px] text-[#2563EB] mb-1">AI Agent &middot; 2.1s</div>
          <div className="text-[12px] text-[#93B4F5]">&ldquo;I&apos;d love to help! Are you looking for organic growth or paid ads?&rdquo;</div>
        </div>
      </div>
    ),
  },
  {
    icon: Target,
    title: "Lead Qualification",
    desc: "Every lead scored on budget, timeline, service fit, and engagement quality.",
    span: "",
    visual: (
      <div className="mt-4 space-y-2">
        {[
          { label: "Budget", value: "$2-3K/mo", score: 88 },
          { label: "Timeline", value: "Urgent", score: 95 },
          { label: "Service Fit", value: "High", score: 92 },
        ].map((q) => (
          <div key={q.label} className="flex items-center justify-between rounded-lg bg-[#111] border border-[#1A1A1A] px-3 py-2">
            <div>
              <span className="text-[11px] text-[#525252]">{q.label}</span>
              <span className="text-[12px] text-[#A3A3A3] ml-2">{q.value}</span>
            </div>
            <span className={`text-[13px] font-bold ${q.score >= 90 ? "text-[#22C55E]" : "text-[#EAB308]"}`}>
              {q.score}
            </span>
          </div>
        ))}
      </div>
    ),
  },
  {
    icon: BarChart3,
    title: "CRM Integration",
    desc: "Every lead logged to your CRM with full conversation history and qualification data.",
    span: "md:col-span-2",
    visual: (
      <div className="mt-4 rounded-lg border border-[#1A1A1A] overflow-hidden overflow-x-auto">
        <div className="min-w-[300px]">
          <div className="grid grid-cols-5 gap-0 bg-[#050505] px-3 py-2 text-[9px] sm:text-[10px] text-[#525252] font-medium uppercase tracking-wider border-b border-[#1A1A1A]">
            <span>Lead</span>
            <span>Channel</span>
            <span>Service</span>
            <span>Score</span>
            <span>Status</span>
          </div>
          {[
            { name: "Lead #1", ch: "WhatsApp", svc: "Social", score: 92, status: "Qualified" },
            { name: "Lead #2", ch: "Instagram", svc: "Meta Ads", score: 78, status: "In Progress" },
            { name: "Lead #3", ch: "Website", svc: "Full Suite", score: 88, status: "Qualified" },
          ].map((r) => (
            <div key={r.name} className="grid grid-cols-5 gap-0 px-3 py-2 text-[10px] sm:text-[11px] border-b border-[#1A1A1A] last:border-0 bg-[#0A0A0A]">
              <span className="text-[#D4D4D4] font-medium">{r.name}</span>
              <span className="text-[#737373]">{r.ch}</span>
              <span className="text-[#737373]">{r.svc}</span>
              <span className={`font-bold ${r.score >= 80 ? "text-[#22C55E]" : "text-[#EAB308]"}`}>{r.score}</span>
              <span className={`text-[9px] sm:text-[10px] font-semibold ${r.status === "Qualified" ? "text-[#22C55E]" : "text-[#2563EB]"}`}>
                {r.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    icon: Clock,
    title: "Smart Follow-ups",
    desc: "Automated nurture sequences for leads that don't convert immediately.",
    span: "",
    visual: (
      <div className="mt-4 space-y-2">
        {[
          { day: "Day 1", msg: "Quick check-in", status: "Sent", color: "text-[#22C55E]" },
          { day: "Day 3", msg: "Case study share", status: "Sent", color: "text-[#22C55E]" },
          { day: "Day 7", msg: "Special offer", status: "Scheduled", color: "text-[#EAB308]" },
        ].map((s) => (
          <div key={s.day} className="flex items-center gap-3 rounded-lg bg-[#111] border border-[#1A1A1A] px-3 py-2.5">
            <span className="text-[11px] font-mono text-[#525252] w-10">{s.day}</span>
            <span className="text-[12px] text-[#A3A3A3] flex-1">{s.msg}</span>
            <span className={`text-[10px] font-semibold ${s.color}`}>{s.status}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    icon: Sparkles,
    title: "AI Ad Copy",
    desc: "Generate Meta & Google ad copy instantly with optimized headlines and CTAs.",
    span: "",
    visual: (
      <div className="mt-4 rounded-lg bg-[#111] border border-[#1A1A1A] p-3">
        <div className="text-[10px] text-[#2563EB] font-medium mb-2 uppercase tracking-wider">Generated Copy</div>
        <div className="text-[12px] text-[#D4D4D4] font-medium mb-1">&ldquo;Struggling with leads?&rdquo;</div>
        <div className="text-[11px] text-[#737373] leading-relaxed">
          Our AI captures & qualifies every lead 24/7. Book a free strategy call today.
        </div>
        <div className="mt-2 flex gap-2">
          <span className="text-[9px] bg-[#2563EB]/10 text-[#2563EB] px-2 py-0.5 rounded font-medium">Meta Ad</span>
          <span className="text-[9px] bg-[#22C55E]/10 text-[#22C55E] px-2 py-0.5 rounded font-medium">CTA: Book Call</span>
        </div>
      </div>
    ),
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function Features() {
  return (
    <section id="features" className="py-20 sm:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div {...fadeUp} className="mb-12">
          <p className="text-[12px] font-medium text-[#2563EB] uppercase tracking-wider mb-3">
            The system
          </p>
          <h2 className="text-[28px] sm:text-[40px] font-bold tracking-[-0.03em] leading-tight text-white">
            Everything it does.
            <br />
            <span className="text-[#525252]">One system.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                {...fadeUp}
                transition={{ delay: i * 0.06 }}
                className={`rounded-2xl border border-[#1A1A1A] bg-[#0A0A0A] p-6 hover:border-[#262626] transition-colors ${f.span}`}
              >
                <div className="w-10 h-10 rounded-xl bg-[#111] border border-[#1A1A1A] flex items-center justify-center mb-4">
                  <Icon size={18} className="text-[#737373]" />
                </div>
                <h3 className="text-[16px] font-semibold text-white mb-2">{f.title}</h3>
                <p className="text-[13px] text-[#525252] leading-relaxed">{f.desc}</p>
                {f.visual}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
