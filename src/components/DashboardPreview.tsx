"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  AreaChart, Area, CartesianGrid,
} from "recharts";

const leads = [
  { name: "Sarah Ahmed", channel: "WhatsApp", channelDot: "bg-green-500", service: "Social Media", status: "Qualified", statusColor: "text-[#22C55E] bg-[#22C55E]/10", score: 92, time: "2m" },
  { name: "Omar Khalil", channel: "Instagram", channelDot: "bg-pink-500", service: "Meta Ads", status: "In Progress", statusColor: "text-[#2563EB] bg-[#2563EB]/10", score: 78, time: "8m" },
  { name: "Layla Hassan", channel: "Website", channelDot: "bg-blue-500", service: "Full Suite", status: "Qualified", statusColor: "text-[#22C55E] bg-[#22C55E]/10", score: 88, time: "15m" },
  { name: "Karim Nasser", channel: "Gmail", channelDot: "bg-red-500", service: "Google Ads", status: "New", statusColor: "text-[#EAB308] bg-[#EAB308]/10", score: 45, time: "22m" },
  { name: "Nadia Youssef", channel: "WhatsApp", channelDot: "bg-green-500", service: "Brand Strategy", status: "Qualified", statusColor: "text-[#22C55E] bg-[#22C55E]/10", score: 85, time: "34m" },
  { name: "Tarek Mansour", channel: "Instagram", channelDot: "bg-pink-500", service: "Content", status: "In Progress", statusColor: "text-[#2563EB] bg-[#2563EB]/10", score: 72, time: "1h" },
  { name: "Mona El-Sayed", channel: "Website", channelDot: "bg-blue-500", service: "SEO + Ads", status: "Qualified", statusColor: "text-[#22C55E] bg-[#22C55E]/10", score: 91, time: "2h" },
];

const weeklySpend = [
  { w: "W1", meta: 620, google: 480 },
  { w: "W2", meta: 740, google: 520 },
  { w: "W3", meta: 680, google: 610 },
  { w: "W4", meta: 820, google: 550 },
  { w: "W5", meta: 760, google: 640 },
  { w: "W6", meta: 900, google: 580 },
  { w: "W7", meta: 850, google: 700 },
  { w: "W8", meta: 940, google: 720 },
];

const convData = [
  { w: "W1", r: 2.1 },
  { w: "W2", r: 2.8 },
  { w: "W3", r: 3.2 },
  { w: "W4", r: 3.0 },
  { w: "W5", r: 3.9 },
  { w: "W6", r: 4.1 },
  { w: "W7", r: 4.5 },
  { w: "W8", r: 5.2 },
];

const ChartTooltip = ({ active, payload, label }: { active?: boolean; payload?: Array<{ value: number; dataKey: string }>; label?: string }) => {
  if (!active || !payload) return null;
  return (
    <div className="bg-[#111] border border-[#1A1A1A] rounded-lg px-3 py-2 text-[11px] shadow-xl">
      <p className="text-[#525252] mb-1">{label}</p>
      {payload.map((p, i) => (
        <p key={i} className="text-[#A3A3A3]">
          {p.dataKey}: {p.dataKey === "r" ? `${p.value}%` : `$${p.value}`}
        </p>
      ))}
    </div>
  );
};

type Tab = "leads" | "analytics";

export default function DashboardPreview() {
  const [tab, setTab] = useState<Tab>("leads");

  return (
    <section id="dashboard" className="py-28 px-6">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="text-[12px] font-medium text-[#2563EB] uppercase tracking-wider mb-2">Dashboard</p>
          <h2 className="text-[36px] md:text-[48px] font-bold tracking-[-0.03em] leading-tight">
            Your command center.
          </h2>
        </motion.div>

        {/* Dashboard frame */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-[#1A1A1A] bg-[#0A0A0A] overflow-hidden"
        >
          {/* Top bar */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-[#1A1A1A]">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#EAB308]/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#22C55E]/60" />
              </div>
              <span className="text-[11px] text-[#404040] font-mono ml-2">dashboard.automateai.app</span>
            </div>
            {/* Tabs */}
            <div className="flex gap-1 bg-[#050505] border border-[#1A1A1A] rounded-lg p-0.5">
              {(["leads", "analytics"] as Tab[]).map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`text-[11px] font-medium px-3 py-1 rounded-md capitalize transition-all ${
                    tab === t ? "bg-[#1A1A1A] text-white" : "text-[#525252] hover:text-[#A3A3A3]"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#1A1A1A]">
            {[
              { label: "Total Leads", value: "1,247", delta: "+12%" },
              { label: "Qualified", value: "384", delta: "+18%" },
              { label: "Conversations", value: "3,892", delta: "+24%" },
              { label: "Booked Calls", value: "89", delta: "+9%" },
            ].map((s) => (
              <div key={s.label} className="bg-[#0A0A0A] p-5">
                <div className="text-[11px] text-[#404040] mb-1">{s.label}</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-[26px] font-bold tracking-tight">{s.value}</span>
                  <span className="text-[11px] font-medium text-[#22C55E]">{s.delta}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Content area */}
          <div className="p-5">
            {tab === "leads" ? (
              /* Leads table */
              <div className="rounded-xl border border-[#1A1A1A] overflow-hidden">
                {/* Header */}
                <div className="hidden sm:grid grid-cols-[1fr_90px_100px_80px_50px_50px] gap-4 px-4 py-2.5 bg-[#050505] text-[10px] text-[#404040] uppercase tracking-wider font-medium border-b border-[#1A1A1A]">
                  <span>Lead</span>
                  <span>Channel</span>
                  <span>Interest</span>
                  <span>Status</span>
                  <span className="text-center">Score</span>
                  <span className="text-right">Time</span>
                </div>
                {leads.map((l, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-1 sm:grid-cols-[1fr_90px_100px_80px_50px_50px] gap-2 sm:gap-4 items-center px-4 py-3 border-b border-[#1A1A1A] last:border-0 hover:bg-[#050505] transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-full bg-[#111] border border-[#1A1A1A] flex items-center justify-center text-[10px] font-bold text-[#525252]">
                        {l.name.split(" ").map((n) => n[0]).join("")}
                      </div>
                      <span className="text-[13px] font-medium text-[#D4D4D4]">{l.name}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className={`w-1.5 h-1.5 rounded-full ${l.channelDot}`} />
                      <span className="text-[12px] text-[#525252]">{l.channel}</span>
                    </div>
                    <span className="text-[12px] text-[#525252]">{l.service}</span>
                    <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold w-fit ${l.statusColor}`}>
                      {l.status}
                    </span>
                    <span className={`text-[12px] font-bold text-center ${l.score >= 80 ? "text-[#22C55E]" : l.score >= 60 ? "text-[#EAB308]" : "text-[#525252]"}`}>
                      {l.score}
                    </span>
                    <span className="text-[11px] text-[#404040] text-right">{l.time}</span>
                  </div>
                ))}
              </div>
            ) : (
              /* Analytics charts */
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="rounded-xl border border-[#1A1A1A] bg-[#050505] p-5">
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[13px] font-semibold">Weekly Ad Spend</span>
                    <div className="flex gap-3 text-[10px] text-[#525252]">
                      <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-sm bg-[#2563EB]" />Meta</span>
                      <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-sm bg-[#8B5CF6]" />Google</span>
                    </div>
                  </div>
                  <ResponsiveContainer width="100%" height={220}>
                    <BarChart data={weeklySpend} barGap={3}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#1A1A1A" vertical={false} />
                      <XAxis dataKey="w" tick={{ fill: "#404040", fontSize: 10 }} axisLine={false} tickLine={false} />
                      <YAxis tick={{ fill: "#404040", fontSize: 10 }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${v}`} />
                      <Tooltip content={<ChartTooltip />} cursor={{ fill: "rgba(255,255,255,0.01)" }} />
                      <Bar dataKey="meta" fill="#2563EB" radius={[3, 3, 0, 0]} maxBarSize={24} />
                      <Bar dataKey="google" fill="#8B5CF6" radius={[3, 3, 0, 0]} maxBarSize={24} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                <div className="rounded-xl border border-[#1A1A1A] bg-[#050505] p-5">
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[13px] font-semibold">Conversion Rate</span>
                    <span className="text-[10px] font-semibold text-[#22C55E]">+148%</span>
                  </div>
                  <ResponsiveContainer width="100%" height={220}>
                    <AreaChart data={convData}>
                      <defs>
                        <linearGradient id="cg" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#22C55E" stopOpacity={0.15} />
                          <stop offset="100%" stopColor="#22C55E" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#1A1A1A" vertical={false} />
                      <XAxis dataKey="w" tick={{ fill: "#404040", fontSize: 10 }} axisLine={false} tickLine={false} />
                      <YAxis tick={{ fill: "#404040", fontSize: 10 }} axisLine={false} tickLine={false} tickFormatter={(v) => `${v}%`} />
                      <Tooltip content={<ChartTooltip />} />
                      <Area type="monotone" dataKey="r" stroke="#22C55E" strokeWidth={2} fill="url(#cg)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
