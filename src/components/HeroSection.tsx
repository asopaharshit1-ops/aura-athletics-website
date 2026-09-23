import React from "react";
import { ArrowRight, Play, Activity, Wind, KeyRound, Gauge, ShieldCheck } from "lucide-react";

interface HeroSectionProps {
  onClaimPass: () => void;
  onExploreDisciplines: () => void;
  onTourFacility: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onClaimPass,
  onExploreDisciplines,
  onTourFacility
}) => {
  return (
    <section className="relative w-full overflow-hidden bg-[#0c0e11] pt-4 pb-12">
      {/* Atmospheric Ambient Glows */}
      <div className="absolute -top-40 right-1/4 w-[500px] h-[500px] bg-[#caf300]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-[420px] h-[420px] bg-[#caf300]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[660px]">
          {/* Hero Text Content */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#282a2d] w-fit shadow-sm border border-white/[0.05]">
              <span className="inline-block w-2 h-2 rounded-full bg-[#caf300] animate-pulse" />
              <span className="font-['Space_Grotesk'] text-[11px] font-bold text-[#caf300] uppercase tracking-widest">
                Protocol 2025 Live • Biometric Sync Ready
              </span>
            </div>

            <div className="flex flex-col gap-3">
              <h1 className="font-['Space_Grotesk'] text-4xl sm:text-5xl lg:text-[56px] font-bold uppercase tracking-tight text-white leading-[1.08]">
                Sculpt Your Discipline.<br />
                <span className="text-[#caf300]">Engineered For</span><br />
                Human Performance.
              </h1>
              <p className="text-base sm:text-lg text-[#94a3b8] max-w-xl leading-relaxed">
                A world-class athletic sanctuary fusing biometric telemetry, Olympic-certified coaching, and elite recovery sciences inside a 15,000 sq ft conditioning laboratory.
              </p>
            </div>

            {/* Action Cluster */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onClaimPass}
                className="inline-flex items-center gap-2.5 bg-[#caf300] text-[#171e00] font-['Space_Grotesk'] text-sm sm:text-base font-bold uppercase tracking-wider px-6 py-3.5 rounded shadow-[0_0_24px_-4px_rgba(202,243,0,0.35)] hover:scale-[1.02] transition-transform cursor-pointer"
              >
                <span>Claim Free Day Pass</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={onExploreDisciplines}
                className="inline-flex items-center gap-2 bg-[#1e2023] text-white font-['Space_Grotesk'] text-xs sm:text-sm font-semibold uppercase tracking-wider px-5 py-3.5 rounded hover:bg-[#282a2d] border border-white/[0.06] transition-colors cursor-pointer"
              >
                <span>Explore Disciplines</span>
                <span className="text-xs text-[#caf300]">↓</span>
              </button>

              <button
                onClick={onTourFacility}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-['Space_Grotesk'] font-bold uppercase tracking-wider text-[#94a3b8] hover:text-[#caf300] transition-colors cursor-pointer px-2 py-3"
              >
                <div className="w-7 h-7 rounded-full bg-[#caf300]/10 border border-[#caf300]/30 flex items-center justify-center text-[#caf300]">
                  <Play className="w-3.5 h-3.5 fill-[#caf300]" />
                </div>
                <span>Tour Facility</span>
              </button>
            </div>

            {/* Micro Quick Stats Anchor */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/[0.08]">
              <div>
                <div className="font-['Space_Grotesk'] text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                  15k<span className="text-lg sm:text-xl text-[#94a3b8] font-semibold ml-1">SQFT</span>
                </div>
                <div className="font-['Space_Grotesk'] text-[11px] font-bold uppercase tracking-wider text-[#94a3b8] mt-1">
                  Lab Arena
                </div>
              </div>
              <div>
                <div className="font-['Space_Grotesk'] text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                  24<span className="text-lg sm:text-xl text-[#94a3b8] font-semibold ml-1">/7</span>
                </div>
                <div className="font-['Space_Grotesk'] text-[11px] font-bold uppercase tracking-wider text-[#94a3b8] mt-1">
                  Full Access
                </div>
              </div>
              <div>
                <div className="font-['Space_Grotesk'] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#caf300] tracking-tight">
                  100<span className="text-lg sm:text-xl text-[#94a3b8] font-semibold ml-1">%</span>
                </div>
                <div className="font-['Space_Grotesk'] text-[11px] font-bold uppercase tracking-wider text-[#94a3b8] mt-1">
                  Eleiko Equipped
                </div>
              </div>
            </div>
          </div>

          {/* Hero Visual Spotlight */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden shadow-2xl bg-[#1e2023] border border-white/[0.08] group">
              <img
                className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700"
                alt="Female Olympic weightlifter with intense focused expression deadlifting a loaded barbell inside modern athletic training club"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVDJ2Oqn4E9hvcLxCMeOI24-Cph_B4HxUeeNkzkjEYNXWP9dyuvX2ZbUf2VOs89j-jOAAKPK06ndxinXXDulv8rswrfdmJhPqQ7b_rKEDUTQ8CI88gMc1FqW592Xr8dD7T5ydUcHix6vLALOV3iV1X09jY4hm5d5lRFBxqJcfgLSbEGCYwyC7urNbpBpWAXyr4Hp3mEXG-o26qcJYPIhwx1co86bOS3-qJZ-uhs4Uoo1yyirg5_iD5"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e11] via-transparent to-transparent opacity-90" />

              {/* Telemetry Chip Inset */}
              <div className="absolute top-4 right-4 bg-[#0c0e11]/85 backdrop-blur-md p-3 rounded-lg flex items-center gap-3 border border-white/[0.08] shadow-lg">
                <Activity className="w-5 h-5 text-[#caf300] animate-pulse" />
                <div>
                  <div className="font-['Space_Grotesk'] text-[10px] uppercase tracking-wider text-[#94a3b8]">
                    Floor Sensor
                  </div>
                  <div className="font-['Space_Grotesk'] text-xs font-bold text-white tracking-wider">
                    LIVE TELEMETRY
                  </div>
                </div>
              </div>

              {/* Kinetic Set Status Inset */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#1a1c1f]/90 backdrop-blur-md p-4 rounded-lg flex items-center justify-between border border-white/[0.08] shadow-xl">
                <div>
                  <span className="font-['Space_Grotesk'] text-[10px] font-bold uppercase text-[#caf300] tracking-wider block">
                    Active Sector
                  </span>
                  <p className="font-['Space_Grotesk'] text-lg font-bold text-white">
                    Barbell Pit 01
                  </p>
                </div>
                <div className="text-right">
                  <span className="font-['Space_Grotesk'] text-[10px] uppercase text-[#94a3b8] tracking-wider block">
                    Peak Velocity
                  </span>
                  <p className="font-['Space_Grotesk'] text-lg font-bold text-[#caf300]">
                    1.18 m/s
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Live Telemetry Status Bar Floating at Hero Base */}
      <div className="w-full bg-[#1a1c1f] border-y border-white/[0.08] shadow-sm">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-3.5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-[#caf300] animate-pulse" />
              <div>
                <div className="font-['Space_Grotesk'] text-[10px] uppercase tracking-wider text-[#94a3b8]">
                  Gym Occupancy
                </div>
                <div className="font-['Space_Grotesk'] text-sm sm:text-base font-bold text-white flex items-baseline gap-1.5">
                  <span>42%</span>
                  <span className="text-[11px] text-[#caf300] font-normal">Optimal Flow</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Gauge className="w-5 h-5 text-[#caf300]" />
              <div>
                <div className="font-['Space_Grotesk'] text-[10px] uppercase tracking-wider text-[#94a3b8]">
                  Zone Rhythm
                </div>
                <div className="font-['Space_Grotesk'] text-sm sm:text-base font-bold text-white">
                  Pacing Phase II
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <KeyRound className="w-5 h-5 text-[#caf300]" />
              <div>
                <div className="font-['Space_Grotesk'] text-[10px] uppercase tracking-wider text-[#94a3b8]">
                  Access Gate
                </div>
                <div className="font-['Space_Grotesk'] text-sm sm:text-base font-bold text-white">
                  24/7 Keycard Active
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Wind className="w-5 h-5 text-[#caf300]" />
              <div>
                <div className="font-['Space_Grotesk'] text-[10px] uppercase tracking-wider text-[#94a3b8]">
                  Air Purification
                </div>
                <div className="font-['Space_Grotesk'] text-sm sm:text-base font-bold text-white flex items-baseline gap-1.5">
                  <span>99.8%</span>
                  <span className="text-[11px] text-[#94a3b8] font-normal">HEPA-14</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
