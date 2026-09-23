import React from "react";
import { Calendar, Award, Sparkles, CheckCircle2 } from "lucide-react";
import { COACH_DATA, Coach } from "../data/mockData";

interface CoachSpotlightSectionProps {
  onBookAssessment: (coach: Coach) => void;
}

export const CoachSpotlightSection: React.FC<CoachSpotlightSectionProps> = ({
  onBookAssessment
}) => {
  const headCoach = COACH_DATA[0]; // Elena Vance

  return (
    <section className="w-full bg-[#0c0e11] py-16 sm:py-24 relative overflow-hidden" id="coaching-spotlight">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#1e2023] rounded-2xl overflow-hidden shadow-2xl border border-white/[0.08]">
          {/* Trainer Portrait Card */}
          <div className="lg:col-span-5 relative aspect-square lg:aspect-auto lg:h-full min-h-[460px] bg-[#282a2d] overflow-hidden group">
            <img
              className="w-full h-full object-cover grayscale contrast-115 group-hover:grayscale-0 transition-all duration-700"
              alt="Elena Vance Head Coach"
              src={headCoach.image}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1e2023] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#1e2023]" />
            <div className="absolute bottom-5 left-5 bg-[#0c0e11]/85 backdrop-blur-md px-4 py-3 rounded-xl border border-white/[0.08] shadow-lg">
              <div className="font-['Space_Grotesk'] text-[10px] font-bold uppercase tracking-widest text-[#caf300]">
                {headCoach.specialty}
              </div>
              <div className="font-['Space_Grotesk'] text-xl font-bold text-white mt-0.5">
                {headCoach.name}
              </div>
            </div>
          </div>

          {/* Coach Bio & Metrics Column */}
          <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col gap-8">
            <div className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-[#caf300] animate-pulse" />
              <span className="font-['Space_Grotesk'] text-[11px] font-bold uppercase tracking-widest text-[#caf300]">
                FACULTY SPOTLIGHT • HEAD OF BIOMECHANICS
              </span>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="font-['Space_Grotesk'] text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-white leading-tight">
                "{headCoach.quote}"
              </h3>
              <p className="text-sm sm:text-base text-[#94a3b8] leading-relaxed max-w-xl">
                {headCoach.bio}
              </p>
            </div>

            {/* Credential Badges & Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {headCoach.stats.map((stat, idx) => (
                <div key={idx} className="bg-[#1a1c1f] p-4 rounded-xl border border-white/[0.05]">
                  <div className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold text-[#caf300] tracking-tight">
                    {stat.value}
                  </div>
                  <div className="font-['Space_Grotesk'] text-[10px] font-semibold uppercase text-[#94a3b8] tracking-wider mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Tags & CTA Row */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-white/[0.06]">
              <div className="flex flex-wrap items-center gap-2">
                {headCoach.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-[#282a2d] rounded-md font-['Space_Grotesk'] text-[11px] font-semibold uppercase tracking-wider text-[#e2e2e6] border border-white/[0.05]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <button
                onClick={() => onBookAssessment(headCoach)}
                className="inline-flex items-center gap-2.5 bg-[#caf300] text-[#171e00] font-['Space_Grotesk'] text-xs sm:text-sm font-bold uppercase tracking-wider px-6 py-3.5 rounded-lg hover:scale-[1.02] shadow-[0_0_24px_-4px_rgba(202,243,0,0.35)] transition-all cursor-pointer whitespace-nowrap"
              >
                <span>Book 1-on-1 Assessment</span>
                <Calendar className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
