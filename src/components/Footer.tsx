"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";

export default function Footer() {
  return (
    <>
      {/* CTA Section */}
      <section id="cta" className="section-padding px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-5">
              Ready to <span className="text-gradient">Automate</span>?
            </h2>
            <p className="text-[#71717A] text-[16px] max-w-lg mx-auto mb-10 leading-relaxed">
              Stop losing leads to slow response times. Let AI handle every
              inquiry instantly, 24/7, across every channel.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#" className="btn-primary text-[16px] !py-3.5 !px-8">
                Start Automating
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#live-demo" className="btn-secondary text-[16px] !py-3.5 !px-8">
                Watch Demo Again
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer bar */}
      <footer className="border-t border-[#1E1E22] px-6 py-8">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-blue-500 flex items-center justify-center">
              <Zap className="w-3 h-3 text-white" />
            </div>
            <span className="text-[13px] font-semibold text-[#71717A]">AutomateAI</span>
          </div>
          <p className="text-[12px] text-[#3F3F46]">
            Built with n8n + GPT-4o-mini. Fully automated, zero manual work.
          </p>
        </div>
      </footer>
    </>
  );
}
