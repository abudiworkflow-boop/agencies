"use client";

import { motion } from "framer-motion";
import {
  Users,
  TrendingUp,
  MessageSquare,
  CalendarCheck,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";

const stats = [
  {
    label: "Total Leads",
    value: "1,247",
    change: "+23%",
    trend: "up",
    icon: Users,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
  },
  {
    label: "Qualified Leads",
    value: "384",
    change: "+18%",
    trend: "up",
    icon: TrendingUp,
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
  },
  {
    label: "Conversations",
    value: "3,892",
    change: "+31%",
    trend: "up",
    icon: MessageSquare,
    color: "text-purple-400",
    bg: "bg-purple-400/10",
  },
  {
    label: "Appointments",
    value: "89",
    change: "+12%",
    trend: "up",
    icon: CalendarCheck,
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
  },
];

const recentLeads = [
  {
    name: "Ahmed K.",
    channel: "WhatsApp",
    channelColor: "text-green-400",
    service: "Social Media Marketing",
    status: "Qualified",
    statusColor: "bg-emerald-400/10 text-emerald-400",
    time: "2 min ago",
  },
  {
    name: "Sarah M.",
    channel: "Instagram",
    channelColor: "text-pink-400",
    service: "Google Ads Management",
    status: "New",
    statusColor: "bg-blue-400/10 text-blue-400",
    time: "8 min ago",
  },
  {
    name: "Omar L.",
    channel: "Gmail",
    channelColor: "text-red-400",
    service: "Branding & Design",
    status: "Qualified",
    statusColor: "bg-emerald-400/10 text-emerald-400",
    time: "15 min ago",
  },
  {
    name: "Lina R.",
    channel: "Website",
    channelColor: "text-blue-400",
    service: "SEO Optimization",
    status: "Follow-up",
    statusColor: "bg-yellow-400/10 text-yellow-400",
    time: "23 min ago",
  },
  {
    name: "Khalid D.",
    channel: "WhatsApp",
    channelColor: "text-green-400",
    service: "Meta Ads Campaign",
    status: "Booked",
    statusColor: "bg-purple-400/10 text-purple-400",
    time: "41 min ago",
  },
  {
    name: "Nadia H.",
    channel: "Instagram",
    channelColor: "text-pink-400",
    service: "Content Creation",
    status: "New",
    statusColor: "bg-blue-400/10 text-blue-400",
    time: "1 hr ago",
  },
];

export default function LeadDashboard() {
  return (
    <section className="py-24 px-6 relative bg-[#060912]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Real-Time{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Lead Dashboard
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Every lead tracked, every conversation logged, every metric at your fingertips
          </p>
        </motion.div>

        {/* Stats cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-5 rounded-xl bg-[#111827] border border-white/5 hover:border-white/10 transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <div className={`w-10 h-10 rounded-lg ${stat.bg} flex items-center justify-center`}>
                  <stat.icon className={`w-5 h-5 ${stat.color}`} />
                </div>
                <div className={`flex items-center gap-1 text-xs font-medium ${stat.trend === "up" ? "text-emerald-400" : "text-red-400"}`}>
                  {stat.change}
                  {stat.trend === "up" ? (
                    <ArrowUpRight className="w-3 h-3" />
                  ) : (
                    <ArrowDownRight className="w-3 h-3" />
                  )}
                </div>
              </div>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Recent leads table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-xl bg-[#111827] border border-white/5 overflow-hidden"
        >
          <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between">
            <h3 className="font-semibold">Recent Leads</h3>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs text-gray-400">Live updating</span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-xs text-gray-500 uppercase tracking-wider">
                  <th className="px-6 py-3">Name</th>
                  <th className="px-6 py-3">Channel</th>
                  <th className="px-6 py-3">Service Interest</th>
                  <th className="px-6 py-3">Status</th>
                  <th className="px-6 py-3">Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {recentLeads.map((lead, i) => (
                  <motion.tr
                    key={lead.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="hover:bg-white/[0.02] transition-colors"
                  >
                    <td className="px-6 py-4 text-sm font-medium">{lead.name}</td>
                    <td className={`px-6 py-4 text-sm ${lead.channelColor}`}>{lead.channel}</td>
                    <td className="px-6 py-4 text-sm text-gray-300">{lead.service}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${lead.statusColor}`}>
                        {lead.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">{lead.time}</td>
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
