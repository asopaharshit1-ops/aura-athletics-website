import React from "react";
import { Calendar, Award, CheckCircle2, ArrowRight, ShieldCheck, Activity, Brain, Flame } from "lucide-react";
import { COACH_DATA, Coach } from "../data/mockData";

interface CoachingViewProps {
  onBookAssessment: (coach: Coach) => void;
}

export const CoachingView: React.FC<CoachingViewProps> = ({ onBookAssessment }) => {
  return (
    <div className="w-full min-h-screen bg-[#111317] pt-24 pb-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col gap-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/[0.08]">
          <div className="flex flex-col gap-2 max-w-2xl">
            <div className="flex items-center gap-2 text-[#caf300] font-['Space_Grotesk'] text-xs font-bold uppercase tracking-widest">
              <span>[ MODULE 03 ]</span>
              <span>•</span>
              <span>FACULTY OF HUMAN PERFORMANCE</span>
            </div>
            <h1 className="font-['Space_Grotesk'] text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white">
              Olympic Faculty & Biomechanics
            </h1>
            <p className="text-sm sm:text-base text-[#94a3b8] leading-relaxed">
              Direct access to world-record coaches, Olympic weightlifting leads, and cardiovascular physiologists who understand structural mechanics down to the millimeter.
            </p>
          </div>

          <button
            onClick={() => onBookAssessment(COACH_DATA[0])}
            className="inline-flex items-center gap-2 bg-[#caf300] text-[#171e00] font-['Space_Grotesk'] text-xs sm:text-sm font-bold uppercase tracking-wider px-6 py-3.5 rounded-lg hover:scale-[1.02] shadow-[0_0_24px_-4px_rgba(202,243,0,0.35)] transition-all cursor-pointer whitespace-nowrap self-start md:self-end"
          >
            <span>Book Performance Assessment</span>
            <Calendar className="w-4 h-4" />
          </button>
        </div>

        {/* Coach Faculty Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {COACH_DATA.map((coach) => (
            <div
              key={coach.id}
              className="bg-[#1e2023] rounded-2xl overflow-hidden border border-white/[0.08] shadow-xl hover:border-[#caf300]/40 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Coach Portrait */}
                <div className="relative w-full aspect-[4/3] bg-[#282a2d] overflow-hidden">
                  <img
                    alt={coach.name}
                    src={coach.image}
                    className="w-full h-full object-cover grayscale contrast-115 group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1e2023] via-[#1e2023]/30 to-transparent" />
                  <div className="absolute top-4 left-4 bg-[#0c0e11]/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/[0.08]">
                    <span className="font-['Space_Grotesk'] text-[10px] font-bold uppercase tracking-widest text-[#caf300]">
                      {coach.specialty}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="font-['Space_Grotesk'] text-2xl font-bold uppercase text-white">
                      {coach.name}
                    </h3>
                    <p className="text-xs text-[#94a3b8] font-['Space_Grotesk'] font-semibold">
                      {coach.role}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col gap-6">
                  {/* Quote */}
                  <blockquote className="text-xs text-[#e2e2e6] italic border-l-2 border-[#caf300] pl-3 py-0.5 leading-relaxed">
                    "{coach.quote}"
                  </blockquote>

                  {/* Bio */}
                  <p className="text-xs text-[#94a3b8] leading-relaxed">
                    {coach.bio}
                  </p>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-2 py-3 border-y border-white/[0.06]">
                    {coach.stats.map((s, idx) => (
                      <div key={idx} className="bg-[#1a1c1f] p-2.5 rounded-lg text-center">
                        <div className="font-['Space_Grotesk'] text-lg font-bold text-[#caf300]">
                          {s.value}
                        </div>
                        <div className="font-['Space_Grotesk'] text-[9px] uppercase font-bold text-[#94a3b8] mt-0.5 line-clamp-1">
                          {s.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Specialty Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {coach.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 bg-[#282a2d] text-white font-['Space_Grotesk'] text-[10px] font-semibold uppercase rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onBookAssessment(coach)}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#1a1c1f] text-white hover:bg-[#caf300] hover:text-[#171e00] font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider py-3 rounded-lg border border-white/[0.06] hover:border-transparent transition-all cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Assessment with {coach.name.split(" ")[0]}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 4-Step Kinematic Screening Protocol */}
        <div className="bg-[#1e2023] rounded-2xl p-8 sm:p-12 border border-white/[0.08] flex flex-col gap-8 shadow-2xl">
          <div className="flex flex-col gap-2 max-w-2xl">
            <span className="font-['Space_Grotesk'] text-xs font-bold uppercase tracking-widest text-[#caf300]">
              [ PROTOCOL ARCHITECTURE ]
            </span>
            <h2 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold uppercase text-white">
              The 1-on-1 Performance Assessment Pipeline
            </h2>
            <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
              Every prospective athlete undergoes a multi-layer diagnostic before loading high-percentage training blocks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-[#1a1c1f] p-6 rounded-xl border border-white/[0.05] flex flex-col gap-3">
              <span className="font-['Space_Grotesk'] text-xs font-bold text-[#caf300]">01 / SCAN</span>
              <h4 className="font-['Space_Grotesk'] text-lg font-bold uppercase text-white">
                3D Kinematic Motion
              </h4>
              <p className="text-xs text-[#94a3b8] leading-relaxed">
                Optical joint tracking across deep squat, hip hinge, and overhead thoracic mobility vectors.
              </p>
            </div>

            <div className="bg-[#1a1c1f] p-6 rounded-xl border border-white/[0.05] flex flex-col gap-3">
              <span className="font-['Space_Grotesk'] text-xs font-bold text-[#caf300]">02 / VELOCITY</span>
              <h4 className="font-['Space_Grotesk'] text-lg font-bold uppercase text-white">
                Linear Transducer VBT
              </h4>
              <p className="text-xs text-[#94a3b8] leading-relaxed">
                Linear encoder profiles your unique load-velocity profile to establish exact daily 1RM percentages.
              </p>
            </div>

            <div className="bg-[#1a1c1f] p-6 rounded-xl border border-white/[0.05] flex flex-col gap-3">
              <span className="font-['Space_Grotesk'] text-xs font-bold text-[#caf300]">03 / LACTATE</span>
              <h4 className="font-['Space_Grotesk'] text-lg font-bold uppercase text-white">
                Metabolic Buffering
              </h4>
              <p className="text-xs text-[#94a3b8] leading-relaxed">
                Staged SkiErg ramp test monitoring lactate buildup and capillary re-oxygenation rates.
              </p>
            </div>

            <div className="bg-[#1a1c1f] p-6 rounded-xl border border-white/[0.05] flex flex-col gap-3">
              <span className="font-['Space_Grotesk'] text-xs font-bold text-[#caf300]">04 / BLUEPRINT</span>
              <h4 className="font-['Space_Grotesk'] text-lg font-bold uppercase text-white">
                Macro-Cycle Delivery
              </h4>
              <p className="text-xs text-[#94a3b8] leading-relaxed">
                Custom periodized training architecture synced directly into your digital athlete keycard.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
