"use client";

import { MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/966507120867?text=Hey%20I%20saw%20the%20AI%20Lead%20System%20demo%20and%20I%20want%20to%20get%20started";

export default function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#22C55E] hover:bg-[#16A34A] text-white flex items-center justify-center shadow-lg shadow-[#22C55E]/20 transition-all hover:scale-105"
    >
      <MessageCircle size={22} className="sm:w-6 sm:h-6" />
    </a>
  );
}
