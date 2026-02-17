"use client";

import { Zap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[#1A1A1A] px-6 py-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-[#2563EB] flex items-center justify-center">
            <Zap size={10} className="text-white fill-white" />
          </div>
          <span className="text-[12px] text-[#525252]">AutomateAI</span>
        </div>
        <p className="text-[11px] text-[#404040]">
          Powered by n8n + GPT-4o-mini. Fully automated, zero manual work.
        </p>
      </div>
    </footer>
  );
}
