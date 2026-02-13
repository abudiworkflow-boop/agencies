"use client";

import { motion } from "framer-motion";
import { Users, TrendingUp, MessageSquare, CalendarCheck, ArrowUpRight } from "lucide-react";

const stats = [
  { label: "Total Leads", value: "1,247", change: "+23%", icon: Users, gradient: "from-indigo-500 to-blue-600" },
  { label: "Qualified", value: "384", change: "+18%", icon: TrendingUp, gradient: "from-emerald-500 to-teal-600" },
  { label: "Conversations", value: "3,892", change: "+31%", icon: MessageSquare, gradient: "from-purple-500 to-pink-600" },
  { label: "Booked Calls", value: "89", change: "+12%", icon: CalendarCheck, gradient: "from-amber-500 to-orange-600" },
];

const recentLeads = [
  { name: "Ahmed K.", channel: "WhatsApp", channelGradient: "from-green-500 to-emerald-600", service: "Social Media Marketing", status: "Qualified", statusClass: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20", time: "2 min ago" },
  { name: "Sarah M.", channel: "Instagram", channelGradient: "from-pink-500 to-rose-600", service: "Google Ads Management", status: "New", statusClass: "bg-blue-500/10 text-blue-400 border-blue-500/20", time: "8 min ago" },
  { name: "Omar L.", channel: "Gmail", channelGradient: "from-red-500 to-orange-600", service: "Branding & Design", status: "Qualified", statusClass: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20", time: "15 min ago" },
  { name: "Lina R.", channel: "Website", channelGradient: "from-blue-500 to-cyan-600", service: "SEO Optimization", status: "Follow-up", statusClass: "bg-amber-500/10 text-amber-400 border-amber-500/20", time: "23 min ago" },
  { name: "Khalid D.", channel: "WhatsApp", channelGradient: "from-green-500 to-emerald-600", service: "Meta Ads Campaign", status: "Booked", statusClass: "bg-purple-500/10 text-purple-400 border-purple-500/20", time: "41 min ago" },
  { name: "Nadia H.", channel: "Instagram", channelGradient: "from-pink-500 to-rose-600", service: "Content Creation", status: "New", statusClass: "bg-blue-500/10 text-blue-400 border-blue-500/20", time: "1 hr ago" },
];

export default function LeadDashboard() {
  return (
    <section id="dashboard" className="py-32 px-6 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,_rgba(34,211,238,0.04)_0%,_transparent_50%)]" />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold text-cyan-400 uppercase tracking-[0.2em] mb-4 block">
            Lead Management
          </span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-5">
            Real-Time <span className="gradient-text-green">Dashboard</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Every lead tracked, every metric at your fingertips
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="stat-card glass-card-sm p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center shadow-lg`}>
                  <stat.icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex items-center gap-1 text-xs font-medium text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-md">
                  {stat.change}
                  <ArrowUpRight className="w-3 h-3" />
                </div>
              </div>
              <div className="text-3xl font-bold tracking-tight mb-1">{stat.value}</div>
              <div className="text-xs text-gray-500">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card overflow-hidden"
        >
          <div className="px-6 py-5 border-b border-white/[0.04] flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-sm">Recent Leads</h3>
              <p className="text-[11px] text-gray-500 mt-0.5">Auto-captured from all channels</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[10px] text-gray-500 uppercase tracking-wider">Live</span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/[0.03]">
                  {["Name", "Channel", "Interest", "Status", "Time"].map((h) => (
                    <th key={h} className="px-6 py-3 text-left text-[10px] font-semibold text-gray-500 uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {recentLeads.map((lead, i) => (
                  <motion.tr
                    key={lead.name + i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04 }}
                    className="border-b border-white/[0.02] hover:bg-white/[0.015] transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${lead.channelGradient} flex items-center justify-center text-white text-xs font-bold`}>
                          {lead.name.charAt(0)}
                        </div>
                        <span className="text-sm font-medium">{lead.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-400">{lead.channel}</td>
                    <td className="px-6 py-4 text-sm text-gray-300">{lead.service}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-1 rounded-md text-[11px] font-medium border ${lead.statusClass}`}>
                        {lead.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-xs text-gray-500">{lead.time}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
