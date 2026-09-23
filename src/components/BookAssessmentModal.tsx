import React, { useState } from "react";
import { X, Calendar, CheckCircle2, Clock, User, ArrowRight, ShieldCheck } from "lucide-react";
import { COACH_DATA, Coach } from "../data/mockData";

interface BookAssessmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCoach?: Coach | null;
}

export const BookAssessmentModal: React.FC<BookAssessmentModalProps> = ({
  isOpen,
  onClose,
  selectedCoach = null
}) => {
  const [step, setStep] = useState<number>(1);
  const [protocol, setProtocol] = useState<string>("3D Kinematic Motion Analysis & Joint Screening");
  const [coach, setCoach] = useState<string>(selectedCoach?.name || COACH_DATA[0].name);
  const [dateSlot, setDateSlot] = useState<string>("Saturday • 10:00 AM (Sector A-01)");
  const [athleteName, setAthleteName] = useState<string>("Marcus Kane");
  const [athleteEmail, setAthleteEmail] = useState<string>("marcus@aura.io");
  const [confirmed, setConfirmed] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    setConfirmed(true);
  };

  const handleReset = () => {
    setConfirmed(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#1e2023] rounded-2xl border border-white/[0.1] shadow-2xl overflow-hidden p-6 sm:p-8">
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 text-[#94a3b8] hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!confirmed ? (
          <div className="flex flex-col gap-6">
            <div>
              <span className="font-['Space_Grotesk'] text-xs font-bold uppercase tracking-widest text-[#caf300]">
                Diagnostic Scheduling
              </span>
              <h3 className="font-['Space_Grotesk'] text-2xl font-bold uppercase text-white mt-1">
                Book 1-on-1 Performance Assessment
              </h3>
              <p className="text-xs text-[#94a3b8] mt-1">
                60-minute kinematic evaluation with our Olympic coaching faculty.
              </p>
            </div>

            <form onSubmit={handleConfirm} className="flex flex-col gap-4">
              {/* Protocol Select */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-['Space_Grotesk'] font-bold uppercase text-[#94a3b8]">
                  Assessment Protocol
                </label>
                <select
                  value={protocol}
                  onChange={(e) => setProtocol(e.target.value)}
                  className="bg-[#111317] border border-white/[0.1] rounded-lg px-4 py-3 text-xs text-white focus:outline-none focus:border-[#caf300]"
                >
                  <option value="3D Kinematic Motion Analysis & Joint Screening">
                    3D Kinematic Motion Analysis & Joint Screening (60m)
                  </option>
                  <option value="Linear Transducer VBT & Force-Velocity Curve">
                    Linear Transducer VBT & Force-Velocity Curve (75m)
                  </option>
                  <option value="Lactate Threshold & Hypoxic VO2 Max Ramp">
                    Lactate Threshold & Hypoxic VO2 Max Ramp (60m)
                  </option>
                </select>
              </div>

              {/* Coach Select */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-['Space_Grotesk'] font-bold uppercase text-[#94a3b8]">
                  Faculty Lead
                </label>
                <select
                  value={coach}
                  onChange={(e) => setCoach(e.target.value)}
                  className="bg-[#111317] border border-white/[0.1] rounded-lg px-4 py-3 text-xs text-white focus:outline-none focus:border-[#caf300]"
                >
                  {COACH_DATA.map((c) => (
                    <option key={c.id} value={c.name}>
                      {c.name} — {c.role}
                    </option>
                  ))}
                </select>
              </div>

              {/* Time Slot Select */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-['Space_Grotesk'] font-bold uppercase text-[#94a3b8]">
                  Available Time Slot
                </label>
                <select
                  value={dateSlot}
                  onChange={(e) => setDateSlot(e.target.value)}
                  className="bg-[#111317] border border-white/[0.1] rounded-lg px-4 py-3 text-xs text-white focus:outline-none focus:border-[#caf300]"
                >
                  <option value="Saturday • 10:00 AM (Sector A-01)">Saturday • 10:00 AM (Sector A-01)</option>
                  <option value="Saturday • 02:00 PM (Sector A-01)">Saturday • 02:00 PM (Sector A-01)</option>
                  <option value="Sunday • 09:30 AM (Engine Lab B-04)">Sunday • 09:30 AM (Engine Lab B-04)</option>
                  <option value="Tuesday • 07:00 AM (Sector A-01)">Tuesday • 07:00 AM (Sector A-01)</option>
                </select>
              </div>

              {/* Athlete Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-['Space_Grotesk'] font-bold uppercase text-[#94a3b8]">
                    Athlete Name
                  </label>
                  <input
                    type="text"
                    required
                    value={athleteName}
                    onChange={(e) => setAthleteName(e.target.value)}
                    className="bg-[#111317] border border-white/[0.1] rounded-lg px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#caf300]"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-['Space_Grotesk'] font-bold uppercase text-[#94a3b8]">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={athleteEmail}
                    onChange={(e) => setAthleteEmail(e.target.value)}
                    className="bg-[#111317] border border-white/[0.1] rounded-lg px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#caf300]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#caf300] text-[#171e00] font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider py-3.5 rounded-lg hover:scale-[1.01] transition-transform cursor-pointer mt-2"
              >
                Confirm Assessment Reservation
              </button>
            </form>
          </div>
        ) : (
          /* Confirmation Receipt */
          <div className="flex flex-col gap-6 animate-in zoom-in-95 duration-200">
            <div className="w-12 h-12 rounded-full bg-[#caf300]/10 border border-[#caf300]/30 flex items-center justify-center text-[#caf300] mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>

            <div className="text-center">
              <span className="font-['Space_Grotesk'] text-xs font-bold uppercase tracking-widest text-[#caf300]">
                Diagnostic Confirmed
              </span>
              <h3 className="font-['Space_Grotesk'] text-2xl font-bold uppercase text-white mt-1">
                Assessment Scheduled
              </h3>
              <p className="text-xs text-[#94a3b8] mt-1">
                Your kinematic diagnostic session has been logged in the Aura Bio-Engine.
              </p>
            </div>

            <div className="bg-[#111317] p-5 rounded-xl border border-white/[0.08] flex flex-col gap-3 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-[#94a3b8]">Protocol:</span>
                <span className="font-['Space_Grotesk'] font-bold text-white uppercase text-right line-clamp-1">
                  {protocol}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#94a3b8]">Coach:</span>
                <span className="font-['Space_Grotesk'] font-bold text-[#caf300]">
                  {coach}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#94a3b8]">Schedule:</span>
                <span className="font-['Space_Grotesk'] font-bold text-white">
                  {dateSlot}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#94a3b8]">Athlete:</span>
                <span className="font-['Space_Grotesk'] font-bold text-white">
                  {athleteName}
                </span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="w-full bg-[#caf300] text-[#171e00] font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider py-3 rounded-lg hover:scale-[1.01] transition-transform cursor-pointer"
            >
              Done & Return to Arena
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
