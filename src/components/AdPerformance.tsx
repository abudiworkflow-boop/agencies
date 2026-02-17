"use client";

import { motion } from "framer-motion";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  AreaChart, Area, CartesianGrid,
} from "recharts";
import { DollarSign, MousePointerClick, Eye, Target } from "lucide-react";

const weeklySpend = [
  { week: "W1", meta: 620, google: 480 },
  { week: "W2", meta: 740, google: 520 },
  { week: "W3", meta: 680, google: 610 },
  { week: "W4", meta: 820, google: 550 },
  { week: "W5", meta: 760, google: 640 },
  { week: "W6", meta: 900, google: 580 },
  { week: "W7", meta: 850, google: 700 },
  { week: "W8", meta: 940, google: 720 },
];

const conversionData = [
  { week: "W1", rate: 2.1 },
  { week: "W2", rate: 2.8 },
  { week: "W3", rate: 3.2 },
  { week: "W4", rate: 3.0 },
  { week: "W5", rate: 3.9 },
  { week: "W6", rate: 4.1 },
  { week: "W7", rate: 4.5 },
  { week: "W8", rate: 5.2 },
];

const kpis = [
  { icon: DollarSign, label: "Ad Spend", value: "$4,280", sub: "This month", color: "text-blue-400", bg: "bg-blue-500/10" },
  { icon: MousePointerClick, label: "Clicks", value: "8,492", sub: "CTR 3.2%", color: "text-violet-400", bg: "bg-violet-500/10" },
  { icon: Eye, label: "Impressions", value: "142K", sub: "Across platforms", color: "text-amber-400", bg: "bg-amber-500/10" },
  { icon: Target, label: "Cost Per Lead", value: "$12.40", sub: "-22% vs last month", color: "text-emerald-400", bg: "bg-emerald-500/10" },
];

const CustomTooltip = ({ active, payload, label }: { active?: boolean; payload?: Array<{ value: number; dataKey: string }>; label?: string }) => {
  if (!active || !payload) return null;
  return (
    <div className="bg-[#18181B] border border-[#27272A] rounded-lg px-3 py-2 text-[12px] shadow-xl">
      <p className="text-[#71717A] mb-1 font-medium">{label}</p>
      {payload.map((p, i) => (
        <p key={i} className="text-[#E4E4E7]">
          <span className="capitalize">{p.dataKey}</span>: {typeof p.value === "number" && p.dataKey !== "rate" ? `$${p.value}` : `${p.value}%`}
        </p>
      ))}
    </div>
  );
};

export default function AdPerformance() {
  return (
    <section id="analytics" className="section-padding px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-[12px] font-semibold text-amber-400 uppercase tracking-[0.15em] mb-3">
            Analytics
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Ad Performance
          </h2>
          <p className="text-[#71717A] text-[15px] max-w-md mx-auto">
            Track spend, clicks, and conversions across all platforms
          </p>
        </motion.div>

        {/* KPI row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
        >
          {kpis.map((k) => (
            <div key={k.label} className="card p-5">
              <div className={`w-9 h-9 rounded-lg ${k.bg} flex items-center justify-center mb-3`}>
                <k.icon className={`w-[18px] h-[18px] ${k.color}`} />
              </div>
              <div className="text-xl font-bold tracking-tight mb-0.5">{k.value}</div>
              <div className="text-[12px] text-[#52525B]">{k.label}</div>
              <div className="text-[11px] text-[#3F3F46] mt-1">{k.sub}</div>
            </div>
          ))}
        </motion.div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Bar chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card p-5"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-[14px] font-semibold">Weekly Ad Spend</h3>
              <div className="flex items-center gap-4 text-[11px] text-[#71717A]">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-sm bg-blue-500" /> Meta
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-sm bg-violet-500" /> Google
                </span>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={240}>
              <BarChart data={weeklySpend} barGap={4}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1E1E22" vertical={false} />
                <XAxis dataKey="week" tick={{ fill: "#52525B", fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: "#52525B", fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${v}`} />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(255,255,255,0.02)" }} />
                <Bar dataKey="meta" fill="#3B82F6" radius={[4, 4, 0, 0]} maxBarSize={28} />
                <Bar dataKey="google" fill="#8B5CF6" radius={[4, 4, 0, 0]} maxBarSize={28} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Area chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="card p-5"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-[14px] font-semibold">Conversion Rate Trend</h3>
              <span className="text-[11px] text-emerald-400 font-semibold">+148% growth</span>
            </div>
            <ResponsiveContainer width="100%" height={240}>
              <AreaChart data={conversionData}>
                <defs>
                  <linearGradient id="convGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#10B981" stopOpacity={0.2} />
                    <stop offset="100%" stopColor="#10B981" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1E1E22" vertical={false} />
                <XAxis dataKey="week" tick={{ fill: "#52525B", fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: "#52525B", fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={(v) => `${v}%`} />
                <Tooltip content={<CustomTooltip />} />
                <Area type="monotone" dataKey="rate" stroke="#10B981" strokeWidth={2} fill="url(#convGrad)" />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
