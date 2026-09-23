import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight, TrendingUp, Sparkles, Activity } from "lucide-react";
import { TESTIMONIALS } from "../data/mockData";

export const TelemetryProofSection: React.FC = () => {
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);
  const [activeNode, setActiveNode] = useState<number | null>(null);

  const currentTestimonial = TESTIMONIALS[activeTestimonialIdx];

  const handlePrev = () => {
    setActiveTestimonialIdx((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setActiveTestimonialIdx((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const nodes = [
    { x: 120, y: 90, label: "Week 04: Base Aerobic", metric: "+12.2% VO2" },
    { x: 240, y: 60, label: "Week 08: Hypertrophy", metric: "+210W Peak" },
    { x: 320, y: 30, label: "Week 10: Taper & Surge", metric: "-32% HRR" },
    { x: 400, y: 10, label: "Week 12: Peak Readiness", metric: "+340W Output" }
  ];

  return (
    <section className="w-full bg-[#0c0e11] py-16 sm:py-24" id="telemetry-proof">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col gap-12 sm:gap-16">
        {/* High-Impact Stat Counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-[#1e2023] p-6 sm:p-10 rounded-2xl shadow-xl border border-white/[0.06]">
          <div className="flex flex-col gap-1">
            <div className="font-['Space_Grotesk'] text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              2,400<span className="text-[#caf300]">+</span>
            </div>
            <div className="font-['Space_Grotesk'] text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#94a3b8]">
              Active Dedicated Athletes
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <div className="font-['Space_Grotesk'] text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              4.9<span className="text-[#caf300]">/5</span>
            </div>
            <div className="font-['Space_Grotesk'] text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#94a3b8]">
              Verified Athlete Rating
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <div className="font-['Space_Grotesk'] text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              98<span className="text-[#caf300]">%</span>
            </div>
            <div className="font-['Space_Grotesk'] text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#94a3b8]">
              Goal Achievement Rate
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <div className="font-['Space_Grotesk'] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#caf300] tracking-tight">
              15,000
            </div>
            <div className="font-['Space_Grotesk'] text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#94a3b8]">
              Square Foot Performance Lab
            </div>
          </div>
        </div>

        {/* Testimonial & Graph Bento */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* SVG Data Graph Visual */}
          <div className="lg:col-span-5 bg-[#1e2023] rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl border border-white/[0.06] h-full">
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="font-['Space_Grotesk'] text-[10px] font-bold uppercase text-[#caf300] tracking-widest block">
                  Aura Biometric Engine
                </span>
                <h4 className="font-['Space_Grotesk'] text-lg sm:text-xl font-bold uppercase text-white mt-0.5">
                  Athlete Load Progression
                </h4>
              </div>
              <Activity className="w-5 h-5 text-[#caf300]" />
            </div>

            {/* Interactive SVG Telemetry Graph */}
            <div className="relative w-full h-52 py-2 flex items-center justify-center">
              <svg className="w-full h-full overflow-visible text-[#caf300]" viewBox="0 0 400 160">
                {/* Horizontal Guides */}
                <line x1="0" y1="40" x2="400" y2="40" stroke="rgba(255,255,255,0.08)" strokeDasharray="3 3" />
                <line x1="0" y1="80" x2="400" y2="80" stroke="rgba(255,255,255,0.08)" strokeDasharray="3 3" />
                <line x1="0" y1="120" x2="400" y2="120" stroke="rgba(255,255,255,0.08)" strokeDasharray="3 3" />

                {/* Area Gradient */}
                <defs>
                  <linearGradient id="curveGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#caf300" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#caf300" stopOpacity="0.0" />
                  </linearGradient>
                </defs>

                {/* Fill */}
                <path
                  d="M 0,140 Q 70,120 120,90 T 240,60 T 320,30 T 400,10 L 400,160 L 0,160 Z"
                  fill="url(#curveGradient)"
                />

                {/* Telemetry Curve Line */}
                <path
                  d="M 0,140 Q 70,120 120,90 T 240,60 T 320,30 T 400,10"
                  fill="none"
                  stroke="#caf300"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />

                {/* Nodes */}
                {nodes.map((node, index) => (
                  <g
                    key={index}
                    className="cursor-pointer transition-transform hover:scale-125"
                    onMouseEnter={() => setActiveNode(index)}
                    onMouseLeave={() => setActiveNode(null)}
                  >
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r={activeNode === index ? "7" : "5"}
                      fill={activeNode === index ? "#ffffff" : "#caf300"}
                      stroke="#111317"
                      strokeWidth="2"
                    />
                  </g>
                ))}
              </svg>

              {/* Node Tooltip */}
              {activeNode !== null && (
                <div
                  className="absolute pointer-events-none bg-[#0c0e11] border border-[#caf300] px-3 py-1.5 rounded-lg shadow-xl text-xs z-20"
                  style={{
                    left: `${(nodes[activeNode].x / 400) * 80}%`,
                    top: `${(nodes[activeNode].y / 160) * 70}%`
                  }}
                >
                  <p className="font-['Space_Grotesk'] font-bold text-white uppercase text-[10px]">
                    {nodes[activeNode].label}
                  </p>
                  <p className="font-['Space_Grotesk'] text-[#caf300] font-bold">
                    {nodes[activeNode].metric}
                  </p>
                </div>
              )}
            </div>

            {/* Bottom 3 micro-stats */}
            <div className="grid grid-cols-3 gap-2 text-center pt-3 bg-[#1a1c1f] p-3 rounded-xl border border-white/[0.04]">
              <div>
                <div className="font-['Space_Grotesk'] text-[10px] text-[#94a3b8] uppercase font-bold">
                  Aerobic Base
                </div>
                <div className="font-['Space_Grotesk'] text-base sm:text-lg font-bold text-white">
                  +28.4%
                </div>
              </div>
              <div>
                <div className="font-['Space_Grotesk'] text-[10px] text-[#94a3b8] uppercase font-bold">
                  Peak Output
                </div>
                <div className="font-['Space_Grotesk'] text-base sm:text-lg font-bold text-[#caf300]">
                  +340W
                </div>
              </div>
              <div>
                <div className="font-['Space_Grotesk'] text-[10px] text-[#94a3b8] uppercase font-bold">
                  Recovery Rate
                </div>
                <div className="font-['Space_Grotesk'] text-base sm:text-lg font-bold text-white">
                  -42% HRR
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Card */}
          <div className="lg:col-span-7 bg-[#1e2023] rounded-2xl p-6 sm:p-10 flex flex-col justify-between shadow-xl border border-white/[0.06] h-full">
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-[#caf300]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#caf300]" />
                  ))}
                </div>
                <span className="font-['Space_Grotesk'] text-[10px] font-bold uppercase tracking-widest text-[#94a3b8]">
                  Verified Pro Athlete
                </span>
              </div>

              <blockquote className="font-['Space_Grotesk'] text-xl sm:text-2xl font-bold uppercase text-white tracking-tight leading-snug min-h-[120px] transition-opacity duration-300">
                "{currentTestimonial.quote}"
              </blockquote>

              <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#282a2d] flex items-center justify-center font-['Space_Grotesk'] text-base font-bold text-[#caf300] uppercase border border-white/[0.08]">
                    {currentTestimonial.initials}
                  </div>
                  <div>
                    <h5 className="font-['Space_Grotesk'] text-base font-bold text-white uppercase">
                      {currentTestimonial.author}
                    </h5>
                    <p className="text-xs text-[#94a3b8]">
                      {currentTestimonial.title}
                    </p>
                  </div>
                </div>

                {/* Interactive Switchers */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    aria-label="Previous Testimonial"
                    className="w-10 h-10 rounded-lg bg-[#282a2d] hover:bg-white hover:text-[#111317] flex items-center justify-center text-white transition-colors cursor-pointer border border-white/[0.05]"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNext}
                    aria-label="Next Testimonial"
                    className="w-10 h-10 rounded-lg bg-[#282a2d] hover:bg-white hover:text-[#111317] flex items-center justify-center text-white transition-colors cursor-pointer border border-white/[0.05]"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
