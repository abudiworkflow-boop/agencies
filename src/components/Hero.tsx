"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageSquare, Instagram, Mail, Globe, Bot, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-28 pb-24 px-6">
      {/* Single subtle glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#2563EB]/[0.07] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#1A1A1A] bg-[#0A0A0A] text-[12px] text-[#525252] mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] shadow-[0_0_6px_rgba(34,197,94,0.6)]" />
            System Active — 24/7 Automated
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-[48px] sm:text-[56px] md:text-[72px] font-bold leading-[1.05] tracking-[-0.04em] mb-5"
          >
            AI that turns
            <br />
            <span className="text-[#2563EB]">conversations</span>
            <br />
            into clients.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[17px] text-[#525252] max-w-lg leading-relaxed mb-8"
          >
            Captures leads from WhatsApp, Instagram, Gmail & your website.
            Responds in under 3 seconds. Qualifies, logs to CRM, and books
            calls — fully automated.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex items-center gap-3 mb-16"
          >
            <a
              href="#demo"
              className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-[14px] font-medium px-5 py-2.5 rounded-lg transition-colors"
            >
              Watch Live Demo <ArrowRight size={15} />
            </a>
            <a
              href="#features"
              className="text-[14px] text-[#525252] hover:text-white px-4 py-2.5 transition-colors"
            >
              Learn more
            </a>
          </motion.div>
        </div>

        {/* Product preview — mini dashboard card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="rounded-2xl border border-[#1A1A1A] bg-[#0A0A0A] overflow-hidden"
        >
          {/* Top bar */}
          <div className="flex items-center gap-2 px-5 py-3 border-b border-[#1A1A1A]">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#EAB308]/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#22C55E]/60" />
            </div>
            <span className="text-[11px] text-[#404040] ml-2 font-mono">automateai.dashboard</span>
          </div>

          {/* Dashboard content */}
          <div className="p-5 grid grid-cols-2 lg:grid-cols-4 gap-3">
            {/* Stat cards */}
            {[
              { label: "Active Channels", value: "4", items: [MessageSquare, Instagram, Mail, Globe] },
              { label: "Leads Today", value: "23", sub: "+18% vs yesterday" },
              { label: "Avg Response", value: "2.4s", sub: "Across all channels" },
              { label: "Qualification Rate", value: "72%", sub: "+8% this week" },
            ].map((s, i) => (
              <div key={i} className="rounded-xl border border-[#1A1A1A] bg-[#050505] p-4">
                <div className="text-[11px] text-[#404040] mb-2">{s.label}</div>
                <div className="text-[24px] font-bold tracking-tight leading-none mb-2">{s.value}</div>
                {s.items ? (
                  <div className="flex gap-1.5">
                    {s.items.map((Icon, j) => (
                      <div key={j} className="w-6 h-6 rounded-md bg-[#111] border border-[#1A1A1A] flex items-center justify-center">
                        <Icon size={12} className="text-[#525252]" />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-[11px] text-[#404040]">{s.sub}</div>
                )}
              </div>
            ))}
          </div>

          {/* Recent activity mini feed */}
          <div className="px-5 pb-5">
            <div className="rounded-xl border border-[#1A1A1A] bg-[#050505] p-4">
              <div className="text-[11px] text-[#404040] uppercase tracking-wider mb-3">Live Activity</div>
              {[
                { icon: MessageSquare, color: "text-green-500", text: "New lead via WhatsApp — \"Looking for social media marketing\"", time: "2s ago" },
                { icon: Bot, color: "text-[#2563EB]", text: "AI qualified lead: Budget $2-3K/mo, Timeline: Urgent", time: "5s ago" },
                { icon: CheckCircle2, color: "text-emerald-500", text: "Lead saved to CRM — Score: 92/100 (Qualified)", time: "8s ago" },
              ].map((a, i) => (
                <div key={i} className="flex items-center gap-3 py-2 border-b border-[#1A1A1A] last:border-0">
                  <a.icon size={14} className={a.color} />
                  <span className="text-[12px] text-[#A3A3A3] flex-1 truncate">{a.text}</span>
                  <span className="text-[10px] text-[#404040] flex-shrink-0">{a.time}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
