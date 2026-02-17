"use client";

import { motion } from "framer-motion";
import { Bot, Filter, Database, BarChart3, RefreshCw, Sparkles } from "lucide-react";

const modules = [
  {
    icon: Bot,
    title: "AI Customer Support",
    desc: "24/7 instant responses across all channels with context-aware conversations.",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    icon: Filter,
    title: "Lead Qualification",
    desc: "Automatically score and qualify leads based on budget, timeline, and needs.",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
  },
  {
    icon: Database,
    title: "CRM Integration",
    desc: "Every conversation auto-logged to Google Sheets with structured data.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    icon: BarChart3,
    title: "Ad Performance Tracking",
    desc: "Monitor Meta & Google Ads spend, clicks, impressions, and conversions.",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
  },
  {
    icon: RefreshCw,
    title: "Automated Follow-ups",
    desc: "Smart sequences that re-engage leads who haven't converted yet.",
    color: "text-pink-400",
    bg: "bg-pink-500/10",
  },
  {
    icon: Sparkles,
    title: "AI Ad Copy Generator",
    desc: "Generate high-converting ad copy tailored to your brand and audience.",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
];

export default function Features() {
  return (
    <section id="modules" className="section-padding px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-[12px] font-semibold text-cyan-400 uppercase tracking-[0.15em] mb-3">
            Modules
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Everything You Need
          </h2>
          <p className="text-[#71717A] text-[15px] max-w-md mx-auto">
            Six automation modules working together seamlessly
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {modules.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="card-elevated p-6 group"
            >
              <div className={`w-11 h-11 rounded-xl ${m.bg} flex items-center justify-center mb-4 transition-transform duration-200 group-hover:scale-110`}>
                <m.icon className={`w-5 h-5 ${m.color}`} />
              </div>
              <h3 className="text-[15px] font-bold mb-2">{m.title}</h3>
              <p className="text-[13px] text-[#71717A] leading-relaxed">{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
