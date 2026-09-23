import React from "react";
import { X, CheckCircle2, ArrowRight, ShieldCheck, Dumbbell } from "lucide-react";
import { Discipline } from "../data/mockData";

interface DisciplineDetailModalProps {
  discipline: Discipline | null;
  onClose: () => void;
  onNavigateToWorkouts: () => void;
  onClaimPass: () => void;
}

export const DisciplineDetailModal: React.FC<DisciplineDetailModalProps> = ({
  discipline,
  onClose,
  onNavigateToWorkouts,
  onClaimPass
}) => {
  if (!discipline) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#1e2023] rounded-2xl border border-white/[0.1] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-6 border-b border-white/[0.08] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-['Space_Grotesk'] text-[10px] font-bold uppercase tracking-widest text-[#caf300] bg-[#0c0e11] px-2.5 py-1 rounded border border-white/[0.05]">
              {discipline.number} / {discipline.tag}
            </span>
            <span className="text-xs text-[#94a3b8] font-['Space_Grotesk'] uppercase">
              • Lab Specification
            </span>
          </div>

          <button
            onClick={onClose}
            className="text-[#94a3b8] hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex flex-col gap-6">
          <div>
            <h3 className="font-['Space_Grotesk'] text-2xl font-bold uppercase text-white">
              {discipline.title}
            </h3>
            <p className="text-sm text-[#94a3b8] mt-1 leading-relaxed">
              {discipline.description}
            </p>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-3">
            {discipline.metrics.map((m, idx) => (
              <div key={idx} className="bg-[#1a1c1f] p-3 rounded-xl border border-white/[0.05]">
                <span className="font-['Space_Grotesk'] text-[10px] uppercase text-[#94a3b8] block">
                  {m.label}
                </span>
                <span
                  className={`font-['Space_Grotesk'] text-sm sm:text-base font-bold mt-0.5 block ${
                    m.highlight ? "text-[#caf300]" : "text-white"
                  }`}
                >
                  {m.value}
                </span>
              </div>
            ))}
          </div>

          {/* Equipment Inventory */}
          <div className="flex flex-col gap-2">
            <span className="font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider text-[#caf300]">
              Dedicated Calibrated Equipment
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {discipline.equipment.map((eq, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-[#e2e2e6] bg-[#1a1c1f] px-3 py-2 rounded-lg border border-white/[0.04]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#caf300] shrink-0" />
                  <span>{eq}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Biomechanical Protocol */}
          <div className="bg-[#1a1c1f] p-4 rounded-xl border border-white/[0.06] flex flex-col gap-1.5">
            <span className="font-['Space_Grotesk'] text-[10px] font-bold uppercase text-[#caf300] tracking-wider">
              Standard Biomechanical Protocol
            </span>
            <p className="text-xs text-[#94a3b8] leading-relaxed">
              {discipline.protocol}
            </p>
          </div>

          {/* Ideal Trainee */}
          <div className="text-xs text-[#94a3b8]">
            <span className="text-white font-['Space_Grotesk'] font-bold uppercase">Target Athlete: </span>
            <span>{discipline.idealFor}</span>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-white/[0.08] flex items-center justify-between gap-3 bg-[#1a1c1f]/60">
          <button
            onClick={() => {
              onClose();
              onNavigateToWorkouts();
            }}
            className="bg-[#282a2d] hover:bg-[#333538] text-white font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider px-4 py-3 rounded-lg border border-white/[0.08] transition-colors cursor-pointer"
          >
            Open Movement Syllabus
          </button>
          <button
            onClick={() => {
              onClose();
              onClaimPass();
            }}
            className="bg-[#caf300] text-[#171e00] font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-lg hover:scale-[1.02] transition-transform cursor-pointer"
          >
            Claim Free Day Pass
          </button>
        </div>
      </div>
    </div>
  );
};
