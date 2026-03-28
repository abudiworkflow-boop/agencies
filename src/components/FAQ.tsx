"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Do I need any technical knowledge to use this?",
    a: "Zero. We build and configure the entire system for you. You get a fully working AI lead system — all you need to do is check your CRM for new leads. We handle all the tech.",
  },
  {
    q: "What happens after the 30 days of free support?",
    a: "The system is yours forever — it keeps running. If you want ongoing optimization, priority support, or new features added, we offer optional maintenance plans. But most clients run fine on their own.",
  },
  {
    q: "How is this different from a chatbot?",
    a: "Chatbots follow scripts. Our AI actually understands context, asks intelligent follow-up questions, qualifies leads based on your criteria, and adapts its responses. It's the difference between a vending machine and a sales rep.",
  },
  {
    q: "What if the AI says something wrong to a lead?",
    a: "The AI is trained on your business, your services, and your pricing. Every response is grounded in your data. Plus, you can review all conversations in the CRM. In practice, the AI is more consistent than most human reps.",
  },
  {
    q: "Can it handle multiple languages?",
    a: "Yes. The AI can converse in Arabic, English, French, and 90+ other languages — and it can switch mid-conversation if the customer switches. Perfect for businesses with diverse client bases.",
  },
  {
    q: "$700 is a lot. Why not a monthly subscription?",
    a: "Because we want you to own it, not rent it. A sales rep costs $2,000-4,000/month. A lead management tool costs $200-500/month. You're getting both for a one-time $700 — it pays for itself with your first 2-3 closed leads.",
  },
  {
    q: "What if it doesn't work for my business?",
    a: "We'll work with you until it does. The system is customized to your industry, your services, and your sales process. If after 30 days you're not seeing results, we'll rebuild it at no extra cost.",
  },
  {
    q: "How long until I start seeing leads?",
    a: "The system goes live within 7 days. Most clients see their first AI-handled lead within 24 hours of launch — assuming you already have traffic coming to your channels.",
  },
];

function FAQItem({ faq, isOpen, toggle }: { faq: typeof faqs[0]; isOpen: boolean; toggle: () => void }) {
  return (
    <div className="border-b border-[#1A1A1A] last:border-0">
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-[14px] sm:text-[15px] font-medium text-[#D4D4D4] group-hover:text-white transition-colors pr-4">
          {faq.q}
        </span>
        <ChevronDown
          size={18}
          className={`text-[#525252] flex-shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180 text-[#2563EB]" : ""
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="text-[13px] text-[#737373] leading-relaxed pb-5 pr-8">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12">
          {/* Left side */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[12px] font-medium text-[#2563EB] uppercase tracking-wider mb-3">
              FAQ
            </p>
            <h2 className="text-[32px] sm:text-[40px] font-bold tracking-[-0.03em] leading-tight text-white mb-4">
              Questions?
              <br />
              <span className="text-[#525252]">Answers.</span>
            </h2>
            <p className="text-[14px] text-[#525252] leading-relaxed mb-6">
              Everything you need to know before getting started. Still have questions?
            </p>
            <a
              href="https://wa.me/966507120867?text=Hey%20I%20have%20a%20question%20about%20the%20AI%20Lead%20System"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[13px] font-medium text-[#22C55E] hover:text-[#16A34A] transition-colors"
            >
              Ask us on WhatsApp →
            </a>
          </motion.div>

          {/* Right side - FAQ items */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl border border-[#1A1A1A] bg-[#0A0A0A] px-6"
          >
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                isOpen={openIdx === i}
                toggle={() => setOpenIdx(openIdx === i ? null : i)}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
