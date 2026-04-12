"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function VideoSection() {
  return (
    <section id="video" className="py-20 sm:py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-[12px] font-medium text-[#2563EB] uppercase tracking-wider mb-3">
            Walkthrough
          </p>
          <h2 className="text-[28px] sm:text-[40px] font-bold tracking-[-0.03em] leading-tight text-white">
            See a real system in action.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl border border-[#1A1A1A] bg-[#0A0A0A] overflow-hidden aspect-video flex items-center justify-center cursor-pointer group"
        >
          {/* Subtle background */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#111] to-[#0A0A0A]" />

          {/* Play button */}
          <div className="relative z-10 flex flex-col items-center gap-4">
            <div className="w-20 h-20 rounded-full bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-white/15 group-hover:scale-105 transition-all">
              <Play size={32} className="text-white ml-1" />
            </div>
            <p className="text-[14px] text-[#737373]">Video walkthrough coming soon</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
