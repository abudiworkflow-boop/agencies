"use client";

import { motion } from "framer-motion";
import { Bot, Zap, TrendingUp } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#0f1629] to-[#0a0a0a]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm mb-8">
            <Zap className="w-4 h-4" />
            AI-Powered Automation System
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Turn Every{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Inquiry
            </span>{" "}
            Into a{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Client
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            A fully automated AI system that captures leads from every channel,
            responds instantly 24/7, qualifies prospects, and tracks your ad
            performance — without hiring additional staff.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-16">
            {[
              { icon: Bot, label: "24/7 AI Support", desc: "Never miss a lead" },
              { icon: Zap, label: "Instant Response", desc: "Under 3 seconds" },
              { icon: TrendingUp, label: "Smart Tracking", desc: "Every metric tracked" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
                className="flex items-center gap-3 px-6 py-3 rounded-xl bg-white/5 border border-white/10"
              >
                <item.icon className="w-5 h-5 text-blue-400" />
                <div className="text-left">
                  <div className="text-sm font-semibold">{item.label}</div>
                  <div className="text-xs text-gray-500">{item.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
