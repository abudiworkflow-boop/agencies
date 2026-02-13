"use client";

import { motion } from "framer-motion";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, AreaChart, Area,
} from "recharts";
import { DollarSign, MousePointer, Eye, Target } from "lucide-react";

const weeklyData = [
  { day: "Mon", meta: 120, google: 85, leads: 12 },
  { day: "Tue", meta: 135, google: 90, leads: 15 },
  { day: "Wed", meta: 110, google: 95, leads: 11 },
  { day: "Thu", meta: 145, google: 80, leads: 18 },
  { day: "Fri", meta: 160, google: 100, leads: 22 },
  { day: "Sat", meta: 90, google: 60, leads: 8 },
  { day: "Sun", meta: 80, google: 50, leads: 7 },
];

const conversionData = [
  { day: "Week 1", rate: 12 },
  { day: "Week 2", rate: 18 },
  { day: "Week 3", rate: 22 },
  { day: "Week 4", rate: 28 },
  { day: "Week 5", rate: 31 },
  { day: "Week 6", rate: 35 },
  { day: "Week 7", rate: 38 },
  { day: "Week 8", rate: 42 },
];

const metrics = [
  { label: "Ad Spend", value: "$4,280", sub: "This month", icon: DollarSign, gradient: "from-emerald-500 to-teal-600" },
  { label: "Total Clicks", value: "8,492", sub: "+24% vs last month", icon: MousePointer, gradient: "from-indigo-500 to-blue-600" },
  { label: "Impressions", value: "142K", sub: "Across all platforms", icon: Eye, gradient: "from-purple-500 to-pink-600" },
  { label: "Cost Per Lead", value: "$12.40", sub: "-18% improvement", icon: Target, gradient: "from-amber-500 to-orange-600" },
];

const tooltipStyle = {
  backgroundColor: "rgba(15, 15, 35, 0.95)",
  border: "1px solid rgba(255,255,255,0.06)",
  borderRadius: "12px",
  fontSize: "12px",
  padding: "10px 14px",
  boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
};

export default function AdPerformance() {
  return (
    <section id="analytics" className="py-32 px-6 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,_rgba(99,102,241,0.04)_0%,_transparent_50%)]" />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold text-amber-400 uppercase tracking-[0.2em] mb-4 block">
            Analytics
          </span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-5">
            Ad Performance <span className="gradient-text-blue">Tracking</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Meta Ads & Google Ads data pulled automatically — every dollar tracked
          </p>
        </motion.div>

        {/* Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="stat-card glass-card-sm p-6"
            >
              <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${m.gradient} flex items-center justify-center shadow-lg mb-4`}>
                <m.icon className="w-5 h-5 text-white" />
              </div>
              <div className="text-2xl font-bold tracking-tight mb-0.5">{m.value}</div>
              <div className="text-xs text-gray-500">{m.label}</div>
              <div className="text-[10px] text-gray-600 mt-1">{m.sub}</div>
            </motion.div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Bar chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 glass-card p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-sm font-semibold">Weekly Ad Spend</h3>
                <p className="text-[11px] text-gray-500 mt-0.5">Meta vs Google breakdown</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-sm bg-indigo-500" />
                  <span className="text-[10px] text-gray-400">Meta</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-sm bg-emerald-500" />
                  <span className="text-[10px] text-gray-400">Google</span>
                </div>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={weeklyData} barGap={4}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.03)" />
                <XAxis dataKey="day" stroke="#4b5563" fontSize={11} tickLine={false} axisLine={false} />
                <YAxis stroke="#4b5563" fontSize={11} tickLine={false} axisLine={false} tickFormatter={(v) => `$${v}`} />
                <Tooltip contentStyle={tooltipStyle} cursor={{ fill: "rgba(255,255,255,0.02)" }} />
                <Bar dataKey="meta" name="Meta Ads" fill="#6366f1" radius={[6, 6, 0, 0]} />
                <Bar dataKey="google" name="Google Ads" fill="#10b981" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Conversion trend */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="lg:col-span-2 glass-card p-6"
          >
            <div className="mb-6">
              <h3 className="text-sm font-semibold">Conversion Rate</h3>
              <p className="text-[11px] text-gray-500 mt-0.5">Trending upward</p>
            </div>
            <ResponsiveContainer width="100%" height={280}>
              <AreaChart data={conversionData}>
                <defs>
                  <linearGradient id="convGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#6366f1" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="#6366f1" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.03)" />
                <XAxis dataKey="day" stroke="#4b5563" fontSize={10} tickLine={false} axisLine={false} />
                <YAxis stroke="#4b5563" fontSize={10} tickLine={false} axisLine={false} tickFormatter={(v) => `${v}%`} />
                <Tooltip contentStyle={tooltipStyle} />
                <Area type="monotone" dataKey="rate" name="Conv. Rate" stroke="#6366f1" strokeWidth={2} fill="url(#convGrad)" />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
