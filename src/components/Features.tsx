"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Filter,
  Database,
  BarChart3,
  RefreshCw,
  Sparkles,
  Clock,
  Shield,
} from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "24/7 AI Customer Support",
    description: "Instant responses to every inquiry across WhatsApp, Instagram, Gmail, and your website. No lead left unanswered.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Filter,
    title: "Smart Lead Qualification",
    description: "AI automatically qualifies leads by asking about budget, service needs, and timeline — just like a sales rep would.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Database,
    title: "Automatic CRM Data Collection",
    description: "Every conversation is logged with structured data: name, contact, service interest, and qualification status.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: BarChart3,
    title: "Ad Performance Tracking",
    description: "Pulls data from Meta Ads and Google Ads automatically. Track spend, clicks, impressions, and conversions in one place.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: RefreshCw,
    title: "Automated Follow-up Sequences",
    description: "Leads that don't convert immediately get automated follow-up messages tailored to their stage in the pipeline.",
    color: "from-red-500 to-pink-500",
  },
  {
    icon: Sparkles,
    title: "AI Ad Copy & Content Assistance",
    description: "Generate ad copy, social media content, and campaign ideas powered by AI based on your performance data.",
    color: "from-indigo-500 to-purple-500",
  },
];

const benefits = [
  { icon: Clock, text: "Responds in under 3 seconds" },
  { icon: Shield, text: "No missed leads, ever" },
  { icon: BarChart3, text: "Clear ROI tracking" },
  { icon: RefreshCw, text: "Scales without hiring" },
];

export default function Features() {
  return (
    <section className="py-24 px-6 relative bg-[#060912]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Everything Your Agency{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Needs
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Six powerful automation modules working together as one system
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-6 rounded-xl bg-[#111827] border border-white/5 hover:border-white/15 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Benefits bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-8 py-8 px-6 rounded-2xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 border border-white/5"
        >
          {benefits.map((benefit) => (
            <div key={benefit.text} className="flex items-center gap-2 text-sm text-gray-300">
              <benefit.icon className="w-4 h-4 text-blue-400" />
              {benefit.text}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
