"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  Instagram,
  Mail,
  Globe,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const channels = [
  { icon: MessageSquare, label: "WhatsApp", color: "#22C55E" },
  { icon: Instagram, label: "Instagram", color: "#E1306C" },
  { icon: Mail, label: "Gmail", color: "#EA4335" },
  { icon: Globe, label: "Website", color: "#2563EB" },
];

const stats = [
  { value: "< 3s", label: "Avg Response" },
  { value: "100%", label: "Leads Captured" },
  { value: "24/7", label: "Always On" },
  { value: "92", label: "Lead Score" },
];

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      {/* Subtle gradient orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#2563EB]/[0.04] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-[#2563EB]/10 border border-[#2563EB]/20 rounded-full px-4 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22C55E]" />
            </span>
            <span className="text-[12px] font-medium text-[#2563EB]">
              System Active — Handling Leads 24/7
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center max-w-3xl mx-auto mb-6"
        >
          <h1 className="text-[40px] sm:text-[56px] md:text-[72px] font-bold tracking-[-0.04em] leading-[1.05]">
            AI that turns
            <br />
            <span className="text-[#2563EB]">conversations</span>
            <br />
            into clients.
          </h1>
        </motion.div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-[15px] sm:text-[17px] text-[#737373] max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Captures leads from WhatsApp, Instagram, Gmail & your website.
          Responds instantly. Qualifies. Logs to CRM. Books calls.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-20"
        >
          <a
            href="#demo"
            className="inline-flex items-center gap-2 bg-white text-black text-[14px] font-medium px-6 py-3 rounded-lg hover:bg-neutral-200 transition-colors"
          >
            Watch Live Demo <ArrowRight size={15} />
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 text-[14px] font-medium text-[#A3A3A3] hover:text-white border border-[#262626] hover:border-[#404040] px-6 py-3 rounded-lg transition-all"
          >
            Learn More
          </a>
        </motion.div>

        {/* Product preview card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="rounded-2xl border border-[#1A1A1A] bg-[#0A0A0A] overflow-hidden"
        >
          {/* Browser chrome */}
          <div className="flex items-center gap-2 px-5 py-3 border-b border-[#1A1A1A] bg-[#050505]">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#EAB308]/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#22C55E]/50" />
            </div>
            <div className="flex-1 flex justify-center">
              <div className="bg-[#111] rounded-md px-4 py-1 text-[11px] text-[#525252] font-mono">
                automateai.dashboard
              </div>
            </div>
          </div>

          {/* Dashboard preview */}
          <div className="p-5">
            {/* Channel cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
              {channels.map((ch, i) => {
                const Icon = ch.icon;
                return (
                  <motion.div
                    key={ch.label}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + i * 0.08 }}
                    className="rounded-xl border border-[#1A1A1A] bg-[#111] p-4 hover:border-[#262626] transition-colors"
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center mb-3"
                      style={{ backgroundColor: `${ch.color}15` }}
                    >
                      <Icon size={16} style={{ color: ch.color }} />
                    </div>
                    <div className="text-[12px] text-[#737373] mb-0.5">{ch.label}</div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 size={12} className="text-[#22C55E]" />
                      <span className="text-[11px] text-[#22C55E] font-medium">Connected</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + i * 0.08 }}
                  className="rounded-xl border border-[#1A1A1A] bg-[#111] p-4"
                >
                  <div className="text-[24px] font-bold tracking-tight text-white mb-1">
                    {s.value}
                  </div>
                  <div className="text-[11px] text-[#525252]">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
