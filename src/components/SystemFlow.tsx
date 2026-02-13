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
  ArrowRight,
} from "lucide-react";

const channels = [
  { icon: MessageSquare, label: "WhatsApp", color: "text-green-400", bg: "bg-green-400/10", border: "border-green-400/30" },
  { icon: Instagram, label: "Instagram", color: "text-pink-400", bg: "bg-pink-400/10", border: "border-pink-400/30" },
  { icon: Mail, label: "Gmail", color: "text-red-400", bg: "bg-red-400/10", border: "border-red-400/30" },
  { icon: Globe, label: "Website", color: "text-blue-400", bg: "bg-blue-400/10", border: "border-blue-400/30" },
];

const aiFeatures = [
  "24/7 AI Customer Support",
  "Smart Lead Qualification",
  "Automatic CRM Data Collection",
  "Automated Follow-up Sequences",
];

const outputs = [
  { icon: Database, label: "Lead Dashboard", color: "text-cyan-400" },
  { icon: BarChart3, label: "Performance Reports", color: "text-yellow-400" },
  { icon: CalendarCheck, label: "Appointment Booking", color: "text-emerald-400" },
];

export default function SystemFlow() {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            How The System{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From incoming message to qualified lead — fully automated
          </p>
        </motion.div>

        {/* Flow diagram */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1.5fr_auto_1fr] gap-6 items-center">
          {/* Traffic Sources */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4 text-center">
              Traffic Sources
            </div>
            {channels.map((ch, i) => (
              <motion.div
                key={ch.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`flex items-center gap-3 p-4 rounded-xl ${ch.bg} border ${ch.border} hover:scale-105 transition-transform cursor-default`}
              >
                <ch.icon className={`w-6 h-6 ${ch.color}`} />
                <span className="font-medium">{ch.label}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Arrow */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="hidden md:flex flex-col items-center gap-2"
          >
            <div className="w-16 h-0.5 bg-gradient-to-r from-green-400/50 to-blue-400/50" />
            <ArrowRight className="w-5 h-5 text-blue-400" />
          </motion.div>

          {/* AI Core */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4 text-center">
              AI Automation Core
            </div>
            <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 animate-pulse-glow">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                  <Bot className="w-7 h-7 text-blue-400" />
                </div>
                <div>
                  <div className="font-bold text-lg">AI Engine</div>
                  <div className="text-sm text-gray-400">GPT-4o-mini Powered</div>
                </div>
              </div>
              <div className="space-y-3">
                {aiFeatures.map((feature, i) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="flex items-center gap-2 text-sm"
                  >
                    <div className="w-2 h-2 rounded-full bg-blue-400" />
                    <span className="text-gray-300">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Arrow */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="hidden md:flex flex-col items-center gap-2"
          >
            <div className="w-16 h-0.5 bg-gradient-to-r from-blue-400/50 to-purple-400/50" />
            <ArrowRight className="w-5 h-5 text-purple-400" />
          </motion.div>

          {/* Business Output */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="space-y-4"
          >
            <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4 text-center">
              Business Output
            </div>
            {outputs.map((out, i) => (
              <motion.div
                key={out.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 + i * 0.1 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:scale-105 transition-transform cursor-default"
              >
                <out.icon className={`w-6 h-6 ${out.color}`} />
                <span className="font-medium">{out.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
