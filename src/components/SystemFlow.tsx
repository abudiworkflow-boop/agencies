"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  Instagram,
  Mail,
  Globe,
  Bot,
  BarChart3,
  CalendarCheck,
  Database,
  ArrowRight,
} from "lucide-react";

const channels = [
  { icon: MessageSquare, label: "WhatsApp", color: "bg-green-500", desc: "Business API" },
  { icon: Instagram, label: "Instagram", color: "bg-pink-500", desc: "DM Automation" },
  { icon: Mail, label: "Gmail", color: "bg-red-500", desc: "Email Capture" },
  { icon: Globe, label: "Website", color: "bg-blue-500", desc: "Live Chat Widget" },
];

const coreSteps = [
  { num: "01", title: "Instant AI Response", desc: "Replies within 3 seconds" },
  { num: "02", title: "Lead Qualification", desc: "Budget, timeline & needs" },
  { num: "03", title: "CRM Data Entry", desc: "Auto-structured records" },
  { num: "04", title: "Smart Follow-ups", desc: "Automated sequences" },
];

const outputs = [
  { icon: Database, label: "Lead Dashboard", desc: "Unified view" },
  { icon: BarChart3, label: "Reports", desc: "Client-ready" },
  { icon: CalendarCheck, label: "Bookings", desc: "Auto-scheduled" },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function SystemFlow() {
  return (
    <section id="how-it-works" className="section-padding px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div {...fadeUp} className="text-center mb-16">
          <p className="text-[12px] font-semibold text-blue-400 uppercase tracking-[0.15em] mb-3">
            Architecture
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            How It Works
          </h2>
          <p className="text-[#71717A] text-[15px] max-w-md mx-auto">
            From incoming message to qualified lead — fully automated
          </p>
        </motion.div>

        {/* Flow: 3 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 items-start">
          {/* Col 1: Channels */}
          <motion.div {...fadeUp} transition={{ delay: 0.1 }}>
            <p className="text-[11px] font-bold text-[#52525B] uppercase tracking-[0.15em] mb-5">
              Incoming Channels
            </p>
            <div className="space-y-3">
              {channels.map((ch) => (
                <div
                  key={ch.label}
                  className="card p-4 flex items-center gap-4"
                >
                  <div className={`w-10 h-10 rounded-xl ${ch.color} flex items-center justify-center flex-shrink-0`}>
                    <ch.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[14px] font-semibold text-white">{ch.label}</div>
                    <div className="text-[12px] text-[#52525B]">{ch.desc}</div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#3F3F46] flex-shrink-0 hidden sm:block" />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Col 2: AI Core */}
          <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
            <p className="text-[11px] font-bold text-[#52525B] uppercase tracking-[0.15em] mb-5 lg:text-center">
              AI Automation Core
            </p>
            <div className="card-elevated p-6 relative overflow-hidden">
              {/* Top accent line */}
              <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-blue-500 to-violet-500 rounded-full" />

              <div className="flex items-center gap-3 mb-6 pt-2">
                <div className="w-11 h-11 rounded-xl bg-blue-500 flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-[15px] font-bold">AI Engine</div>
                  <div className="text-[11px] text-[#52525B]">GPT-4o-mini Powered</div>
                </div>
                <div className="ml-auto flex items-center gap-1.5">
                  <span className="dot-live" />
                  <span className="text-[10px] text-emerald-400 font-semibold">LIVE</span>
                </div>
              </div>

              <div className="space-y-4">
                {coreSteps.map((s) => (
                  <div key={s.num} className="flex items-start gap-3">
                    <span className="text-[11px] font-mono font-bold text-[#3F3F46] mt-0.5 w-5 flex-shrink-0">
                      {s.num}
                    </span>
                    <div>
                      <div className="text-[13px] font-semibold text-[#E4E4E7]">{s.title}</div>
                      <div className="text-[11px] text-[#52525B]">{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Col 3: Output */}
          <motion.div {...fadeUp} transition={{ delay: 0.3 }}>
            <p className="text-[11px] font-bold text-[#52525B] uppercase tracking-[0.15em] mb-5">
              Business Output
            </p>
            <div className="space-y-3">
              {outputs.map((out) => (
                <div
                  key={out.label}
                  className="card p-4 flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#18181B] border border-[#27272A] flex items-center justify-center flex-shrink-0">
                    <out.icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-[14px] font-semibold text-white">{out.label}</div>
                    <div className="text-[12px] text-[#52525B]">{out.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
