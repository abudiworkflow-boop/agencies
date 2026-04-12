"use client";

import { MessageCircle } from "lucide-react";
import Image from "next/image";

const WHATSAPP_URL =
  "https://wa.me/966507120867?text=Hey%20I%20saw%20the%20AI%20Lead%20System%20and%20I%20want%20to%20get%20started";

export default function Footer() {
  return (
    <footer className="border-t border-[#1A1A1A] px-6 py-8">
      <div className="max-w-6xl mx-auto flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="AbudiAuto" width={20} height={20} className="rounded" />
            <span className="text-[12px] text-[#A3A3A3] font-medium">AbudiAuto</span>
            <span className="text-[11px] text-[#404040]">&middot; Jeddah, Saudi Arabia</span>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[11px] text-[#22C55E] hover:text-[#16A34A] transition-colors"
          >
            <MessageCircle size={12} />
            WhatsApp
          </a>
        </div>
        <div className="text-center">
          <p className="text-[10px] text-[#404040]">
            Built by AbudiAuto &middot; &copy; 2026. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
