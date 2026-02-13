"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, User, Send, MessageSquare } from "lucide-react";

interface Message {
  id: number;
  sender: "customer" | "ai";
  text: string;
  time: string;
}

const demoConversation: Message[] = [
  {
    id: 1,
    sender: "customer",
    text: "Hi, I saw your ad on Instagram. I need help with social media marketing for my restaurant.",
    time: "10:32 AM",
  },
  {
    id: 2,
    sender: "ai",
    text: "Hello! Welcome! I'd be happy to help you with social media marketing for your restaurant. That's one of our core specialties. Could you tell me a bit more about what you're looking to achieve? For example, are you looking to increase foot traffic, grow your online presence, or both?",
    time: "10:32 AM",
  },
  {
    id: 3,
    sender: "customer",
    text: "Both actually. We just opened a second location and need to get the word out fast.",
    time: "10:33 AM",
  },
  {
    id: 4,
    sender: "ai",
    text: "Congratulations on the expansion! That's exciting. For a new location launch, we typically recommend a combination of Instagram/Facebook ads targeted to the local area, plus Google Ads for search visibility. What's your approximate monthly budget for marketing?",
    time: "10:33 AM",
  },
  {
    id: 5,
    sender: "customer",
    text: "We're thinking around $2,000-3,000 per month to start.",
    time: "10:34 AM",
  },
  {
    id: 6,
    sender: "ai",
    text: "That's a great starting budget! With $2-3K/month we can run effective campaigns across Meta and Google. How soon are you looking to get started? I'd love to set up a call with our team to create a customized strategy for your restaurant launch.",
    time: "10:34 AM",
  },
  {
    id: 7,
    sender: "customer",
    text: "As soon as possible! We're opening in 3 weeks.",
    time: "10:35 AM",
  },
  {
    id: 8,
    sender: "ai",
    text: "Perfect timing! We can definitely get campaigns up and running before your opening. Let me book you a strategy call with our team. Could you share your name and the best email or phone number to reach you?",
    time: "10:35 AM",
  },
];

export default function ChatSimulator() {
  const [visibleMessages, setVisibleMessages] = useState<Message[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const chatRef = useRef<HTMLDivElement>(null);

  const startDemo = () => {
    setVisibleMessages([]);
    setCurrentIndex(0);
    setIsPlaying(true);
  };

  useEffect(() => {
    if (!isPlaying) return;
    if (currentIndex >= demoConversation.length) {
      setIsPlaying(false);
      return;
    }

    const delay = demoConversation[currentIndex].sender === "ai" ? 1500 : 800;
    const timer = setTimeout(() => {
      setVisibleMessages((prev) => [...prev, demoConversation[currentIndex]]);
      setCurrentIndex((prev) => prev + 1);
    }, delay);

    return () => clearTimeout(timer);
  }, [isPlaying, currentIndex]);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [visibleMessages]);

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            See The AI In{" "}
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Action
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Watch how the AI bot handles a real customer inquiry — qualifying the lead and booking an appointment automatically
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-[#111827] border border-white/10 overflow-hidden shadow-2xl"
        >
          {/* Chat header */}
          <div className="flex items-center justify-between px-6 py-4 bg-[#1a2236] border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <div className="font-semibold text-sm">WhatsApp Business</div>
                <div className="text-xs text-green-400 flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                  AI Agent Online
                </div>
              </div>
            </div>
            <button
              onClick={startDemo}
              className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium transition-colors flex items-center gap-2"
            >
              <Send className="w-4 h-4" />
              {visibleMessages.length > 0 ? "Replay Demo" : "Start Demo"}
            </button>
          </div>

          {/* Chat messages */}
          <div
            ref={chatRef}
            className="h-[500px] overflow-y-auto p-6 space-y-4"
          >
            {visibleMessages.length === 0 && !isPlaying && (
              <div className="h-full flex items-center justify-center text-gray-500">
                <div className="text-center">
                  <Bot className="w-16 h-16 mx-auto mb-4 opacity-30" />
                  <p className="text-lg">Click &quot;Start Demo&quot; to see the AI in action</p>
                  <p className="text-sm mt-2">Watch a real customer conversation unfold</p>
                </div>
              </div>
            )}

            <AnimatePresence>
              {visibleMessages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 15, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className={`flex gap-3 ${msg.sender === "customer" ? "justify-end" : "justify-start"}`}
                >
                  {msg.sender === "ai" && (
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <Bot className="w-4 h-4 text-blue-400" />
                    </div>
                  )}
                  <div
                    className={`max-w-[75%] px-4 py-3 rounded-2xl ${
                      msg.sender === "customer"
                        ? "bg-green-600/20 border border-green-500/20 text-green-50"
                        : "bg-white/5 border border-white/10 text-gray-200"
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{msg.text}</p>
                    <p className={`text-xs mt-1 ${msg.sender === "customer" ? "text-green-400/50" : "text-gray-500"}`}>
                      {msg.time}
                    </p>
                  </div>
                  {msg.sender === "customer" && (
                    <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <User className="w-4 h-4 text-green-400" />
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>

            {isPlaying && currentIndex < demoConversation.length && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex gap-3"
              >
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                  {demoConversation[currentIndex].sender === "ai" ? (
                    <Bot className="w-4 h-4 text-blue-400" />
                  ) : (
                    <User className="w-4 h-4 text-green-400" />
                  )}
                </div>
                <div className="px-4 py-3 rounded-2xl bg-white/5 border border-white/10">
                  <div className="flex gap-1">
                    <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1, repeat: Infinity, delay: 0 }} className="w-2 h-2 rounded-full bg-gray-400" />
                    <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1, repeat: Infinity, delay: 0.2 }} className="w-2 h-2 rounded-full bg-gray-400" />
                    <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1, repeat: Infinity, delay: 0.4 }} className="w-2 h-2 rounded-full bg-gray-400" />
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Qualification indicator */}
          {visibleMessages.length >= 6 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="px-6 py-3 bg-emerald-500/10 border-t border-emerald-500/20 flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-sm text-emerald-400 font-medium">Lead Qualified</span>
              </div>
              <div className="text-xs text-gray-400">
                Budget: $2-3K/mo | Service: Social Media + Ads | Timeline: 3 weeks
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
