"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section id="cta" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-[#1A1A1A] bg-[#0A0A0A] p-10 md:p-16 text-center relative overflow-hidden"
        >
          {/* Accent glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-[#2563EB]/[0.06] rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10">
            <h2 className="text-[32px] md:text-[48px] font-bold tracking-[-0.03em] leading-tight text-white mb-4">
              Ready to automate?
            </h2>
            <p className="text-[15px] text-[#525252] max-w-md mx-auto mb-8 leading-relaxed">
              Stop losing leads to slow response times. Let AI handle every
              inquiry instantly, 24/7, across every channel.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-white hover:bg-neutral-200 text-black text-[14px] font-medium px-6 py-3 rounded-lg transition-colors"
              >
                Start Automating <ArrowRight size={15} />
              </a>
              <a
                href="#demo"
                className="inline-flex items-center gap-2 text-[14px] font-medium text-[#525252] hover:text-white border border-[#262626] hover:border-[#404040] px-6 py-3 rounded-lg transition-all"
              >
                Watch Demo Again
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
