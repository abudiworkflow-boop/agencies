"use client";

import { motion } from "framer-motion";
import { Bot, Filter, Database, BarChart3, RefreshCw, Sparkles } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "24/7 AI Customer Support",
    description: "Instant responses across WhatsApp, Instagram, Gmail, and your website. Every inquiry answered, no exceptions.",
    gradient: "from-indigo-500 to-blue-600",
  },
  {
    icon: Filter,
    title: "Smart Lead Qualification",
    description: "AI naturally asks about budget, service needs, and timeline — qualifying leads just like your best sales rep.",
    gradient: "from-purple-500 to-pink-600",
  },
  {
    icon: Database,
    title: "Automatic CRM Collection",
    description: "Every conversation logged with structured data: name, contact, interest, and qualification status.",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    icon: BarChart3,
    title: "Ad Performance Tracking",
    description: "Meta & Google Ads data pulled automatically. Track spend, clicks, conversions, and cost per lead.",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    icon: RefreshCw,
    title: "Automated Follow-ups",
    description: "Leads that don't convert immediately get personalized follow-up messages based on their pipeline stage.",
    gradient: "from-red-500 to-rose-600",
  },
  {
    icon: Sparkles,
    title: "AI Content & Ad Copy",
    description: "Generate ad copy, social posts, and campaign ideas powered by AI based on your performance data.",
    gradient: "from-cyan-500 to-blue-600",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-32 px-6 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(168,85,247,0.04)_0%,_transparent_50%)]" />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold text-purple-400 uppercase tracking-[0.2em] mb-4 block">
            Capabilities
          </span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-5">
            Six Powerful <span className="gradient-text">Modules</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Everything working together as one seamless system
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group glass-card-sm p-7 hover:bg-white/[0.03] transition-all duration-500 cursor-default"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-500`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-base font-semibold mb-2.5 tracking-tight">{feature.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
