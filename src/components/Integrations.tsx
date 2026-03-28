"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  Instagram,
  Mail,
  Globe,
  Sheet,
  CalendarDays,
  Megaphone,
  Search,
} from "lucide-react";

const integrations = [
  { icon: MessageSquare, name: "WhatsApp", color: "#22C55E" },
  { icon: Instagram, name: "Instagram", color: "#E1306C" },
  { icon: Mail, name: "Gmail", color: "#EA4335" },
  { icon: Globe, name: "Website Forms", color: "#2563EB" },
  { icon: Sheet, name: "Google Sheets", color: "#0F9D58" },
  { icon: CalendarDays, name: "Google Calendar", color: "#4285F4" },
  { icon: Megaphone, name: "Meta Ads", color: "#1877F2" },
  { icon: Search, name: "Google Ads", color: "#FBBC04" },
];

export default function Integrations() {
  return (
    <section className="py-12 border-y border-[#1A1A1A] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[11px] text-[#404040] uppercase tracking-widest font-medium text-center mb-8"
        >
          Integrates with your existing tools
        </motion.p>
      </div>

      {/* Scrolling ticker */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        <div className="flex animate-ticker">
          {[...integrations, ...integrations].map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={`${item.name}-${i}`}
                className="flex items-center gap-3 px-6 py-3 mx-2 rounded-xl border border-[#1A1A1A] bg-[#0A0A0A] flex-shrink-0 hover:border-[#262626] transition-colors"
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${item.color}10` }}
                >
                  <Icon size={16} style={{ color: item.color }} />
                </div>
                <span className="text-[13px] text-[#737373] font-medium whitespace-nowrap">{item.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
