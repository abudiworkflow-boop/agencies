"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Features", href: "#features" },
  { label: "Demo", href: "#demo" },
  { label: "Dashboard", href: "#dashboard" },
  { label: "Results", href: "#results" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-black/80 backdrop-blur-md border-b border-[#1A1A1A]" : ""
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 h-14 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-[#2563EB] flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </div>
            <span className="text-[14px] font-semibold tracking-tight">AutomateAI</span>
          </a>

          <div className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-[13px] text-[#525252] hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
            <a
              href="#cta"
              className="text-[13px] font-medium text-white bg-[#2563EB] hover:bg-[#1D4ED8] px-4 py-1.5 rounded-lg transition-colors"
            >
              Get Started
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden text-[#A3A3A3]">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/95 pt-16 px-6 flex flex-col gap-2"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-4 text-[16px] text-[#A3A3A3] border-b border-[#1A1A1A]"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#cta"
              onClick={() => setOpen(false)}
              className="mt-4 text-center py-3 bg-[#2563EB] rounded-lg text-[15px] font-medium"
            >
              Get Started
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
