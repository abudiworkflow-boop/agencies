"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, Shield, TrendingUp } from "lucide-react";

const stats = [
  { icon: Clock, value: "< 3s", label: "Response Time" },
  { icon: Shield, value: "24/7", label: "Availability" },
  { icon: TrendingUp, value: "4x", label: "More Conversions" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-[100vh] flex flex-col items-center justify-center px-6 pt-16">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-500/[0.06] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="badge">
            <span className="dot-live" />
            AI-Powered Automation
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.1] tracking-tight mb-6"
        >
          Turn Every Inquiry
          <br />
          Into <span className="text-gradient">Revenue</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[17px] text-[#71717A] max-w-xl mx-auto mb-12 leading-relaxed"
        >
          Capture leads from WhatsApp, Instagram, Gmail & your website.
          Respond instantly, qualify automatically, and convert on autopilot.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-20"
        >
          <a href="#live-demo" className="btn-primary">
            See Live Demo
            <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#how-it-works" className="btn-secondary">
            How It Works
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-wrap justify-center gap-12"
        >
          {stats.map((s) => (
            <div key={s.label} className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#111113] border border-[#1E1E22] flex items-center justify-center">
                <s.icon className="w-[18px] h-[18px] text-blue-400" />
              </div>
              <div className="text-left">
                <div className="text-xl font-bold tracking-tight">{s.value}</div>
                <div className="text-[11px] text-[#52525B] uppercase tracking-wider font-medium">{s.label}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
