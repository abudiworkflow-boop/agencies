"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, TrendingUp, DollarSign, ArrowRight } from "lucide-react";

export default function ROICalculator() {
  const [leads, setLeads] = useState(50);
  const [value, setValue] = useState(500);

  const missedRate = 0.6; // 60% missed without AI
  const aiCaptureRate = 1.0;
  const aiCloseImprovement = 2.5; // 2.5x better close rate
  const currentCloseRate = 0.08;

  const currentRevenue = leads * (1 - missedRate) * currentCloseRate * value;
  const aiRevenue = leads * aiCaptureRate * (currentCloseRate * aiCloseImprovement) * value;
  const additionalRevenue = aiRevenue - currentRevenue;
  const roi = Math.round((additionalRevenue / 700) * 100);

  return (
    <section id="roi" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="text-[12px] font-medium text-[#2563EB] uppercase tracking-wider mb-3">
            ROI Calculator
          </p>
          <h2 className="text-[32px] sm:text-[44px] font-bold tracking-[-0.03em] leading-tight text-white">
            Do the math.
            <br />
            <span className="text-[#525252]">It pays for itself.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-[#1A1A1A] bg-[#0A0A0A] overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left: Inputs */}
            <div className="p-8 md:p-10 border-b lg:border-b-0 lg:border-r border-[#1A1A1A]">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center">
                  <Calculator size={18} className="text-[#2563EB]" />
                </div>
                <div>
                  <h3 className="text-[16px] font-semibold text-white">Your Numbers</h3>
                  <p className="text-[12px] text-[#525252]">Adjust the sliders to match your business</p>
                </div>
              </div>

              <div className="space-y-8">
                {/* Leads per month */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-[13px] text-[#A3A3A3]">Monthly leads / inquiries</label>
                    <span className="text-[18px] font-bold text-white">{leads}</span>
                  </div>
                  <input
                    type="range"
                    min={10}
                    max={500}
                    step={10}
                    value={leads}
                    onChange={(e) => setLeads(Number(e.target.value))}
                    className="w-full h-1.5 bg-[#1A1A1A] rounded-full appearance-none cursor-pointer
                      [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#2563EB] [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:shadow-[#2563EB]/30 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[#1D4ED8]
                      [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-[#2563EB] [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-[#1D4ED8] [&::-moz-range-thumb]:cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-[#404040] mt-1">
                    <span>10</span>
                    <span>500</span>
                  </div>
                </div>

                {/* Avg deal value */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-[13px] text-[#A3A3A3]">Average deal value</label>
                    <span className="text-[18px] font-bold text-white">${value.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min={100}
                    max={10000}
                    step={100}
                    value={value}
                    onChange={(e) => setValue(Number(e.target.value))}
                    className="w-full h-1.5 bg-[#1A1A1A] rounded-full appearance-none cursor-pointer
                      [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#2563EB] [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:shadow-[#2563EB]/30 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[#1D4ED8]
                      [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-[#2563EB] [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-[#1D4ED8] [&::-moz-range-thumb]:cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-[#404040] mt-1">
                    <span>$100</span>
                    <span>$10,000</span>
                  </div>
                </div>

                {/* Assumptions */}
                <div className="rounded-xl bg-[#111] border border-[#1A1A1A] p-4">
                  <p className="text-[11px] text-[#525252] uppercase tracking-wider font-medium mb-3">Based on</p>
                  <div className="space-y-2 text-[12px] text-[#737373]">
                    <div className="flex justify-between">
                      <span>Leads missed without AI</span>
                      <span className="text-[#EF4444]">60%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>AI capture rate</span>
                      <span className="text-[#22C55E]">100%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Close rate improvement</span>
                      <span className="text-[#22C55E]">2.5x</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Results */}
            <div className="p-8 md:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-[#22C55E]/10 border border-[#22C55E]/20 flex items-center justify-center">
                    <TrendingUp size={18} className="text-[#22C55E]" />
                  </div>
                  <div>
                    <h3 className="text-[16px] font-semibold text-white">Your Results</h3>
                    <p className="text-[12px] text-[#525252]">Estimated monthly impact</p>
                  </div>
                </div>

                <div className="space-y-5">
                  {/* Current revenue */}
                  <div className="rounded-xl bg-[#050505] border border-[#1A1A1A] p-5">
                    <div className="text-[11px] text-[#525252] uppercase tracking-wider mb-2">Without AI (current)</div>
                    <div className="text-[28px] font-bold text-[#737373]">
                      ${Math.round(currentRevenue).toLocaleString()}
                      <span className="text-[14px] font-normal text-[#404040]">/mo</span>
                    </div>
                  </div>

                  {/* AI revenue */}
                  <div className="rounded-xl bg-[#22C55E]/5 border border-[#22C55E]/20 p-5">
                    <div className="text-[11px] text-[#22C55E] uppercase tracking-wider mb-2">With AI System</div>
                    <div className="text-[36px] font-bold text-[#22C55E]">
                      ${Math.round(aiRevenue).toLocaleString()}
                      <span className="text-[14px] font-normal text-[#22C55E]/60">/mo</span>
                    </div>
                  </div>

                  {/* Additional revenue */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-xl bg-[#111] border border-[#1A1A1A] p-4 text-center">
                      <DollarSign size={16} className="text-[#2563EB] mx-auto mb-1" />
                      <div className="text-[20px] font-bold text-white">
                        +${Math.round(additionalRevenue).toLocaleString()}
                      </div>
                      <div className="text-[10px] text-[#525252]">Extra monthly revenue</div>
                    </div>
                    <div className="rounded-xl bg-[#111] border border-[#1A1A1A] p-4 text-center">
                      <TrendingUp size={16} className="text-[#22C55E] mx-auto mb-1" />
                      <div className="text-[20px] font-bold text-[#22C55E]">
                        {roi}%
                      </div>
                      <div className="text-[10px] text-[#525252]">ROI in month 1</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <a
                href="#cta"
                className="flex items-center justify-center gap-2 w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-[15px] font-semibold px-6 py-4 rounded-xl transition-colors mt-6"
              >
                Get This ROI <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
