"use client";

import { motion } from "framer-motion";
import { Bot, Zap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Automate
            </span>
            ?
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto mb-8">
            Let&apos;s set up your AI automation system and start converting more leads today.
          </p>
          <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold text-lg transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40">
            Get Started Now
          </button>
        </motion.div>

        <div className="flex items-center justify-between pt-8 border-t border-white/5">
          <div className="flex items-center gap-2">
            <Bot className="w-5 h-5 text-blue-400" />
            <span className="text-sm text-gray-500">AI Automation System</span>
          </div>
          <div className="flex items-center gap-1 text-xs text-gray-600">
            <Zap className="w-3 h-3" />
            Powered by n8n + OpenAI
          </div>
        </div>
      </div>
    </footer>
  );
}
