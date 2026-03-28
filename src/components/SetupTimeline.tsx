"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Settings,
  Bot,
  TestTube,
  Rocket,
  Headphones,
  CheckCircle2,
} from "lucide-react";

const timeline = [
  {
    day: "Day 1",
    title: "Discovery Call",
    desc: "We learn about your business, services, target customers, and goals. You tell us exactly how you want leads handled.",
    icon: Phone,
    color: "#2563EB",
  },
  {
    day: "Day 2-3",
    title: "System Build",
    desc: "We build your custom AI agent, configure all channels (WhatsApp, Instagram, Email, Website), and set up your CRM.",
    icon: Settings,
    color: "#8B5CF6",
  },
  {
    day: "Day 4-5",
    title: "AI Training",
    desc: "Your AI gets trained on your services, pricing, tone of voice, qualification criteria, and follow-up sequences.",
    icon: Bot,
    color: "#22C55E",
  },
  {
    day: "Day 5-6",
    title: "Testing",
    desc: "We run real test conversations across all channels. You review, give feedback, we fine-tune until it's perfect.",
    icon: TestTube,
    color: "#EAB308",
  },
  {
    day: "Day 7",
    title: "Go Live",
    desc: "Your AI lead system goes live. Every inquiry gets handled instantly. You start seeing qualified leads in your CRM.",
    icon: Rocket,
    color: "#EF4444",
  },
  {
    day: "Day 8-37",
    title: "Free Support",
    desc: "30 days of hands-on support. We monitor performance, optimize responses, and make sure everything runs smoothly.",
    icon: Headphones,
    color: "#2563EB",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function SetupTimeline() {
  return (
    <section id="timeline" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div {...fadeUp} className="mb-14">
          <p className="text-[12px] font-medium text-[#2563EB] uppercase tracking-wider mb-3">
            Setup Process
          </p>
          <h2 className="text-[32px] sm:text-[44px] font-bold tracking-[-0.03em] leading-tight text-white mb-3">
            Live in 7 days.
            <br />
            <span className="text-[#525252]">Here&apos;s how.</span>
          </h2>
          <p className="text-[14px] text-[#525252] max-w-xl">
            From first call to first qualified lead — the complete setup process.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[19px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-[#2563EB]/30 via-[#1A1A1A] to-[#1A1A1A]" />

          <div className="space-y-6">
            {timeline.map((step, i) => {
              const Icon = step.icon;
              const isRight = i % 2 === 1;
              return (
                <motion.div
                  key={step.day}
                  {...fadeUp}
                  transition={{ delay: i * 0.08 }}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    isRight ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Dot on timeline */}
                  <div className="absolute left-[12px] md:left-1/2 md:-translate-x-1/2 z-10">
                    <div
                      className="w-[15px] h-[15px] rounded-full border-2 bg-black"
                      style={{ borderColor: step.color }}
                    >
                      <div
                        className="w-full h-full rounded-full animate-glow-pulse"
                        style={{ backgroundColor: `${step.color}40` }}
                      />
                    </div>
                  </div>

                  {/* Spacer for mobile */}
                  <div className="w-[40px] flex-shrink-0 md:hidden" />

                  {/* Content card */}
                  <div className={`flex-1 md:w-[calc(50%-40px)] ${isRight ? "md:mr-auto md:pr-10" : "md:ml-auto md:pl-10"}`}>
                    <div className="rounded-2xl border border-[#1A1A1A] bg-[#0A0A0A] p-5 hover:border-[#262626] transition-colors">
                      <div className="flex items-center gap-3 mb-3">
                        <div
                          className="w-9 h-9 rounded-lg flex items-center justify-center"
                          style={{ backgroundColor: `${step.color}10` }}
                        >
                          <Icon size={16} style={{ color: step.color }} />
                        </div>
                        <div>
                          <span className="text-[11px] font-mono font-bold" style={{ color: step.color }}>
                            {step.day}
                          </span>
                          <h3 className="text-[15px] font-semibold text-white">{step.title}</h3>
                        </div>
                      </div>
                      <p className="text-[13px] text-[#737373] leading-relaxed">{step.desc}</p>
                    </div>
                  </div>

                  {/* Empty half for desktop */}
                  <div className="hidden md:block md:w-[calc(50%-40px)]" />
                </motion.div>
              );
            })}
          </div>

          {/* End marker */}
          <motion.div
            {...fadeUp}
            transition={{ delay: 0.6 }}
            className="flex items-center justify-center mt-8"
          >
            <div className="flex items-center gap-2 bg-[#22C55E]/10 border border-[#22C55E]/20 rounded-full px-5 py-2">
              <CheckCircle2 size={16} className="text-[#22C55E]" />
              <span className="text-[13px] font-semibold text-[#22C55E]">
                System Live & Generating Leads
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
