"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  Instagram,
  Mail,
  Globe,
  Bot,
  Database,
  BarChart3,
  CalendarCheck,
  ChevronRight,
} from "lucide-react";

const channels = [
  { icon: MessageSquare, label: "WhatsApp", gradient: "from-green-500 to-emerald-600", glow: "shadow-green-500/20" },
  { icon: Instagram, label: "Instagram DMs", gradient: "from-pink-500 to-rose-600", glow: "shadow-pink-500/20" },
  { icon: Mail, label: "Gmail", gradient: "from-red-500 to-orange-600", glow: "shadow-red-500/20" },
  { icon: Globe, label: "Website Chat", gradient: "from-blue-500 to-cyan-600", glow: "shadow-blue-500/20" },
];

const coreFeatures = [
  { num: "01", label: "Instant AI Response", desc: "Replies within seconds" },
  { num: "02", label: "Lead Qualification", desc: "Budget, need & timeline" },
  { num: "03", label: "Data Collection", desc: "Structured CRM entries" },
  { num: "04", label: "Smart Follow-ups", desc: "Automated sequences" },
];

const outputs = [
  { icon: Database, label: "Lead Dashboard", desc: "All leads in one view", gradient: "from-cyan-500 to-blue-600" },
  { icon: BarChart3, label: "Performance Reports", desc: "Client-ready analytics", gradient: "from-yellow-500 to-orange-600" },
  { icon: CalendarCheck, label: "Appointment Booking", desc: "Calendar integration", gradient: "from-emerald-500 to-teal-600" },
];

export default function SystemFlow() {
  return (
    <section id="system-flow" className="py-32 px-6 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(99,102,241,0.05)_0%,_transparent_60%)]" />

      <div className="max-w-7xl mx-auto relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-xs font-semibold text-indigo-400 uppercase tracking-[0.2em] mb-4 block">
            Architecture
          </span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-5">
            How It <span className="gradient-text-blue">Works</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            From incoming message to qualified lead — fully automated, zero manual work
          </p>
        </motion.div>

        {/* 3-column flow */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1.2fr_auto_1fr] gap-8 lg:gap-4 items-start">
          {/* Column 1: Traffic Sources */}
          <div className="space-y-3">
            <div className="text-[11px] font-bold text-gray-600 uppercase tracking-[0.2em] mb-6 text-center lg:text-left">
              Incoming Channels
            </div>
            {channels.map((ch, i) => (
              <motion.div
                key={ch.label}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="channel-pill glass-card-sm p-4 flex items-center gap-4 cursor-default"
              >
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${ch.gradient} flex items-center justify-center shadow-lg ${ch.glow} flex-shrink-0`}>
                  <ch.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-200">{ch.label}</div>
                  <div className="text-[11px] text-gray-500">Auto-detected</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Arrow 1 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="hidden lg:flex items-center justify-center self-center"
          >
            <div className="flex items-center gap-1">
              <div className="w-12 h-[1px] bg-gradient-to-r from-indigo-500/40 to-indigo-500/10" />
              <ChevronRight className="w-4 h-4 text-indigo-400/50" />
            </div>
          </motion.div>

          {/* Column 2: AI Core */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="self-center"
          >
            <div className="text-[11px] font-bold text-gray-600 uppercase tracking-[0.2em] mb-6 text-center">
              AI Automation Core
            </div>
            <div className="glass-card p-8 gradient-border glow-blue relative overflow-hidden">
              {/* Shimmer overlay */}
              <div className="absolute inset-0 animate-shimmer rounded-[20px]" />

              <div className="relative">
                {/* AI header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-xl shadow-indigo-500/25">
                    <Bot className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-lg font-bold">AI Engine</div>
                    <div className="text-xs text-indigo-400/70">GPT-4o-mini Powered</div>
                  </div>
                  <div className="ml-auto flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10px] text-emerald-400/80 font-medium">ACTIVE</span>
                  </div>
                </div>

                {/* Feature list */}
                <div className="space-y-4">
                  {coreFeatures.map((f, i) => (
                    <motion.div
                      key={f.num}
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.08 }}
                      className="flex items-center gap-4"
                    >
                      <span className="text-[10px] font-mono font-bold text-indigo-500/50 w-6">{f.num}</span>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-gray-200">{f.label}</div>
                        <div className="text-[11px] text-gray-600">{f.desc}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Arrow 2 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="hidden lg:flex items-center justify-center self-center"
          >
            <div className="flex items-center gap-1">
              <div className="w-12 h-[1px] bg-gradient-to-r from-purple-500/40 to-purple-500/10" />
              <ChevronRight className="w-4 h-4 text-purple-400/50" />
            </div>
          </motion.div>

          {/* Column 3: Output */}
          <div className="space-y-3 self-center">
            <div className="text-[11px] font-bold text-gray-600 uppercase tracking-[0.2em] mb-6 text-center lg:text-left">
              Business Output
            </div>
            {outputs.map((out, i) => (
              <motion.div
                key={out.label}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="channel-pill glass-card-sm p-4 flex items-center gap-4 cursor-default"
              >
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${out.gradient} flex items-center justify-center shadow-lg flex-shrink-0`}>
                  <out.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-200">{out.label}</div>
                  <div className="text-[11px] text-gray-500">{out.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
