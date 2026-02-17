"use client";

import { motion } from "framer-motion";
import { Users, UserCheck, MessageSquare, Phone, ArrowUpRight } from "lucide-react";

const metrics = [
  { icon: Users, label: "Total Leads", value: "1,247", change: "+12%", color: "text-blue-400", bg: "bg-blue-500/10" },
  { icon: UserCheck, label: "Qualified", value: "384", change: "+18%", color: "text-emerald-400", bg: "bg-emerald-500/10" },
  { icon: MessageSquare, label: "Conversations", value: "3,892", change: "+24%", color: "text-violet-400", bg: "bg-violet-500/10" },
  { icon: Phone, label: "Booked Calls", value: "89", change: "+9%", color: "text-amber-400", bg: "bg-amber-500/10" },
];

const leads = [
  { name: "Sarah Ahmed", channel: "WhatsApp", channelColor: "bg-green-500", service: "Social Media Marketing", status: "Qualified", statusColor: "bg-emerald-500/15 text-emerald-400", time: "2 min ago" },
  { name: "Omar Khalil", channel: "Instagram", channelColor: "bg-pink-500", service: "Meta Ads Management", status: "In Progress", statusColor: "bg-blue-500/15 text-blue-400", time: "8 min ago" },
  { name: "Layla Hassan", channel: "Website", channelColor: "bg-blue-500", service: "Full Marketing Suite", status: "Qualified", statusColor: "bg-emerald-500/15 text-emerald-400", time: "15 min ago" },
  { name: "Karim Nasser", channel: "Gmail", channelColor: "bg-red-500", service: "Google Ads", status: "New", statusColor: "bg-amber-500/15 text-amber-400", time: "22 min ago" },
  { name: "Nadia Youssef", channel: "WhatsApp", channelColor: "bg-green-500", service: "Brand Strategy", status: "Qualified", statusColor: "bg-emerald-500/15 text-emerald-400", time: "34 min ago" },
  { name: "Tarek Mansour", channel: "Instagram", channelColor: "bg-pink-500", service: "Content Creation", status: "In Progress", statusColor: "bg-blue-500/15 text-blue-400", time: "1 hr ago" },
];

export default function LeadDashboard() {
  return (
    <section id="dashboard" className="section-padding px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-[12px] font-semibold text-emerald-400 uppercase tracking-[0.15em] mb-3">
            Dashboard
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Lead Overview
          </h2>
          <p className="text-[#71717A] text-[15px] max-w-md mx-auto">
            All your leads, conversations, and metrics in one place
          </p>
        </motion.div>

        {/* Metric cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
        >
          {metrics.map((m) => (
            <div key={m.label} className="card-elevated p-5">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-9 h-9 rounded-lg ${m.bg} flex items-center justify-center`}>
                  <m.icon className={`w-[18px] h-[18px] ${m.color}`} />
                </div>
                <span className="flex items-center gap-0.5 text-[11px] font-semibold text-emerald-400">
                  <ArrowUpRight className="w-3 h-3" />
                  {m.change}
                </span>
              </div>
              <div className="text-2xl font-bold tracking-tight mb-0.5">{m.value}</div>
              <div className="text-[12px] text-[#52525B]">{m.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Leads table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="card overflow-hidden"
        >
          <div className="px-5 py-4 border-b border-[#1E1E22] flex items-center justify-between">
            <h3 className="text-[14px] font-semibold">Recent Leads</h3>
            <span className="text-[12px] text-[#52525B]">Last 24 hours</span>
          </div>

          {/* Table header */}
          <div className="hidden sm:grid grid-cols-[1fr_100px_1fr_90px_80px] gap-4 px-5 py-3 border-b border-[#1E1E22] text-[11px] text-[#52525B] uppercase tracking-wider font-medium">
            <span>Lead</span>
            <span>Channel</span>
            <span>Interest</span>
            <span>Status</span>
            <span className="text-right">Time</span>
          </div>

          {/* Rows */}
          {leads.map((lead, i) => (
            <div
              key={i}
              className="table-row grid grid-cols-1 sm:grid-cols-[1fr_100px_1fr_90px_80px] gap-2 sm:gap-4 items-center px-5 py-3.5 border-b border-[#1E1E22] last:border-0"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#18181B] border border-[#27272A] flex items-center justify-center text-[12px] font-bold text-[#71717A] flex-shrink-0">
                  {lead.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <span className="text-[13px] font-medium text-[#E4E4E7] truncate">{lead.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${lead.channelColor} flex-shrink-0`} />
                <span className="text-[12px] text-[#A1A1AA]">{lead.channel}</span>
              </div>
              <span className="text-[12px] text-[#71717A] truncate">{lead.service}</span>
              <span className={`status-pill ${lead.statusColor}`}>{lead.status}</span>
              <span className="text-[11px] text-[#3F3F46] text-right">{lead.time}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
