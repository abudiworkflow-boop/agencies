"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, User, Play, RotateCcw, CheckCheck, ArrowRight } from "lucide-react";

interface Msg {
  id: number;
  from: "user" | "ai";
  text: string;
  time: string;
}

const script: Msg[] = [
  { id: 1, from: "user", text: "Hi, I saw your ad on Instagram. I need help with social media marketing for my restaurant.", time: "10:32 AM" },
  { id: 2, from: "ai", text: "Hello! Welcome! I'd love to help with your restaurant's marketing. Are you looking to increase foot traffic, grow your online presence, or both?", time: "10:32 AM" },
  { id: 3, from: "user", text: "Both actually. We just opened a second location and need to get the word out fast.", time: "10:33 AM" },
  { id: 4, from: "ai", text: "Congratulations on the expansion! For a new location launch, we typically run targeted Instagram/Facebook ads plus Google Ads for search. What's your approximate monthly marketing budget?", time: "10:33 AM" },
  { id: 5, from: "user", text: "We're thinking around $2,000-3,000 per month.", time: "10:34 AM" },
  { id: 6, from: "ai", text: "That's a solid budget for a dual-platform strategy. How soon do you need campaigns running?", time: "10:34 AM" },
  { id: 7, from: "user", text: "As soon as possible! We open in 3 weeks.", time: "10:35 AM" },
  { id: 8, from: "ai", text: "Perfect. I've flagged you as a priority lead. Our team will reach out within the hour to book your strategy call. Talk soon!", time: "10:35 AM" },
];

const quals = [
  { key: "channel", label: "Channel", value: "Instagram DM", at: 1 },
  { key: "interest", label: "Service", value: "Social Media + Ads", at: 2 },
  { key: "budget", label: "Budget", value: "$2,000 – $3,000/mo", at: 5 },
  { key: "timeline", label: "Timeline", value: "3 weeks (urgent)", at: 7 },
  { key: "score", label: "Lead Score", value: "94 — Hot", at: 8 },
  { key: "status", label: "Status", value: "Qualified — Sent to CRM", at: 8 },
];

export default function LiveDemo() {
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [playing, setPlaying] = useState(false);
  const [idx, setIdx] = useState(0);
  const [done, setDone] = useState(false);
  const [autoStarted, setAutoStarted] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const start = useCallback(() => {
    setMsgs([]);
    setIdx(0);
    setDone(false);
    setPlaying(true);
  }, []);

  useEffect(() => {
    if (autoStarted) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAutoStarted(true);
          start();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [autoStarted, start]);

  useEffect(() => {
    if (!playing) return;
    if (idx >= script.length) {
      setPlaying(false);
      setDone(true);
      return;
    }
    const delay = script[idx].from === "ai" ? 1500 : 800;
    const t = setTimeout(() => {
      setMsgs((p) => [...p, script[idx]]);
      setIdx((p) => p + 1);
    }, delay);
    return () => clearTimeout(t);
  }, [playing, idx]);

  useEffect(() => {
    chatRef.current?.scrollTo({ top: chatRef.current.scrollHeight, behavior: "smooth" });
  }, [msgs]);

  const msgCount = msgs.length;

  return (
    <section id="demo" className="py-20 sm:py-24 px-6" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <p className="text-[12px] font-medium text-[#2563EB] uppercase tracking-wider mb-3">
            Live demo
          </p>
          <h2 className="text-[28px] sm:text-[40px] font-bold tracking-[-0.03em] leading-tight text-white">
            See it work.
            <br />
            <span className="text-[#525252]">In real time.</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[14px] text-[#525252] mb-10 max-w-xl"
        >
          Watch the AI handle a full conversation — from first message to qualified lead in your CRM.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-4">
          {/* Chat window */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-[#1A1A1A] bg-[#0A0A0A] overflow-hidden flex flex-col"
          >
            <div className="flex items-center justify-between px-4 sm:px-5 py-3 border-b border-[#1A1A1A]">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-9 h-9 rounded-full bg-[#2563EB] flex items-center justify-center">
                    <Bot size={17} className="text-white" />
                  </div>
                  <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-[#22C55E] border-2 border-[#0A0A0A]" />
                </div>
                <div>
                  <div className="text-[13px] font-semibold text-white">AI Agent</div>
                  <div className="text-[11px] text-[#22C55E]">Online — Instagram DM</div>
                </div>
              </div>
              <button
                onClick={start}
                className="flex items-center gap-1.5 bg-white hover:bg-neutral-200 text-black text-[12px] font-semibold px-4 py-2 rounded-lg transition-colors"
              >
                {msgs.length > 0 ? (
                  <>
                    <RotateCcw size={13} /> Replay
                  </>
                ) : (
                  <>
                    <Play size={13} /> Start Demo
                  </>
                )}
              </button>
            </div>

            <div ref={chatRef} className="flex-1 min-h-[380px] max-h-[480px] overflow-y-auto p-4 sm:p-5 space-y-3">
              {msgs.length === 0 && !playing && (
                <div className="h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-14 h-14 rounded-2xl bg-[#111] border border-[#1A1A1A] flex items-center justify-center mx-auto mb-4">
                      <Play size={22} className="text-[#404040]" />
                    </div>
                    <p className="text-[13px] text-[#404040] mb-1">Press Start to begin</p>
                    <p className="text-[11px] text-[#262626]">Watch the AI handle a live conversation</p>
                  </div>
                </div>
              )}

              <AnimatePresence>
                {msgs.map((m) => (
                  <motion.div
                    key={m.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                    className={`flex gap-2.5 ${m.from === "user" ? "flex-row-reverse" : ""}`}
                  >
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        m.from === "ai" ? "bg-[#2563EB]" : "bg-[#262626]"
                      }`}
                    >
                      {m.from === "ai" ? (
                        <Bot size={13} className="text-white" />
                      ) : (
                        <User size={13} className="text-[#A3A3A3]" />
                      )}
                    </div>
                    <div className="max-w-[80%]">
                      <div
                        className={`px-3.5 py-2.5 rounded-2xl text-[13px] leading-relaxed ${
                          m.from === "user"
                            ? "bg-[#111] text-[#D4D4D4] rounded-tr-sm"
                            : "bg-[#2563EB]/10 border border-[#2563EB]/20 text-[#B0C8F5] rounded-tl-sm"
                        }`}
                      >
                        {m.text}
                      </div>
                      <div className={`flex items-center gap-1.5 mt-1 px-1 ${m.from === "user" ? "justify-end" : ""}`}>
                        <span className="text-[9px] text-[#404040]">{m.time}</span>
                        {m.from === "user" && <CheckCheck size={11} className="text-[#2563EB]" />}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {playing && idx < script.length && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={`flex gap-2.5 ${script[idx].from === "user" ? "flex-row-reverse" : ""}`}
                >
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${
                      script[idx].from === "ai" ? "bg-[#2563EB]" : "bg-[#262626]"
                    }`}
                  >
                    {script[idx].from === "ai" ? (
                      <Bot size={13} className="text-white" />
                    ) : (
                      <User size={13} className="text-[#A3A3A3]" />
                    )}
                  </div>
                  <div className="px-4 py-3 bg-[#111] rounded-2xl flex items-center gap-1.5">
                    {[0, 0.15, 0.3].map((d, i) => (
                      <motion.span
                        key={i}
                        animate={{ opacity: [0.2, 0.8, 0.2] }}
                        transition={{ duration: 1, repeat: Infinity, delay: d }}
                        className="w-1.5 h-1.5 rounded-full bg-[#525252]"
                      />
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            <AnimatePresence>
              {done && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="border-t border-[#1A1A1A] bg-[#050505] px-4 sm:px-5 py-4"
                >
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-[13px] text-[#737373]">
                      Full conversation handled. Lead qualified and logged.
                    </p>
                    <a
                      href="#cta"
                      className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-[13px] font-semibold px-5 py-2.5 rounded-lg transition-colors whitespace-nowrap"
                    >
                      Get Started <ArrowRight size={14} />
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* AI Extraction sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl border border-[#1A1A1A] bg-[#0A0A0A] p-5 flex flex-col"
          >
            <div className="flex items-center justify-between mb-5">
              <div>
                <div className="text-[14px] font-semibold text-white">AI Extraction</div>
                <div className="text-[11px] text-[#525252]">Real-time qualification</div>
              </div>
              {playing && (
                <span className="flex items-center gap-1.5 text-[10px] text-[#22C55E] font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />
                  Analyzing
                </span>
              )}
            </div>

            <div className="space-y-2 flex-1">
              {quals.map((q) => {
                const active = msgCount >= q.at;
                return (
                  <motion.div
                    key={q.key}
                    animate={active ? { scale: [1, 1.02, 1] } : {}}
                    transition={{ duration: 0.3 }}
                    className={`rounded-xl border px-4 py-3 transition-all duration-300 ${
                      active
                        ? q.key === "score"
                          ? "border-[#22C55E]/30 bg-[#22C55E]/5"
                          : q.key === "status"
                            ? "border-[#2563EB]/30 bg-[#2563EB]/5"
                            : "border-[#1A1A1A] bg-[#111]"
                        : "border-[#111] bg-[#050505]"
                    }`}
                  >
                    <div className="text-[10px] text-[#525252] uppercase tracking-wider mb-1">{q.label}</div>
                    <div
                      className={`text-[13px] font-medium transition-colors duration-300 ${
                        active
                          ? q.key === "score"
                            ? "text-[#22C55E]"
                            : q.key === "status"
                              ? "text-[#93B4F5]"
                              : "text-[#D4D4D4]"
                          : "text-[#262626]"
                      }`}
                    >
                      {active ? q.value : "\u2014"}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <AnimatePresence>
              {done && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-3 rounded-xl border border-[#22C55E]/20 bg-[#22C55E]/5 px-4 py-3"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#22C55E]" />
                    <span className="text-[12px] font-semibold text-[#22C55E]">
                      Saved to CRM
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
