"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, User, Play, RotateCcw, CheckCheck, Sparkles } from "lucide-react";

interface Message {
  id: number;
  sender: "customer" | "ai";
  text: string;
  time: string;
}

const conversation: Message[] = [
  { id: 1, sender: "customer", text: "Hi, I saw your ad on Instagram. I need help with social media marketing for my restaurant.", time: "10:32 AM" },
  { id: 2, sender: "ai", text: "Hello! Welcome! I'd love to help with your restaurant's marketing. Social media is one of our specialties. Are you looking to increase foot traffic, grow your online presence, or both?", time: "10:32 AM" },
  { id: 3, sender: "customer", text: "Both actually. We just opened a second location and need to get the word out fast.", time: "10:33 AM" },
  { id: 4, sender: "ai", text: "Congratulations on the expansion! For a new location launch, we typically run targeted Instagram/Facebook ads locally plus Google Ads for search. What's your approximate monthly marketing budget?", time: "10:33 AM" },
  { id: 5, sender: "customer", text: "We're thinking around $2,000-3,000 per month.", time: "10:34 AM" },
  { id: 6, sender: "ai", text: "That's a solid budget — we can run effective campaigns across Meta and Google with that. How soon are you looking to launch? I'd love to book a strategy call with our team.", time: "10:34 AM" },
  { id: 7, sender: "customer", text: "As soon as possible! We open in 3 weeks.", time: "10:35 AM" },
  { id: 8, sender: "ai", text: "We can definitely have campaigns running before opening day. Let me set up a call with our team. Could you share your name and the best way to reach you?", time: "10:35 AM" },
];

const qualifications = [
  { label: "Service Interest", value: "Social Media + Ads", revealAt: 2 },
  { label: "Budget Range", value: "$2,000 - $3,000/mo", revealAt: 5 },
  { label: "Timeline", value: "3 weeks (urgent)", revealAt: 7 },
  { label: "Lead Score", value: "92 — Qualified", revealAt: 8 },
];

export default function ChatSimulator() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [playing, setPlaying] = useState(false);
  const [idx, setIdx] = useState(0);
  const [done, setDone] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const start = () => {
    setMessages([]);
    setIdx(0);
    setDone(false);
    setPlaying(true);
  };

  useEffect(() => {
    if (!playing) return;
    if (idx >= conversation.length) {
      setPlaying(false);
      setDone(true);
      return;
    }
    const delay = conversation[idx].sender === "ai" ? 1600 : 900;
    const t = setTimeout(() => {
      setMessages((p) => [...p, conversation[idx]]);
      setIdx((p) => p + 1);
    }, delay);
    return () => clearTimeout(t);
  }, [playing, idx]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  return (
    <section id="live-demo" className="section-padding px-6 relative">
      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-violet-500/[0.04] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-[12px] font-semibold text-violet-400 uppercase tracking-[0.15em] mb-3">
            Live Demo
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Watch The AI In Action
          </h2>
          <p className="text-[#71717A] text-[15px] max-w-md mx-auto">
            A real conversation where the AI qualifies a lead automatically
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6">
          {/* Chat window */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card overflow-hidden"
          >
            {/* Chat header */}
            <div className="px-5 py-3.5 border-b border-[#1E1E22] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-9 h-9 rounded-full bg-green-500 flex items-center justify-center">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#111113]" />
                </div>
                <div>
                  <div className="text-[13px] font-semibold">AI Support Agent</div>
                  <div className="text-[11px] text-emerald-400">Online — WhatsApp</div>
                </div>
              </div>
              <button onClick={start} className="btn-primary !text-[12px] !py-2 !px-4 !rounded-lg">
                {messages.length > 0 ? (
                  <><RotateCcw className="w-3.5 h-3.5" /> Replay</>
                ) : (
                  <><Play className="w-3.5 h-3.5" /> Start Demo</>
                )}
              </button>
            </div>

            {/* Messages area */}
            <div ref={scrollRef} className="h-[480px] overflow-y-auto p-5 space-y-4">
              {messages.length === 0 && !playing && (
                <div className="h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-2xl bg-[#18181B] border border-[#27272A] flex items-center justify-center mx-auto mb-4">
                      <Sparkles className="w-7 h-7 text-[#3F3F46]" />
                    </div>
                    <p className="text-[#52525B] text-[15px] mb-1">Press &quot;Start Demo&quot;</p>
                    <p className="text-[#3F3F46] text-[13px]">Watch the AI handle a real customer conversation</p>
                  </div>
                </div>
              )}

              <AnimatePresence>
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex gap-2.5 ${msg.sender === "customer" ? "flex-row-reverse" : ""}`}
                  >
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-1 ${
                      msg.sender === "ai" ? "bg-blue-500" : "bg-[#27272A]"
                    }`}>
                      {msg.sender === "ai" ? (
                        <Bot className="w-3.5 h-3.5 text-white" />
                      ) : (
                        <User className="w-3.5 h-3.5 text-[#A1A1AA]" />
                      )}
                    </div>
                    <div className={`max-w-[75%] ${msg.sender === "customer" ? "text-right" : ""}`}>
                      <div
                        className={`inline-block px-3.5 py-2.5 rounded-2xl text-[13px] leading-relaxed ${
                          msg.sender === "customer"
                            ? "bg-blue-500/15 text-blue-100 rounded-tr-sm"
                            : "bg-[#18181B] text-[#D4D4D8] rounded-tl-sm"
                        }`}
                      >
                        {msg.text}
                      </div>
                      <div className={`flex items-center gap-1.5 mt-1 px-1 ${msg.sender === "customer" ? "justify-end" : ""}`}>
                        <span className="text-[10px] text-[#3F3F46]">{msg.time}</span>
                        {msg.sender === "customer" && <CheckCheck className="w-3 h-3 text-blue-400" />}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Typing indicator */}
              {playing && idx < conversation.length && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={`flex gap-2.5 ${conversation[idx].sender === "customer" ? "flex-row-reverse" : ""}`}
                >
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${
                    conversation[idx].sender === "ai" ? "bg-blue-500" : "bg-[#27272A]"
                  }`}>
                    {conversation[idx].sender === "ai" ? (
                      <Bot className="w-3.5 h-3.5 text-white" />
                    ) : (
                      <User className="w-3.5 h-3.5 text-[#A1A1AA]" />
                    )}
                  </div>
                  <div className="px-4 py-3 bg-[#18181B] rounded-2xl">
                    <div className="flex gap-1 items-center">
                      {[0, 0.2, 0.4].map((d, i) => (
                        <motion.div
                          key={i}
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{ duration: 1, repeat: Infinity, delay: d }}
                          className="w-1.5 h-1.5 rounded-full bg-[#52525B]"
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Sidebar: AI Analysis */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="card p-5 h-fit"
          >
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-violet-400" />
              </div>
              <div>
                <div className="text-[13px] font-semibold">AI Analysis</div>
                <div className="text-[10px] text-[#52525B] uppercase tracking-wider">Real-time</div>
              </div>
            </div>

            <div className="space-y-4">
              {qualifications.map((q) => {
                const revealed = messages.length >= q.revealAt;
                return (
                  <div key={q.label}>
                    <div className="text-[10px] text-[#52525B] uppercase tracking-wider mb-1.5">{q.label}</div>
                    <div className={`text-[13px] font-medium px-3 py-2 rounded-lg transition-all duration-300 ${
                      revealed
                        ? q.label === "Lead Score"
                          ? "bg-emerald-500/10 border border-emerald-500/20 text-emerald-400"
                          : "bg-[#18181B] border border-[#27272A] text-[#E4E4E7]"
                        : "bg-[#0F0F11] border border-[#1E1E22] text-[#3F3F46]"
                    }`}>
                      {revealed ? q.value : "Waiting..."}
                    </div>
                  </div>
                );
              })}
            </div>

            <AnimatePresence>
              {done && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-6 p-3 rounded-lg bg-blue-500/8 border border-blue-500/15"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="dot-live" />
                    <span className="text-[11px] font-semibold text-blue-300">Saved to CRM</span>
                  </div>
                  <p className="text-[10px] text-[#52525B]">Lead data logged to Google Sheets automatically</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
