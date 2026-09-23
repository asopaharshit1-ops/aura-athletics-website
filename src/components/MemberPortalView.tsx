import React, { useState } from "react";
import { User, QrCode, Shield, CheckCircle2, Calendar, Award, Activity, Key, Dumbbell } from "lucide-react";

export const MemberPortalView: React.FC = () => {
  const [scanStatus, setScanStatus] = useState<string | null>(null);

  const handleSimulateScan = () => {
    setScanStatus("AUTHENTICATING...");
    setTimeout(() => {
      setScanStatus("ACCESS GRANTED • TURNSTILE 01 UNLOCKED");
      setTimeout(() => {
        setScanStatus(null);
      }, 3500);
    }, 600);
  };

  const personalRecords = [
    { movement: "Olympic Clean & Jerk", weight: "165 KG", velocity: "1.28 m/s", date: "Sep 14, 2025" },
    { movement: "Barbell Back Squat", weight: "220 KG", velocity: "0.58 m/s", date: "Aug 29, 2025" },
    { movement: "Conventional Deadlift", weight: "265 KG", velocity: "0.44 m/s", date: "Aug 11, 2025" },
    { movement: "2,000m SkiErg Test", weight: "6:42.1", velocity: "1:40.5 split", date: "Sep 02, 2025" }
  ];

  return (
    <div className="w-full min-h-screen bg-[#111317] pt-24 pb-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/[0.08]">
          <div className="flex flex-col gap-2 max-w-2xl">
            <div className="flex items-center gap-2 text-[#caf300] font-['Space_Grotesk'] text-xs font-bold uppercase tracking-widest">
              <span>[ MODULE 06 ]</span>
              <span>•</span>
              <span>ATHLETE PROFILE & ENCRYPTED CREDENTIAL</span>
            </div>
            <h1 className="font-['Space_Grotesk'] text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white">
              Athlete Member Console
            </h1>
            <p className="text-sm sm:text-base text-[#94a3b8] leading-relaxed">
              Real-time RFID/NFC keycard credentials, session logs, verified PR velocity records, and biometric coach telemetry sync.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="px-3.5 py-1.5 rounded-full bg-[#caf300]/10 border border-[#caf300]/30 text-[#caf300] font-['Space_Grotesk'] text-xs font-bold uppercase">
              Tier 02 • Pro Athlete Active
            </div>
          </div>
        </div>

        {/* 2-Column Split: Digital Keycard vs Records & Sessions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Digital Keycard */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-[#1e2023] rounded-2xl p-6 sm:p-8 border border-white/[0.08] shadow-2xl flex flex-col gap-6">
              <span className="font-['Space_Grotesk'] text-[10px] font-bold uppercase tracking-widest text-[#caf300]">
                Digital Turnstile Keycard
              </span>

              {/* Physical Card Representation */}
              <div className="relative w-full aspect-[1.58/1] rounded-2xl bg-gradient-to-br from-[#282a2d] via-[#1a1c1f] to-[#0c0e11] p-6 sm:p-7 flex flex-col justify-between shadow-2xl border border-white/[0.15] overflow-hidden group">
                {/* Subtle volt hairline accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#caf300] via-[#d4ff00] to-transparent" />
                <div className="absolute -right-16 -bottom-16 w-48 h-48 bg-[#caf300]/10 rounded-full blur-3xl pointer-events-none" />

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img
                      alt="Aura Logo"
                      className="h-6 w-auto object-contain"
                      src="https://lh3.googleusercontent.com/aida/AEtjO1XQUXgCZarM8LR-FGxb3-Whfau6C6rE83jKQXD0_YuFd5m99wEqLjgdC_0bx9bIvA5edhV7SVPryWMAoxSTMIvOTYzI5KfGsQSbfwXlOXzn7p9RIoMbqhk2yER396lE-OTj7SK3_oeojwih_s_HsMIp_HbJYNSwqX4m2l4KiZGPEYfujmxmdO1PbHVco3-Keu197kUL7fyPmCsTX9ZiKxU5qD3b4nQyqBZFkF8eMAblnnHtGJEGGB-SUw"
                    />
                    <span className="font-['Space_Grotesk'] text-sm font-bold uppercase tracking-tight text-white">
                      Aura Athletics
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#0c0e11]/80 border border-white/[0.1] text-[10px] font-['Space_Grotesk'] font-bold text-[#caf300]">
                    <Key className="w-3 h-3" />
                    <span>NFC ACTIVE</span>
                  </div>
                </div>

                {/* Card Middle: Chip & Identity */}
                <div className="flex items-center justify-between py-2">
                  <div className="flex flex-col">
                    <span className="font-['Space_Grotesk'] text-[10px] uppercase text-[#94a3b8] tracking-widest">
                      Athlete Name
                    </span>
                    <h3 className="font-['Space_Grotesk'] text-xl sm:text-2xl font-bold uppercase text-white tracking-wide">
                      Marcus Kane
                    </h3>
                  </div>

                  {/* Micro Chip Graphic */}
                  <div className="w-10 h-8 rounded bg-gradient-to-tr from-amber-200/80 to-amber-400/80 border border-amber-300 flex items-center justify-center shadow-inner">
                    <div className="w-6 h-5 border border-amber-600/50 rounded-xs grid grid-cols-2 gap-0.5 opacity-60">
                      <div className="border-r border-amber-600/50" />
                      <div />
                    </div>
                  </div>
                </div>

                {/* Card Bottom */}
                <div className="flex items-end justify-between pt-2 border-t border-white/[0.08]">
                  <div>
                    <span className="font-['Space_Grotesk'] text-[9px] uppercase text-[#94a3b8] tracking-widest block">
                      Credential ID
                    </span>
                    <span className="font-mono text-xs font-bold text-[#caf300] tracking-wider">
                      AUR-8942-PRO
                    </span>
                  </div>

                  <div className="text-right">
                    <span className="font-['Space_Grotesk'] text-[9px] uppercase text-[#94a3b8] tracking-widest block">
                      Access Matrix
                    </span>
                    <span className="font-['Space_Grotesk'] text-xs font-bold text-white uppercase">
                      24/7/365 Unlimited
                    </span>
                  </div>
                </div>
              </div>

              {/* Turnstile Test Simulator Button */}
              <div className="flex flex-col gap-2">
                <button
                  onClick={handleSimulateScan}
                  className="w-full bg-[#1a1c1f] hover:bg-[#caf300] hover:text-[#171e00] text-white font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider py-3.5 rounded-lg border border-white/[0.08] hover:border-transparent transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <QrCode className="w-4 h-4" />
                  <span>Simulate Gate Keycard Scan</span>
                </button>

                {scanStatus && (
                  <div className="p-3 bg-[#caf300]/10 border border-[#caf300] rounded-lg text-center font-['Space_Grotesk'] text-xs font-bold text-[#caf300] uppercase animate-in fade-in duration-200">
                    {scanStatus}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Personal Bests & Session Logs */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* PR Velocity Board */}
            <div className="bg-[#1e2023] rounded-2xl p-6 sm:p-8 border border-white/[0.08] shadow-2xl flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-['Space_Grotesk'] text-[10px] font-bold uppercase tracking-widest text-[#caf300]">
                    Verified Kinematic Milestones
                  </span>
                  <h3 className="font-['Space_Grotesk'] text-xl font-bold uppercase text-white mt-0.5">
                    Personal Record Velocity Log
                  </h3>
                </div>
                <Award className="w-5 h-5 text-[#caf300]" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {personalRecords.map((pr, idx) => (
                  <div key={idx} className="bg-[#1a1c1f] p-4 rounded-xl border border-white/[0.05] flex flex-col justify-between">
                    <div className="flex items-center justify-between text-[#94a3b8] text-xs">
                      <span>{pr.date}</span>
                      <span className="font-['Space_Grotesk'] text-[#caf300] font-bold text-[10px]">
                        {pr.velocity}
                      </span>
                    </div>
                    <div className="mt-2">
                      <div className="font-['Space_Grotesk'] text-sm font-bold uppercase text-white">
                        {pr.movement}
                      </div>
                      <div className="font-['Space_Grotesk'] text-2xl font-bold text-[#caf300] mt-0.5">
                        {pr.weight}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Coach Assessment */}
            <div className="bg-[#1e2023] rounded-2xl p-6 sm:p-8 border border-white/[0.08] shadow-2xl flex flex-col gap-4">
              <span className="font-['Space_Grotesk'] text-[10px] font-bold uppercase tracking-widest text-[#caf300]">
                Active Booked Evaluation
              </span>
              <div className="bg-[#1a1c1f] p-5 rounded-xl border border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#282a2d] flex items-center justify-center text-[#caf300] border border-white/[0.08] shrink-0">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-['Space_Grotesk'] text-base font-bold uppercase text-white">
                      Quarterly Kinematic & VBT Review
                    </h4>
                    <p className="text-xs text-[#94a3b8]">
                      With Head Coach Elena Vance • Saturday at 10:00 AM • Pit 01
                    </p>
                  </div>
                </div>

                <div className="px-3 py-1.5 rounded bg-[#caf300]/10 border border-[#caf300]/30 text-center font-['Space_Grotesk'] text-xs font-bold text-[#caf300] uppercase shrink-0">
                  Confirmed
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
