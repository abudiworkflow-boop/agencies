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

const demoConversation: Message[] = [
  { id: 1, sender: "customer", text: "Hi, I saw your ad on Instagram. I need help with social media marketing for my restaurant.", time: "10:32 AM" },
  { id: 2, sender: "ai", text: "Hello! Welcome! I'd love to help with your restaurant's marketing. Social media is one of our specialties. Are you looking to increase foot traffic, grow your online presence, or both?", time: "10:32 AM" },
  { id: 3, sender: "customer", text: "Both actually. We just opened a second location and need to get the word out fast.", time: "10:33 AM" },
  { id: 4, sender: "ai", text: "Congratulations on the expansion! For a new location launch, we typically run targeted Instagram/Facebook ads locally plus Google Ads for search. What's your approximate monthly marketing budget?", time: "10:33 AM" },
  { id: 5, sender: "customer", text: "We're thinking around $2,000-3,000 per month.", time: "10:34 AM" },
  { id: 6, sender: "ai", text: "That's a solid starting budget — we can run effective campaigns across Meta and Google with that. How soon are you looking to launch? I'd love to book a strategy call with our team.", time: "10:34 AM" },
  { id: 7, sender: "customer", text: "As soon as possible! We open in 3 weeks.", time: "10:35 AM" },
  { id: 8, sender: "ai", text: "We can definitely have campaigns running before opening day. Let me set up a call with our team. Could you share your name and the best way to reach you?", time: "10:35 AM" },
];

const qualificationSteps = [
  { label: "Service Interest", value: "Social Media + Ads", delay: 2 },
  { label: "Budget Range", value: "$2,000 - $3,000/mo", delay: 4 },
  { label: "Timeline", value: "3 weeks (urgent)", delay: 6 },
  { label: "Lead Score", value: "Qualified", delay: 7 },
];

export default function ChatSimulator() {
  const [visibleMessages, setVisibleMessages] = useState<Message[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showQualification, setShowQualification] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);

  const startDemo = () => {
    setVisibleMessages([]);
    setCurrentIndex(0);
    setIsPlaying(true);
    setShowQualification(false);
  };

  useEffect(() => {
    if (!isPlaying) return;
    if (currentIndex >= demoConversation.length) {
      setIsPlaying(false);
      setTimeout(() => setShowQualification(true), 500);
      return;
    }
    const delay = demoConversation[currentIndex].sender === "ai" ? 1800 : 1000;
    const timer = setTimeout(() => {
      setVisibleMessages((prev) => [...prev, demoConversation[currentIndex]]);
      setCurrentIndex((prev) => prev + 1);
    }, delay);
    return () => clearTimeout(timer);
  }, [isPlaying, currentIndex]);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTo({ top: chatRef.current.scrollHeight, behavior: "smooth" });
    }
  }, [visibleMessages]);

  return (
    <section id="chat-demo" className="py-32 px-6 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(168,85,247,0.04)_0%,_transparent_60%)]" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold text-purple-400 uppercase tracking-[0.2em] mb-4 block">
            Live Demo
          </span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-5">
            Watch The AI <span className="gradient-text">In Action</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            A real conversation where the AI qualifies a lead automatically
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
          {/* Chat window */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card overflow-hidden"
          >
            {/* Header */}
            <div className="px-6 py-4 border-b border-white/[0.04] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-[#0f0f23]" />
                </div>
                <div>
                  <div className="text-sm font-semibold">AI Support Agent</div>
                  <div className="text-[11px] text-emerald-400">Online via WhatsApp</div>
                </div>
              </div>
              <button
                onClick={startDemo}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white text-sm font-medium shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-all duration-300"
              >
                {visibleMessages.length > 0 ? (
                  <>
                    <RotateCcw className="w-3.5 h-3.5" />
                    Replay
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5" />
                    Start Demo
                  </>
                )}
              </button>
            </div>

            {/* Messages */}
            <div ref={chatRef} className="h-[520px] overflow-y-auto p-6 space-y-5">
              {visibleMessages.length === 0 && !isPlaying && (
                <div className="h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-3xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center mx-auto mb-5">
                      <Sparkles className="w-8 h-8 text-indigo-400/40" />
                    </div>
                    <p className="text-gray-500 text-lg mb-1">Click &quot;Start Demo&quot;</p>
                    <p className="text-gray-600 text-sm">Watch a customer conversation unfold in real time</p>
                  </div>
                </div>
              )}

              <AnimatePresence>
                {visibleMessages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 12, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className={`flex gap-3 ${msg.sender === "customer" ? "justify-end" : "justify-start"}`}
                  >
                    {msg.sender === "ai" && (
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center flex-shrink-0 mt-1 shadow-md shadow-indigo-500/15">
                        <Bot className="w-4 h-4 text-white" />
                      </div>
                    )}
                    <div className={`max-w-[78%] ${msg.sender === "customer" ? "order-first" : ""}`}>
                      <div
                        className={`px-4 py-3 rounded-2xl ${
                          msg.sender === "customer"
                            ? "bg-indigo-500/15 border border-indigo-500/20 rounded-br-md"
                            : "bg-white/[0.04] border border-white/[0.06] rounded-bl-md"
                        }`}
                      >
                        <p className="text-[13px] leading-relaxed text-gray-200">{msg.text}</p>
                      </div>
                      <div className={`flex items-center gap-1.5 mt-1.5 px-1 ${msg.sender === "customer" ? "justify-end" : ""}`}>
                        <span className="text-[10px] text-gray-600">{msg.time}</span>
                        {msg.sender === "customer" && <CheckCheck className="w-3 h-3 text-blue-400" />}
                      </div>
                    </div>
                    {msg.sender === "customer" && (
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center flex-shrink-0 mt-1 shadow-md shadow-emerald-500/15">
                        <User className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Typing indicator */}
              {isPlaying && currentIndex < demoConversation.length && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-3 ${demoConversation[currentIndex].sender === "customer" ? "justify-end" : "justify-start"}`}
                >
                  {demoConversation[currentIndex].sender === "ai" && (
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-md shadow-indigo-500/15">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                  )}
                  <div className="px-5 py-3 rounded-2xl bg-white/[0.04] border border-white/[0.06]">
                    <div className="flex gap-1.5 items-center h-5">
                      {[0, 0.15, 0.3].map((d, i) => (
                        <motion.div
                          key={i}
                          animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.8, 0.3] }}
                          transition={{ duration: 1.2, repeat: Infinity, delay: d }}
                          className="w-2 h-2 rounded-full bg-indigo-400/60"
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Qualification sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card p-6 h-fit"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-emerald-400" />
              </div>
              <div>
                <div className="text-sm font-semibold">AI Analysis</div>
                <div className="text-[10px] text-gray-500 uppercase tracking-wider">Real-time extraction</div>
              </div>
            </div>

            <div className="space-y-4">
              {qualificationSteps.map((step, i) => {
                const isRevealed = showQualification || (visibleMessages.length >= step.delay);
                return (
                  <motion.div
                    key={step.label}
                    initial={{ opacity: 0.3 }}
                    animate={{ opacity: isRevealed ? 1 : 0.3 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-1.5"
                  >
                    <div className="text-[10px] text-gray-500 uppercase tracking-wider">{step.label}</div>
                    <div className={`text-sm font-medium px-3 py-2 rounded-lg transition-all duration-500 ${
                      isRevealed
                        ? i === qualificationSteps.length - 1
                          ? "bg-emerald-500/10 border border-emerald-500/20 text-emerald-400"
                          : "bg-white/[0.04] border border-white/[0.06] text-gray-200"
                        : "bg-white/[0.02] border border-white/[0.03] text-gray-600"
                    }`}>
                      {isRevealed ? step.value : "Waiting..."}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* CRM entry indicator */}
            <AnimatePresence>
              {showQualification && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-6 p-3 rounded-lg bg-indigo-500/10 border border-indigo-500/20"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
                    <span className="text-[11px] font-medium text-indigo-300">Logged to CRM</span>
                  </div>
                  <p className="text-[10px] text-gray-500">Lead data saved to Google Sheets automatically</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
