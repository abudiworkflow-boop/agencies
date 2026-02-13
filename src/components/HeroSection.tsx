"use client";

import { motion } from "framer-motion";
import { Bot, Zap, TrendingUp, MessageSquare, Shield, ChevronDown } from "lucide-react";

const floatingIcons = [
  { icon: MessageSquare, x: "10%", y: "20%", delay: 0, color: "text-green-400/30" },
  { icon: Bot, x: "85%", y: "15%", delay: 1, color: "text-indigo-400/30" },
  { icon: TrendingUp, x: "75%", y: "70%", delay: 2, color: "text-cyan-400/30" },
  { icon: Shield, x: "15%", y: "75%", delay: 0.5, color: "text-purple-400/30" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background layers */}
      <div className="absolute inset-0">
        {/* Main gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(99,102,241,0.08)_0%,_transparent_70%)]" />
        {/* Top-right orb */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-indigo-500/[0.07] rounded-full blur-[120px]" />
        {/* Bottom-left orb */}
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-purple-500/[0.06] rounded-full blur-[120px]" />
        {/* Center glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-500/[0.04] rounded-full blur-[100px]" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Floating icons */}
      {floatingIcons.map((item, i) => (
        <motion.div
          key={i}
          className={`absolute ${item.color} hidden md:block`}
          style={{ left: item.x, top: item.y }}
          animate={{ y: [0, -15, 0], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity, delay: item.delay, ease: "easeInOut" }}
        >
          <item.icon className="w-8 h-8" />
        </motion.div>
      ))}

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-indigo-500/[0.08] border border-indigo-500/20 text-indigo-300 text-sm mb-10"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-400" />
          </span>
          AI-Powered Automation System
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight mb-8"
        >
          Turn Every
          <br />
          <span className="gradient-text">Inquiry</span> Into
          <br />
          Revenue
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-14 leading-relaxed"
        >
          Capture leads from every channel. Respond instantly, 24/7.
          Qualify, track, and convert — all on autopilot.
        </motion.p>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap justify-center gap-x-12 gap-y-6 mb-16"
        >
          {[
            { value: "<3s", label: "Response Time", icon: Zap },
            { value: "24/7", label: "Availability", icon: Bot },
            { value: "4x", label: "More Conversions", icon: TrendingUp },
          ].map((stat) => (
            <div key={stat.label} className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center">
                <stat.icon className="w-5 h-5 text-indigo-400" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold tracking-tight">{stat.value}</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="#chat-demo"
            className="group relative px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold text-lg shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-500 overflow-hidden"
          >
            <span className="relative z-10">See Live Demo</span>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </a>
          <a
            href="#system-flow"
            className="px-8 py-4 rounded-2xl text-gray-300 font-semibold text-lg border border-white/10 hover:border-white/20 hover:bg-white/[0.03] transition-all duration-300"
          >
            How It Works
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#system-flow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-gray-600" />
        </motion.div>
      </motion.a>
    </section>
  );
}
