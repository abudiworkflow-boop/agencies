"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  MessageSquare,
  Instagram,
  Mail,
  Globe,
  ArrowRight,
  CheckCircle2,
  Users,
  Zap,
  Shield,
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

function AnimatedNumber({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const steps = 40;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

const socialProofStats = [
  { icon: Users, value: 200, suffix: "+", label: "Businesses Automated" },
  { icon: Zap, value: 47000, suffix: "+", label: "Leads Processed" },
  { icon: Shield, value: 99, suffix: "%", label: "Uptime" },
];

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#2563EB]/[0.04] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-40 -left-40 w-[400px] h-[400px] bg-[#22C55E]/[0.02] rounded-full blur-[120px] pointer-events-none" />

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
          className="text-center max-w-4xl mx-auto mb-6"
        >
          <h1 className="text-[40px] sm:text-[56px] md:text-[72px] font-bold tracking-[-0.04em] leading-[1.05]">
            Stop losing leads.
            <br />
            <span className="text-[#2563EB]">Start closing</span> them.
          </h1>
        </motion.div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-[15px] sm:text-[17px] text-[#737373] max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Your AI employee that captures leads from WhatsApp, Instagram, Gmail & your website —
          responds in under 3 seconds, qualifies them, and books calls while you sleep.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-6"
        >
          <a
            href="#cta"
            className="inline-flex items-center gap-2 bg-white text-black text-[14px] font-semibold px-7 py-3.5 rounded-lg hover:bg-neutral-200 transition-colors"
          >
            Get Started — $1000 <ArrowRight size={15} />
          </a>
          <a
            href="#demo"
            className="inline-flex items-center gap-2 text-[14px] font-medium text-[#A3A3A3] hover:text-white border border-[#262626] hover:border-[#404040] px-7 py-3.5 rounded-lg transition-all"
          >
            Watch Live Demo
          </a>
        </motion.div>

        {/* Micro trust line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center text-[12px] text-[#404040] mb-16"
        >
          One-time setup. Live in 7 days. No monthly fees.
        </motion.p>

        {/* Social proof stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-16"
        >
          {socialProofStats.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.label} className="text-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <Icon size={14} className="text-[#2563EB]" />
                  <span className="text-[24px] sm:text-[28px] font-bold tracking-tight text-white">
                    <AnimatedNumber target={s.value} suffix={s.suffix} />
                  </span>
                </div>
                <span className="text-[11px] text-[#525252]">{s.label}</span>
              </div>
            );
          })}
        </motion.div>

        {/* Product preview card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
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
                    transition={{ delay: 0.7 + i * 0.08 }}
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
                  transition={{ delay: 1.0 + i * 0.08 }}
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
