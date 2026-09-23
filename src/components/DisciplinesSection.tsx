import React from "react";
import { ArrowRight, ArrowUpRight, Dumbbell, Flame, Zap, Snowflake } from "lucide-react";
import { DISCIPLINE_DATA, Discipline } from "../data/mockData";

interface DisciplinesSectionProps {
  onSelectDiscipline: (discipline: Discipline) => void;
  onNavigateToWorkouts: () => void;
}

export const DisciplinesSection: React.FC<DisciplinesSectionProps> = ({
  onSelectDiscipline,
  onNavigateToWorkouts
}) => {
  const getDisciplineIcon = (id: string) => {
    switch (id) {
      case "strength":
        return <Dumbbell className="w-5 h-5 text-[#94a3b8] group-hover:text-[#caf300] transition-colors" />;
      case "metabolic":
        return <Flame className="w-5 h-5 text-[#94a3b8] group-hover:text-[#caf300] transition-colors" />;
      case "agility":
        return <Zap className="w-5 h-5 text-[#94a3b8] group-hover:text-[#caf300] transition-colors" />;
      case "recovery":
        return <Snowflake className="w-5 h-5 text-[#94a3b8] group-hover:text-[#caf300] transition-colors" />;
      default:
        return <Dumbbell className="w-5 h-5 text-[#94a3b8]" />;
    }
  };

  return (
    <section className="w-full bg-[#111317] py-16 sm:py-20" id="disciplines">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 border-b border-white/[0.06]">
          <div className="flex flex-col gap-2 max-w-2xl">
            <div className="flex items-center gap-2 text-[#caf300] font-['Space_Grotesk'] text-xs font-bold uppercase tracking-widest">
              <span>[ MODULE 01 ]</span>
              <span>•</span>
              <span>SYSTEM ARCHITECTURE</span>
            </div>
            <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl lg:text-[44px] font-bold uppercase tracking-tight text-white leading-tight">
              Curated Training Disciplines
            </h2>
            <p className="text-base text-[#94a3b8] leading-relaxed">
              Built upon verified biomechanical principles. Engineered load progression, cardiovascular conditioning, and precision tissue regeneration.
            </p>
          </div>

          <button
            onClick={onNavigateToWorkouts}
            className="inline-flex items-center gap-1.5 font-['Space_Grotesk'] text-xs sm:text-sm font-bold uppercase tracking-wider text-[#caf300] hover:text-white transition-colors pb-1 cursor-pointer group whitespace-nowrap self-start md:self-end"
          >
            <span>View Movement Syllabus</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* 4-Column Discipline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DISCIPLINE_DATA.map((discipline) => {
            const hasImage = Boolean(discipline.image);

            return (
              <div
                key={discipline.id}
                className="group bg-[#1e2023] rounded-xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:bg-[#282a2d] hover:-translate-y-1 shadow-lg border border-white/[0.06] hover:border-[#caf300]/30"
              >
                {/* Optional Image Header */}
                {hasImage ? (
                  <div className="relative w-full h-44 overflow-hidden bg-[#0c0e11]">
                    <img
                      alt={discipline.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      src={discipline.image}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1e2023] via-[#1e2023]/40 to-transparent" />
                    <span className="absolute top-3 left-3 font-['Space_Grotesk'] text-[10px] font-bold uppercase tracking-widest text-[#caf300] bg-[#0c0e11]/80 backdrop-blur-sm px-2.5 py-1 rounded">
                      {discipline.number} / {discipline.tag}
                    </span>
                  </div>
                ) : null}

                <div className={`p-6 flex flex-col justify-between flex-grow gap-6 ${hasImage ? "pt-4" : ""}`}>
                  <div className="flex flex-col gap-4">
                    {!hasImage && (
                      <div className="flex items-center justify-between">
                        <span className="font-['Space_Grotesk'] text-[10px] font-bold uppercase tracking-widest text-[#caf300] bg-[#0c0e11] px-2.5 py-1 rounded border border-white/[0.05]">
                          {discipline.number} / {discipline.tag}
                        </span>
                        {getDisciplineIcon(discipline.id)}
                      </div>
                    )}

                    <div className="flex flex-col gap-2">
                      <h3 className="font-['Space_Grotesk'] text-xl font-bold uppercase text-white tracking-tight leading-snug">
                        {discipline.title}
                      </h3>
                      <p className="text-xs text-[#94a3b8] leading-relaxed line-clamp-3">
                        {discipline.description}
                      </p>
                    </div>

                    {/* Metrics Breakdown */}
                    <div className="space-y-2 pt-2 border-t border-white/[0.06]">
                      {discipline.metrics.map((m, idx) => (
                        <div key={idx} className="flex items-center justify-between text-xs text-[#94a3b8]">
                          <span>{m.label}</span>
                          <span
                            className={`font-['Space_Grotesk'] font-semibold ${
                              m.highlight ? "text-[#caf300]" : "text-white"
                            }`}
                          >
                            {m.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Button Action */}
                  <div className="pt-2">
                    <button
                      onClick={() => onSelectDiscipline(discipline)}
                      className="w-full inline-flex items-center justify-between bg-[#1a1c1f] text-white hover:bg-[#caf300] hover:text-[#171e00] font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider px-4 py-3 rounded-lg border border-white/[0.05] hover:border-transparent transition-all cursor-pointer group/btn"
                    >
                      <span>{discipline.ctaText}</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
