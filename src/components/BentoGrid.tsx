"use client";

import { motion } from "framer-motion";
import { MessageSquare, Instagram, Mail, Globe, Bot, Filter, Database, BarChart3, RefreshCw, Sparkles } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export default function BentoGrid() {
  return (
    <section id="features" className="py-28 px-6">
      <div className="max-w-[1200px] mx-auto">
        <motion.div {...fadeIn} className="mb-14">
          <p className="text-[12px] font-medium text-[#2563EB] uppercase tracking-wider mb-2">What it does</p>
          <h2 className="text-[36px] md:text-[48px] font-bold tracking-[-0.03em] leading-tight">
            Six modules.
            <br />
            <span className="text-[#525252]">One system.</span>
          </h2>
        </motion.div>

        {/* Bento layout — 3 cols */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Card 1: Multi-channel — large, spans 2 cols */}
          <motion.div
            {...fadeIn}
            className="md:col-span-2 rounded-2xl border border-[#1A1A1A] bg-[#0A0A0A] p-6 md:p-8 group hover:border-[#262626] transition-colors"
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-[18px] font-semibold mb-1">Multi-Channel Capture</h3>
                <p className="text-[13px] text-[#525252] max-w-sm">
                  Every lead from every channel flows into one AI-powered inbox. No message goes unanswered.
                </p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-[#111] border border-[#1A1A1A] flex items-center justify-center flex-shrink-0">
                <Globe size={18} className="text-[#2563EB]" />
              </div>
            </div>
            {/* Channel pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { icon: MessageSquare, name: "WhatsApp", color: "bg-green-500", leads: "842" },
                { icon: Instagram, name: "Instagram", color: "bg-pink-500", leads: "416" },
                { icon: Mail, name: "Gmail", color: "bg-red-500", leads: "238" },
                { icon: Globe, name: "Website", color: "bg-blue-500", leads: "651" },
              ].map((ch) => (
                <div key={ch.name} className="rounded-xl border border-[#1A1A1A] bg-[#050505] p-3.5 flex flex-col gap-3 hover:border-[#262626] transition-colors">
                  <div className="flex items-center gap-2">
                    <div className={`w-7 h-7 rounded-lg ${ch.color} flex items-center justify-center`}>
                      <ch.icon size={14} className="text-white" />
                    </div>
                    <span className="text-[13px] font-medium">{ch.name}</span>
                  </div>
                  <div>
                    <div className="text-[20px] font-bold tracking-tight">{ch.leads}</div>
                    <div className="text-[10px] text-[#404040]">leads this month</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Card 2: AI Response */}
          <motion.div
            {...fadeIn}
            transition={{ delay: 0.05 }}
            className="rounded-2xl border border-[#1A1A1A] bg-[#0A0A0A] p-6 hover:border-[#262626] transition-colors flex flex-col"
          >
            <div className="w-10 h-10 rounded-xl bg-[#111] border border-[#1A1A1A] flex items-center justify-center mb-5">
              <Bot size={18} className="text-[#2563EB]" />
            </div>
            <h3 className="text-[18px] font-semibold mb-1">AI Response Engine</h3>
            <p className="text-[13px] text-[#525252] mb-6">
              GPT-4o-mini responds to every inquiry within 3 seconds. Context-aware, brand-aligned conversations.
            </p>
            {/* Mini chat preview */}
            <div className="mt-auto rounded-xl border border-[#1A1A1A] bg-[#050505] p-3 space-y-2">
              <div className="flex justify-end">
                <div className="bg-[#111] border border-[#1A1A1A] rounded-xl rounded-br-sm px-3 py-2 text-[11px] text-[#A3A3A3] max-w-[80%]">
                  I need help with marketing
                </div>
              </div>
              <div className="flex justify-start">
                <div className="bg-[#2563EB]/10 border border-[#2563EB]/20 rounded-xl rounded-bl-sm px-3 py-2 text-[11px] text-[#93B4F5] max-w-[80%]">
                  Welcome! I&apos;d love to help. What type of marketing are you looking for?
                </div>
              </div>
              <div className="flex items-center gap-1 text-[10px] text-[#404040]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E]" />
                Responded in 1.8s
              </div>
            </div>
          </motion.div>

          {/* Card 3: Lead Qualification */}
          <motion.div
            {...fadeIn}
            transition={{ delay: 0.1 }}
            className="rounded-2xl border border-[#1A1A1A] bg-[#0A0A0A] p-6 hover:border-[#262626] transition-colors flex flex-col"
          >
            <div className="w-10 h-10 rounded-xl bg-[#111] border border-[#1A1A1A] flex items-center justify-center mb-5">
              <Filter size={18} className="text-[#2563EB]" />
            </div>
            <h3 className="text-[18px] font-semibold mb-1">Lead Qualification</h3>
            <p className="text-[13px] text-[#525252] mb-6">
              Automatically extracts budget, timeline, and service needs. Scores every lead instantly.
            </p>
            {/* Qualification preview */}
            <div className="mt-auto space-y-2">
              {[
                { label: "Budget", value: "$2-3K/mo", score: 85 },
                { label: "Timeline", value: "Urgent", score: 95 },
                { label: "Need", value: "Social + Ads", score: 78 },
              ].map((q) => (
                <div key={q.label} className="flex items-center justify-between rounded-lg border border-[#1A1A1A] bg-[#050505] px-3 py-2">
                  <div>
                    <span className="text-[10px] text-[#404040] block">{q.label}</span>
                    <span className="text-[12px] text-[#A3A3A3] font-medium">{q.value}</span>
                  </div>
                  <div className="text-[14px] font-bold text-[#22C55E]">{q.score}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Card 4: CRM */}
          <motion.div
            {...fadeIn}
            transition={{ delay: 0.15 }}
            className="rounded-2xl border border-[#1A1A1A] bg-[#0A0A0A] p-6 hover:border-[#262626] transition-colors flex flex-col"
          >
            <div className="w-10 h-10 rounded-xl bg-[#111] border border-[#1A1A1A] flex items-center justify-center mb-5">
              <Database size={18} className="text-[#2563EB]" />
            </div>
            <h3 className="text-[18px] font-semibold mb-1">CRM Integration</h3>
            <p className="text-[13px] text-[#525252] mb-6">
              Every conversation auto-saved to Google Sheets with structured fields. Zero manual entry.
            </p>
            {/* Mini table */}
            <div className="mt-auto rounded-xl border border-[#1A1A1A] bg-[#050505] overflow-hidden">
              <div className="grid grid-cols-3 gap-px text-[10px] text-[#404040] font-medium px-3 py-2 border-b border-[#1A1A1A]">
                <span>Name</span><span>Channel</span><span>Status</span>
              </div>
              {[
                { n: "Sarah A.", ch: "WA", s: "Qualified", sc: "text-[#22C55E]" },
                { n: "Omar K.", ch: "IG", s: "New", sc: "text-[#EAB308]" },
                { n: "Layla H.", ch: "Web", s: "Qualified", sc: "text-[#22C55E]" },
              ].map((r, i) => (
                <div key={i} className="grid grid-cols-3 gap-px text-[11px] px-3 py-1.5 border-b border-[#1A1A1A] last:border-0">
                  <span className="text-[#A3A3A3]">{r.n}</span>
                  <span className="text-[#525252]">{r.ch}</span>
                  <span className={`font-medium ${r.sc}`}>{r.s}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Card 5: Ad Tracking — spans 2 cols */}
          <motion.div
            {...fadeIn}
            transition={{ delay: 0.2 }}
            className="md:col-span-2 rounded-2xl border border-[#1A1A1A] bg-[#0A0A0A] p-6 md:p-8 hover:border-[#262626] transition-colors"
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-[18px] font-semibold mb-1">Ad Performance Tracking</h3>
                <p className="text-[13px] text-[#525252] max-w-sm">
                  Track Meta & Google Ads spend, clicks, impressions, and cost per lead across all campaigns.
                </p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-[#111] border border-[#1A1A1A] flex items-center justify-center flex-shrink-0">
                <BarChart3 size={18} className="text-[#2563EB]" />
              </div>
            </div>
            {/* Metrics row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { label: "Ad Spend", value: "$4,280", delta: "-12% waste" },
                { label: "Total Clicks", value: "8,492", delta: "+24% CTR" },
                { label: "Impressions", value: "142K", delta: "Meta + Google" },
                { label: "Cost/Lead", value: "$12.40", delta: "-22% vs last mo" },
              ].map((m) => (
                <div key={m.label} className="rounded-xl border border-[#1A1A1A] bg-[#050505] p-3.5">
                  <div className="text-[10px] text-[#404040] mb-1">{m.label}</div>
                  <div className="text-[22px] font-bold tracking-tight leading-none mb-1">{m.value}</div>
                  <div className="text-[10px] text-[#22C55E]">{m.delta}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Card 6: Follow-ups */}
          <motion.div
            {...fadeIn}
            transition={{ delay: 0.25 }}
            className="rounded-2xl border border-[#1A1A1A] bg-[#0A0A0A] p-6 hover:border-[#262626] transition-colors flex flex-col"
          >
            <div className="w-10 h-10 rounded-xl bg-[#111] border border-[#1A1A1A] flex items-center justify-center mb-5">
              <RefreshCw size={18} className="text-[#2563EB]" />
            </div>
            <h3 className="text-[18px] font-semibold mb-1">Smart Follow-ups</h3>
            <p className="text-[13px] text-[#525252] mb-6">
              Automated sequences that re-engage cold leads. Timed messages based on lead behavior.
            </p>
            <div className="mt-auto space-y-2">
              {[
                { step: "Day 1", msg: "Thanks for chatting! Here's a quick summary…", status: "Sent" },
                { step: "Day 3", msg: "Following up — ready to schedule a call?", status: "Sent" },
                { step: "Day 7", msg: "Special offer: free strategy session this week", status: "Scheduled" },
              ].map((f) => (
                <div key={f.step} className="flex items-center gap-3 rounded-lg border border-[#1A1A1A] bg-[#050505] px-3 py-2">
                  <span className="text-[10px] font-mono font-bold text-[#2563EB] w-8 flex-shrink-0">{f.step}</span>
                  <span className="text-[11px] text-[#525252] flex-1 truncate">{f.msg}</span>
                  <span className={`text-[9px] font-bold uppercase tracking-wider flex-shrink-0 ${
                    f.status === "Sent" ? "text-[#22C55E]" : "text-[#EAB308]"
                  }`}>{f.status}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Card 7: AI Ad Copy — full width */}
          <motion.div
            {...fadeIn}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 lg:col-span-3 rounded-2xl border border-[#1A1A1A] bg-[#0A0A0A] p-6 md:p-8 hover:border-[#262626] transition-colors"
          >
            <div className="flex items-start gap-6 flex-col sm:flex-row">
              <div className="flex-1">
                <div className="w-10 h-10 rounded-xl bg-[#111] border border-[#1A1A1A] flex items-center justify-center mb-5">
                  <Sparkles size={18} className="text-[#2563EB]" />
                </div>
                <h3 className="text-[18px] font-semibold mb-1">AI Ad Copy Generator</h3>
                <p className="text-[13px] text-[#525252] max-w-md">
                  Generate high-converting ad copy for Meta and Google campaigns. Tailored to your brand voice, audience, and goals. Create variations instantly and A/B test at scale.
                </p>
              </div>
              {/* Generated copy preview */}
              <div className="w-full sm:w-[320px] rounded-xl border border-[#1A1A1A] bg-[#050505] p-4 flex-shrink-0">
                <div className="text-[10px] text-[#404040] uppercase tracking-wider mb-3">Generated Copy</div>
                <div className="space-y-3">
                  <div className="rounded-lg bg-[#0A0A0A] border border-[#1A1A1A] p-3">
                    <div className="text-[10px] text-[#2563EB] font-medium mb-1">Meta — Instagram Story</div>
                    <p className="text-[11px] text-[#A3A3A3] leading-relaxed">&quot;Tired of invisible marketing? Our clients see 4x more leads in 30 days. Book a free strategy call today.&quot;</p>
                  </div>
                  <div className="rounded-lg bg-[#0A0A0A] border border-[#1A1A1A] p-3">
                    <div className="text-[10px] text-[#EAB308] font-medium mb-1">Google — Search Ad</div>
                    <p className="text-[11px] text-[#A3A3A3] leading-relaxed">&quot;Marketing Agency | 24/7 AI Support + Lead Gen — Results in 2 Weeks or Your Money Back&quot;</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
