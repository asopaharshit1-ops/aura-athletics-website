import React, { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

interface FooterProps {
  onNavigate: (screen: string) => void;
  onOpenDayPass: () => void;
  onOpenMemberPortal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenDayPass,
  onOpenMemberPortal
}) => {
  const [briefingEmail, setBriefingEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!briefingEmail) return;
    setSubscribed(true);
    setTimeout(() => {
      setBriefingEmail("");
      setSubscribed(false);
    }, 4000);
  };

  return (
    <footer className="w-full bg-[#0c0e11] border-t border-white/[0.08]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-16">
          {/* Brand Info */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img
                alt="Aura Athletics Logo"
                className="h-8 w-auto object-contain"
                src="https://lh3.googleusercontent.com/aida/AEtjO1XQUXgCZarM8LR-FGxb3-Whfau6C6rE83jKQXD0_YuFd5m99wEqLjgdC_0bx9bIvA5edhV7SVPryWMAoxSTMIvOTYzI5KfGsQSbfwXlOXzn7p9RIoMbqhk2yER396lE-OTj7SK3_oeojwih_s_HsMIp_HbJYNSwqX4m2l4KiZGPEYfujmxmdO1PbHVco3-Keu197kUL7fyPmCsTX9ZiKxU5qD3b4nQyqBZFkF8eMAblnnHtGJEGGB-SUw"
              />
              <span className="font-['Space_Grotesk'] text-xl font-bold tracking-tight uppercase text-white">
                Aura Athletics
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed max-w-sm">
              High-performance conditioning laboratory engineered for dedicated athletes and modern fitness purists. Precision biomechanics meets luxury physical discipline.
            </p>
            <div className="flex items-center gap-2 mt-1">
              <div className="w-2 h-2 rounded-full bg-[#caf300] animate-pulse" />
              <span className="font-['Space_Grotesk'] text-[10px] font-bold uppercase tracking-widest text-[#94a3b8]">
                Facility Status: Active 24/7 Operations
              </span>
            </div>
          </div>

          {/* Disciplines Column */}
          <div className="flex flex-col gap-3">
            <span className="font-['Space_Grotesk'] text-xs font-bold uppercase text-white tracking-wider">
              Disciplines
            </span>
            <button
              onClick={() => onNavigate("disciplines")}
              className="text-left text-xs text-[#94a3b8] hover:text-[#caf300] transition-colors cursor-pointer"
            >
              Hypertrophy & Power
            </button>
            <button
              onClick={() => onNavigate("disciplines")}
              className="text-left text-xs text-[#94a3b8] hover:text-[#caf300] transition-colors cursor-pointer"
            >
              Metabolic Pacing
            </button>
            <button
              onClick={() => onNavigate("disciplines")}
              className="text-left text-xs text-[#94a3b8] hover:text-[#caf300] transition-colors cursor-pointer"
            >
              Olympic Weightlifting
            </button>
            <button
              onClick={() => onNavigate("disciplines")}
              className="text-left text-xs text-[#94a3b8] hover:text-[#caf300] transition-colors cursor-pointer"
            >
              Precision Recovery
            </button>
            <button
              onClick={() => onNavigate("workouts-exercises")}
              className="text-left text-xs text-[#94a3b8] hover:text-[#caf300] transition-colors cursor-pointer font-semibold text-[#caf300]"
            >
              Movement Library →
            </button>
          </div>

          {/* Athletics Column */}
          <div className="flex flex-col gap-3">
            <span className="font-['Space_Grotesk'] text-xs font-bold uppercase text-white tracking-wider">
              Athletics
            </span>
            <button
              onClick={() => onNavigate("coaching")}
              className="text-left text-xs text-[#94a3b8] hover:text-[#caf300] transition-colors cursor-pointer"
            >
              Master Coaches
            </button>
            <button
              onClick={() => onNavigate("telemetry")}
              className="text-left text-xs text-[#94a3b8] hover:text-[#caf300] transition-colors cursor-pointer"
            >
              Biometric Telemetry
            </button>
            <button
              onClick={() => onNavigate("memberships")}
              className="text-left text-xs text-[#94a3b8] hover:text-[#caf300] transition-colors cursor-pointer"
            >
              Black Card Tier
            </button>
            <button
              onClick={onOpenMemberPortal}
              className="text-left text-xs text-[#94a3b8] hover:text-[#caf300] transition-colors cursor-pointer"
            >
              Member Portal
            </button>
            <button
              onClick={onOpenDayPass}
              className="text-left text-xs text-[#caf300] hover:underline transition-colors cursor-pointer font-bold"
            >
              Day Pass Access
            </button>
          </div>

          {/* Facility & Desk Column */}
          <div className="flex flex-col gap-2">
            <span className="font-['Space_Grotesk'] text-xs font-bold uppercase text-white tracking-wider">
              Facility & Desk
            </span>
            <div className="text-xs text-[#94a3b8]">Open Unrestricted: 24/7/365</div>
            <div className="text-xs text-[#94a3b8]">Concierge: 05:00 - 23:00</div>
            <div className="text-xs text-[#94a3b8] mt-1">AURA HQ: 440 Kinetic Way, Sector 4</div>
            <a
              href="mailto:ops@auraathletics.com"
              className="text-xs text-[#caf300] hover:underline transition-colors mt-0.5"
            >
              ops@auraathletics.com
            </a>
          </div>

          {/* Telemetry Briefing Column */}
          <div className="flex flex-col gap-3">
            <span className="font-['Space_Grotesk'] text-xs font-bold uppercase text-white tracking-wider">
              Telemetry Briefing
            </span>
            <p className="text-xs text-[#94a3b8] leading-relaxed">
              Weekly physiological research and movement briefings.
            </p>
            {subscribed ? (
              <div className="bg-[#1a1c1f] border border-[#caf300]/40 p-2.5 rounded-lg flex items-center gap-2 text-xs text-[#caf300]">
                <Check className="w-4 h-4 text-[#caf300]" />
                <span>Briefing dispatch confirmed.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex items-center gap-1.5">
                <input
                  type="email"
                  required
                  value={briefingEmail}
                  onChange={(e) => setBriefingEmail(e.target.value)}
                  placeholder="ATHLETE@AURA.IO"
                  className="w-full bg-[#1a1c1f] text-white text-xs px-3 py-2 rounded-lg border border-white/[0.08] focus:outline-none focus:border-[#caf300] placeholder:text-[#94a3b8]"
                />
                <button
                  type="submit"
                  aria-label="Subscribe to briefing"
                  className="bg-[#282a2d] text-white hover:bg-[#caf300] hover:text-[#171e00] p-2 rounded-lg transition-colors cursor-pointer shrink-0"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Legal Row */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-['Space_Grotesk'] text-[10px] font-bold uppercase tracking-widest text-[#94a3b8]">
            © 2025 AURA ATHLETICS GROUP. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="font-['Space_Grotesk'] text-[10px] font-bold uppercase tracking-widest text-[#94a3b8] hover:text-white transition-colors">
              Privacy Policy
            </a>
            <button onClick={() => onNavigate("memberships")} className="font-['Space_Grotesk'] text-[10px] font-bold uppercase tracking-widest text-[#94a3b8] hover:text-white transition-colors cursor-pointer">
              Terms of Conditioning
            </button>
            <button onClick={() => onNavigate("telemetry")} className="font-['Space_Grotesk'] text-[10px] font-bold uppercase tracking-widest text-[#94a3b8] hover:text-white transition-colors cursor-pointer">
              System Status
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
