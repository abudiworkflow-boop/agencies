"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Al-Rashid",
    role: "Owner, Bloom Restaurant Group",
    text: "We were losing 60% of our Instagram DMs because we couldn't reply fast enough. Now every single message gets a response in seconds. We booked 34 catering inquiries in the first month alone.",
    metric: "34 bookings in month 1",
    avatar: "SA",
  },
  {
    name: "Omar Hafiz",
    role: "Founder, Luxe Properties",
    text: "I used to spend 3 hours a day answering WhatsApp messages from buyers. Now the AI handles initial qualification and I only talk to serious buyers. My close rate went from 8% to 23%.",
    metric: "Close rate: 8% → 23%",
    avatar: "OH",
  },
  {
    name: "Nadia Mansour",
    role: "CEO, Glow Beauty Studio",
    text: "The follow-up sequences are a game changer. Clients who ghosted us after the first message are now booking appointments because the AI follows up on Day 3 and Day 7 automatically.",
    metric: "40% more rebookings",
    avatar: "NM",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div {...fadeUp} className="mb-14">
          <p className="text-[12px] font-medium text-[#2563EB] uppercase tracking-wider mb-3">
            Real results
          </p>
          <h2 className="text-[32px] sm:text-[44px] font-bold tracking-[-0.03em] leading-tight text-white">
            Don&apos;t take our word.
            <br />
            <span className="text-[#525252]">Take theirs.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              {...fadeUp}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl border border-[#1A1A1A] bg-[#0A0A0A] p-6 hover:border-[#262626] transition-colors flex flex-col"
            >
              {/* Quote icon */}
              <div className="mb-4">
                <Quote size={20} className="text-[#2563EB]/30" />
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={14} className="text-[#EAB308] fill-[#EAB308]" />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-[13px] text-[#A3A3A3] leading-relaxed flex-1 mb-5">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Metric highlight */}
              <div className="rounded-xl bg-[#22C55E]/5 border border-[#22C55E]/10 px-3 py-2 mb-5">
                <span className="text-[12px] font-semibold text-[#22C55E]">{t.metric}</span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#1A1A1A]">
                <div className="w-10 h-10 rounded-full bg-[#111] border border-[#1A1A1A] flex items-center justify-center">
                  <span className="text-[12px] font-bold text-[#525252]">{t.avatar}</span>
                </div>
                <div>
                  <div className="text-[13px] font-semibold text-white">{t.name}</div>
                  <div className="text-[11px] text-[#525252]">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
