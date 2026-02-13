"use client";

import { motion } from "framer-motion";
import { Bot, ArrowRight, Zap } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="relative">
      {/* CTA section */}
      <section className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(99,102,241,0.08)_0%,_transparent_50%)]" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center relative"
        >
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mx-auto mb-8 shadow-xl shadow-indigo-500/25">
            <Bot className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Ready to <span className="gradient-text">Automate</span>?
          </h2>
          <p className="text-gray-400 text-lg max-w-lg mx-auto mb-10">
            Set up your AI automation system and start converting more leads — without hiring additional staff.
          </p>
          <a
            href="#"
            className="group inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold text-lg shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-500"
          >
            Get Started
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </section>

      {/* Divider */}
      <div className="section-divider" />

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
            <Bot className="w-4 h-4 text-white" />
          </div>
          <span className="text-sm text-gray-500">AI Automation System</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-gray-600">
          <Zap className="w-3 h-3 text-indigo-400/50" />
          Powered by n8n + OpenAI
        </div>
      </div>
    </footer>
  );
}
