"use client";

import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { DollarSign, MousePointer, Eye, Target } from "lucide-react";

const weeklyData = [
  { day: "Mon", metaSpend: 120, googleSpend: 85, leads: 12 },
  { day: "Tue", metaSpend: 135, googleSpend: 90, leads: 15 },
  { day: "Wed", metaSpend: 110, googleSpend: 95, leads: 11 },
  { day: "Thu", metaSpend: 145, googleSpend: 80, leads: 18 },
  { day: "Fri", metaSpend: 160, googleSpend: 100, leads: 22 },
  { day: "Sat", metaSpend: 90, googleSpend: 60, leads: 8 },
  { day: "Sun", metaSpend: 80, googleSpend: 50, leads: 7 },
];

const channelBreakdown = [
  { name: "Meta Ads", value: 45, color: "#3b82f6" },
  { name: "Google Ads", value: 30, color: "#10b981" },
  { name: "Instagram Organic", value: 15, color: "#ec4899" },
  { name: "Website Direct", value: 10, color: "#8b5cf6" },
];

const adMetrics = [
  { label: "Total Ad Spend", value: "$4,280", icon: DollarSign, color: "text-green-400", bg: "bg-green-400/10" },
  { label: "Total Clicks", value: "8,492", icon: MousePointer, color: "text-blue-400", bg: "bg-blue-400/10" },
  { label: "Impressions", value: "142K", icon: Eye, color: "text-purple-400", bg: "bg-purple-400/10" },
  { label: "Cost Per Lead", value: "$12.40", icon: Target, color: "text-yellow-400", bg: "bg-yellow-400/10" },
];

export default function AdPerformance() {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Ad Performance{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Tracking
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Meta Ads & Google Ads data pulled automatically — cost, clicks, conversions all in one place
          </p>
        </motion.div>

        {/* Ad metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {adMetrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-5 rounded-xl bg-[#111827] border border-white/5"
            >
              <div className={`w-10 h-10 rounded-lg ${metric.bg} flex items-center justify-center mb-3`}>
                <metric.icon className={`w-5 h-5 ${metric.color}`} />
              </div>
              <div className="text-2xl font-bold">{metric.value}</div>
              <div className="text-sm text-gray-500 mt-1">{metric.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Bar chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-2 p-6 rounded-xl bg-[#111827] border border-white/5"
          >
            <h3 className="font-semibold mb-6">Weekly Ad Spend & Leads</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={weeklyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
                <XAxis dataKey="day" stroke="#6b7280" fontSize={12} />
                <YAxis stroke="#6b7280" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1f2937",
                    border: "1px solid #374151",
                    borderRadius: "8px",
                    fontSize: "12px",
                  }}
                />
                <Bar dataKey="metaSpend" name="Meta Ads ($)" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                <Bar dataKey="googleSpend" name="Google Ads ($)" fill="#10b981" radius={[4, 4, 0, 0]} />
                <Bar dataKey="leads" name="Leads" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Pie chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-6 rounded-xl bg-[#111827] border border-white/5"
          >
            <h3 className="font-semibold mb-6">Lead Sources</h3>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={channelBreakdown}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={80}
                  paddingAngle={4}
                  dataKey="value"
                >
                  {channelBreakdown.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1f2937",
                    border: "1px solid #374151",
                    borderRadius: "8px",
                    fontSize: "12px",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="space-y-2 mt-4">
              {channelBreakdown.map((item) => (
                <div key={item.name} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-gray-300">{item.name}</span>
                  </div>
                  <span className="text-gray-500">{item.value}%</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
